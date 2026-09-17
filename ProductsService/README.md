# ProductsService

Handles the product catalog — create, read, update, and delete products.

## Stack

- .NET 10
- FluentValidation
- AutoMapper

## Run

```bash
cd eCommerceProducts.Api
dotnet run
```

Swagger: **http://localhost:5081/swagger**

## Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/api/products` | Get all products |
| GET | `/api/products/{id}` | Get product by ID |
| POST | `/api/products` | Create product |
| PUT | `/api/products/{id}` | Update product |
| DELETE | `/api/products/{id}` | Delete product |

## Project Structure

```
ProductsService/
├── eCommerceProducts.Api/  # Controllers, Program.cs
├── BusinessLogicLayer/     # DTOs, services, validators
└── DataAccessLayer/        # Repository
```
