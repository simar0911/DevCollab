interface Collaborator {
  name: string;
  role: string;
  skills: string;
}

const collaborators: Collaborator[] = [
  {
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    skills: "React • Node.js • MongoDB",
  },
  {
    name: "Priya Singh",
    role: "UI/UX Designer",
    skills: "Figma • Adobe XD",
  },
  {
    name: "Aman Gupta",
    role: "ML Engineer",
    skills: "Python • TensorFlow",
  },
];

export default function CollaboratorCard() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 h-full">
      <h2 className="text-2xl font-bold text-white mb-6">
        Recommended Collaborators
      </h2>

      <div className="space-y-4">
        {collaborators.map((person) => (
          <div
            key={person.name}
            className="bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold">{person.name}</h3>
                <p className="text-indigo-400 text-sm">{person.role}</p>
                <p className="text-gray-400 text-sm mt-1">
                  {person.skills}
                </p>
              </div>

              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-2 rounded-lg">
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}