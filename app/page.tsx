"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Github, FileText, LayoutGrid, Play, ArrowUpRight, Printer } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"projects" | "resume">("projects");

  // Sync with URL hash if user visits with #resume or #projects
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash === "resume" || hash === "projects") {
        setActiveTab(hash as "projects" | "resume");
      }
    }
  }, []);

  const handleTabChange = (tab: "projects" | "resume") => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${tab}`);
    }
  };

  const education = {
    school: "University of Georgia",
    degree: "Bachelors of Science, Computer Science",
    gpa: "3.9/4",
    location: "Athens, GA",
    period: "Aug 2023 - Dec 2026",
    coursework: "Data Structures, Linear Algebra, Systems Programming, Computer Architecture",
  };

  const technologies = {
    languages: ["Python", "Java", "SQL", "JavaScript", "C", "C++", "React", "Cypher (Neo4j)", "Node.js", "PostgreSQL"],
    tools: [
      "NumPy",
      "JavaFX",
      "Hugging Face Transformers",
      "LlamaIndex",
      "Git",
      "Bash",
      "Linux",
      "OCR",
      "PyMuPDF",
      "Retrieval Augmented Generation (RAG)",
      "Rest API",
      "Agile",
      "Jira",
      "Spring Boot",
    ],
    systemDesign: ["System Design", "Scalable Architecture"],
  };

  const experience = [
    {
      company: "Inspire Brands",
      role: "Data Analytics Intern",
      period: "Jun 2026 - Aug 2026",
      points: [
        "Designed and engineered scalable architecture for automated ETL pipelines in Python and SQL that moved enterprise-scale customer datasets into production, enabling faster data availability for downstream analysis.",
        "Applied system design principles to architect and optimize complex PostgreSQL queries over 20+ million transaction records, improving query execution speed and reducing database load.",
        "Automated core data validation and preprocessing workflows using custom Python scripts, eliminating manual errors and improving pipeline reliability.",
        "Conducted predictive market analytics and revenue forecasting for Buffalo Wild Wings by combining demographic datasets and custom SQL models, delivering insights that guided menu pricing decisions.",
      ],
    },
  ];

  const projectCards = [
    {
      id: "crypto-arb",
      title: "Low-Latency Crypto Arbitrage Engine",
      summary:
        "High-performance C++20 market data ingestion and arbitrage detector. Evaluates live Binance and Coinbase Level 2 WebSocket feeds with SIMD-accelerated JSON parsing and lock-free SPSC ring buffers at sub-microsecond latency.",
      tags: ["C++20", "SIMD", "SPSC Buffers", "WebSockets", "Boost ASIO"],
      link: "https://github.com/pateldev1804/crypto-arb",
      // Drop demo video (e.g. /demos/crypto-arb.mp4) or image in public/demos/
      media: null as { type: "video" | "image"; src: string } | null,
    },
    {
      id: "movie-booking",
      title: "Online Movie Booking System",
      summary:
        "Full-stack cinema e-booking platform built with Next.js/React and Java Spring Boot. Features normalized MongoDB schemas, real-time ticket reservations, and secure RESTful transaction workflows.",
      tags: ["React", "Java Spring Boot", "MongoDB", "REST API", "Next.js"],
      link: "https://github.com/pateldev1804/online-ticket-booking-project",
      // Drop demo video (e.g. /demos/movie-booking.mp4) or image in public/demos/
      media: null as { type: "video" | "image"; src: string } | null,
    },
    {
      id: "graph-rag",
      title: "LLM GraphRAG Knowledge Engine",
      summary:
        "Scalable hybrid GraphRAG architecture combining Neo4j graph schemas, Pinecone vector embeddings, and LlamaIndex over 10k+ unstructured documents, delivering multi-hop reasoning with <400ms query latency.",
      tags: ["Neo4j", "Pinecone", "LlamaIndex", "Hugging Face", "PyMuPDF"],
      link: undefined,
      // Drop demo video (e.g. /demos/graph-rag.mp4) or image in public/demos/
      media: null as { type: "video" | "image"; src: string } | null,
    },
  ];

  const resumeProjects = [
    {
      title: "LLM-Powered Retrieval Augmented Generation",
      tags: ["Neo4j", "Pinecone", "LlamaIndex", "Hugging Face", "PyMuPDF", "OCR"],
      bullets: [
        "Architected a scalable hybrid GraphRAG pipeline using Neo4j, Pinecone, and LlamaIndex over 10k+ unstructured documents, achieving <400ms end-to-end query latency.",
        "Designed custom Cypher graph schemas to model complex entity relationships and multi-hop dependencies, solving context fragmentation and hallucination issues inherent to standard vector-only RAG.",
        "Integrated Hugging Face Transformers and dense vector embeddings with LlamaIndex, enabling hybrid semantic-graph retrieval for multi-document reasoning.",
        "Automated PDF ingestion workflows using PyMuPDF and OCR, scaling throughput to 1,000+ pages/hour while preserving document structure.",
      ],
    },
    {
      title: "Low-Latency Cross-Exchange Crypto Arbitrage Engine",
      link: "https://github.com/pateldev1804/crypto-arb",
      tags: ["C++20", "SIMD", "SPSC Ring Buffers", "WebSockets", "Multithreading"],
      bullets: [
        "Engineered a real-time market data ingestion and arbitrage detection engine in C++20, using multithreading to process live Level 2 top-of-book WebSocket feeds from Binance and Coinbase.",
        "Implemented a zero-copy, SIMD-accelerated JSON parser and custom ASCII-to-integer conversion, eliminating hot-path heap allocations and reducing message parsing overhead to sub-microsecond latency.",
        "Decoupled asynchronous network I/O threads from the core evaluation loop using cache-aligned, lock-free Single-Producer Single-Consumer ring buffers to minimize thread contention and CPU cache misses.",
        "Architected an asynchronous telemetry pipeline powering a low-overhead terminal CLI, visualizing live BBO depth, active spreads, and hardware-level cycle counts across isolated rendering threads.",
      ],
    },
    {
      title: "Online Movie Booking System",
      link: "https://github.com/pateldev1804/online-ticket-booking-project",
      tags: ["React", "Java Spring Boot", "MongoDB", "RESTful API", "Agile"],
      bullets: [
        "Architected a responsive, full-stack web application leveraging React and Java Spring Boot within an Agile development framework.",
        "Designed normalized MongoDB schemas for users, film catalogs, and real-time reservation systems to optimize data storage and ensure sub-second retrieval.",
        "Developed RESTful API endpoints to handle asynchronous frontend-backend state synchronization and seamless user transaction processing.",
      ],
    },
  ];

  return (
    <main
      className={`mx-auto px-6 py-16 text-neutral-200 font-sans leading-relaxed transition-all duration-300 ${
        activeTab === "projects" ? "max-w-5xl" : "max-w-3xl"
      }`}
    >
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Dev Patel</h1>
        <p className="text-neutral-400 text-base mb-4">
          Computer Science Student at University of Georgia • Software Engineer
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
          <a
            href="mailto:pateldev1804@gmail.com"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            Email
          </a>
          <a
            href="https://github.com/pateldev1804"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            LinkedIn
          </a>
        </div>
      </header>

      {/* Tabs Switcher */}
      <nav className="flex items-center gap-2 p-1 bg-neutral-900/80 border border-neutral-800 rounded-xl mb-10 w-fit">
        <button
          onClick={() => handleTabChange("projects")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === "projects"
              ? "bg-neutral-800 text-white shadow-sm"
              : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40"
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          <span>Projects</span>
        </button>
        <button
          onClick={() => handleTabChange("resume")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === "resume"
              ? "bg-neutral-800 text-white shadow-sm"
              : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40"
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Resume</span>
        </button>
      </nav>

      {/* TAB 1: Projects Showcase Cards */}
      {activeTab === "projects" && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-neutral-800 pb-3 mb-6">
            <h2 className="text-lg font-semibold uppercase tracking-wider text-neutral-300">
              Featured Projects
            </h2>
            <span className="text-xs text-neutral-500">
              Hover & click card links to view source code
            </span>
          </div>

          {/* 3 Horizontal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectCards.map((proj) => (
              <div
                key={proj.id}
                className="group flex flex-col bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
              >
                {/* Media Container (16:9 Video Demo or Picture) */}
                <div className="relative aspect-video w-full bg-neutral-950 overflow-hidden border-b border-neutral-800/80">
                  {proj.media ? (
                    proj.media.type === "video" ? (
                      <video
                        src={proj.media.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={proj.media.src}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-neutral-900/60 to-neutral-950 text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center mb-2 shadow-inner group-hover:scale-105 transition-transform">
                        <Play className="w-4 h-4 text-neutral-300 fill-neutral-300/20 ml-0.5" />
                      </div>
                      <span className="text-xs font-medium text-neutral-300">Demo Video / Picture</span>
                      <span className="text-[10px] text-neutral-500 mt-0.5 font-mono">
                        public/demos/{proj.id}.mp4
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-semibold text-white tracking-tight leading-snug">
                      {proj.title}
                    </h3>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors p-0.5"
                        title="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4 flex-1">
                    {proj.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[11px] bg-neutral-900 border border-neutral-800 text-neutral-300 rounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Action Button */}
                  {proj.link ? (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 text-xs font-medium text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View Code</span>
                      <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                    </a>
                  ) : (
                    <div className="text-center py-2 px-3 text-[11px] text-neutral-500 bg-neutral-900/40 border border-neutral-900 rounded-lg">
                      Research & Architecture
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center text-xs text-neutral-500">
            <span>Want to review my full experience, education, and technical bullet points? </span>
            <button
              onClick={() => handleTabChange("resume")}
              className="text-neutral-300 underline hover:text-white transition-colors ml-1"
            >
              View the complete Resume tab &rarr;
            </button>
          </div>
        </section>
      )}

      {/* TAB 2: Full Resume */}
      {activeTab === "resume" && (
        <section className="space-y-12 animate-fadeIn">
          {/* Resume Header Bar */}
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <h2 className="text-lg font-semibold uppercase tracking-wider text-neutral-300">
              Curriculum Vitae / Resume
            </h2>
            <button
              onClick={() => typeof window !== "undefined" && window.print()}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>

          {/* Education */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 border-b border-neutral-800/80 pb-2 mb-4">
              Education
            </h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
              <h4 className="text-base font-medium text-white">{education.school}</h4>
              <span className="text-xs text-neutral-400">{education.period}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-neutral-400 mb-2">
              <span>
                {education.degree} (GPA: {education.gpa})
              </span>
              <span>{education.location}</span>
            </div>
            <p className="text-xs text-neutral-400">
              <strong className="text-neutral-300">Coursework:</strong> {education.coursework}
            </p>
          </section>

          {/* Technologies */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 border-b border-neutral-800/80 pb-2 mb-4">
              Technologies
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium text-neutral-300">Languages: </span>
                <span className="text-neutral-400">{technologies.languages.join(", ")}</span>
              </div>
              <div>
                <span className="font-medium text-neutral-300">Libraries & Tools: </span>
                <span className="text-neutral-400">{technologies.tools.join(", ")}</span>
              </div>
              <div>
                <span className="font-medium text-neutral-300">System Design: </span>
                <span className="text-neutral-400">{technologies.systemDesign.join(", ")}</span>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 border-b border-neutral-800/80 pb-2 mb-4">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h4 className="text-base font-medium text-white">
                      {exp.company} <span className="text-neutral-400 font-normal">| {exp.role}</span>
                    </h4>
                    <span className="text-xs text-neutral-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-sm text-neutral-300">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Projects with Resume Bullets */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 border-b border-neutral-800/80 pb-2 mb-4">
              Technical Projects
            </h3>
            <div className="space-y-8">
              {resumeProjects.map((proj, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h4 className="text-base font-medium text-white">
                      {proj.link ? (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 hover:text-white hover:underline underline-offset-4 group transition-colors"
                        >
                          <span>{proj.title}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors flex-shrink-0" />
                        </a>
                      ) : (
                        proj.title
                      )}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-xs bg-neutral-900 border border-neutral-800 text-neutral-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-sm text-neutral-300">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </section>
      )}

      {/* Footer */}
      <footer className="pt-12 mt-16 border-t border-neutral-900 text-xs text-neutral-400 flex justify-between items-center">
        <span>© {new Date().getFullYear()} Dev Patel</span>
        <span>Built with Next.js & Tailwind CSS</span>
      </footer>
    </main>
  );
}
