import React from "react";

const StepName = ({onClick}) => {
  return (
    <>
        <div>Name component</div>
        <button onClick={onClick}>Next</button>
    </>
  );
};

export default StepName;
