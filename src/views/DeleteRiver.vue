<template>
  <div class="delete">
      <div> 
         <h1>Delete River</h1>
      </div>
      <div>
          <p v-if="!deleted">You are about to delete the below River Are you sure?</p>
          <p v-if="deleted">The below River has been deleted successfully!! </p>
          <ul>
            <li v-for="(value, key) in getRiver" :key="value"> {{ key }} : {{ value }}</li>
            </ul>
      </div>
       <button v-if="!deleted" v-on:click="deleteRiver(getRiver)">
             Delete
        </button>
        <button v-if="deleted" v-on:click="goBack">
             go back
        </button>
  <div>
   </div>
  </div>
</template>
<script>
import { mapGetters} from 'vuex'

  export default {
  name : 'DeleteRiver',
  data() {
    return {
        deleted: false
    }
  },
  computed: {
   ...mapGetters(['getRiver'])
  },
  methods: {
       async deleteRiver(e) {
           this.$store.dispatch('deleteRiver', e)
           this.deleted = true
        },
        goBack(){
           this.$router.push({ path: '/'})
        }
    }

}
</script>
<style ang="scss" scoped>

.delete{
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 30%;
  margin: 50px auto;
}
li{
    list-style: none;
}
 </style>