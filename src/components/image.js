import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = props => (
  <StaticQuery
    query={graphql`
        {
            images: allS3ImageAsset {
                edges {
                    node {
                        Key
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }  
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.Key.includes(props.name);
      });
      if (!image) {
        return null;
      }

      return <Img alt="" fluid={image.node.childImageSharp.fluid} />;
    }}
  />
);

export default Image;