import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Manga", path: "/Manga" },
    { name: "Anime", path: "/Anime" },
  ];

  return (  
    <header
      className="bg-slate-800/95 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-slate-700/50"
    >
      <div className="max-w-7xl mx-auto flex items-center h-16 px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white tracking-wide">AnimeARC</h1>

        {/* Menu */}
        <nav className="flex-1 flex justify-center space-x-8 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-all duration-200 ${
                pathname === item.path
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
