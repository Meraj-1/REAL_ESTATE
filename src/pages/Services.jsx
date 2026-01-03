import React from "react";
import ServiceExper from "../components/serviceExper";
import UnlockProp from "../components/UnlockProp";
import SmartInv from "../components/SmartInv";

const Services = () => {
  return (
    <main className="bg-black text-white">

      {/* Hero / Experience Section */}
      <section className="relative">
        <ServiceExper />
      </section>

      {/* Divider Glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C778DD]/40 to-transparent my-20" />

      {/* Content Wrapper */}
      <section className="max-w-[1790px] mx-auto px-4 sm:px-8 lg:px-16 space-y-28 pb-32">

        {/* Unlock Properties */}
        <div className="relative">
          <UnlockProp />
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Smart Investment */}
        <div className="relative">
          <SmartInv />
        </div>

      </section>
    </main>
  );
};

export default Services;
