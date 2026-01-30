import Image from "next/image";
import { teamCardItems, valuesItems } from "@/data/data";
import Link from "next/link";
import { RiInstallLine, RiYoutubeLine } from "@remixicon/react";

const page = () => {
  return (
    <>
      {/* Welcome */}
      <section className="section">
        <div className="container space-y-16 lg:space-y-20">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="title">
                Welcome to Dentora Your Trusted Partner in Dental Care
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget ligula pharetra
                vulputate ac dictumst. Lacus vitae diam.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2.5">
              <span className="border-b-primary-600 before:bg-primary-600 relative flex h-[48px] w-[31px] items-center justify-center rounded-4xl border before:absolute before:top-2.5 before:left-1/2 before:h-2.5 before:w-[3px] before:-translate-x-1/2 before:animate-bounce" />
              <p>Scroll down</p>
            </div>
          </div>

          <div>
            <Image
              src={"/images/about-page-banner.png"}
              alt={"about"}
              width={1197}
              height={553}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="subtitle">Our Story</p>
            <h2 className="title">
              We Started with One Simple Goal: Making Our Patients Smile
            </h2>
            <p className="mt-1">
              Lorem ipsum dolor sit amet consectetur. Eget ligula pharetra
              vulputate ac dictumst. Lacus vitae diam.
            </p>
          </div>
          <div className="mt-16 flex items-baseline -space-x-20 lg:mt-20">
            <div className="relative -z-10">
              <Image
                src={"/images/about-section-img-2.png"}
                alt={"about section image"}
                width={593}
                height={518}
                className="rotate-[8deg] rounded-xl"
              />
            </div>

            <div className="bg-primary-600 overflow-hidden rounded-xl">
              <Image
                src={"/images/about-section-img-3.png"}
                alt={"about section image"}
                width={630}
                height={564}
                className={"rotate-[9deg] rounded-xl"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <p className="subtitle">Values</p>
            <h2 className="title">
              The Core Principles That Drive Everything We Do
            </h2>
          </div>
          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {valuesItems.map((item) => (
              <div
                key={item.id}
                className="border-primary-200 flex items-center gap-3.5 rounded-lg border bg-white p-6"
              >
                <span className="bg-primary-100 text-primary-700 flex size-12 shrink-0 items-center justify-center rounded-md">
                  <item.icon />
                </span>

                <div>
                  <h3 className="card-title">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href={"/services"}
            className="secondary-btn mx-auto mt-10 block max-w-max lg:mt-28"
          >
            BROWSE SERVICES
          </Link>
        </div>
      </section>

      {/* Our Team */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <p className="subtitle">Our Team</p>
            <h2 className="title">
              Skilled Dentists Committed to Your Oral Health
            </h2>
          </div>

          <div className="mt-11 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {teamCardItems.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-lg">
                <div className="bg-primary-100">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={260}
                    height={244}
                    className="mx-auto"
                  />
                </div>

                <div className="space-y-1 p-5 text-center">
                  <h3 className="card-title">{item.name}</h3>
                  <p>{item.text}</p>
                  <div className="flex items-center justify-center gap-2.5">
                    <a
                      href="#"
                      className="bg-primary-500 hover:bg-primary-700 focus:bg-primary-700 flex size-9 items-center justify-center rounded-full text-white transition-colors"
                    >
                      <RiInstallLine />
                    </a>
                    <a
                      href="#"
                      className="bg-primary-500 hover:bg-primary-700 focus:bg-primary-700 flex size-9 items-center justify-center rounded-full text-white transition-colors"
                    >
                      <RiYoutubeLine />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
