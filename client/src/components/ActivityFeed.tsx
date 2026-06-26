const activities = [
  {
    icon: "🚀",
    title: "Created a new project",
    time: "2 hours ago",
  },
  {
    icon: "🤝",
    title: "Rahul Sharma sent you a collaboration request",
    time: "5 hours ago",
  },
  {
    icon: "⭐",
    title: "Your project 'DevCollab' received a new star",
    time: "Yesterday",
  },
  {
    icon: "💬",
    title: "New message from Priya Singh",
    time: "2 days ago",
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl hover:bg-slate-700 transition"
          >
            <div className="text-3xl">{activity.icon}</div>

            <div className="flex-1">
              <p className="text-white">{activity.title}</p>
              <p className="text-gray-400 text-sm">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}