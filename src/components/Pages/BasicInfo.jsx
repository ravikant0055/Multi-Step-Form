import React from 'react'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const BasicInfo = () => {
  return (
    <div className="flex flex-col gap-12 py-20 px-36">
      <h1 className="text-xl font-[500]">Basic Information</h1>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 w-[70%]">
          <Label className="flex text-[14px] w-full text-black/60 flex-col gap-2">
            First Name
            <Input className="rounded-none text-black py-7 autofocus-none border-none bg-[#f7f7f7]" />
          </Label>
          <Label className="flex text-[14px] w-full text-black/60 flex-col gap-2">
            Last Name
            <Input className="rounded-none text-black py-7 autofocus-none border-none bg-[#f7f7f7]" />
          </Label>
        </div>
        <div className="flex gap-5 w-[70%]">
          <Label className="flex text-[14px] w-full text-black/60 flex-col gap-2">
            Email Address
            <Input className="rounded-none text-black py-7 autofocus-none border-none bg-[#f7f7f7]" />
          </Label>
          <Label className="flex text-[14px] w-full text-black/60 flex-col gap-2">
            Contact
            <div className='relative rounded-lg rounded-e-none'>
            <Input className="text-black py-7 autofocus-none border-none bg-[#f7f7f7]" />
            <Select>
              <SelectTrigger className="absolute top-0 w-[100px] rounded-lg rounded-e-none text-black py-7 autofocus-none border-none bg-[#ececec]">
                <SelectValue placeholder="Country"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="space-y-2 w-[350px]" >
                  <SelectItem className="text-[15px]"  value="beginner">Beginner</SelectItem>
                  <SelectItem className="text-[15px]"  value="intermediate">Intermediate</SelectItem>
                  <SelectItem className="text-[15px]"  value="expert">Expert</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            </div>
          </Label>
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
}

export default BasicInfo