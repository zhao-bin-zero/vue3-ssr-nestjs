import { defineComponent, defineAsyncComponent, ref } from 'vue';

// interface InputProps {
//   value: string;
//   onChange: (value: string) => void;
// }
export const market3 = defineComponent({
  // setup(props: InputProps) {
  //   const handleChange = (event: Event) => {
  //     // 这应该通过让TS知道这event.target是一个HTMLInputElement本身具有的错误来摆脱错误value.在指定之前,TS可能只知道event单独是一个HTMLInputElement,因此根据TS,键入的target是一些随机映射的值,可以是任何东西.
  //     props.onChange((event.target as HTMLInputElement).value);

  //   };

  //   return () => (
  //     <div>
  //       <span>{props.value}</span>
  //       <input value={props.value} onInput={handleChange} />
  //     </div>
  //   );
  // }
  name: 'Market3',
  components: {
    marketComp: defineAsyncComponent(() => import('@/components/market/index').then((mod) => mod.marketJsx))
  },
  setup() {
    let input = ref('');
    const handleChange = (event: Event) => {
      input.value = (event.target as HTMLInputElement).value;
    };

    return () => (
      <div>
        <span>{input.value}</span>
        <market-comp />
        <input value={input.value} onInput={handleChange} />
      </div>
    );
  }
});
