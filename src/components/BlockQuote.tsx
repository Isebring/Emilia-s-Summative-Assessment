import { Blockquote } from "@mantine/core";
import { RxQuote } from "react-icons/rx";
import "../css/MuddiestPoints.css";

// Add style as a prop to the component
interface QuoteProps {
  style?: React.CSSProperties;
}

function Quote({ style }: QuoteProps) {
  const icon = <RxQuote />;
  return (
    <Blockquote
      className="title"
      iconSize={37}
      color="blue"
      cite="– Emilia Johansson"
      icon={icon}
      mt="xl"
      // Apply the passed style here
      style={style}
    >
      I have realized how much I actually enjoy history.
    </Blockquote>
  );
}

export default Quote;
