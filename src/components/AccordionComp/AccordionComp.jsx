import "./AccordionComp.css";

import { Box } from "@mui/material";
import AccordionSingle from "./AccordionSingle";
export const AccordionComp = ({ data_api, key }) => {
  // console.log(data_api);

  return (
    <Box className="footer-content">
      <h1 className="header2">DropDown</h1>
      {data_api.map((data, index) => {
        return (
          <>
            <AccordionSingle data={data} key={index} />{" "}
          </>
        );
      })}
    </Box>
  );
};
