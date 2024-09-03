import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import UsersListPage from "@/pages/UsersListPage";
import CreateUserPage from "@/pages/CreateUserPage";

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes className="p-4">
            <Route path="/" element={<UsersListPage />} />
            <Route path="/create" element={<CreateUserPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default AppRoutes;
