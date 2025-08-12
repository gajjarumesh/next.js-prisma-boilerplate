export { default as Formatter } from "./Formatter";
export { default as Hasher } from "./Hasher";
export { default as JWT } from "./JWT";
export { default as Response } from "./Response";
export { default as Prisma } from "./Prisma";

export const generateOTP = (length = 6) => {
  return Math.floor(100000 + Math.random() * 900000)
    .toString()
    .slice(0, length);
};
