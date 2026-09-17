FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY ["ApiGetawey.csproj", "./"]

RUN dotnet restore "ApiGetawey.csproj"

COPY . .

RUN dotnet build "ApiGetawey.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ApiGetawey.csproj" -c Release -o /app/publish --no-restore

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ApiGetawey.dll"]
