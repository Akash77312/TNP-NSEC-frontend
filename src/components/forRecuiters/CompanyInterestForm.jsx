import React, { useState } from 'react';

const CompanyInterestForm = () => {
  const [inputs, setInputs] = useState({
    ThisisFrom: '',
    companyName: '',
    companyEmail: '',
    websiteLink: '',
    HRmobNo: '',
    HRalterateNo: '',
    HRmail: '',
    specifications: '',
  });

  const [alertMessage, setAlertMessage] = useState('');

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const Submit = (e) => {
    e.preventDefault();

    if (inputs.ThisisFrom !== '') {
      setAlertMessage('Form Submitted Successfully');
      // Simulate form submission here
      console.log('Submitted Data:', inputs);
    } else {
      setAlertMessage('Fill the fields');
    }

    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
  };

  const Reset = () => {
    setInputs({
      ThisisFrom: '',
      companyName: '',
      companyEmail: '',
      websiteLink: '',
      HRmobNo: '',
      HRalterateNo: '',
      HRmail: '',
      specifications: '',
    });
  };

  return (
    <div className='m-4 w-[90%] mx-auto'>
      {alertMessage && (
        <div className='p-2 mb-4 text-white bg-green-600 rounded'>
          {alertMessage}
        </div>
      )}

      <h1 className='text-3xl mb-4'>Company Interest Form</h1>

      <form onSubmit={Submit}>
        <div className='mb-4'>
          <label>Email From:</label>
          <input
            type='email'
            name='ThisisFrom'
            value={inputs.ThisisFrom}
            onChange={onChange}
            className='w-full p-2 border-b border-gray-500'
            placeholder='Enter Your Email Address'
            required
          />
        </div>

        <div className='mb-4'>
          <h3 className='text-xl text-red-600'>Company Details</h3>
          <input
            type='text'
            name='companyName'
            value={inputs.companyName}
            onChange={onChange}
            placeholder='Company Name'
            className='w-full p-2 border-b border-gray-500 my-2'
          />
          <input
            type='email'
            name='companyEmail'
            value={inputs.companyEmail}
            onChange={onChange}
            placeholder='Official Email-ID'
            className='w-full p-2 border-b border-gray-500 my-2'
          />
          <input
            type='text'
            name='websiteLink'
            value={inputs.websiteLink}
            onChange={onChange}
            placeholder="Website Link (if any)"
            className='w-full p-2 border-b border-gray-500 my-2'
          />
        </div>

        <div className='mb-4'>
          <h3 className='text-xl text-red-600'>Contact Information</h3>
          <input
            type='text'
            name='HRmobNo'
            value={inputs.HRmobNo}
            onChange={onChange}
            placeholder='HR Mobile No'
            className='w-full p-2 border-b border-gray-500 my-2'
          />
          <input
            type='text'
            name='HRalterateNo'
            value={inputs.HRalterateNo}
            onChange={onChange}
            placeholder='Alternate Contact No'
            className='w-full p-2 border-b border-gray-500 my-2'
          />
          <input
            type='email'
            name='HRmail'
            value={inputs.HRmail}
            onChange={onChange}
            placeholder='HR Mail ID'
            className='w-full p-2 border-b border-gray-500 my-2'
          />
        </div>

        <div className='mb-4'>
          <h3 className='text-xl text-red-600'>Any Specifications</h3>
          <textarea
            name='specifications'
            value={inputs.specifications}
            onChange={onChange}
            placeholder='If any, specify'
            rows='5'
            className='w-full p-2 border border-gray-500'
          ></textarea>
        </div>

        <div className='flex gap-4'>
          <button
            type='submit'
            className='px-4 py-2 bg-blue-600 text-white rounded'
          >
            Submit
          </button>
          <button
            type='button'
            className='px-4 py-2 bg-gray-500 text-white rounded'
            onClick={Reset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyInterestForm;
