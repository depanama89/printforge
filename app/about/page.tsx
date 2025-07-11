import Header from "../component/header";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex flex-col md:gap-10">
      <Header />

      <main className="flex flex-col  ">
        <section className="flex flex-col px-6 mx-auto lg:flex-row lg:px-10">
          <img
            src="/about_img.svg"
            alt="img about"
            className="w-full h-auto md:w-[627px] md:h-[627px]"
          />
          <div className="flex flex-col gap-5">
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
      </main>
    </div>
  );
}
