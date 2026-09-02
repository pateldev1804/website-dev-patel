export default function Home() {
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

  const projects = [
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
      tags: ["React", "Java Spring Boot", "MongoDB", "RESTful API", "Agile"],
      bullets: [
        "Architected a responsive, full-stack web application leveraging React and Java Spring Boot within an Agile development framework.",
        "Designed normalized MongoDB schemas for users, film catalogs, and real-time reservation systems to optimize data storage and ensure sub-second retrieval.",
        "Developed RESTful API endpoints to handle asynchronous frontend-backend state synchronization and seamless user transaction processing.",
      ],
    },
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-neutral-200 font-sans leading-relaxed">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Dev Patel</h1>
        <p className="text-neutral-400 text-base mb-4">
          Computer Science Student at University of Georgia • Software Engineer
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
          <a href="mailto:contact@example.com" className="hover:text-white transition-colors underline underline-offset-4">
            Email
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-4">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-4">
            LinkedIn
          </a>
        </div>
      </header>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold uppercase tracking-wider text-neutral-400 border-b border-neutral-800 pb-2 mb-4">
          Education
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
          <h3 className="text-base font-medium text-white">{education.school}</h3>
          <span className="text-xs text-neutral-400">{education.period}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-neutral-400 mb-2">
          <span>{education.degree} (GPA: {education.gpa})</span>
          <span>{education.location}</span>
        </div>
        <p className="text-xs text-neutral-400">
          <strong className="text-neutral-300">Coursework:</strong> {education.coursework}
        </p>
      </section>

      {/* Technologies */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold uppercase tracking-wider text-neutral-400 border-b border-neutral-800 pb-2 mb-4">
          Technologies
        </h2>
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
      <section className="mb-12">
        <h2 className="text-lg font-semibold uppercase tracking-wider text-neutral-400 border-b border-neutral-800 pb-2 mb-4">
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div key={idx}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="text-base font-medium text-white">
                  {exp.company} <span className="text-neutral-400 font-normal">| {exp.role}</span>
                </h3>
                <span className="text-xs text-neutral-400">{exp.period}</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1.5 text-sm text-neutral-300">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="leading-relaxed">{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold uppercase tracking-wider text-neutral-400 border-b border-neutral-800 pb-2 mb-4">
          Projects
        </h2>
        <div className="space-y-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-base font-medium text-white">{proj.title}</h3>
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
                  <li key={bIdx} className="leading-relaxed">{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8 border-t border-neutral-900 text-xs text-neutral-400 flex justify-between items-center">
        <span>© {new Date().getFullYear()} Dev Patel</span>
        <span>Built with Next.js & Tailwind CSS</span>
      </footer>
    </main>
  );
}
