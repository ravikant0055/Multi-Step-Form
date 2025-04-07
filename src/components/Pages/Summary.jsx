import React from 'react'
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { MdOutlineFileDownload } from "react-icons/md";

const Summary = () => {
  return (
    <div className="flex flex-col gap-12 py-20 px-36">
      
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

      <div className="flex py-5">
        <div className="h-[1px] w-full bg-gray-300" />
      </div>

      {/* Basic Info */}
      <h1 className="text-xl font-[500]">Basic Information</h1>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 w-[70%]">
          <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
            First Name
            <h1 className="text-[14px] font-[500] text-black">Willaam</h1>
          </Label>
          <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
            Last Name
            <h1 className="text-[14px] font-[500] text-black">Willaam</h1>
          </Label>
        </div>
        <div className="flex gap-5 w-[70%]">
          <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
            Email Address
            <h1 className="text-[14px] font-[500] text-black">Willaam</h1>
          </Label>
          <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
            Contact
            <h1 className="text-[14px] font-[500] text-black">Willaam</h1>
          </Label>
        </div>
      </div>

      <div className="flex py-5">
        <div className="h-[1px] w-full bg-gray-300" />
      </div>

      {/* Skills */}
      <h1 className="text-xl font-[500]">Skill Sets</h1>
      <div className="flex gap-5 w-[70%]">
        <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
          Skill 1<h1 className="text-[14px] font-[500] text-black">HTML5</h1>
        </Label>
        <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
          Experience Level
          <h1 className="text-[14px] font-[500] text-black">Intermediate</h1>
        </Label>
      </div>

      <div className="flex py-5">
        <div className="h-[1px] w-full bg-gray-300" />
      </div>

      {/* Education */}
      <h1 className="text-xl font-[500]">Education</h1>
      <div className="flex gap-5 w-[70%]">
        <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
          Degree Name
          <h1 className="text-[14px] font-[500] text-black">BSC</h1>
        </Label>
        <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
          University
          <h1 className="text-[14px] font-[500] text-black">
            Greenfield University
          </h1>
        </Label>
        <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
          Year of Starting
          <h1 className="text-[14px] font-[500] text-black">2018</h1>
        </Label>
        <Label className="flex text-[13px] w-full text-black/60 font-[400] flex-col gap-2">
          Year of Completion
          <h1 className="text-[14px] font-[500] text-black">2021</h1>
        </Label>
      </div>

      <div className="flex py-5">
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
        <Button className="text-black border border-black/50 shadow-none hover:text-white bg-white rounded-sm px-[60px] py-6">
          EDIT
        </Button>
        <Button className="bg-[#f66136] rounded-sm text-white px-[55px] py-6">
          CONFIRM
        </Button>
      </div>

    </div>
  );
}

export default Summary;