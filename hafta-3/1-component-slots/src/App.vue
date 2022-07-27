<template>
  <!--  <ModalComponent :onSave="onSave" :title="'Modal Title'" :content="content" /> -->

  <ModalComponent>

    <template #title>
      <h3>slot ile gelen title bilgisi</h3>
    </template>

 <!--  <template #content>
    <p class="text-green">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis laboriosam alias voluptates aliquam quae id ducimus inventore excepturi. Impedit illum et laudantium fugiat qui deleniti animi aliquid, cumque facere!</p>
    </template> -->

     <template v-slot:content>
    <p class="text-green">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis laboriosam alias voluptates aliquam quae id ducimus inventore excepturi. Impedit illum et laudantium fugiat qui deleniti animi aliquid, cumque facere!</p>
    </template>



    <template #default>
      Bu default olarak gösterilecek.
    </template>

  </ModalComponent>


</template>

<script>
import ModalComponent from "@/components/ModalComponent"
export default {
  components: {
    ModalComponent
  },
  data() {
    return {
      content: `<h3 class="text-red"></h3>`
    }
  },
  methods: {
    onSave() {
      alert("saved");
    }
  }
}
</script>

