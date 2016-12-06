import React from 'react';
import Introduction from './Introduction';
import SidePhotos from './SidePhotos';
import Facts from './Facts';
import WorkEthic from './WorkEthic';
import Closing from './Closing';

const Application = () => {
  return (
    <section className="letter">
      <Introduction />
      <SidePhotos />
      <Facts />
      <WorkEthic />
      <Closing />
    </section>
  );
}

export default Application;
