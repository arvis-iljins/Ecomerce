using ApiGateway.Helpers;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("ocelot.json", optional: false, reloadOnChange: true);
builder.Services.AddOcelot(builder.Configuration);
builder.Services.AddHttpClient();

var swaggerSources = SwaggerMergeHelper.GetSwaggerSources(builder.Configuration);

var app = builder.Build();

app.Map(
    "/swagger/v1/swagger.json",
    swaggerApp =>
        swaggerApp.Run(async context =>
        {
            var httpClientFactory = context.RequestServices.GetRequiredService<IHttpClientFactory>();
            var client = httpClientFactory.CreateClient();
            var mergedJson = await SwaggerMergeHelper.BuildMergedSwaggerDocumentAsync(
                client,
                swaggerSources
            );

            context.Response.ContentType = "application/json";
            await context.Response.WriteAsync(mergedJson);
        })
);

app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "eCommerce API - All Services");
    c.RoutePrefix = string.Empty;
});

await app.UseOcelot();

app.Run();
