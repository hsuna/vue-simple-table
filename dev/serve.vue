<script lang="ts">
import { defineComponent } from 'vue';
import SimpleTable from '@/simple-table.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    SimpleTable
  }
});
</script>

<template>
  <div id="app">
    <simple-table />
  </div>
</template>
