import { useSelector } from 'react-redux'
import { PostAuthor } from './PostAuthor'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <div>
          <PostAuthor userId={post.user} />
        </div>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ))

return (
  <section>
    <h2>Posts</h2>
    {renderedPosts}    
  </section>
)
}