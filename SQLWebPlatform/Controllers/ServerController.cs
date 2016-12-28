using SQLWebPlatform.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SQLWebPlatform.Controllers
{
    public class ServerController : Controller
    {
        public JsonResult Connect(string serverName)
        {
            var serverConnInfo = Repository.ServerConnection.Get(serverName);
            var server = new Models.Server { 
                Connection = new SqlConnection(serverConnInfo.GetConnectionString()), 
                ServerName = serverName,
                ConnectionInfo = serverConnInfo,

            };
            Session.Add("ConnectedServer", server);
            return Json( new { databases = Repository.Server.GetDatabases(server.Connection) }, JsonRequestBehavior.AllowGet );
        }

        public JsonResult GetTables(string databaseName)
        {
            var server = Session["ConnectedServer"] as Models.Server;
            var databaseInfo = Repository.Database.Get(databaseName, server);
            return Json(new { data = databaseInfo.Tables }, JsonRequestBehavior.AllowGet);
        }

    }
}
