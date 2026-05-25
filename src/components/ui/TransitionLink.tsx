"use client";

import { useRouter } from "next/navigation";
import { usePageTransition } from "@/components/PageLoader";
import type { ReactNode, AnchorHTMLAttributes } from "react";

interface TransitionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export function TransitionLink({ href, children, onClick, ...props }: TransitionLinkProps) {
  const router = useRouter();
  const { startTransition } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.(e);
    startTransition(() => router.push(href));
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
