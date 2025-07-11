import Image from "next/image";
import Header from "../component/header";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex flex-col md:gap-10">
      <Header />

      <main className="flex flex-col  ">
        <section className="flex flex-col px-6 mx-auto lg:gap-25 lg:px-10 lg:py-10 lg:flex-row max-w-7xl">
          <img
            src="/about_img.svg"
            alt="img about"
            className="w-full h-auto md:w-full  lg:w-[627px] lg:h-[627px]"
          />
          <div className="flex flex-col gap-5 lg:mt-20">
            <span className="uppercase text-xl font-light">
              About printforge
            </span>
            <h1 className="md:text-5xl font-bold ">
              Empowering makers worldwide
            </h1>
            <div className="">
              Founded in 2023, PrintForge has quickly become the go-to platform
              for 3D printing enthusiasts, makers, and professional designers to
              share and discover amazing STL files for 3D printing. <br />
              Our mission is to foster a vibrant community where creativity
              meets technology, enabling anyone to bring their ideas to life
              through 3D printing.
            </div>
          </div>
          {/* <div className="flex flex-col lg:flex-row md:gap-25 md:px-10 md:py-10 lg:items-start ">
                     
          </div> */}
        </section>
        <div className="border-b border-b-gray-300"></div>
        <section className="w-full flex flex-col lg:gap-12 px-6 mx-auto  lg:px-10 lg:py-10 lg:flex-row max-w-7xl">
          <div className=" flex flex-col gap-[18px]">
            <div className="flex gap-[6px]" >
              <img src="/Stack.svg" alt="stack" />
              <h1>100K+ Models</h1>
            </div>
            <div>
              Access our vast library of community-created 3D models, from
              practical tools to artistic creations.
            </div>
          </div>
          <div className=" flex flex-col gap-[18px] border-l border-l-[#666666] lg:pl-12">
            <div className="flex gap-[6px]">
              <img src="/GlobeSimple.svg" alt="GlobeSimple" />
              <h1>Active Community</h1>
            </div>
            <div>
              Join thousands of makers who share tips, provide feedback, and
              collaborate on projects.
            </div>
          </div>
          <div className=" flex flex-col gap-[18px] border-l border-l-[#666666] lg:pl-12">
            <div className="flex gap-[6px]">
              <img src="/Flag.svg" alt="Flag" />
              <h1>Free to Use</h1>
            </div>
            <div>
              Most models are free to download, with optional premium features
              for power users.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
