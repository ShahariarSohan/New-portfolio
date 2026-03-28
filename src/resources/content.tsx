import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Shahariar",
  lastName: "Sohan",
  name: `Shahariar Sohan`,
  role: "Full Stack Web Developer",
  // avatar: "/images/avatar.jpg",
  email: "sohanshahariar4@gmail.com",
  location: "Asia/Dhaka", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bangla", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Send me a message</>,
  description: (
    <>Have a question or want to work together? Feel free to reach out.</>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ShahariarSohan",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shahariarsohan",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer with a Backend Mindset</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I’m Shahariar Sohan, a Full Stack Developer at{" "}
      <Text as="span" size="xl" weight="strong">
        SM Technology {" "}
      </Text>
      focused on building scalable backend systems and modern web apps.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m Shahariar Sohan, a Full Stack Developer focused on building modern
        web applications with Next.js and React. On the backend, I work with
        MongoDB and PostgreSQL, using Prisma and Mongoose to design scalable and
        maintainable systems. I’m particularly passionate about backend
        engineering understanding how servers work, how data is stored and
        managed, and how cloud platforms operate at scale.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SM Technology",
        timeframe: "2026 - Present",
        role: "Full Stack Developer",
        achievements: [
          <>
            Designed and implemented scalable backend systems using Node.js,
            PostgreSQL, and MongoDB, improving API performance and reliability.
          </>,
          <>
            Built and optimized database schemas with Prisma and Mongoose,
            ensuring efficient data management and maintainability.
          </>,
          <>
            Developed RESTful APIs and backend services for web applications,
            focusing on performance, security, and scalability.
          </>,
          <>
            Improved system performance by optimizing queries and reducing
            response times across critical endpoints.
          </>,
          <>
            Collaborated with frontend teams to integrate APIs seamlessly,
            ensuring smooth and efficient user experiences.
          </>,
        ],
        // images: [
        //   // optional: leave the array empty if you don't want to display images
        //   {
        //     src: "https://i.ibb.co.com/0jZp2SB5/hdrt.png",
        //     alt: "Hidden Dependency Risk Tracker",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "React", icon: "react" },
          { name: "Redux", icon: "redux" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Tailwind CSS", icon: "tailwindcss" },

          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },

          { name: "MongoDB", icon: "mongodb" },
          { name: "Mongoose", icon: "mongoose" },

          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Prisma", icon: "prisma" },

          { name: "Docker", icon: "docker" },
          { name: "Postman", icon: "postman" },
          { name: "Vercel", icon: "vercel" },

          { name: "Supabase", icon: "supabase" },
          { name: "Neon", icon: "neon" },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies & Courses",
    institutions: [
      {
        name: "A AL Khan High School, Chattagram, Bangladesh",
        description: <>Completed Secondary School Certificate</>,
      },
      {
        name: "Sir Ashutosh Govt College, Chattgram , Bangladesh",
        description: <>Completed Higher Secondary School Certificate</>,
      },
      {
        name: "Next Level Web Development",
        description: <>Completed next level web development course.</>,
      },
      {
        name: "PH Web Development",
        description: <>Completed programming hero web development course.</>,
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

// const gallery: Gallery = {
//   path: "/gallery",
//   label: "Gallery",
//   title: `Photo gallery – ${person.name}`,
//   description: `A photo collection by ${person.name}`,
//   // Images by https://lorant.one
//   // These are placeholder images, replace with your own
//   images: [
//     {
//       src: "/images/gallery/horizontal-1.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/vertical-4.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/horizontal-3.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/vertical-1.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/vertical-2.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//     {
//       src: "/images/gallery/horizontal-2.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/horizontal-4.jpg",
//       alt: "image",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/vertical-3.jpg",
//       alt: "image",
//       orientation: "vertical",
//     },
//   ],
// };

export { person, social, newsletter, home, about, blog, work};
