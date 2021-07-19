<script lang="ts">
import { h, ref, reactive } from 'vue';

export default {
    setup() {
        // const readersNumber = ref(0)
        // const book = reactive({ title: 'Vue 3 Guide' })
        // return () => h('div', [readersNumber.value, book.title])
        const book = reactive({ title: '我阅读过的书:' });
        const readersNum = ref(0);
        return () => h('div',
            {},
            [
                book.title,
                h('span', {
                    style: 'color: red'
                }, readersNum.value)
            ]
            )
    },
};
</script>
