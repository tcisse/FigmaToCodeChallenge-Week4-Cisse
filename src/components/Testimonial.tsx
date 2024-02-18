import React from "react";
import Image from "next/image";

export function Testimonial() {
  return (
    <div className="bg-white py-10">
      <h1 className="text-center text-display-01 mb-10">
        My <span className="font-extrabold ">Testimonial</span>
      </h1>
      <div className="max-w-6xl mx-auto flex md:flex-row flex-col gap-10">
        <div className="bg-white shadow-custom shadow-lg rounded-2xl p-4 flex flex-col justify-center items-center hover:bg-black hover:text-white py-10">
          <Image
            src="/assets/images/testimonial-1.svg"
            width={96}
            height={96}
            alt="evren"
            className="mb-4"
          />
          <p className="text-center text-button-text-02 mb-4">
            I recently had to jump on 10+ different calls across eight different
            countries to find the right owner.
          </p>
          <hr className="w-44 py-2" />
          <h2 className="text-heading-05 font-semibold">Evren Shah</h2>
          <h3 className="text-heading-06">Designer</h3>
        </div>
        <div className="bg-white shadow-custom shadow-lg rounded-2xl p-4 flex flex-col justify-center items-center hover:bg-black hover:text-white py-10">
          <Image
            src="/assets/images/testimonial-2.svg"
            width={96}
            height={96}
            alt="evren"
            className="mb-4"
          />
          <p className="text-center text-button-text-02 mb-4">
            I recently had to jump on 10+ different calls across eight different
            countries to find the right owner.
          </p>
          <hr className="w-44 py-2" />
          <h2 className="text-heading-05 font-semibold">Evren Shah</h2>
          <h3 className="text-heading-06">Designer</h3>
        </div>
        <div className="bg-white shadow-custom shadow-lg rounded-2xl p-4 flex flex-col justify-center items-center hover:bg-black hover:text-white py-10">
          <Image
            src="/assets/images/testimonial-1.svg"
            width={96}
            height={96}
            alt="evren"
            className="mb-4"
          />
          <p className="text-center text-button-text-02 mb-4">
            I recently had to jump on 10+ different calls across eight different
            countries to find the right owner.
          </p>
          <hr className="w-44 py-2" />
          <h2 className="text-heading-05 font-semibold">Evren Shah</h2>
          <h3 className="text-heading-06">Designer</h3>
        </div>
      </div>
    </div>
  );
}
