import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";

import SEO from "../components/seo";

const Template = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={`${post.frontmatter.title}`} />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default Template;
