import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useDispatch, useSelector } from "react-redux";
import { setBasicInfo } from "../../store/formSlice";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
    firstname: z.string().min(3, {
      message: "Min length-3 characters",
    }),
    lastname: z.string().min(3, {
      message: "Min length-3 characters",
    }),
    email: z.string().email({
        message: "Enter valid email id",
    }),
  })

const BasicInfo = ({currentStep,setCurrentStep}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const myinfo = useSelector((state) => state.form.basicInfo);
  console.log("basic info", myinfo);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
    },
  });

  const submitBasicInfo = (formData) => {
    dispatch(setBasicInfo(formData));
  };


  const handleNextClick = () => {
    setCurrentStep(3); 
    navigate("/skill");
  };

  const handleBackClick = () => {
    setCurrentStep(1); 
    navigate("/");
  };

  useEffect(() => {
    if (currentStep === 3) {
      navigate("/skill");
    } else if (currentStep === 1) {
      navigate("/");
    }
  }, [currentStep, navigate]);


  return (
    <div className="flex flex-col gap-12 py-5 px-36">
      <h1 className="text-xl font-[500]">Basic Information</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitBasicInfo)}
          className="space-y-8"
        >
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 w-[70%]">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-black/60">First Name</FormLabel>
                    <FormControl>
                      <Input
                        className={`rounded-none py-6 autofocus-none bg-[#f7f7f7] ${form.formState.errors.firstname ? 'border-red-500 border' : 'border-none'}`}
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.firstname && (
                      <span className="text-red-500 text-sm">
                        {form.formState.errors.firstname.message}
                      </span>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-black/60">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        className={`rounded-none py-6 autofocus-none bg-[#f7f7f7] ${form.formState.errors.lastname ? 'border-red-500 border' : 'border-none'}`}
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.lastname && (
                      <span className="text-red-500 text-sm">
                        {form.formState.errors.lastname.message}
                      </span>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-5 w-[70%]">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-black/60">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={`rounded-none py-6 autofocus-none  bg-[#f7f7f7] ${form.formState.errors.email ? "border-red-500 border" : "border-none"}`}
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.email && (
                      <span className="text-red-500 text-sm">
                        {form.formState.errors.email.message}
                      </span>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-black/60">Contact</FormLabel>
                    <FormControl>
                      <div className="flex rounded-lg rounded-e-none">
                        <Select>
                          <SelectTrigger className="w-[100px] rounded-lg rounded-e-none text-black py-6 autofocus-none border-none bg-[#ececec]">
                            <SelectValue placeholder="Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup className="space-y-2 w-[350px]">
                              <SelectItem
                                className="text-[15px]"
                                value="beginner"
                              >
                                Beginner
                              </SelectItem>
                              <SelectItem
                                className="text-[15px]"
                                value="intermediate"
                              >
                                Intermediate
                              </SelectItem>
                              <SelectItem
                                className="text-[15px]"
                                value="expert"
                              >
                                Expert
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <Input
                          {...field}
                          className="rounded-none py-6 autofocus-none border-none bg-[#f7f7f7]"
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end items-end h-[140px] gap-4">
            <Button
              onClick={handleBackClick}
              className="text-black border border-black/50 shadow-none hover:text-white bg-white rounded-sm px-[70px] py-6">
              BACK
            </Button>
            <Button
              onClick={handleNextClick}
              type="submit"
              className="bg-[#f66136] rounded-sm text-white px-[70px] py-6">
              NEXT
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BasicInfo;
