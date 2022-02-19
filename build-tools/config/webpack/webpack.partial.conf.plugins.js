const path = require('path');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

// const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser'});
// const page = await browser.newPage();
// await page.goto('https://fragcolor.com/Fragments-Foundation-Raises-to-Expand-Fragcolor');
// await browser.close();



module.exports = ({ config, isDevelopment, buildType }) => (webpackConfig) => {
  /*
   * ------------------------------------------------
   * Common plugins (for development and production)
   * ------------------------------------------------
   */
  const plugins = [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'staticRoot',
          to: '',
          globOptions: {
            ignore: ['.*'],
          },
        },
        {
          from: 'static',
          to: isDevelopment ? 'static' : config.dist.versionPath + 'static',
          globOptions: {
            ignore: ['.*'],
          },
        },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env': config.env[buildType],
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(
      isDevelopment
        ? {
            filename: config.devServer.indexHtml,
            template: 'index.html',
            inject: true,
            version: config.dist.versionPath,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: false,
            },
          }
        : {
            filename: 'index.html',
            template: 'index.html',
            version: '/',
            inject: true,
            cache: true,
          },
    ),
    // new PrerenderSPAPlugin({
    // //   // Required - The path to the webpack-outputted app to prerender.
    //   staticDir: path.join(__dirname, 'dist'),
    // //   // Required - Routes to render.
    //   routes: [ '/', '/Fragments-Foundation-Raises-to-Expand-Fragcolor'],
    // //   // renderer: new Renderer({
    // //   //   headless: true
    // //   // })
    // }),
  ];

  if (isDevelopment) {
    /*
     * ------------------------------------------------
     * Development-only plugins
     * ------------------------------------------------
     */
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      // note: the FriendlyErrorsWebpackPlugin is injected from webpack.conf.dev.js
    );
  } else {
    /*
     * ------------------------------------------------
     * Production-only plugins
     * ------------------------------------------------
     */
    plugins.push(
      new WebpackCleanupPlugin(),
      new MiniCssExtractPlugin({
        filename: path.posix.join(config.dist.versionPath, 'css/[name].css'),
      }),
      new LodashModuleReplacementPlugin({
        paths: true,
      }),
      new webpack.NamedChunksPlugin(),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          parser: require('postcss-safe-parser'),
          discardComments: {
            removeAll: true,
          },
        },
      }),
    );

    if (config.enableBundleAnalyzer) {
      plugins.push(
        new BundleAnalyzerPlugin({
          defaultSizes: 'gzip',
        }),
      );
    }

    if (config.dist.generateIcons) {
      plugins.push(
        new FaviconsWebpackPlugin({
          logo: path.join(config.projectRoot, 'static/image/favicon.png'),
          prefix: config.dist.versionPath + 'static/favicon/',
          emitStats: false,
          persistentCache: false,
          inject: true,
          background: '#fff',
          title: '',
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: true,
            twitter: true,
            yandex: true,
            windows: true,
          },
        }),
      );
    }
  }

  return {
    ...webpackConfig,
    plugins,
  };
};
