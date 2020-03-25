<template>
  <div class="update">
      <div> 
         <h1>Update River</h1>
      </div>
  <div>
     <b v-if="updated">River updated succesfully! </b>
   <FormComponent 
   :river="getRiver"
   @submit="updateRiver"
   />
   <button v-if="updated" v-on:click="goBack">
             go back
   </button>
   </div>
  </div>
</template>
<script>
import FormComponent from '@/components/damp/FormComponent'
import { mapGetters} from 'vuex'

  export default {
  name : 'UpdateRiver',
  components: {
    FormComponent
  },
  data() {
      return {
          updated: false
      }
    },
  computed: {
   ...mapGetters(['getRiver'])
  },
  methods: {
       async updateRiver(e) {
           this.$store.dispatch('updateRiver', e)
           this.updated = true
        },
         goBack(){
           this.$router.push({ path: '/'})
        }
    }
}
</script>
<style ang="scss" scoped>

.update{
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 30%;
  margin: 50px auto;
}
 </style>
 
