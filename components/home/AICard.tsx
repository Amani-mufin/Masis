"use client";

import React from "react";
import { AICardProps } from "./types";

const AICard: React.FC<AICardProps> = ({
  title,
  description,
  image,
  altText,
  badgeText,
  rating = "4.95",
  hasComments = true,
}) => {
  return (
    <article className="overflow-hidden relative bg-white rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.1)]">
      <span className="absolute left-4 px-3 py-1 text-xs rounded-[89px] text-purple-950 bg-white top-[17px] z-[1]">
        {badgeText}
      </span>
      <img
        src={image}
        className="object-cover w-full h-[189px]"
        alt={altText}
      />
      <div className="px-3.5 py-3.5">
        <h3 className="mb-3 text-2xl text-gray-950">{title}</h3>
        <p className="mb-2.5 text-sm text-gray-600">{description}</p>
        {(hasComments || rating) && (
          <div className="flex justify-between items-center">
            {hasComments && (
              <button className="gap-2.5 px-2.5 py-0 h-7 text-xs rounded-xl bg-neutral-200 text-zinc-600">
                Comments
              </button>
            )}
            {rating && (
              <span className="gap-1.5 text-xs text-zinc-600">{rating}</span>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default AICard;