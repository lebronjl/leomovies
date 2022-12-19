import React from "react";
import { SectionKeys } from "../../models/section-keys";
import styles from "./index.module.css";

interface IProps {
  activeSectionKey: SectionKeys;
  onSectionSelected: (sectionKey: SectionKeys) => void;
}

export const NavigationBar: React.FC<IProps> = ({
  activeSectionKey,
  onSectionSelected,
}) => {
  const setSection = (sectionKey: SectionKeys) => {
    onSectionSelected(sectionKey);
  };

  const sections: { text: string; key: SectionKeys }[] = [
    {
      text: "Search",
      key: SectionKeys.Search,
    },
    {
      text: "Favourites",
      key: SectionKeys.Favourites,
    },
    {
      text: "Watch later",
      key: SectionKeys.WatchLater,
    },
  ];

  return (
    <nav role="navigation" className={styles.navbar}>
      <ul role="tablist" className={styles.navbarList}>
        {sections.map((section, index) => {
          const isSelected = activeSectionKey === section.key;
          return (
            <li
              key={index}
              role="tab"
              aria-selected={isSelected}
              id={section.key}
              className={`${styles.listItem} ${
                isSelected ? styles.listItemActive : ""
              }`}
              onClick={() => {
                setSection(section.key);
              }}
            >
              {section.text}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
