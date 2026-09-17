using System.Data;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace DataAccessLayer.DbContext
{
    public class DapperDbContext
    {
        private readonly IConfiguration _configuration;
        private readonly IDbConnection _connection;

        public DapperDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
            string connectionString = (
                _configuration.GetConnectionString("PostgreSQL") ?? string.Empty
            )
                .Replace("$POSTGRES_HOST", _configuration["POSTGRES_HOST"])
                .Replace("$POSTGRES_PORT", _configuration["POSTGRES_PORT"])
                .Replace("$POSTGRES_DB", _configuration["POSTGRES_DB"])
                .Replace("$POSTGRES_USER", _configuration["POSTGRES_USER"])
                .Replace("$POSTGRES_PASSWORD", _configuration["POSTGRES_PASSWORD"]);

            _connection = new NpgsqlConnection(connectionString);
        }

        public IDbConnection Connection => _connection;
    }
}
