import React,{useEffect} from 'react';

export const Researches = () => {
  useEffect(() => {
    document.title = "Researches | NSEC Training & Placement";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='m-4'>
      Click to see researches
      <br />
      <h1 onClick={() => {
        window.open('https://www.nsec.ac.in/page.php?id=325','_self')
      }} className='p-2 m-4 text-center border-2 border-black text-bold rounded-xl w-[30%] sm:w-[10%] hover:cursor-pointer'>Click
      </h1>
    </div>
  )
}
