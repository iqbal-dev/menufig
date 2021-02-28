import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Config1 from "./Config1";

const useStyles = makeStyles({
  root: {
    width: "95%",
    marginLeft: "5%",
  },
});
const Config = (props) => {
  const item = props.item;
  console.log(item.items);
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
        <>
          {item.items && item.items.length
            ? item.items.map((item) => <Config1 item={item} />)
            : []}
        </>
      </Accordion>
    </div>
  );
};

export default Config;
