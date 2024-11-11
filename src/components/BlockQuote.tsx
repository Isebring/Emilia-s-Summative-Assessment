import { Blockquote } from '@mantine/core';
import { RxQuote } from 'react-icons/rx';
import '../css/MuddiestPoints.css';

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
      color="#e6be8a"
      cite="– Elizabeth Cady Stanton"
      icon={icon}
      mt="xl"
      // Apply the passed style here
      style={style}
    >
      We hold these truths to be self-evident: that all men and women are
      created equal.
    </Blockquote>
  );
}

export default Quote;
