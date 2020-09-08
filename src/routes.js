import Home from "./screens/Home";
import Details from "./screens/Details";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/films/:filmId/details",
    component: Details,
    exact: false,
  },
];
