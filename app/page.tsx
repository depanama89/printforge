import Link from "next/link";
import Header from "./component/header";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col md:gap-10">
      <Header/>
      <main className="flex flex-col ">
        <section className="flex flex-col justify-between items-center gap-8 px-6 py-5 mx-auto md:flex-row max-w-7xl ">
          <div className="flex flex-col gap-5 px-5 ">
            <div className="flex flex-col  gap-5">
              <p className="hidden uppercase md:block text-gray-600 text-sm">
                Your go-to platform for 3D printing files
              </p>
              <h1 className="font-semibold text-4xl md:text-5xl">
                Discover what’s possible with 3D printing
              </h1>
              <p className="text-lg text-gray-600">
                Join our community of creators and explore a vast library of
                user-submitted models.
              </p>
            </div>
            <div>
              <button className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white cursor-pointer">BRWOSE MODELS</button>
            </div>
          </div>
         {/* <div className="w-full"> */}
           <img src="/Frame4.svg" width={350} />
         {/* </div> */}
        </section>
      </main>
    </div>
  );
}
