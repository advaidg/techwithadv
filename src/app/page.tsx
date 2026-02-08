import { Hero } from "@/components/home/hero";
import { FounderSpotlight } from "@/components/home/founder-spotlight";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { LatestArticles } from "@/components/home/latest-articles";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts();

  const articles = posts.slice(0, 3).map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    tags: post.tags,
    readingTime: post.readingTime,
  }));

  return (
    <>
      <Hero />
      <FounderSpotlight />
      <FeaturedProjects />
      <LatestArticles articles={articles} />
    </>
  );
}
