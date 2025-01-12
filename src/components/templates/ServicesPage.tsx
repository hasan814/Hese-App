import { cardStyles, services } from "@/utils/ServicesLink";
import { Service } from "@/types";

import CardServices from "../modules/CardServices";
import BackButton from "../elements/BackButton";

const ServicePage = () => {
  return (
    <div className="bg-grayLight min-h-screen px-6 py-8">
      <BackButton />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-black">Services</h1>
        <p className="mt-4 text-gray-700">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service: Service, index: number) => {
          const currentStyle = cardStyles[index % cardStyles.length];
          return (
            <CardServices
              key={index}
              service={service}
              currentStyle={currentStyle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServicePage;
