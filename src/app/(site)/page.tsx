
import {getProjects} from "../../../sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";
import Hero from "./assets/Satemwa_MJBrenna_Vadstein.jpg"

export const revalidate = 10;

export default async function Home() {
  const projects = await getProjects();
  const sortedProjects = projects.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();  
  });




  return (
    <div className="max-w-3xl mx-auto text-brown">
      <Image
        src={Hero}
        alt="Håkon"
        priority={true}
        className="h-72 pb-4 object-cover object-center drop-shadow md:h-96"
      />
      <h1 className="text-black text-3xl font-extrabold my-3 px-5 md:px-0 md:text-4xl">
      Hi! I am Håkon!
      </h1>
      <p className="mt text-lg px-5 md:px-0 md:text-xl">
      Currently working as a developer at <a href="https://www.noaignite.no/"  className="text-green-600 font-semibold hover:text-green-400"> NoA Ignite</a>. This site is undergoing a transformation, but feel free to 
      <Link href="/contact" className="text-green-600 font-semibold hover:text-green-400"> contact</Link> me for digital tea.
      Also, check out 
      <a href="https://spillthetea.no/"  className="text-green-600 font-semibold hover:text-green-400"> my teashop!</a>
      </p >
     
</div>

  )}