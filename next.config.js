const path = require('path');
const withLess = require("next-with-less");
const withCss = require('@zeit/next-css');
const resolve = dir => path.resolve(__dirname, dir);

const { withPlugins, optional } = require('next-compose-plugins');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = withPlugins(
    [
        [optional(() => require('@next/bundle-analyzer')({
            enabled: process.env.ANALYZE === 'true'
        })), [PHASE_DEVELOPMENT_SERVER]]
    ],
    withLess({
        lessLoaderOptions: {
            lessOptions: {
                modifyVars: {
                    "@primary-color": "#c678dd",
                    "@border-radius-base": ".5em"
                }
            }
        }
    }),
    // withLess(withCss({
    //     lessLoaderOptions: {
    //         lessOptions: {
    //             modifyVars: {
    //                 "@primary-color": "#c678dd",
    //                 "@border-radius-base": ".5em"
    //             }
    //         }
    //     }
    // })),
    {
        webpack: (config, options) => {
            config.module.rules.push({
                resolve: {
                    alias: {
                        '@assets': resolve('./assets'),
                        '@components': resolve('./components'),
                        '@utils': resolve('./utils')
                    }
                },
            })
            return config;
        }
    }
);


// const withLess = require('@zeit/next-less');
// const WithCss = require('@zeit/next-css');
 
// // fix: prevents error when .less files are required by node
// if (typeof require !== 'undefined') {
//   require.extensions['.less'] = file => {};
// }
 
// module.exports = withLess(
//   WithCss({
//     lessLoaderOptions: {
//       modifyVars: {
//         'primary-color': '#1DA57A'
//       },
//       javascriptEnabled: true
//     }
//   })
// );



// module.exports = withPlugins(plugins, {
//     basePath: '/cms',
// });
