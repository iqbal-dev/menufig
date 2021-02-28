import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    width: "90%",
    marginLeft: "10%",
  },
});
const Config1 = (props) => {
  const item = props.item;
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ marginLeft: "20px" }}>
      <Accordion>
        <AccordionSummary
          className={classes.root}
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label={item.label}
          />
        </AccordionSummary>
        <AccordionDetails>
          <>
            The click event of the nested action will propagate up and expand
            the accordion unless you explicitly stop it.
          </>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Config1;
