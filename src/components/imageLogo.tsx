import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ImageLogo = ({ src, ...rest }) => {
    const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fixed(height:48)
              {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  `);

    const match = useMemo(
        () => data.images.edges.find(({ node }) => src === node.relativePath),
        [data, src]
    );

    if (!match) return null;

    const { node: { childImageSharp, publicURL, extension } = {} } = match;

    if (extension === 'svg' || !childImageSharp) {
        return <img src={publicURL} {...rest} />;
    }

    return <Img fixed={childImageSharp.fixed} {...rest} />;
};

export default ImageLogo;