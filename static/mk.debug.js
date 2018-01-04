
require.config({
    paths: {
        'react': __require_base_url__ + 'react.development',
        'react-dom': __require_base_url__ + 'react-dom.development',
        'prop-types': __require_base_url__ + 'prop-types',
        'redux': __require_base_url__ + 'redux',
        'react-redux': __require_base_url__ + 'react-redux',
        "moment": __require_base_url__ + 'moment-with-locales',
        'lodash': __require_base_url__ + 'lodash',
        'immutable': __require_base_url__ + 'immutable',
        'echarts': __require_base_url__ + 'echarts',
        'FK': __require_base_url__ + 'fk-core',
        'FK.appLoader': __require_base_url__ + 'fk-app-loader',
        'FK.utils': __require_base_url__ + 'fk-utils',
        'FK.component': __require_base_url__ + 'fk-component',
        'FK.metaEngine': __require_base_url__ + 'fk-meta-engine',
        'mk-aar-grid': __require_base_url__ + 'mk-aar-grid',
        'mk-aar-form': __require_base_url__ + 'mk-aar-form',
    },
    shim: {
        FK: {
            deps: ['css!'+ __require_base_url__ +'mk.css']
        }
    },
    map: {
        '*': {
            css: __require_base_url__ + 'css.js'
        }
    },
    waitSeconds:0
})

require(['FK'], function (fk) {
    window.FK = fk
    window['mkReady'] &&  window['mkReady'](fk)
})
