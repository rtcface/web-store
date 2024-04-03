import { titleFont } from "@/config/fonts";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}
export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1
        className={`${titleFont.className} antialiased text-4xl font-semibold my-7`}
      >
        {title}
      </h1>
      {
        subtitle && <h2 className="text-xl font-light mb-5">{subtitle}</h2> // If subtitle is provided, render it. Otherwise, don't render anything. This is a conditional rendering. It's a way to render something conditionally in React. It's a way to render something only if a condition is true. It's a way to render something only if a variable is defined. It's a way to render something only if a value is truthy. It's a way to render something only if a value is not null or undefined. It's a way to render something only if a value is not empty. It's a way to render something only if a value is not falsey. It
      }
    </div>
  );
};
