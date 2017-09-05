import React from 'react'
import styled from 'styled-components'

const App = styled.div`
  height: 100vh;
  width: 100%;
  color: ${p => p.theme.color.font};
`

const MainWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const Main = styled.div`
  display: inline-block;
  float: left;
  max-width: ${p => p.theme.width};
  min-width: 1200px;
  font-family: ${p => p.theme.fontFamily};
`

export default ComposedComponent => class DefaultPage extends React.Component {
  static async getInitialProps (ctx) {
    const composedInitialProps = ComposedComponent.getInitialProps && await ComposedComponent.getInitialProps(ctx)
    return {
      ...composedInitialProps,
    }
  }

  render () {
    return (
      <App>
        <MainWrapper className="main-wrapper">
          <Main>
            <ComposedComponent {...this.props} />
          </Main>
        </MainWrapper>
      </App>
    )
  }
}
