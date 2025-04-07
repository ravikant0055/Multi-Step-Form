import React from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { IoMdAdd, IoMdClose } from 'react-icons/io';
import { MdOutlineDragIndicator } from "react-icons/md";


const AddEducation = () => {
  return (
    <div className="flex flex-col gap-12 py-20 px-36">
      <h1 className="text-xl font-[500]">Add Education</h1>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 w-[70%]">
          <Label className="flex text-[14px] w-full text-black/60 flex-col gap-2">
            Degree
            <Input className="rounded-none text-black py-7 autofocus-none border-none bg-[#f7f7f7]" />
          </Label>
          <Label className="flex text-[14px] w-full text-black/60 flex-col gap-2">
            University/College
            <Input className="rounded-none text-black py-7 autofocus-none border-none bg-[#f7f7f7]" />
          </Label>
        </div>
        <div className="flex gap-5 w-[70%]">
          <Label className="flex text-[14px] w-full text-black/60 flex-col gap-2">
            Starting Year
            <Input className="rounded-none text-black py-7 autofocus-none border-none bg-[#f7f7f7]" />
          </Label>
          <Label className="flex text-[14px] w-full text-black/60 flex-col gap-2">
            Ending Year
            <Input className="rounded-none text-black py-7 autofocus-none border-none bg-[#f7f7f7]" />
          </Label>
        </div>
        
        {/* Educations */}
        <div className="flex flex-col gap-5 max-h-[200px] w-fit overflow-y-auto">
           <div className="flex justify-between items-center gap-2 text-[13px] border px-4 py-3 text-[black/60] font-[300]"><MdOutlineDragIndicator className="text-xl text-[#f66136] cursor-pointer"/> BSC-Greenfield University (2018-2021) <IoMdClose className="text-xl text-black/70 cursor-pointer"/></div>
        </div>

        <div className="flex flex-col gap-2 mt-5 w-[70%]">
          <Button className="bg-[#f66136] w-fit rounded-sm text-white px-[50px] py-6">
            Add <IoMdAdd/>
          </Button>
        </div>
      </div>
      <div className="flex justify-end items-end h-[140px] gap-4">
        <Button className="text-black border border-black/50 shadow-none hover:text-white bg-white rounded-sm px-[70px] py-6">
          BACK
        </Button>
        <Button className="bg-[#f66136] rounded-sm text-white px-[70px] py-6">
          NEXT
        </Button>
      </div>
    </div>
  )
}

export default AddEducation;