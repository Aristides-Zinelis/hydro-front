<template>
    <div id="footer" class="footer">
     {{ dateTime }}
    </div>
</template>
<script lang="ts">
import moment from 'moment'

export default {
 name : 'Footer',
data: function () {
    return {
      dateTime: moment(Date.now())
    }
 }
}
 </script>
 <style scoped lang="scss">
 .footer{
     bottom: 0;
     position: fixed;
 }
 </style>