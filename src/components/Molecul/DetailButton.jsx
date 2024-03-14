import React from "react";
import ButtonDelete from "../atom/ButtonDelete";
import ButtonArchive from "../atom/ButtonArsip";
import PropTypes from "prop-types";

export default function DetailButton({
  isArchived,
  onClickDelete,
  onClickArchive,
}) {
  return (
    <div className="d-flex position-fixed bottom-0 mb-3 gap-2 end-0 me-3">
      <ButtonArchive isArchived={isArchived} onClick={onClickArchive} />
      <ButtonDelete onClick={onClickDelete} />
    </div>
  );
}

DetailButton.propTypes = {
  isArchived: PropTypes.bool.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickArchive: PropTypes.func.isRequired,
};
