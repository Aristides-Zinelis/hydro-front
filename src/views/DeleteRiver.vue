<template>
  <div class="delete">
      <div> 
         <h1>Delete River</h1>
      </div>
      <div>
          <p>You are about to delete the below River Are you sure?</p>
          <ul>
            <li v-for="(value, key) in getRiver" :key="value"> {{ key }} : {{ value }}</li>
            </ul>
      </div>
       <button v-on:click="deleteRiver(getRiver)">
             Delete
        </button>
  <div>
   </div>
  </div>
</template>
<script>
import { mapGetters} from 'vuex'

  export default {
  name : 'DeleteRiver',
  computed: {
   ...mapGetters(['getRiver'])
  },
  methods: {
       async deleteRiver(e) {
           console.log(e)
           this.$store.dispatch('deleteRiver', e)
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