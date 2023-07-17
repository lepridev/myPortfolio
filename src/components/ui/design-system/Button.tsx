import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  size = "small",
  className,
}: Props) => {
  let variantStyle: string = "";
  let sizeStyle: string = "";

  switch (variant) {
    case "primary":
      variantStyle = "bg-[#EAE2B7] text-[#003049] font-semibold shadow-sm";
      break;
    case "secondary":
      variantStyle = "bg-[#F77F00] text-[#fff] font-semibold";
      break;
    case "outline":
      variantStyle = "border-2 border-[#003049] text-[#EAE2B7]";
  }

  switch (size) {
    case "small":
      sizeStyle = "px-6 py-2 text-[14px]";
      break;
    case "medium":
      sizeStyle = "px-7 py-3 text-[14px]";
      break;
    case "large":
      sizeStyle = "px-9 py-3 text-[14px]";
      break;
  }

  return (
    <button
      className={clsx(
        variantStyle,
        sizeStyle,
        className,
        "rounded border-gray-700"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
