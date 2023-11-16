import {
    mobile,
    backend,
    database,
    web,
    javascript,
    java,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    adobe,
    walmart,
    SI,
    VT,
    farmer,
    telecom,
    chatapp,
    threejs,
    game
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database Developer",
      icon: database,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Adobe",
      icon: adobe,
    },
  
  ];
  
  const experiences = [
      {
      title: "App Developer",
      company_name: "Solitaire Infosys",
      icon: SI,
      iconBg: "#383E56",
      date: "JAN 2019 - July 2019",
      points: [
        "Developed a City Tour mobile application built using Android(Java) and PHP.",
        "Apply principles of SDLC and methodologies like Agile, CI, Software and Product Security, Scalability, Documentation Practices, refactoring, and Testing Techniques",
        "Responsible for providing technical leadership to define, Capability to think clearly, examine problems currently, and solve issues, develop, and evolve applications in a fast-paced using the latest software development technologies and infrastructure.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title : "Web Developer",
      company_name: "Veintes Tech",
      icon: VT,
      date : "July 2019- July 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developerss.",
      ]
    },
    {
      title: "OMNI",
      company_name: "Walmart",
      icon: walmart,
      iconBg: "#E6DEDD",
      date: "March 2022 - Present",
      points: [
        "Meeting the customers' needs and delivering them their respective online • grocery orders..",
        "Changing and adapting to the constantly evolving working condition..",
        "Attend to the customer's concerns if they have complaints about their order.",
        "Letting customers know that their order is ready if it is ready ahead of time.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Dilpreet proved me wrong.",
      name: "Yashas",
      designation: "Freelancer",
      company: "UpWork",
      image: "https://media.licdn.com/dms/image/D4E35AQH0DR6lj0_BKg/profile-framedphoto-shrink_200_200/0/1677638456127?e=1690398000&v=beta&t=kpF_x2-yKyj1-5TgvKghtUIkVzehkMNZAHNCKfot3Io",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Dilpreet does.",
      name: "Chiranjeev Mal",
      designation: "Freelancer",
      company: "freelancing.com",
      image: "https://media.licdn.com/dms/image/C4E03AQEJuHUO1D0enQ/profile-displayphoto-shrink_800_800/0/1643770618445?e=1694649600&v=beta&t=Yex0hwKrriul6KVLssywuIsKETt356g8uvJfjh4tl5Q",
    },
    {
      testimonial:"Dilpreet's expertise and attention to detail transformed our React Native app into a flawless and user-friendly experience.",
      name: "Tushar Patel",
      designation: "Software Developer",
      company: "freelancing.com",
      image: "https://media.licdn.com/dms/image/D5635AQFYsw1KIeux7A/profile-framedphoto-shrink_800_800/0/1668795496060?e=1690221600&v=beta&t=n0W4GWnEUUYa0mZtEmxwG1t5GvBcAeq6bjaZgcrlVp0"
    },

  ];
  
  const projects = [
    {
      name: "Farmer's Hut",
      description:[
            "Two Hybrid App used for online grocery of fresh produce items.",
            "One App is used by farmer to manage inventory and handle orders",
            "Second App is used by consumer to search items and add different items to cart then order the products from different farmers based on consumer’s location.",
            "Uses fetch() API for CRUD operations.",
            "Uses Node Mailer for sending e-mails.",
            "Uses Twilio for OTPs.",
            "Uses mongo DB for storage."

      ],
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "native style",
          color: "pink-text-gradient",
        },
      ],
      image: farmer,
      source_code_link: "https://github.com/Dilpreet1996/Farmer-sHut",
    },
    {
      name: "Telecom Management System",
      description:[
      "Two Android app, one is used for managing the administration work and second one is for customers.",
      "Defined Role management for employees.",
      "Implemented with Telecom management system API to fetch the data from the database."

  ],
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "XML",
          color: "pink-text-gradient",
        },
      ],
      image: telecom,
      source_code_link: "https://github.com/Dilpreet1996/bsnlAppForPortofolio",
    },
    {
      name: "Chat App",
      description:[
         "Using socket.io to create real-time messaging and notification system",
         "Managing state using context API",
         "Code reuse (Custom hooks and util functions)",
         "Auth in react, node and JWT",
         "Creating and Consuming APIs"
        ],
      tags: [
        {
          name: "three.js",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "socket",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/Dilpreet1996/chatapp",
    },
    {
      name: "Mind Map Game",
      description:[
            "Using props for State management",
            "Simple and easy to guess number"

      ],
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "native style",
          color: "pink-text-gradient",
        },
      ],
      image: game,
      source_code_link: "https://github.com/Dilpreet1996/Game",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };