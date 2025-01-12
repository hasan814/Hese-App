"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ServicePage = () => {
  const router = usePathname();
  const serviceName = router.split("/")[2];

  return (
    <div className="p-6">
      <h1 className="text-black text-2xl font-bold">{serviceName}</h1>
      <p>You have entered the {serviceName} page.</p>
      <Link href="/services">
        <p className="bg-amber-300 text-black mt-4 py-3 px-2 rounded-lg inline-block">
          Back to Services
        </p>
      </Link>
    </div>
  );
};

export default ServicePage;
