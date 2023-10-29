import Image from "next/image";
import classNames from "classnames";

interface Props {
  src: string;
  alt: string;
  name?: string;
  isHover?: boolean;
}
export default function Avatar({ src, alt, name, isHover }: Props) {
  return (
    <div
      className={classNames("mt-10 text-center", {
        group: isHover,
      })}
    >
      <div className="cursor-pointer hover:text-white w-32 h-32 relative">
        <Image
          src={src}
          alt={alt}
          fill
          className="rounded group-hover:border-4 group-hover:border-white transition-all ease-out duration-500"
        />
      </div>
      {name && (
        <p className="mt-3 text-netflix-gray-light group-hover:text-white">
          Linder
        </p>
      )}
    </div>
  );
}
