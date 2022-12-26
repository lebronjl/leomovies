import React, { useContext } from "react";
import { AppContext } from "../../context";
import { SectionKeys } from "../../models/section-keys";
import { FavouriteIcon } from "../favourite-icon";
import { SearchIcon } from "../search-icon";
import { WatchLaterIcon } from "../watch-later-icon";
import styles from "./index.module.css";

export const NavigationBar: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  const setSection = (sectionKey: SectionKeys) => {
    dispatch({ type: "SET_ACTIVE_SECTION", payload: sectionKey });
  };

  const sections: { text: string; key: SectionKeys; icon: JSX.Element }[] = [
    {
      text: "Search",
      key: SectionKeys.Search,
      icon: <SearchIcon color="grey" />,
    },
    {
      text: "Favourites",
      key: SectionKeys.Favourites,
      icon: <FavouriteIcon color="grey" />,
    },
    {
      text: "Watch later",
      key: SectionKeys.WatchLater,
      icon: <WatchLaterIcon color="grey" />,
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
              {section.icon}
              {section.text}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
