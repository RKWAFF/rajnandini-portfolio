import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePic from "./assets/rajnandini.jpg";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const tabs = [
  "Summary",
  "Work Experience",
  "Projects",
  "Education",
  "Leadership",
  "Skills",
  "Contact",
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Summary");
  const [zoomed, setZoomed] = useState(false);
  const [openJobIndex, setOpenJobIndex] = useState(null);

  // Smooth scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const tabContent = {
    Summary: (
  <motion.div
    key="Summary"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren: 0.25,
          duration: 0.6,
          ease: "easeOut"
        }
      }
    }}
    className="space-y-4 text-justify sm:text-left"
  >
    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
      Professional Summary
    </h2>

    {[ 
      "As The Analyst–Strategist, I bring together analytical precision and human understanding to design strategies that drive measurable success. I believe progress happens when data-driven reasoning meets empathy, enabling organisations, teams, and communities to operate with purpose and clarity.",
      "My work lies at the intersection of strategy, innovation, and technology. I am deeply passionate about digital transformation and have experience leveraging technology to improve systems, enhance decision-making, and create scalable impact across businesses.",
      "Guided by efficiency, empathy, and emotional intelligence, I approach every challenge as an opportunity to optimise processes, empower others, and deliver outcomes that create lasting value."
    ].map((text, i) => (
      <motion.p
        key={i}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        className="space-y-4 text-left sm:text-justify"
      >
        {text}
      </motion.p>
    ))}
  </motion.div>
),

    "Work Experience": (
      <motion.div
        key="Experience"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-sm"
      >
        {[
          {
            company: "KIND Snacks UK",
            role: "Marketing Analyst",
            date: "Jan 2025 – Present",
            bullets: [
              "⟡ Conducted consumer behaviour and sales analysis across 20,000+ activation points, uncovering geographic and behavioural patterns that refined sampling strategy and drove a 40% uplift in event-based SKU sales across priority locations.",
              "⟡ Built automated performance dashboards to visualise real-time marketing KPIs, reducing manual reporting time by 30% and enabling field and brand teams to make faster, evidence-led trade and activation decisions.",
            ],
          },
          {
            company: "Leania.ai",
            role: "Technology Consultant",
            date: "May 2024 – Aug 2024",
            bullets: [
              "⟡ Applied SQL and R to mine insurance workflow data and support AI-led automation, improving model governance and delivering a 25% uplift in operational efficiency across key underwriting and back-office processes.",
              "⟡ Designed executive-facing Power BI dashboards to evaluate RPA cost–benefit performance, supporting £50,000 in projected annual savings and a 67% uplift in client satisfaction through clear, strategic data storytelling.",
            ],
          },
          {
            company: "Simtrak Solutions",
            role: "Management Consultant",
            date: "Dec 2022 – Mar 2023",
            bullets: [
              "⟡ Led cross-functional performance analysis for nine client portfolios, using KPI dashboards and diagnostic analytics to identify bottlenecks that drove an average 20% improvement in operational outcomes and a 250% increase in engagement metrics.",
              "⟡ Delivered regression-based performance models and reporting packs that strengthened leadership decision-making, embedding a culture of data-driven planning and continuous improvement within client teams.",
            ],
          },
        ].map((job, index) => {
          const isOpen = openJobIndex === index;

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              onClick={() =>
                setOpenJobIndex(isOpen ? null : index)
              }
              className={`cursor-pointer border border-gray-700 bg-gray-800 rounded-lg p-4 shadow-lg transition-all duration-500 ${
                isOpen ? "border-teal-500 shadow-teal-500/30" : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-teal-400">
                    {job.company}
                  </h3>
                  <p className="italic text-gray-300">
                    {job.role} | {job.date}
                  </p>
                </div>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-teal-400 text-xl font-bold select-none"
                >
                  ▼
                </motion.span>
              </div>

              {/* Expandable bullets */}
              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="ml-3 mt-3 space-y-2 leading-relaxed text-left sm:text-justify overflow-hidden"
                  >
                    {job.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    ),

    Projects: (
  <motion.div
    key="Projects"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
    className="w-full py-10"
  >
    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 mb-6 text-center">
      Projects
    </h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 [perspective:1200px]">
      {[
        {
          title: "The Human Side of Hybrid Working",
          description:
            "A strategic research study exploring how hybrid work shapes productivity, flexibility, and employee well-being. Combined regression analysis with qualitative insights to design actionable strategies for sustainable hybrid transformation.",
          link: "https://drive.google.com/file/d/1mYAgHvK9TBh_-2E8VKwLYjNVS_SJxxQS/view",
        },
        {
          title:
            "Estimating the Proportion of Juvenile Suicide Attempts using Randomised Response Technique",
          description:
            "A statistical research project comparing Direct Survey Method and RRT to estimate sensitive behavioural proportions. Demonstrated rigour in applied statistics, ethical data analysis, and model validation for real-world inference.",
          link: "https://drive.google.com/file/d/1A7HtagnE7gi5dyqa0_JWJKR2izsUTdiG/view?usp=sharing",
        },
        {
          title: "London Bus Safety",
          description:
            "Developed a live Tableau dashboard analysing accident trends across London bus routes. Identified borough-level risks and peak time periods to support data-informed urban safety interventions.",
          link: "https://public.tableau.com/app/profile/rajnandini3159/viz/DataVizwithTableau_16784621573440/Dashboard1",
        },
      ].map((p, i) => (
        <div
          key={i}
          className="relative h-64 w-full cursor-pointer group [transform-style:preserve-3d] transition-transform duration-[800ms] hover:[transform:rotateY(180deg)]"
        >
          {/* FRONT */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 rounded-3xl border border-teal-400/50 bg-gradient-to-br from-gray-800 to-gray-900 [backface-visibility:hidden]">
            <h3 className="text-lg font-semibold text-teal-300">
              {p.title}
            </h3>
          </div>

          {/* BACK */}
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-left rounded-3xl border border-teal-400/50 bg-gradient-to-tr from-gray-900 to-gray-800 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <p className="text-sm text-gray-200 leading-relaxed mb-4 text-center">
              {p.description}
            </p>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 rounded-full bg-teal-600 hover:bg-purple-600 text-white text-xs font-semibold transition-all duration-300"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
),


    Education: (
  <motion.div
    key="Education"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
    className="w-full py-10 space-y-8"
  >
    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 mb-6 text-center">
      Education
    </h2>

    {[
      {
        school: "Bayes Business School, London",
        degree: "MSc Management – High Merit",
        grad: "Graduation: Jan 2025",
      },
      {
        school: "St. Xavier’s College (Autonomous), Kolkata",
        degree: "BSc Statistics (Hons.) – First Class",
        grad: "Graduation: Jan 2023",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.15 }}
        className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-4
                   bg-gradient-to-r from-gray-900/70 to-gray-800/70
                   border border-teal-500/40 rounded-xl p-6 backdrop-blur-md
                   hover:shadow-[0_0_25px_rgba(45,212,191,0.4)]
                   hover:border-purple-500/50
                   transition-all duration-500"
      >
        {/* Left panel */}
        <div className="md:w-2/3">
          <h3 className="text-lg font-semibold text-teal-300 mb-1">
            {item.school}
          </h3>
          <p className="text-gray-200">{item.degree}</p>
        </div>

        {/* Right panel */}
        <div className="md:w-1/3 flex justify-end md:justify-center">
          <span className="text-sm text-purple-300 font-medium bg-gradient-to-r from-purple-700/40 to-teal-700/40 px-3 py-1 rounded-full">
            {item.grad}
          </span>
        </div>

        {/* Split-glow divider */}
        <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-teal-500 via-purple-500 to-transparent rounded-full"></div>
      </motion.div>
    ))}
  </motion.div>
),


    Leadership: (
  <motion.div
    key="Leadership"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
    className="w-full py-10"
  >
    <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 mb-8">
      Leadership
    </h2>

    <div className="grid gap-8 sm:grid-cols-2">
      {[
        {
          title: "Editor-in-Chief | Department of Statistics",
          bullet:
            "Directed a 35-member cross-functional team to conceptualize, design, and publish Prakarsho 2022, strengthening strategic communication, creative problem-solving, and project delivery through data-driven storytelling and stakeholder alignment.",
        },
        {
          title: "Core Committee Member | Xavotsav",
          bullet:
            "Oversaw artist partnerships, event logistics, and a 70-member operations team, applying leadership agility, negotiation, and time-sensitive execution to deliver high-impact cultural experiences and optimize stakeholder engagement.",
        },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 25, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="relative group p-6 rounded-2xl overflow-hidden border border-white/20 
                     backdrop-blur-md bg-white/10 shadow-lg
                     hover:border-teal-400/60 hover:shadow-[0_0_35px_rgba(45,212,191,0.35)]
                     transition-all duration-700 ease-out text-left sm:text-justify"
        >
          {/* Hologram shimmer overlay (hover only) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/20 to-transparent 
                          -translate-x-full group-hover:translate-x-full 
                          transition-transform duration-[1800ms] ease-in-out pointer-events-none" />

          <h3 className="text-lg font-semibold text-teal-300 mb-3">
            {item.title}
          </h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            {item.bullet}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
),


    "Skills": (
  <motion.div
    key="Skills"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="w-full py-10"
  >
    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 mb-8 text-left sm:text-justify">
      Skills
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-stretch">

      {/* LEFT COLUMN */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-tr from-gray-800/80 to-gray-900/70 border border-teal-500/40 rounded-2xl p-6 shadow-lg backdrop-blur-md transition duration-300"
      >
        <h3 className="text-lg font-semibold text-teal-400 mb-4">
          Analytical & Technical Tools
        </h3>
        <ul className="list-disc ml-6 space-y-1 text-sm text-gray-200 text-left sm:text-justify">
          <li>SQL</li>
          <li>Advanced Excel</li>
          <li>Power BI</li>
          <li>Tableau</li>
          <li>R Programming</li>
          <li>Python</li>
          <li>C/C++</li>
          <li>Minitab</li>
          <li>Qualtrics</li>
          <li>Data Analysis & Visualization</li>
        </ul>
      </motion.div>

      {/* EXTENDED ANIMATED DIVIDER */}
      <div className="hidden md:flex flex-col justify-stretch items-center">
        <div className="w-[3px] h-[100%] rounded-full animate-gradient-x bg-[linear-gradient(180deg,#14b8a6,#8b5cf6,#14b8a6)] bg-[length:200%_200%]" />
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-6">
        {/* BUSINESS & STRATEGY */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-tr from-gray-800/80 to-gray-900/70 border border-purple-500/40 rounded-2xl p-6 shadow-lg backdrop-blur-md transition duration-300"
        >
          <h3 className="text-lg font-semibold text-purple-400 mb-4">
            Business & Strategy
          </h3>
          <ul className="list-disc ml-6 space-y-1 text-sm text-gray-200 text-left sm:text-justify">
            <li>Project Management</li>
            <li>Business Strategy</li>
            <li>Change Management</li>
          </ul>
        </motion.div>

        {/* TECHNOLOGY & TRANSFORMATION */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-tr from-gray-800/80 to-gray-900/70 border border-teal-500/40 rounded-2xl p-6 shadow-lg backdrop-blur-md transition duration-300"
        >
          <h3 className="text-lg font-semibold text-teal-400 mb-4">
            Technology & Transformation
          </h3>
          <ul className="list-disc ml-6 space-y-1 text-sm text-gray-200 text-left sm:text-justify">
            <li>Artificial Intelligence</li>
            <li>Product Management</li>
            <li>Digital Transformation</li>
          </ul>
        </motion.div>
      </div>
    </div>

    {/* LANGUAGES SECTION */}
    <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-300 text-left sm:text-justify">
      <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 mb-2">
        <strong>Languages</strong>
      </h3>
      <p className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-teal-300 to-purple-400">
        English · Hindi · Bengali
      </p>
    </div>
  </motion.div>
),


    "Contact": (
  <motion.div
    key="Contact"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-center justify-center py-12 px-6"
  >
    {/* Header */}
    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400 mb-8">
      Let’s Connect
    </h2>

    {/* Contact Card */}
    <div className="relative w-full max-w-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/60 rounded-3xl p-8 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:scale-[1.01]">
      {/* Animated Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[3px] animate-gradient-x bg-[linear-gradient(90deg,#14b8a6,#8b5cf6,#14b8a6)] bg-[length:200%_200%] rounded-b-lg"></div>

      {/* Contact Items */}
      <div className="flex flex-col gap-6 text-gray-300 text-sm sm:text-base">
        {[
          {
            icon: <FaEnvelope className="text-teal-400 text-xl" />,
            label: "Email",
            text: "rajnandinikar4@gmail.com",
            href: "mailto:rajnandinikar4@gmail.com",
          },
          {
            icon: <FaPhone className="text-purple-400 text-xl" />,
            label: "Phone",
            text: "+44 7407 746850",
            href: "tel:+447407746850",
          },
          {
            icon: <FaLinkedin className="text-teal-400 text-xl" />,
            label: "LinkedIn",
            text: "linkedin.com/in/rajnandini-kar",
            href: "https://linkedin.com/in/rajnandini-kar",
          },
          {
            icon: <MdLocationOn className="text-purple-400 text-xl" />,
            label: "Location",
            text: "London, United Kingdom",
          },
        ].map(({ icon, label, text, href }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03, y: -3 }}
            className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 shadow-sm hover:shadow-[0_0_25px_rgba(139,92,246,0.2)] transition-all duration-300"
          >
            <div className="flex-shrink-0">{icon}</div>
            <div className="flex flex-col text-left sm:text-justify">
              <span className="text-sm text-teal-300 font-semibold">
                {label}
              </span>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-100 hover:text-teal-400 transition-colors duration-200"
                >
                  {text}
                </a>
              ) : (
                <span className="text-gray-100">{text}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Footer tagline */}
    <p className="text-xs text-gray-400 mt-10 text-center">
      &copy; {new Date().getFullYear()} Rajnandini Kar — Portfolio powered by React & Tailwind.
    </p>
  </motion.div>
),

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white font-sans">
      {/* Header */}
      <header className="py-6 shadow-lg bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white">
              Rajnandini Kar
            </h1>
            <p className="text-sm text-teal-300 mt-1">
              Strategy Consultant · Data Analyst · MSc Management · BSc
              Statistics (Hons.)
            </p>
          </div>

         {/* Profile Picture with Center Zoom */}
<div className="relative">
  <motion.div
    onClick={() => setZoomed(!zoomed)}
    animate={{
      scale: zoomed ? 3 : 1.25,
      x: zoomed ? 0 : 0,
      y: zoomed ? 0 : 0,
      zIndex: zoomed ? 50 : 1,
    }}
    transition={{ type: "spring", stiffness: 180, damping: 15 }}
    className="rounded-full overflow-hidden border-4 border-white shadow-xl cursor-pointer relative z-10"
    style={{
      position: zoomed ? "fixed" : "relative",
      top: zoomed ? "50%" : "auto",
      left: zoomed ? "50%" : "auto",
      transform: zoomed
        ? "translate(-50%, -50%) scale(3)"
        : "translate(0, 0) scale(1.25)",
      boxShadow: zoomed
        ? "0 0 60px rgba(0,0,0,0.7)"
        : "0 0 10px rgba(0,0,0,0.3)",
      transition: "all 0.4s ease-in-out",
    }}
  >
    <img
      src={profilePic}
      alt="Rajnandini Kar"
      className="w-24 h-24 md:w-28 md:h-28 object-cover select-none"
    />
  </motion.div>

  {/* Soft dark overlay when zoomed */}
  {zoomed && (
    <motion.div
      onClick={() => setZoomed(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.65 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer z-0"
    />
  )}
</div>


        </div>
      </header>

      {/* Tabs */}
      <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-3 justify-center md:justify-start text-sm">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              setActiveTab(tab);
              setZoomed(false);
            }}
            className={`px-4 py-2 rounded-full transition duration-300 ${
              activeTab === tab
                ? "bg-teal-600 text-white scale-105 shadow-md"
                : "bg-gray-700 text-gray-200 hover:bg-gray-600"
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-8 min-h-[300px]">
        <AnimatePresence mode="wait">
          {tabContent[activeTab]}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs py-6 border-t mt-10 border-gray-700 text-gray-400">
        &copy; {new Date().getFullYear()} Rajnandini Kar. Portfolio powered
        by React & Tailwind.
      </footer>
    </div>
  );
}





