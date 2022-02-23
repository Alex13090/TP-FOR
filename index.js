
const monApp = Vue.createApp({
    data() {
        return {
            allFilms: [],
            myFilm: '',
            view: true
        };
    },

    methods: {
        addFilm(){
            this.allFilms.push(this.myFilm);
            this.myFilm = '';
        },

        displayList(){
            this.view = !this.view;
        },

        deleteFilm(index){
            this.allFilms.splice(index, 1);
        }
    }, 
    computed: {
        filmList(){
            if(this.view){
                return 'showList';
            }
    
            if(!this.view){
                return 'hideList';
            }
        }  
    }
});
monApp.mount('#app');