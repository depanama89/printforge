"use client";
export default function Footer(){
    return(
        <footer className="bg-black text-white h-20">
            <div className="w-full flex justify-center items-center h-15">
                &copy; {new Date().getFullYear()} BK business software
            </div>
        </footer>
    )
}