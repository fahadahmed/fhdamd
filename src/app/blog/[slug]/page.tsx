import { gql } from '@apollo/client'
import { css } from '../../../../styled-system/css'
import { getClient } from '@/libs/client'
import { Tag } from '@/components';


const query = gql`
  query getPosts($slug: String!) {
    posts(filters:{ slug: { eq: $slug }}) {
      data {
        attributes {
          title
          summary
          content
          slug
          tags {
            data {
              attributes {
                title
              }
            }
          }
        }
      }
    }
  }
`;

type PagepProps = {
  params: {
    slug: string;
  }
}

const postTitle = css({
  fontFamily: 'inter',
  fontSize: '3rem',
  fontWeight: '700'
})
export default async function Page({ params }: PagepProps) {
  const { slug } = params;
  const { data } = await getClient().query({
    query,
    variables: { slug },
  });
  console.log(data.posts.data[0].attributes);
  const post = data.posts.data[0].attributes;
  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className={postTitle}>{post.title}</h1>
        <div style={{ margin: '2rem 0', borderTop: '1px solid #efefef', borderBottom: '1px solid #efefef', padding: '1rem 0' }}>
          {post.tags.data.map((tag: any) => (
            <Tag key={tag.id} label={tag.attributes.title} />
          ))}
        </div>
        <p style={{ fontSize: '1.25rem' }}>{post.content}</p>
      </div>
    </div>
  )
}