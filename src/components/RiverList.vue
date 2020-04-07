<template>
  <div class="river-list">
    <h1>World rivers list</h1>
      <table class="table">
        <tr>
          <th>Name</th>
          <th>Country Source</th>
          <th>Length</th>
          <th>Photo</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
       </table>
       <div class="scrollable">
        <table class="table">
        <tr v-for="river in getRivers" :key="river.id" class="tr">
          <td>{{river.name }}</td>
          <td>{{river.countrySource }}</td>
          <td>{{river.length }}</td>
          <td>{{river.photo }}</td>
          <td>
            <button class="button" v-on:click="goUpdate(river)">
              Update
            </button></td>
            <td>
            <button class="button" v-on:click="goDelete(river)">
              Delete
            </button></td>
        </tr>
      </table>
      </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations, mapActions} from 'vuex'

export default {
 name : 'RiverList',

 mounted () {
   this.$store.dispatch('callRivers')
  },
 computed: {
   ...mapGetters(['getRivers'])
  },
  methods:{
    ...mapMutations(['SELECT_RIVER']),
    ...mapActions(['callRivers']),
    goUpdate(river){
      this.SELECT_RIVER(river)
      this.$router.push({ path: '/update-river'})
    },
     goDelete(river){
      this.SELECT_RIVER(river)
      this.$router.push({ path: '/delete-river'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.river-list{
  margin-top: 50px;
}
.table{
 width: 100%;
}
.scrollable{
  height: 500px;
  overflow: auto;
  width: 100%;
}
.table td, .table th {
    width: 17%;
}
</style>
