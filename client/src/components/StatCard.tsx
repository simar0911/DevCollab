interface StatCardProps {
  title: string;
  value: string;
  color: string;
}

export default function StatCard({
  title,
  value,
  color,
}: StatCardProps) {
  return (
    <div
      className={`${color} rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300`}
    >
      <p className="text-white/80 text-sm">{title}</p>

      <h2 className="text-4xl font-bold text-white mt-3">
        {value}
      </h2>
    </div>
  );
}