import { data } from "autoprefixer";
import { performRequest } from "lib/datocms";
import { draftMode } from "next/headers";
import Image from "next/image";

const PAGE_CONTENT_QUERY = `

 {
  allBlogs {
    headline
    description
    id
    text
    blogImage {
      url
    }
  }
}
`;

function getPageRequest() {
  const { isEnabled } = draftMode();

  return { query: PAGE_CONTENT_QUERY, includeDrafts: isEnabled };
}

export default async function Blog() {
  //   const { isEnabled } = draftMode();

  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);

  //   const {
  //     data: {},
  //   } = await performRequest({ query: PAGE_CONTENT_QUERY });

  const blogs = data.allBlogs;

  console.log("blogs:", blogs);

  return (
    <section>
      {blogs.map((blog) => {
        return (
          <article key={blog.id}>
            <Image src={blog.blogImage.url} alt="Blog image" width={100} height={100} sizes="50vw" />
            <div>
              <h3>{blog.geadline}</h3>
              <p>{blog.description}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
