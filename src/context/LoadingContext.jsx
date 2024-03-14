import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LoadingContext = createContext(null);
export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPost, setIsLoadingPost] = useState(false);

  return (
    <LoadingContext.Provider
      value={{ isLoading, setIsLoading, isLoadingPost, setIsLoadingPost }}
    >
      {children}
    </LoadingContext.Provider>
  );
}
LoadingProvider.propTypes = {
  children: PropTypes.element,
};
