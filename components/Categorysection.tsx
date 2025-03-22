import React from "react";
import { postData } from "@/db/post";
import Postcard from "./ui/postcard";
const Categorysection = ({
  type,
}: {
  type: "categories" | "explore" | "all";
}) => {
  const posts = type === "all" ? postData.allposts() : postData[type];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Postcard
          key={post.id}
          title={post.title}
          description={post.description}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default Categorysection;
