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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main  />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <UploadResume /> },
        { path: "upload", element: <UploadResume /> },
        { path: "information", element: <BasicInfo /> },
        { path: "skill", element: <AddSkills /> },
        { path: "education", element: <AddEducation /> },
        { path: "summary", element: <Summary /> },
        { path: "complete", element: <Completed /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
