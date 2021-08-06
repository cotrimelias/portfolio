import * as React from "react"
import "normalize.css"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        // By using the same grid area for both, they are stacked on top of each other
        gridArea: "1/1",
        position: "relative",
        // This centers the other elements inside the hero component
        placeItems: "center",
        display: "grid",
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
