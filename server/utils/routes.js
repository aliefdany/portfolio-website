import Contacts from "../../dist-server/ui/js/page/Contacts";
import Homepage from "../../dist-server/ui/js/page/Homepage";
import Project from "../../dist-server/ui/js/page/Project";

const routes = [
  {
    path: "/project",
    exact: true,
    component: Project,
  },
  {
    path: "/contacts",
    exact: true,
    component: Contacts,
  },
  {
    path: "/",
    exact: true,
    component: Homepage,
  },
];

export default routes;
