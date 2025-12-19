"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function Breadcrumbs({ className }: { className?: string }) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-muted-foreground", className)}>
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="flex items-center gap-2 hover:text-foreground">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;
          
          let label = capitalize(segment.replace(/-/g, ' '));
          if (isLast && pathSegments[index-1] === 'assets' || pathSegments[index-1] === 'tickets') {
            // For detail pages, show the entity type instead of the ID
            label = `${capitalize(pathSegments[index-1]).slice(0, -1)} Detail`;
          }

          return (
            <React.Fragment key={href}>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li>
                <Link
                  href={href}
                  className={cn(
                    "hover:text-foreground",
                    isLast && "font-medium text-foreground pointer-events-none"
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
