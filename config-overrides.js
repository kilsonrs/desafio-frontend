// const { injectBabelPlugin } = require('react-app-rewired');

// const rootImport = [
//   'root-import',
//   {
//     rootPathPrefix: '~',
//     rootPathSuffix: 'src',
//   },
// ];

// module.exports = config => injectBabelPlugin(rootImport, config);


const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'root-import',
    {
      rootPathPrefix: '~',
      rootPathSuffix: 'src',
    },
  ]),
);
