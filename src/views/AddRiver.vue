<template>
  <div class="create">
    <div> 
         <h1>Add River</h1>
      </div>
   <FormComponent 
   @submit='addRiver'
   :river= "{}"
   />
  </div>
</template>
<script>
import FormComponent from '@/components/damp/FormComponent'

  export default {
  name : 'AddRiver',
  components: {
    FormComponent
  },
  methods: {
       async addRiver(e) {
         console.log(e)
           this.$store.dispatch('addRiver', e)
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
