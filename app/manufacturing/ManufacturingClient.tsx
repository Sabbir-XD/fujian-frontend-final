"use client";

import { memo } from "react";
import ManufacturingPage from "./ManufacturingPage";

function ManufacturingClient() {
  return (
    <main>
      <ManufacturingPage />
    </main>
  );
}

export default memo(ManufacturingClient);
