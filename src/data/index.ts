import { practiceTaskSets } from './practiceTask';
import { correspondenceSets } from './correspondence';
import { diagramSets } from './diagram';
import { infoSets } from './information';
import { viewpointSets } from './viewpoints';
import { vocabWords } from './vocab';
import type { AnySet, SectionType } from '../types/content';

export { practiceTaskSets, correspondenceSets, diagramSets, infoSets, viewpointSets, vocabWords };

export const allSetsBySection: Record<SectionType, AnySet[] | typeof practiceTaskSets> = {
  practiceTask: practiceTaskSets,
  correspondence: correspondenceSets,
  diagram: diagramSets,
  information: infoSets,
  viewpoints: viewpointSets,
};

export function getSetsForSection(section: SectionType) {
  return allSetsBySection[section];
}

export function findSetById(id: string) {
  return [
    ...practiceTaskSets,
    ...correspondenceSets,
    ...diagramSets,
    ...infoSets,
    ...viewpointSets,
  ].find((s) => s.id === id);
}
