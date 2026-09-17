using System.Text.Json.Nodes;

namespace ApiGateway.Helpers;

public sealed class SwaggerEndPointGroup
{
    public string Key { get; set; } = "";
    public List<SwaggerEndPointConfig> Config { get; set; } = [];
}

public sealed class SwaggerEndPointConfig
{
    public string Name { get; set; } = "";
    public string Version { get; set; } = "";
    public string Url { get; set; } = "";
}

public static class SwaggerMergeHelper
{
    public static List<SwaggerEndPointConfig> GetSwaggerSources(IConfiguration configuration) =>
        configuration
            .GetSection("SwaggerEndPoints")
            .Get<List<SwaggerEndPointGroup>>()
            ?.Select(g => g.Config.FirstOrDefault())
            .Where(c => c is not null)
            .Select(c => c!)
            .ToList() ?? [];

    public static async Task<string> BuildMergedSwaggerDocumentAsync(
        HttpClient client,
        IEnumerable<SwaggerEndPointConfig> sources
    )
    {
        var merged = new JsonObject
        {
            ["openapi"] = "3.0.1",
            ["info"] = new JsonObject
            {
                ["title"] = "eCommerce API Gateway - All Services",
                ["version"] = "v1",
            },
            ["paths"] = new JsonObject(),
            ["components"] = new JsonObject { ["schemas"] = new JsonObject() },
        };

        foreach (var source in sources)
        {
            var json = await client.GetStringAsync(source.Url);
            var doc = JsonNode.Parse(json)!.AsObject();

            MergeSection(doc["paths"] as JsonObject, merged["paths"]!.AsObject());
            MergeSection(
                doc["components"]?["schemas"] as JsonObject,
                merged["components"]!["schemas"]!.AsObject()
            );
        }

        return merged.ToJsonString();
    }

    private static void MergeSection(JsonObject? source, JsonObject destination)
    {
        if (source is null)
            return;

        foreach (var key in source.Select(p => p.Key).ToList())
        {
            var value = source[key];
            source.Remove(key);
            destination[key] = value;
        }
    }
}
