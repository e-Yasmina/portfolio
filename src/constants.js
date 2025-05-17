import { type } from "@testing-library/user-event/dist/type";

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
  moreInfo: `This project was an exciting challenge in combining <strong>JavaScript</strong> and <strong>WebGL2</strong> to create a smooth browser game. I implemented real-time collision detection, score updates, and an intuitive player control system. The use of raw WebGL2 helped me understand low-level graphics rendering, matrix transformations, and buffer handling. `,
  link: `🔗 <a href="https://your-game-link.com" target="_blank" rel="noopener noreferrer">
    Play the game
  </a>`,
  sourceCode: `<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style="width:16px; height:16px; vertical-align:middle; margin-right:4px;" /> <a href="https://github.com/your-game-repo" target="_blank" rel="noopener noreferrer">Explore the code on GitHub</a>`,
  url: "https://res.cloudinary.com/dmjjltmhr/video/upload/v1746973665/ruhtqrdesj3930en9sxo.mp4",
},

  // { 
  //   id:3,
  //   title:"Health Alarm App",
  //   description:"This is an app that helps you manage your programming activities, with the possibility to track the progress of your students.",
  //   details:"This is an app that helps you manage your programming activities, with the possibility to track the progress of your students.",
  //   url:"",
  // },
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
  // moreInfo: `This project was built with the goal of providing a simple yet powerful tool for medication management. I focused on building a clean, user-friendly interface using Android's XML layout system. Java was used to handle core logic, including data management and alert scheduling. I implemented a feature for selecting and displaying medicine images from the user's device, ensuring a personalized experience. The notification system was designed using Android’s alarm and notification APIs to remind users about their medicine timings. This app strengthened my skills in Android development, especially in UI design, notification management, and working with device resources.`,
  link: `🔗 <a href="https://your-medicine-app-link.com" target="_blank" rel="noopener noreferrer">
    View the app demo
  </a>`,
  sourceCode: `<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style="width:16px; height:16px; vertical-align:middle; margin-right:4px;" /> <a href="https://github.com/e-Yasmina/Health_Alarm" target="_blank" rel="noopener noreferrer">Explore the code on GitHub</a>`,
  url: "https://res.cloudinary.com/dmjjltmhr/video/upload/v1747493082/h4fdbusd1tsvyelobyq0.mp4",
}

  // { 
  //   id:4,
  //   title:"Programming management app",
  //   description:"This is an app that helps you manage your programming activities, with the possibility to track the progress of your students.",
  //   details:" with the possibility to track the progress of your students.",
  //   url:"",
  // },

];

export const timelineTexts = [
  "<h3>Final Year Project (PFE) at Magna Worldwide:</h3><br>Participating in the development and deployment mobile applications to connect healthcare entities, improving medical service accessibility. Integrated secure and scalable backend solutions.",
  "<h3>Engineering Studies at ENSAH (09/2021 - 07/2024):</h3><br><strong>Third Year (09/2023 - 07/2024)</strong><br>Specialized in <strong>Software Engineering (Génie Logiciel):</strong><br>Mobile application development<br>Cloud computing and virtualization<br>ERP systems<br>Software quality assurance, testing, and integration<br>Embedded and real-time systems.",
  "<h3>Internships (Summer 2024):</h3><br>Completed three internships gaining practical experience in software development and IT systems.",
  "<h3>Engineering Studies at ENSAH (09/2021 - 07/2024):</h3><br><strong>Second Year (09/2022 - 07/2023)</strong><br>Advanced technical and professional development:<br>Java advanced programming<br>Data science with Python<br>Database administration<br>Machine Learning<br>Project management and software engineering<br>Web development with modern frameworks (Java EE, .NET)<br>Cybersecurity and cryptosystems.",
  "<h3>Engineering Studies at ENSAH (09/2021 - 07/2024):</h3><br><strong>First Year (09/2021 - 07/2022)</strong><br>Studied core computer science subjects, including:<br>Advanced C programming and data structures<br>Computer architecture<br>Database systems and information systems<br>Networking fundamentals<br>Web technologies (PHP5)<br>Algorithmic complexity and advanced programming (C++)<br>Linux and system programming.",
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
  Docker – Containerization for scalable applications.\n
  Postman – API testing & debugging.\n
  WordPress & SEO – Website optimization.\n
  \n
  What I Do:\n
  ✅ Manage version control & CI/CD.\n
  ✅ Automate deployment processes.\n
  ✅ Enhance website visibility with SEO strategies.`,
    },
  ];