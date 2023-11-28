import { gql } from '@apollo/client';
import { Grid, Card } from "@/components";
import { getClient } from '@/libs/client'
import { css } from '../../../styled-system/css';

const query = gql`
  query {
    issues {
      data {
        id
        attributes {
          name
          number
          description
          desktopLayout
          latest
          posts {
            data {
              id
              attributes {
                title
                summary
                slug
                Order
                coverImage {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
                tags {
                  data {
                    id
                    attributes {
                      title
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const pageHeading = css({
  fontFamily: 'inter',
  fontSize: '2rem',
  fontWeight: '600',
  color: '#41424D',
  padding: '2rem 0',
  lg: {
    fontSize: '3rem',
    fontWeight: '700'
  }
})

export default async function Home() {

  const { data } = await getClient().query({
    query,
    context: {
      next: {
        revalidate: true
      }
    }
  });

  const issues = data.issues.data;
  return (
    <div>
      <h1 className={pageHeading}>My blog</h1>
      <Grid>
        {issues.map((issue: any) => (
          <Card
            key={issue.id}
            title={issue.attributes.name}
            description={issue.attributes.description}
            issue={issue.attributes.number}
            posts={issue.attributes.posts.data}
            latest={issue.attributes.latest}
          />
        ))}
      </Grid>
    </div>
  )
}