// Step 1: Import React
import * as React from "react"
import { Link } from "gatsby"
import MyLayout from "../components/MyLayout"
import { StaticImage } from "gatsby-plugin-image"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <MyLayout pageTitle="home">
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="imagen bien perrona"
        src="http://placekitten.com/g/500/500"
      />
    </MyLayout>
  )
}

// Step 3: Export your component
export default IndexPage
