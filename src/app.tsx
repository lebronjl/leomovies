import React, { useState } from "react";
import { NavigationBar } from "./components/navigation-bar";
import { SectionsSwitch } from "./components/sections-switch";
import { SectionKeys } from "./models/section-keys";

export const App: React.FC = () => {
  const [activeSectionKey, setActiveSectionKey] = useState(SectionKeys.Search);

  return (
    <>
      <NavigationBar
        activeSectionKey={activeSectionKey}
        onSectionSelected={(sectionKey: SectionKeys) => {
          setActiveSectionKey(sectionKey);
        }}
      />
      <SectionsSwitch activeSectionKey={activeSectionKey} />
    </>
  );
};
