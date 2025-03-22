import adventureImg from "@/public/1 (1).jpg";
import luxuryImg from "@/public/1 (2).jpg";
import mountainImg from "@/public/1 (3).jpg";
import beachImg from "@/public/1 (4).jpg";

export const postData = {
  categories: [
    {
      id: 1,
      title: "Adventure Travel",
      description: "Experience the thrill of adventure.",
      image: adventureImg, // Imported image
    },
    {
      id: 2,
      title: "Luxury Retreats",
      description: "Discover the most luxurious getaways.",
      image: luxuryImg, // Imported image
    },
  ],
  explore: [
    {
      id: 3,
      title: "Exploring the Mountains",
      description: "Join us on a breathtaking journey to the peaks.",
      image: mountainImg, // Imported image
    },
    {
      id: 4,
      title: "Hidden Beach Escapes",
      description: "Relax on the most secluded beaches.",
      image: beachImg, // Imported image
    },
  ],
  allposts: function () {
    return [...this.categories, ...this.explore];
  },
};
