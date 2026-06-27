interface Project {
  title: string;
  description: string;
  tech: string[];
  members: number;
  status: string;
}

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{project.title}</h2>

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            project.status === "Open"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {project.status}
        </span>
      </div>

      <p className="text-slate-400 mt-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <p className="text-slate-400">
          👥 {project.members} Members
        </p>

        <button className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl font-medium transition">
          View
        </button>
      </div>
    </div>
  );
}