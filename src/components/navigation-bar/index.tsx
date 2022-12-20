import React, { useContext } from "react";
import { AppContext } from "../../context";
import { SectionKeys } from "../../models/section-keys";
import styles from "./index.module.css";

export const NavigationBar: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  
  const setSection = (sectionKey: SectionKeys) => {
    dispatch({ type: "SET_ACTIVE_SECTION", payload: sectionKey });
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
          const isSelected = state.activeSectionKey === section.key;
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
