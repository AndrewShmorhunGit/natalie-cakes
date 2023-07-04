declare module "*.jpg" {
  const path: string;
  export default path;
}

declare module "*.png" {
  const path: string;
  export { path };
}

// declare module "*.jpg";
// declare module "*.png";
