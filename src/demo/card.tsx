import { defineComponent } from 'vue';
const Card = defineComponent({
    name: 'MyCard',
    setup: () => {
        return {

        }
    },
    render: () => {
        let header = (<p>我是头部</p>);
        let content = (<div>我是中间</div>);
        let footer = (
            <p>我是底部</p>
        );
        return (
            <div>
                {header}
                {content}
                {footer}
            </div>
        )
    }
})
export default Card;