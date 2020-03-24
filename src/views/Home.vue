<template>
  <div class="home">
    <RiverList/>
  </div>
</template>

<script>
// @ is an alias to /src
import RiverList from '@/components/RiverList.vue'

export default {
  name: 'Home',
  components: {
    RiverList
  }
}
</script>
