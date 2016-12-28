using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace SQLWebPlatform.Repository
{
    public static class Server
    {
        public static IEnumerable<Models.Database> GetDatabases(SqlConnection conn)
        {
            conn.Open();
            DataTable databases = conn.GetSchema("Databases");
            var result = new List<Models.Database>();
            foreach (DataRow database in databases.Rows)
            {
                var databaseModel = new Models.Database();
                databaseModel.Name = database.Field<String>("database_name");
                databaseModel.ID = database.Field<short>("dbid");
                databaseModel.CreationDate = database.Field<DateTime>("create_date");
                result.Add(databaseModel);
            }

            conn.Close();
            return result.OrderBy(it => it.Name);
        }
    }
}