const path = require('path')
const glob = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      // {
      //   test: /\.less$/,
      //   use: ['babel-loader', 'raw-loader', 'less-loader']
      // },
      // End: antd customization
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        // test: /\.(css|scss|sass|less)$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      },
      // Begin: antd customization
      {
        test: /\.(less)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: "css-loader!less-loader",
        })
        // use this for development - see here https://github.com/aoc/with-ant-design-custom-theme
        //use: ['babel-loader', 'raw-loader', 'less-loader']
      }
    )
    config.plugins.push(
      new ExtractTextPlugin(__dirname + '/static/styles.css')
    )
    return config
  }
}
