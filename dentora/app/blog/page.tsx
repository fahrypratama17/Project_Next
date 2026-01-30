import Image from "next/image";
import { blogPostItems, blogPostPageItems } from "@/data/data";
import BlogCard from "@/components/BlogCard";
import Cta from "@/components/Cta";

const page = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div>
            <h2 className="title">Blog Posts</h2>
          </div>

          <div className=":lg:gap-9 mt-10 grid gap-5 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <div>
                <Image
                  src={"/images/blog-page-banner.png"}
                  alt={"blog page banner"}
                  width={756}
                  height={406}
                  className="rounded-md"
                />
              </div>

              <div className="my-5 space-y-2.5">
                <h3 className="card-title">
                  What to Expect During Your Visit?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Habitasse commodo
                  imperdiet ornare suspendisse tempus dui in turpis. Viverra
                  nulla nec nullam eget iaculis ut praesent. Id sit tortor lorem
                  lacus viverra ultricies lacus. Scelerisque sit id a massa
                  feugiat semper risus urna commodo. Bibendum hendrerit
                  tristique neque arcu semper lacus gravida massa. Viverra at
                  nulla vestibulum sed at pellentesque orci dis
                </p>
                <p>september 1,2024</p>
              </div>
            </div>

            <div className="space-y-6">
              {blogPostPageItems.map((item) => (
                <div key={item.id} className="flex gap-3.5">
                  <div className="shrink-0">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={187}
                      height={107}
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-auto">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section mb-20">
        <div className="container space-y-11">
          <h2 className="title">Latest Articles</h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogPostItems.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <Cta />
      </section>
    </>
  );
};

export default page;
