import React from "react";

/** Title + description block used at the top of secondary pages. */
export function PageHeader({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="max-w-3xl">
      <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </header>
  );
}
