export default function RecentProjects() {
  const projects = [
    {
      name: "DevCollab",
      status: "In Progress",
      tech: "React • Node • SQLite",
    },
    {
      name: "Portfolio Website",
      status: "Completed",
      tech: "React • Tailwind",
    },
    {
      name: "AI Resume Builder",
      status: "Planning",
      tech: "Next.js • OpenAI",
    },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Recent Projects
      </h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition"
          >
            <h3 className="text-white font-semibold">
              {project.name}
            </h3>

            <p className="text-indigo-400">
              {project.status}
            </p>

            <p className="text-gray-400 text-sm">
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}