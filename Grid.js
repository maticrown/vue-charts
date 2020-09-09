<template>
 <grid :cols="cols" :rows="rows"></grid>
</template>

<script>
 import Grid from 'gridjs-vue'

 export defult {
  name: 'Cars',
  components: {
   Grid
 },
 data() {
  return {
   cols: ['broadcastaccept','broadcastdrop','eventreception','unicastaccept','unicastdrop'],
   rows: ['unicastaccept','unicastdrop']
   }
 }
}
</script>
