using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace SQLWebPlatform.Repository
{
    public static class Database
    {
        public static SqlConnection DatabaseConnection { get; set; }
        
        internal static Models.Database Get(string databaseName, Models.Server server)
        {
            var connString = GetConnectionString(server.ConnectionInfo.Server, databaseName, server.ConnectionInfo.Logon, server.ConnectionInfo.Password);
            var sqlConnection = new SqlConnection(connString);
            sqlConnection.Open();

            var database = new Models.Database { Name = databaseName, Tables = new List<Models.Table>() };

            foreach (DataRow table in sqlConnection.GetSchema("Tables").Rows)
            {
                var tableModel = new Models.Table();
                tableModel.Name = table.Field<String>("table_name");
                //tableModel.ID = table.Field<short>("object_id");

                database.Tables.Add(tableModel);
            }

            sqlConnection.Close();
            return database;
        }

        private static string GetConnectionString(string server, string database, string logon, string password)
        {
            return string.Format("Server={0};Database={1};User Id={2};Password={3};", server, database, logon, password);
        }
    }
}