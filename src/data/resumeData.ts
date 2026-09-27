export interface ResumeBasics {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  links: Array<{ label: string; url: string }>;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
  keyHighlight?: string;
  metrics?: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  metric: string;
  context: string;
  category: 'leadership' | 'operations' | 'risk' | 'global';
  sourceRole: string;
}

export interface ProjectItem {
  title: string;
  stack: string[];
  bullets: string[];
  links?: Array<{ label: string; url: string }>;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface ResumeData {
  basics: ResumeBasics;
  experience: ExperienceItem[];
  achievements: AchievementItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  education: EducationItem[];
  certifications: string[];
  awards: string[];
  extra: string[];
}

export const resumeData: ResumeData = {
  basics: {
    name: "Vicky Jotwani",
    title: "Team Lead – AML/KYC Client Risk Framework | People Leadership | Operational Risk & Controls",
    summary: "AML/KYC compliance leader with 9+ years across banking and fund/investor services, including proven people leadership of teams of 12+ analysts. Strong track record establishing operational processes, managing service delivery, and driving quality and productivity through KPI/SLA ownership and root-cause analysis. Direct experience with complex client and entity structures through fund administration work (Apex Fund Services), alongside deep AML/KYC/CDD/EDD, remediation, and sanctions screening expertise across banking and investor services. Skilled at coaching and developing analysts, managing escalations and audits as a key stakeholder point of contact, and translating regulatory requirements into sustainable controls and measurable outcomes.",
    location: "Pune, India",
    email: "vjotwani24@icloud.com",
    phone: "+91 8010710826",
    links: [
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/vicky-jotwani-552371249"
      }
    ]
  },
  experience: [
    {
      id: "sg-analytics",
      company: "SG Analytics Pvt Ltd",
      role: "Senior Analyst – AML Compliance",
      dates: "Mar 2023 – Present",
      location: "Pune",
      keyHighlight: "Leading 12+ compliance analysts & driving Jira workflow governance",
      metrics: ["12+ Analysts Coached", "Jira Case Workflows", "KPI/SLA Governance"],
      bullets: [
        "Lead and coach a team of 12+ analysts, setting objectives, managing performance, and building team capability through structured feedback and workload planning.",
        "Own KPI/SLA frameworks, driving consistent quality, productivity, and turnaround outcomes — directly comparable to monitoring operational performance and MI to drive service excellence.",
        "Serve as key stakeholder contact for escalations and client compliance requests, coordinating across quality control, operations, and compliance teams to strengthen controls and service delivery.",
        "Manage Jira-based case workflows, ensuring adherence to established procedures and regulatory requirements.",
        "Prepare performance and MIS reporting for senior leadership to support operational decision-making."
      ]
    },
    {
      id: "apex-fund-services",
      company: "Apex Fund Services",
      role: "Senior Associate – AML/KYC",
      dates: "Jan 2021 – Jun 2022",
      location: "Pune",
      keyHighlight: "Complex legal entity & fund structure due diligence & sanctions screening",
      metrics: ["Complex Entity Structures", "Sanctions Screening", "Team-wide Training"],
      bullets: [
        "Executed AML/KYC due diligence, sanctions screening, remediation, and periodic reviews for fund and investor-services clients, gaining direct exposure to complex fund and legal entity structures.",
        "Collaborated cross-functionally to resolve compliance issues and delivered AML/KYC training, strengthening team-wide control awareness.",
        "Developed and implemented policy updates to close control gaps and mitigate operational risk.",
        "Analyzed customer transactions for suspicious activity, escalating findings in line with regulatory requirements."
      ]
    },
    {
      id: "indusind-bank",
      company: "IndusInd Bank Ltd",
      role: "Chief Manager – Compliance & Onboarding",
      dates: "Mar 2019 – Apr 2020",
      location: "Pune",
      keyHighlight: "Led 12-member onboarding team; closed control gaps & curtailed onboarding delays",
      metrics: ["12-Member Team Led", "Reduced Onboarding Delays", "Root-Cause Analysis"],
      bullets: [
        "Led a team of 12 across onboarding, KYC, and monitoring — full people management accountability including performance tracking and coaching.",
        "Managed stakeholder communication across business, compliance, and operations, acting as escalation point for onboarding and KYC issues.",
        "Monitored SLA adherence and operational performance metrics; implemented process improvements that reduced onboarding delays.",
        "Conducted root-cause analysis and performance monitoring to identify and close control gaps."
      ]
    },
    {
      id: "icici-bank",
      company: "ICICI Bank Ltd",
      role: "Deputy Manager – KYC Compliance",
      dates: "Apr 2017 – Mar 2019",
      location: "Pune",
      keyHighlight: "Client onboarding liaison between Relationship Managers, Compliance & Operations",
      metrics: ["Liaison Across RM/Ops", "Transaction Reviews", "Regulatory Adherence"],
      bullets: [
        "Managed team escalations and acted as liaison between relationship managers, compliance analysts, and operations teams to resolve KYC and onboarding issues.",
        "Ensured KYC compliance for client onboarding in line with regulatory and internal policy requirements.",
        "Supported transaction reviews and strategic compliance initiatives."
      ]
    },
    {
      id: "standard-chartered",
      company: "Standard Chartered Bank",
      role: "Senior Analyst – AML/KYC",
      dates: "Feb 2015 – May 2016",
      location: "Bangalore",
      keyHighlight: "Quality assurance on KYC documentation, red flag escalations & PEP analytics",
      metrics: ["PEP Screening Reports", "QA Documentation", "Red Flag Detection"],
      bullets: [
        "Conducted quality assurance on KYC documentation and ongoing AML/KYC reviews, identifying red flags and escalating suspicious activity.",
        "Generated trend and progress reports on PEP screening and CDD effectiveness to guide team development and control improvement."
      ]
    },
    {
      id: "wns-global",
      company: "WNS Global Services",
      role: "Associate – Operations",
      dates: "Nov 2012 – Dec 2014",
      location: "Bangalore",
      keyHighlight: "Premium collection & source of funds verification for UK/Irish institutional clients",
      metrics: ["UK/Irish Client Accounts", "Source of Funds Verification", "Insurance P&L"],
      bullets: [
        "Managed premium collection and fund allocation for UK/Irish clients, verifying source of funds and conducting KYC checks.",
        "Built foundational reporting and reconciliation skills across insurance P&L and compliance metrics."
      ]
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "People Leadership of 12+ Analysts",
      metric: "12+",
      context: "Full people management accountability across SG Analytics & IndusInd Bank; objective setting, coaching, workload planning, and performance management.",
      category: "leadership",
      sourceRole: "SG Analytics & IndusInd Bank"
    },
    {
      id: "ach-2",
      title: "Industry Track Record Across Tier-1 Banking & Funds",
      metric: "9+ Years",
      context: "Over 9 years of sustained impact spanning Standard Chartered, ICICI Bank, IndusInd Bank, Apex Fund Services, SG Analytics, and WNS Global Services.",
      category: "global",
      sourceRole: "Banking & Fund Administration Career"
    },
    {
      id: "ach-3",
      title: "Streamlined Client Onboarding & SLA Optimization",
      metric: "SLA / Onboarding",
      context: "Implemented operational process improvements and root-cause analysis that curtailed onboarding delays and elevated service turnaround.",
      category: "operations",
      sourceRole: "IndusInd Bank Ltd"
    },
    {
      id: "ach-4",
      title: "Complex Fund & Legal Entity KYC Architecture",
      metric: "AIFM / UCITS",
      context: "Direct execution of AML/KYC due diligence, sanctions screening, and periodic reviews for complex fund and investor-services structures.",
      category: "risk",
      sourceRole: "Apex Fund Services"
    },
    {
      id: "ach-5",
      title: "PEP Screening Trend Analysis & CDD Effectiveness",
      metric: "PEP / CDD",
      context: "Generated comprehensive trend and progress analytics on PEP screening and CDD effectiveness to drive team development and control closure.",
      category: "risk",
      sourceRole: "Standard Chartered Bank"
    },
    {
      id: "ach-6",
      title: "UK & Irish Cross-Border Institutional Verification",
      metric: "UK / Ireland",
      context: "Managed premium collection, fund allocations, and rigorous source of funds verification for cross-border international clients.",
      category: "global",
      sourceRole: "WNS Global Services"
    }
  ],
  projects: [
    {
      title: "Fund Administration & Legal Entity Risk Framework",
      stack: ["Apex Fund Systems", "LexisNexis", "World-Check", "Sanctions Screening"],
      bullets: [
        "Executed end-to-end AML/KYC due diligence and periodic client reviews for complex fund structures, AIFM, and UCITS entities.",
        "Authored and deployed internal policy updates to resolve operational risk gaps and streamline sanctions screening workflows."
      ]
    },
    {
      title: "Client Onboarding Velocity & SLA Governance Model",
      stack: ["Core Banking Systems", "Root-Cause Analysis", "SLA Dashboards", "MIS Reporting"],
      bullets: [
        "Established proactive SLA tracking across onboarding, KYC, and monitoring departments, significantly reducing onboarding turnaround delays.",
        "Acted as central liaison between Front Office Relationship Managers, Compliance Analysts, and Operations."
      ]
    },
    {
      title: "Team Capability & Compliance Quality Coaching Program",
      stack: ["Jira Workflows", "Performance Feedback", "Workload Management", "MIS Dashboards"],
      bullets: [
        "Mentored and coached 12+ compliance analysts, implementing structured peer quality checks and objective-driven milestone reviews.",
        "Designed standardized escalation protocols coordinating across Quality Control, Operations, and Risk."
      ]
    }
  ],
  skills: [
    {
      category: "People Leadership & Operational Management",
      skills: [
        "People Leadership, Coaching & Performance Management (teams of 12+)",
        "KPI/SLA Ownership, Capacity & Workload Management",
        "Stakeholder Management (AML, Compliance, Risk, Audit, Business)"
      ]
    },
    {
      category: "AML/KYC & Client Due Diligence",
      skills: [
        "AML/KYC, CDD/EDD, KYC Remediation & Periodic Client Reviews",
        "Client & Entity Structures incl. Funds (Apex Fund Services experience)"
      ]
    },
    {
      category: "Operational Risk, Quality & Process Engineering",
      skills: [
        "Operational Risk & Controls, Root-Cause Analysis, Quality Monitoring",
        "Process Improvement, Standardization & Change/Transition Support"
      ]
    },
    {
      category: "Regulatory Governance & Compliance Directives",
      skills: [
        "Regulatory Compliance (AML/CTF, FATF, EU AML Directives)"
      ]
    },
    {
      category: "Enterprise Tools & Compliance Systems",
      skills: [
        "Tools: LexisNexis, World-Check, Bloomberg, Jira, Excel, MS Office"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Commerce",
      institution: "J G College of Commerce",
      year: "2009"
    },
    {
      degree: "Pre-University of Science and Statistics",
      institution: "P C Jabin College of Science",
      year: "2006"
    }
  ],
  certifications: [],
  awards: [],
  extra: [
    "Strong knowledge of AML regulations (FATF, EU AML Directives); exposure to cryptocurrency compliance.",
    "Basic knowledge of fund structures, AIFM, and UCITS.",
    "Fluent in English."
  ]
};
