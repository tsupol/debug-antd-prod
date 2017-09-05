import React from 'react'
import { ServerStyleSheet, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import theme from '../styles/theme'
// Styles
import scssStyles from '../styles/index.scss'
// comment this on production build
// import antStyle from '../styles/ant-theme-vars.less'
import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'

/**
 * see: https://github.com/plxel/nextjs-ant-design-custom-theme
 * https://github.com/zeit/next.js/issues/2524
 * for antd customization
 */

/*
 for development you can use this instead of link to extracted css
 <style dangerouslySetInnerHTML={{ __html: antStyles }} />
 */

export default ComposedComponent => class DefaultPage extends React.Component {
  static async getInitialProps (ctx) {
    const composedInitialProps = ComposedComponent.getInitialProps && await ComposedComponent.getInitialProps(ctx)
    return {
      ...composedInitialProps
    }
  }

  render () {
    const cssFiles = [
      'https://unpkg.com/normalize.css@5.0.0/normalize.css'
    ]
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
          {cssFiles.map((c, i) => <link key={i} href={c} rel='stylesheet'/>)}
          <link rel="stylesheet" href="/static/styles.css" />
          <style dangerouslySetInnerHTML={{ __html: scssStyles }}/>
          <style dangerouslySetInnerHTML={{ __html: carouselStyles }}/>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet"/>
          <title>Debug</title>
        </Head>
        <LocaleProvider locale={enUS}>
          <ThemeProvider theme={theme}>
            <ComposedComponent {...this.props} />
          </ThemeProvider>
        </LocaleProvider>
      </div>
    )
  }
}
