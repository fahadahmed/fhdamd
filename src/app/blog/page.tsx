import { gql } from '@apollo/client';
import { Grid, Card } from "@/components";
import { getClient } from '@/libs/client'

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

export default async function Home() {

  const { data } = await getClient().query({
    query,
    context: {
      next: {
        revalidate: true
      }
    }
  });

  console.log(data);
  const issues = data.issues.data;
  console.log(issues);
  return (
    <div>
      <h1>My blog</h1>
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