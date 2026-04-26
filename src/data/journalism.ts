import { canadaArticles } from "@/data/journalism-canada";
import { chinaArticles } from "@/data/journalism-china";
import type { JournalismArticle } from "@/types/content";

export const allArticles: JournalismArticle[] = [...canadaArticles, ...chinaArticles];

export const geoArticles: JournalismArticle[] = allArticles.filter(
  (a): a is JournalismArticle & { coords: NonNullable<JournalismArticle["coords"]> } =>
    a.coords !== undefined,
);

export function getArticleById(id: string): JournalismArticle | undefined {
  return allArticles.find((a) => a.id === id);
}
