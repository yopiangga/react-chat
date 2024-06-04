import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "src/layouts";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/*" element={<DashboardLayout />} />
          <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
