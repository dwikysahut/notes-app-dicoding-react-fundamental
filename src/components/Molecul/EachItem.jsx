import React, { Children } from "react";
import PropTypes from "prop-types";

export default function EachItem({ render, items }) {
  return Children.toArray(items.map((item, index) => render(item, index)));
}
EachItem.propTypes = {
  items: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
};
