import React from "react";
import RoadMapBody from "../components/roadmap/RoadMapBody";
import RoadMapHeader from "../components/roadmap/RoadMapHeader";
import RoadMapTab from "../components/roadmap/RoadMapTab";

const RoadMapPage = () => {
  return (
    <div>
      <RoadMapHeader />
      <RoadMapTab />
      <RoadMapBody />
    </div>
  );
};

export default RoadMapPage;
