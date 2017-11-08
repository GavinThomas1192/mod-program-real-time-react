// eslint-disable no-console
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'prduction';

console.log('Now creating minified bundle for production via Webpack...'.blue);

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(err);
        return 1
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log
            (error.red));
    }

    if (jsonStats.hasWarnings) {
        console.log('Webpack generated the following warnings:'.bold.yellow);
        jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    console.log(`Webpack Statistics: ${stats}`);
    console.log('Your app has been compiled successfully in prduction mode'.green);

    return 0;
});