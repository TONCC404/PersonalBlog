interface Project {
    title: string;
    description: string;
    link: string;
  }
  
  export function ProjectCard({ title, description, link }: Project) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
        <a href={link} className="text-blue-500 hover:underline mt-4 inline-block">
          View Project →
        </a>
      </div>
    );
  }