import LayoutAapp from "@/components/features/layout/layout-app";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutAapp>
        {children}
    </LayoutAapp>
  );
}
