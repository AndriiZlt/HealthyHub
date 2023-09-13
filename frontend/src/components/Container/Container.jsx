// import css from "./Container.module.css";

const queries = ["(min-width:834px)", "(min-width:1440px)"];

const Container = ({ children }) => {
  const tablet = window.matchMedia("(min-width:834px)").matches;
  const desktop = window.matchMedia("(min-width:1440px)").matches;
  console.log("tablet", tablet, desktop);
  if (desktop) {
    return <div style={{ width: 1440 }}>This is what you see on desktop!</div>;
  }
  if (tablet) {
    return <div style={{ width: 834 }}>This is what you see on mobile!</div>;
  }

  if (!tablet && !desktop) {
    return <div style={{ width: 320 }}>This is what you see on mobile!</div>;
  }
};

export default Container;
