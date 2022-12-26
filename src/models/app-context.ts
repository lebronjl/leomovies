import { IMovie } from "./movie";
import { SectionKeys } from "./section-keys";

export interface IAppContext {
    activeSectionKey: SectionKeys;
    query: string;
    favouriteMovies: IMovie[],
    watchLaterMovies: IMovie[]
}