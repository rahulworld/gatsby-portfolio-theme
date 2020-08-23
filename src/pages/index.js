import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CustomCard from "../components/card"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row>
      <Col md="6">
        <CustomCard cardTitle="Profile" description="My Profile" redirectPage="profile" imageName='rahulworld.jpeg' />
      </Col>
      <Col md="6">
        <CustomCard cardTitle="Experience" description="Professional Experience" redirectPage="experience" imageName='rahulworld.jpeg' />
      </Col>
    </Row>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
     */}
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
