import Link from "next/link";
import { servicesItems } from "@/data/data";
import ServicesCard from "@/components/ServicesCard";
import Cta from "@/components/Cta";

const page = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-6">
              <h2 className="title">Our Services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget ligula pharetra
                vulputate ac dictumst. Lacus vitae diam.
              </p>
            </div>

            <Link href={"/contact"} className="primary-btn">
              BOOK AN APPOINTMENT
            </Link>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicesItems.map((item) => (
              <ServicesCard key={item.id} {...item} />
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
