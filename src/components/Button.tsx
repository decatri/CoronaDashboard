import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { PropTypes } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  })
);

export default function CustomButton(props: {
  onClick: () => void;
  color: PropTypes.Color;
  text: string;
}) {
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={props.onClick}>
      <Button variant="outlined" color={props.color}>
        {props.text}
      </Button>
    </div>
  );
}
