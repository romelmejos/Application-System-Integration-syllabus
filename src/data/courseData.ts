import { CourseInfo, CourseOutcome, SyllabusModule, ScheduleSection, StudentResource, FAQItem } from '../types';

export const courseInfoData: CourseInfo = {
  code: '6APSI',
  title: 'Application and System Integration',
  department: 'Department of Computer Science',
  school: 'School of Computing',
  university: 'Holy Angel University',
  credits: 3,
  lectureHours: 0,
  labHours: 3,
  prerequisites: 'Cloud Computing (6CLOUDCOM)',
  semester: '1st Semester',
  academicYear: 'A.Y. 2025-2026',
};

export const outcomesData: CourseOutcome[] = [
  {
    code: 'CO1',
    description: 'Apply various integration strategies, methods, and tools to functionally combine separate interdependent systems into a seamless, integrated whole.',
    competency: 'System Integration Strategies & Architecture (Learning Level: I)',
  },
  {
    code: 'CO2',
    description: 'Design technical solutions for process, content, and deliverables necessary to ensure flawless data exchange.',
    competency: 'API Design, Connection & Flawless Exchange (Learning Level: P)',
  },
  {
    code: 'CO3',
    description: 'Apply the most appropriate tools and techniques for a given project requirement to achieve reliable data exchange between heterogeneous systems.',
    competency: 'Tool Selection & Heterogeneous Cloud Deployment (Learning Level: D)',
  },
];

export const modulesData: SyllabusModule[] = [
  {
    id: 1,
    week: 'Week 1',
    title: 'Intro to React JS & Systems Integration',
    description: 'Explain the fundamentals of application and systems integration and develop a basic React application using JSX, functional components, props, and state to handle user interactions.',
    topics: [
      'Overview of Application and Systems Integration: Content and its challenges',
      'Intro to React JS: Scaffolding with Vite, JSX Syntax and Rendering',
      'Functional Components, Props, and Component Reuse',
      'useState Hook and Event Handling'
    ],
    laboratoryExercises: [
      'LE2: Develop a simple React-based company profile dashboard displaying department details via props and managing basic user interaction state.'
    ],
    integrationFocus: 'Conceptualizing how frontends integrate with backend databases and services in enterprise organizations.'
  },
  {
    id: 2,
    week: 'Weeks 2-3',
    title: 'State, Effects, Routing & Custom React Architectures',
    description: 'Apply state management, effects, form handling, and client-side routing techniques in React to build interactive user interfaces. Design reusable components using custom hooks, layouts, and Context API.',
    topics: [
      'State and Effects: useEffect hook lifecycle and controlled vs uncontrolled forms',
      'Routing and Navigation: React Router v6+, nested and dynamic routes, redirects',
      'Component Reusability: structures, layouts, custom hooks, and Context API state sharing'
    ],
    laboratoryExercises: [
      'LE2 (Week 2): Build a student portal interface with Home, Profile, and Enrollment pages utilizing React Router and form validation.',
      'LE2 (Week 3): Refactor a retail web application UI by creating reusable components, custom hooks, and Context API cart state.'
    ],
    integrationFocus: 'State sharing across nested page routes and caching dynamic user session data.'
  },
  {
    id: 3,
    week: 'Week 4',
    title: 'RESTful API Integration, CRUD & Modern Tailwind CSS',
    description: 'Integrate React apps with backend services by consuming RESTful APIs, handling loading/error states, and performing CRUD operations. Implement responsive, visually consistent UI using Tailwind CSS.',
    topics: [
      'RESTful API Integration: Fetch API, Axios, loading/error states, GET/POST/PUT/DELETE calls',
      'Styling and UI Frameworks: TailwindCSS, CSS Modules, and components libraries (ShadCN, Material UI)',
      'Responsive layouts with Flexbox and Grid'
    ],
    laboratoryExercises: [
      'LE1 & LE5: Develop a product management interface that retrieves, adds, updates, and deletes records from a RESTful API with graceful loading/error states.'
    ],
    integrationFocus: 'Structuring a modular client API consuming service layer mapping external web endpoints.'
  },
  {
    id: 4,
    week: 'Weeks 5-6',
    title: 'Prelim Skills Examination (Frontend Design & Cloud Scaffold)',
    description: 'Summative hands-on skills examination to assess student mastery of frontend design, component structures, state handling, routing, and basic cloud environment configuration.',
    topics: [
      'Practical Hands-on Exam: Designing a complete frontend client and preparing deployable assets',
      'Theoretical evaluation on React Core, routing lifecycle, and API concepts'
    ],
    laboratoryExercises: [
      'LE4: Designing frontend application and deploying it on a cloud infrastructure (Prelim Skills Exam)'
    ],
    integrationFocus: 'Validating production-ready bundle output compilation and asset routing.'
  },
  {
    id: 5,
    week: 'Week 7',
    title: 'Node.js, Express Server-Side Setup & PostgreSQL Basics',
    description: 'Develop a basic backend application using Node.js and Express, applying RESTful design principles, routing, and middleware. Introduction to relational databases and connecting Node.js with PostgreSQL.',
    topics: [
      'Node.js & Express Basics: npm, package.json, Express servers, basic routing, and middleware',
      'RESTful backend design patterns',
      'PostgreSQL: Relational tables structure, connection strings, and relational database operations'
    ],
    laboratoryExercises: [
      'LE2: Create an Express backend service for a small business inventory system with RESTful routes and middleware for logging/validation.'
    ],
    integrationFocus: 'Establishing secure TCP/IP connections between local server runtimes and SQL database instances.'
  },
  {
    id: 6,
    week: 'Weeks 8-9',
    title: 'Relational DB CRUD, User Authentication & Security Tokens',
    description: 'Implement database-driven applications by performing CRUD with PostgreSQL. Apply authentication mechanisms including password hashing (bcrypt), token-based authentication (JWT), and secure routes.',
    topics: [
      'Integrating Technologies: connecting Node.js with GCP Cloud environments',
      'Database-driven CRUD operations mapping relational schema records',
      'Authentication: User registration/login, password hashing with bcrypt, token-based auth (JWT), CORS policies'
    ],
    laboratoryExercises: [
      'LE2: Build a cloud-connected customer records system that stores, updates, and retrieves customer data using PostgreSQL and Express.'
    ],
    integrationFocus: 'Securing HTTP headers, handling JWT tokens, and preventing SQL injections.'
  },
  {
    id: 7,
    week: 'Weeks 10-12',
    title: 'API Route Organization, Controller Patterns & Midterm Skills Exam',
    description: 'Design and test robust RESTful APIs by organizing routes/controllers and implementing error handling and validation middleware. Practical midterm assessment of backend systems.',
    topics: [
      'Building APIs: Organizing controllers, custom validation middleware, centralized error-handling',
      'API testing using Postman for validation and endpoint schema testing',
      'Midterm Skills Exam: Designing and deploying backend services with database integration, auth, and CRUD monitoring'
    ],
    laboratoryExercises: [
      'LE2 (Week 10): Update a Service Booking App and test endpoint routing with centralized error handling using Postman.',
      'LE4 (Week 12): Midterm Skills Examination: Complete backend development with database server integration, authentication, and connection monitoring.'
    ],
    integrationFocus: 'Automating route testing and verifying server state under stressful query loads.'
  },
  {
    id: 8,
    week: 'Week 13',
    title: 'Bridging Client React and Server Express APIs',
    description: 'Integrate React frontend applications with Express backend APIs to enable seamless data exchange, secure form submissions, and dynamic server-side content rendering.',
    topics: [
      'Proxying API requests during development',
      'Connecting React client handlers to Express endpoints',
      'Sending secure payloads from forms to server controllers',
      'Displaying dynamic API database responses on frontend state cards'
    ],
    laboratoryExercises: [
      'LE2: Integrate a React Frontend and Express Backend to build a contact management system with form submissions and dynamic data display.'
    ],
    integrationFocus: 'Resolving Cross-Origin Resource Sharing (CORS) exceptions and synchronizing state between client and database.'
  },
  {
    id: 9,
    week: 'Weeks 14-15',
    title: 'Cloud Deployment, Domain Registration & Performance Monitoring',
    description: 'Deploy full-stack web applications to public cloud infrastructures, configure domain names, and implement system monitoring tools for hardware and software metrics.',
    topics: [
      'Deploying web applications to cloud infrastructures (e.g. Google Cloud Run, Azure, Firebase)',
      'Domain name registration and DNS records configuration',
      'Building monitoring tools: tracking CPU, memory utilization, and software logs'
    ],
    laboratoryExercises: [
      'LE3: Propose and document a complete Full Stack Application including wireframes, designs, deployment estimations, and cost optimization.'
    ],
    integrationFocus: 'Analyzing system latency, setting up automated alerts, and compiling container logs.'
  },
  {
    id: 10,
    week: 'Weeks 16-18',
    title: 'Enterprise Integration Project & Final Capstone Defense',
    description: 'Develop, optimize, and present a complete, secure full-stack business application integrating ReactJS, NodeJS, PostgreSQL, and cloud services, culminating in the official Capstone Project Defense.',
    topics: [
      'Full-stack project preparation, optimization, and bug fixing',
      'Configuring production environment variables, secure database policies, and public endpoints',
      'Formal Final Capstone Defense and completion of official HAU Skills Badge certificates'
    ],
    laboratoryExercises: [
      'LE6: Capstone Project Submission: Deployment of a fully integrated, cloud-connected multi-system React-Node application with database and basic logging enabled.'
    ],
    integrationFocus: 'Providing end-to-end reliable data exchange between heterogeneous client and server systems.'
  }
];

export const sectionsData: ScheduleSection[] = [
  {
    id: 'SEC1',
    name: 'CS-301 (BSCS 3rd Year)',
    lectureSchedule: 'Mondays 08:30 AM - 10:30 AM',
    labSchedule: 'Wednesdays 07:30 AM - 10:30 AM',
    venue: 'SJH-305 Computer Laboratory',
    instructor: 'Mr. Ulysses Raymond F. Monsale',
    enrolled: 32,
    capacity: 40,
  },
  {
    id: 'SEC2',
    name: 'CS-302 (BSCS 3rd Year)',
    lectureSchedule: 'Mondays 10:30 AM - 12:30 PM',
    labSchedule: 'Wednesdays 10:30 AM - 01:30 PM',
    venue: 'SJH-305 Computer Laboratory',
    instructor: 'Mr. Ulysses Raymond F. Monsale',
    enrolled: 38,
    capacity: 40,
  }
];

export const resourcesData: StudentResource[] = [
  {
    id: 'R1',
    title: 'Official React Documentation',
    category: 'documentation',
    description: 'The absolute source of truth for modern React patterns, including state, props, hooks, and Context API.',
    url: 'https://react.dev/',
  },
  {
    id: 'R2',
    title: 'Vite Setup and Configuration Guide',
    category: 'installation',
    description: 'Official guide for scaffolding React JS projects with optimized Vite configurations and TypeScript compilation rules.',
    url: 'https://vite.dev/guide/',
  },
  {
    id: 'R3',
    title: 'HAU Canvas Learning Management System (LMS)',
    category: 'university',
    description: 'Login page for the HAU LMS. Students must submit all completed lab outputs, quizzes, and project repositories here before scheduled deadlines.',
    url: 'https://hau.instructure.com/',
  },
  {
    id: 'R4',
    title: 'HAU Student Portal (Campus Access)',
    category: 'university',
    description: 'Access academic records, check official final grade listings, and review enrollment details for the current academic semester.',
    url: 'https://portal.hau.edu.ph/',
  },
  {
    id: 'R5',
    title: 'Tailwind CSS Quick Reference',
    category: 'documentation',
    description: 'A comprehensive cheat sheet and reference for utility-first Tailwind CSS classes utilized to style all interactive lab assignments.',
    url: 'https://tailwindcss.com/docs',
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'F1',
    question: 'Are there any prerequisite courses required before taking 6APSI?',
    answer: 'Yes. Students must have successfully completed Cloud Computing (6CLOUDCOM) before registering for this course outline.',
    category: 'academics',
  },
  {
    id: 'F2',
    question: 'What is the HAU policy on class attendance and absences?',
    answer: 'Students should not incur absences of more than 20% of the required total number of class and laboratory periods. For subjects held 1x a week, the maximum allowed is 3 absences; for 2x a week, it is 7 absences; for 3x a week, it is 10 absences. Exceeding these limits results in an automatic mark of "FA" (Failure due to absences, Grade of 6.0) regardless of academic performance.',
    category: 'policies',
  },
  {
    id: 'F3',
    question: 'What is the grading policy and weight breakdown for this course?',
    answer: 'The final grade is composed of Class Standing (60%) and Major Exam / Summative Project (40%). Within the Class Standing score, the weight is split: Assignments (20%), Activity Seatwork/Hands-on (30%), Quizzes (30%), and Skills Badges (20%). The passing raw grade is 50%, which maps to a point grade of 3.00.',
    category: 'policies',
  },
  {
    id: 'F4',
    question: 'What constitutes a violation of HAU Academic Integrity?',
    answer: 'Violations include: 1) Plagiarism: Using ideas, data, or language of another without specific/proper acknowledgment; 2) Cheating: Using unauthorized assistance, materials, or study aids during examinations/quizzes; and 3) Fabrication: Submitting contrived or improperly altered information.',
    category: 'policies',
  },
  {
    id: 'F5',
    question: 'How do the computed averages map to HAU point grades?',
    answer: 'A computed average of 94.0-100.0 maps to 1.00 (Outstanding); 88.0-93.99 maps to 1.25 (Excellent); 82.0-87.99 maps to 1.50 (Superior); 76.0-81.99 maps to 1.75 (Very Good); 70.0-75.99 maps to 2.00 (Good); 64.0-69.99 maps to 2.25 (Satisfactory); 58.0-63.99 maps to 2.50 (Fairly Satisfactory); 52.0-57.99 maps to 2.75 (Fair); and 50.0-51.99 maps to 3.00 (Passed). Below 50.0 maps to 5.00 (Failed).',
    category: 'academics',
  }
];
