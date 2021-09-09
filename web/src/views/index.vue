<template>
  <div class="index">
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">switch</el-switch>
  </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';

export default {
  name: 'Index',
  setup() {
    console.log('setup', 'index');
  },
  asyncData() {
    console.log('asyncData', 'index');
  },
  data() {
    console.log('data', 'index');
    return {
      value: false
    };
  },
  mounted() {
    console.log('mounted', 'index');
  },
  beforeMount() {
    console.log('beforeMount', 'index');
  },
  beforeCreate() {
    console.log('beforeCreate', 'index');
  },
  created() {
    console.log('created', 'index');
  },
  beforeUnmount() {
    console.log('beforeUnmount', 'index');
  },
  unmounted() {
    console.log('unmounted', 'index');
  }
};
</script>
