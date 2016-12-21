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
        // GET api/serverconnection
        public IEnumerable<ServerConnection> Get()
        {
            try
            {
                using (var odb = OdbFactory.Open(@"e:\1\SQLServerClient.db"))
                {
                    return odb.QueryAndExecute<ServerConnection>();
                }
            }
            catch (Exception ex)
            {
                Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
                throw;
            }
        }

        // GET api/serverconnection/5
        public ServerConnection Get(int id)
        {
            return new ServerConnection();
        }

        // POST api/serverconnection
        public HttpResponseMessage  Post([FromBody]ServerConnection value)
        {
            try
            {
                using (var odb = OdbFactory.Open(@"e:\1\SQLServerClient.db"))
                {
                    odb.Store(value);
                }
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
