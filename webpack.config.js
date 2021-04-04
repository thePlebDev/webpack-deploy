mode ="development"
if(process.env.NODE_ENV === "production"){
    mode = "production"
}

module.exports={
    mode:mode,
    module:{
        rules:[
           {
               test:/\.js$/, //for every .js files
               exclude:/node_modules/, //excluding the node_modules
               use:{
                   loader:"babel-loader", // use the babel-loader
               }
           }
        ]
    },
    devtool:"source-map",
    devServer:{
        contentBase:"./dist",
        port:9000
    }
}