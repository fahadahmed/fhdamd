import { gql } from '@apollo/client'
import { marked } from 'marked';
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

type PageProps = {
  params: {
    slug: string;
  }
}

const postTitle = css({
  fontFamily: 'inter',
  fontSize: '2rem',
  fontWeight: '600',
  lg: {
    fontSize: '3rem',
    fontWeight: '700'
  }
})

const postContainer = css({
  padding: '0',
  lg: {
    padding: '2rem'
  }
});

export async function generateMetadata(
  { params }: PageProps) {
  const slug = params.slug;
  const { data } = await getClient().query({
    query,
    variables: { slug },
  });
  const post = data.posts.data[0].attributes;
  return {
    title: post.title
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const { data } = await getClient().query({
    query,
    variables: { slug },
  });
  const post = data.posts.data[0].attributes;
  return (
    <div className={postContainer}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className={postTitle}>{post.title}</h1>
        <div style={{ margin: '2rem 0', borderTop: '1px solid #efefef', borderBottom: '1px solid #efefef', padding: '1rem 0' }}>
          {post.tags.data.map((tag: any) => (
            <Tag key={tag.id} label={tag.attributes.title} />
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: marked(post.content) }}></div>
      </div>
    </div>
  )
}