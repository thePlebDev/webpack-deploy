const MiniCssExtractPlugin = require("mini-css-extract-plugin");

mode ="development"
if(process.env.NODE_ENV === "production"){
    mode = "production"
}

module.exports={
    mode:mode,
    module:{
        rules:[
            {
                test:/\.s?css$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader","postcss-loader","sass-loader"],
            },
           {
               test:/\.js$/, //for every .js files
               exclude:/node_modules/, //excluding the node_modules
               use:{
                   loader:"babel-loader", // use the babel-loader
               }
           }
        ]
    },

    plugins:[new MiniCssExtractPlugin()],
    devtool:"source-map",
    devServer:{
        contentBase:"./dist",
        hot:true,
        port:9000
    }
}