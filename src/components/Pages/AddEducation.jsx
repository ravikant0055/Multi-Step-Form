import React, { useEffect } from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { IoMdAdd, IoMdClose } from 'react-icons/io';
import { MdOutlineDragIndicator } from "react-icons/md";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { CalendarIcon, University } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Calendar } from '../ui/calendar';
import { cn } from "../../lib/utils"
import { format } from 'date-fns';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useDispatch, useSelector } from 'react-redux';
import { addEducation, deleteEducation } from '../../store/formSlice';
import { useNavigate } from 'react-router-dom';

const FormSchema = z.object({
    degree: z.string().min(1, {
      message: "Min length-1 characters",
    }),
    university: z.string().min(1, {
      message: "Min length-1 characters",
    }),
  })


const AddEducation = ({currentStep, setCurrentStep}) => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  const myEducation = useSelector((state) => state.form.educations);
  console.log("edu info", myEducation);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        degree: "",
        university: "",
        startDate: null,
        endDate: null
    },
  }); 
  
  const submitEducation = (formData) => {
    const startYear = formData.startDate ? new Date(formData.startDate).getFullYear() : null;
    const endYear = formData.endDate ? new Date(formData.endDate).getFullYear() : null;
    dispatch(addEducation({...formData,startYear,endYear })); 
  };

  const handleDelete = (id) =>{
    dispatch(deleteEducation(id));
  }

  const handleNextClick = () => {
    console.log("Next button click");
    setCurrentStep(5); 
    navigate("/summary");
  };

  const handleBackClick = () => {
    setCurrentStep(3); 
    navigate("/skill");
  };
  
  useEffect(() => {
    if (currentStep === 5) {
      navigate("/summary");
    } else if (currentStep === 3) {
      navigate("/skill");
    }
  }, [currentStep, navigate]);
  

  return (
    <div className="flex flex-col gap-12 py-5 px-36">
      <h1 className="text-xl font-[500]">Add Education</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitEducation)}
          className="space-y-8"
        >
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 w-[70%]">
              <FormField
                control={form.control}
                name="degree"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-black/60">Degree</FormLabel>
                    <FormControl>
                      <Input
                        className={`rounded-none py-6 autofocus-none bg-[#f7f7f7] ${form.formState.errors.degree ? 'border-red-500 border' : 'border-none'}`}
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.degree && (
                      <span className="text-red-500 text-sm">
                        {form.formState.errors.degree.message}
                      </span>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="university"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-black/60">
                      University/College
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={`rounded-none py-6 autofocus-none bg-[#f7f7f7] ${form.formState.errors.university ? 'border-red-500 border' : 'border-none'}`}
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.university && (
                      <span className="text-red-500 text-sm">
                        {form.formState.errors.university.message}
                      </span>
                    )}
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-5 w-[70%]">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-black/60">Starting Year</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "rounded-none py-6 autofocus-none border-none bg-[#f7f7f7] text-left",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="text-[#f66136] ml-auto h-7 w-7" />
                          </Button>
                        </FormControl>
                        
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full">
                    <FormLabel className="text-black/60">Ending Year</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                             "rounded-none py-6 autofocus-none border-none bg-[#f7f7f7] text-left",
                             !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="text-[#f66136] ml-auto h-7 w-7" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </div>

            {/* Educations */}
            <div className="flex flex-col gap-5 max-h-[200px] w-fit overflow-y-auto">
              {myEducation.map((item,index)=>( 
                <div key={index} className="flex justify-between items-center gap-2 text-[13px] border px-4 py-3 text-[black/60] font-[300]">
                    <MdOutlineDragIndicator className="text-xl text-[#f66136] cursor-pointer" />{" "}
                     {`${item.degree}-${item.university} (${item.startDate}-${item.endDate})`}
                    <IoMdClose onClick={()=>handleDelete(index)} className="text-xl text-black/70 cursor-pointer" />
                </div>
              ))} 
            </div>

            <div className="flex flex-col gap-2 mt-5 w-[70%]">
              <Button
                type="submit"
                className="bg-[#f66136] w-fit rounded-sm text-white px-[50px] py-6"
              >
                Add <IoMdAdd />
              </Button>
            </div>
          </div>
          <div className="flex justify-end items-end h-[100px] gap-4">
            <Button 
            type="button"
            onClick={handleBackClick}
            className="text-black border border-black/50 shadow-none hover:text-white bg-white rounded-sm px-[70px] py-6">
              BACK
            </Button>
            <Button
            type="button"
            onClick={handleNextClick}
            className="bg-[#f66136] rounded-sm text-white px-[70px] py-6">
              NEXT
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default AddEducation;