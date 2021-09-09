<template>
  <market-comp />
  <p>{{ state2 }}</p>
  <p>{{ count }}</p>
  <button @click="add2">增加</button>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, onMounted, onBeforeMount, onBeforeUnmount, onUnmounted, toRef, reactive, isReactive } from 'vue';

export default defineComponent({
  name: 'Markets',
  components: {
    marketComp: defineAsyncComponent(() => import('@/components/market/index').then((mod)=>mod.marketJsx))
  },
  setup() {
    const obj = reactive({ count: 3 });
    const state2 = toRef(obj, 'count');
    function add2() {
      // state2.value++;
      state2.value++;
      console.log('原始值：', obj);
      console.log('原始值：', isReactive(obj));
      // console.log('原始值：', toRef(obj, 'count'));
      console.log('响应式数据对象：', state2);
    }
    console.log('setup', 'Markets');
    onMounted(() => {
      console.log('onMounted', 'Markets');
    });
    onBeforeMount(() => {
      console.log('beforeMount', 'Markets');
    });
    onBeforeUnmount(() => {
      console.log('beforeUnmount', 'Markets');
    });
    onUnmounted(() => {
      console.log('unmount', 'Markets');
    });
    return {
      state2,
      count: obj.count,
      // state2,
      add2
    };
  },
  asyncData() {
    console.log('asyncData', 'Markets');
  },
  mounted() {
    console.log('mounted', 'Markets');
  }
});
</script>
