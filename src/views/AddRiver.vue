<template>
  <div class="create">
    <div> 
         <h1>Add River</h1>
      </div>
       <b v-if="added">River updated succesfully! </b>
   <FormComponent 
   @submit='addRiver'
   :river= "{}"
   />
    <button v-if="added" v-on:click="goBack">
             go back
   </button>
  </div>
</template>
<script>
import FormComponent from '@/components/damp/FormComponent'

  export default {
  name : 'AddRiver',
   data() {
      return {
          added: false
      }
    },
  components: {
    FormComponent
  },
  methods: {
       async addRiver(e) {
           this.$store.dispatch('addRiver', e)
           this.added = true
        },
         goBack(){
           this.$router.push({ path: '/'})
        }
    }

}
</script>
<style ang="scss" scoped>

.create{
  display: flex;
  justify-content: center;
  flex-flow: column;
  width: 30%;
  margin: 50px auto;
}
 </style>
