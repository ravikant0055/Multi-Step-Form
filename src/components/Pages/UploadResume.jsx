import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { LuCloudUpload } from "react-icons/lu";
import { IoMdCloseCircleOutline } from "react-icons/io";
import pdfimage from "../../assets/pdf.svg";
import { TbLoader } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentStep } from "../../store/formSlice";

const UploadResume = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const handleNextClick = () => {
    dispatch(setCurrentStep(2)); 
    navigate("/information");
  };

  return (
    <div className="flex flex-col py-5 px-36">
      <h1 className="text-xl font-[500]">Upload Resume</h1>
      <div className="flex justify-between gap-2">
        <div className="flex flex-col gap-5 mt-10">
          {/* Upload Resume Section */}
          <div className="flex flex-col gap-3 items-center justify-center border-[2.3px] border-black/30 border-spacing-2 border-dashed rounded-2xl px-12 py-9">
            <LuCloudUpload className="text-[#f66136] text-3xl" />
            <h1 className="font-[500] mt-2">Choose a file or drag & drop it here</h1>
            <p className="text-black/50">Please Upload Your Resume (PDF,DOC formats only)</p>
            <Button className="text-black mt-3 border border-black/50 shadow-none hover:text-white bg-white rounded-sm px-[50px] py-6">
              Browser File
            </Button>
          </div>
          {/* Uploaded File Section */}
          <div className="flex flex-col gap-5 p-6 rounded-2xl bg-[#fff5f2]">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <img src={pdfimage} alt="pdfimage" />
                <div className="flex flex-col justify-center gap-1">
                  <h1 className="text-[14px] font-[500]">RavikantCV.pdf</h1>
                  <p className="text-black/50 text-[13px] flex gap-2 items-center">
                    60KB of 120 KB{" "}
                    <span className="text-black font-[300] flex items-center gap-1">
                      <TbLoader className="text-[#f66136] animate-spin" />
                      Uploading...
                    </span>
                  </p>
                </div>
              </div>
              <IoMdCloseCircleOutline className="text-[#f66136]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          {/* Next Button */}
          <Button
            className="bg-[#f66136] rounded-sm text-white px-[70px] py-6"
            onClick={handleNextClick} 
          >
            NEXT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;
