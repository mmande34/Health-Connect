import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow">
        <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
          {/* Logo / Title */}
          <div className="text-xl font-bold text-blue-600">HealthConnect</div>

          {/* Links */}
          <div className="flex gap-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/trials"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }`
              }
            >
              Trials
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                }`
              }
            >
              About
            </NavLink>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-1 max-w-5xl mx-auto p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto p-4 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} HealthConnect
      </footer>
    </div>
  );
}
