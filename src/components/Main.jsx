import React, { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { TbPointFilled } from "react-icons/tb";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  const currentStep = useSelector((state) => state.form.currentStep);
  
  const steps = [
    "Upload Resume",
    "Basic Information",
    "Skill Set",
    "Education",
    "Summary",
    "Completed",
  ];

  useEffect(() => {
    console.log("Current step updated to: ", currentStep);
  }, [currentStep]);

  return (
    <div className="flex flex-col gap-10 py-20 px-36">
      {/* Step Indicators */}
      <div className="flex gap-5 justify-center">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`step-item gap-5 ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || currentStep === 6 ) && "complete"
            }`}
          >
            <div className="step">
              {i + 1 < currentStep || currentStep === 6 ? <TiTick size={24} /> : <TbPointFilled size={24} />}
            </div>
            <p className="text-gray-500 text-[14px]">{step}</p>
          </div>
        ))}
      </div>

      {/* Render the page based on the current route */}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
