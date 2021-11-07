// module.exports = {
//     publicPath: '',
//     chainWebpack: (config) => {
//         const svgRule = config.module.rule('svg');
    
//         svgRule.uses.clear();
    
//         svgRule
//         //   .use('vue-loader')
//         //   .loader('vue-loader') // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
//         //   .end()
//         //   .use('vue-svg-loader')
//         //   .loader('vue-svg-loader');
//             .rule('svg')
//             .oneOf('inline-svg')
//             .resourceQuery(/inline/)
//             .use('babel')
//                 .loader('babel-loader')
//                 .end()
//             .use('vue-svg-loader')
//                 .loader('vue-svg-loader')
//                 .end()
//             .end()
//             .oneOf('file')
//             .use('file-loader')
//                 .loader('file-loader')
//                 .end()
//             .end()
//       },
// }
module.exports = {
    chainWebpack: config => {
      config.module.rules.delete("svg");
    },
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.svg$/, 
            loader: 'vue-svg-loader', 
          },
        ],
      }      
    }
  };