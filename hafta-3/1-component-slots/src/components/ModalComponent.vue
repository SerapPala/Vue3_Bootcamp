<template>
    <div class="container">

        <div class="header">

            <slot name="title"></slot>

        </div>

        <slot></slot>
        
        <hr />

        <div class="content my-2">
            <slot name="content"></slot>
        </div>


        <div class="footer text-right">
            <button class="mr-2 red">Kapat</button>
            <button @click="onSave" class="green">Kaydet</button>
        </div>


    </div>

</template>

<script>
export default {
    props: ["title", "content", "onSave"]
}
</script>