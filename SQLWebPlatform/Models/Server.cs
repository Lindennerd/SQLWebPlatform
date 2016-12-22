using System;
using System.Linq;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace SQLWebPlatform.Models
{
    public class Server
    {
        public SqlConnection Connection { get; set; }

        internal IEnumerable<Models.Database> GetDatabases()
        {
            this.Connection.Open();
            DataTable databases = this.Connection.GetSchema("Databases");
            var result = new List<Database>();
            foreach (DataRow database in databases.Rows)
            {
                var databaseModel = new Models.Database();
                databaseModel.Name = database.Field<String>("database_name");
                databaseModel.ID = database.Field<short>("dbid");
                databaseModel.CreationDate = database.Field<DateTime>("create_date");
                result.Add(databaseModel);
            }

            return result;
        }
    }
}