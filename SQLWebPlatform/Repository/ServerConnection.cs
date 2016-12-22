using NDatabase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SQLWebPlatform.Repository
{
    public class ServerConnection 
    {
        public static string DatabasePath { get { return @"e:\1\SQLServerClient.db"; } }

        public static void Add(Models.ServerConnection serverConnection)
        {
            using (var odb = OdbFactory.Open(DatabasePath))
            {
                odb.Store(serverConnection);
            }
        }

        public static Models.ServerConnection Get(string serverName)
        {
            return Get().FirstOrDefault(it => it.ServerName == serverName);
        }

        public static IEnumerable<Models.ServerConnection> Get()
        {
            using (var odb = OdbFactory.Open(DatabasePath))
            {
                return odb.QueryAndExecute<Models.ServerConnection>();
            }
        }
    } 
}