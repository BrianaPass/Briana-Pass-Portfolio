import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    // expressjs,
    // heroku,
    // mysql,
    // bootstrap,
  
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Personal Projects",
      icon: creator,
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
    // {
    //   name: "My SQL",
    //   icon: Mysql,
    // },
    // {
    //   name: "Bootstrap",
    //   icon: bootstrap,
    // },
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
    // {
    //   name: "heroku",
    //   icon: heroku,
    // },
    // {
    //   name: "expressjs",
    //   icon: expressjs,
    // },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Columbia University",
      icon: starbucks,
      iconBg: "#383E56",
      date: "October 2022 - May 2023",
      points: [
        "Learn through a rigorous curriculum that covers a full-stack: HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git, and more",
        "Collaborating in teams including to create high-quality websites",
        "Working with API Interaction (API, JSON, AJAX).",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Administrative Assistant",
      company_name: "We Blossom Inc",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Mar 2017 - present",
      points: [
        "Answer and screen phone calls, respond to inquiries.",
        "Coordinate reports.",
        "Contribute to team effort by collaborating with staff",
        "Maintain and organize company files.",
      ],
    },
    {
      title: "Treasuer",
      company_name: "National Society of Biomedical Engineering",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sept 2019 - May 2023",
      points: [
        "Maintained the student organization history for that academic year.",
        "Verified all student organization purchase requests",
        "Assisted with student organization projects where needed",
        "Initiated communication between the student organization president and individual participants",
      ],
    },
    {
      title: "Waitstaff",
      company_name: "Atria Briarcliff Manor Senior Living",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Aug 2020 - Sept 2021",
      points: [
        "Facilitated and implemented menu options for residents",
        "Collaborated with other staff as a team",
        "Advised on the best food and drink choices for each customer and answering questions",
        "Checked the quality of the final servings and resolve any issues",
        "Worked diligently to achieve outstanding service quality.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Social Media App",
      description:
        "created a command-line program to control an organization's employee database. The back end of the program was created using Node.js, Inquierer, and MySQL",
      tags: [
        {
          name: "Mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "Mongoose",
          color: "green-text-gradient",
        },
        {
          name: "Express.js",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/BrianaPass/Social-Media-App",
    },
    {
      name: "Recollection App",
      description:
        "Full stack MERN app that allows users to engage with others posts based on memories they post to the webiste",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/BrianaPass/Recollection-App",
    },
    {
      name: "Weather Guide",
      description:
        "A site that allows you to find the weather in any given area",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/BrianaPass/Weather-Guide",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };