import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";

export default function News() {
  return (
    <>
      <h1>News</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => {
          return (
            <li key={newsItem.id}>
              <Link href={`news/${newsItem.slug}`}>
                {newsItem.title}
                <Image
                  src={`/images/news/${newsItem.image}`}
                  alt={newsItem.title}
                  width={500}
                  height={500}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
