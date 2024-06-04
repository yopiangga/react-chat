import { Routes, Route } from "react-router-dom";
import { Sidenav, DashboardNavbar, Footer } from "src/widgets/layout";
import routes from "src/routes";
import { Toaster } from "react-hot-toast";

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav brandName="Prisma Dashboard" routes={routes} />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </div>
  );
}

export default DashboardLayout;
