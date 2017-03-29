import { assign } from './utils'

// Fire Fly

// new Firefly({
//     combin: true || true,
//     ignore: [/Script error/i],
//     sampling: 0.1,
//     daymax: 5,
//     delay: 1000,
//     url: String // string or auto get
//     platform: 'customer platform',
//     beforeSend: (err) => {

//     },
//     afterSend: (err) => {

//     }
// })

const _config = {
    combin: true,
    ignore: [/Script error/i],
    sampling: 0.1,
    daymax: 5,
    delay: 1000,
    url: true,
    platform: ''
}


class Firefly {
    constructor (err) {

    }
}

class Bugfly {
    constructor (config) {
        this._config = assign({}, config)
        this.state = {
            bugQueue: [],
            user: {},
            envInfo: {},
            benchInfo: {}
        }
        window.onerror = (message, url, line, column, error) => {
            console.log(arguments)
            let deep = 5
            let stack = []
            while (deep) {
                deep--
                stack.push(e.callee.caller)
            }
            console.log('stack', stack)
        }
    }

    errorListener (err) {

    }

    genEnvInfo () {

    }

    send () {

    }
}

const bugflying = new Bugfly()

setTimeout(() => {
    a = b
}, 200)

export default bugflying
