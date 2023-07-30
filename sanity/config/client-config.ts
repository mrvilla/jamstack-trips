import {createClient} from "@sanity/client";


const projectId = "2vwp5q2q";
const dataset = "jamstack-trips";
const apiVersion = "2023-01-01";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
})


