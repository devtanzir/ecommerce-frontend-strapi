// Define a type for possible color keys
export type ColorKey = "white" | "black" | "red" | "blue" | "green" | "yellow" | "orange";

// Define a type for possible color class values
type ColorClass = "bg-white" | "bg-black" | "bg-red-500" | "bg-blue-500" | "bg-green-500" | "bg-yellow-500" | "bg-orange-500";

// Define a record type for the colors object
type Colors = Record<ColorKey, ColorClass>;

// Example colors object
export const colors: Colors = {
  white: "bg-white",
  black: "bg-black",
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  orange: "bg-orange-500"
};

