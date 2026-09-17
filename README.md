# eCommerce Microservices

A microservices-based e-commerce system: independent Users, Orders and Products services behind an API Gateway, backed by PostgreSQL, MongoDB and Redis. Everything runs via Docker Compose.

## Architecture

| Service         | Tech                          | Port (host) | Storage                     |
|------------------|-------------------------------|--------------|------------------------------|
| ApiGateway       | ASP.NET Core + Ocelot         | 5090         | -                            |
| UsersService     | ASP.NET Core                  | 5025         | PostgreSQL (`users-postgres`)   |
| OrdersService    | ASP.NET Core                  | 5080         | MongoDB (`mongodb`) + Redis cache |
| ProductsService  | ASP.NET Core                  | 5081         | PostgreSQL (`products-postgres`) |

All services share the `ecommerce-network` Docker network, and OrdersService calls UsersService and ProductsService directly (over that network) to enrich orders with user/product data.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Docker Compose)
- Ports `5025`, `5080`, `5081`, `5090`, `5433`, `5434`, `6379`, `27017` free on your machine

No local .NET SDK, database, or Redis installation is required — Docker builds and runs everything.

## Getting started

1. Clone the repo and move into it:
   ```bash
   cd Ecomerce
   ```

2. Build and start every service in the background:
   ```bash
   docker compose up -d --build
   ```

   First run downloads base images and restores NuGet packages, so it can take a few minutes. Subsequent runs are much faster thanks to Docker layer caching.

3. Check everything is up and healthy:
   ```bash
   docker compose ps
   ```

   Postgres/Mongo containers report `(healthy)`, and each `*service` container should show `Up`.

4. Explore the APIs (each service exposes Swagger UI):
   - Users: http://localhost:5025/swagger
   - Orders: http://localhost:5080/swagger
   - Products: http://localhost:5081/swagger
   - Gateway: http://localhost:5090 (Ocelot routing, no Swagger UI yet)

## Everyday commands

```bash
# View logs for one service (follow mode)
docker compose logs -f ordersservice

# Rebuild + restart a single service after code changes
docker compose up -d --build ordersservice

# Stop everything (containers stay, state is kept)
docker compose stop

# Stop and remove containers (data volumes are kept)
docker compose down

# Stop and wipe all data (Postgres/Mongo/Redis volumes too)
docker compose down -v
```

## Data persistence

Database data lives in named Docker volumes (`products-postgres-data`, `users-postgres-data`, `orders-mongo-data`, `redis-data`), so your data survives `docker compose down` — use `docker compose down -v` if you want a completely clean slate.

Initial schema/seed scripts are mounted from `./ProductsDb`, `./UsersDb`, and `./OrdersDb` into each database's `docker-entrypoint-initdb.d`, and only run the **first time** a database container initializes its volume.

## Project layout

```
Ecomerce/
├── ApiGateway/        # API Gateway (Ocelot)
├── UsersService/      # Users microservice (+ Postgres)
├── OrdersService/     # Orders microservice (+ MongoDB, Redis cache)
├── ProductsService/    # Products microservice (+ Postgres)
├── UsersDb/           # Users DB init scripts
├── OrdersDb/          # Orders DB init scripts
├── ProductsDb/        # Products DB init scripts
└── docker-compose.yml
```

## Troubleshooting

- **Port already in use**: another process (or a previous run) is holding one of the ports above. Find and stop it, or change the host-side port mapping in `docker-compose.yml`.
- **A service won't start / restarts in a loop**: check its logs — `docker compose logs -f <service-name>`.
- **Stale build after a code change didn't take effect**: force a rebuild with `docker compose up -d --build <service-name>`.
