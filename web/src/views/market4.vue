<script lang="ts">
// import { defineComponent, ref } from 'vue';

// export default defineComponent({
//   name: 'market4',
//   setup() {
//     let input = ref('');
//     const handleChange = (event: Event) => {
//       input.value = (event.target as HTMLInputElement).value;
//     };

//     return () => (
//       <div>
//         <span>{input.value}</span>
//         <input value={input.value} onInput={handleChange} />
//       </div>
//     );
//   }
// });
import { defineComponent, ref, reactive, h } from 'vue';

export default defineComponent({
  name: 'Market4',
  setup() {
    let input = ref(' ');
    const book = reactive({ title: 'Vue 3 Guide' });

    return () => (
      h('div', [input.value, book.title])
    );
  }
});
</script>