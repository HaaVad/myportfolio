import { getProject } from "../../../../../sanity/sanity-utils";
import { PortableText} from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: {project: string};
};

export default async function Project({params}: Props) {
    const slug = params.project;
    const project = await getProject(slug);



    return (
    <div className="px-4 md:px-0">
        <header className="flex items-center justify-between">
            <h1 className="text-black text-2xl font-extrabold py-4 md:text-4xl">
                {project.name}
            </h1> 

            <Link 
            href="/#projects" 
            title="Back to all projects" 
            target="blank" 
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg text-gray-500 font-bold py-2 px-4 mr-0 md:mr-2 
            hover:bg-green-600 hover:text-green-100 transition">
                Back
            </Link>
            
        </header>
        <div className="mt-3 text-base mb-4 pb-4 md:px-1 md:text-xl">
           <PortableText value= {project.content} />
           <p className="pt-4">Click image to view project</p>

        </div>
        <a 
            href={project.url} 
            title="View Project" 
            target="blank" 
            rel="noopener noreferrer"
            className="">
            

        <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        id="gif"
        className="mt-10 border-2 border-gray-500 object-cover rounded-xl"

        />
        </a>
    
        
        </div>
    )
}