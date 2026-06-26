import { Link, useLocation } from "react-router-dom";
import {
  Home,
  FolderKanban,
  Users,
  MessageSquare,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <Home size={20} />,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: <FolderKanban size={20} />,
  },
  {
    name: "Community",
    path: "/community",
    icon: <Users size={20} />,
  },
  {
    name: "Messages",
    path: "/messages",
    icon: <MessageSquare size={20} />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings size={20} />,
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 h-screen bg-slate-900 border-r border-slate-800 text-white flex flex-col">
      <div className="text-3xl font-bold text-indigo-400 p-6">
        DevCollab
      </div>

      <nav className="flex-1 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
              location.pathname === item.path
                ? "bg-indigo-600"
                : "hover:bg-slate-800"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}