export const profile = {
  name: 'Manish Gadekar',
  title: 'Manish Gadekar | Senior .NET Full Stack Developer',
  role: 'Senior Full Stack Developer',
  shortRole: '.NET & Angular',
  tagline:
    'Architecting high-performance enterprise applications across Banking, Insurance, and Clinical Trials. Specialized in C#, ASP.NET Core, Angular, React, and SQL Server query optimization.',
  email: 'manishgadekar1111@gmail.com',
  phone: '+91 92842 98975',
  location: 'Pune, India',
  github: 'https://github.com/manish005',
  linkedin: 'https://www.linkedin.com/in/manish-gadekar/',
  resumeUrl: '/Manish_Gadekar_Resume.pdf',
};

export const stats = [
  { label: 'Years of Experience', value: '5+', desc: 'Building enterprise systems' },
  { label: 'Major Deliveries', value: '6+', desc: 'On-time product increments' },
  { label: 'EDI Batch Processing', value: '20K+', desc: 'Member records / batch' },
  { label: 'Query Performance', value: '15-20%', desc: 'Database execution boost' },
];

export const about = {
  summary:
    'Full Stack Developer with 5+ years of hands-on experience designing and engineering enterprise-grade web applications in Banking & Finance, Insurance, and Clinical Trials. Expert in C#, ASP.NET Core, MVC, Web API, Angular, React, and SQL Server — with a proven track record of optimizing database performance, driving CI/CD automation in Azure DevOps, and delivering zero-defect features on schedule.',
  highlights: [
    { title: 'Database Optimization', desc: 'Accelerated SQL query performance by 15–20% using indexed views, execution plan analysis, and stored procedure refactoring.' },
    { title: 'EDI System Reliability', desc: 'Reduced batch data errors from >5% to <2% while cutting batch processing time by ~20% for 20,000+ member upload pipelines.' },
    { title: 'Enterprise Delivery', desc: 'Successfully delivered 6+ major product increments across Medidata Clinical Platforms and Liberty Corporate Connect with minimal post-deployment defects.' },
    { title: 'Team Leadership & Mentorship', desc: 'Mentored 2 junior engineers, streamlining onboarding workflows and accelerating ramp-up times by ~20%.' },
  ],
};

export const projects = [
  {
    id: 'clinical-trials',
    name: 'Clinical Trials Management Platform',
    category: 'Enterprise .NET',
    domain: 'Healthcare & Clinical',
    description:
      'Backend clinical trials administration suite managing patient enrollment, drug dosing protocols, and trial compliance outcome reporting for pharmaceutical sponsors.',
    longDescription:
      'Developed core backend services handling patient enrollment, drug administration tracking, and regulatory workflow validation. Integrated Medidata APIs across 3+ external pharma clients for secure cross-system data synchronization.',
    stack: ['ASP.NET Core', 'C#', 'Entity Framework', 'React.js', 'SQL Server', 'Azure DevOps'],
    metrics: ['Sub-second Reporting', '3+ Pharma Integrations', 'Strict EF Workflow Checks'],
    featured: true,
    link: 'https://github.com/manish005',
  },
  {
    id: 'liberty-pension',
    name: 'Liberty Corporate Pension & Payroll Engine',
    category: 'Enterprise .NET',
    domain: 'Banking & Finance',
    description:
      'Enterprise payroll and pension administration platform managing 15,000+ pension schemes with automated member enrollment and invoice billing generation.',
    longDescription:
      'Built member management and automated billing modules. Reduced overall page rendering time by 15% through T-SQL stored procedure optimizations and indexed views.',
    stack: ['ASP.NET MVC', 'C#', 'JavaScript', 'ADO.NET', 'SQL Server', 'T-SQL'],
    metrics: ['15,000+ Schemes', '15% Faster Load Time', 'Zero-Defect Code Reviews'],
    featured: true,
    link: 'https://github.com/manish005',
  },
  {
    id: 'net-wealth-analytics',
    name: 'Policy Net Wealth Analytics Dashboard',
    category: 'Web APIs & Microservices',
    domain: 'Insurance & Analytics',
    description:
      'Interactive financial portfolio analytics reporting module rendering real-time portfolio insights across 5,000+ policy records daily.',
    longDescription:
      'Designed RESTful Web APIs with JWT-based authentication and role-based access control. Developed dynamic Angular dashboards for financial portfolio aggregation.',
    stack: ['Angular', 'TypeScript', 'ASP.NET Web API', 'EF Core', 'JWT Security', 'SQL Server'],
    metrics: ['5,000+ Daily Policies', 'JWT Secured APIs', 'Real-Time Insights'],
    featured: true,
    link: 'https://github.com/manish005',
  },
  {
    id: 'edi-ingestion',
    name: 'Bulk EDI Member Data Ingestion Pipeline',
    category: 'Data & SQL Optimization',
    domain: 'Healthcare & Insurance',
    description:
      'High-throughput Electronic Data Interchange system processing bulk member uploads of 20,000+ records per batch with multi-stage validation.',
    longDescription:
      'Re-architected validation pipelines to catch bad records early, dropping error rate from 5% to under 2% and speeding up batch uploads by 20%.',
    stack: ['C#', 'ASP.NET Web Forms', 'ADO.NET', 'SQL Server', 'T-SQL Stored Procedures'],
    metrics: ['20,000+ Records/Batch', '<2% Error Rate', '20% Processing Speedup'],
    featured: true,
    link: 'https://github.com/manish005',
  },
];

export const personalProjects = [
  {
    id: 'arthamitra',
    name: 'ArthaMitra',
    tagline: 'Personal Finance Companion',
    description:
      'Full-featured personal finance dashboard to manage transactions, budgets, goals, investments, EMIs — with AI-powered insights via Gemini.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'Firebase', 'Gemini AI'],
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0ea5e9 100%)',
    icon: '💰',
    liveUrl: 'https://arthamitraaa.web.app',
    githubUrl: 'https://github.com/manish005/ArthaMitra',
    features: ['Dashboard & Charts', 'Budgets & Goals', 'AI Assistant', 'EMI Calculator', 'Excel Export'],
  },
  {
    id: 'trademetric',
    name: 'TradeMetric',
    tagline: 'Compounding & Risk Calculator',
    description:
      'Daily compound interest & Forex planning tool with trading-day awareness, multi-currency projections, and a trade journal.',
    stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion', 'Firebase Auth'],
    gradient: 'linear-gradient(135deg, #0c0a09 0%, #1a1a2e 50%, #16213e 100%)',
    icon: '📈',
    liveUrl: 'https://tradermatrix.in',
    githubUrl: 'https://github.com/manish005/TradeMetric',
    features: ['Compound Calculator', 'Trade Journal', 'Risk/Reward', '9 Themes', 'CSV Export'],
  },
  {
    id: 'flashlearn',
    name: 'FlashLearn',
    tagline: 'Swipe. Learn. Remember.',
    description:
      'Swipeable flashcard platform for interview prep — active recall, smart revision queues, and topic-based decks for .NET, React, SQL, and more.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase'],
    gradient: 'linear-gradient(135deg, #18181b 0%, #27272a 50%, #a78bfa 100%)',
    icon: '🧠',
    liveUrl: 'https://flashlearn-smoky.vercel.app',
    githubUrl: 'https://github.com/manish005',
    features: ['Swipe Cards', 'Smart Revision', '50K+ Cards', 'Topic Decks', 'Save & Master'],
  },
  {
    id: 'cineverse',
    name: 'CineVerse',
    tagline: 'Movie Discovery Platform',
    description:
      'Cinematic movie discovery app for browsing, searching, and exploring films with rich metadata and curated collections.',
    stack: ['React', 'TypeScript', 'TMDB API', 'Tailwind CSS'],
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #e94560 100%)',
    icon: '🎬',
    liveUrl: 'https://cineverse-bice.vercel.app',
    githubUrl: 'https://github.com/manish005/CineVerse',
    features: ['Movie Search', 'Rich Metadata', 'Curated Lists', 'Responsive UI'],
  },
  {
    id: 'sololeveling',
    name: 'SoloLeveling',
    tagline: 'Gamified Self-Improvement',
    description:
      'Task & habit tracker inspired by Solo Leveling — complete quests, level up skills, earn XP, unlock ranks from E to SSS.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'Cloudinary'],
    gradient: 'linear-gradient(135deg, #0d1117 0%, #1b2838 50%, #3B82F6 100%)',
    icon: '⚔️',
    liveUrl: 'https://sololeveliing.web.app',
    githubUrl: 'https://github.com/manish005/SoloLeveling',
    features: ['Quest System', 'Skill Tree', 'XP & Ranks', 'Workout Log', 'Challenges'],
  },
  {
    id: 'loharmatrimony',
    name: 'Lohar Matrimony',
    tagline: 'Community Matchmaking Platform',
    description:
      'Feature-rich matrimonial platform for the Lohar community with multi-lingual support, KYC verification, real-time chat, and admin controls.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'Firebase', 'Framer Motion'],
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b69 50%, #e94560 100%)',
    icon: '💍',
    liveUrl: 'https://loharmatrimonyy.web.app',
    githubUrl: 'https://github.com/manish005/loharmatrimony',
    features: ['Multi-Lingual', 'KYC Verified', 'Real-Time Chat', 'Admin Panel', 'Match Filters'],
  },
];

export const experience = [
  {
    company: 'Dassault Systèmes (Medidata)',
    title: 'Services Software Consultant',
    period: 'Apr 2025 – Present',
    location: 'Pune, India',
    type: 'Full-time',
    description:
      'Leading development of critical backend modules for Medidata’s clinical trials management platform used worldwide by bio-pharmaceutical organizations.',
    projects: [
      {
        name: 'Clinical Trials Management & Compliance Engine',
        stack: ['ASP.NET Core', 'C#', 'Entity Framework', 'React.js', 'SQL Server', 'Azure DevOps'],
        points: [
          'Engineered resilient backend services for managing subject enrollment, trial dosage tracking, and regulatory outcome reporting.',
          'Maintained sub-second query performance on complex multi-million row datasets through optimized SQL Server query plans and indexing.',
          'Enforced clinical compliance checks using Entity Framework and custom C# validation domain logic.',
          'Successfully integrated with 3+ external pharmaceutical clients using Medidata REST APIs for secure data exchange.',
        ],
      },
    ],
  },
  {
    company: 'LTIMindtree',
    title: 'Senior Software Engineer',
    period: 'Oct 2021 – Apr 2025',
    location: 'Pune, India',
    type: 'Full-time',
    description:
      'Delivered full-stack enterprise solutions across corporate finance, pension administration, policy analytics, and high-volume data ingestion.',
    projects: [
      {
        name: 'Liberty Corporate Connect (LCC) – Pension Engine',
        stack: ['ASP.NET MVC', 'C#', 'JavaScript', 'ADO.NET', 'SQL Server'],
        points: [
          'Engineered and optimized a core payroll system servicing 15,000+ corporate pension schemes.',
          'Reduced web application page load latency by ~15% via T-SQL query refactoring, execution plan tuning, and indexed view generation.',
          'Conducted regular code reviews for a 4-developer engineering team, reducing post-release defect density.',
        ],
      },
      {
        name: 'Policy Management & Financial Analytics Module',
        stack: ['Angular', 'TypeScript', 'ASP.NET Web API', 'EF Core', 'SQL Server'],
        points: [
          'Architected a Net Wealth report generation engine evaluating 5,000+ insurance policies daily.',
          'Implemented end-to-end security using JWT token authentication and role-based granular permissions.',
          'Built responsive, interactive Angular charts for financial advisors to analyze asset allocation.',
        ],
      },
      {
        name: 'EDI Bulk Data Ingestion Suite',
        stack: ['ASP.NET Web Forms', 'C#', 'ADO.NET', 'SQL Server'],
        points: [
          'Constructed a high-volume batch data processing pipeline handling 20,000+ member uploads per run.',
          'Cut total batch execution time by ~20% and reduced raw data validation errors from >5% to <2%.',
        ],
      },
    ],
  },
];

export const skillsCategories = [
  {
    id: 'backend',
    category: 'Backend & .NET Ecosystem',
    icon: 'Server',
    skills: [
      { name: 'ASP.NET Core', level: 'Expert', highlight: '5+ yrs' },
      { name: 'C# / .NET 8', level: 'Expert', highlight: 'Core Stack' },
      { name: 'ASP.NET MVC', level: 'Advanced', highlight: 'Enterprise' },
      { name: 'Entity Framework Core', level: 'Expert', highlight: 'ORM' },
      { name: 'ADO.NET', level: 'Advanced', highlight: 'High-Perf' },
      { name: 'RESTful Web APIs', level: 'Expert', highlight: 'API Design' },
    ],
  },
  {
    id: 'frontend',
    category: 'Frontend & UI Tech',
    icon: 'Layout',
    skills: [
      { name: 'Angular (v10+)', level: 'Advanced', highlight: 'TypeScript' },
      { name: 'React.js', level: 'Advanced', highlight: 'Modern UI' },
      { name: 'TypeScript', level: 'Advanced', highlight: 'Typed JS' },
      { name: 'JavaScript (ES6+)', level: 'Expert', highlight: 'DOM & Async' },
      { name: 'HTML5 & CSS3', level: 'Expert', highlight: 'Responsive' },
      { name: 'Tailwind CSS & Bootstrap', level: 'Advanced', highlight: 'Styling' },
    ],
  },
  {
    id: 'database',
    category: 'Databases & Query Optimization',
    icon: 'Database',
    skills: [
      { name: 'SQL Server (2008–2022)', level: 'Expert', highlight: '15-20% Boost' },
      { name: 'T-SQL & Stored Procedures', level: 'Expert', highlight: 'Advanced' },
      { name: 'Query Optimization', level: 'Expert', highlight: 'Indexing' },
      { name: 'Oracle SQL', level: 'Intermediate', highlight: 'RDBMS' },
      { name: 'Execution Plan Tuning', level: 'Advanced', highlight: 'Performance' },
    ],
  },
  {
    id: 'devops',
    category: 'DevOps, Tools & Architecture',
    icon: 'Cpu',
    skills: [
      { name: 'Azure DevOps', level: 'Advanced', highlight: 'CI/CD' },
      { name: 'Git & GitHub', level: 'Expert', highlight: 'VCS' },
      { name: 'IIS & Kestrel', level: 'Advanced', highlight: 'Hosting' },
      { name: 'SOLID Principles', level: 'Expert', highlight: 'Architecture' },
      { name: 'Repository & Unit of Work', level: 'Expert', highlight: 'Design Pattern' },
      { name: 'JWT Security & Auth', level: 'Advanced', highlight: 'OAuth2/JWT' },
    ],
  },
];

export const education = [
  {
    degree: 'Bachelor of Engineering (B.E.) in Computer Engineering',
    school: 'JSPM BSIOTR, Wagholi · Savitribai Phule Pune University',
    year: '2018 – 2021',
    score: '72% (First Class with Distinction)',
    icon: 'GraduationCap',
  },
  {
    degree: 'Diploma in Computer Engineering',
    school: 'Sanjivani K.B.P Polytechnic, Kopargaon · MSBTE',
    year: '2015 – 2018',
    score: '76.88% (First Class with Distinction)',
    icon: 'BookOpen',
  },
];

export const certifications = [
  { title: 'ASP.NET Full Stack Developer Certification', issuer: 'Enterprise Company Sponsored' },
  { title: 'Python for Data Science', issuer: 'NPTEL / Online Certification' },
  { title: 'Fuel Artificial Intelligence & ML Foundations', issuer: 'Industry Program' },
  { title: 'Outstanding Performance Rating Award', issuer: 'LTIMindtree (2023)' },
  { title: 'Award for Successful Project Deliverables', issuer: 'LTIMindtree (2024)' },
];
