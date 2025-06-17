import React from 'react';

const dummyRecruiters = [
  { title: "Google", imageLink: "https://yt3.googleusercontent.com/2eI1TjX447QZFDe6R32K0V2mjbVMKT5mIfQR-wK5bAsxttS_7qzUDS1ojoSKeSP0NuWd6sl7qQ=s900-c-k-c0x00ffffff-no-rj" },
  { title: "Amazon", imageLink: "https://www.economist.com/content-assets/images/20240706_LDD003.jpg" },
  { title: "Microsoft", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-P7PSO_hZpFpHrAtfV3Xvpb13CT7V9kuKxg&s" },
  { title: "Infosys", imageLink: "https://etimg.etb2bimg.com/thumb/msid-106310316,width-1200,height-900,resizemode-4/.jpg" },
  { title: "TCS", imageLink: "https://www.economist.com/content-assets/images/20240706_LDD003.jpg" },
  { title: "Google", imageLink: "https://yt3.googleusercontent.com/2eI1TjX447QZFDe6R32K0V2mjbVMKT5mIfQR-wK5bAsxttS_7qzUDS1ojoSKeSP0NuWd6sl7qQ=s900-c-k-c0x00ffffff-no-rj" },
  { title: "TCS", imageLink: "https://www.economist.com/content-assets/images/20240706_LDD003.jpg" },
  { title: "Google", imageLink: "https://yt3.googleusercontent.com/2eI1TjX447QZFDe6R32K0V2mjbVMKT5mIfQR-wK5bAsxttS_7qzUDS1ojoSKeSP0NuWd6sl7qQ=s900-c-k-c0x00ffffff-no-rj" },
  { title: "TCS", imageLink: "https://www.economist.com/content-assets/images/20240706_LDD003.jpg" },
  { title: "TCS", imageLink: "https://www.economist.com/content-assets/images/20240706_LDD003.jpg" },
  { title: "Google", imageLink: "https://yt3.googleusercontent.com/2eI1TjX447QZFDe6R32K0V2mjbVMKT5mIfQR-wK5bAsxttS_7qzUDS1ojoSKeSP0NuWd6sl7qQ=s900-c-k-c0x00ffffff-no-rj" },
  { title: "Wipro", imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-P7PSO_hZpFpHrAtfV3Xvpb13CT7V9kuKxg&s" },
    // Add more if needed
];

const CompanySlider = () => {
  return (
    <div className='p-2 m-2 nav-light-shadows'>
      {/* Header */}
      {/* <div className='flex flex-col items-center justify-between m-2 text-center sm:flex-row'>
        <h2 className='p-2 text-3xl text-center sm:text-4xl sm:p-4'>
          Our Hiring Partners
        </h2>
        <p className='p-2 m-2 text-sm border-2 border-black rounded-xl'>
          <span className='font-bold'>See All</span>
        </p>
      </div> */}
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <h2 className="mx-2 text-2xl font-semibold">Our Hiring Partners</h2>
        <a
          href="/our-recuiters"
          className="p-2 m-2 text-sm font-bold border-2 border-black rounded-xl hover:underline"
        >
          See All
        </a>
      </div>


      {/* Manual horizontal scroll instead of Marquee */}
      <div className='my-4 text-center w-[95%] mx-auto overflow-x-auto whitespace-nowrap'>
        <div className='flex gap-4 px-2'>
          {dummyRecruiters.map((item, index) => (
            <div
              key={item.title + index}
              className='flex items-center justify-center w-28 h-16 flex-shrink-0'
            >
              <img
                src={item.imageLink}
                alt={item.title}
                className='w-full h-full object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanySlider;
