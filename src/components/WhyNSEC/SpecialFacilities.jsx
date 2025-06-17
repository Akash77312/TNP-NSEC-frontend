import React from 'react';

const specialFacilities = [
  {
    title: 'AICTE-IDEA Lab',
    imageLink: 'https://www.dgicommunications.com/wp-content/uploads/2022/11/LabDesignImage.jpg', // Replace with _AICTE URL if available
    link: 'https://www.nsec.ac.in/page.php?id=616',
    points: [
      'NSEC, Kolkata is honored to be selected for establishing the AICTE-IDEA (Idea Development, Evaluation & Application) Lab.',
      'NSEC stands among the few selected institutes from West Bengal for this prestigious initiative.',
      'The lab, supported by AICTE, encourages innovation and practical application of engineering knowledge.',
      'It is primarily student-driven, promoting hands-on implementation and real-world problem solving.',
      'Workshops, internships, and training programs will be held regularly for students and faculty.',
      'The lab supports interdisciplinary education and research as emphasized in NEP 2020.'
    ]
  },
  {
    title: 'Center of Excellence in Signal and Image Processing',
    imageLink: 'https://www.nsec.ac.in/images/home/home-ece.jpg',
    link: 'https://www.nsec.ac.in/page.php?id=616',
    points: [
      'NSEC has been selected under a national initiative to host a Center of Excellence for advanced research in Signal and Image Processing.',
      'It is one of the top institutions selected for promoting multidisciplinary research.',
      'The center aims to foster high-level research and collaboration among departments.',
      'Over 20 faculty and research scholars are actively involved.',
      'Equipped with advanced labs and tools, the center rivals international research standards.',
      'It also focuses on industry collaboration and the creation of market-ready technologies.',
      'Another core objective is to train students and develop future entrepreneurs in this domain.'
    ]
  },
  {
    title: 'Central Computing Facility',
    imageLink: 'https://www.nsec.ac.in/images/Lab-8.jpeg', // Replace with centralComputing URL if available
    link: 'https://www.nsec.ac.in/page.php?id=616',
    points: [
      'The Central Computing Facility is a key infrastructure located in the main administrative block of NSEC.',
      'It houses over 150 modern desktops and servers with high-speed internet connectivity.',
      'The lab is equipped with UPS and stabilizers to ensure uninterrupted operation.',
      'It supports hands-on programming, development, and training for students and faculty.',
      'The facility plays a vital role in workshops, seminars, and training programs.',
      'Its goal is to provide a robust open-source computing environment for academic and research work.'
    ]
  },
  {
    title: 'Media Language Laboratory',
    imageLink: 'https://www.nsec.ac.in/images/Lab-4.jpg', // Replace with mediaLangLab_2 if available
    link: 'https://www.nsec.ac.in/page.php?id=616',
    points: [
      'NSEC has maintained a dedicated Language Lab for over two decades to support communication skill development.',
      'A diagnostic language assessment is conducted for first-year students to identify specific needs.',
      'Special focus is given to students from non-English backgrounds to boost professional communication skills.',
      'The lab uses open-source software tools and is aligned with the curriculum.',
      'It also aligns with corporate feedback emphasizing soft skill improvement for placement readiness.'
    ]
  },
  {
    title: 'Emerson-PASS Lab',
    imageLink: 'https://www.nsec.ac.in/images/Lab-9.jpeg', // Replace with _emerson if available
    link: 'https://www.nsec.ac.in/page.php?id=616',
    points: [
      'Emerson India has collaborated with NSEC to set up the Emerson-PASS (Process Automation and Safety System) Lab.',
      'The lab includes industrial-grade automation equipment like the Delta-V System and supporting software.',
      'An MoU with Emerson facilitates expert lectures, internships, and industrial exposure for students.',
      'This partnership aims to bridge the gap between academic learning and real-world industry practices.'
    ]
  },
  {
    title: 'Endress & Hauser Laboratory',
    imageLink: 'https://www.nsec.ac.in/images/Lab-10.jpeg', // Replace with _endress if available
    link: 'https://www.nsec.ac.in/page.php?id=616',
    points: [
      'NSEC has received state-of-the-art instrumentation systems from Endress & Hauser worth over INR 12 Lakhs.',
      'The lab features flow meters, radar level meters, and IIoT-based systems like Netilion.',
      'It is a hub for hands-on learning in process instrumentation and control.',
      'This facility empowers students with industry-standard training and research opportunities.'
    ]
  },
  {
    title: 'Central Library',
    imageLink: 'https://www.nsec.ac.in/images/Lab-11.jpeg',
    link: 'https://www.nsec.ac.in/page.php?id=616',
    points: [
      'The Central Library at NSEC is a two-storied modern facility with a rich collection of academic resources.',
      'It holds over 75,000 books, journals, newspapers, and digital resources.',
      'Special collections include UPSC, GATE, CAT, GRE prep materials, and regional literature.',
      'Facilities include Book Bank for SC/ST students, a night library, and online resource access.',
      'The library fosters academic growth and knowledge discovery across all disciplines.'
    ]
  },
  {
    title: "Institution's Innovation Council",
    imageLink: 'https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-6/487849345_1105774131562048_4246707420520597716_n.jpg?...',
    link: 'https://www.nsec.ac.in/page.php?id=616',
    points: [
      'NSEC’s Innovation Council has been established to foster innovation and entrepreneurship among students.',
      'It encourages ideation, problem-solving, IPR, and startup incubation activities.',
      'The Council works closely with MoE’s ARIIA framework and has seen active student-faculty participation in innovation events.'
    ]
  },
  {
    title: 'TIEC - Technology Innovation and Entrepreneurship Center',
    imageLink: 'https://www.nsec.ac.in/images/Lab-12.jpeg', // Replace with _tiec if available
    link: 'https://www.nsec.ac.in/page.php?id=616',
    points: [
      'TIEC at NSEC nurtures entrepreneurial mindset among students through mentoring and project incubation.',
      'It supports turning campus research into marketable technologies and startups.',
      'TIEC helps bridge the employment gap in smaller cities by encouraging local innovation.',
      'It aligns with national goals of Atmanirbhar Bharat through tech-based entrepreneurship.'
    ]
  }
];

const SpecialFacilities = () => {
  return (
    <div className='w-full px-4 py-6 mx-auto max-w-7xl'>
      <h1 className='text-3xl font-bold text-center'>&ldquo;Explore Special Facilities At NSEC&rdquo;</h1>
      <p className='py-4 text-xl text-center sm:text-2xl'>Overview</p>

      {specialFacilities.map((facility, index) => (
        <div
          key={facility.title}
          className='my-10 border border-gray-200 rounded-xl shadow-md p-4 flex flex-col sm:flex-row gap-6 items-center'
        >
          <div className='w-full sm:w-1/2'>
            <a href={facility.link} target='_blank' rel='noreferrer'>
              <img
                src={facility.imageLink}
                alt={facility.title}
                className='w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105'
              />
            </a>
          </div>
          <div className='w-full sm:w-1/2'>
            <a href={facility.link} target='_blank' rel='noreferrer'>
              <h2 className='text-2xl font-semibold mb-3 text-blue-700 hover:underline'>
                {facility.title}
              </h2>
            </a>
            <ul className='list-disc list-inside space-y-2 text-justify text-sm sm:text-base'>
              {facility.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialFacilities;
