import { useParams, Link } from "react-router-dom";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground capitalize">{slug?.replace(/-/g, " ")}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 capitalize">
          {slug?.replace(/-/g, " ")}
        </h1>
        <p className="text-muted-foreground">
          Detailed service page coming in Phase 2.
        </p>
      </div>
    </div>
  );
}
