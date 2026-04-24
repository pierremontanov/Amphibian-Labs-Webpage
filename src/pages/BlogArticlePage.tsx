import { useParams, Link } from "react-router-dom";

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link to="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground capitalize">{slug?.replace(/-/g, " ")}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 capitalize">
          {slug?.replace(/-/g, " ")}
        </h1>
        <p className="text-muted-foreground">
          Article content coming in Phase 4.
        </p>
      </div>
    </div>
  );
}
