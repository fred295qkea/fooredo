import { performRequest } from "lib/datocms";
import { draftMode } from "next/headers";
import Image from "next/image";
import Link from "next/link";

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
    <section className="grid grid-cols-2 m-auto lg:grid-cols-3 max-w-7xl">
      {blogs.map((blog) => {
        return (
          <article className="flex flex-col gap-4 m-3 border-2 rounded-md first:col-span-2 first:row-span-2" key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>
              <Image className="w-full rounded-md " src={blog.blogImage.url} alt="Blog image" width={400} height={400} sizes="50vw" />
              <div className="flex flex-col p-3">
                <h3 className="text-white first:text-xl ">{blog.headline}</h3>
                <p className="text-sm text-white first:text-lg">{blog.description} </p>
              </div>
            </Link>
          </article>
        );
      })}
    </section>
  );
}
