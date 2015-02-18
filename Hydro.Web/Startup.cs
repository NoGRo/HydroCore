using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Hydro.Web.Startup))]
namespace Hydro.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
