<script setup>
import { NButton, NIcon } from 'naive-ui'
import { Search as SearchIcon } from "@vicons/fa"
</script>

<template>
    <div class="overview">
        <div class="overview-content">
            <div class="overview-content-slogon">海纳百川 有容乃大</div>
            <div
                class="overview-content-notice"
            >维基百科爱好者交流群（Telegram：@wikipedia_zh_n、Discord及IRC：#wikipedia-zh IRC://互联）欢迎大家加入。 [关闭]</div>
            <div class="overview-content-search">
                <div class="overview-content-search-container">
                    <input
                        type="text"
                        class="overview-content-search-container-input"
                        placeholder="搜索Steppe"
                    />
                    <span class="overview-content-search-container-button">
                        <n-icon class="overview-content-search-container-button-icon">
                            <search-icon></search-icon>
                        </n-icon>
                    </span>
                </div>
            </div>
            <div
                class="overview-content-hot"
            >动态热门：永恒族·EDG电子竞技俱乐部·梅艳芳·逆局·陈静·One the Woman·苏桦伟·英雄联盟全球总决赛·智异山·Happiness</div>
            <div class="overview-content-other">
                <div class="overview-content-other-number">已有114,514篇条目</div>
                <div class="overview-content-other-link">
                    分类 主题 求助
                    入门 沙盒 捐款
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.overview {
    min-height: 83.845vh;
    background-image: url(../assets/test7.jpg);
}
.overview-content-slogon {
    line-height: 44px;
    padding-top: 19.343vh;
    color: rgba(255, 255, 255, 100);
    font-size: 44px;
    text-align: center;
    font-family: SourceHanSansSC-bold;
}
.overview-content-notice {
    padding-top: 2.8vh;
    line-height: 18px;
    color: rgba(255, 255, 255, 100);
    font-size: 18px;
    text-align: center;
    font-family: SourceHanSansSC-bold;
    line-height: 1.6;
}
.overview-content-search {
    text-align: center;
    padding-top: 9.3vh;
}
.overview-content-search-container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 53px;
    background-color: rgba(247, 247, 247, 0.9);
    max-width: 762px;
    height: 66px;
}
.overview-content-search-container-input {
    background-color: rgba(247, 247, 247, 0);
    height: 100%;
    outline: none;
    /*color: rgba(223, 219, 219, 100);*/
    font-size: 36px;
    text-align: left;
    font-family: Roboto;
    line-height: 36px;
    padding-left: 30px;
    width: 100%;
    border: 0;
}
.overview-content-search-container-input::-webkit-input-placeholder {
    color: #9195a3;
}
.overview-content-search-container-button {
    font-size: 36px;
    color: #9195a3;
    padding: 0 30px;
    cursor: pointer;
}
.overview-content-search-container-button-icon {
    display: inline-block;
    vertical-align: middle;
}
.overview-content-hot {
    line-height: 25px;
    color: rgba(255, 255, 255, 100);
    font-size: 18px;
    text-align: center;
    font-family: SourceHanSansSC-bold;
    padding-top: 2.8vh;
}
.overview-content-other {
    padding-top: 2.8vh;
    text-align: center;
}
.overview-content-other-number {
    color: rgba(255, 255, 255, 100);
    font-size: 28px;
    text-align: center;
    font-family: SourceHanSansSC-regular;
}
.overview-content-other-link {
    padding-top: 0.3vh;
    max-width: 200px;
    color: rgba(255, 255, 255, 100);
    font-size: 28px;
    width: 100%;
    font-family: SourceHanSansSC-regular;
    margin: 0 auto;
    line-height: 40px;
    padding-bottom: 20px;
}
.overview-content {
    padding: 0 3vw;
}
</style>
