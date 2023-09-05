import { getProject } from "../../../../../sanity/sanity-utils";
import { PortableText} from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: {project: string};
};

export default async function Project({params}: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
    <div>
        <header className="flex items-center justify-between px-4 md:px-0">
            <h1 className="text-black text-2xl font-extrabold py-2 md:text-4xl">
                {project.name}
            </h1> 

            <a 
            href={project.url} 
            title="View Project" 
            target="blank" 
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg text-gray-500 font-bold py-2 px-2 
            hover:bg-green-600 hover:text-green-100 transition">
                View
            </a>
            
        </header>
        <div className="mt-3 text-base mb-4 px-4 pb-4 md:px-1 md:text-xl">
           <PortableText value= {project.content} />
        </div>
        <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-500 object-cover rounded-xl"

        />
    
        
        </div>
    )
}