<template>
  <div @click="selectServer(id)">
    Server #{{ id }}
  </div>
</template>

<script>
  export default {
    props: ['id'],
    methods: {
      selectServer (id) {
        this.$emit('serverSelected', id)
      }
    }
  }
</script>
