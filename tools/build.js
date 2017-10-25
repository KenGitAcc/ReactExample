import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via Webpack. This will take a moment...');

webpack(webpackConfig).run((err, status) => {
    if (err)
    {
        console.log(err.bold.red);
        return 1;
    }
    const jsonStatus = status.toJson();
    if (jsonStatus.hasErrors){
        return jsonStatus.errors.map(error => console.log(error.red));
    }

    if (jsonStatus.hasWarnings) {
        console.log('Webpack generated the following warnings: '.bold.yellow);
        jsonStatus.warnings.map(warning => console.log(warning.yellow));
    }

    console.log(`Webpack status: ${status}`);

    console.log('Your app has been compiled in production mode and written to /dist. It\'s read');

    return 0;
});