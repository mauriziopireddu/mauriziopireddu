import NextLink from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link = ({ href, children, className }: LinkProps) => (
  <NextLink href={href}>
    <a className={`italic underline font-bold ${className}`}>{children}</a>
  </NextLink>
);
