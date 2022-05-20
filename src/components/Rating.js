import { Rating as RatingMui } from "@mui/material";
import { useState } from "react";

export const Rating = ( { onClick }) => {
  const [value, setValue] = useState(null);
  const [disabled, setDisabled] = useState(false);

  
  return (
    <RatingMui
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        setDisabled(true);
        onClick(newValue)
      }}
      disabled={disabled}
    />
  );
};
