using System.Web;
using System.Web.Optimization;

namespace Hydro.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/min/jquery-bundle.min.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/min/modernizer-min.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/min/bootstrap-bundle.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/Site").Include(
                       "~/Scripts/sb-admin-2.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/dist/css/app.min.css"));
        }
    }
}
