import React from "react";

function ProjectCard({ project }) {
  const getEmbedUrl = (url) => {
    if (!url) return null;

    // Handle youtu.be links
    if (url.includes("youtu.be")) {
      const videoId = url.split("/").pop();
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Handle youtube.com/watch?v=
    if (url.includes("watch?v=")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Already an embed URL
    if (url.includes("/embed/")) {
      return url;
    }

    return null;
  };

  const videoUrl = getEmbedUrl(project.youtube);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      {/* Project Title */}
      <h2 className="text-3xl font-bold mb-4">
        {project.title}
      </h2>

      {/* Overview */}
      <p className="text-gray-700 whitespace-pre-line mb-6">
        {project.overview}
      </p>

      {/* Technical Details */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Technical Details
        </h3>

        <p className="text-gray-600 whitespace-pre-line">
          {project.technical}
        </p>
      </div>

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap mb-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Live Demo
          </a>
        )}
      </div>

      {/* YouTube Video */}
      {videoUrl && (
        <div className="overflow-hidden rounded-xl">
          <iframe
            width="100%"
            height="420"
            src={videoUrl}
            title={project.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          />
        </div>
      )}
    </div>
  );
}

export default ProjectCard;