import portfolio from '../assets/portfolio.png'
import youga from '../assets/yogap.png'
import calculator from '../assets/calculator.png'
import boxmodel from '../assets/boxmodel.gif'
import nomedf from '../assets/nomedf.png'
import organic from '../assets/organic.png'
import modernstore from '../assets/modernstore.png'

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
    starbucks,
    carrent,
    threejs,
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
      title: "Web Designer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Bootstrap",
      icon: docker,
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
      name: "TypeScript",
      icon: typescript,
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
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Web Design and Developer",
      company_name: "BDTask",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Octobar 2022 - December 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Shirt Customizer",
      description:
        "Web-based platform that allows users to create your unique and exclusive shirt with our brand-new 3D customizaion tool. Unleash your imagination and define your own style.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://project-shirt.vercel.app/",
    },
    {
      name: "Modern Ecommerce Store",
      description:
        "Web-based platform that allows users to create your unique and exclusive shirt with our brand-new 3D customizaion tool. Unleash your imagination and define your own style.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NEXTjs",
          color: "green-text-gradient",
        },
        {
          name: "sanity",
          color: "pink-text-gradient",
        },
      ],
      image: modernstore,
      source_code_link: "https://ecommercebyhadiuzzaman.vercel.app/",
    },
    {
      name: "Portfolio",
      description:
        "Modern one-page portfolio template with unique style. Personal is perfect for a clean, minimal, professional look on your resume and CV website.",
      tags: [
        {
          name: "bootsrap",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/sheikhsohan/project_shirt",
    },
    {
      name: "Yoga",
      description:
        "Explore my passion for yoga and mindfulness on my portfolio website, featuring my experience as a certified yoga instructor and meditator",
      tags: [
        {
          name: "bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: youga,
      source_code_link: "https://github.com/",
    },
    {
      name: "Nomed Force",
      description:
        "Nomed Force is an innovative online platform dedicated to video projects. It serves as a one-stop destination for individuals and businesses looking to create, discover, and collaborate on various video-based endeavors.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: nomedf,
      source_code_link: "https://react-nomed.vercel.app/",
    },
    {
      name: "Organic Food",
      description:
        "Nomed Force is an innovative online platform dedicated to video projects. It serves as a one-stop destination for individuals and businesses looking to create, discover, and collaborate on various video-based endeavors.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: organic,
      source_code_link: "https://organic-food-jade.vercel.app",
    },
    // {
    //   name: "Calculator",
    //   description:
    //     "The Calculator project is a modern and functional web-based calculator that allows users to perform basic arithmetic operations and more advanced calculations. Also this calculator provides a clean and intuitive user interface for effortless calculations.",
    //   tags: [
    //     {
    //       name: "javascript",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "html",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: calculator,
    //   source_code_link: "https://colorful-calculator.vercel.app/",
    // },
    // {
    //   name: "Animated 3D Box",
    //   description:
    //     "This is a visually captivating and interactive platform that showcases a three-dimensional box model. This immersive website allows users to explore and interact with a virtual box, providing a unique and engaging experience.",
    //   tags: [
    //     {
    //       name: "javascript",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "html",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: boxmodel,
    //   source_code_link: "https://3-d-box.vercel.app",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
