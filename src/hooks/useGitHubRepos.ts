import { useQuery } from "@tanstack/react-query";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  fork: boolean;
  archived: boolean;
}

async function fetchRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    "https://api.github.com/users/pierremontanov/repos?per_page=100&sort=updated",
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const repos: GitHubRepo[] = await res.json();

  // Filter out forks and archived repos
  return repos.filter((r) => !r.fork && !r.archived);
}

export function useGitHubRepos() {
  return useQuery({
    queryKey: ["github-repos", "pierremontanov"],
    queryFn: fetchRepos,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000,
    retry: 2,
  });
}
