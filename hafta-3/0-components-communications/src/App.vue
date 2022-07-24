<template>
  <div class="container">
    <h3>containerim</h3>
    
    <UserSection/>


  </div>
</template>

<script>
import UserSection from "@/components/UserSection";
export default {
  components: {
    UserSection
  },
  data() {
    return {
      provideData: {
        userList: ["serap", "sinem", "selin"]
      }

    }
  },
methods:{
    newItem(item){
      this.provideData.userList.push(item);
      
    }
},
 provide(){
  return{
    userList : this.provideData.userList,
    newItem : this.newItem
  };
 }
}



</script>


