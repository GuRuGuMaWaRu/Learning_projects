db.products.insert({
  _id: 2,
  name: "Pencil",
  price: 0.8,
  stock: 12,
  reviews: [
    {
      authorName: "Bob",
      rating: 4,
      review: "Quite good!"
    },
    {
      authorName: "Cathy",
      rating: 1,
      review: "Broke immediately!"
    }
  ]
});
