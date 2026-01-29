import { blogCardProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ img, title, text, date }: blogCardProps) => {
  return (
    <div className="border-primary-200 overflow-hidden rounded-lg border">
      <div>
        <Image
          src={img}
          alt={title}
          width={389}
          height={217}
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="space-y-2 p-5">
        <h3 className="card-title">{title}</h3>
        <p className="mb-4">{text}</p>
        <div className="mt-auto flex items-center justify-between">
          <p>{date}</p>
          <Link
            href={"/"}
            className="text-primary-500 hover:text-primary-600 font-medium transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
