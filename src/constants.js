

export const blogPosts = [
  {
    image: `${process.env.PUBLIC_URL}/BlogImgs/image1.png`,
    date: "28 Mars 2025",
    title: "From Junior to Senior",
    description:
      "The key difference between juniors and seniors isn’t just knowing a programming language it’s about handling real-world projects effectively.",
  },
  {
    image: `${process.env.PUBLIC_URL}/BlogImgs/image2.png`,
    date: "27 Mars 2025",
    title: "Blog Card",
    description:
      "The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).",
  },
  {
    image: `${process.env.PUBLIC_URL}/BlogImgs/image2.png`,
    date: "27 Mars 2025",
    title: "Blog Card",
    description:
      "The position property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).",
  },
];
export const projects = [
  { 
    id:1,
    type: "laptop",
    title:"Python actitvities app",
    description:`This is a Python activities platform, an educational solution built using <strong>  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" style="width:16px; height:16px; vertical-align:middle;" />React</strong>.`,
    details:"The app includes a code editor integrated with a <strong>Python API</strong> to run and debug Python code.",
    tech:`<ul>
  <li><strong>Frontend:</strong> React.js</li>
  <li><strong>Code Editor:</strong> Integrated with a Python API for running and debugging code.</li>
  <li><strong>Backend API:</strong> Axios is used to interact with the Python API for executing code and managing user data.</li>
  <li><strong>Styling:</strong> CSS for a clean and responsive design.</li>
  </ul>`,
    moreInfo:`Each activity comes with detailed explanations, instructions, and test cases to help students practice and improve their Python programming skills.</br>
    In this project, I deepened my expertise in React by working extensively with modern development tools and best practices.
     I integrated the powerful code editor from @monaco-editor/react to provide an in-browser code editor.
     I structured the project using reusable components, managed state effectively with React hooks (useState, useEffect, etc.), 
     and maintained clean communication between components through props.
     API integration was handled using Axios, connecting the frontend to a custom Python backend for executing and debugging user code.
     `,
    link: `🔗 <a href="https://your-app-link.com" target="_blank" rel="noopener noreferrer">
    Visit the app
    </a>`,
    sourceCode: `<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style="width:16px; height:16px; vertical-align:middle; margin-right:4px;" /> <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer">Explore the code on GitHub</a>`,
    url:"https://res.cloudinary.com/dmjjltmhr/video/upload/v1746733872/ldhj6vouukhoyf3jpyqu.mp4",
    
  },
  { 
  id: 2,
  type: "laptop",
 title:"Falling Blocks Game",
    description:"A basic <strong>WebGL2-powered</strong> mini-game where the player moves a paddle to catch falling blocks.",
    details:"The game tracks the score, lives, and ends after three missed blocks.",
    tech: `<ul>
    <li><strong>Rendering:</strong> WebGL2 used for efficient 2D/3D graphics rendering.</li>
    <li><strong>Game Mechanics:</strong> JavaScript handles the logic for player movement, falling blocks, collision detection, and score tracking.</li>
    <li><strong>User Interaction:</strong> Keyboard input controls the paddle, providing a responsive gameplay experience.</li>
    <li><strong>Audio & Feedback:</strong> Audio feedback enhances the gameplay feel.</li>
    <li><strong>Styling:</strong> CSS for layout and UI elements such as score display and lives indicator.</li>
  </ul>`,
  moreInfo: `This project was an exciting challenge in combining <strong>JavaScript</strong> and <strong>WebGL2</strong> to create a smooth browser game. I implemented real-time collision detection, score updates, and an intuitive player control system. `,
  //The use of raw WebGL2 helped me understand low-level graphics rendering, matrix transformations, and buffer handling.
  link: `🔗 <a href="https://your-game-link.com" target="_blank" rel="noopener noreferrer">
    Play the game
  </a>`,
  sourceCode: `<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style="width:16px; height:16px; vertical-align:middle; margin-right:4px;" /> <a href="https://github.com/your-game-repo" target="_blank" rel="noopener noreferrer">Explore the code on GitHub</a>`,
  url: "https://res.cloudinary.com/dmjjltmhr/video/upload/v1746973665/ruhtqrdesj3930en9sxo.mp4",
},
  {
  id: 3,
  type  : "mobile",
  title: "Medicine Reminder App",
  description: `A native <strong>Android app</strong> developed using <strong>Java</strong> and <strong>XML</strong> to help users manage their medications effectively.</br>
  The app allows users to add, edit, and delete medication entries, complete with images and detailed information.</br>
  `,
  // details: "",
  tech: `
  <ul>
    <li><strong>Platform:</strong> Android (Java + XML)</li>
    <li><strong>UI Design:</strong> XML layouts crafted for a responsive and intuitive user interface.</li>
    <li><strong>Features:</strong> Add, update, delete medicine entries; associate images with each medication.</li>
    <li><strong>Notifications:</strong> Built-in alert system to remind users when it's time to take their medicine.</li>
    <li><strong>Media Handling:</strong> Integrated Android's media picker to allow image selection from the device gallery.</li>
    <li><strong>Development Environment:</strong> Android Studio used for building, testing, and debugging the app.</li>
  </ul> `,
  //  moreInfo: `This project was built with the goal of providing a simple yet powerful tool for medication management. I focused on building a clean, user-friendly interface using Android's XML layout system. Java was used to handle core logic, including data management and alert scheduling. I implemented a feature for selecting and displaying medicine images from the user's device, ensuring a personalized experience. The notification system was designed using Android’s alarm and notification APIs to remind users about their medicine timings. This app strengthened my skills in Android development, especially in UI design, notification management, and working with device resources.`,
  // link: `🔗 <a href="https://your-medicine-app-link.com" target="_blank" rel="noopener noreferrer">
  //   View the app demo
  // </a>`,
  sourceCode: `<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style="width:16px; height:16px; vertical-align:middle; margin-right:4px;" /> <a href="https://github.com/e-Yasmina/Health_Alarm" target="_blank" rel="noopener noreferrer">Explore the code on GitHub</a>`,
  url: "https://res.cloudinary.com/dmjjltmhr/video/upload/v1747493082/h4fdbusd1tsvyelobyq0.mp4",
}

 

];

export const timelineTexts = [
   `<h3>Junior Software Engineer at Mrabes:</h3>May 2025 - present<br>
  <ul>Currently contributing to the development of full-stack web applications using:
    <li><strong>Spring Boot</strong>for building scalable and secure backend services.</li>
    <li><strong>React.js</strong>for creating dynamic and responsive frontend interfaces.</li>
    <br>This role is strengthening my skills in RESTful API development, state management, and component-based UI architecture, while allowing me to grow as a software engineer in a professional environment.
    <ul>
  `,
  `<h3>Technology Instructor (Youth Programming & Robotics) at Intelligence Hub:</h3>Sep 2024 - Apr 2024<br>
  <ul>Taught programming fundamentals to children and teenagers using a range of tools and technologies, including:
    <li><strong>Scratch</strong>,<strong>Minecraft Education</strong>, and<strong>LEGO WeDo</strong>for introducing programming and robotics to younger students.</li>
    <li><strong>Python</strong>,<strong>HTML</strong>,<strong>CSS</strong>,<strong>JavaScript</strong>, and<strong>MIT App Inventor</strong>for mobile and web development with teenagers.</li>
    <li>Advanced robotics with platforms like<strong>VEX</strong>and<strong>LEGO EV3</strong>, preparing students for real-world applications and competitions.</li>
    <br>This role deepened my own understanding of programming by requiring me to break down complex concepts into simple, engaging lessons.<br>Additionally, I developed and customized software tools to enhance the learning experience, including:
    <li>A Python-based activity app to guide self-paced learners and to track progress for classroom activities. using<strong>React.js</strong>and<strong>Node.js</strong>.</li>
    <br>This role deepened my own understanding of programming by requiring me to break down complex concepts into simple, engaging lessons.
  <ul>
  `,
  `<h3>Final Year Project (PFE) at Magna Worldwide:</h3>Mar 2024 - Aug 2024<br>
 <ul>
 Contributed to the development of a large-scale digital healthcare platform as part of a Smart City solution.
Primarily focused on backend development using Laravel, including:
    <li>Building<strong>RESTful APIs</strong>and securing them with<strong>Laravel Passport</strong>.</li>
    <li>Designing and implementing a<strong>custom Laravel structure</strong>with<strong>autoloading</strong> and<strong>service providers</strong>.</li>
    <li>Integrating<strong>Laravel Cache</strong>mechanisms to boost performance and efficiency.</li>
    <li>Participated in frontend<strong>API integration</strong>using Angular and Ionic for mobile applications.</li>
  <ul>
  <br>This experience allowed me to deepen my understanding of modular architecture, healthcare IT systems, and how to apply software engineering principles in impactful domains like healthcare. I also explored technologies such as Ionic, Angular, and Laravel, and gained valuable exposure to real-world Agile workflows and scalable system design. 
`,
  // ` <br>Participating in the development and deployment mobile applications to connect healthcare entities, improving medical service accessibility. Integrated secure and scalable backend solutions.`,

  "<h3>Engineering Studies at ENSAH (Sep, 2021 - Jul, 2024):</h3><br><strong>Third Year (Sep, 2023 - Jul, 2024)</strong><br>Specialized in <strong>Software Engineering (Génie Logiciel):</strong><br>Mobile application development<br>Cloud computing and virtualization<br>ERP systems<br>Software quality assurance, testing, and integration<br>Embedded and real-time systems.",
  `<h3>Internships (Summer 2024):</h3><br>Completed three internships gaining practical experience in software development and IT systems.
  <ul><strong>Web Application Development Internship:</strong>Sep 2023<br>
    <li>Developed a web dashboard using<strong>Python</strong>,<strong>Plotly Dash</strong>, and<strong>CSS</strong> to visualize farming data, as part of a Smart Farming collaboration project between Agro Darâa and Adi Solar.</li>
    <li><strong>App deployment</strong>on Render, handling all deployment requirements including environment setup, dependency management, and configuration for continuous availability.</li>
    <br>This internship gave me the opportunity to explore one of the powerful libraries—Plotly Dash—for data visualization using charts, thermometers, gauges, and more. It also allowed me to work with real-time data visualization and live predictions.
  </ul> 
  
  <ul><strong>Web Development Internship at Plaruce Engineering:</strong>Aug 2023<br>
    <li>Designed and developed a company-focused website using<strong>WordPress</strong>,<strong>HTML</strong>,<strong>CSS</strong>, and<strong>JavaScript</strong>.</li>
    <li>Implemented an<strong>SEO</strong>strategy to enhance the website’s online visibility.</li>
    <br>This internship allowed me to explore SEO and strengthen my skills in JavaScript, HTML, and CSS, while learning to integrate them with WordPress. I also gained experience using no-code WordPress plugins like Elementor and Yoast.
  </ul>

  <ul><strong>Data Engineering Internship at Doctori:</strong>Jul 2023<br>
    <li>Developed a<strong>Python</strong>web scraping script to extract and structure doctors' data using the<strong>BeautifulSoup</strong> library.</li>
    <li>Delivered the project with clear documentation, well-tested code, and organized extracted data.</li>
    <br>This internship strengthened my skills in data scraping and cleaning, and deepened my understanding of the DOM and software structure.
  </ul>
  `,
  "<h3>Engineering Studies at ENSAH (Sep, 2021 - Jul, 2024):</h3><br><strong>Second Year (Sep, 2022 - Jul, 2023)</strong><br>Advanced technical and professional development:<br>Java advanced programming<br>Data science with Python<br>Database administration<br>Machine Learning<br>Project management and software engineering<br>Web development with modern frameworks (Java EE, .NET)<br>Cybersecurity and cryptosystems.",
  "<h3>Engineering Studies at ENSAH (Sep, 2021 - Jul, 2024):</h3><br><strong>First Year (Sep, 2021 - Jul, 2022)</strong><br>Studied core computer science subjects, including:<br>Advanced C programming and data structures<br>Computer architecture<br>Database systems and information systems<br>Networking fundamentals<br>Web technologies (PHP5)<br>Algorithmic complexity and advanced programming (C++)<br>Linux and system programming.",
];

export const content = [
    {
      id: 0,
      title: "Frontend Development",
      text: `Technologies:\n
  React.js & Redux – Building modern, responsive web applications.\n
  Ionic & Angular – Hybrid mobile development.\n
  HTML, CSS, JavaScript – Core web technologies.\n
  Tailwind CSS & Bootstrap – Responsive UI design.\n
  Swiper.js – Interactive carousels and sliders.\n
  \n
  What I Do:\n
  ✅ Develop dynamic and interactive UIs.\n
  ✅ Optimize frontend performance.\n
  ✅ Ensure mobile responsiveness.`,
    },
    {
      id: 1,
      title: "Backend Development",
      text: `Technologies:\n
  Laravel – API & web development with PHP.\n
  Spring Boot – Java-based backend development.\n
  Node.js & Express.js – JavaScript-based server-side apps.\n
  RESTful APIs – API design and integration.\n
  Database Management – MySQL, PostgreSQL, Firebase.\n
  \n
  What I Do:\n
  ✅ Build and maintain scalable backend systems.\n
  ✅ Design and integrate RESTful APIs.\n
  ✅ Optimize database performance.`,
    },
    {
      id: 2,
      title: "Data & AI",
      text: `Technologies:\n
  Python – Data processing & automation.\n
  NLP (Natural Language Processing) – Text analysis & sentiment detection.\n
  Web Scraping – Data extraction with BeautifulSoup.\n
  Keras & TensorFlow – AI model training.\n
  \n
  What I Do:\n
  ✅ Automate data extraction and processing.\n
  ✅ Work on AI-driven applications.\n
  ✅ Analyze textual data with NLP techniques.`,
    },
    {
      id: 3,
      title: "Health IT & Digitalization",
      text: `Technologies:\n
  Smart Healthcare Solutions – Digitizing healthcare processes.\n
  Blockchain in Healthcare – Enhancing security & data integrity.\n
  Health Apps – Developing mobile solutions for healthcare.\n
  \n
  What I Do:\n
  ✅ Work on digital transformation in healthcare.\n
  ✅ Build health-related mobile applications.\n
  ✅ Explore blockchain integration for medical data.`,
    },
    {
      id: 4,
      title: "Tools & DevOps",
      text: `Technologies:\n
  Git & GitHub – Version control & collaboration.\n
  Docker & Kubernetes – Containerization for scalable applications.\n
  Postman – API testing & debugging.\n
  WordPress & SEO – Website optimization.\n
  \n
  What I Do:\n
  ✅ Manage version control & CI/CD.\n
  ✅ Automate deployment processes.\n
  ✅ Enhance website visibility with SEO strategies.`,
    },
  ];