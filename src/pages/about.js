// Step 1: Import React
import * as React from "react"
import { Link } from "gatsby"
import MyLayout
 from "../components/MyLayout"// Step 2: Define your component
const AboutPage = () => {
  return (
    <MyLayout pageTitle="home">
      <Link to="/">Back to Home</Link>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </MyLayout>
  )
}

// Step 3: Export your component
export default AboutPage
