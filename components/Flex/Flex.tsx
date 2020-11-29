import React from "react";

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Flex: React.FC<FlexProps> = ({
  className,
  children,
  as: Component = "div",
}) => <Component className={`flex ${className}`}>{children}</Component>;
