using NDatabase;
using SQLWebPlatform.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SQLWebPlatform.Controllers
{
    public class ServerConnectionController : ApiController
    {
        public IEnumerable<ServerConnection> Get()
        {
            try
            {
                return Repository.ServerConnection.Get();
            }
            catch (Exception ex)
            {
                Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
                return null;
            }
        }

        public ServerConnection Get(string name)
        {
            try
            {
                return Repository.ServerConnection.Get(name);
            }
            catch (Exception ex)
            {
                Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
                return null;
            }
        }

        public HttpResponseMessage  Post([FromBody]ServerConnection value)
        {
            try
            {
                Repository.ServerConnection.Add(value);
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }

        }

        // PUT api/serverconnection/5
        public void Put(int id, [FromBody]ServerConnection value)
        {
        }

        // DELETE api/serverconnection/5
        public void Delete(int id)
        {
        }
    }
}
