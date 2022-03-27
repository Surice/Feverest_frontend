export default {
    name: 'navbar',
    data: function(){
        return {
            toggle: false
        }
    },
    mounted() {
        let fontAwesome = document.createElement('script')
        fontAwesome.setAttribute('src', 'https://kit.fontawesome.com/732a3ed8e9.js')
        document.head.appendChild(fontAwesome)
    },
    methods: {
        dropdown() {
            return;
            if(!this.toggle){
                this.toggle = true;
                document.getElementById('dropdown-me-content').style.display = "flex";
            }else{
                this.toggle = false
                document.getElementById('dropdown-me-content').style.display = "none";
            }
        }
    }
}