import profile from "./data/profile"
import ProjectCard from "./components/ProjectCard"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="bg-white rounded-3xl shadow-xl p-10 mb-10">

          <h1 className="text-5xl font-bold mb-4">
            {profile.name}
          </h1>

          <h2 className="text-2xl text-blue-600 mb-4">
            {profile.role}
          </h2>

          <p className="text-lg text-gray-700 mb-6 whitespace-pre-line">
            {profile.about}
          </p>

          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-3">
              Experience
            </h3>

            <div className="flex flex-wrap gap-3">
              {profile.experience.map((item, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-4 py-2 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-3">
              Expertise
            </h3>

            <div className="flex flex-wrap gap-3">
              {profile.expertise.map((item, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-3">
              Certifications
            </h3>

            <ul className="list-disc ml-6 text-gray-700">
              {profile.certifications.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">

            <a
              href={profile.github}
              target="_blank"
              className="bg-black text-white px-6 py-3 rounded-xl"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl"
            >
              LinkedIn
            </a>

            <a
              href={profile.resume}
              target="_blank"
              className="bg-green-600 text-white px-6 py-3 rounded-xl"
            >
              Resume
            </a>

          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-8">
            Projects
          </h2>

          {profile.projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default App