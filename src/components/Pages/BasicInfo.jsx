import React, { useEffect, useState } from "react";
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
import { setBasicInfo, setCurrentStep } from "../../store/formSlice";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

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
    contact: z.string().min(10, { 
      message: "Enter a valid phone number"
    }),
  })

const BasicInfo = () => {
  const [phone, setPhone] = useState('');
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
    dispatch(setCurrentStep(3));
    navigate("/skill");
  };

  const handleBackClick = () => {
    dispatch(setCurrentStep(1));
    navigate("/");
  };

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
                        className={`rounded-none py-6 autofocus-none bg-[#ffffff] ${
                          form.formState.errors.firstname
                            ? "border-red-500 border"
                            : "border-none"
                        }`}
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
                        className={`rounded-none py-6 autofocus-none bg-[#ffffff] ${
                          form.formState.errors.lastname
                            ? "border-red-500 border"
                            : "border-none"
                        }`}
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
                        className={`rounded-none py-6 autofocus-none bg-[#ffffff] ${
                          form.formState.errors.email
                            ? "border-red-500 border"
                            : "border-none"
                        }`}
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
                        <PhoneInput
                          country={"in"}
                          value={field.value}
                          onChange={(value) => {
                            field.onChange(value);
                          }}
                          inputStyle={{
                             padding: "24px 50px",
                             backgroundColor: "white",
                             border:"none",
                             width:"100%"
                          }}
                          className={`rounded-none bg-[#ffffff] ${form.formState.errors.contact ? "border-red-500 border": "border-none"}`}
                        />
                      </div>
                    </FormControl>
                    {form.formState.errors.contact && (
                      <span className="text-red-500 text-sm">
                        {form.formState.errors.contact.message}
                      </span>
                    )}
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end items-end h-[140px] gap-4">
            <Button
              onClick={handleBackClick}
              className="text-[#064048] border border-[#064048]/50 shadow-none hover:text-white bg-white rounded-sm px-[70px] py-6"
            >
              BACK
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-[#064048] to-[#0b7583] hover:from-[#000000] hover:to-[#000000] rounded-sm text-white px-[70px] py-6"
            >
              NEXT
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BasicInfo;
