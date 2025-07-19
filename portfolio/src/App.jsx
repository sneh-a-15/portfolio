import { useState } from "react";
import React from "react";
import { Github, ExternalLink } from "lucide-react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Form submitted! Check console for data.");
  };

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Instrument Sans, sans-serif" }}
    >
      {/* Header */}
      <header className="w-full bg-white ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="w-32 h-auto">
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="w-24 h-16 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg items-center justify-center hidden">
              <span className="text-xs text-gray-400 text-center">
                Logo<br />Image
              </span>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex space-x-12 scroll-smooth" id="home">
            <a href="#home" className="text-green-900 hover:text-black text-lg font-bold">home</a>
            <a href="#about" className="text-green-900 hover:text-black text-lg font-bold">about</a>
            <a href="#projects" className="text-green-900 hover:text-black text-lg font-bold">projects</a>
            <a href="#contact" className="text-green-900 hover:text-black text-lg font-bold">contact</a>
          </nav>

          {/* NEW: Open to Work Badge with Animation */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold shadow-md">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-[dot-pulse_2s_infinite_ease-in-out]"></span>
            <span >Open to Work</span>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-15 py-20 pt-5  scroll-smooth">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          <div>
            <h1
              className="text-5xl lg:text-6xl font-bold leading-tight"
              style={{ textShadow: "2px 2px 4px rgba(75, 85, 99, 0.5)" }}
            >
              <span className="text-gray-700" style={{ color: "#403939" }}>
                Hello,
              </span>
              <br />
              <span className="text-black">I'm Sneha Nair.</span>
            </h1>
            <p
              className="text-2xl  mb-12 leading-tight font-bold "
              style={{ color: "#243A28" }}
            >
              — a software developer who loves building thoughtful tools that
              solve real problems.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              {/* GitHub */}
              <a
                href="https://github.com/sneh-a-15"
                className="w-8 h-8 text-gray-600 hover:text-green-900 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/snehaa-nair/"
                className="w-8 h-8 text-gray-600 hover:text-green-900 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/snnehhaa_"
                aria-label="X (Twitter)"
                className="w-8 h-8 hover:text-green-900 text-gray-600 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Main Character Illustration - Replace placeholder with actual image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 rounded-2xl overflow-hidden">
              <img
                src="/image.jpeg"
                alt="Character illustration"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="w-80 h-80 bg-gray-50 border-2 border-gray-200 rounded-2xl items-center justify-center hidden">
                <div className="text-gray-400 text-center">
                  <div className="text-4xl mb-4">🐱</div>
                  <div className="text-sm font-medium">
                    <br />
                  </div>
                  <div className="text-xs mt-2 text-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section with Landscape Banner */}
      <section className="w-full scroll-smooth" id="about">
        {/* Landscape Banner Image - Replace placeholder with actual image */}
        <div className="w-full h-48 relative overflow-hidden">
          <img
            src="/strip.jpg"
            alt="Countryside landscape"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="w-full h-48 bg-gradient-to-r from-green-200 via-green-300 to-green-400 border-y-2 border-dashed border-gray-300 items-center justify-center absolute inset-0 hidden">
            <div className="absolute inset-0 bg-gray-100 opacity-50"></div>
            <div className="relative z-10 text-center text-gray-600">
              <div className="text-2xl mb-2">🏞️</div>
              <div className="text-sm font-medium">Landscape Banner</div>
              <div className="text-xs text-gray-500">
                Studio Ghibli-style countryside
              </div>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="bg-green-50 py-8">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xl text-gray-700 leading-relaxed text-center font-bold">
              I love figuring out how things work and turning those ideas into
              something useful and easy to use. Whether I'm building out a
              smooth interface or solving problems behind the scenes, I try to
              keep things clear, thoughtful, and a little curious along the way
              🌱🌿
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="max-w-6xl mx-auto px-6 py-15 scroll-smooth"
        id="skills"
      >
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          {/* Python */}

          <span className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-900 font-medium shadow hover:scale-105 hover:shadow-md transition-all duration-300">
            <img src="/cplusplus.svg" alt="C++" className="h-5 w-5" /> C++
          </span>
          <span className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-900 font-medium shadow hover:scale-105 hover:shadow-md transition-all duration-300">
            <img src="/django.svg" alt="Django" className="h-5 w-5" /> Django
          </span>
          <span className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-900 font-medium shadow hover:scale-105 hover:shadow-md transition-all duration-300">
            <img src="/docker.svg" alt="Docker" className="h-5 w-5" /> Docker
          </span>
          <span className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-900 font-medium shadow hover:scale-105 hover:shadow-md transition-all duration-300">
            <img src="/fastapi.svg" alt="FastAPI" className="h-5 w-5" /> FastAPI
          </span>
          <span className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-900 font-medium shadow hover:scale-105 hover:shadow-md transition-all duration-300">
            <img src="/figma.svg" alt="Figma" className="h-5 w-5" /> Figma
          </span>
          <span className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-900 font-medium shadow hover:scale-105 hover:shadow-md transition-all duration-300">
            <img src="/git.svg" alt="Git" className="h-5 w-5" /> Git
          </span>
          <span className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-900 font-medium shadow hover:scale-105 hover:shadow-md transition-all duration-300">
            <img src="/javascript.svg" alt="JavaScript" className="h-5 w-5" />{" "}
            JavaScript
          </span>
          <span className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-900 font-medium shadow hover:scale-105 hover:shadow-md transition-all duration-300">
            <img src="/mysql.svg" alt="MySQL" className="h-5 w-5" /> MySQL
          </span>
          <span className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-900 font-medium shadow hover:scale-105 hover:shadow-md transition-all duration-300">
            <img src="/nextdotjs.svg" alt="Next.js" className="h-5 w-5" />{" "}
            Next.js
          </span>
          <span className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-900 font-medium shadow hover:scale-105 hover:shadow-md transition-all duration-300">
            <img src="/postgresql.svg" alt="PostgreSQL" className="h-5 w-5" />{" "}
            PostgreSQL
          </span>
          <span className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-900 font-medium shadow hover:scale-105 hover:shadow-md transition-all duration-300">
            <img src="/python.svg" alt="Python" className="h-5 w-5" /> Python
          </span>
          {/* React */}
          <span className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-900 font-medium shadow hover:scale-105 hover:shadow-md transition-all duration-300">
            <img src="/react.svg" alt="React" className="h-5 w-5" /> React
          </span>
          {/* Tailwind */}
          <span className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-900 font-medium shadow hover:scale-105 hover:shadow-md transition-all duration-300">
            <img
              src="/tailwindcss.svg"
              alt="Tailwind CSS"
              className="h-5 w-5"
            />{" "}
            Tailwind CSS
          </span>
          {/*TypeScript */}
          <span className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-green-900 font-medium shadow hover:scale-105 hover:shadow-md transition-all duration-300">
            <img src="/typescript.svg" alt="TypeScript" className="h-5 w-5" />{" "}
            TypeScript
          </span>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="max-w-4xl mx-auto px-6 py-8 scroll-mt-10"
        id="projects"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-10">
          <div className="w-full max-w-sm bg-gradient-to-br from-white to-green-50 p-6 rounded-lg shadow-lg group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative">
              <img
                src="/p1.png"
                alt="Project 1"
                className="w-full h-44 object-cover rounded"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
                <a
                  href="https://github.com/sneh-a-15/askmilo-rag-study-assistant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  GitHub
                </a>
                <a
                  href="https://askmilo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-800 transition"
                >
                  Live
                </a>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                {" "}
                AskMilo - Your AI-Powered CS Study Buddy
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                AskMilo is an AI-powered study assistant that helps students
                master core CS subjects like Operating Systems, DBMS, and
                Computer Networks using a RAG (Retrieval-Augmented Generation)
                approach. It provides accurate, textbook-backed answers with
                follow-ups and an interactive UI.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-gray-200 px-2 py-1 rounded">FastAPI</span>
                <span className="bg-gray-200 px-2 py-1 rounded">Next.js</span>
                <span className="bg-gray-200 px-2 py-1 rounded">Pinecone</span>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="w-full max-w-sm bg-gradient-to-br from-white to-green-50 p-6 rounded-lg shadow-lg group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative">
              <img
                src="/p2.png"
                alt="Project 2"
                className="w-full h-44 object-cover rounded"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
                <a
                  href="https://github.com/sneh-a-15/refindr-research"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-800 transition"
                >
                  Live
                </a>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-2 text-slate-800">
                ReFindr - Smart Search for Research Papers
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                ReFindr is a smart academic paper discovery tool that lets users
                search, bookmark, and preview research papers from major
                sources. It features keyword-based search, PDF previews,
                bookmark lists, and AI-powered summarization and tagging.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-gray-200 px-2 py-1 rounded">Python</span>
                <span className="bg-gray-200 px-2 py-1 rounded">Django</span>
                <span className="bg-gray-200 px-2 py-1 rounded">
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
      id="contact"
      className="relative scroll-smooth px-6 py-15"
      style={{
        backgroundImage: `url('/bg-1.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-md mx-auto">
        {/* Glassmorphic Card */}
        <div className="backdrop-blur-lg bg-black/30 border border-white/20 shadow-xl rounded-2xl px-8 py-12 text-center transition-all duration-700 ease-in-out hover:shadow-2xl hover:scale-105">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-8 text-red-300">Let's Connect</h2>
          {/* Contact Info */}
          <div className="space-y-6 text-white font-medium">
            <div>
              <p className="uppercase text-sm tracking-widest text-gray-300">Email</p>
              <a
                href="mailto:nairsneha1508@gmail.com"
                className="text-xl hover:animate-pulse hover:text-green-200 transition duration-300"
              >
                nairsneha1508@gmail.com
              </a>
            </div>
            <div>
              <p className="uppercase text-sm tracking-widest text-gray-300">Twitter / X</p>
              <a
                href="https://x.com/snnehhaa_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:animate-pulse hover:text-green-200 transition duration-300"
              >
                @snnehhaa_
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* Footer */}
      <footer className="text-center py-12 text-gray-500 border-t">
        <p className="font-medium">Made with ❤️ by sneha</p>
      </footer>
    </div>
  );
}

export default App;
