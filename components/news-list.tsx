import Link from 'next/link';

export default function NewsList({ news }: { readonly news: readonly { id: string; title: string; image: string; slug: string }[] }) {

  if (!news.length) {
    return <p>No news found.</p>;
  }

  return (
    <ul className="news-list">
      {news?.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
