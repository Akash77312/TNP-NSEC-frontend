import React, { useEffect } from "react";


const placeholderImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQ818DDOcn_emBI_DSi5QXrvVrVTxkGozKQ&s";

const departmentDetails = [
  {
    icon: placeholderImg,
    imageLink: placeholderImg,
    head: 'Dr. Piyali Chatterjee',
    link: 'https://www.nsec.ac.in/page.php?id=142',
    name: 'Computer Science and Engineering',
    dates: 'Established: 1998',
    info: [
      'Offers undergraduate and postgraduate programs with a focus on areas like Artificial Intelligence, Machine Learning, and Data Science.',
      'Equipped with state-of-the-art laboratories and research facilities.',
      'Active participation in national and international conferences and workshops.',
      'Strong placement record with alumni in leading tech companies.'
    ]
  },
  {
    icon: placeholderImg,
    imageLink: placeholderImg,
    head: 'Dr. Chandan Banerjee',
    link: 'https://www.nsec.ac.in/home/page/information-technology',
    name: 'Information Technology',
    dates: 'Established: 1998',
    info: [
      'Focuses on software development, networking, and cybersecurity.',
      'Modern labs including Programming, Networking, and Multimedia laboratories.',
      'Encourages student projects and research in emerging IT fields.',
      'Collaborations with industry partners for internships and training.'
    ]
  },
  {
    icon: placeholderImg,
    imageLink: placeholderImg,
    head: 'Dr. Koushik Dutta',
    link: 'https://www.nsec.ac.in/home/page/electronics-and-communication-engineering',
    name: 'Electronics and Communication Engineering',
    dates: 'Established: 1998',
    info: [
      'Specializes in communication systems, signal processing, and embedded systems.',
      'Well-equipped laboratories for VLSI, Microwave, and Digital Signal Processing.',
      'Faculty engaged in cutting-edge research and publications.',
      'Students participate in various technical competitions and symposiums.'
    ]
  },
  {
    icon: placeholderImg,
    imageLink: placeholderImg,
    head: 'Dr. Tridibesh Nag',
    link: 'https://www.nsec.ac.in/home/page/electrical-engineering',
    name: 'Electrical Engineering',
    dates: 'Established: 1998',
    info: [
      'Covers power systems, control systems, and electrical machines.',
      'Laboratories include Power Systems, Electrical Machines, and Control Systems labs.',
      'Emphasis on practical training and industry-oriented projects.',
      'Regular industrial visits and guest lectures from industry experts.'
    ]
  },
  {
    icon: placeholderImg,
    imageLink: placeholderImg,
    head: 'Information Not Available',
    link: 'https://www.nsec.ac.in/home/page/applied-electronics-and-instrumentation-engineering',
    name: 'Applied Electronics and Instrumentation Engineering',
    dates: 'Established: 1998',
    info: [
      'Focuses on instrumentation systems, process control, and automation.',
      'Labs equipped with modern instruments and control systems.',
      'Students engage in projects related to industrial automation.',
      'Opportunities for internships in core instrumentation companies.'
    ]
  },
  {
    icon: placeholderImg,
    imageLink: placeholderImg,
    head: 'Dr. Malay Kanti Naskar',
    link: 'https://www.nsec.ac.in/home/page/mechanical-engineering',
    name: 'Mechanical Engineering',
    dates: 'Established: 1998',
    info: [
      'Covers thermodynamics, fluid mechanics, and manufacturing processes.',
      'State-of-the-art laboratories for CAD/CAM, Heat Transfer, and Dynamics.',
      'Encourages research in renewable energy and robotics.',
      'Strong industry linkage for internships and placements.'
    ]
  },
  {
    icon: placeholderImg,
    imageLink: placeholderImg,
    head: 'Information Not Available',
    link: 'https://www.nsec.ac.in/home/page/civil-engineering',
    name: 'Civil Engineering',
    dates: 'Established: 2012',
    info: [
      'Specializes in structural engineering, geotechnical engineering, and transportation.',
      'Modern labs for Concrete Technology, Soil Mechanics, and Surveying.',
      'Focus on sustainable construction and smart city projects.',
      'Regular site visits and workshops for practical exposure.'
    ]
  },
  {
    icon: placeholderImg,
    imageLink: placeholderImg,
    head: 'Dr. Anupam Ghosh',
    link: 'https://www.nsec.ac.in/home/page/artificial-intelligence-and-machine-learning',
    name: 'Artificial Intelligence and Machine Learning',
    dates: 'Established: 2020',
    info: [
      'Dedicated to AI, Machine Learning, and Data Analytics.',
      'Curriculum includes Deep Learning, NLP, and Computer Vision.',
      'Hands-on projects using Python, TensorFlow, and other tools.',
      'Collaborations with tech companies for research and internships.'
    ]
  },
  {
    icon: placeholderImg,
    imageLink: placeholderImg,
    head: 'Information Not Available',
    link: 'https://www.nsec.ac.in/home/page/bio-medical-engineering',
    name: 'Bio-Medical Engineering',
    dates: 'Established: 2003',
    info: [
      'Integrates engineering principles with medical sciences.',
      'Labs for Medical Instrumentation, Bioinformatics, and Signal Processing.',
      'Research in medical imaging, prosthetics, and healthcare devices.',
      'Partnerships with hospitals for clinical exposure.'
    ]
  },
  {
    icon: placeholderImg,
    imageLink: placeholderImg,
    head: 'Information Not Available',
    link: 'https://www.nsec.ac.in/home/page/computer-science-and-business-systems',
    name: 'Computer Science and Business Systems',
    dates: 'Established: 2019',
    info: [
      'Combines computer science fundamentals with business analytics.',
      'Curriculum includes Data Science, Business Intelligence, and Management.',
      'Prepares students for roles in IT consulting and business analysis.',
      'Industry-oriented projects and case studies.'
    ]
  },
  {
    icon: placeholderImg,
    imageLink: placeholderImg,
    head: 'Information Not Available',
    link: 'https://www.nsec.ac.in/home/page/basic-engineering-sciences-and-humanities',
    name: 'Basic Engineering Sciences and Humanities',
    dates: 'Established: 1998',
    info: [
      'Provides foundational courses in Mathematics, Physics, Chemistry, and English.',
      'Supports all engineering departments with basic science education.',
      'Focus on developing communication and analytical skills.',
      'Organizes seminars and workshops to enhance learning.'
    ]
  },
  {
    icon: placeholderImg,
    imageLink: placeholderImg,
    head: 'Mr. Dhritiman Mandal',
    link: 'https://www.nsec.ac.in/home/page/management',
    name: 'Management',
    dates: 'Established: 2008',
    info: [
      'Offers programs in Business Administration and Management Studies.',
      'Curriculum includes Marketing, Finance, HR, and Operations.',
      'Emphasis on case studies, internships, and industry projects.',
      'Regular guest lectures from industry professionals.'
    ]
  }
];

const DepartmentCard = ({ dept }) => {
  const { icon, name, link, info, head, imageLink } = dept;

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "1rem", marginBottom: "2rem" }}>
      <div style={{ textAlign: "center" }}>
        <img
          src={icon}
          alt={name}
          style={{ width: "60px", height: "60px", borderRadius: "50%", cursor: "pointer" }}
          onClick={() => window.open(link, "_blank")}
        />
        <h2 style={{ marginTop: "1rem" }}>
          <a href={link} target="_blank" rel="noreferrer">{name}</a>
        </h2>
        <img
          src={imageLink}
          alt="department"
          style={{ width: "80%", borderRadius: "10px", margin: "1rem 0" }}
        />
        <p><strong>HOD:</strong> {head}</p>
      </div>
      <ul style={{ paddingLeft: "1.2rem" }}>
        {info.map((point, idx) => (
          <li key={idx} style={{ marginBottom: "0.5rem" }}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Departments = () => {
  useEffect(() => {
    document.title = "Departments | NSEC Training & Placement";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Our Departments</h1>
      <h3 style={{
        textAlign: "center",
        margin: "2rem 0",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}>
        “Get to Know Our Academic Divisions”
      </h3>
      {departmentDetails.map((dept, idx) => (
        <DepartmentCard key={idx} dept={dept} />
      ))}
    </div>
  );
};

export default Departments;