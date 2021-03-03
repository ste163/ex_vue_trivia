export default function SetColorTheme(currentTheme) {
  const root = document.documentElement.style;

  if (currentTheme === "light") {
    console.log("light theme");
    // root.setProperty("--black", "#161419");
    // root.setProperty("--lightestBlack", "#19171c");
    // root.setProperty("--lighterBlack", "#25222a");
    // root.setProperty("--lightBlack", "#161419");
    // root.setProperty("--fontWhite", "#e6e6e6");
    // root.setProperty("--yellow", "#e5e575");
    // root.setProperty(
    //   "--shadow",
    //   "-4px -4px 9px #201e24, 4px 4px 9px rgba(0, 0, 0, 0.1)"
    // );
    // root.setProperty(
    //   "--shadowInset",
    //   "inset -4px -4px 9px #201e24, inset 4px 4px 9px rgba(0, 0, 0, 0.1)"
    // );
  } else if (currentTheme === "dark") {
    console.log("dark theme");
    root.setProperty("--black", "#161419");
    root.setProperty("--lightestBlack", "#19171c");
    root.setProperty("--lighterBlack", "#25222a");
    root.setProperty("--lightBlack", "#161419");
    root.setProperty("--fontWhite", "#e6e6e6");
    root.setProperty("--yellow", "#e5e575");
    root.setProperty(
      "--shadow",
      "-4px -4px 9px #201e24, 4px 4px 9px rgba(0, 0, 0, 0.1)"
    );
    root.setProperty(
      "--shadowInset",
      "inset -4px -4px 9px #201e24, inset 4px 4px 9px rgba(0, 0, 0, 0.1)"
    );
  }
}
