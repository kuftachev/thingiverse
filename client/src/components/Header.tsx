import React from 'react'
import {Link} from '@reach/router'
import styled from '@emotion/styled'

export default function Header() {
  return (
    <header className="app-header">
      <div className="container">
        <LinkWrapper>
          <Link to="/" className="app-header__link">Home</Link>
        </LinkWrapper>
      </div>
    </header>
  )
}

const LinkWrapper = styled.div`
  padding-top: 20px;
`