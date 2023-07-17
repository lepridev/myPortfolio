import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx(className, "w-full  md:max-w-5xl md:my-4 mx-auto")}>
      {children}
    </div>
  );
};

export default Container;
