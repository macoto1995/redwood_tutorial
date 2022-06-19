import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

const truncate = (text: string, length: number) => {
  return text.substring(0, length) + '...'
}
interface Props {
  article: Post
  summary?: boolean
}
const Article = ({ article, summary = false }: Props) => {
  return (
    <article key={article.id}>
      <header>
        <Link to={routes.article({ id: article.id })}>{article.title}</Link>
      </header>
      <p>{summary ? truncate(article.body, 100) : article.body}</p>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
