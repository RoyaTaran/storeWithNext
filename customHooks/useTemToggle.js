import { useState } from "react";
function useTemToggle() {
  const [isLightTem, setIsLightTem] = useState(true);

  const temToggleHandler = () => {
    if (isLightTem) {
      document.documentElement.style.setProperty("--bg-main-color", "#1b344d");
      document.documentElement.style.setProperty("--bg-dark-color", "#f3f4f6");
      document.documentElement.style.setProperty("--bg-card-color", "#0e2338");
      document.documentElement.style.setProperty("--bg-input-color", "#1b314c");
      document.documentElement.style.setProperty("--bg-nav-color", "#0c243f");
      document.documentElement.style.setProperty("--text-dark-color", "#fff");
      document.documentElement.style.setProperty(
        "--text-light-color",
        "#65a2ff"
      );
      setIsLightTem(false);
    } else {
      document.documentElement.style.setProperty("--bg-main-color", "#f3f4f6");
      document.documentElement.style.setProperty("--bg-dark-color", "#1b344d");
      document.documentElement.style.setProperty("--bg-card-color", "#fff");
      document.documentElement.style.setProperty("--bg-input-color", "#dfe6e9");
      document.documentElement.style.setProperty("--bg-nav-color", "#b2bec3");
      document.documentElement.style.setProperty("--bg-badge-color", "#ffa551");
      document.documentElement.style.setProperty(
        "--text-dark-color",
        "#223e57"
      );
      document.documentElement.style.setProperty(
        "--text-light-color",
        "#4b555f"
      );
      setIsLightTem(true);
    }
  };
  return [isLightTem, temToggleHandler];
}

export default useTemToggle;
