import { useState, useEffect, useRef } from "react";
import profileImg from "/profile.jpeg";

const data = {
  name: "Komal Jatiya",
  title: "Information Technology Engineer",
  tagline: "Full Stack Developer · AI/ML Enthusiast · Problem Solver",
  contact: {
    email: "komaljatiya345@gmail.com",
    mobile: "+91 9302940170",
    linkedin: "https://linkedin.com/in/komal-jatiya",
    github: "https://github.com/komaljatiya123",
  },
  education: [
    { degree: "B.Tech in Information Technology", institution: "SGSITS, Indore", year: "Expected 2026", score: "CGPA: 8.61(up to 7th Sem)" },
    { degree: "Diploma in  Computer Science & Engineering", institution: "Shri Vaishnav Polytechnic College, Indore", year: "2023", score: "CGPA: 8.73" },
    { degree: "Higher Secondary (10th)", institution: "Brilliant Academy H.S. School, Indore", year: "2020", score: "89.5%" },
  ],
  achievement: "All India Rank 922 in lateral entry admission based on Diploma CGPA of 8.14",
  projects: [

    {
  title: "Fake Profile Detection using Graph Neural Networks",
  period: "Academic Project",
  type: "AI / ML",
  stack: ["Python", "Machine Learning", "Deep Learning", "Graph Neural Networks", "Data Analysis"],
  points: [
    "Developed an intelligent system to detect fake social media profiles using Graph Neural Networks (GNNs).",
    "Modeled social networks as graph structures where users represented nodes and interactions represented edges.",
    "Analyzed user behavior, relationship patterns, and suspicious account activities through graph-based learning techniques.",
    "Improved fake profile identification accuracy by leveraging network connectivity and behavioral insights."
  ],
  color: "#FF6B6B",
  link: null,
},
{
  title: "Customer Cluster-Pro – ML-Based Customer Segmentation",
  period: "Machine Learning Project",
  type: "AI / ML",
  stack: ["Python", "Pandas", "NumPy", "scikit-learn", "K-Means Clustering", "StandardScaler", "t-SNE", "Matplotlib"],
  points: [
    "Segmented 2,200+ customers into 5 behavioral groups based on income, marital status, and purchasing patterns.",
    "Built a data preprocessing pipeline to handle missing values and normalize features using StandardScaler.",
    "Optimized cluster selection using the Elbow Method for effective customer segmentation.",
    "Visualized high-dimensional customer data using t-SNE to generate meaningful customer personas and insights."
  ],
  color: "#4ECDC4",
  link: null,
},
{
  title: "MERN Stack Task Manager Application",
  period: "Full Stack Project",
  type: "MERN Stack",
  stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "REST APIs"],
  points: [
    "Built a full-stack task management application using the MERN stack architecture.",
    "Implemented task creation, updating, deletion, status tracking, and REST API integration.",
    "Designed MongoDB-based data storage and managed seamless frontend-backend communication.",
    "Strengthened understanding of CRUD operations, API testing, component-based UI design, and scalable project structure."
  ],
  color: "#45B7D1",
  link: null,
},


    {
      title: "AI-Powered Mental Health & Depression Support System",
      period: "Aug 2025 to Apr 2026",
      type: "Team Project",
      stack: ["Python", "FastAPI", "React.js", "LLaMA 3", "Hugging Face", "MediaPipe", "Three.js", "MongoDB"],
      points: [
        "Intelligent digital therapeutic platform with real-time 3D AI avatar and multimodal emotional interaction.",
        "Fine-tuned LLaMA 3 using LoRA for empathetic, CBT-aligned conversational responses.",
        "Integrated NLP emotion detection (DistilBERT/RoBERTa), AI-guided meditation, and journaling modules.",
        "Built MediaPipe-powered CV yoga correction module for real-time posture feedback.",
        "Privacy-focused mental wellness experience accessible without professional intervention.",
      ],
      color: "#7C6BEB",
      link: null,
    },
    {
      title: "Official Club Website  #include",
      period: "Feb 2025 to Apr 2025",
      type: "Full Stack",
      stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
      points: [
        "Designed and deployed official website for #include Technical Club at SGSITS, Indore.",
        "Dynamic event management, member directory, newsletter subscriptions, real-time MongoDB integration.",
        "Fully responsive UI across all devices with optimized performance and modern design.",
      ],
      color: "#2EB8A0",
      link: "https://college-club-website.vercel.app/members.html",
    },
  ],
  Experience: [

    {
    role: "LLM Post-Training Intern",
    company: "Ethara AI",
    period: "Jan 2026 to Apr 2026",
    points: [
      "Worked on Large Language Model (LLM) post-training tasks, including RLHF and Supervised Fine-Tuning (SFT) evaluation workflows.",
      "Evaluated AI-generated responses for instruction following, factual accuracy, reasoning quality, formatting, and visual consistency.",
      "Performed prompt-response analysis and comparative evaluation for text, text-to-image, and multimodal AI systems.",
      "Improved dataset quality by identifying hallucinations, weak reasoning, formatting issues, inconsistent outputs, and response errors.",
      "Contributed to training data preparation, annotation workflows, content review, and AI model evaluation processes.",
      "Collaborated with AI training teams to improve model alignment, response quality, and overall performance."
    ],
  },
  {
    role: "Backend Intern",
    company: "Pixel Tech, Indore",
    period: "May 2025 to Jul 2025",
    points: [
      "Worked on backend development tasks involving API integration, debugging, database operations, and implementation support.",
      "Assisted in building and testing backend modules for user data management, request processing, and service integration.",
      "Gained hands-on experience with GitHub workflows, codebase maintenance, issue resolution, and technical documentation.",
      "Enhanced understanding of REST APIs, backend architecture, database handling, debugging techniques, and collaborative software development."
    ],
  },
    {
      role: "Salesforce Intern",
      company: "Techcoopers Software Solutions, Indore",
      period: "Jun 2025 to Jul 2025",
      points: [
        "Implemented core Salesforce CRM modules: leads, contacts, and accounts.",
        "Managed leads, opportunities, and workflow automation within the Salesforce environment.",
      ],
    },
    {
      role: "Crowdfunding Intern",
      company: "Muskurahat Foundation",
      period: "Extracurricular",
      points: ["Raised funds for social causes through online outreach and personal networks."],
    },
  ],
  skills: {
     "Operating Systems": ["Windows", "Linux"],

  "Languages": [
    "C",
    "C++",
    "Python",
    "SQL",
    "TypeScript",
    "PHP",
    "JavaScript",
    "HTML5",
    "CSS3"
  ],

  "Web Development": [
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "Tailwind CSS",
    "Bootstrap",
    "REST APIs",
    "Framer Motion"
  ],

  "Databases": [
    "MongoDB",
    "MySQL",
    "Firebase"
  ],

  "AI / ML": [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing (NLP)",
    "Prompt Engineering",
    "LLM Evaluation",
    "Data Annotation",
    "TensorFlow",
    "PyTorch",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Snorkel AI",
    "VADER NLP",
    "K-Means Clustering",
    "StandardScaler",
    "Elbow Method",
    "t-SNE"
  ],

  "Core CS": [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Software Engineering"
  ],

  "Cloud & Deployment": [
    "AWS",
    "Firebase",
    "Vercel"
  ],

  "Tools": [
    "Git",
    "GitHub",
    "VS Code",
    "Flask",
    "UUID"
  ]
  },
  certifications: [
    "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional – Oracle University",
    "Programming in Java – NPTEL (IIT Kharagpur) | Elite Certificate | Score: 92%",
  ],
  extras: ["Participated in Design Dazzle 2024 at SGSITS; built an Online Book Store using HTML, CSS & JavaScript."],
};

const NAV_LINKS = ["About", "Education", "Projects", "Experience", "Skills", "Contact"];

function useScrollSpy() {
  const [active, setActive] = useState("About");
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 120;
      let current = "About";
      NAV_LINKS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Tag({ label, color = "#7C6BEB" }) {
  return (
    <span style={{ display:"inline-block", padding:"2px 10px", borderRadius:20, fontSize:11, fontWeight:600, letterSpacing:"0.05em", background:color+"22", color, border:`1px solid ${color}44`, margin:"3px 3px 3px 0" }}>
      {label}
    </span>
  );
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef();
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: vis?1:0, transform: vis?"translateY(0)":"translateY(28px)", transition:`opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={{ marginBottom:36 }}>
      <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(1.6rem,3vw,2.2rem)", fontWeight:700, color:"#0F0F14", margin:0, letterSpacing:"-0.02em" }}>{children}</h2>
      <div style={{ marginTop:8, width:48, height:3, background:"linear-gradient(90deg, #7C6BEB, #2EB8A0)", borderRadius:4 }} />
    </div>
  );
}

export default function Portfolio() {
  const active = useScrollSpy();

  return (
    <div style={{ fontFamily:"'DM Sans', sans-serif", background:"#FAFAF8", minHeight:"100vh", color:"#0F0F14" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-thumb{background:#7C6BEB44;border-radius:4px}
        html{scroll-behavior:smooth}
        a{color:inherit;text-decoration:none}
        .nav-link{cursor:pointer;transition:color 0.2s}
        .nav-link:hover{color:#7C6BEB}
        .card-hover{transition:transform 0.22s,box-shadow 0.22s}
        .card-hover:hover{transform:translateY(-4px);box-shadow:0 20px 48px #7C6BEB18}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
        .hero-anim{animation:fadeUp 0.9s ease forwards}
        .hero-anim-2{animation:fadeUp 0.9s 0.15s ease both}
        .hero-anim-3{animation:fadeUp 0.9s 0.3s ease both}
        .hero-anim-4{animation:fadeUp 0.9s 0.45s ease both}
        .hero-anim-5{animation:fadeUp 0.9s 0.6s ease both}
        .float-shape{animation:float 6s ease-in-out infinite}
        .float-shape-slow{animation:float 9s ease-in-out infinite}
        .profile-ring{transition:transform 0.3s}
        .profile-ring:hover{transform:scale(1.04)}
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, background:"rgba(250,250,248,0.88)", backdropFilter:"blur(14px)", borderBottom:"1px solid #E8E8E0", padding:"0 clamp(16px,5vw,64px)", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
        <span style={{ fontFamily:"'Playfair Display', serif", fontWeight:700, fontSize:18, letterSpacing:"-0.02em" }}>
          KJ<span style={{ color:"#7C6BEB" }}>.</span>
        </span>
        <div style={{ display:"flex", gap:28, alignItems:"center", flexWrap:"wrap" }}>
          {NAV_LINKS.map((link) => (
            <span key={link} className="nav-link" onClick={() => scrollTo(link)} style={{ fontSize:13, fontWeight:500, letterSpacing:"0.04em", color:active===link?"#7C6BEB":"#555", borderBottom:active===link?"2px solid #7C6BEB":"2px solid transparent", paddingBottom:2 }}>
              {link}
            </span>
          ))}
        </div>
        <a href={`mailto:${data.contact.email}`} style={{ background:"#7C6BEB", color:"#fff", padding:"8px 20px", borderRadius:24, fontSize:13, fontWeight:600 }}>Hire Me</a>
      </nav>

      {/* HERO */}
      <section id="About" style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:"100px clamp(20px,8vw,120px) 60px", position:"relative", overflow:"hidden" }}>
        <div className="float-shape" style={{ position:"absolute", top:"12%", right:"8%", width:320, height:320, borderRadius:"60% 40% 30% 70%/60% 30% 70% 40%", background:"linear-gradient(135deg,#7C6BEB22,#2EB8A011)", filter:"blur(2px)" }} />
        <div className="float-shape-slow" style={{ position:"absolute", bottom:"10%", left:"2%", width:180, height:180, borderRadius:"50%", background:"linear-gradient(135deg,#2EB8A018,#7C6BEB11)", filter:"blur(1px)" }} />

        <div style={{ display:"flex", alignItems:"center", gap:"clamp(40px,6vw,100px)", flexWrap:"wrap", zIndex:1, width:"100%", maxWidth:1000 }}>
          {/* Text */}
          <div style={{ flex:"1 1 340px" }}>
            <div className="hero-anim" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#7C6BEB11", border:"1px solid #7C6BEB33", borderRadius:24, padding:"6px 16px", marginBottom:28 }}>
              <span style={{ width:7, height:7, borderRadius:"50%", background:"#2EB8A0", animation:"pulse 2s infinite" }} />
              <span style={{ fontSize:12, fontWeight:500, color:"#7C6BEB", letterSpacing:"0.06em" }}>AVAILABLE FOR OPPORTUNITIES</span>
            </div>
            <h1 className="hero-anim-2" style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(2.8rem,7vw,5rem)", fontWeight:700, lineHeight:1.08, letterSpacing:"-0.03em", margin:"0 0 16px", color:"#0F0F14" }}>
              Komal<br /><em style={{ color:"#7C6BEB" }}>Jatiya</em>
            </h1>
            <p className="hero-anim-3" style={{ fontSize:"clamp(0.95rem,2vw,1.1rem)", color:"#555", margin:"0 0 8px", lineHeight:1.5 }}>{data.title}</p>
            <p className="hero-anim-3" style={{ fontSize:13, color:"#888", fontFamily:"'DM Mono', monospace", letterSpacing:"0.05em", margin:"0 0 36px" }}>{data.tagline}</p>
            <div className="hero-anim-4" style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:52 }}>
              <button onClick={() => scrollTo("Projects")} style={{ background:"#0F0F14", color:"#fff", border:"none", padding:"13px 28px", borderRadius:32, fontSize:14, fontWeight:600, cursor:"pointer" }}>View Projects →</button>
              <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ background:"transparent", color:"#0F0F14", border:"1.5px solid #0F0F14", padding:"13px 28px", borderRadius:32, fontSize:14, fontWeight:600 }}>LinkedIn ↗</a>
            </div>
            <div className="hero-anim-5" style={{ display:"flex", gap:36, flexWrap:"wrap" }}>
              {[{num:"AIR 922",label:"Lateral Entry Rank"},{num:"92%",label:"NPTEL Java Score"},{num:"2+",label:"Major Projects"},{num:"2",label:"Certifications"}].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(1.4rem,3vw,1.9rem)", fontWeight:700, color:"#7C6BEB" }}>{s.num}</div>
                  <div style={{ fontSize:11, color:"#888", letterSpacing:"0.06em", fontWeight:500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Photo */}
          <div className="hero-anim-3" style={{ flex:"0 0 auto" }}>
            <div className="profile-ring" style={{ position:"relative", width:240, height:240 }}>
              {/* Decorative ring */}
              <div style={{ position:"absolute", inset:-6, borderRadius:"50%", background:"linear-gradient(135deg,#7C6BEB,#2EB8A0)", padding:4 }}>
                <div style={{ width:"100%", height:"100%", borderRadius:"50%", background:"#FAFAF8" }} />
              </div>
              {/* Floating dot decorations */}
              <div style={{ position:"absolute", top:-14, right:-14, width:24, height:24, borderRadius:"50%", background:"#7C6BEB", opacity:0.7 }} />
              <div style={{ position:"absolute", bottom:-10, left:-10, width:16, height:16, borderRadius:"50%", background:"#2EB8A0", opacity:0.7 }} />
              <img
                src={profileImg}
                alt="Komal Jatiya"
                style={{ position:"absolute", inset:6, width:"calc(100% - 12px)", height:"calc(100% - 12px)", borderRadius:"50%", objectFit:"cover", objectPosition:"center top", zIndex:1 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="Education" style={{ padding:"80px clamp(20px,8vw,120px)", background:"#F4F3FF" }}>
        <FadeIn><SectionTitle>Education</SectionTitle></FadeIn>
        <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
          {data.education.map((e, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="card-hover" style={{ background:"#fff", border:"1px solid #E8E8E0", borderRadius:16, padding:"24px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
                <div>
                  <div style={{ fontFamily:"'Playfair Display', serif", fontSize:17, fontWeight:700, color:"#0F0F14", marginBottom:4 }}>{e.degree}</div>
                  <div style={{ fontSize:13, color:"#666" }}>{e.institution}</div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontFamily:"'DM Mono', monospace", fontSize:13, color:"#7C6BEB", fontWeight:500 }}>{e.score}</div>
                  <div style={{ fontSize:12, color:"#aaa", marginTop:2 }}>{e.year}</div>
                </div>
              </div>
            </FadeIn>
          ))}
          <FadeIn delay={0.35}>
            <div style={{ background:"linear-gradient(135deg,#7C6BEB,#5A4FD1)", borderRadius:16, padding:"20px 28px", display:"flex", alignItems:"center", gap:16, color:"#fff" }}>
              <span style={{ fontSize:28 }}>🏆</span>
              <div>
                <div style={{ fontWeight:600, fontSize:14 }}>Scholastic Achievement</div>
                <div style={{ fontSize:13, opacity:0.85, marginTop:2 }}>{data.achievement}</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="Projects" style={{ padding:"80px clamp(20px,8vw,120px)" }}>
        <FadeIn><SectionTitle>Projects</SectionTitle></FadeIn>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:28 }}>
          {data.projects.map((p, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="card-hover" style={{ background:"#fff", border:`1px solid ${p.color}33`, borderRadius:20, padding:"28px", display:"flex", flexDirection:"column" }}>
                <div style={{ width:36, height:4, background:p.color, borderRadius:4, marginBottom:20 }} />
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                  <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:18, fontWeight:700, color:"#0F0F14", margin:0, lineHeight:1.3, flex:1, paddingRight:12 }}>{p.title}</h3>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer"
                      style={{ display:"inline-flex", alignItems:"center", gap:5, background:p.color, color:"#fff", padding:"6px 14px", borderRadius:20, fontSize:11, fontWeight:700, whiteSpace:"nowrap", flexShrink:0 }}>
                      Live ↗
                    </a>
                  )}
                </div>
                <div style={{ fontSize:11, color:"#999", fontFamily:"'DM Mono', monospace", marginBottom:16, letterSpacing:"0.04em" }}>{p.type} · {p.period}</div>
                <div style={{ marginBottom:18, flexGrow:1 }}>
                  {p.points.map((pt, j) => (
                    <div key={j} style={{ display:"flex", gap:10, marginBottom:9, fontSize:13, color:"#444", lineHeight:1.5 }}>
                      <span style={{ color:p.color, fontWeight:700, flexShrink:0, marginTop:1 }}>›</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
                <div>{p.stack.map((s) => <Tag key={s} label={s} color={p.color} />)}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="Experience" style={{ padding:"80px clamp(20px,8vw,120px)", background:"#F4F3FF" }}>
        <FadeIn><SectionTitle>Experience</SectionTitle></FadeIn>
        <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
          {data.Experience.map((intern, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="card-hover" style={{ background:"#fff", borderRadius:18, padding:"26px 28px", border:"1px solid #E8E8E0", display:"flex", gap:20, flexWrap:"wrap" }}>
                <div style={{ width:48, height:48, borderRadius:14, background:"linear-gradient(135deg,#7C6BEB22,#2EB8A011)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>💼</div>
                <div style={{ flex:1, minWidth:220 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:8, marginBottom:4 }}>
                    <div>
                      <div style={{ fontWeight:700, fontSize:16, color:"#0F0F14" }}>{intern.role}</div>
                      <div style={{ fontSize:13, color:"#7C6BEB", fontWeight:500 }}>{intern.company}</div>
                    </div>
                    <div style={{ fontFamily:"'DM Mono', monospace", fontSize:11, color:"#aaa", letterSpacing:"0.04em" }}>{intern.period}</div>
                  </div>
                  <ul style={{ margin:"12px 0 0", paddingLeft:18 }}>
                    {intern.points.map((pt, j) => (
                      <li key={j} style={{ fontSize:13, color:"#555", marginBottom:6, lineHeight:1.5 }}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <div style={{ marginTop:28, background:"#fff", borderRadius:18, padding:"24px 28px", border:"1px solid #E8E8E0" }}>
            <div style={{ fontWeight:700, fontSize:15, color:"#0F0F14", marginBottom:12 }}>Extracurricular</div>
            {data.extras.map((e, i) => (
              <div key={i} style={{ display:"flex", gap:10, fontSize:13, color:"#555", lineHeight:1.5 }}>
                <span style={{ color:"#2EB8A0", fontWeight:700 }}>›</span>
                <span>{e}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* SKILLS */}
      <section id="Skills" style={{ padding:"80px clamp(20px,8vw,120px)" }}>
        <FadeIn><SectionTitle>Skills</SectionTitle></FadeIn>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:20 }}>
          {Object.entries(data.skills).map(([cat, items], i) => (
            <FadeIn key={cat} delay={i * 0.08}>
              <div className="card-hover" style={{ background:"#fff", borderRadius:16, padding:"22px", border:"1px solid #E8E8E0" }}>
                <div style={{ fontSize:11, fontWeight:700, letterSpacing:"0.1em", color:"#7C6BEB", marginBottom:14, fontFamily:"'DM Mono', monospace" }}>{cat.toUpperCase()}</div>
                <div>{items.map((item) => <Tag key={item} label={item} />)}</div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <div style={{ marginTop:40 }}>
            <h3 style={{ fontFamily:"'Playfair Display', serif", fontSize:20, fontWeight:700, color:"#0F0F14", marginBottom:20 }}>Certifications</h3>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {data.certifications.map((c, i) => (
                <div key={i} className="card-hover" style={{ background:"#fff", borderRadius:14, padding:"18px 22px", border:"1px solid #E8E8E0", display:"flex", alignItems:"center", gap:14, fontSize:13, color:"#444" }}>
                  <span style={{ fontSize:20 }}>📜</span>{c}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CONTACT */}
      <section id="Contact" style={{ padding:"80px clamp(20px,8vw,120px) 100px", background:"#0F0F14", color:"#fff", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"-60px", right:"-60px", width:320, height:320, borderRadius:"50%", background:"radial-gradient(circle,#7C6BEB33,transparent 70%)" }} />
        <FadeIn>
          <div style={{ position:"relative", zIndex:1 }}>
            <div style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:700, letterSpacing:"-0.02em", marginBottom:12 }}>
              Let's Work <em style={{ color:"#7C6BEB" }}>Together</em>
            </div>
            <p style={{ color:"#aaa", fontSize:15, marginBottom:48, maxWidth:480 }}>I'm always open to new opportunities, collaborations, and interesting conversations.</p>
            <div style={{ display:"flex", flexDirection:"column", gap:20, maxWidth:420 }}>
              {[
                { icon:"✉️", label:"Email", value:data.contact.email, href:`mailto:${data.contact.email}` },
                { icon:"📞", label:"Mobile", value:data.contact.mobile, href:`tel:${data.contact.mobile}` },
                { icon:"💼", label:"LinkedIn", value:"komal-jatiya", href:data.contact.linkedin },
                { icon:"🐙", label:"GitHub", value:"komaljatiya123", href:data.contact.github },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  style={{ display:"flex", alignItems:"center", gap:16, padding:"18px 22px", background:"#1A1A22", borderRadius:14, border:"1px solid #ffffff11", color:"#fff", transition:"border-color 0.2s,transform 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor="#7C6BEB66"; e.currentTarget.style.transform="translateX(6px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor="#ffffff11"; e.currentTarget.style.transform="translateX(0)"; }}>
                  <span style={{ fontSize:20 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize:10, color:"#666", letterSpacing:"0.08em", fontFamily:"'DM Mono', monospace" }}>{item.label}</div>
                    <div style={{ fontSize:14, color:"#ddd", marginTop:2 }}>{item.value}</div>
                  </div>
                  <span style={{ marginLeft:"auto", color:"#444", fontSize:16 }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <div style={{ background:"#0F0F14", borderTop:"1px solid #1A1A22", padding:"20px clamp(20px,8vw,120px)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8 }}>
        <span style={{ fontFamily:"'Playfair Display', serif", color:"#444", fontSize:14 }}>Komal Jatiya<span style={{ color:"#7C6BEB" }}>.</span></span>
        <span style={{ color:"#333", fontSize:12, fontFamily:"'DM Mono', monospace" }}>© 2026 · Built with React</span>
      </div>
    </div>
  );
}
