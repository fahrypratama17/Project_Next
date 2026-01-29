import Image from "next/image";
import { servicesCardProps } from "@/types/types";
import Link from "next/link";

const ServicesCard = ({ icon, title, text }: servicesCardProps) => {
  return (
    <div className="border-primary-200 overflow-hidden rounded-lg border">
      <div className="bg-primary-100 py-9">
        <Image
          src={icon}
          alt={title}
          width={144}
          height={144}
          className="mx-auto"
        />
      </div>

      <div className="space-y-1 p-5">
        <h3 className="card-title">{title}</h3>
        <p className="mb-3.5">{text}</p>
        <Link
          href={"#"}
          className="text-primary-600 hover:text-primary-800 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
