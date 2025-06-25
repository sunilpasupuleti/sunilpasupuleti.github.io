// import images
import Hero_person from "./assets/images/Hero/person.png";
import Hero_person1 from "./assets/images/Hero/person1.png";

import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import js from "./assets/images/Skills/javascript.png";
import jquery from "./assets/images/Skills/jquery.png";
import angular from "./assets/images/Skills/angular.png";
import react from "./assets/images/Skills/react.png";
import rn from "./assets/images/Skills/react_native.png";
import mean from "./assets/images/Skills/mean.png";
import mern from "./assets/images/Skills/mern.png";
import php from "./assets/images/Skills/php.png";
import nodejs from "./assets/images/Skills/nodejs.png";
import expressjs from "./assets/images/Skills/expressjs.png";
import firebase from "./assets/images/Skills/firebase.png";
import mongo from "./assets/images/Skills/mongodb.png";
import mysql from "./assets/images/Skills/mysql.png";
import docker from "./assets/images/Skills/docker.png";
import devops from "./assets/images/Skills/devops.png";
import aws from "./assets/images/Skills/aws.png";
import typescript from "./assets/images/Skills/typescript.png";

import web_dev from "./assets/images/Services/web_development.png";
import app_dev from "./assets/images/Services/app_development.png";
import custom_software from "./assets/images/Services/custom_software.png";
import ecommerce from "./assets/images/Services/ecommerce.png";
import database from "./assets/images/Services/database.png";
import api from "./assets/images/Services/api.png";
import frontend from "./assets/images/Services/frontend.png";
import backend from "./assets/images/Services/backend.png";
import performance from "./assets/images/Services/performance.png";
import cloud from "./assets/images/Services/cloud.png";
import consult from "./assets/images/Services/consult.png";
import integration from "./assets/images/Services/integration.png";
import support from "./assets/images/Services/support.png";
import migration from "./assets/images/Services/migration.png";
import testing from "./assets/images/Services/testing.png";

import project_ecommerce from "./assets/images/Projects/ecommerce.mp4";
import project_portfolio from "./assets/images/Projects/portfolio.mp4";
import project_vms from "./assets/images/Projects/vms.mp4";
import project_stopwatch from "./assets/images/Projects/stopwatch.mp4";
import project_fruitslice from "./assets/images/Projects/slice.mp4";
import project_emoji from "./assets/images/Projects/emoji.mp4";
import project_mpensystems from "./assets/images/Projects/mpensystems.mp4";
import project_blog from "./assets/images/Projects/blog.png";
import person_project from "./assets/images/Projects/person.png";

import expenses from "./assets/images/Featured/expenses.jpeg";
import play_store from "./assets/images/Featured/playstore.png";
import app_store from "./assets/images/Featured/appstore.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person1.png";

import greendumbells from "./assets/images/Experiences/greendumbells.jpg";
import datavalley from "./assets/images/Experiences/datavalley.jpg";
import codegnan from "./assets/images/Experiences/codegnan.jpg";
import firewires from "./assets/images/Experiences/firewires.jpg";
import kaspertech from "./assets/images/Experiences/kaspertech.jpg";
import firmdev from "./assets/images/Experiences/firmdev.jpg";
import urbnmnky from "./assets/images/Experiences/urbnmnky.jpg";
import altruism from "./assets/images/Experiences/altruism.jpg";
import alhansat from "./assets/images/Experiences/alhansat.jpg";
import zypher from "./assets/images/Experiences/zypher.jpg";
import blobcity from "./assets/images/Experiences/blobcity.jpg";
import caarya from "./assets/images/Experiences/caarya.jpg";
import fullstack from "./assets/images/Experiences/fullstack.jpg";

// import icons from react-icons
import { GrCertificate, GrGithub, GrMail } from "react-icons/gr";
import { MdCheckCircle, MdDownload, MdPhone, MdWhatsapp } from "react-icons/md";
import { BsEyeFill, BsInstagram, BsLinkedin, BsPerson } from "react-icons/bs";
import { TbCertificate, TbSmartHome } from "react-icons/tb";
import { BiBriefcase, BiTime, BiUser } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai";

import {
  RiServiceLine,
  RiProjectorLine,
  RiGraduationCapFill,
} from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { HiBriefcase } from "react-icons/hi";
import { FaUserGraduate, FaBriefcase, FaPlus } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
      id: "home",
    },
    {
      link: "#skills",
      icon: BiUser,
      id: "skills",
    },
    {
      link: "#works",
      icon: BiBriefcase,
      id: "works",
    },
    {
      link: "#certificates",
      icon: TbCertificate,
      id: "certificates",
    },
    {
      link: "#services",
      icon: RiServiceLine,
      id: "services",
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
      id: "projects",
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
      id: "contact",
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "PASUPULETI",
    lastName: "SUNIL",
    cvLink: "https://webwizard.in/Sunil-Cv.pdf",
    btnText: "Download CV",
    btnIcon: MdDownload,
    images: [Hero_person, Hero_person1],
    hero_content: [
      {
        count: "5+",
        text: "Years of Experience in Web/App development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
      {
        count: "8+",
        text: "Companies worked for",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: js,
      },
      {
        name: "Jquery",
        logo: jquery,
      },
      {
        name: "Angular",
        logo: angular,
      },
      {
        name: "React",
        logo: react,
      },
      {
        name: "React Native",
        logo: rn,
      },
      {
        name: "MEAN STACK",
        logo: mean,
      },
      {
        name: "MERN STACK",
        logo: mern,
      },
      {
        name: "PHP",
        logo: php,
      },
      {
        name: "Node Js",
        logo: nodejs,
      },
      {
        name: "Express Js",
        logo: expressjs,
      },
      {
        name: "Firebase",
        logo: firebase,
      },

      {
        name: "Mongo DB",
        logo: mongo,
      },
      {
        name: "MySQL",
        logo: mysql,
      },
      {
        name: "AWS",
        logo: aws,
      },
      {
        name: "Docker",
        logo: docker,
      },
      {
        name: "devops",
        logo: devops,
      },
      {
        name: "typescript",
        logo: mysql,
      },
    ],
    icon: MdCheckCircle,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Application Development",
        para: "Create custom web applications from scratch to fulfill specific business needs.",
        logo: web_dev,
      },
      {
        title: "Mobile App Development",
        para: "Build cross-platform or native mobile apps for iOS and Android devices.",
        logo: app_dev,
      },
      {
        title: "Custom Software Solutions",
        para: "Develop tailored software solutions that automate processes and enhance user experiences.",
        logo: custom_software,
      },
      {
        title: "E-Commerce Development",
        para: "Design and develop online stores, integrating payment gateways, shopping carts, and inventory management systems.",
        logo: ecommerce,
      },
      {
        title: "Database Design and Management",
        para: "Design and manage databases to ensure efficient storage, retrieval, and manipulation of data.",
        logo: database,
      },
      {
        title: "API Development and Integration",
        para: "Create APIs and integrate third-party services to enhance app functionality.",
        logo: api,
      },
      {
        title: "Front-End Development",
        para: "Design and implement user interfaces with HTML, CSS, and JavaScript, focusing on responsive and interactive designs.",
        logo: frontend,
      },
      {
        title: "Back-End Development",
        para: "Build server-side logic, APIs, and databases using technologies like Node.js, Python, Ruby on Rails, etc.",
        logo: backend,
      },
      {
        title: "Web Security and Performance Optimization",
        para: "Ensure the security of web applications through practices like authentication, authorization, and encryption. Optimize apps for speed and performance.",
        logo: performance,
      },
      {
        title: "Cloud Services and Deployment",
        para: "Deploy applications to cloud platforms (AWS, Azure, Google Cloud) and manage cloud infrastructure for scalability.",
        logo: cloud,
      },
      {
        title: "Tech Consultation and Architecture",
        para: "Provide technical guidance, assess project feasibility, and create application architectures for optimal performance.",
        logo: consult,
      },
      {
        title: "UI/UX Design Integration",
        para: "Collaborate with designers to translate UI/UX designs into functional front-end code.",
        logo: integration,
      },
      {
        title: "Maintenance and Support",
        para: "Offer ongoing maintenance, bug fixes, updates, and technical support to ensure your clients' applications run smoothly.",
        logo: support,
      },
      {
        title: "Migration and Upgrades",
        para: "Assist clients in migrating their applications to newer technologies, frameworks, or platforms.",
        logo: migration,
      },
      {
        title: "Testing and Quality Assurance",
        para: "Conduct thorough testing, including unit testing, integration testing, and performance testing, to ensure robust applications.",
        logo: testing,
      },
    ],
  },
  journey: {
    title: "Qualification & Experiences",
    subtitle: "My Personal Journey",
    showMoreIcon: FaPlus,
    content: {
      experience: {
        title: "Work & Internships",
        icon: FaBriefcase,
        content: [
          {
            title: "Founder (Sole Proprietor)",
            para: "Webwizard",
            period: "01/2023 - Present",
            icon: HiBriefcase,
          },
          {
            title: "Full Stack Developer & Cloud Engineer",
            para: "Datavalley.ai - Full Time",
            period: "10/2023 - 03/2024",
            icon: HiBriefcase,
          },
          {
            title: "App Developer",
            para: "Green Dumbells - Intern",
            period: "06/2023 - 10/2023",
            icon: HiBriefcase,
          },
          {
            title: "Full Stack Developer & DevOps Engineer",
            para: "Codegnan IT Solutions Pvt Ltd - Full Time",
            period: "05/2023 - 07/2023",
            icon: HiBriefcase,
          },
          {
            title: "Associate Software Engineer",
            para: "Firewires Solutions - Intern",
            period: "10/2022 - 12/2022",
            icon: HiBriefcase,
          },
          {
            title: "MERN Stack Developer ",
            para: "Kasper Tech - Intern",
            period: "08/2022 - 09/2022",
            icon: HiBriefcase,
          },
          {
            title: "UI/UX Developer",
            para: "FIRM.DEV - Intern",
            period: "08/2022 - 09/2022",
            icon: HiBriefcase,
          },
          {
            title: "Full Stack Developer",
            para: "Trach Tech Solutions - Full Time",
            period: "12/2021 - 11/2022",
            icon: HiBriefcase,
          },
          {
            title: "Full Stack Developer",
            para: "Urbn Mnky - Intern",
            period: "05/2021 - 03/2022",
            icon: HiBriefcase,
          },
          {
            title: "Full Stack Developer",
            para: "Zypher - (Freelance + Intern)",
            period: "09/2021 - 12/2021",
            icon: HiBriefcase,
          },

          {
            title: "Frontend Developer",
            para: "Blobcity - Intern",
            period: "09/2021 - 11/2021",
            icon: HiBriefcase,
          },
          {
            title: "Full Stack Engineer",
            para: "Alhansat Technologies - Intern",
            period: "07/2021 - 10/2021",
            icon: HiBriefcase,
          },
          {
            title: "Backend Developer",
            para: "Altruism Labs - Intern",
            period: "05/2021 - 08/2021",
            icon: HiBriefcase,
          },
        ],
      },

      education: {
        title: "Education",
        icon: FaUserGraduate,
        content: [
          {
            title: "Master's in Web Development",
            para: "Conestoga College Institute of Technology and Advanced Learning - Canada",
            period: "2023-2025",
            icon: RiGraduationCapFill,
          },
          {
            title: "B.TECH in Information Technology",
            para: "Dhanekula Institute of Engineering & Technology - India",
            period: "2019-2023",
            icon: RiGraduationCapFill,
          },
          {
            title: "12th Standard",
            para: "Narayana Junior College - India",
            period: "2017-2019",
            icon: RiGraduationCapFill,
          },
          {
            title: "10th Standard",
            para: "Nirmala High School - India",
            period: "2016-2017",
            icon: RiGraduationCapFill,
          },
        ],
      },
    },
  },
  certificates: {
    title: "Certifications",
    subtitle:
      "My knowledge, experience letters, certifications and offer letters.",
    viewIcon: BsEyeFill,
    certificates_content: [
      {
        image: fullstack,
        content: [
          {
            title: "Course Completion",
            logo: GrCertificate,
          },
          {
            title: "Full Stack Development",
            logo: AiOutlinePlayCircle,
          },
          {
            title: "Udemy",
            logo: GoOrganization,
          },
          {
            title: "4 Months",
            logo: BiTime,
          },
        ],
      },
      {
        image: datavalley,
        content: [
          {
            title: "Datavalley",
            logo: GoOrganization,
          },
          {
            title: "Full Stack Developer",
            logo: BsPerson,
          },
          {
            title: "Present",
            logo: BiTime,
          },
        ],
      },

      {
        image: greendumbells,
        content: [
          {
            title: "Green Dumbells",
            logo: GoOrganization,
          },
          {
            title: "App Developer",
            logo: BsPerson,
          },
          {
            title: "4 Months",
            logo: BiTime,
          },
        ],
      },
      {
        image: codegnan,
        content: [
          {
            title: "Codegnan IT Solutions Pvt.Ltd",
            logo: GoOrganization,
          },
          {
            title: "Full Stack Developer",
            logo: BsPerson,
          },
          {
            title: "1 Month",
            logo: BiTime,
          },
        ],
      },
      {
        image: firewires,
        content: [
          {
            title: "Firewires Solutions",
            logo: GoOrganization,
          },
          {
            title: "Backend Developer",
            logo: BsPerson,
          },
          {
            title: "2 Months",
            logo: BiTime,
          },
        ],
      },
      {
        image: kaspertech,
        content: [
          {
            title: "Kasper Tech",
            logo: GoOrganization,
          },
          {
            title: "Full Stack Developer",
            logo: BsPerson,
          },
          {
            title: "1 Month",
            logo: BiTime,
          },
        ],
      },
      {
        image: firmdev,
        content: [
          {
            title: "Firm.Dev",
            logo: GoOrganization,
          },
          {
            title: "UI Developer",
            logo: BsPerson,
          },
          {
            title: "1 Month",
            logo: BiTime,
          },
        ],
      },
      {
        image: urbnmnky,
        content: [
          {
            title: "Urbn Mnky",
            logo: GoOrganization,
          },
          {
            title: "Full Stack Developer",
            logo: BsPerson,
          },
          {
            title: "6 Months",
            logo: BiTime,
          },
        ],
      },
      {
        image: altruism,
        content: [
          {
            title: "Altruism Labs",
            logo: GoOrganization,
          },
          {
            title: "Backend Developer",
            logo: BsPerson,
          },
          {
            title: "2 Months",
            logo: BiTime,
          },
        ],
      },
      {
        image: alhansat,
        content: [
          {
            title: "Alhansat Technologies",
            logo: GoOrganization,
          },
          {
            title: "Full Stack Engineer",
            logo: BsPerson,
          },
          {
            title: "3 Months",
            logo: BiTime,
          },
        ],
      },
      {
        image: zypher,
        content: [
          {
            title: "Zypher",
            logo: GoOrganization,
          },
          {
            title: "Full Stack Engineer",
            logo: BsPerson,
          },
          {
            title: "2 Months",
            logo: BiTime,
          },
        ],
      },
      {
        image: blobcity,
        content: [
          {
            title: "Blobcity",
            logo: GoOrganization,
          },
          {
            title: "UI Engineer",
            logo: BsPerson,
          },
          {
            title: "2 Months",
            logo: BiTime,
          },
        ],
      },
      {
        image: caarya,
        content: [
          {
            title: "Caarya",
            logo: GoOrganization,
          },
          {
            title: "Angular Frontend Developer",
            logo: BsPerson,
          },
          {
            title: "3 Months",
            logo: BiTime,
          },
        ],
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Multi-Category Ecommerce",
        type: "video",
        url: project_ecommerce,
        description:
          "MEAN Stack e-commerce: Payments, OTP, Admin Panel, Subscriptions, Coupons, Categories, COD, & more for a versatile shopping experience",
        demoUrl: "https://ecommerce.webwizard.in",
      },
      {
        title: "Responsive Portfolio",
        type: "video",
        url: project_portfolio,
        description:
          "Discover my responsive portfolio, a fusion of design and functionality. Explore web creations that adapt gracefully to any screen size.",
        demoUrl: "https://old.webwizard.in",
      },

      {
        title: "Visitor Management System",
        type: "video",
        url: project_vms,
        description:
          "MEAN Stack: Employee-Visitor Tracking & Meeting Management System",
        demoUrl: "https://vms.webwizard.in",
      },
      {
        title: "Fruit Slice Game",
        type: "video",
        url: project_fruitslice,
        description: "Slice Fruits: Enjoy this Pure JavaScript Game!",
        demoUrl: "https://slicegame.webwizard.in/",
      },
      {
        title: "Stopwatch",
        type: "video",
        url: project_stopwatch,
        description: "Stopwatch Website: Measure Time Online",
        demoUrl: "https://stopwatch.webwizard.in/",
      },
      {
        title: "Emoji Mover Fun",
        type: "video",
        url: project_emoji,
        description: "Dynamic Emoji Expressions: Mouse Movements in JavaScript",
        demoUrl: "https://emoji.webwizard.in/",
      },
      {
        title: "Personal Blog",
        type: "image",
        url: project_blog,
        description:
          "Responsive CMS Blog: Manage Content and Comments with Ease",
        demoUrl: "https://blog.webwizard.in/",
      },
      {
        title: "MP EN SYSTEMS Page",
        type: "video",
        url: project_mpensystems,
        description:
          "Check out my responsive web design featuring project grids and logo sliders for MP EN SYSTEMS. See the demo below.",
        demoUrl: "https://www.mpensystems.com/",
      },
    ],
  },
  Featured: {
    title: "Featured",
    subtitle: "MY TOP CREATION",
    image: expenses,
    firstName: "Expenses",
    lastName: "Aura",
    content: {
      description:
        "Seamlessly manage expenses with my Expenses Aura App - Simple and effortless! ",
      btnText: "VIEW NOW",
      btnUrl: "https://expensesmanager.app",
      buttons: [
        {
          icon: play_store,
          url: "https://play.google.com/store/apps/details?id=com.webwizard.expensesmanager",
        },
        {
          icon: app_store,
          url: "https://apps.apple.com/in/app/expenses-aura-track-smart/id6450874945",
        },
      ],
    },
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Extremely satisfied with the work he has done. He understood my needs regarding the project and patiently completed the requirements, even shared great suggestions to add in.Highly appreciate his professionalism. Will surely connect again for more work in the future 👍🏼”",
        img: avatar1,
        name: "GARIMA KUMAR",
      },
      {
        review:
          "“Sunil worked with KasperTech as a full stack intern for a duration of 1 Month. We observed that he is very passionate about his work and completes the assigned tasks within deadlines. We would like to work with him again in future - Founder & CEO KasperTech”",
        img: avatar2,
        name: "KRISHNA OJHA",
      },
      {
        review:
          "“Professional behaviour and sound knowledge of the technology which needs to be used. Understood my requirements well and even shared valuable suggestions. My experience was hassle free and smooth. Highly recommended.”",
        img: avatar3,
        name: "AMAN",
      },
      {
        review:
          "“Excellent, amazing effort by the developer (Sunil). Thanks to his expertise and perseverance, my website looks fantastic and runs incredibly well. I suggest giving him a call if you're looking for a developer. Strongly advised.”",
        img: avatar4,
        name: "PRATAP",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Experienced Full Stack Developer ready to elevate your projects. Expertise in web development, databases, and UI/UX. Let's create something amazing together!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "sunilpasupuleti",
        icon: GrGithub,
        link: "https://github.com/sunilpasupuleti",
      },

      {
        text: "sunil@webwizard.in",
        icon: GrMail,
        link: "mailto:sunil@webwizard.in",
      },
      {
        text: "+91 9959907940",
        icon: MdPhone,
        link: "tel:9959907940",
      },
      {
        text: "sunil-kumar-pasupuleti",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/sunil-kumar-pasupuleti/",
      },
      {
        text: "sunil__kumar__pasupuleti",
        icon: BsInstagram,
        link: "https://www.instagram.com/sunil__kumar__pasupuleti/",
      },

      {
        text: "SEND MESSAGE",
        icon: MdWhatsapp,
        link: "https://wa.me/9959907940",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
