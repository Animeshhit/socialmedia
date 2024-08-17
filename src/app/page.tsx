import PostCard from "@/components/PostCard";
import React from "react";

const page = () => {
  return (
    <>
      <section className="mt-8">
        <div className="container mx-auto px-4">
          {Array.from({ length: 12 }).map((_, index: number) => {
            return <PostCard key={index} />;
          })}
        </div>
      </section>
    </>
  );
};

export default page;
