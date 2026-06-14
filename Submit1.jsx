import {Link} from "react-router-dom";
import Home8 from "./Home8";
const Submit1 = () => {
    return ( 
      <div>
<div className="min-h-screen bg-[#ea8d35] text-white font-sans flex flex-col justify-between relative select-none">

      {/* MAIN HERO CONTENT */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 -mt-16">
        <h1 className="text-5xl md:text-6xl font-normal mb-6 tracking-wide">
          Thank You!
        </h1>
        <p className="text-[15px] md:text-[17px] opacity-90 max-w-2xl mb-8 leading-relaxed font-light">
          Your request has been submitted! We will respond to you as soon as possible.
        </p>
        <Link to ="/">
        <button className="bg-[#111111] hover:bg-orange-500 text-white text-[13px] tracking-wider uppercase px-7 py-3 font-medium transition duration-200 shadow-md">
          View Home
        </button>
        </Link>
      </main>
    </div>
      </div>
         
     );
}
 
export default Submit1;