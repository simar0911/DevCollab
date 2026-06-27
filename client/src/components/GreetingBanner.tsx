export default function GreetingBanner() {
  const hour = new Date().getHours();

  let greeting = "Hello";

  if (hour < 12) greeting = "Good Morning ☀️";
  else if (hour < 18) greeting = "Good Afternoon 🌤️";
  else greeting = "Good Evening 🌙";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 p-8 shadow-2xl">
      <div className="relative z-10">
        <p className="text-indigo-100 text-sm tracking-wide uppercase">
          Welcome back
        </p>

        <h1 className="text-4xl font-bold text-white mt-2">
          {greeting}, Simar 👋
        </h1>

        <p className="text-indigo-100 mt-3 max-w-xl">
          Ready to build something amazing today? Check your projects,
          connect with developers, and keep your coding streak alive.
        </p>

        <button className="mt-6 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition duration-300">
          Explore Projects →
        </button>
      </div>

      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute right-20 bottom-0 h-40 w-40 rounded-full bg-indigo-300/20 blur-2xl"></div>
    </div>
  );
}