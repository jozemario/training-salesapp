//const { withFederatedSidecar } = require('@module-federation/nextjs-ssr');
const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
    const location = isServer ? 'ssr' : 'chunks';
    return {
        home: `home@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
        //orders: `orders@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
        //itemcatalogue: `itemcatalogue@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
    };
};
module.exports = {
    webpack5: true,
    webpack(config, options) {
        config.plugins.push(
            new NextFederationPlugin(
                {
                    name: 'home',
                    filename: 'static/chunks/remoteEntry.js',
                    exposes: {
                        './nav': './components/nav.jsx',
                        './home': './async-pages/index.jsx',
                        './pages-map': './pages-map.js',
                    },
                    remotes: remotes(options.isServer),
                    shared: {
                        // react: {
                        //   // Notice shared are NOT eager here.
                        //   requiredVersion: false,
                        //   singleton: true,
                        // }
                    },
                    extraOptions: {
                        automaticAsyncBoundary: true,
                    },
                }
                // {
                //   experiments: {
                //     flushChunks: true,
                //     hot: true,
                //   },
                // },
            )
        );

        // config.externals.unshift(({ context, request }, callback) => {
        //   // Work-around for Prisma "Could not open datamodel file"  error
        //   if (request === 'prisma/client') {
        //     return callback(null, `commonjs ${prismaClientPath}`);
        //   }
        //   if (request === './runtime' && context === prismaClientPath) {
        //     return callback(null, `commonjs ${prismaClientPath}/runtime`);
        //   }
        //   callback();
        // });

        return config;
    },
};
