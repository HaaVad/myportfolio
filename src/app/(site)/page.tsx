import {getProjects} from "../../../sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";
import Hero from "./assets/Satemwa_MJBrenna_Vadstein.jpg"

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-3xl mx-auto py-2">
   
      <Image
        src={Hero}
        alt="Håkon"
        className="h-96 pb-6 object-cover object-center"
      />
      <h1 className="text-4xl font-extrabold">
        Hi! I'm Håkon!
      </h1>
      <p className="mt-3 text-xl mb-4 pb-4">Thanks for visiting my website! These are some of the projects I've been working on. Feel free to contact me for feedback or questions. And hit me up for a digital tea if you want to connect! </p>

     
      <h2 className="mt24 font-bold text-gray-700 text-3xl">Projects</h2>
      <div className="mt-5 grid grid-cols-1 med: grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => ( 
        <Link 
        href={`/projects/${project.slug}`} 
        key={project._id} 
        className="border-2 border-gray-500 rounded-lg p-1">
          {project.image && (
            <Image 
            src={project.image}
            alt={project.name}
            width={750}
            height={300}
            className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.name}</div></Link>
      ))}
    </div>
    </div>
  )
}

