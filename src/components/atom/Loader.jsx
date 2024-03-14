import React from "react";
import {Spinner} from "reactstrap";
export default function Loader() {
  return (
    <div className="flex justify-center items-start h-[100%] flex-[2]">
      <Spinner size="lg" color="yellow" className="z-50 text-orange-500"></Spinner>
    </div>
  );
}
