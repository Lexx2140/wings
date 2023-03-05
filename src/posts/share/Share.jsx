import React, { useEffect, useState, useRef } from "react";




import Welcome from "./welcome/Welcome";
import Description from "./description/Description";
import More from "./more/More";


const SingleShare = (props) => {

  return (
    <>
      <Welcome />
      <Description />
      <More />

    </>
  );
};

export default SingleShare;
