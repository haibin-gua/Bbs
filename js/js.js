
// axios.get(url + '/test')
//     .then((res)=>{
//         console.log(res)
//     })
var url = 'http:localhost:3000/api/bbs';
var app = new Vue({
    el: '#app',
    data: {
      Bbs:{
          name:'',
          username:'',
          password:''
      },
      err:''
    },
    methods: {
        register(){
            if(this.err.length == 0 && this.Bbs.length > 0){
                axios.post(url + '/register',this.Bbs)
                .then((res)=>{
                    console.log(res)
                })
        }
            }
    },
  })