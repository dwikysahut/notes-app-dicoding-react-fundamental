import React, { useContext } from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils";
import parser from 'html-react-parser';
import { LanguageContext } from "../../context/LanguageContext";
export default function Card({ data, onClick }) {
  const { language } = useContext(LanguageContext);

  return (
    <div
      className="note-item d-flex flex-column gap-1 p-4"
      style={{ cursor: "pointer" }}
      onClick={() => onClick(data.id)}
    >
      <p className="note-item__title">
        <strong>{data?.title}</strong>
      </p>
      <p className="note-item__createdAt ">
        {showFormattedDate(data?.createdAt,language=='id'?'id-ID':'en-EN')}
      </p>

      <p className="note-item__body">{parser(data?.body)}</p>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
