import { CalendarDays } from "lucide-react";

const deadlines = [
  {
    project: "DevCollab Backend",
    due: "Tomorrow",
    progress: 75,
  },
  {
    project: "Portfolio Website",
    due: "3 Days",
    progress: 45,
  },
  {
    project: "AI Resume Builder",
    due: "1 Week",
    progress: 20,
  },
];

export default function UpcomingDeadlines() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-6">
        <CalendarDays className="text-indigo-400" size={22} />
        <h2 className="text-xl font-bold text-white">
          Upcoming Deadlines
        </h2>
      </div>

      <div className="space-y-5">
        {deadlines.map((item) => (
          <div key={item.project}>
            <div className="flex justify-between mb-2">
              <div>
                <p className="text-white font-medium">
                  {item.project}
                </p>
                <p className="text-slate-400 text-sm">
                  Due {item.due}
                </p>
              </div>

              <span className="text-indigo-400 font-semibold">
                {item.progress}%
              </span>
            </div>

            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
