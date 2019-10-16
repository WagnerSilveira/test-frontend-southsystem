const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env) => {
    return {
        entry: './src/index.js',
        output: {
        filename: './public/bundle.js',
        },
        devServer: {
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
            
                },
                {   
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({ template: 'src/template/index.html' }),
            new Dotenv({
                path: env.NODE_ENV === 'development' 
                            ? './environments/.env.development'
                            : './environments/.env.production'
                            
            })
        ]
  }
}