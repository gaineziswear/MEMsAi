import { Container } from "@/components/ui/Container";

interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return <Container maxWidth="2xl" className="py-8">{children}</Container>;
}
