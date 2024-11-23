import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function NewsDetailsPage({ params }) {
  const article = DUMMY_NEWS.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${article?.image}`} alt={article?.title} />
        <h1>{article?.title}</h1>
        <time dateTime={article?.date}>{article?.date}</time>
      </header>
      <p>{article?.content}</p>
    </article>
  );
}
