import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputItem from './InputItem';

import { HiArrowRight } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { GiAges } from 'react-icons/gi';
import { FaBirthdayCake } from 'react-icons/fa';
import { MdOutlineSchool } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';

import 'animate.css';
import Resume from './Resume';

const PromptUser = ({ handleChange, imageSource, userObject }) => {
  const navigate = useNavigate();
  const [showResume, setShowResume] = useState(false);

  const handleButtonClick = () => {
    setShowResume(true);
  };

  return (
    <>
      {showResume ? (
        <Resume userObject={userObject} imageSource={imageSource} />
      ) : (
        <div className="prompt-container p-4 space-y-4 animate__animated animate__fadeIn">
          {/* Input fields using InputItem component */}
          <InputItem icon={<AiOutlineMail />} placeholder="Email" name="email" handleChange={handleChange} />
          <InputItem icon={<BsTelephone />} placeholder="Phone" name="phone" handleChange={handleChange} />
          <InputItem icon={<GiAges />} placeholder="Age" name="age" handleChange={handleChange} />
          <InputItem icon={<FaBirthdayCake />} placeholder="Date of Birth" name="dob" handleChange={handleChange} />
          <InputItem icon={<MdOutlineSchool />} placeholder="Education" name="education" handleChange={handleChange} />
          <InputItem icon={<CgWebsite />} placeholder="Portfolio Website" name="website" handleChange={handleChange} />

          {/* Resume Upload */}
          <label className="block text-sm font-medium text-gray-700">Upload Resume</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            name="resume"
            onChange={handleChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 cursor-pointer focus:outline-none"
          />

          {/* Submit Button */}
          <button
            onClick={handleButtonClick}
            className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Submit <HiArrowRight />
          </button>
        </div>
      )}
    </>
  );
};

export default PromptUser;
