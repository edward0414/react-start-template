import React from "react";
import PropTypes from "prop-types";

function ActivityIndicator({ isLoading, children }) {
  return isLoading ? (
    <div className="activity-indicator">
      <p>loading...</p>
      {/* {<Spinner animation="border" />} */}
    </div>
  ) : (
    <div>{children}</div>
  );
}

ActivityIndicator.propTypes = {
  isLoading: PropTypes.boo.isRequired,
  children: PropTypes.element
};

export default ActivityIndicator;
