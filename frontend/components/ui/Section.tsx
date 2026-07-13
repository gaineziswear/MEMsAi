import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  heading?: string;
  subheading?: string;
}

export function Section({
  children,
  heading,
  subheading,
  className,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      {heading && (
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-clip-text text-transparent">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              {subheading}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
