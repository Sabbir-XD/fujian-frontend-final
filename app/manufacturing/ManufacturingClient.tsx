"use client";

import { memo } from "react";
import ManufacturingPage from "./ManufacturingPage";
import Manufacturing from "./Manufacturing";

function ManufacturingClient() {
  return (
    <main>
      {/* <ManufacturingHero /> */}
      {/* <ManufacturingProcessSteps /> */}
      {/* <QualityAndCompliance /> */}
      {/* <ManufacturingProcessShowcase /> */}
      {/* <GlobalStandards /> */}
      <ManufacturingPage />
      {/* <Manufacturing /> */}
    </main>
  );
}

export default memo(ManufacturingClient);
