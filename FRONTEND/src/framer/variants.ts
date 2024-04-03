export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 0.6,
    },
  },
};
export const loginAni = {
  initial: { x: 350, opacity: 0 },
  animate: {
    x: 300,
    opacity: 1,
    transition: { type: "spring", duration: 3 },
  },
};
