import { meta, shopify, starbucks, tesla, yt, nailsstore } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  // {
  //   imageUrl: express,
  //   name: "Express",
  //   type: "Backend",
  // },
  // {
  //   imageUrl: git,
  //   name: "Git",
  //   type: "Version Control",
  // },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
 
  
  // {
  //   imageUrl: mongodb,
  //   name: "MongoDB",
  //   type: "Database",
  // },
  // {
  //   imageUrl: motion,
  //   name: "Motion",
  //   type: "Animation",
  // },
  // {
  //   imageUrl: mui,
  //   name: "Material-UI",
  //   type: "Frontend",
  // },
  // {
  //   imageUrl: nextjs,
  //   name: "Next.js",
  //   type: "Frontend",
  // },
  // {
  //   imageUrl: nodejs,
  //   name: "Node.js",
  //   type: "Backend",
  // },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  // {
  //   imageUrl: sass,
  //   name: "Sass",
  //   type: "Frontend",
  // },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  // {
  //   imageUrl: typescript,
  //   name: "TypeScript",
  //   type: "Frontend",
  // },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: yt,
    theme: "btn-back-red",
    name: "YouTube UI (React)",
    description:
      "Developed a user interface of the YouTube app that shows home page of YouTube with videos on it. It also plays the video when clicked with suggested with along them. With the help of RapidApi the data is gathered and displayed. You can also search for some video and play any from the search results. For its designing I used tailwind css.",
    link: "https://github.com/harshit-ralhan/youtube-ui--clone",
  },
  {
    iconUrl: nailsstore,
    theme: "btn-back-yellow",
    name: "Nails Shopping Store (React)",
    description:
      "Developed a shopping store which sells nails. I developed it using React js and Redux. For its design I used Bootstrap. In this store you can see a home page, an about section and a store page where you can see all the variety of items available. You can add the items to your shopping bag and then go to shopping bag to place your order.",
    link: "https://github.com/harshit-ralhan/shopping-store-UI",
  },
  // {
  //   iconUrl: pricewise,
  //   theme: "btn-back-red",
  //   name: "Amazon Price Tracker",
  //   description:
  //     "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
  //   link: "https://github.com/adrianhajdin/pricewise",
  // },
  // {
  //   iconUrl: threads,
  //   theme: "btn-back-green",
  //   name: "Full Stack Threads Clone",
  //   description:
  //     'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
  //   link: "https://github.com/adrianhajdin/threads",
  // },
  // {
  //   iconUrl: car,
  //   theme: "btn-back-blue",
  //   name: "Car Finding App",
  //   description:
  //     "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
  //   link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  // },
  // {
  //   iconUrl: snapgram,
  //   theme: "btn-back-pink",
  //   name: "Full Stack Instagram Clone",
  //   description:
  //     "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
  //   link: "https://github.com/adrianhajdin/social_media_app",
  // },
  // {
  //   iconUrl: estate,
  //   theme: "btn-back-black",
  //   name: "Real-Estate Application",
  //   description:
  //     "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
  //   link: "https://github.com/adrianhajdin/projects_realestate",
  // },
  // {
  //   iconUrl: summiz,
  //   theme: "btn-back-yellow",
  //   name: "AI Summarizer Application",
  //   description:
  //     "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
  //   link: "https://github.com/adrianhajdin/project_ai_summarizer",
  // },
];
