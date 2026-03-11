export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 bg-black text-white">
      <h1 className="text-xl font-bold">My Portfolio</h1>
     <div className="space-x-6">
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
     </div>
    </nav>
  )
}

