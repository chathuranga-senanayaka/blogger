export const postData = {
  categories: [
    {
      id: 1,
      title: "Adventure Travel",
      description: "Experience the thrill of adventure.",
      image: "/images/adventure.jpg",
    },
    {
      id: 2,
      title: "Luxury Retreats",
      description: "Discover the most luxurious getaways.",
      image: "/images/luxury.jpg",
    },
  ],
  explore: [
    {
      id: 3,
      title: "Exploring the Mountains",
      description: "Join us on a breathtaking journey to the peaks.",
      image: "/images/mountain.jpg",
    },
    {
      id: 4,
      title: "Hidden Beach Escapes",
      description: "Relax on the most secluded beaches.",
      image: "/images/beach.jpg",
    },
  ],
  allposts: function () {
    return [...this.categories, ...this.explore];
  },
};
