/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import Link from "next/link";

interface Props {
  src: string;
  alt: string;
  name?: string;
  isHover?: boolean;
}

export default function Avatar({ src, alt, name, isHover }: Props) {
  return (
    <Link
      href={"/"}
      className={classNames("mt-10 text-center", {
        group: isHover,
      })}
    >
      <div className="cursor-pointer hover:text-white w-32 h-32 relative">
        <img
          src={src}
          alt={alt}
          className="rounded bg-white group-hover:border-4 group-hover:border-white transition-all ease-out duration-500"
        />
      </div>
      {name && (
        <p className="mt-3 text-netflix-gray-light group-hover:text-white">
          {name}
        </p>
      )}
    </Link>
  );
}
