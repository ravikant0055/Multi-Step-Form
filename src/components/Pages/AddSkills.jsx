import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoMdAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

const AddSkills = () => {
  return (
    <div className="flex flex-col gap-12 py-20 px-36">
      <h1 className="text-xl font-[500]">Add Skill Sets</h1>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 w-[70%]">
          <Label className="flex text-[14px] w-full text-black/60 flex-col gap-2">
            Add Skill
            <Input className="rounded-none text-black py-7 autofocus-none border-none bg-[#f7f7f7]" />
          </Label>
          <Label className="flex text-[14px] w-full text-black/60 flex-col gap-2">
            Experience level
            <Select>
              <SelectTrigger className="rounded-none text-black py-7 autofocus-none border-none bg-[#f7f7f7]">
                <SelectValue placeholder="Select Experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="space-y-2" >
                  <SelectItem className="text-[15px]"  value="beginner">Beginner</SelectItem>
                  <SelectItem className="text-[15px]"  value="intermediate">Intermediate</SelectItem>
                  <SelectItem className="text-[15px]"  value="expert">Expert</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Label>
        </div>

        {/* skills */}
        <div className="flex gap-5 flex-wrap max-h-[200px] overflow-y-auto">
           <div className="flex justify-between items-center gap-2 text-[13px] border px-4 py-3 text-black/60 font-[300]">HTML5 (Beginner) <IoMdClose className="text-xl text-black/70 cursor-pointer"/></div>
        </div>

        <div className="flex flex-col gap-2 mt-5 w-[70%]">
          <Button className="bg-[#f66136] w-fit rounded-sm text-white px-[50px] py-6">
            Add <IoMdAdd />
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
  );
};

export default AddSkills;
