<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details</p>
        <div v-if="server">
          <p>ID: {{ this.server.id }}</p>
          <p>Status: {{ this.server.status }}</p>
          <button class="btn btn-primary" @click="server.status = 'Normal'">Change Status</button>
        </div>
    </div>

</template>

<script>
  export default {
    props: ['server']
  }
</script>

<style>

</style>
