import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold text-teal-400">Taskrypt</h1>
        <a href='https://drive.google.com/file/d/1Nv-q2kjRuPQWGqmCrS8iv0iIdQaIubQj/view?usp=sharing' target='_blank' className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-full text-sm font-semibold">
          Download
        </a>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Simplify Your <span className="text-teal-400">Tasks</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
          Taskrypt helps you organize, manage, and accomplish your daily goals effortlessly. Stay focused. Stay productive.
        </p>
        <div className="space-x-4">
          <a href='https://drive.google.com/file/d/1Nv-q2kjRuPQWGqmCrS8iv0iIdQaIubQj/view?usp=sharing' target='_blank' className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all">
            Try for Free
          </a>
          <a href='https://sayandip-adhikary.vercel.app/' target='_blank' className="border border-gray-400 px-6 py-3 rounded-full text-white hover:border-white transition-all">
            Developer Info
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Taskrypt. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
