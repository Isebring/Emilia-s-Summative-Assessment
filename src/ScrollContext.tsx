import React, { createContext, RefObject, useContext, useRef } from "react";

type ScrollContextType = {
  scrollToReflections?: () => void;
  reflectionsRef?: RefObject<HTMLDivElement>;
};

const ScrollContext = createContext<ScrollContextType>({});

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const reflectionsRef = useRef<HTMLDivElement>(null);

  const scrollToReflections = () => {
    reflectionsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider value={{ scrollToReflections, reflectionsRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
