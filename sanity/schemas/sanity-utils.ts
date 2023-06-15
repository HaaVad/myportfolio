import {createClient, groq} from "next-sanity";
import { Project } from "../../types/Project";

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "m7f72ydq",

        dataset: "production",
    
        apiVersion: "2023-12-06",
    });

    return client.fetch(
        groq`*[_type = "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset=>url,
            url,
            content
        }`
    )
}