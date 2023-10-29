import Image from "next/image";

export default function BrowsePage() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl">
          ¿Quién está viendo ahora?
        </h1>
        <div className="mt-10">
          <div className="text-center cursor-pointer hover:text-white group">
            <Image
              src="/images/item.png"
              alt="Linder"
              width={172}
              height={172}
              className="rounded group-hover:border-4 group-hover:border-white transition-all ease-out duration-500"
            />
            <p className="mt-3 text-netflix-gray-light group-hover:text-white">
              Linder
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
