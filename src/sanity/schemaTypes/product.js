export const products = {
  name: "products",
  type: "document",
  title: "Products",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name Of the Product",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug Of the Product",
      options: {
        source: "name",
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description Of the Product",
    },
    {
      name: "discountedPrice",
      type: "number",
      title: "Final Price Of the Product",
    },
    {
      name: "originalPrice",
      type: "number",
      title: "Original Price Of the Product",
    },
    {
      name: "discount",
      type: "number",
      title: "Discount on the Product",
    },
    {
      name: "image",
      type: "image",
      title: "Image Of the Product",
    },
    {
      name: "rating",
      type: "number",
      title: "Rating Of the Product",
    },
    {
      name: "buyers",
      type: "number",
      title: "Buyers Of the Product",
    },
    {
      name: "categories",
      type: "array",
      title: "Categories Of the Product",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "stockStatus",
      type: "number",
      title: "Total Stock Of the Product",
    },
  ],
};
