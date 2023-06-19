import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    date: Date;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
}