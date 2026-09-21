using BusinessLogicLayer.HttpClients;
using BusinessLogicLayer.Policies;
using eCommerce.OrderMicroservice.BusinessLogicLayer;
using eCommerce.OrderMicroservice.DataAccessLayer;
using eCommerce.OrdersMicroservice.API.Middleware;
using FluentValidation.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

//Add DAL and BLL services
builder.Services.AddDataAccessLayer(builder.Configuration);
builder.Services.AddBusinessLogicLayer(builder.Configuration);

builder.Services.AddControllers();

//FluentValidations
builder.Services.AddFluentValidationAutoValidation();

//Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Cors
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy
            .SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost")
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

var apiGatewayHost = builder.Configuration["ApiGateway:Host"];
var apiGatewayPort = builder.Configuration["ApiGateway:Port"];

builder.Services.AddTransient<IUserMicroservicePolicies, UserMicroservicePolicies>();
builder
    .Services.AddHttpClient<UsersMicroserviceClient>(client =>
    {
        client.BaseAddress = new Uri($"http://{apiGatewayHost}:{apiGatewayPort}");
    })
    .AddPolicyHandler(
        builder
            .Services.BuildServiceProvider()
            .GetRequiredService<IUserMicroservicePolicies>()
            .GetRetryPolicy()
    )
    .AddPolicyHandler(
        builder
            .Services.BuildServiceProvider()
            .GetRequiredService<IUserMicroservicePolicies>()
            .GetCircuitBreakerPolicy()
    );

builder.Services.AddHttpClient<ProductMicroserviceClient>(client =>
{
    client.BaseAddress = new Uri($"http://{apiGatewayHost}:{apiGatewayPort}");
});
var app = builder.Build();

app.UseExceptionHandlingMiddleware();
app.UseRouting();

//Cors
app.UseCors();

//Swagger
app.UseSwagger();
app.UseSwaggerUI();

//Auth
if (!app.Environment.IsDevelopment())
    app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

//Endpoints
app.MapControllers();

app.Run();
