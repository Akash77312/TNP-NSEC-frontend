import React, { useEffect } from "react";

// Dummy timeline data
const recruitmentProcedures = [
  {
    icon: "https://via.placeholder.com/60?text=JAF",
    name: "Fill JAF Form",
    link: "https://example.com/jaf",
    info: ["Company fills Job Application Form", "Choose between Internship or Full-time"]
  },
  {
    icon: "https://via.placeholder.com/60?text=Shortlist",
    name: "Student Shortlisting",
    link: "https://example.com/shortlist",
    info: ["Resume screening", "Student list finalized"]
  },
  {
    icon: "https://via.placeholder.com/60?text=Test",
    name: "Online Test",
    link: "https://example.com/test",
    info: ["Aptitude or technical test", "Conducted remotely or on-campus"]
  },
  {
    icon: "https://via.placeholder.com/60?text=Interview",
    name: "Interview Round",
    link: "https://example.com/interview",
    info: ["Technical + HR rounds", "Sometimes multiple panels"]
  },
  {
    icon: "https://via.placeholder.com/60?text=Offer",
    name: "Offer Rollout",
    link: "https://example.com/offer",
    info: ["Final results shared", "Offer letters sent"]
  }
];

const DepartmentCard = ({ icon, name, link, info, step }) => {
  return (
    <div style={{ display: 'flex', marginBottom: '2rem' }}>
      <div style={{ marginRight: '1rem' }}>
        <div
          onClick={() => window.open(link, '_blank')}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#383E56',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          <img src={icon} alt={name} style={{ width: '60%', height: '60%', borderRadius: '50%' }} />
        </div>
        <div
          style={{
            width: '2px',
            height: '100%',
            backgroundColor: '#ccc',
            margin: '0 auto'
          }}
        ></div>
      </div>
      <div style={{ flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{name}</h3>
        <ul style={{ paddingLeft: '1rem' }}>
          {info.map((point, idx) => (
            <li key={idx} style={{ margin: '0.5rem 0' }}>
              <span style={{ backgroundColor: '#e63946', color: 'white', padding: '0.2rem 0.6rem', borderRadius: '8px', marginRight: '0.5rem' }}>
                Step {step}
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const RecruitmentProcedures = () => {
  useEffect(() => {
    document.title = "Recruitment Procedures | Demo Page";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section style={{ padding: '2rem', backgroundColor: '#fff', color: '#333' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>Our Recruitment Procedures</h1>
        <div style={{ border: '2px solid #ccc', padding: '1rem', borderRadius: '10px', marginBottom: '2rem', textAlign: 'center' }}>
          <h3>
            The very first step for Recruitment Procedure is to fill the JAF — Direct Recruitment or Internship Form.
          </h3>
          <h3>
            “Company needs to fill JAF form in order to recruit from NSEC.”
          </h3>
        </div>

        {recruitmentProcedures.map((item, index) => (
          <DepartmentCard key={index} step={index + 1} {...item} />
        ))}
      </div>
    </section>
  );
};

export default RecruitmentProcedures;
