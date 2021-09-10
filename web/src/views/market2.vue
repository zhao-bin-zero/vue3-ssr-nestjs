<template>
  <!-- <ul>
    <li v-for="pageSize in pageSizes" :key="pageSize">{{ pageSize }}</li>
  </ul>-->
  <div>
    <span>{{ input }}</span>
    <input v-model="input" />
  </div>
</template>

<script lang="ts">
// import { onMounted, reactive, computed } from 'vue';
import { ref } from 'vue';

export default {
  name: 'Markets2',
  setup() {
    // let pageArray = reactive([1, 2, 3, 4]);
    // let pageSizes = computed(() => pageArray.map((page) => page * 10));
    // let onLoadColumn = () => {};
    // onMounted(() => {
    //   console.log('mounted', 'Markets2');
    //   onLoadColumn();
    // });
    // ref('')为空服务端渲染另一个项目会报错，问题在 https://github.com/infernojs/inferno/issues/791，但奇怪的是当前项目正常
    let input = ref('');
    console.log(input.value);
    // return {
    //   pageSizes
    // };
    return {
      input
    };
  }
};
</script>
