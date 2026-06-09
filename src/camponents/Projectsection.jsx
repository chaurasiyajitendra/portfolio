
import { ArrowRight, ExternalLink, GitCommit, GitFork, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "GTA VI Landing Page",
    description:
      "A modern and immersive landing page inspired by GTA VI, built with React and Tailwind CSS. Features smooth animations, responsive design, and an engaging user experience focused on visual storytelling and performance.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    demoUrl: "https://gta6-p84p.onrender.com/",
    githubUrl: "https://github.com/chaurasiyajitendra/gta6",
  },
  {
    id: 2,
    title: "DOG Studio Clone",
    description:
      "A visually immersive clone of the official DOG Studio website built with Three.js and React. Features interactive 3D elements, smooth animations, modern UI effects, and a highly engaging user experience.",
    image: "/projects/project6.png",
    tags: ["Three.js", "React", "Tailwind CSS", "GSAP"],
    demoUrl: "https://wolf-3d.onrender.com",
    githubUrl: "https://github.com/chaurasiyajitendra/WOLF-3D",
  },
  {
    id: 3,
    title: "MODGARAGE",
    description:
      "Full-featured knowledge provider platform with user authentication and verifaction processing. you can select you vehicle and get all the information about it",
    image: "/projects/project2.png",
    tags: ["React", "Redux Toolkit",'Frmer',"Tailwindcss"],
    demoUrl: "https://carmode.onrender.com",
    githubUrl: "https://github.com/chaurasiyajitendra/carmode",
  },
  {
    id: 4,
    title: "Kickresume",
    description:
      "An AI-powered resume builder that helps users create professional, ATS-friendly resumes. Features include secure authentication, email verification, customizable templates, real-time editing, and PDF export.",
    image: "/projects/project4.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "AI"],
    demoUrl: "https://gen-ai-green.vercel.app/home",
    githubUrl: "https://github.com/chaurasiyajitendra/GEN-AI",
  },
  {
    id: 5,
    title: "Bank API",
    description:
      "Designed and developed a production-ready banking API with secure authentication, double-entry ledger accounting, idempotent transaction processing, account management, email verification, JWT-based authorization, and fraud-resistant transaction handling.",
    image: "/projects/Project4.jpg",
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "Ledger",
      "Idempotency",
      "REST API"
    ],
    // demoUrl: "YOUR_DEMO_URL",
    githubUrl: "https://github.com/chaurasiyajitendra/Bank-Backend",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with secure user authentication, email verification, product management, shopping cart functionality, order processing, and a responsive user interface for a seamless shopping experience.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://skatch-frontend.onrender.com",
    githubUrl: "https://github.com/chaurasiyajitendra/Skatch",
  },

{
  id: 6,
  title: "Pinterest Clone",
  description:
    "A full-stack Pinterest-inspired platform featuring user authentication, profile management, image posting, content discovery, and a responsive user experience. Users can upload and organize posts, explore pins from other creators, and manage their personal profiles seamlessly.",
  image: "/projects/project5.png",
  tags: ["Node.js", "Express", "MongoDB", "Tailwind CSS", "Authentication"],
  demoUrl: "https://pintres-clon.onrender.com",
  githubUrl: "https://github.com/chaurasiyajitendra/Pintres-Clon",
}
];

export const Projectsection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag,i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/chaurasiyajitendra"
          >
           <GitFork/> Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};


export default Projectsection