<template>
    <!-- teleport 传送到不同的节点：应用于弹框-->
    <button @click="modalOpen = true">弹框开关</button>
    <teleport to="body">
        <!-- 样式随父节点 -->
        <div v-if="modalOpen" id="popup-mask">
            <div id="popup">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                <button @click="modalOpen = false">关闭</button>
            </div>
        </div>
    </teleport>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'Popup',
    setup: () => {
        let modalOpen = ref(false);
        return {
            modalOpen
        }
    }
})
</script>

<style>
    #popup-mask {
        /* position: absolute;
        top: 50%;
        left: 50%; */
        /* transform: translate(-50%, -50%); */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #bbb;
    }
    #popup {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
    #popup ul {
        list-style-type: none;
    }
    #popup ul li {
        height: 50px;
        width: 500px;
        background: #fff;
        text-align: center;
    }
</style>