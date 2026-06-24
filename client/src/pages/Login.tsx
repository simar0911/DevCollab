export default function Login() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="bg-slate-900 p-10 rounded-3xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-white mb-2">
          Welcome Back 👋
        </h1>

        <p className="text-gray-400 mb-8">
          Sign in to continue to DevCollab
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-xl bg-slate-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-xl bg-slate-800 text-white"
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
          Login
        </button>

      </div>

    </div>
  );
}