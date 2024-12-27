import { products } from "@/app/data/products";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  const { params } = context;
  const product = products.find((p) => p.id.toString() === params.productId);
  return NextResponse.json({
    product,
  });
}
