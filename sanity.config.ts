import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import schemas from './sanity/schemas'

const config = defineConfig({

    projectId: "m7f72ydq",

    dataset: "production",

    title: "My Portfolio",

    apiVersion: "2023-12-06",

    basePath: "/admin",

    plugins: [deskTool()],

    schema: {types: schemas},

})

export default config;