import {defineConfig} from "sanity";
import {deskTool} from "sanity/desk";
import schemas from "@/sanity/schemas";

const config = defineConfig({
    projectId: "2vwp5q2q",
    dataset: "jamstack-trips",
    title: 'Jamstack Trips',
    apiVersion: "2023-29-07",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
})

export default config;
