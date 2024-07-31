import React from "react";

interface TitleProps {
    title: string;
  }

const BreadCrumb = ({title}:TitleProps) => {
  return (
    <div>
      <span className="underline decoration-[3px] font-bold decoration-teal underline-offset-8">
        {title}
      </span>
    </div>
  );
};

export default BreadCrumb;
