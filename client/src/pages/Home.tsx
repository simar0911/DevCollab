import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold text-blue-500">
          DevCollab
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#">Features</a>
          <a href="#">Projects</a>
          <a href="#">Community</a>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex flex-col items-center justify-center text-center mt-32 px-6">

        <h1 className="text-6xl font-bold mb-6">
          Collaborate.
          <span className="text-blue-500"> Build.</span>
          Grow.
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl">
          Connect with developers, discover exciting projects,
          and build amazing products together.
        </p>

        <Link 
          to="/login"
          className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition"
   >
          Get Started
        </Link>

      </div>
      {/* Features Section */}
<section className="py-24 px-10">

  <h2 className="text-4xl font-bold text-center mb-12">
    Why Choose DevCollab?
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-slate-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-semibold mb-4">
        🤝 Find Teammates
      </h3>
      <p className="text-gray-400">
        Connect with talented developers and build together.
      </p>
    </div>

    <div className="bg-slate-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-semibold mb-4">
        🚀 Build Projects
      </h3>
      <p className="text-gray-400">
        Discover exciting ideas and contribute your skills.
      </p>
    </div>

    <div className="bg-slate-900 p-8 rounded-2xl">
      <h3 className="text-2xl font-semibold mb-4">
        🌎 Grow Network
      </h3>
      <p className="text-gray-400">
        Expand your professional developer community.
      </p>
    </div>

  </div>

</section>

{/* Projects Section */}
<section className="py-24 px-10">

  <h2 className="text-4xl font-bold text-center mb-12">
    Trending Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-slate-900 p-6 rounded-2xl">
      <h3 className="text-xl font-bold">
        AI Resume Analyzer
      </h3>
      <p className="text-gray-400 mt-2">
        React • Node.js
      </p>
    </div>

    <div className="bg-slate-900 p-6 rounded-2xl">
      <h3 className="text-xl font-bold">
        Campus Event Finder
      </h3>
      <p className="text-gray-400 mt-2">
        MERN Stack
      </p>
    </div>

    <div className="bg-slate-900 p-6 rounded-2xl">
      <h3 className="text-xl font-bold">
        Code Mentor Platform
      </h3>
      <p className="text-gray-400 mt-2">
        Next.js • Firebase
      </p>
    </div>

  </div>

</section>

<footer className="text-center py-8 text-gray-500 border-t border-slate-800">
  © 2026 DevCollab • Built by Simar Kaur 🚀
</footer>
    </div>
  );
}