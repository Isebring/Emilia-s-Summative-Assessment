import { rem } from "@mantine/core";
import React from "react";

const getEmojiStyle = (color?: string) => ({
  width: rem(24),
  height: rem(24),
  color: color ? `var(--mantine-color-${color}-7)` : undefined,
});

const getEmoji = (value: number) => {
  const emojiStyle = getEmojiStyle();
  switch (value) {
    case 1:
      return <span style={emojiStyle}>😢</span>;
    case 2:
      return <span style={emojiStyle}>😔</span>;
    case 3:
      return <span style={emojiStyle}>😐</span>;
    case 4:
      return <span style={emojiStyle}>🙂</span>;
    case 5:
      return <span style={emojiStyle}>😄</span>;
    default:
      return null;
  }
};

export const EmojiRating: React.FC<{ value: number }> = ({ value }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", fontSize: "2rem" }}>
      {getEmoji(value)}
    </div>
  );
};
