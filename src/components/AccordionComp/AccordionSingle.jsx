import React from "react";
import Accordion from "@mui/material/Accordion";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Checkbox from "@mui/material/Checkbox";

import { AccordionDetails, AccordionSummary, Box } from "@mui/material";

import { useState } from "react";
function AccordionSingle(props) {
  const [expandIcon, setExpandIcon] = useState(false);
  const handleClick = () => {
    setExpandIcon(!expandIcon);
  };
  const { data } = props;
  return (
    <>
      <Accordion className="accord">
        <AccordionSummary onClick={handleClick} className="details">
          <div className="details">
            {expandIcon ? <RemoveIcon /> : <AddIcon />}
            <Checkbox />
            {data.department}
          </div>
        </AccordionSummary>
        <AccordionDetails className="accord-details">
          <ul className="list-items">
            {data.sub_departments.map((subDepart) => {
              return (
                <>
                  <li className="items">
                    <Checkbox />
                    {subDepart}
                  </li>
                </>
              );
            })}
          </ul>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default AccordionSingle;
