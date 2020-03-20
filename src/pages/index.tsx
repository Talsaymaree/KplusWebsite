import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { HomepagePropsQuery } from "../../graphql-types";

type Props = {
  data: HomepagePropsQuery;
};

const IndexPage = ({ data }: Props) => {
  let metadata;
  if (!data.contentfulPages) {
    return <div>No information from contentful</div>;
  }
  if (!data.contentfulPages.background) {
    return <div>no background provided</div>;
  }
  if (!data.contentfulPages.metadata) {
    return <p>no metadata</p>;
  } else {
    metadata = data.contentfulPages.metadata;
  }

  return (
    <Layout>
      <SEO
        title={data.contentfulPages.title || ""}
        lang="en"
        description={
          metadata.description?.content?.[0]?.content?.[0]?.value ?? "default"
        }
        meta={[]}
      />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img fluid={data.contentfulPages.background.fluid ?? undefined} />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export const PageQuery = graphql`
  query HomepageProps {
    __typename
    contentfulPages {
      title
      metadata {
        title
        updatedAt(fromNow: false)
        description {
          content {
            content {
              value
            }
          }
        }
      }
      background {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default IndexPage;
