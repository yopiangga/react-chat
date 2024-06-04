import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { SidebarContext } from "src/context/SidebarContext";
import { Route } from "src/routes";

export function Sidenav({
  brandName,
  routes,
}: {
  brandName: string;
  routes: Route[];
}) {
  const { openSidenav, handleSidenav } = useContext(SidebarContext);

  const { sidenavType } = {
    sidenavType: "white",
  };

  return (
    <aside
      className={`${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } bg-white shadow-sm fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
    >
      <div className={`relative`}>
        <Link to="/" className="py-6 px-8 text-center">
          <Typography
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
          >
            {brandName}
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="black"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => handleSidenav()}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-dark" />
        </IconButton>
      </div>
      <div className="m-4">
        {routes.map(({ layout, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {pages.map(({ icon, name, path, type }) =>
              type === "private" ? null : (
                <li key={name}>
                  <NavLink to={`/${layout}${path}`}>
                    {({ isActive }) => (
                      <Button
                        variant={isActive ? "gradient" : "text"}
                        className="flex items-center gap-4 px-4 capitalize"
                        fullWidth
                      >
                        {icon}
                        <Typography
                          color="inherit"
                          className="font-medium capitalize"
                        >
                          {name}
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        ))}
      </div>
    </aside>
  );
}

export default Sidenav;
