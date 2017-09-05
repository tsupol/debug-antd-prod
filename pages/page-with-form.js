import React from 'react'
import SellForm from '../components/sell/SellForm'
import page from '../hocs/page'

const Page = ({ loggedUser, id }) => (
  <div>
    <SellForm loggedUser={loggedUser} />
  </div>
)

Page.getInitialProps = ({ query: { id } }) => {
  return { id }
}

export default page(Page)
