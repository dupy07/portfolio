import Image from "next/image";
import React from "react";

const Partner = () => {
  return (
    <section className="border rounded-2xl bg-card p-5 m-10">
      <div className="bg-background rounded-2xl border flex gap-10">
        <div className="border">
          <Image
            src={"/a.png"}
            height={500}
            width={500}
            className="w-[296px]"
            alt="a"
          />
        </div>{" "}
        <div>
          <Image
            src={"/a.png"}
            height={500}
            width={500}
            className="w-[296px]"
            alt="a"
          />
        </div>{" "}
        <div>
          <Image
            src={"/a.png"}
            height={500}
            width={500}
            className="w-[296px]"
            alt="a"
          />
        </div>{" "}
        <div>
          <Image
            src={"/a.png"}
            height={500}
            width={500}
            className="w-[296px]"
            alt="a"
          />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="fs-600 fw-semi-bold">Out friends and partners</h2>
        <p className="fs-400 text-muted-foreground">
          Some brands that’ve tasted the goodness. You might’ve heard of some of
          these.
        </p>
        <div className="flex gap-4 flex-wrap">
          <img src="/paypal.svg" alt="" className="src" />
          <img src="/paypal.svg" alt="" className="src" />
          <img src="/paypal.svg" alt="" className="src" />
          <img src="/paypal.svg" alt="" className="src" />
        </div>
      </div>
    </section>
  );
};

export default Partner;
