import React from 'react';

const Registration = () => {
  return (
    <div className="p-1 m-2 text-center nav-light-shadows reg_updates">
      <div className="flex items-center justify-center gap-4 overflow-hidden">
        {/* Left Arrows Animation */}
        <div className="arrow-scroll w-[80px] text-red-700">&lt;&lt;&lt;&lt;&lt;</div>

        {/* Main Link */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScsDY4uzAKhzLGNkrJsqMCTJqyCcb9N4K4pqoN8g0SkZPXbSA/viewform?usp=header"
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="inline-block text-base font-bold text-center text-red-700 hover:text-red-700 hover:underline sm:text-xl md:text-base lg:text-2xl">
            Training and Placement Cell Interview Applications Are Open (Click Here To Register)
          </h1>
        </a>

        {/* Right Arrows Animation */}
        <div className="arrow-scroll-reverse w-[80px] text-red-700">&gt;&gt;&gt;&gt;&gt;</div>
      </div>
    </div>
  );
};

export default Registration;
