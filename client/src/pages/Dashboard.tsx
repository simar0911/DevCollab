export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="flex">

        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-slate-900 p-6">

          <h1 className="text-2xl font-bold text-blue-500 mb-10">
            DevCollab
          </h1>

          <div className="space-y-4">
            <p>📊 Dashboard</p>
            <p>🚀 Projects</p>
            <p>💬 Messages</p>
            <p>👤 Profile</p>
            <p>⚙️ Settings</p>
          </div>

        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">

          <h1 className="text-4xl font-bold mb-8">
            Welcome Back, Simar 👋
          </h1>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-900 p-6 rounded-2xl">
              <h2 className="text-3xl font-bold">12</h2>
              <p className="text-gray-400">Projects Joined</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl">
              <h2 className="text-3xl font-bold">4</h2>
              <p className="text-gray-400">Projects Created</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl">
              <h2 className="text-3xl font-bold">28</h2>
              <p className="text-gray-400">Connections</p>
            </div>
            <div className="mt-10">
  <h2 className="text-2xl font-bold mb-6">
    Recent Projects
  </h2>

  <div className="space-y-4">

    <div className="bg-slate-900 p-5 rounded-2xl">
      <h3 className="font-semibold text-lg">
        AI Resume Analyzer
      </h3>
      <p className="text-gray-400">
        Looking for Frontend Developers
      </p>
    </div>

    <div className="bg-slate-900 p-5 rounded-2xl">
      <h3 className="font-semibold text-lg">
        Campus Event Finder
      </h3>
      <p className="text-gray-400">
        Looking for Backend Developers
      </p>
    </div>

    <div className="bg-slate-900 p-5 rounded-2xl">
      <h3 className="font-semibold text-lg">
        Code Mentor Platform
      </h3>
      <p className="text-gray-400">
        Looking for UI/UX Designers
      </p>
    </div>

  </div>
</div>

          </div>

        </div>

      </div>

    </div>
  );
}