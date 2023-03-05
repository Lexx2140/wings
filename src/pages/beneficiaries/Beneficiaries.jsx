import React from "react";

import Welcome from "./welcome/Welcome";
import Help from "./help/Help";
import Support from "./support/Support";
import Direct from "./direct/Direct";
import Faq from "./faq/Faq";

const BeneficiariesPage = (props) => {
  return (
    <>
      <Welcome />
      <Help />
      <Support />
      <Direct />
      <Faq />
    </>
  );
};

export default BeneficiariesPage;
