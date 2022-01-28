<script setup>
import { NSpace } from 'naive-ui'
</script>

<template>
    <div class="footer">
        <div class="footer-content">
            <div class="footer-content-links">
                <n-space :size="[24,12]">
                    <a href="#">隐私政策</a>
                    <a href="#">关于 Steppe</a>
                    <a href="#">免责声明</a>
                    <a href="#">开发者</a>
                    <a href="#">统计</a>
                    <a href="#">Cookie</a>
                    <a href="#">声明</a>
                    <a href="#">访问官方页面</a>
                </n-space>
            </div>
            <div class="footer-content-copyright">
                <p>
                    本站的全部文字在
                    <a href="#">知识共享 署名-相同方式共享 3.0协议</a>之条款下提供，附加条款亦可能应用。（请参阅
                    <a href="#">使用条款</a>）
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    height: 32.883vh;
    background-color: rgba(91, 91, 91, 0.8);
    display: flex;
    padding: 0 3vw;
    align-items: center;
}
.footer-content {
    color: rgba(255, 255, 255, 100);
    font-size: 28px;
    text-align: left;
    font-family: SourceHanSansSC-regular;
}
.footer-content a {
    color: rgba(255, 255, 255, 100);
}
.footer-content-copyright {
    font-size: small;
    line-height: 1.4;
    padding: 1em 0;
}
.footer-content-links{
    line-height: 32px;
}
</style>
