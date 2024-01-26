import React from "react";

export default function Title({ title }: { title?: string }) {
  return (
    <p className="text-white text-lg max-[580px]:text-sm max-[400px]:text-[12px]">
      {title}
    </p>
  );
}
