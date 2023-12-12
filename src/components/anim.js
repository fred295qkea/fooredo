export const menuSlide = {
  initial: {
    x: "100%",
  },
  enter: {
    x: "0%",
    transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1] },
  },
};

export const navSlide = {
  initial: {
    x: "800px",
  },
  enter: {
    x: "0px",
    transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1] },
  },
  exit: {
    x: "800px",
    transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1] },
  },
};
