export default function SetColorTheme(currentTheme) {
  const root = document.documentElement.style;

  if (currentTheme === "light") {
    root.setProperty("--black", "#fcfcfc");
    root.setProperty("--lightestBlack", "#fbfbfb");
    root.setProperty("--lighterBlack", "#f5f5f5");
    root.setProperty("--lightBlack", "#e9e9e9");
    root.setProperty("--fontWhite", "#161616");
    root.setProperty("--yellow", "#919802");
    root.setProperty(
      "--shadow",
      "-4px -4px 9px #e1e1e1, 4px 4px 9px rgba(0, 0, 0, 0.1)"
    );
    root.setProperty(
      "--shadowInset",
      "inset -4px -4px 9px #e1e1e1, inset 4px 4px 9px rgba(0, 0, 0, 0.1)"
    );
  } else if (currentTheme === "dark") {
    root.setProperty("--black", "#161419");
    root.setProperty("--lightestBlack", "#19171c");
    root.setProperty("--lighterBlack", "#25222a");
    root.setProperty("--lightBlack", "#2d2933");
    root.setProperty("--fontWhite", "#e6e6e6");
    root.setProperty("--yellow", "#e5e575");
    root.setProperty(
      "--shadow",
      "-4px -4px 9px #201e24, 4px 4px 9px rgba(0, 0, 0, 0.1)"
    );
    root.setProperty(
      "--shadowInset",
      "inset -4px -4px 9px #262527,inset 4px 4px 9px rgba(0, 0, 0, 0.5)"
    );
  }
}
