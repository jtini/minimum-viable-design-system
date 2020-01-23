import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }: {siteTitle: string}) => (
  <header>
    <div>
      <h1>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
