const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {
    getCounterResult (){
      console.log( "counter 1 calıştı");
      return this.counter < 5 ? "kucuk" : "buyuk"
    },
    getCounter2Result (){
      console.log( "counter 2 calıştı");
      return this.counter2 < 5 ? "kucuk" : "buyuk"
    }
  }
 /*  methods: {
    inc() {
      this.counter++;
    },
    dec() {
      this.counter--;
    }

  } */
}).mount("#app");