import AddEducation from "./components/Pages/AddEducation";
import AddSkills from "./components/Pages/AddSkills";
import BasicInfo from "./components/Pages/BasicInfo";
import Completed from "./components/Pages/Completed";
import Summary from "./components/Pages/Summary";
import UploadResume from "./components/Pages/UploadResume";
import "./App.css";
import Main from "./components/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Pages/ErrorPage";
import { useState } from "react";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main currentStep={currentStep} setCurrentStep={setCurrentStep} />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <UploadResume currentStep={currentStep} setCurrentStep={setCurrentStep} />,
        },
        {
          path: "upload",  
          element: <UploadResume currentStep={currentStep} setCurrentStep={setCurrentStep} />,
        },
        {
          path: "information",  
          element: <BasicInfo currentStep={currentStep} setCurrentStep={setCurrentStep}/>,
        },
        {
          path: "skill",  
          element: <AddSkills currentStep={currentStep} setCurrentStep={setCurrentStep}/>,
        },
        {
          path: "education",  
          element: <AddEducation currentStep={currentStep} setCurrentStep={setCurrentStep}/>,
        },
        {
          path: "summary",  
          element: <Summary currentStep={currentStep} setCurrentStep={setCurrentStep}/>,
        },
        {
          path: "complete",  
          element: <Completed />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
