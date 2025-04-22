import React, { useEffect } from 'react'
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { MdOutlineFileDownload } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentStep } from '../../store/formSlice';

const Summary = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 
  const myskills = useSelector((state) => state.form.skills);
  const myEducation = useSelector((state) => state.form.educations);
  const myInfo = useSelector((state) => state.form.basicInfo);

  const handleNextClick = () => {
    dispatch(setCurrentStep(6)); 
    navigate("/complete");
  };

  const handleBackClick = () => {
    dispatch(setCurrentStep(1)); 
    navigate("/");
  };
    
  return (
    <div className="flex flex-col gap-12 py-5 px-36">
      
      <h1 className="text-2xl font-[500]">Summary</h1>

      <div className="flex pb-5">
        <div className="h-[1px] w-full bg-gray-300" />
      </div>

      {/* Resume */}
      <h1 className="text-xl font-[500]">Resume</h1>
      <div className="flex gap-5 w-[70%]">
        <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
          File name<h1 className="flex  items-center gap-2 text-[14px] font-[500] text-black">RavikantCV.pdf<MdOutlineFileDownload className='text-[#f66136] text-2xl cursor-pointer'/></h1>
        </Label>
      </div>

      <div className="flex py-2">
        <div className="h-[1px] w-full bg-gray-300" />
      </div>

      {/* Basic Info */}
      <h1 className="text-xl font-[500]">Basic Information</h1>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 w-[70%]">
          <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
            First Name
            <h1 className="text-[14px] font-[500] text-black">{myInfo.firstname}</h1>
          </Label>
          <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
            Last Name
            <h1 className="text-[14px] font-[500] text-black">{myInfo.lastname}</h1>
          </Label>
        </div>
        <div className="flex gap-5 w-[70%]">
          <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
            Email Address
            <h1 className="text-[14px] font-[500] text-black">{myInfo.email}</h1>
          </Label>
          <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
            Contact
            <h1 className="text-[14px] font-[500] text-black">{myInfo.contact}</h1>
          </Label>
        </div>
      </div>

      <div className="flex py-2">
        <div className="h-[1px] w-full bg-gray-300" />
      </div>

      {/* Skills */}
      <h1 className="text-xl font-[500]">Skill Sets</h1>
      {myskills.map((item,index)=>(
        <div key={index} className="flex gap-5 w-[70%]">
            <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
            Skill {index+1}<h1 className="text-[14px] font-[500] text-black">{item.skill}</h1>
            </Label>
            <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
            Experience Level
            <h1 className="text-[14px] font-[500] text-black">{item.experience}</h1>
            </Label>
        </div>
      ))}

      <div className="flex py-2">
        <div className="h-[1px] w-full bg-gray-300" />
      </div>

      {/* Education */}
      <h1 className="text-xl font-[500]">Education</h1>
      {myEducation.map((item,index)=>(
        <div key={index} className="flex gap-5 w-[70%]">
            <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
            Degree Name
            <h1 className="text-[14px] font-[500] text-black">{item.degree}</h1>
            </Label>
            <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
            University
            <h1 className="text-[14px] font-[500] text-black text-nowrap">
            {item.university}
            </h1>
            </Label>
            <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
            Year of Starting
            <h1 className="text-[14px] font-[500] text-black">{item.startDate}</h1>
            </Label>
            <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
            Year of Completion
            <h1 className="text-[14px] font-[500] text-black">{item.endDate}</h1>
            </Label>
        </div>
      ))}

      <div className="flex py-2">
        <div className="h-[1px] w-full bg-gray-300" />
      </div>
       
      {/* Terms & Conditions  */}
      <div className='flex flex-col gap-5'>
        <p className='text-[14px] text-black/80 font-[300]'>By submitting this form, you confirm that all information provided is accurate and complete to the best of your knowledge. Any false or misleading information may result in disqualification from the recruitment process or termination of employment if discovered later.</p>
        <p className='text-[14px] text-black/80 font-[300]'>Submission of this form does not guarantee an interview or employment. Your personal data will be handled confidentially and used solely for recruitment purposes in accordance with Beyonds Labs LLC Privacy Policy.</p>
        <div className='flex gap-3 mt-3 items-center'>
            <Checkbox id="terms" className="text-center"/>
            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
                By submitting, you agree to our Terms & Conditions.
            </label>
        </div>
      </div>

      <div className="flex h-[140px] gap-4">
        <Button 
         type="button"
         onClick={handleBackClick}
         className="text-black border border-black/50 shadow-none hover:text-white bg-white rounded-sm px-[60px] py-6">
          EDIT
        </Button>
        <Button 
           type="button"
           onClick={handleNextClick}
          className="bg-[#f66136] rounded-sm text-white px-[55px] py-6">
          CONFIRM
        </Button>
      </div>

    </div>
  );
}

export default Summary;