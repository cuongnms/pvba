export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="max-w-[1200px] mx-auto px-4">{children}</main>
    </>
  );
}
