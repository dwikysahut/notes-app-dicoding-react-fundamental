import React from "react";
import ImageNotFound from "../../assets/undraw_page_not_found.png";

export default function NotFound() {
  return (
    <div className="app-container d-flex justify-content-center align-items-center h-100">
      <img src={ImageNotFound} width={599} alt="" />
    </div>
  );
}
