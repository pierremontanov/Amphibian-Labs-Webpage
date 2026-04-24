import { Suspense, lazy } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy-load non-home pages for code splitting
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const RepositoriesPage = lazy(() => import("./pages/RepositoriesPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogArticlePage = lazy(() => import("./pages/BlogArticlePage"));
const DonatePage = lazy(() => import("./pages/DonatePage"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:slug" element={<ServiceDetailPage />} />
                <Route path="/repositories" element={<RepositoriesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogArticlePage />} />
                <Route path="/donate" element={<DonatePage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
