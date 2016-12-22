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
            var server = new Models.Server { Connection = new SqlConnection(serverConnInfo.GetConnectionString()) };
            return Json( new { databases = server.GetDatabases() }, JsonRequestBehavior.AllowGet );
        }

    }
}
