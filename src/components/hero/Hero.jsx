// import React from "react";
// import { Link } from "react-router-dom";
// // import Stats from "../../../img/Gallary/statistics.jpg";
// // import Summary from "../../../img/Gallary/summary_report_icon.jpg";
// // import SectionWrapper from "../../../Higher_Order_Components/SectionWrapper";

// const Hero = () => {
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center w-full sm:flex-row">
//         {/* Left section */}
//         <div className="sm:w-[60%] w-[100%] h-full flex flex-col p-2">
//           <div className="flex flex-col justify-center items-left">
//             <h1 className="my-2 text-lg text-gray-700">Welcome To</h1>
//             <h2 className="my-2 text-3xl">
//               Training & Placement Cell <br />
//               NETAJI SUBHASH ENGINEERING COLLEGE
//             </h2>
//             <p>
//               &ldquo;Our Training and Placement Cell Is For The Students And By The Students.&ldquo;
//             </p>
//           </div>

//           <div className="flex-col items-center justify-center hidden w-full my-8 border-2 rounded-md sm:flex nav-light-shadows sm:flex-row">
//             <div className="w-full sm:w-[50%]">
//               <div className="m-3 sm:m-4">
//                 <h3 className="m-2 md:text-xl lg:text-2xl sm:text-2xl">Recruiters</h3>
//                 <h3 className="m-2 md:text-xl lg:text-2xl sm:text-2xl">Interested In Recruiting From NSEC</h3>
//               </div>
//               <div className="flex flex-col items-center justify-start p-2 m-2">
//                 <Link to='/jaf_recuriment' className="w-full font-bold">
//                   <p className="p-2 mt-1 mb-1 text-xl text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer">Job Announcement Form</p>
//                 </Link>
//                 <Link to='/contactus' className="w-full font-bold">
//                   <p className="p-2 mt-1 mb-1 text-xl text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer">Contact Us</p>
//                 </Link>
//               </div>
//             </div>

//             <div className="w-full sm:w-[50%]">
//               <div className="m-3 sm:m-4">
//                 <h3 className="m-2 md:text-xl lg:text-2xl sm:text-2xl">Our Brochures</h3>
//                 <h3 className="m-2 md:text-xl lg:text-2xl sm:text-2xl">See Flyer & Brochures Of Our Institute</h3>
//               </div>
//               <div className="flex flex-col items-center justify-start p-2 m-2">
//                 <a target='_blank' rel="noreferrer" href='https://drive.google.com/file/d/1qMnyz8bKMbY6ynCbSXaWME7xlB9CpTA3/view?usp=drive_link' className="w-full font-bold">
//                   <p className="p-2 mt-1 mb-1 text-xl text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer">Placement Brochure</p>
//                 </a>
//                 <Link to='/jobApplication' className="w-full font-bold">
//                   <p className="p-2 mt-1 mb-1 text-xl text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer">Job Application</p>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right section */}
//         <div className="sm:w-[40%] w-[95%] nav-light-shadows h-full m-4 border-2 flex flex-col">
//           {/* Placeholder instead of PosterSlider */}
//           <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center text-xl font-semibold">
//             Poster Slider Placeholder 2
//           </div>
//           <div className="flex flex-col items-center justify-center sm:flex-row m-[12px]">
//             <div className="flex flex-col items-center justify-center w-full h-full m-2">
//               <h3 className="m-1 text-sm sm:text-[12px]">Summary(Last Year)</h3>
//               <img alt='summary' className="w-[20%]" />
//               <ul className="p-1 mt-2 space-y-2 list-disc">
//                 <li className="text-xs">Total Offers: +</li>
//                 <li className="text-xs">Top Package: 15 LPA</li>
//                 <li className="text-xs">Average: 4 LPA</li>
//               </ul>
//             </div>
//             <div className="flex flex-col items-center justify-center w-full h-full m-2">
//               <h3 className="m-1 text-sm sm:text-[12px]">Placement Stats 24-25</h3>
//               <img  alt='stats' className="w-[20%]" />
//               <ul className="p-1 mt-2 space-y-2 list-disc">
//                 <li className="text-xs">Total Offers: 150+</li>
//                 <li className="text-xs">Top Package: 18 LPA</li>
//                 <li className="text-xs">Average: 5.2 LPA</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile View Contact & Brochures */}
//       <div className="block m-2 sm:hidden">
//         <div className="flex flex-col items-center justify-center w-full my-8 border-2 rounded-md nav-light-shadows">
//           <div className="w-full">
//             <div className="m-3">
//               <h3 className="m-2 text-2xl">Recruiters</h3>
//               <h3 className="m-2 text-2xl">Interested in Recruiting from NSEC</h3>
//             </div>
//             <div className="flex flex-col items-center justify-start p-2 m-2">
//               <Link to='/jaf_recuriment' className="w-full font-bold">
//                 <p className="p-2 mt-1 mb-1 text-xl text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer">Job Announcement Form</p>
//               </Link>
//               <Link to='/contactus' className="w-full font-bold">
//                 <p className="p-2 mt-1 mb-1 text-xl text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer">Contact Us</p>
//               </Link>
//             </div>
//           </div>

//           <div className="w-full">
//             <div className="m-3">
//               <h3 className="m-2 text-2xl">Our Brochures</h3>
//               <h3 className="m-2 text-2xl">See Flyer & Brochures of Our Institute</h3>
//             </div>
//             <div className="flex flex-col items-center justify-start p-2 m-2">
//               <a target='_blank' rel="noreferrer" href='https://drive.google.com/iIi5FWiNyGn1x3yH_DHg71bsEg1r/view?usp=sharing' className="w-full font-bold">
//                 <p className="p-2 mt-1 mb-1 text-xl text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer">Placement Brochure</p>
//               </a>
//               <Link to='/jobApplication' className="w-full font-bold">
//                 <p className="p-2 mt-1 mb-1 text-xl text-center text-black bg-orange-300 border-2 rounded-xl hover:cursor-pointer">Job Application</p>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;
