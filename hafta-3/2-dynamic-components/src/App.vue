<template>
  <div class="container">
    <div class="justify-content-between align-items-center d-flex"> <button class="red" @click="activeComponent='Red'">Red</button>
    <button class="green" @click="activeComponent='Green'">Green</button>
    <button class="blue" @click="activeComponent='Blue'">Blue</button></div>
 <!--   
    <Red msg="Red Component" v-if="activeComponent = 'Red'" class="mb-2" />
    <Green v-if="activeComponent = 'Green'" class="mb-2" />
    <Blue v-if="activeComponent = 'Blue'" class="mb-2" /> -->
{{ activeComponent }}

<keep-alive>

<component :is="activeComponent" msg="Red Component 2">
<h3  class="bg-green text-white">Green components</h3>
</component>

</keep-alive>



  </div>

</template>


<script>
import Red from "@/components/RedComponent"
import Green from "@/components/GreenComponent"
import Blue from "@/components/BlueComponent"
export default {
  components: {
    Red,
    Green,
    Blue
  },
  data() {
    return {
      activeComponent: "Red"
    }
  }
}

</script>
