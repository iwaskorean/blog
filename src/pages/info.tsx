import { graphql } from 'gatsby';

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}

export default function info({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}: Props) {
  // const { title, author, description } = useStaticQuery(metadataQuery).site.siteMetadata;

  return (
    <div>
      <h2>{title}</h2>
      <h2>{description}</h2>
      <h2>{author}</h2>
    </div>
  );
}

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
