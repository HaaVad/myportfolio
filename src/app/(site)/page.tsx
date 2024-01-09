import {getProjects} from "../../../sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";
import Hero from "./assets/Satemwa_MJBrenna_Vadstein.jpg"

export default async function Home() {
  const projects = await getProjects();
  const sortedProjects = projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="max-w-3xl mx-auto py-2 text-brown">
      <Image
        src={Hero}
        alt="Håkon"
        priority={true}
        className="h-52 pb-6 object-cover object-center drop-shadow md:h-96"
      />
      <h1 className="text-black text-2xl font-extrabold px-4 md:px-0 md:text-4xl">
        Hi! I am Håkon!
      </h1>
      <p className="mt-3 text-base mb-4 px-4 md:px-0 md:text-xl">
      Thanks for visiting my website! These are some of the projects I have been working on.
      Feel free to <Link href="/contact" className="text-green-600 font-semibold hover:text-green-400">contact</Link> me for feedback or questions.
      And hit me up for a digital tea if you want to connect!
    </p>

     
      <h1 className="mt24 font-bold text-2xl px-4 md:px-0 md:text-3xl">Projects</h1>
      <div className="mt-5 grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sortedProjects

      .map((project) => ( 
        <Link 
        href={`/projects/${project.slug}`} 
        key={project._id} 
        className="border-0 md:border-2 border-brown rounded-lg p-1">
          {project.image && (
            <Image 
            src={project.image}
            alt={project.name}
            width={750}
            height={300}
            className="object-cover rounded-lg border border-grey-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.name}</div></Link>
      ))}
    </div>
    </div>
  )
}


