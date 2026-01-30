import { footerListItems } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="bg-primary-100/30 mt-26 pt-16 pb-7">
      <div className="container divide-y divide-gray-300">
        <div className="grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr] lg:pb-20">
          <div>
            <p className="card-title">Subscribe to Our Newsletter</p>
            <p className="mb-8 pt-3">
              Lorem ipsum dolor sit amet consectetur. Eget ligula pharetra
              vulputate ac dictumst. Lacus vitae diam.
            </p>
            <div className="grid gap-2 lg:grid-cols-[1fr_0.7fr]">
              <input
                type="email"
                placeholder={"Enter your Email"}
                className="bg-primary-100 h-full rounded-md p-4"
              />
              <button className="primary-btn">subscribe</button>
            </div>
          </div>
          {footerListItems.map((item) => (
            <div key={item.id}>
              <p className="mb-1 text-lg font-semibold">{item.title}</p>
              <ul className="space-y-1.5">
                {item.list.map((label, index) => (
                  <li key={index}>
                    <Link href={"#"} className="hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-3">
          <div className="flex items-center gap-5">
            <div>
              <Image
                src={"/images/logo.png"}
                alt={"footer logo"}
                width={167}
                height={43}
              />
            </div>
            <div className="flex items-center gap-2">
              <a href="#" className="hover:text-primary-600 transition-colors">
                <RiFacebookBoxFill />
              </a>
              <a href="#" className="hover:text-primary-600 transition-colors">
                <RiInstagramFill />
              </a>
              <a href="#" className="hover:text-primary-600 transition-colors">
                <RiTwitterXFill />
              </a>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} Dentora.All rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
