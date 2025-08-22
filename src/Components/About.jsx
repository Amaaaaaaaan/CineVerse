import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen w-full flex flex-col">
      {/* ✅ Navbar */}
      <header className="p-4 bg-[#111] flex items-center justify-between shadow-md">
        <h1 className="text-2xl font-bold text-[#6556CD]">CineVerse</h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-[#6556CD] duration-200">Home</Link>
          <Link to="/about" className="text-[#6556CD] font-semibold">About</Link>
        </nav>
      </header>

      {/* ✅ Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="bg-[#1a1a1a] rounded-2xl shadow-lg p-8 max-w-2xl text-center border border-[#2a2a2a]">
          <h2 className="text-4xl font-bold text-[#6556CD] mb-4">About CineVerse</h2>
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            CineVerse is a ReactJS-based Movie & Show Browsing Platform that lets users 
            explore movies, TV shows, and actors seamlessly. It integrates with external APIs 
            to fetch real-time data, offering a modern, responsive UI with smooth navigation 
            and search functionality.
          </p>

          {/* ✅ Back Button */}
          <Link
            to="/"
            className="inline-block bg-[#6556CD] hover:bg-[#4e44b3] text-white px-6 py-2 rounded-lg font-medium transition duration-300"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* ✅ Footer */}
      <footer className="text-center py-6 text-sm text-zinc-500 border-t border-zinc-800">
        © {new Date().getFullYear()} CineVerse. Built with ❤️ using React.
      </footer>
    </div>
  );
}
