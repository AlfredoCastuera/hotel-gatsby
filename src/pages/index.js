// Step 1: Import React
import * as React from "react"
import { Link } from "gatsby"
import MyLayout from "../components/MyLayout"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <MyLayout pageTitle="home">
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </MyLayout>
  )
}

// Step 3: Export your component
export default IndexPage
