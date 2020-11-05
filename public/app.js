//Components 
const Navigation = Vue.component('navigation', {
    template: '#navigation',
    data(){
        return {
            classMenuMobile: 'nav-links-mobile none'
        }
    },
    created(){},
    methods: {
        async toggleMobile(){
            const navLinks = document.getElementById('navLinks')
            const none = 'nav-links-mobile none'
            const block = 'nav-links-mobile'

            this.classMenuMobile === 'nav-links-mobile none' ? this.classMenuMobile = block : this.classMenuMobile = none
        },
    }
})
//Rotas
const Home = {
    template: '#home',
    data(){
        return {
            titulo: 'VueJs'
        }
    },
    created(){
      setInterval(this.scrollEnd(),1000)
      //this.scrollEnd()
    },
    methods: {
      scrollEnd(){
        const messagems = document.getElementById("messagemsCard")
        messagems.scrollTop = messagems.scrollHeight
      }
    }
}

const Info = {
    template: '#info',
    data(){
        return {

        }
    },
    created(){},
    methods: {}
}

const routes = [
    { path:'/', component: Home },
    { path:'/info', component: Info },
]

const router = new VueRouter({ mode: 'history', routes })

const app = new Vue({
    el:'#app',
    components: { Navigation },
    router,
    data(){
        return {
            
        }
    }
})