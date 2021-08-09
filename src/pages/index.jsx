import * as React from "react"
import "../stylesheets/index.scss"
import "../stylesheets/fonts.scss"
import "normalize.css"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <main>
      {/* <StaticImage
        quality={100}
        placeholder="blurred"
        layout="fullWidth"
        alt=""
        src={"../images/pexels-felix-mittermeier-2832039.jpg"}
        formats={["auto", "webp", "avif"]}
      /> */}
      <Layout>
        <div className={"headingStyle"}>
          <h1>
            Elias<br></br>Cotrim
          </h1>
        </div>
      </Layout>
    </main>
  )
}

export default IndexPage
