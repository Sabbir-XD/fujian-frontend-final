"use client";

import ProductsGrid from "@/src/components/products/ProductsGrid";
import { memo } from "react";

function ProductsClient() {
  return (
    <main className="mx-auto max-w-7xl w-full px-4 md:px-6 lg:px-0 pt-5 lg:pt-8 space-y-8">
      <section className="px-4">
        <div className="mx-auto max-w-4xl text-center space-y-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
            Product Fujian Accessories Co. Ltd.
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Our Products
          </h1>
        </div>
      </section>

      <ProductsGrid />
    </main>
  );
}

export default memo(ProductsClient);
