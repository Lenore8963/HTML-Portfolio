"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "@/components/ui/Lightbox";
import { Card, CardHeader, CardList } from "@/components/ui/Card";
import type { FamilyMember } from "@/types/content";

export function FamilyCard({ member }: { member: FamilyMember }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="mx-auto w-full max-w-3xl">
        <CardHeader>{member.name}</CardHeader>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative block aspect-video w-full overflow-hidden bg-muted"
          aria-label={`Open larger image: ${member.alt}`}
        >
          <Image
            src={member.image}
            alt={member.alt}
            fill
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover transition-transform duration-300 hover:scale-[1.02]"
          />
        </button>
        <CardList items={member.bullets} />
      </Card>
      <Lightbox
        src={open ? member.image : null}
        alt={member.alt}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
