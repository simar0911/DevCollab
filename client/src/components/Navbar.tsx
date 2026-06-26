import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between bg-slate-900 rounded-2xl p-5 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Welcome back 👋
        </h1>
        <p className="text-gray-400">
          Let's build something amazing today.
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center bg-slate-800 px-4 py-2 rounded-xl">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-white"
          />
        </div>

        <Bell className="text-white cursor-pointer" size={24} />

        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white">
          S
        </div>
      </div>
    </header>
  );
}