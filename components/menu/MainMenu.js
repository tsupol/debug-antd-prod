import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: ${p => p.theme.width};
  padding: 24px 0 8px 0;
  position: relative;
  border-bottom: 1px solid #000;
  margin: 0 0 32px 0;
`

const HeaderLink = styled.a`
  font-size: 1.5rem;
  margin-right: 16px;
`

const linksList = [
  {href: '/index', text: 'Index'},
  {href: '/page-with-form', text: 'Page With Form'},
]

const isFunction = (functionToCheck) => {
  let getType = {}
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
}

export const generateLinks = (links, url) => {
  return links.map(l => {
    const href = l.actualHref || l.href
    const as = l.actualHref ? l.href : null
    const key = l.key || l.href
    return (
      <Link prefetch key={key} href={href} as={as}>
        <HeaderLink
          className="header-link"
          isActive={!l.noActive && (url.pathname === l.href)}
          href={l.href}
        >
          {
            l.component ? l.component(loggedUser, url) : l.text
          }
        </HeaderLink>
      </Link>
    )
  })
}

const Header = ({url}) => {
  return (
    <Wrapper>
      {generateLinks(linksList, url)}
    </Wrapper>
  )
}

export default Header
