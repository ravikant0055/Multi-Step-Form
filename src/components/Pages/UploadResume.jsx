import React, { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { LuCloudUpload } from "react-icons/lu";
import { IoMdCloseCircleOutline } from "react-icons/io";
import pdfimage from "../../assets/pdf.svg";
import { TbLoader } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentStep } from "../../store/formSlice";
import { useDropzone } from "react-dropzone";
import { ImUpload } from "react-icons/im";
import { Progress } from "../ui/progress";
import { PiCheckCircleFill } from "react-icons/pi";
import { MdDeleteForever } from "react-icons/md";

const UploadResume = () => {
  const [store, setStore] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNextClick = () => {
    dispatch(setCurrentStep(2));
    navigate("/information");
  };

  // Simulate upload progress
  const simulateUpload = (fileObj) => {
    let progress = 0;

    const interval = setInterval(() => {
      setStore((prev) =>
        prev.map((item) =>
          item.name === fileObj.name
            ? {
                ...item,
                progress: Math.min(item.progress + 10, 100),
                status: item.progress + 10 >= 100 ? "completed" : "uploading",
              }
            : item
        )
      );

      progress += 10;
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 300);
  };

  // Handle file drop
  const onDrop = useCallback((files) => {
    const filesWithMeta = files.map((file) => ({
      file,
      name: file.name,
      size: file.size,
      progress: 0,
      status: "uploading",
    }));

    setStore(filesWithMeta);
    filesWithMeta.forEach(simulateUpload);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col py-5 px-36">
      <h1 className="text-xl font-[500]">Upload Resume</h1>
      <div className="flex justify-between gap-2">
        <div className="flex w-[54%] flex-col gap-5 mt-10">
          {/* Upload Resume Section */}
          <div
            {...getRootProps()}
            className="flex flex-col w-full items-center justify-center border-[2.3px] border-black/30 border-dashed rounded-2xl"
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <div className="py-[78px]">
                <ImUpload className="text-[100px] text-[#747474]" />
              </div>
            ) : (
              <div className="flex flex-col gap-3 items-center justify-center px-12 py-9">
                <LuCloudUpload className="text-[#f66136] text-3xl" />
                <h1 className="font-[500] mt-2">
                  Choose a file or drag & drop it here
                </h1>
                <p className="text-black/50 text-sm text-nowrap">
                  Please Upload Your Resume (PDF, DOC formats only)
                </p>
                <Button className="text-black mt-3 border border-black/50 shadow-none hover:text-white bg-white rounded-sm px-[50px] py-6">
                  Browse File
                </Button>
              </div>
            )}
          </div>

          {/* Uploaded File Section */}
          {store.length > 0 &&
            store.map((item, index) => (
              <div key={index} className="flex flex-col gap-5 p-6 rounded-2xl bg-[#fff5f2]">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <img src={pdfimage} alt="pdf" />
                    <div className="flex flex-col justify-center gap-1">
                      <h1 className="text-[14px] font-[500]">{item.name}</h1>
                      <p className="text-black/50 text-[13px] flex gap-2 items-center">
                        {Math.round(item.size / 1024)}KB
                        <span className="text-black font-[300] flex items-center gap-1">
                          {item.status === "uploading" ? (
                            <>
                              <TbLoader className="text-[#f66136] animate-spin" />
                              Uploading...
                            </>
                          ) : (
                            <>
                               <PiCheckCircleFill className="text-[#1ac54b] text-[16px]"/>
                               Completed
                            </>
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                  {item.status === "uploading" ? (
                            <>
                              <IoMdCloseCircleOutline onClick={()=>setStore([])} className="text-[#f66136] cursor-pointer" />
                            </>
                          ) : (
                            <>
                               <MdDeleteForever onClick={()=>setStore([])} className="text-[#f66136] text-[30px] hover:bg-[#ffd3c7] rounded-sm p-1 cursor-pointer"/>
                            </>
                  )}
                </div>

                {/* Show progress bar while uploading */}
                {item.status === "uploading" && (
                  <Progress value={item.progress} className="[&>div]:bg-[#f66136]" />
                )}
              </div>
            ))}
        </div>

        <div className="flex flex-col justify-end">
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
