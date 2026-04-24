/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation
import bahriaUniversityLogo from "./assets/images/bahriaLogo.png";

import saayaHealthLogo from "./assets/images/saayaHealthLogo.webp";
import nextuLogo from "./assets/images/nextuLogo.webp";
import codeInLogo from "./assets/images/codeInLogo.webp";
import googleAssistantLogo from "./assets/images/googleAssistantLogo.webp";
import pwaLogo from "./assets/images/pwaLogo.webp";
import type { AchievementSectionType, BigProjectsType, BlogSectionType, ContactInfoType, EducationInfoType, OpenSourceType, PodcastSectionType, ResumeSectionType, TalkSectionType, TechStackType, TwitterDetailsType, WorkExperiencesType } from "./portfolioTypes";
import resume from "./assets/resume.pdf";
import emiratesNbdLogo from "./assets/images/emirates_nbd_logo.svg";
import arrowLabsLogo from "./assets/images/arrowlabs_logo.svg";
import sviLogo from "./assets/images/svi_logo.png";
import tpsLogo from "./assets/images/tps_logo.png";
import igonLogo from "./assets/images/igon_solutions_logo.jpg";
// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Syed Bilal",
  title: "Hi all, I'm Bilal",
  subTitle: emoji(
    `Senior Frontend Engineer with 8 + years of experience building scalable, real- time web applications in banking and enterprise environments.`
  ),
  resumeLink:
    resume, // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sybilal",
  linkedin: "https://www.linkedin.com/in/bilalsyed95/",
  gmail: "sbilalahmed95@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",


  kaggle: "",
  instagram: "",
  twitter: "",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo: EducationInfoType = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bahria University",
      logo: bahriaUniversityLogo,
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2014 - 2017",
      desc: "Thesis: Big Data Analytics in Healthcare",
      descBullets: [
        "CGPA: 3.03/4",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack: TechStackType = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences: WorkExperiencesType = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      backgroundColor: "#072447",
      role: "Senior Software Engineer (React)",
      company: "Emirates NBD",
      companylogo: emiratesNbdLogo,
      date: "August 2022 - January 2026",
      desc: "Built scalable real-time banking applications using React, Next.js, TypeScript, Module Federation, WebRTC, WebSockets, SSE and REST APIs.",
      descBullets: [
        "Led development of QMS Dashboard and Kiosk application deployed across 200+ bank branches in the UAE, serving more than 9 million customers.",
        "Architected and built a WebRTC video-calling micro-frontend using Module Federation and LiveKit.",
        "Integrated the video-calling micro-frontend into Teller Dashboard and customer-facing ITM applications.",
        "Developed a React-based AI chatbot for banking agents using OpenAI APIs with asynchronous and streaming interactions.",
        "Developed a Fraud Monitoring dashboard using Next.js, SSE and REST APIs for real-time alerts and investigation workflows.",
        "Developed a role-based MRHE housing workflow platform with HTML Canvas signature capture on iPad.",
        "Conducted technical interviews, mentored junior engineers and contributed to code quality standards."
      ]
    },
    {
      backgroundColor: "#1f0954",
      role: "Frontend Developer (Angular)",
      company: "Arrow Labs LLC",
      companylogo: arrowLabsLogo,
      date: "August 2021 - July 2022",
      desc: "Modernized enterprise deskless and field service management applications using Angular, TypeScript, RxJS and Angular Material.",
      descBullets: [
        "Migrated a legacy ASP.NET deskless and field service management platform to Angular 13.",
        "Rebuilt core modules with RxJS and Angular Material for workforce management, security operations and field service workflows.",
        "Implemented lazy-loaded modules and service-based architecture, reducing application load time from 7s to 0.5s.",
        "Migrated 6 core modules to Angular Material."
      ]
    },
    {
      backgroundColor: "#fff",
      role: "Frontend Developer (Angular)",
      company: "Strategic Ventures Investments LLC",
      companylogo: sviLogo,
      date: "January 2020 - August 2021",
      desc: "Developed Angular web applications and PWAs for property management, brokerage and leasing operations.",
      descBullets: [
        "Developed web applications and PWAs using Angular and TypeScript.",
        "Implemented frontend features for a property management ecosystem through REST API integrations.",
        "Built 10+ modules from scratch using reusable components, services and lazy-loaded modules.",
        "Delivered a Property Management System and Broker Portal deployed on AWS EC2, onboarding 50+ landlords and 5 brokers."
      ]
    },
    {
      role: "SQA Automation Engineer",
      company: "TPS Pakistan Pvt. Ltd",
      companylogo: tpsLogo,
      backgroundColor: "#fff",
      date: "May 2018 - August 2019",
      desc: "Automated regression and functional test coverage using Selenium to improve product quality and release stability.",
      descBullets: [
        "Automated 1,200+ test cases using Selenium.",
        "Achieved 97% test coverage across key product modules.",
        "Improved release stability across multiple product modules."
      ]
    },
    {
      role: "Full Stack Web Developer",
      company: "IGON Solutions",
      companylogo: igonLogo,
      date: "February 2018 - May 2018",
      desc: "Developed web applications using PHP, MySQL, JavaScript, jQuery, Bootstrap, HTML and CSS.",
      descBullets: [
        "Built an SMS marketing portal with back-office and customer-facing features.",
        "Developed a drag-and-drop newsletter builder.",
        "Implemented frontend and backend functionality using PHP, MySQL, JavaScript and Bootstrap."
      ]
    }
  ]

};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource: OpenSourceType = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects: BigProjectsType = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: saayaHealthLogo,
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: nextuLogo,
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection: AchievementSectionType = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: codeInLogo,
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: googleAssistantLogo,
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: pwaLogo,
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection: BlogSectionType = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection: TalkSectionType = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection: PodcastSectionType = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection: ResumeSectionType = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo: ContactInfoType = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails: TwitterDetailsType = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
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
  isHireable,
  resumeSection
};
