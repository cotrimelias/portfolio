import * as React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Canvas from '../components/canvas'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Canvas />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
