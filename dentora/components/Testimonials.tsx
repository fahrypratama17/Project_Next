import React from "react";
import { testimonialsItems } from "@/data/data";
import Image from "next/image";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";

const Testimonials = () => {
  return (
    <div className="container">
      <div className="max-w-2xl space-y-2">
        <p className="subtitle">Testimonials</p>
        <h2 className="title">Hear from Our 1,000+ Happy Patients</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet platea egestas aliquam
          habitant. Hac
        </p>
        <div className="mt-3">
          {testimonialsItems.map((item) => (
            <div
              key={item.id}
              className="border-primary-200 flex flex-col items-start gap-5 overflow-hidden rounded-md border p-5 sm:flex-row"
            >
              <div className="max-w-max shrink-0">
                <Image
                  src={item.img}
                  alt={item.author}
                  width={95}
                  height={95}
                />
              </div>
              <div>
                <p>{item.text}</p>
                <p className="card-title">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <button>
            <RiArrowLeftLine />
          </button>
          <button>
            <RiArrowRightLine />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
