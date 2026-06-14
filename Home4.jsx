import React from 'react';
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/waterFlow.css';
import './styles/pageAnimations.css';

// Note: You can replace these simple SVG icons with lucide-react or react-icons if preferred.
const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-orange-500 mb-6 size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
</svg>
);

const CoinsIcon = () => (
  <svg className="w-12 h-12 text-orange-500 mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.854-1.106-2.24 0-3.094l.018-.015c1.172-.879 3.07-.879 4.242 0 .417.313.76.712.982 1.156M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BoxIcon = () => (
  <svg className="w-12 h-12 text-orange-500 mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-5.25v9" />
  </svg>
);

const Home4 = () => {
  const [containerRef, isVisible] = useScrollAnimation();
  return (
    <div 
      ref={containerRef}
      className={`bg-[#f4f7fc] min-h-screen font-sans antialiased text-slate-800 py-20 px-6 sm:px-12 lg:px-24 transition-all duration-1000 ${
        isVisible ? 'animate-water-flow-up' : 'water-flow-hidden'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className=" text-center md:text-left grid-cols-2 gap-8 items-start mb-16 animate-fade-in-down">
          <div>
            <span className="text-xls uppercase tracking-widest font-semibold text-orange-500 block mb-3">
              OUR PROMISE
            </span>
            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              IDONGSIKs That'll Blow <br /> Your Mind
            </h1>
          </div>
          <div className="lg:pt-8">
            <p className="text-[20px] mt-[10px] text-slate-500 leading-relaxed max-w-xl">
              We're obsessed with quality. Our prefab homes? <br />
              Mind-blowing designs, top-notch service. We sweat <br />
              the small stuff so you don't have to. Happy <br />
              customers? That's our jam.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-sm hover:shadow-md transition-shadow duration-300 animate-stagger-1 animate-fade-in-up">
            <WrenchIcon />
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Fast Installation</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">
              Our modular design allows installation of IDONGSIK homes in just three days, 
              saving valuable time and effort for both dealers and end-users.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-sm hover:shadow-md transition-shadow duration-300 animate-stagger-2 animate-fade-in-up">
            <CoinsIcon />
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Cost Efficiency</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">
              With low production costs and high returns, our products provide exceptional 
              value while meeting both budget and quality expectations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-sm hover:shadow-md transition-shadow duration-300 animate-stagger-3 animate-fade-in-up">
            <BoxIcon />
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Flexible Shipping</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">
                Our IDONGSIK house products are designed for easy transport, with three sets 
              fitting into a single container, reducing shipping costs.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home4;