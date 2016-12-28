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
        public string ServerName { get; set; }
        public ServerConnection ConnectionInfo { get; set; }
    }
}