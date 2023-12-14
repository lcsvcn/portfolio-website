
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Lucas Nicolau",
  title: "Hi, I am Lucas",
  subTitle: emoji(" I am the Senior Software Developer, with +7 years of experience, with over 10 applications published over Google Play and App Store 🧑‍💻 A vast experience building Web and Mobile applications using Kotlin / Java / Flutter / React Native/ JavaScript / Reactjs / Nextjs / Python / Django and some other cool libraries and frameworks. "),
  resumeLink: "https://drive.google.com/file/d/1v2W0ToeuzZ3IYqJWRBoaO25VpgJgn3EW/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/lcsvcn",
  gitlab: "https://gitlab.com/lcsvcn",
  linkedin: "https://www.linkedin.com/in/lucas-vieira-costa-nicolau-0aa973a4/",
  gmail: "lucas.nicolau.developer@gmail.com",
  upwork: "https://www.upwork.com/freelancers/~01686d9f62c3ed0541"
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
    emoji("⚡ Integration with blockchain top-level technologies")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "ios",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "fast api",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "fastlane",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "blockchain",
      fontAwesomeClassname: "fab fa-btc"
    }
  ]
};

const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Mobile",  
      progressPercentage: "100%"  
    },
    {
      Stack: "Web",  
      progressPercentage: "70%"  
    },
    {
      Stack: "Leadership",
      progressPercentage: "50%"
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Expensify",
      companylogo: require("./assets/images/expensify.webp"),
      date: "Out 2022 – now",
      desc: "Frontend Development using React.js and React Native",
      "descBullets": [
        "Find and report bugs in the new platform",
        "Implemented bug fixes using React.js and React Native",
        ]
    },
    {
      role: "Software Engineer",
      company: "Immersive Fox",
      companylogo: require("./assets/images/immersive-fox.webp"),
      date: "Out 2022 – Aug 2023",
      desc: "Full-Stack Development using React.js, Next.js and Django",
      descBullets: [
        "Implement front-end components using React.js and Next.js",
        "Design and implement APIs using Django",
        "Infrastructure development using AWS and GCP",
      ]
    },
    {
      role: "Integration Engineer",
      company: "We The Culture",
      companylogo: require("./assets/images/wetheculture.webp"),
      date: "Apr 2022 – Out 2022",
      desc: "Development using blockchain, mobile, web3, and much more.",
      descBullets: [
        "Implement middle-ware to integrate blockchains, smart contracts, CLI tools",
        "Design and implement APIs with:",
        "Data validation and error handling",
        "Logging and debugging",
        "Authentication and authorization",
        "Basic documentation to use the API"
      ]
    },
    {
      role: "Integration Engineer",
      company: "SdkCo",
      companylogo: require("./assets/images/sdkco.webp"),
      date: "Feb 2022 – Present",
      desc: "Development using blockchain, mobile, web3, and much more.",
      descBullets: [
        "Implement middle-ware to integrate blockchains, smart contracts, CLI tools",
        "Design and implement APIs with:",
        "Data validation and error handling",
        "Logging and debugging",
        "Authentication and authorization",
        "Basic documentation to use the API"
      ]
    },
    {
      role: "Android Developer",
      company: "Neon",
      companylogo: require("./assets/images/neon.webp"),
      date: "Mar 2021 – Feb 2022",
      desc: "Development of a top level confidential research project and Development at a BaaS project using PIX",
      descBullets: [
        "Development for Native Android",
        "Developing new features to their fintech app: shorturl.at/hjrAB",
        "Development for Native Android (Kotlin and Java)",
        "Using Retrofit Gson(Legacy) and Moshi",
        "Using Dagger",
        "Using MVP(Legacy) and MVVM",
        "Using Live Data",
        "Using Junit Test and Integration test",
        "Crash-free app with Crashlytics (99.3% users)"
      ]
    },
    {
      role: "Software Engineer",  
      company: "Venturus",
      companylogo: require("./assets/images/venturus.webp"),
      date: "Dez 2019 – Mar 2021",
      desc: "Development of a top level confidential research project and Development at a BaaS project using PIX",
      descBullets: [
        "Development for Native Android",
        "Researching Native Speech Recognition and Native Speaker Recognition",
        "Develop a voice biometry solution to recognize user by its voice.",
        "Payment checkout integration",
        "Communication with clients in English",
        "Develop for a new payment type (PIX)",
        "Develop with a big development team, developing the solution from scratch",
        "Development of Mobile App using Flutter",
        "Development of Web Dashboard using React.js",
        "Development of backend using Java"
      ]
    },
    {
      role: "Full Stack Developer",   
      company: "FlipOn Car",
      companylogo: require("./assets/images/flipon.webp"),
      date: "Feb 2019 – Dez 2019", 
      desc: "Leader Developer",
      descBullets: [
        "Development of the company website (https://flipon.app/)",
        "Development using React Native framework for Android and IOS",
        "Development using Python and Django Framework",
        "Integration with Embedded Systems",
        "Leadership - Project Leader",
        "AWS configuration - AWS SQS, SNS, SES",
        "Work Automation - Developing scripts in Javascript and Python to simplify workflow",
        "Gateway Payment - Integration with Digital Payment like Pagarme, Iugu and Juno",
      ]
    },
    {
      role: "Tracking and Tags Analyst",  
      company: "Raccoon - Digital Marketing",
      companylogo: require("./assets/images/raccoon.webp"),
      date: "Feb 2018 – Feb 2019",
      desc: "Tags and Tracking development",
      descBullets: [
        "Using Google Tag Manager (Javascript)",
        "Using Google Analytics, Facebook Ads, Google Ads and other marketing tools",
        "Network Knowledge - Performance analysis",
        "Client Relationship - Direct contact by e-mail and video calls."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "lcsvcn", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/upmedal.webp"),
      link: "https://www.upmedal.com",
      title: "Upmedal"
    },
    {
      image: require("./assets/images/polepurpose.webp"),
      link: "https://www.polepurpose.com/",   
      title: "Pole Purpose"
    },
    {
      image: require("./assets/images/stome.webp"),
      link: "https://www.facebook.com/StomeChallenge/",
      title: "Stome"
    },
    {
      image: require("./assets/images/keyglee.webp"),
      link: "https://www.keygleedeals.com/",
      title: "Keyglee Deals"
    },
    {
      image: require("./assets/images/unbox.webp"),
      link: "https://www.unboxapp.com/",
      title: "Unbox"
    },
    {
      image: require("./assets/images/bananabuzz.webp"),
      link: "https://play.google.com/store/apps/details?id=com.bananabuzz.callrecorder",
      title: "Banana Buzz"
    },
    {
      image: require("./assets/images/tuneurl.webp"),
      link: "https://github.com/jaap-dekkinga/pp_turl_android",
      title: "TuneURL"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",

  achivementsCards: [
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "",

  blogs: [
  ]
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE'
  ),
  talks: [
    {
      title: 'Uma introdução ao React Native',
      subtitle: 'Meetup React Sanca - 26/09/2019',
      slides_url: 'https://youtu.be/V1uxATrE04M',
      event_url: 'https://www.meetup.com/pt-BR/opensanca/events/264382291/',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji(""),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [

  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to Discuss a project? My Inbox is open for all.",
  number: "https://t.me/lucasnicolau",
  email_address: "lucas.nicolau.developer@gmail.com"
};

//Twitter Section

const twitterDetails = {
  userName : "JustAMobileDev"//Replace "twitter" with your twitter username without @
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
