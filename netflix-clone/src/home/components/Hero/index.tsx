import Image from "next/image";
import { Button } from "@/common";

interface Props {
  isHasVideo: boolean;
}

export default function Hero({ isHasVideo }: Props) {
  return (
    <div className="h-[90vh] relative">
      <div className="">
        {isHasVideo ? (
          <video
            autoPlay={true}
            muted={true}
            className="h-[90vh] w-full object-cover brightness-50"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          ></video>
        ) : (
          <Image
            src="/images/hero.webp"
            alt="Hero"
            fill
            className="object-cover brightness-50"
          />
        )}
      </div>
      <div className="absolute flex flex-col w-2/5 justify-center items-start px-20 h-full">
        <p>
          La extraordinaria travesía de conquistar, adaptarse y sobrevivir en la
          Tierra a lo largo de miles de millones de años cobra vida en esta
          serie documental sobre la naturaleza.
        </p>
        <div className="flex justify-between w-3/4 gap-5 mt-3">
          <Button
            text="Reproducir"
            lefIcon="/icons/play.svg"
            textVariant="md"
          />
          <Button
            text="Mas información"
            lefIcon="/icons/info.svg"
            variant="transparent"
            textVariant="md"
          />
        </div>
      </div>
    </div>
  );
}
