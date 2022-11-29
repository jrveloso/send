// ----------------------------------------------------------------------

//this page defines constants we can access in our application

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "/";

//import path dashboard to prevent mistakes from just typing out url/app
//example PATH_DASHBOARD.general.app => "/" + "app" => /app
export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, "app"),
  },
};
