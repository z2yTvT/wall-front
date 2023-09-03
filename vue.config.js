module.export = {
    devServer: {
        disableHostCheck: true,
        allowedHosts: [
        ],

    },
    configureWebpack:{
        externals:{
            'BMap': 'BMap'
        }
    }
  }