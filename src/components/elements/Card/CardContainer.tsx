import classNames from "classnames";

interface CardContainerProps {
  children: React.ReactNode;
  variantRounded: "lg" | "xl";
}

const CardContainer = ({ children, variantRounded }: CardContainerProps) => {
  const cn = classNames("bg-gradient-card px-4 py-4 backdrop-blur-lg", {
    "rounded-lg": variantRounded === "lg",
    "rounded-2xl": variantRounded === "xl",
  });

  return <div className={cn}>{children}</div>;
};

export default CardContainer;
