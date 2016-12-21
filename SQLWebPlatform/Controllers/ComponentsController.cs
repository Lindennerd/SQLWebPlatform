using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SQLWebPlatform.Controllers
{
    public class ComponentsController : Controller
    {
        public ActionResult ServerComponent()
        {
            return PartialView("~/Views/Components/Server.cshtml");
        }

        public ActionResult FormComponent()
        {
            return PartialView("~/Views/Components/Form.cshtml");
        }

        public ActionResult SelectableListComponent()
        {
            return PartialView("~/Views/Components/SelectableList.cshtml");
        }
    }
}
