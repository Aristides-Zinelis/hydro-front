<template>
  <div class="update">
      <div> 
         <h1>Update River</h1>
      </div>
  <div>
   <FormComponent 
   :river="getRiver"
   @submit="updateRiver"
   />
   </div>
  </div>
</template>
<script>
import FormComponent from '@/components/damp/FormComponent'
import { mapGetters, mapMutations} from 'vuex'

  export default {
  name : 'UpdateRiver',
  components: {
    FormComponent
  },
  computed: {
   ...mapGetters(['getRiver']),
   ...mapMutations(['SELECT_RIVER'])
  },
  methods: {
       async updateRiver(e) {
           console.log(e)
           this.$store.dispatch('updateRiver', e)
        },
    },
    created(){
        if (localStorage.getItem('river')) {
            try {
               this.SELECT_RIVER(JSON.parse(sessionStorage.getItem('river')))
            } catch(e) {
                sessionStorage.removeItem('river');
        }
    }
    },
    destroyed(){
        sessionStorage.setItem('river', this.getRiver)
    },
    mounted(){
   
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
 
