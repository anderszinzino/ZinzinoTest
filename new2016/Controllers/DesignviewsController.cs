using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace new2016.Controllers
{
    public class DesignviewsController : Controller
    {
        // GET: Designviews
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult FrontPage()
        {
            ViewBag.Message = "Front Page";

            return View();
        }

        public ActionResult FrontPagePartner()
        {
            ViewBag.Message = "Front Page Partner";

            return View();
        }
        public ActionResult Products()
        {
            ViewBag.Message = "Products";

            return View();
        }
        public ActionResult ProductsDetail()
        {
            ViewBag.Message = "Products Detail";

            return View();
        }
        public ActionResult Elements()
        {
            ViewBag.Message = "Elements";

            return View();
        }
        public ActionResult Cart()
        {
            ViewBag.Message = "Cart";

            return View();
        }
        public ActionResult ModalCollection()
        {
            ViewBag.Message = "Modal Collection";

            return View();
        }
        public ActionResult ContentPage()
        {
            ViewBag.Message = "Content Page";

            return View();
        }
        public ActionResult CompleteRegistration()
        {
            ViewBag.Message = "Complete Registration";

            return View();
        }
        public ActionResult CompleteOrder()
        {
            ViewBag.Message = "Complete Order";

            return View();
        }
        public ActionResult YourAccount()
        {
            ViewBag.Message = "Your account";

            return View();
        }
        public ActionResult YourDetails()
        {
            ViewBag.Message = "Your details";

            return View();
        }
        public ActionResult YourOrders()
        {
            ViewBag.Message = "Your orders";

            return View();
        }
        public ActionResult AutoOrderPreferences()
        {
            ViewBag.Message = "AutoOrder Preferences";

            return View();
        }
        public ActionResult Calendar()
        {
            ViewBag.Message = "Calendar";

            return View();
        }
    }


}