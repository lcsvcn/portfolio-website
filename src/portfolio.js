/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Lucas Nicolau",
  title: "Hi, I am Lucas",
  subTitle: emoji(
    " I am a Senior Software Developer, with +9 years of experience, with over 10 applications published over Google Play and App Store 🧑‍💻 A vast experience building Web and Mobile applications using Kotlin / Java / Flutter / React Native/ JavaScript / Reactjs / Nextjs / Python / Django and some other cool libraries and frameworks. ",
  ),
  resumeLink: "https://drive.google.com/file/d/1w_oRVZzzzkyeyfOMph-Ql790MvXPAM7F/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/lcsvcn",
  gitlab: "https://gitlab.com/lcsvcn",
  linkedin: "https://www.linkedin.com/in/lucas-vieira-costa-nicolau/",
  gmail: "lucas.nicolau.developer@gmail.com",
  upwork: "https://www.upwork.com/freelancers/~01686d9f62c3ed0541",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "PASSIONATE DEVELOPER WHO IS ALWAYS LEARNING A NEW TECH STACK",
  skills: [
    emoji("⚡ Team management and leadership"),
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"),
    emoji("⚡ Integration with payment services such as PagarMe, Stripe, Ebanx"),
    emoji("⚡ Integration with blockchain top-level technologies"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android",
    },
    {
      skillName: "ios",
      fontAwesomeClassname: "fab fa-apple",
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fab fa-google",
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "fast api",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "fastlane",
      fontAwesomeClassname: "fas fa-robot",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "blockchain",
      fontAwesomeClassname: "fab fa-btc",
    },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Mobile",
      progressPercentage: "100%",
    },
    {
      Stack: "Web",
      progressPercentage: "70%",
    },
    {
      Stack: "Leadership",
      progressPercentage: "50%",
    },
    {
      Stack: "Backend",
      progressPercentage: "30%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Clipboard Health",
      companylogo: require("./assets/images/clipboard-health.webp"),
      date: "Jan 2025 – Present",
      desc: "Developed a mobile-first scheduling platform that enables healthcare professionals and facility administrators to manage shifts remotely, ensuring full GDPR and HIPAA compliance for secure handling of sensitive medical and employment data.",
      descBullets: [
        "Launched a new Expo mobile fully working app for facility admins in 27 days, unifying TypeScript domain models across web and API layers for seamless integration and consistent data handling",
        "Implemented real-time scheduling, notifications, and shift tracking, increasing facility admin engagement by 36% and reducing understaffing incidents by 22%",
        "Revamped the Ionic kiosk app UX, reducing queue times by 75% and improving task efficiency through automated workflows",
        "Accelerated release cycles by 30% through automated deploy pipelines using Appflow",
        "Integrated an AI assistant for shift management, reducing facility admin scheduling time by 45%",
        "Resolved 95% of client technical issues within 24 hours, reducing churn by 25% through proactive troubleshooting",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "TeacherAI",
      companylogo: require("./assets/images/teacherai.webp"),
      date: "Aug 2023 - Jan 2025",
      desc: "Contributed to building an innovative, always-accessible AI teacher that empowers language learners worldwide to practice more than 30 languages anytime, anywhere.",
      descBullets: [
        "Led migration from Flask to FastAPI, designed microservices ecosystem using Kafka and Nest.js, improving modularity and fault tolerance",
        "Optimized APIs and backend services with FastAPI, Nest.js, PostgreSQL, and MongoDB, reducing API response time by 35%",
        "Architected cloud infrastructure across GCP and AWS, achieving 99.9% uptime while reducing costs by 25%",
        "Rebuilt web app from React.js to Next.js, improving SEO (Lighthouse: 98) and reducing page load time by 20%",
        "Launched first mobile application using Expo (React Native), improving user satisfaction and retention by 25%",
        "Implemented event-driven communication using Kafka and Redis for zero downtime and seamless scalability",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Stealth Startup",
      companylogo: require("./assets/images/immersive-fox.webp"),
      date: "Oct 2022 - Aug 2023",
      desc: "Contributed to the development of a next-generation AI-driven video generation platform, enabling users to produce lifelike videos from text input with fully customizable avatars and voices.",
      descBullets: [
        "Developed complete web-based video editor using React.js (TypeScript/JavaScript) with real-time previews",
        "Designed backend services with Django and RESTful APIs, integrating with ML services for facial animation",
        "Reduced monthly infrastructure costs from $25,000 to $5,000 while maintaining 99.9% uptime on GCP and AWS",
        "Integrated Stripe for payments and subscription management for enterprise clients",
        "Improved frontend SEO and performance (Lighthouse score: 98), increasing inbound traffic by 40%",
        "Built marketing automation through HubSpot CRM integration for personalized video campaigns",
      ],
    },
    {
      role: "Software Engineer",
      company: "We The Culture",
      companylogo: require("./assets/images/wetheculture.webp"),
      date: "Feb 2022 - Oct 2022",
      desc: "Led end-to-end metaverse operations, including cloud infrastructure, payment flows, and identity verification.",
      descBullets: [
        "Engineered backend APIs with Python and FastAPI, enabling real-time sync with Unreal Engine environments",
        "Designed responsive institutional websites with blockchain connectivity and MetaMask authentication",
        "Developed NFT solutions on Polygon, including smart contracts and digital asset management",
        "Improved platform responsiveness by 25% and enhanced transaction efficiency by 40-50%",
        "Created fully secure, scalable, and demo-ready virtual experiences",
      ],
    },
    {
      role: "Software Engineer",
      company: "Neon",
      companylogo: require("./assets/images/neon.webp"),
      date: "Feb 2021 - Feb 2022",
      desc: "Contributed to Neon's flagship mobile banking application with 1M+ Daily Active Users, delivering fast, secure, and reliable financial features.",
      descBullets: [
        "Augmented mobile app using native Android with Kotlin and Java, improving performance by 20%",
        "Achieved 99.99% crash-free rate while serving over 1 million daily active users",
        "Employed MVVM and MVP patterns, improving code maintainability by 30%",
        "Implemented robust code using Retrofit and Dagger, reducing API call latency by 25%",
        "Created R&D Flutter version of Android/iOS app, demonstrating comparable performance to native solutions",
      ],
    },
    {
      role: "Software Engineer",
      company: "Venturus",
      companylogo: require("./assets/images/venturus.webp"),
      date: "Dec 2019 - Feb 2021",
      desc: "Led R&D projects in Voice Recognition for voice authorization and authentication, pioneering innovative payment solutions.",
      descBullets: [
        "Cut payment processing time inside cars by 30% through Voice Recognition implementation",
        "Designed scalable backend using Redis and Kafka, reducing response time by 30%",
        "Built robust backend with Java Spring Boot, achieving 50% system throughput increase",
        "Developed Android application and SDK using Java and Kotlin, reducing size by 15%",
        "Managed Azure Cloud Platform, optimizing resources and reducing costs by 15%",
      ],
    },
    {
      role: "Lead Developer",
      company: "FlipOn",
      companylogo: require("./assets/images/flipon.webp"),
      date: "Jan 2019 - Dec 2019",
      desc: "Led development of an electrical scooter rental platform, managing real-time IoT information for over 5,000 scooters.",
      descBullets: [
        "Led a team of 3 developers in building the platform from scratch",
        "Created consistent user experiences using Flutter, React Native, and React.js",
        "Built backend services using Django and PostgreSQL, achieving 98% system uptime",
        "Reduced map service costs by 90% by replacing Google Maps with Mapbox",
        "Integrated multiple payment gateways including Pagarme, Iugu, and Juno",
        "Implemented AWS services (SQS, SNS, SES) for robust infrastructure",
      ],
    },
    {
      role: "Freelance Developer",
      company: "Upwork",
      companylogo: require("./assets/images/fa-upwork.png"),
      date: "Jan 2016 - Jan 2019",
      desc: "Led multiple successful projects as a freelance developer, focusing on mobile and web applications.",
      descBullets: [
        "Built secure medical dashboard with GDPR/HIPAA compliance using Next.js, Python, Expo, MongoDB, AWS",
        "Developed global running competition app for Upmedal using React Native and Heroku with Strava integration",
        "Created Flutter app for Pole Purpose featuring training tips with Stripe integration",
        "Built Web3-based metaverse for Stome using Unreal Engine and Polygon",
        "Developed Flutter real estate app for KeyGlee Deals with Firebase integration",
        "Led email classification tool development for Unbox using React Native and Gmail API",
        "Built Android podcast app for TuneURL with proprietary QR SDK integration",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "lcsvcn", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/upmedal.webp"),
      link: "https://www.upmedal.com",
      title: "Upmedal",
    },
    {
      image: require("./assets/images/polepurpose.webp"),
      link: "https://www.polepurpose.com/",
      title: "Pole Purpose",
    },
    {
      image: require("./assets/images/stome.webp"),
      link: "https://www.facebook.com/StomeChallenge/",
      title: "Stome",
    },
    {
      image: require("./assets/images/keyglee.webp"),
      link: "https://www.keygleedeals.com/",
      title: "Keyglee Deals",
    },
    {
      image: require("./assets/images/unbox.webp"),
      link: "https://www.unboxapp.com/",
      title: "Unbox",
    },
    {
      image: require("./assets/images/bananabuzz.webp"),
      link: "https://play.google.com/store/apps/details?id=com.bananabuzz.callrecorder",
      title: "Banana Buzz",
    },
    {
      image: require("./assets/images/tuneurl.webp"),
      link: "https://github.com/jaap-dekkinga/pp_turl_android",
      title: "TuneURL",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",

  achivementsCards: [],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",

  blogs: [],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE"),
  talks: [
    {
      title: "Uma introdução ao React Native",
      subtitle: "Meetup React Sanca - 26/09/2019",
      slides_url: "https://youtu.be/V1uxATrE04M",
      event_url: "https://www.meetup.com/pt-BR/opensanca/events/264382291/",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji(""),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to Discuss a project? My Inbox is open for all.",
  email_address: "lucas.nicolau.developer@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "JustAMobileDev", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
