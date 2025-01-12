import { CardServicesProps } from "@/types";

import Image from "next/image";
import Link from "next/link";

const CardServices: React.FC<CardServicesProps> = ({
  service,
  currentStyle,
}) => {
  return (
    <Link
      href={service.route}
      className={`${currentStyle.backColor} rounded-lg shadow-lg hover:shadow-xl transition block`}
    >
      <div className="flex justify-around items-center p-4">
        <div className="flex flex-col justify-around items-start">
          <h2
            className={`${currentStyle.textBackcolor} text-black font-semibold px-2 py-1 rounded inline-block`}
          >
            {service.name}
          </h2>
          <div className="mt-4 text-black flex items-center">
            <span
              className={`${currentStyle.flashBackcolor} text-white rounded-full px-2 py-1 mr-2 transform -rotate-45`}
            >
              →
            </span>
            Learn more
          </div>
        </div>
        <div className="mt-4">
          <Image
            src={service.image}
            alt={service.name}
            width={100}
            height={100}
            className="rounded"
          />
        </div>
      </div>
    </Link>
  );
};

export default CardServices;
