import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageAuth from "../../../assets/undraw_secure_login.png";
import SignUp from "../../components/Molecul/SignUp";
import SignIn from "../../components/Molecul/SignIn";

const componentTabs = [
  {
    id: 0,
    title: "Login",
    component: (props) => <SignIn {...props} />,
  },
  {
    id: 1,
    title: "Register",
    component: (props) => <SignUp {...props} />,
  },
];
export default function Auth() {
  const [selectedTab, setSelectedTab] = useState(0);

  const onTabChangeHandler = (id) => {
    setSelectedTab(id);
  };

  const onFinishedRegister = () => {
    setSelectedTab(0);
  };
  return (
    <div className="flex bg-black p-3 justify-center items-center h-[100vh]">
      <div className="w-[70%] bg-white rounded-3xl h-[80vh] p-4 flex justify-around items-center">
        <div className="flex-1 flex justify-center items-center">
          <img src={ImageAuth} width="100%" />
        </div>
        <div className="flex flex-col flex-1 pt-[3rem] h-100 self-start">
          <nav className="flex flex-1 justify-center gap-2">
            <ul className="flex flex-row gap-3 h-fit flex-1">
              {componentTabs.map((item, index) => (
                <div
                  key={index}
                  className={`cursor-pointer p-2 border-b-2 flex-1 transition ease-in-out delay-150 ${
                    selectedTab == item.id && "border-b-gray-900"
                  }`}
                  onClick={() => onTabChangeHandler(item.id)}
                >
                  <li
                    className={`${
                      selectedTab == item.id
                        ? "text-gray-900 font-bold"
                        : "text-gray-700"
                    }  text-center transition ease-in-out delay-150`}
                  >
                    {item.title}
                  </li>
                </div>
              ))}
            </ul>
          </nav>
          <div className="flex-[6] flex flex-col justify-start mt-[1rem]">
            {componentTabs[selectedTab].component({
              onFinishedRegister: onFinishedRegister,
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
