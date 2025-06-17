import React, { useEffect } from "react";
import PGraph from "./PGraph";
import PTable from "./PTable"
import DepartmentPlacementList from "./DepartmentPlacementList";


export default function Placements() {
  useEffect(() => {
    document.title = "Placements | NSEC Training & Placement";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "30px", fontSize: "26px" }}>
        Placement Records
      </h1>
      
      <PGraph/>
      <PTable/>
      <DepartmentPlacementList/>
    </>
  );
}
