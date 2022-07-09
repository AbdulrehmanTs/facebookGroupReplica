import React from 'react'
import Header from './Header'
import ModeratorHeader from './ModeratorHeader'
import SpecialHeader from './SpecialHeader'

const Layout = ({ children, user }) => {
  return (
    <>
      <SpecialHeader user={user} />
      <Header />
      {children}
    </>
  )
}

export default Layout