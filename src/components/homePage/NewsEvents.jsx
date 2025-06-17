import React, { useState, useEffect } from "react";

// --------------------------- NEWS SECTION ----------------------------

const NewsSection = () => {
  const [newsUpdates, setNewsUpdates] = useState([]);
  const [animateElements, setAnimateElements] = useState(null);
  const [assessment, setAssessment] = useState(null);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const res = await fetch(`${process.env.REACT_APP_REQURL}/admin/news/getall`);
  //       const data = await res.json();
  //       setNewsUpdates([...data].reverse());
  //       setAnimateElements(document.querySelectorAll(".news-items"));
  //     } catch (error) {
  //       console.error("Failed to load news:", error);
  //     }
  //   };

  //   const fetchAssessment = async () => {
  //     try {
  //       const res = await fetch(`${process.env.REACT_APP_REQURL}/admin/assessments/getAll`);
  //       const data = await res.json();
  //       if (data.length > 0) setAssessment(data[0]);
  //     } catch (err) {
  //       console.error("Failed to fetch assessments:", err);
  //     }
  //   };

  //   fetchNews();
  //   fetchAssessment();
  // }, []);


  // Static DATA
useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_REQURL}/admin/news/getall`);
        const data = await res.json();
        setNewsUpdates([...data].reverse());
        setAnimateElements(document.querySelectorAll(".news-items"));
      } catch (error) {
        console.error("Failed to load news:", error);
        setNewsUpdates([
          {
            Title: "Hackathon 2025 Announced!",
            Description: "Register by June 25 to participate in India's biggest coding event.",
            Date: "2025-06-16",
            ImageLink: "#"
          },
          {
            Title: "Campus Drive - Infosys",
            Description: "Infosys will visit our campus on July 2 for hiring.",
            Date: "2025-06-20",
            ImageLink: "#"
          },
        ]);
      }
    };

    fetchNews();
  }, []);

  const pauseAnimations = () =>
    animateElements?.forEach((el) => (el.style.animationPlayState = "paused"));
  const resumeAnimations = () =>
    animateElements?.forEach((el) => (el.style.animationPlayState = "running"));

  return (
    <div className="sm:w-[50%] w-full p-2 m-2 align-top h-full">
      <h2 className="mx-2 text-2xl font-semibold">News or Updates Here</h2>

      <div className="gallery">
        <div
          className="relative block-33"
          onMouseOver={pauseAnimations}
          onMouseOut={resumeAnimations}
        >
          <div className="news-items">
            {newsUpdates.map((item, idx) => (
              <NewsCard key={`${item.Date}-${idx}`} data={item} />
            ))}
          </div>
          <div className="news-items">
            {newsUpdates.map((item, idx) => (
              <NewsCard key={`${item.Date}-dup-${idx}`} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsCard = ({ data }) => (
  <div className="relative gallery-image">
    <div className="gallery-image__img">
      <div className="fill-dimensions">
        <a
          href={data.ImageLink}
          target="_blank"
          rel="noreferrer"
          className="hover:cursor-pointer"
        >
          <ul>
            <li>
              <h3 className="text-base font-bold text-center text-red-700 hover:underline sm:text-xl">
                {data.Title}
              </h3>
            </li>
            <li className="text-center">{data.Description}</li>
            <li className="text-center">{data.Date}</li>
          </ul>
        </a>
      </div>
    </div>
  </div>
);

// ------------------------ EVENTS SECTION ----------------------------

const EventsSection = () => {
  const [eventsList, setEventsList] = useState([]);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const res = await fetch(`${process.env.REACT_APP_REQURL}/admin/events/getall`);
  //       const data = await res.json();
  //       data.sort((a, b) => b.eventDate.localeCompare(a.eventDate));
  //       setEventsList(data.slice(0, 4));
  //     } catch {
  //       // fail silently
  //     }
  //   };

  //   fetchEvents();
  // }, []);



  // Stataic DATA
useEffect(() => {
  const fetchEvents = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_REQURL}/admin/events/getall`);
      const data = await res.json();
      data.sort((a, b) => b.eventDate.localeCompare(a.eventDate));
      setEventsList(data.slice(0, 4));
    } catch {
      setEventsList([
        {
          eventName: "Resume Review Workshop",
          eventOrg: "TNP Cell",
          eventDate: "2025-06-18"
        },
        {
          eventName: "Mock Interviews by Alumni",
          eventOrg: "Alumni Association",
          eventDate: "2025-06-20"
        },
        {
          eventName: "Placement Readiness Bootcamp",
          eventOrg: "Coding Club",
          eventDate: "2025-06-22"
        },
        {
          eventName: "Company HR Talk: TCS",
          eventOrg: "TCS",
          eventDate: "2025-06-24"
        }
      ]);
    }
  };

  fetchEvents();
}, []);
// Above are Static data 


  return (
    <div className="sm:w-[50%] w-full p-2 m-2 h-full flex flex-col justify-between">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h2 className="mx-2 text-2xl font-semibold">Events & Job Applications</h2>
        <a
          href="/job-application"
          className="p-2 m-2 text-sm font-bold border-2 border-black rounded-xl hover:underline"
        >
          See All
        </a>
      </div>

      <div className="flex flex-col w-full">
        {eventsList.map((evt, idx) => (
          <div key={idx} className="m-4 sm:m-1">
            <h3>{evt.eventName}</h3>
            <p>
              {evt.eventOrg}{" "}
              <span className="font-bold text-red-700 hover:underline">
                Dt: {evt.eventDate?.slice(0, 10) ?? ""}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --------------------- MAIN WRAPPER COMPONENT ----------------------

const NewsEvents = () => (
  <div className="flex flex-col items-center justify-center h-full m-2 nav-light-shadows sm:flex-row">
    <NewsSection />
    <EventsSection />
  </div>
);

export default NewsEvents;
