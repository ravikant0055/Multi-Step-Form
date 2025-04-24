import React, { useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoMdAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useDispatch, useSelector } from "react-redux";
import { addSkill, deleteSkill, setCurrentStep } from "../../store/formSlice";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
    skill: z.string().min(2, {
      message: "Min length-2 characters",
    }),
    experience: z.enum(["beginner", "intermediate", "expert"], {
        errorMap: () => ({ message: "Please select a valid experience level" }),
    }),
  })

const AddSkills = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const myskills = useSelector((state) => state.form.skills);
  console.log("Skill info", myskills);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      skill: "",
      experience: "",
    },
  });

  const submitSkill = (formData) => {
    console.log("mydata",formData)
    dispatch(addSkill(formData));
  };

  const handleDelete = (id) =>{
    dispatch(deleteSkill(id));
  }

  const handleNextClick = () => {
    dispatch(setCurrentStep(4)); 
    navigate("/education");
  };

  const handleBackClick = () => {
    dispatch(setCurrentStep(2)); 
    navigate("/information");
  };

  return (
    <div className="flex flex-col gap-12 py-5 px-36">
      <h1 className="text-xl font-[500]">Add Skill Sets</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submitSkill)} className="space-y-8">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 w-[70%]">
              <FormField
                control={form.control}
                name="skill"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-black/60">Add Skill</FormLabel>
                    <FormControl>
                      <Input
                        className={`rounded-none py-6 autofocus-none bg-[#ffffff] ${form.formState.errors.skill ? 'border-red-500 border' : 'border-none'}`}
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.skill && (
                      <span className="text-red-500 text-sm">
                        {form.formState.errors.skill.message}
                      </span>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-black/60">
                      Experience level
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className={`rounded-none py-6 autofocus-none bg-[#ffffff] ${form.formState.errors.experience ? 'border-red-500 border' : 'border-none'}`}>
                          <SelectValue placeholder="Select Experience level" />
                        </SelectTrigger>
                      </FormControl>
                      {form.formState.errors.experience && (
                        <span className="text-red-500 text-sm">
                            {form.formState.errors.experience.message}
                        </span>
                      )}
                      <SelectContent>
                        <SelectGroup className="space-y-2">
                          <SelectItem className="text-[15px]" value="beginner">
                            Beginner
                          </SelectItem>
                          <SelectItem
                            className="text-[15px]"
                            value="intermediate"
                          >
                            Intermediate
                          </SelectItem>
                          <SelectItem className="text-[15px]" value="expert">
                            Expert
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            {/* skills */}
            <div className="flex gap-5 flex-wrap max-h-[120px] overflow-y-auto">
              {myskills.map((item,index)=>( 
                <div key={index} className="flex justify-between items-center gap-2 text-[13px] border border-dashed border-black/30 px-4 py-3 text-black/60 bg-white font-[300]">
                     {`${item.skill} (${item.experience})`}
                    <IoMdClose onClick={()=>handleDelete(index)} className="text-xl text-black/70 cursor-pointer" />
                </div>
              ))} 
            </div>

            <div className="flex flex-col gap-2 mt-5 w-[70%]">
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#064048] to-[#0b7583] hover:from-[#000000] hover:to-[#000000] w-fit rounded-sm text-white px-[50px] py-6"
              >
                Add <IoMdAdd />
              </Button>
            </div>
          </div>
          <div className="flex justify-end items-end h-[140px] gap-4">
            <Button
             type="button"
             onClick={handleBackClick}
             className="text-[#064048] border border-[#064048]/50 shadow-none hover:text-white bg-white rounded-sm px-[70px] py-6">
              BACK
            </Button>
            <Button 
              type="button"
              disabled={myskills.length === 0}
              onClick={handleNextClick}
              className="bg-gradient-to-r from-[#064048] to-[#0b7583] hover:from-[#000000] hover:to-[#000000] rounded-sm text-white px-[70px] py-6">
              NEXT
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddSkills;
