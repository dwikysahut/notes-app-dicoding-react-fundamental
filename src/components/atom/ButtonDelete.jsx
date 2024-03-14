import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button, Spinner } from "reactstrap";
import { BiSolidTrashAlt } from "react-icons/bi";
import { LoadingContext } from "../../context/LoadingContext";
import { ThemeContext } from "../../context/ThemeContext";

export default function ButtonDelete({ onClick }) {
  const { isLoadingPost } = useContext(LoadingContext);
  const { theme } = useContext(ThemeContext);
  return (
    <Button
      className={`rounded-circle ${
        theme == "light" ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{ width: "44px", height: "44px" }}
      type="reset"
      disabled={isLoadingPost}
      onClick={onClick}
    >
      {isLoadingPost ? (
        <Spinner size={"sm"} color="yellow">
          Loading...
        </Spinner>
      ) : (
        <BiSolidTrashAlt size={18} />
      )}
    </Button>
  );
}

ButtonDelete.propTypes = {
  onClick: PropTypes.func.isRequired,
};
