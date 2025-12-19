import { Header } from '@/components/layout/Header';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';

export function PageLayout({ title, children, headerActions }: { title: string; children: React.ReactNode; headerActions?: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col">
      <Header title={title}>
        {headerActions}
      </Header>
      <main className="flex-1 p-4 sm:p-6">
        <Breadcrumbs className="mb-4" />
        {children}
      </main>
    </div>
  );
}
