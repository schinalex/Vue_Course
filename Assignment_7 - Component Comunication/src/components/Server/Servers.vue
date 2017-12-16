<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="server in servers">
          <server :id="server.id" @serverSelected="handle($event)"></server>
      </li>
    </ul>
  </div>
</template>

<script>
  import Server from './Server.vue'

  export default {
    components: {
      'server': Server
    },
    data () {
      return {
        servers: [
          {id: '1', status: 'Crtitical'},
          {id: '2', status: 'Normal'},
          {id: '3', status: 'Unknown'},
          {id: '4', status: 'Crtitical'},
          {id: '5', status: 'Stable'}
        ]
      }
    },
    methods: {
      handle (id) {
        const server = this.servers.filter(server => server.id === id)[0]
        this.$emit('showDetails', server)
      }
    }
  }
</script>

<style>

</style>
