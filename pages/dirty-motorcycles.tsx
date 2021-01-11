import React from "react";
import { Footer } from "components/Footer";
import Image from "next/image";

const DirtyMotorcycles = () => (
  <div>
    <h1 className="text-6xl font-semibold leading-tight mb-4">
      Dirty motorcycles
    </h1>
    <Image
      src="/motorbike.jpeg"
      width={843}
      height={602}
      alt="Parked gray motorcycle beside road signs during daytime"
    />
    <Footer />
  </div>
);

export default DirtyMotorcycles;
