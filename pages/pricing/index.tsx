import Link from "next/link";
import { MainLayout } from '../../components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <h1>Pricing</h1>
      <h1 className="title">
        Ir a <Link href="/about"> Pricing</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/pricing.jsx</code>
      </p>
    </MainLayout>
  );
}
