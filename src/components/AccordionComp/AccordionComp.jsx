
import "./AccordionComp.css"
import { AccordionDetails, AccordionSummary, Box } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
export const AccordionComp = ({data_api}) => {
    // console.log(data_api);
    const[expandIcon, setExpandIcon] = useState(false);
    const handleClick = ()=>{
      setExpandIcon(!expandIcon);
    }
  return (

    <Box className="footer-content">
      <h1 className="header2">
        DropDown
      </h1>
      {      
        data_api.map((data)=>{
          return(
            <>
              <Accordion className="accord">
                <AccordionSummary  onClick={handleClick} className="details">
                <div className="details">
                  {expandIcon?<RemoveIcon/>:<AddIcon/>}
                  <Checkbox />
                  {data.department}
                </div>
                </AccordionSummary>
                <AccordionDetails className="accord-details">
                  <ul className="list-items">
                    {
                      data.sub_departments.map((subDepart)=>{

                        return(
                          <>
                            <li className="items">
                                <Checkbox />
                                {subDepart}
                            </li>
                          </>
                        )
                      })
                    }
                  </ul>
                </AccordionDetails>
              </Accordion>
          </>
          )
        })

      }
        
    </Box>
  )
}
