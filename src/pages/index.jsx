import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../stylesheets/index.scss"
import "normalize.css"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <main style={{ display: "grid" }}>
      <StaticImage
        style={{
          gridArea: "1/1",
        }}
        quality={100}
        placeholder="blurred"
        layout="fullWidth"
        alt=""
        src={"../images/pexels-felix-mittermeier-2832039.jpg"}
        formats={["auto", "webp", "avif"]}
      />
      <Layout></Layout>
    </main>
  )
}

export default IndexPage
