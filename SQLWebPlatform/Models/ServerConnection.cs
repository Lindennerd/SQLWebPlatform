using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SQLWebPlatform.Models
{
    public enum AuthenticationType
    { 
        Windows, SQLServer
    }

    public class ServerConnection
    {
        public string ServerName { get; set; }
        public string Server { get; set; }
        public AuthenticationType AuthenticationType { get; set; }
        public string Logon { get; set; }
        public string Password { get; set; }

        internal string GetConnectionString()
        {
            return string.Format("Data Source={0};User Id={1};Password={2};", Server, Logon, Password);
        }
    }
}