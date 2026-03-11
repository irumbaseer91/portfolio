export default function Projects() {
  return (
    <section id="projects" className="p-20 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border p-6 rounded hover:shadow-lg transition transform hover:-translate-y-1">
          <h3 className="text-xl font-bold mb-2">Project 1</h3>
          <p>Description</p>
        </div>
        <div className="border p-6 rounded hover:shadow-lg transition transform hover:-translate-y-1">
          <h3 className="text-xl font-bold mb-2">Project 2</h3>
          <p>Description</p>
        </div>
        <div className="border p-6 rounded hover:shadow-lg transition transform hover:-translate-y-1">
          <h3 className="text-xl font-bold mb-2">Project 3</h3>
          <p>Description</p>
        </div>
      </div>
    </section>
  );
}