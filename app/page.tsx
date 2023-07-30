import Image from 'next/image'
import styles from './page.module.css'
import {Project} from "@/types/Project";
import {client} from "@/sanity/config/client-config";


const getProjects = async () => {
    const query = `*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`;


    const data = await client.fetch(query);
    return data;
}

export default async function Home() {
    const data: Project[] = await getProjects();

    console.log('Data:', JSON.stringify(data, null, 2));

  return (
      <main className={styles.main}>
          <h1>Jamstack Trips</h1>

            <div>
                {data.map((project: Project) =>
                    <div key={project._id}>
                        <h4>{project.name}</h4>
                        <Image
                            src={project.image}
                            alt="Next.js Logo"
                            width={640}
                            height={422}
                            priority
                        />
                        <div>{project.content}</div>
                    </div>)}
            </div>
     </main>
  )
}
