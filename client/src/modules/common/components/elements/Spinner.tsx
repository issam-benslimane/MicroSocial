import { CSSProperties } from "react";

const styles: CSSProperties = {
  width: "20px",
  height: "20px",
  border: "2px solid #FFF",
  borderBottomColor: "transparent",
  borderRadius: "50%",
  display: "inline-block",
  boxSizing: "border-box",
};

const Spinner = () => {
  return <span style={styles} className="animate-spin" />;
};

export default Spinner;
