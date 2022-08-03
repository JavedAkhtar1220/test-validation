import React from "react";

import TextField from "@mui/material/TextField";

const index = ({ label }, props) => {
  return (
    <TextField
      id="outlined-basic"
      sx={{ marginBottom: "20px" }}
      fullWidth
      label={label}
      {...props}
      variant="outlined"
    />
  );
};

export default index;
