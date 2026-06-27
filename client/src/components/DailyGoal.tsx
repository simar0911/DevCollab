export default function DailyGoal() {
  const completed = 3;
  const total = 5;

  const progress = (completed / total) * 100;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
      <h2 className="text-xl font-bold text-white">
        🎯 Today's Goal
      </h2>

      <p className="text-slate-400 mt-2">
        Finish your daily development tasks.
      </p>

      <div className="mt-6">
        <div className="flex justify-between text-sm text-slate-300 mb-2">
          <span>
            {completed}/{total} Tasks Completed
          </span>

          <span>{progress}%</span>
        </div>

        <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between bg-slate-800 rounded-2xl p-4">
        <div>
          <p className="text-white font-semibold">
            🔥 12 Day Streak
          </p>

          <p className="text-slate-400 text-sm">
            Keep committing every day!
          </p>
        </div>

        <div className="text-4xl">🔥</div>
      </div>
    </div>
  );
}