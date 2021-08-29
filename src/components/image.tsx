import React, { ReactElement, useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from './customLink';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ImageProps, ImageNodeProps } from '../types';

const Image = ({ src, to, alt, ...rest }: ImageProps): ReactElement | null => {
    const data = useStaticQuery(graphql`{
        images: allFile(
            filter: {internal: {mediaType: {regex: "/image/"}}, absolutePath: {regex: "/src/images/"}}
        ) {
            edges {
                node {
                    relativePath
                    extension
                    publicURL
                    childImageSharp {
                        gatsbyImageData(
                            breakpoints: [320, 640, 960, 1280, 1600]
                            layout: FULL_WIDTH
                        )
                    }
                }
            }
        }
    }`);

    const match = useMemo(
        () => data.images.edges.find(({ node }: ImageNodeProps) => src === node.relativePath),
        [data, src]
    );

    if (!match) return null;

    const { node: { childImageSharp, publicURL, extension } = {} } = match as ImageNodeProps;

    if (extension === 'svg' || !childImageSharp) {
        const svgImage = <img src={publicURL} alt={alt} {...rest} />;
        return to ? <Link to={to}>{svgImage}</Link> : svgImage;
    }

    const renderedImage = <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        objectFit="cover"
        objectPosition="50% 50%"
        alt={alt}
        {...rest} />;
    return to ? <Link to={to}>{renderedImage}</Link> : renderedImage;
};

export default Image;