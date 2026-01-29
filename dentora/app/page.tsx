import Link from "next/link";
import Image from "next/image";
import { servicesSecItems } from "@/data/data";
import ServicesCard from "@/components/ServicesCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32">
        <div className="container grid gap-16 space-y-10 sm:space-y-0 lg:grid-cols-2 lg:items-end">
          <div className="my-auto max-w-xl pb-10 md:max-w-2xl lg:max-w-none">
            <p className="subtitle">Smile with Confidence</p>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-[54px]">
              HELPING YOU BRING BACK YOUR{" "}
              <span className="text-primary-600">HAPPY SMILE </span>
            </h1>
            <p className="py-[14px_32px]">
              Lorem ipsum dolor sit amet consectetur. Consequat pharetra
              ultrices scelerisque arcu lorem augue. Lacus justo euismod justo
              amet dictum vel sapien est. Imperdiet tempor.
            </p>

            <div className="flex flex-col gap-4 md:flex-row">
              <Link href={"/about"} className="primary-btn">
                LEARN MORE
              </Link>
              <Link href={"/services"} className="secondary-btn">
                BROWSE SERVICES
              </Link>
            </div>
          </div>

          <div className="relative max-w-max lg:mx-0 lg:ml-auto">
            <Image
              src={"/images/hero-img.png"}
              alt={"hero image"}
              width={727}
              height={787}
              className="relative z-20"
            />
            <Image
              src={"/images/hero-card.png"}
              alt={"hero card"}
              width={229}
              height={109}
              className="ring-primary-200 absolute top-11 left-5 z-10 rounded-lg ring"
            />
          </div>
        </div>

        <div className="bg-primary-100 absolute right-0 bottom-0 -z-10 h-5/12 w-3/4 rounded-tl-xl sm:h-1/2 lg:h-full lg:w-1/2 lg:rounded-tl-none" />

        <div>
          <Image
            src={"/images/shape-1.svg"}
            alt={"shape"}
            width={200}
            height={200}
            className="absolute top-28 -left-8 -z-10"
          />
        </div>
      </section>

      {/* Service */}
      <section className="section">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="subtitle">Services</p>
              <h2 className="title max-w-md">
                Advanced Dental Care for Healthier Smiles
              </h2>
            </div>
            <Link href={"/services"} className="primary-btn uppercase">
              View all
            </Link>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicesSecItems.map((item) => (
              <ServicesCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container">
          <div>
            <p className="subtitle"></p>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
