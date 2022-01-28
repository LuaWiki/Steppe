<script setup>
import { NSpace } from 'naive-ui'
</script>

<template>
    <div class="partake">
        <div class="partake-content">
            <div class="partake-content-title">参与 Steppe</div>
            <p>Steppe 是一个多语言、内容自由、任何人都能参与的协作计划，其目标是建立一个完整、准确且中立的百科全书。</p>
            <p>中文 Steppe 的成长依靠您的参与，无论是创建新条目、编辑现有条目，或者为条目增加插图，您都可以为 Steppe 作出贡献。</p>
        </div>
    </div>
</template>

<style scoped>
.partake {
    background-color: rgba(91, 91, 91, 0.8);
    background-color: rgba(41, 101, 149, 100);
    padding: 10vh 3vw;
}
.partake-content {
    margin: auto;
    color: rgba(255, 255, 255, 100);
    font-size: 28px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
}
.partake-content-title {
    width: 245px;
    height: 58px;
    line-height: 58px;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 100);
    color: rgba(50, 145, 248, 100);
    font-size: 28px;
    text-align: center;
    font-family: Roboto;
    border: 1px solid rgba(194, 199, 204, 100);
    margin: 0 auto;
}
.partake-content p {
    color: rgba(255, 255, 255, 100);
    font-size: 20px;
    text-align: center;
    font-family: SourceHanSansSC-bold;
}
.partake-content p:first-of-type{
    margin-top: 3vh ;
}
</style>
