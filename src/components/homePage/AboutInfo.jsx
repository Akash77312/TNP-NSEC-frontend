import React from "react";

const AboutInfo = () => {
  return (
    <div className="p-1 m-2 nav-light-shadows">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-between mt-4 sm:flex-row">
        <div className="text-center w-[50%]">
          <h2 className="p-2 text-3xl text-center sm:text-4xl sm:p-4">
            About NSEC
          </h2>
        </div>

        {/* Social Links as Text */}
        <ul className="flex items-center justify-center p-2 sm:p-4">
          <li className="p-2 m-2 hover:cursor-pointer">
            <a
              target="_blank"
              href="https://twitter.com/_nsec_official_"
              rel="noreferrer"
              className="text-sm font-bold hover:underline"
            >
              Twitter
            </a>
          </li>
          <li className="p-2 m-2 hover:cursor-pointer">
            <a
              target="_blank"
              href="https://www.linkedin.com/school/netaji-subhash-engineering-college/posts/?feedView=all"
              rel="noreferrer"
              className="text-sm font-bold hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li className="p-2 m-2 hover:cursor-pointer">
            <a
              target="_blank"
              href="https://www.instagram.com/nseckolkata/"
              rel="noreferrer"
              className="text-sm font-bold hover:underline"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>

      {/* Image and Description Section */}
      <div className="flex flex-col items-center justify-center sm:flex-row-reverse">
        <div className="sm:w-[30%] w-[80%] text-center flex flex-col justify-center items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Netaji_college_at_Garia.jpg/1200px-Netaji_college_at_Garia.jpg"
            alt="NSEC campus"
            className="mb-2 sm:w-full rounded-xl md:w-[100%]"
          />
          <p className="mb-2 text-xl font-bold text-center">NSEC Campus</p>
        </div>

        <div className="p-1 align-top sm:p-2.5 mx-1 sm:mx-2 w-[86%] sm:w-[60%]">
          <p className="sm:p-2.5 p-1 mx-1 sm:mx-2 md:text-[12px] text-[12px] lg:text-[16px] text-justify font-normal w-[90%] md:text-sm lg:text-lg">
            Netaji Subhash Engineering College (NSEC), established in 1998, is a reputed private engineering institution located in Garia, Kolkata, West Bengal. Affiliated to Maulana Abul Kalam Azad University of Technology (MAKAUT) and approved by AICTE, NSEC offers undergraduate, postgraduate, and doctoral programs in various disciplines such as Computer Science, Information Technology, Electronics and Communication, Electrical, Mechanical, and Civil Engineering. The college is accredited by NAAC and NBA (for some departments), reflecting its commitment to quality education. NSEC boasts a modern campus with state-of-the-art infrastructure including well-equipped laboratories, a central library, Wi-Fi connectivity, and separate hostels for boys and girls. It also hosts various technical and cultural events, providing students with a vibrant campus life. The college has an active training and placement cell that facilitates recruitment by top companies like TCS, Infosys, Wipro, Cognizant, and Accenture. With a strong academic environment and a focus on overall development, NSEC is a preferred choice for engineering aspirants in Eastern India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
