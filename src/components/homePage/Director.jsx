import React from "react";

const Director = () => {
  return (
    <div className="p-1 m-2 nav-light-shadows">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-between mt-4 sm:flex-row-reverse">
        <div className="mt-2 w-full sm:w-[80%] sm:text-left text-center">
          <h2 className="p-2 text-3xl text-center sm:text-4xl sm:p-4">
            Director's Message
          </h2>
        </div>

        {/* Social Icons removed */}
        <ul className="flex items-center justify-center p-2 sm:p-4"></ul>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="sm:w-[40%] w-[70%] text-center flex flex-col justify-center items-center">
          <img
            src="https://www.nsec.ac.in/images/tigmdpic.jpeg"
            alt="director"
            className="sm:w-[50%] lg:w-[50%] md:w-[55%] mb-2 rounded-xl"
          />
          <p className="mb-2 text-xl font-bold text-center">
            Mr. Satyam Roy Chowdhury
          </p>
        </div>

        <div className="p-1 align-top sm:p-2.5 mx-1 sm:mx-2 text-lg text-justify font-normal w-[86%] sm:w-[65%]">
          <p className="sm:p-2.5 p-1 mx-1 sm:mx-2 text-[12px] lg:text-[16px] text-justify font-normal w-[90%] md:text-sm lg:text-lg">
            Greetings and a very warm welcome to NSEC <br />
            With a vision of education of human power for technological
            excellence, NSEC stands as one of the prestigious College.
          </p>
          <p className="sm:p-2.5 p-1 mx-1 sm:mx-2 text-[12px] lg:text-[16px] text-justify font-normal w-[90%] md:text-sm lg:text-lg">
            The purpose of education is to transform proactive learners into
            self-actualized learners. Students are encouraged to harness their
            inquisitive skills with proactive learning, soft skills which are
            required in all professions, problem-solving skills along with
            programming languages to equip our students to face the
            technological problems of the future and imbibe Universal Human
            Values for sustainable achievements.
          </p>
          <p className="sm:p-2.5 p-1 mx-1 sm:mx-2 text-[12px] lg:text-[16px] text-justify font-normal w-[90%] md:text-sm lg:text-lg">
            I look forward to the placement season 2024-25 and wish the students
            all the best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Director;
