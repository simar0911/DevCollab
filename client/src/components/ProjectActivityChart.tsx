import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", projects: 2 },
  { day: "Tue", projects: 5 },
  { day: "Wed", projects: 3 },
  { day: "Thu", projects: 7 },
  { day: "Fri", projects: 4 },
  { day: "Sat", projects: 8 },
  { day: "Sun", projects: 6 },
];

export default function ProjectActivityChart() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Weekly Project Activity
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#334155" />

            <XAxis dataKey="day" stroke="#94a3b8" />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="projects"
              stroke="#6366f1"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}