"use client";
import { useState, useEffect } from "react";
import Image from 'next/image'

export default function Avatar({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  if (mounted && failed) {
    return (
      <div className="avatar">
        <span aria-hidden="true">{initials}</span>
      </div>
    );
  }

  return (
    <div className="avatar">
      <Image
        width={1080}
        height={1080}
        src={src}
        alt={`Foto de ${name}`}
        onError={() => {
          if (mounted) setFailed(true);
        }}
      />
    </div>
  );
}