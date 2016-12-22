using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SQLWebPlatform.Controllers
{
    public class ComponentsController : Controller
    {
        public ActionResult CollapseComponent()
        {
            return PartialView("~/Views/Components/Collapse.cshtml");
        }

        public ActionResult FormComponent()
        {
            return PartialView("~/Views/Components/Form.cshtml");
        }

        public ActionResult SelectableListComponent()
        {
            return PartialView("~/Views/Components/SelectableList.cshtml");
        }

        public ActionResult DropdownComponent()
        {
            return PartialView("~/Views/Components/Dropdown.cshtml");
        }

        public ActionResult TreeViewComponent()
        {
            return PartialView("~/Views/Components/TreeView.cshtml");
        }
    }
}
