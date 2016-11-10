exports.install = function(Vue, Options) {
    const Init = {
        outOf: 1.3
    }

    const SaveQueue = []

    const throttle = function (action, delay) {
        let timeout = null
        let lastRun = 0
        return function () {
            if (timeout) {
                return
            }
            let elapsed = (+new Date()) - lastRun
            let context = this
            let args = arguments
            let runCallback = function () {
                    lastRun = +new Date()
                    timeout = false
                    action.apply(context, args)
                }
                
            if (elapsed >= delay) {
                runCallback()
            }
            else {
                timeout = setTimeout(runCallback, delay)
            }
        }
    }

    const _ = {
        on (type, func) {
            window.addEventListener(type, func)
        },
        off (type, func) {
            window.removeEventListener(type, func)
        }
    }

    const onListen = (start) => {
        if (start) {
            _.on('scroll', saveHandler)
            _.on('wheel', saveHandler)
            _.on('mousewheel', saveHandler)
            _.on('resize', saveHandler)
        } else {
            _.off('scroll', saveHandler)
            _.off('wheel', saveHandler)
            _.off('mousewheel', saveHandler)
            _.off('resize', saveHandler)
        }
    }

    const renderEl = (item) => {
        console.log('rene')
        if (item.showState) {
            item.el.style.height = item.rect.height + 'px'
            item.subEl.style.display = 'none'
        } else {
            item.subEl.style.display = 'block'
        }
        
    }

    const saveHandler = throttle(() => {
        for (let i = 0, len = SaveQueue.length; i < len; ++i) {
            checkCanHide(SaveQueue[i])
        }
    }, 300)

    let one = null

    const checkCanHide = (item) => {
        item.rect = item.el.getBoundingClientRect()
        if (!one) one = item
        
        if (item.rect.top + item.rect.height < 0 || item.rect.bottom > window.innerHeight) {
            item.showState = false
        } else {
            item.showState = true
        }
        renderEl(item)
    }

    const addListener = (el, bonding, vnode) => {
        let has = SaveQueue.find(item => {
            return item.el === el
        })

        if (has) return console.log('added')

        let rect = el.getBoundingClientRect()

        SaveQueue.push({
            el: el,
            subEl: el.getElementsByClassName(bonding.value)[0],
            rect: rect,
            showState: true
        })
        Vue.nextTick(() => {
            saveHandler()
        })
    }
    onListen(true)

    Vue.directive('save', {
        bind: addListener,
        update: addListener,
        componentUpdated: saveHandler
        // unbind : componentWillUnmount
    })
}