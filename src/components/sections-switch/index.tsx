import React from "react";
import { SectionKeys } from "../../models/section-keys";
import { SectionFavourites } from "../section-favourites";
import { SectionSearch } from "../section-search";
import { SectionWatchLater } from "../section-watch-later";
import styles from "./index.module.css";

interface IProps {
  activeSectionKey: SectionKeys;
}

export const SectionsSwitch: React.FC<IProps> = ({ activeSectionKey }) => {
  const renderContent = () => {
    switch (activeSectionKey) {
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
