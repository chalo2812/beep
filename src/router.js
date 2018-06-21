import VueRouter from 'vue-router'
import IonRouterView from './IonRouterView.vue'


export default class Router extends VueRouter {
    constructor(...args) {
        super(...args)
        this.direction = args.direction || 1
        this.viewCount = args.viewCount || 0
    }
    push(...args) {
        super.push(...args)
        this.direction = 1
        this.viewCount++
    }
    go(n) {
        super.go(n)
        this.viewCount += n
        this.direction = n > 0 ? 1 : -1
    }
    canGoBack() {
        // TODO: hook into history back event and -1 viewCount
        return this.viewCount > 0 && this.currentRoute.path.length > 1
    }
}

Router.install = function (Vue) {
    VueRouter.install(Vue)
    Vue.component('IonRouterView', IonRouterView)
}