import React from "react";

import Button from "@mui/material/Button";

const index = ({ label }) => {
  return (
    <Button variant="contained" type="submit" fullWidth size="large">
      {label}
    </Button>
  );
};

export default index;
