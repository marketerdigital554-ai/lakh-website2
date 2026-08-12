"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { ImageBlock } from "@/components/marketing/image-block";
import { Badge } from "@/components/ui/badge";
import { hoverLift } from "@/lib/motion-variants";
import type { ImageKey } from "@/lib/image-config";

interface ProjectCardProps {
  imageKey: ImageKey;
  name: string;
  location: string;
  capacityKw: number;
  status: "live" | "in-progress" | "planned";
}

const statusLabel: Record<ProjectCardProps["status"], string> = {
  live: "Live",
  "in-progress": "In progress",
  planned: "Planned",
};

const statusVariant: Record<ProjectCardProps["status"], "growth" | "solar" | "tech"> = {
  live: "growth",
  "in-progress": "solar",
  planned: "tech",
};

export function ProjectCard({
  imageKey,
  name,
  location,
  capacityKw,
  status,
}: ProjectCardProps) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={hoverLift}
      className="overflow-hidden rounded-lg border border-border bg-warm-white"
    >
      <ImageBlock imageKey={imageKey} aspect="video" rounded="none" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-navy">{name}</h3>
          <Badge variant={statusVariant[status]}>{statusLabel[status]}</Badge>
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-secondary">
          <MapPin className="h-4 w-4" aria-hidden />
          {location}
        </p>
        <p className="mt-3 text-sm font-semibold text-ink-primary">
          {capacityKw.toLocaleString()} kW capacity
        </p>
      </div>
    </motion.article>
  );
}
