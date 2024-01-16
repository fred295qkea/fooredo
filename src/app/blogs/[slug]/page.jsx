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

async function page({ params }) {
  const { slug } = params;
  const pageRequest = getPageRequest();
  const data = await performRequest(pageRequest);

  let blogrequest = {};

  data.allBlogs.map((blog) => {
    {
      blog.id == slug ? (blogrequest = blog) : "";
    }
  });

  console.log(blogrequest);

  return (
    <section className="max-w-6xl m-auto">
      <h1 className="p-32 pb-2 text-2xl text-center text-white">{blogrequest.headline}</h1>
      <Image className="w-full" src={blogrequest.blogImage.url} alt="Blog image" height={9} width={16} sizes="100vw" />
      <h3 className="text-white">{blogrequest.description}</h3>
      <p className="text-white">{blogrequest.text}</p>
    </section>
  );
}

export default page;
