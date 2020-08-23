import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import Img from "gatsby-image"


// graphql`
//   query {
//     allImageSharp {
//       edges {
//         node {
//           id
//           fluid(maxWidth: 200, maxHeight: 200) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `

// allImageSharp {
//     edges {
//       node {
//         id
//         fluid(maxHeight: 200, maxWidth: 200) {
//           src
//           srcSet
//           base64
//           aspectRatio
//           originalImg
//           sizes        
//         }
//       }
//     }
//   }

const CustomCard = (props) => {
    const data = useStaticQuery(graphql`
        query {
            allImageSharp {
                edges {
                  node {
                    id
                    fluid(maxHeight: 300, maxWidth: 300) {
                      src
                      originalName
                      sizes
                      ...GatsbyImageSharpFluid        
                    }
                  }
                }
              }
        }
    `)
    const cardImageFluid = data.allImageSharp.edges.filter((image) => image.node.fluid.originalName === props.imageName)[0]?.node.fluid;
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{props.cardTitle}</CardTitle>
                    {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                </CardBody>
                <Img fluid={cardImageFluid} alt={props.imageName} />
                <CardBody>
                    <CardText>{props.description}</CardText>
                    {/* <CardText>{props.description}</CardText> */}
                    {/* <CardLink href="#">Card Link</CardLink> */}
                    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
                    <Link to={`/${props.redirectPage}/`}>View Full {props.redirectPage.charAt(0).toUpperCase() + props.redirectPage.slice(1)}</Link> <br />
                </CardBody>
            </Card>
        </div>)
    }
CustomCard.propTypes = {
    cardTitle: PropTypes.string,
    imageName: PropTypes.string,
    cardImage: PropTypes.object,
    description: PropTypes.string,
    redirectPage: PropTypes.string,
}
  
CustomCard.defaultProps = {
    cardTitle: 'Rahul',
    imageName: 'rahulworld',
    description: 'Full Stack Developer',
    redirectPage: '/',
}
  
export default CustomCard
  