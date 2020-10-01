import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';
import { AuthorProps } from '../types'

export default function Avatar({ name }: AuthorProps) {
    const data = useStaticQuery(graphql`
        query {
            images: allFile(
                filter: { internal: { mediaType: { regex: "/image/" } }, absolutePath: { regex: "/authors/" } }
            ) {
                edges {
                    node {
                        relativePath
                        extension
                        publicURL
                        childImageSharp {
                            fixed(width: 40) {
                                ...GatsbyImageSharpFixed_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);

    const slug = name.toLowerCase().replaceAll(' ', '-');
    const regex = new RegExp(slug);
    const image = data.images.edges.find(image => (regex.test(image.node.relativePath)));
    return (
        <div className='d-flex flex-row align-items-center'>
            <Img fixed={image.node.childImageSharp.fixed} alt={name} className='img-fluid mr-2 rounded-circle' />
            <div>{name}</div>
        </div>
    );
}