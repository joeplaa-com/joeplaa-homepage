import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { ImageProps, ImageFixedNodeProps } from '../types'

const ImageLogo = ({ src, ...rest }: ImageProps) => {
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
        () => data.images.edges.find(({ node }: ImageFixedNodeProps) => src === node.relativePath),
        [data, src]
    );

    if (!match) return null;

    const { node: { childImageSharp, publicURL, extension } = {} } = match as ImageFixedNodeProps;

    if (extension === 'svg' || !childImageSharp) {
        return <img src={publicURL} {...rest} />;
    }

    return <Img fixed={childImageSharp.fixed} {...rest} />;
};

export default ImageLogo;