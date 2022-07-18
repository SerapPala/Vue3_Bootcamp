const app = Vue.createApp({
    data() {
      return {
        title: "title 1" ,
        title2: "title 2",
        title3: "title 3",
        content: "Lorem ipsum dolor sit amet..",
        eduflow: {
          title: "Müfredat ve açıklamalar için tıklayınız",
          target: "_blank",
          url: "https://eduflow.kablosuzkedi.com",
          alt: "mufredat-kablosuzkedi-vue-bootcamp",
        },
        owner: "Pogaca",
        coords: {
          x: 0,
          y: 0,
        },
      };
    },
  methods: {
    changeTitle (){
        this.title = "bu değişmiş bir title 1 bilgisi"
    },
    changeTitle2 (){
        this.title2 = "bu değişmiş bir title 2 bilgisi"
    },

    changeTitleParametres (pTtitle){
        this.title = pTtitle
    },
    changeTitleParametres2 (pTtitle2){
        this.title2 = pTtitle2
    },

    changeBoxTitle (pTtitle3){
      this.title3 = pTtitle3
  },
  updateCoords(message, event){
   // console.log(message, event.x, event.y);
    this.coords = {
      x: event.x,
      y: event.y
    }
  }

  }
  }).mount("#app");
  // Vue2 Version
  // new Vue({
  // el : "#app",
  //     data : {
  
  //     }
  // })