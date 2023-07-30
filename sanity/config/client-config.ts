import {createClient} from "@sanity/client";

export const config = {
    projectId: "2vwp5q2q",
    dataset: "jamstack-trips",
    apiVersion: 1,
}

export const client = createClient({
    ...config,
    useCdn: true
})


