import Link from 'next/link'

export default function Home( {posts} ){
  return(
    <div>
      <h1>All pages:</h1>
      {
        posts.nodes.map(post => {
          return(
            <ul key={post.slug}>
              <Link href={`/${post.slug}`}>{post.title}</Link>
            </ul>
          )
        })
      }
    </div>
  )

}

export async function getStaticProps(){

  const res = await fetch('http://wp.addw.in/wp/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
          query HomePageQuery {
            posts {
              nodes {
                date
                slug
                title
              }
            }
          }
          `,
      })
  })

  const json = await res.json()

  return {
    props: {
        posts: json.data.posts,
    },
    revalidate: 10,
  }

}