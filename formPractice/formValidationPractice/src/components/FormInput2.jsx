import React from "react";

const FormInput2 = ({ name, reg, error = null, ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        width: "100%",
      }}
    >
      <input {...reg} {...props} style={{ width: "100%" }} />
      <p style={{ color: "red", fontSize: "8px", marginTop: "2px" }}>{error}</p>
    </div>
  );
};

export default FormInput2;
