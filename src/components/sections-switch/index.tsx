import React, { useContext } from "react";
import { AppContext } from "../../context";
import { SectionKeys } from "../../models/section-keys";
import { SectionFavourites } from "../section-favourites";
import { SectionSearch } from "../section-search";
import { SectionWatchLater } from "../section-watch-later";
import styles from "./index.module.css";

export const SectionsSwitch: React.FC = () => {
  const { state } = useContext(AppContext);
  
  const renderContent = () => {
    switch (state.activeSectionKey) {
      case SectionKeys.Search:
        return <SectionSearch />;
      case SectionKeys.Favourites:
        return <SectionFavourites />;
      case SectionKeys.WatchLater:
        return <SectionWatchLater />;
    }
  };

  return <div className={styles.container}>{renderContent()}</div>;
};
