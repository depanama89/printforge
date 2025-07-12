import Image from "next/image";
import Header from "../component/header";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex flex-col md:gap-10">
      {/* <Header /> */}

      <main className="flex flex-col  ">
        <section className="flex flex-col px-6 mx-auto lg:gap-25 lg:px-10 lg:py-10 lg:flex-row max-w-7xl mb-5">
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
        <section className="w-full flex flex-col gap-12 lg:gap-12 px-6 mx-auto  lg:px-10 lg:py-10 lg:flex-row max-w-7xl mt-5">
          <div className=" flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src="/Stack.svg" alt="stack"  className="w-6 h-6"/>
              <h1 className="font-bold text-2xl">100K+ Models</h1>
            </div>
            <div>
              Access our vast library of community-created 3D models, from
              practical tools to artistic creations.
            </div>
          </div>
          <div className=" flex flex-col gap-[18px] lg:border-l lg:border-l-[#666666] lg:pl-12">
            <div className="flex items-center gap-[6px]">
              <img src="/GlobeSimple.svg" alt="GlobeSimple"  className="w-6 h-6"/>
              <h1 className="font-bold text-2xl">Active Community</h1>
            </div>
            <div>
              Join thousands of makers who share tips, provide feedback, and
              collaborate on projects.
            </div>
          </div>
          <div className=" flex flex-col gap-[18px] lg:border-l lg:border-l-[#666666] lg:pl-12">
            <div className="flex items-center gap-[6px]">
              <img src="/Flag.svg" alt="Flag" className="w-6 h-6" />
              <h1 className="font-bold text-2xl">Free to Use</h1>
            </div>
            <div>
              Most models are free to download, with optional premium features
              for power users.
            </div>
          </div>
        </section>
        <section className="px-6 py-12 max-w-3xl mx-auto ">
         
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-3xl">Our vision</h1>
            <p className="text-justify ">
            At PrintForge, we believe that 3D printing is revolutionizing the
            way we create, prototype, and manufacture. Our platform serves as a
            bridge between designers and makers, enabling the sharing of
            knowledge and creativity that pushes the boundaries of what's
            possible with 3D printing.
          </p>
          <div className="p-5">
            <div className="w-[245px] h-[1px] bg-gradient-to-r from-gray-500  to-black mx-auto" />
          </div>
          <p className="text-justify ">
            Whether you're a hobbyist looking for your next weekend project, an
            educator seeking teaching materials, or a professional designer
            wanting to share your creations, PrintForge provides the tools and
            community to support your journey in 3D printing.
          </p>
          </div>
        </section>
      </main>
    </div>
  );
}
