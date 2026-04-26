import { Card, CardHeader, CardList } from "@/components/ui/Card";
import type { Hackathon } from "@/types/content";

export function HackathonCard({ item }: { item: Hackathon }) {
  return (
    <Card>
      <CardHeader>{item.title}</CardHeader>
      <CardList items={item.bullets} />
    </Card>
  );
}
