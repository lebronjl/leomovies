import { SectionKeys } from "./section-keys";

export interface IAppContext {
    activeSectionKey: SectionKeys;
    query: string;
}