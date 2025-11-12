import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePic from "./assets/rajnandini.jpg";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const tabs = ["Summary", "Work Experience", "Projects", "Education", "Leadership", "Skills", "Contact"];

export default function App() {
  const [activeTab, setActiveTab] = useState("Summary");
  const [zoomed, setZoomed] = useState(false);

  const tabContent = {
    Summary: (
      <motion.div key="Summary" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }} className="space-y-4">
        <h2 className="text-xl font-semibold">Professional Summary</h2>
        <p>
          Data Analyst and Strategy Consultant with a strong academic background in Business Management and Statistics. Experienced in Advanced Excel, SQL, and R for data modelling, statistical analysis, and automation. Applied quantitative techniques across consulting, fintech, and FMCG to improve model governance and operational efficiency.
        </p>
        <p>
          Passionate about digital transformation, data storytelling, and technological innovation. Proven strength in stakeholder engagement, insight delivery, and aligning data-driven strategies with business goals.
        </p>
      </motion.div>
    ),
    "Work Experience": (
      <motion.div key="Experience" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9 }} transition={{ duration: 0.5 }} className="space-y-6 text-sm">
        {/* KIND Snacks UK */}
        <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-gray-800 rounded shadow-lg">
          <h3 className="text-lg font-bold">KIND Snacks UK</h3>
          <p className="italic">Marketing and Sales Analyst | Jan 2025 – Present</p>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Conducted data-driven consumer behaviour analysis across 15,000+ activation points using Excel and Tableau, identifying key trends that informed promotional strategies and improved event-based SKU sales by 40%.</li>
            <li>Developed automated dashboards to monitor real-time sales and marketing metrics, streamlining decision-making processes and reducing reporting time by 30%.</li>
          </ul>
        </motion.div>
        {/* Leania.ai */}
        <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-gray-800 rounded shadow-lg">
          <h3 className="text-lg font-bold">Leania.ai</h3>
          <p className="italic">Information Technology Consultant | May 2024 – Aug 2024</p>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Applied SQL and R programming for advanced data mining and analysis of insurance workflows, facilitating AI integration that led to a 25% boost in operational efficiency.</li>
            <li>Designed and visualized data insights via Power BI to support executive decision-making on Robotic Process Automation implementation, achieving £50,000 in annual cost savings and enhancing client satisfaction by 67%.</li>
          </ul>
        </motion.div>
        {/* Simtrak Solutions */}
        <motion.div whileHover={{ scale: 1.02 }} className="p-4 bg-gray-800 rounded shadow-lg">
          <h3 className="text-lg font-bold">Simtrak Solutions</h3>
          <p className="italic">Management Consultant | Dec 2022 – Mar 2023</p>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Analysed team performance metrics using Excel and SQL to generate KPI dashboards that supported strategic planning and drove a 250% improvement in business engagement.</li>
            <li>Conducted exploratory data analysis and regression modelling across 9+ client accounts, identifying process inefficiencies that led to a 20% average improvement in operational performance through targeted process enhancements.</li>
          </ul>
        </motion.div>
      </motion.div>
    ),
    Projects: (
  <motion.div key="Projects" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="space-y-6 text-sm">
    {[{
      title: "The Human Side of Hybrid Working",
      date: "Bayes Business School, 2025",
      description: "Led a mixed-methods study on hybrid working that combined primary and secondary data to examine productivity, flexibility, and well-being. Conducted regression and correlation analysis, producing actionable strategic insights for hybrid transformation in large-scale organisations.",
      link: "https://drive.google.com/file/d/1mYAgHvK9TBh_-2E8VKwLYjNVS_SJxxQS/view"
    }, {
      title: "Estimating the Proportion of Juvenile Suicide Attempts using RRT",
      date: "St. Xavier’s College, 2022",
      description: "Conducted a study comparing the Direct Survey Method and the Randomised Response Technique (RRT) to assess the prevalence of sensitive issues like suicide ideation. Used R and Excel to estimate proportions, analyse sample variance, and validate model efficiency.",
      link: "https://drive.google.com/file/d/1A7HtagnE7gi5dyqa0_JWJKR2izsUTdiG/view?usp=sharing"
    }, {
      title: "London Bus Safety",
      date: "Tableau Public Project",
      description: "Developed a live interactive dashboard in Tableau to analyse accident rates across London bus routes. Highlighted peak time periods, borough-wise risk profiles, and potential design interventions for improved safety.",
      link: "https://public.tableau.com/app/profile/rajnandini3159/viz/DataVizwithTableau_16784621573440/Dashboard1"
    }].map(({ title, date, description, link }) => (
      <motion.div key={title} whileHover={{ scale: 1.01 }} className="bg-gray-800 p-4 rounded shadow-md">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="italic text-gray-400">{date}</p>
        <p className="mt-2">{description}</p>
        <a href={link} target="_blank" rel="noreferrer" className="text-teal-400 underline text-xs mt-1 inline-block">View Project</a>
      </motion.div>
    ))}
  </motion.div>
),
    Education: (
  <motion.div key="Education" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="relative pl-6 border-l-4 border-teal-500 space-y-10 text-sm">
    {[{
      school: "Bayes Business School, London",
      degree: "MSc Management – High Merit",
      grad: "Graduation: Jan 2025"
    }, {
      school: "St. Xavier’s College (Autonomous), Kolkata",
      degree: "BSc Statistics (Hons.) – First Class",
      grad: "Graduation: Jan 2023"
    }].map(({ school, degree, grad }) => (
      <motion.div
        key={school}
        whileHover={{ scale: 1.02 }}
        className="relative bg-gray-800 p-4 rounded shadow-md ml-4"
      >
        <div className="absolute -left-6 top-4 w-4 h-4 bg-teal-500 rounded-full border-2 border-white"></div>
        <h3 className="text-lg font-bold">{school}</h3>
        <p>{degree}</p>
        <p>{grad}</p>
      </motion.div>
    ))}
  </motion.div>
),
    Leadership: (
  <motion.div
    key="Leadership"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
    className="grid gap-6 text-sm md:grid-cols-1"
  >
    {[{
      title: "Editor-in-Chief",
      description: "Led a team of 35 ambassadors and orchestrated Prakarsho 2022, annual magazine of the Department of Statistics."
    }, {
      title: "Xavotsav | Core Committee",
      description: "Orchestrated artist relations and event strategy for Xavotsav, one of East India's premier college festivals, expertly managing high-profile Indian artists and leading a cadre of 70 ambassadors to ensure efficient event execution and stakeholder management."
    }].map(({ title, description }) => (
      <motion.div
        key={title}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-tr from-gray-800 to-gray-900 border border-teal-600 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-300"
      >
        <h3 className="text-lg font-semibold text-teal-400 mb-2">{title}</h3>
        <p className="text-gray-200 leading-relaxed">{description}</p>
      </motion.div>
    ))}
  </motion.div>
),
    Skills: (
  <motion.div key="Skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="space-y-4 text-sm">
    <div>
      <h3 className="text-lg font-bold mb-2">Tools & Expertise</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {["SQL", "Advanced Excel", "Power BI", "Tableau", "Artificial Intelligence", "R programming", "Data Analysis & Visualization", "Change Management", "Project Management", "Product Management", "Business Strategy", "Management Consulting"].map(skill => (
          <motion.div whileHover={{ scale: 1.05 }} key={skill} className="rounded bg-gradient-to-r from-purple-600 to-teal-600 text-white py-2 px-3 text-center text-xs shadow-lg">
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold mb-2">Languages</h3>
      <ul className="list-disc ml-5 space-y-1">
        <li>English – Professional</li>
        <li>Hindi & Bengali – Native</li>
      </ul>
    </div>
  </motion.div>
),
    Contact: (
      <motion.div key="Contact" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="space-y-4 text-sm">
        {[{
          icon: <FaEnvelope className="text-teal-400" />, text: "rajnandinikar4@gmail.com", href: "mailto:rajnandinikar4@gmail.com"
        }, {
          icon: <FaPhone className="text-teal-400" />, text: "+44 7407 746850", href: "tel:+447407746850"
        }, {
          icon: <FaLinkedin className="text-teal-400" />, text: "linkedin.com/in/rajnandini-kar", href: "https://linkedin.com/in/rajnandini-kar"
        }, {
          icon: <MdLocationOn className="text-teal-400" />, text: "London, UK"
        }].map(({ icon, text, href }) => (
          <div key={text} className="flex items-center gap-3">
            {icon}
            {href ? <a href={href} className="underline" target="_blank" rel="noreferrer">{text}</a> : <span>{text}</span>}
          </div>
        ))}
      </motion.div>
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white font-sans">
      <header className="py-6 shadow-lg bg-gray-850">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white">Rajnandini Kar</h1>
            <p className="text-sm text-teal-300">Strategy Consultant · Data Analyst · MSc Management · BSc Statistics Hons.</p>
          </div>
          <motion.div onClick={() => setZoomed(!zoomed)} animate={{ scale: zoomed ? 1.75 : 1.25 }} transition={{ type: "spring", stiffness: 300 }} className="rounded-full overflow-hidden border-4 border-white shadow-md cursor-pointer">
            <img src={profilePic} alt="Rajnandini Kar" className="w-24 h-24 object-cover" />
          </motion.div>
        </div>
      </header>

      <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-3 justify-center md:justify-start text-sm">
        {tabs.map(tab => (
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full transition duration-300 ${
              activeTab === tab ? "bg-teal-600 text-white scale-105 shadow-md" : "bg-gray-700 text-gray-200 hover:bg-gray-600"
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8 min-h-[300px]">
        <AnimatePresence mode="wait">{tabContent[activeTab]}</AnimatePresence>
      </main>

      <footer className="text-center text-xs py-6 border-t mt-10 border-gray-700">
        &copy; {new Date().getFullYear()} Rajnandini Kar. Portfolio powered by React & Tailwind.
      </footer>
    </div>
  );
}
