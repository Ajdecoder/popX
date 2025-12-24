import clsx from "clsx";

export default function Button({ text, className, ...props }) {
  return (
    <button
      {...props}
      className={clsx(
        "w-full py-3 rounded-md font-semibold mb-3 transition",
        className
      )}
    >
      {text}
    </button>
  );
}
