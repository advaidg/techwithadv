import { Hero } from "@/components/home/hero";
import { HiringProfile } from "@/components/home/hiring-profile";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { LatestArticles } from "@/components/home/latest-articles";
import { ContactCta } from "@/components/home/contact-cta";
import { CareerSnapshot } from "@/components/home/career-snapshot";
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
      <HiringProfile />
      <FeaturedProjects />
      <CareerSnapshot />
      <LatestArticles articles={articles} />
      <ContactCta />
    </>
  );
}
