// const [a , b] = [10 , 20, 3]
// console.log(a, b)

// const shapeProps = { x: 10, y: 20 };
// const newShape = { ...shapeProps, color: "Blue" };
// console.log(newShape);


// const { color, ...rest } = { color: "Red", x: 10, y: 20 };
// console.log(rest); 
// console.log(color)

// function shapeTag(strings, type, color) {
//   return `${strings[0]}${type.toUpperCase()}${strings[1]}${color}${strings[2]}`;
// }
// const type = "Circle";
// const color = "Blue";
// const message = shapeTag`Drawing a ${type} with color ${color}. le bhai `;
// console.log(message); 

// utils/shapeUtils.js
// Utility 1: Destructure and validate shape properties
export function validateShape({ id, x, y, color, ...rest }) {
  if (!id || typeof x !== "number" || typeof y !== "number" || !color) {
    throw new Error("Invalid shape properties");
  }
  return { id, x, y, color, ...rest }; // Return validated shape
}

// Utility 2: Merge default and custom shape configs using spread
export function createShapeConfig(defaultConfig, customConfig) {
  return { ...defaultConfig, ...customConfig };
}

// Utility 3: Format shape description using tagged template
export function formatShape(strings, ...values) {
    console.log(values)
  const [type, color] = values;
  console.log("KUsh hi ", values[0])
  return `${strings[0]}${type.toUpperCase()}${strings[1]}${color.toUpperCase()}`;
}

// Utility 4: Filter shapes by properties using rest
export function filterShapes(shapes, { color, ...filters }) {
  return shapes.filter((shape) => {
    if (color && shape.color !== color) return false;
    console.log("le iflter", Object.entries(filters))
    return Object.entries(filters).every(([key, value]) => shape[key] === value);
  });
}

// Example usage
const defaultConfig = { color: "Black", x: 0, y: 0 };
const customConfig = { id: 1, x: 50, y: 50, color: "Red" };
const shapeConfig = createShapeConfig(defaultConfig, customConfig);
console.log(shapeConfig); // { color: "Red", x: 50, y: 50, id: 1 }

try {
  const validShape = validateShape(shapeConfig);
  console.log(validShape); // { id: 1, x: 50, y: 50, color: "Red" }
} catch (error) {
  console.error(error.message);
}

const description = formatShape`Drawing a ${"Circle"} in ${"Blue"}.`;
console.log(description); // Drawing a CIRCLE in BLUE.

const shapes = [
  { id: 1, x: 50, y: 50, color: "Red", type: "Circle" },
  { id: 2, x: 100, y: 100, color: "Blue", type: "Rectangle" },
];
const filtered = filterShapes(shapes, { color: "Red", type: "Circle" });
console.log(filtered); // [{ id: 1, x: 50, y: 50, color: "Red", type: "Circle" }]