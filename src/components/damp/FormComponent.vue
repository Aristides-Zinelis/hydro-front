<template> 
    <div class="wrapper">
        <div v-if="errors.length">
            <b>PLease check out the folowing errors:</b>
            <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </div>
        <div v-if="!errors.length  && formSubmited">
            <b>River: {{river.name}} added succesfully! </b>
            <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </div>
        <form v-on:submit.prevent="validateForm">
            <div class="form-group">
                <label>Name:</label>
                <input type="text" class="form-control" v-model="river.name"/>
            </div>
            <div class="form-group">
                <label>Country Source:</label>
                <input type="text" class="form-control" v-model="river.countrySource"/>
            </div>
            <div class="form-group">
                <label>Length:</label>
                <input type="text" class="form-control" v-model="river.length"/>
            </div>
            <div class="form-group">
                <label>Photo:</label>
                <input type="text" class="form-control" v-model="river.photo"/>
            </div>
            <div class="form-group">
                <input type="submit" class="btn btn-primary" value="Submit"/>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name : 'FormComponent',
    props:['river'],
    data() {
      return {
          errors: [],
          formSubmited: '',
          riverValue: this.river
      }
    },
    watch:{
          river(){
              this.riverValue = this.value
          }
      },
    methods: {
       async validateForm(e) {
           console.log(Object.keys(this.river).length)
           if( Object.keys(this.river).length >= 4 ){            
                this.errors=[]
                this.formSubmited = true
                this.$emit('submit', this.river)
           }else{
               this.formSubmited = false
               if (!this.river.name) {
                    this.errors.push('Name: madatory field.');
                }
                if (!this.river.countrySource) {
                    this.errors.push('Country Source: madatory field.');
                }
                if (!this.river.length) {
                    this.errors.push('Length: madatory field.');
                }
                if (!this.river.photo) {
                    this.errors.push('Photo: madatory field.');
                }
                e.preventDefault();
           }
        }
    }
}
</script>
<style ang="scss" scoped>

.wrapper{
  display: flex;
  justify-content: center;
  flex-flow: column;
}
li{
    list-style: none;
}
 </style>
