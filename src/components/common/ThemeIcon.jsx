import React from "react";
import PropTypes from "prop-types";

/**
 * Reusable Theme Icon Component
 * Usage: <ThemeIcon name="vamtam-theme-logo-sign" size={24} color="#C8F8A9" />
 */
const ThemeIcon = ({ name, size = 20, color = "#C8F8A9", className = "" }) => {
  return (
    <i
      aria-hidden="true"
      className={`vamtamtheme- ${name} ${className}`}
      style={{
        color,
        fontFamily: "theme-icons",
        fontSize: `${size}px`,
        lineHeight: `${size}px`,
        display: "inline-block",
        verticalAlign: "middle",
        WebkitFontSmoothing: "antialiased",
      }}
    ></i>
  );
};

ThemeIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default ThemeIcon;
