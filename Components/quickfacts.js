import React from 'react';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      height: "550px",
      background: "#2C2C2C",
    },
  }));

const QuickFacts = () => {
  return (
    <div>
      This is the quick facts
    </div>
  )
}

export default QuickFacts;
