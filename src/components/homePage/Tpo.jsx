import React from "react";

const Tpo = () => {
  return (
    <div className="p-1 m-2 nav-light-shadows">
      <div className="flex flex-col items-center justify-between m-4 sm:flex-row">
        <div className="mt-4 w-full sm:w-[50%] text-center">
          <h2 className="p-1 text-3xl text-center sm:text-4xl sm:p-4 w-[100%]">
            From TPO's Desk
          </h2>
        </div>
        <ul className="flex items-center justify-center p-2 sm:p-4"></ul>
      </div>

      <div className="flex flex-col items-center justify-center sm:flex-row-reverse">
        <div className="sm:w-[30%] w-[70%] md:w-[35%] lg:w-[30%] text-center flex flex-col justify-center items-center">
          <img
            src="TPO-image"
            alt="tpo"
            className="sm:w-[75%] h-[70%] mb-2 rounded-xl"
          />
          <p className="mb-2 text-xl font-bold text-center">
            Prof. Debarshi Dutta
          </p>
        </div>

        <div className="p-1 align-top sm:p-2.5 mx-1 sm:mx-2 text-lg text-justify font-normal w-[86%] sm:w-[60%]">
          <p className="sm:p-2.5 p-1 mx-1 sm:mx-2 text-[12px] lg:text-[16px] text-justify font-normal w-[90%] md:text-sm lg:text-lg">
            The Institute is committed to providing state-of-the-art technical
            education in a variety of fields and for facilitating the
            transmission of knowledge in keeping with the latest developments in
            methods of teaching. Each student is also required to take certain
            minimum course credits in the Department of Humanities and Social
            Sciences which greatly enhances their outlook on society and its
            needs.
          </p>
          <p className="sm:p-2.5 p-1 mx-1 sm:mx-2 text-[12px] lg:text-[16px] text-justify font-normal w-[90%] md:text-sm lg:text-lg">
            Our team of placement coordinators and dedicated volunteers will
            ensure that the recruitment process becomes a smooth and pleasing
            experience for both the recruiters and the students. Feel free to
            contact the Training & Placement Office. With this, I welcome all
            the recruiters to NSEC
          </p>
          <p className="sm:p-2.5 p-1 mx-1 sm:mx-2 text-[12px] lg:text-[16px] text-justify font-normal w-[90%] md:text-sm lg:text-lg">
            Warm Regards <br />
            Training & Placement Cell, <br />
            NSEC, KOLKATA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tpo;
