<script setup>
import { ref } from 'vue'
import { NSpace, NCard, NGrid, NGridItem } from 'naive-ui'
</script>

<template>
    <div class="content">
        <n-grid x-gap="25" cols="6" y-gap="25" item-responsive>
            <n-grid-item span="6 1068:2">
                <n-space vertical :size="[0, 25]">
                    <n-card>
                        <template #header-extra>候选·维基新闻·讣闻·更多新闻</template>
                        <div class="content-card-content">
                            <div class="content-card-content-special">
                                <small>
                                    <dl>
                                        <dt>
                                            <a href="#">2019冠状病毒病疫情</a>
                                        </dt>
                                        <dd>
                                            <a href="#">疾病</a>
                                        </dd>
                                        <dd>
                                            <a href="#">病毒</a>
                                        </dd>
                                        <dd>
                                            <a href="#">检测</a>
                                        </dd>
                                        <dd>
                                            <a href="#">疫苗</a>
                                        </dd>
                                        <dd>
                                            <a href="#">时间轴</a>
                                        </dd>
                                        <dd>
                                            <a href="#">全球各地疫情</a>
                                        </dd>
                                        <dd>
                                            <a href="#">反应与影响</a>
                                        </dd>
                                        <dd>
                                            <a href="#">主题</a>
                                        </dd>
                                    </dl>
                                </small>
                            </div>
                            <div class="content-card-content-list">
                                <div class="content-card-content-list-rightImage">
                                    <a href="#">
                                        <img
                                            alt="罗克·马克·克里斯蒂安·卡博雷"
                                            src="../assets/test1.jpg"
                                            decoding="async"
                                            data-file-width="1992"
                                            data-file-height="2795"
                                            width="90"
                                            height="126"
                                        />
                                    </a>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">美国国家航空航天局</a>的
                                        <b>
                                            <a href="#">詹姆斯·韦伯空间望远镜</a>
                                        </b>成功抵达最终观测位置
                                        <a href="#">拉格朗日L2点。</a>
                                    </li>
                                    <li>
                                        <a href="#">英国高等法院</a>批准
                                        <a href="#">维基解密</a>创办人
                                        <b>
                                            <a href="#">朱利安·阿桑奇</a>
                                        </b>得以继续就引渡美国案上诉至
                                        <a href="#">最高法院。</a>
                                    </li>
                                    <li>
                                        <a href="#">布基纳法索</a>军方在首都瓦加杜古发动
                                        <b>
                                            <a href="#">军事政变</a>
                                        </b>，罢免总统
                                        <a>罗克·马克·克里斯蒂安·卡博雷</a>（图）。
                                    </li>
                                    <li>
                                        俄罗斯以阻止
                                        <a href="#">北约扩张</a>为由在乌克兰边境
                                        <b>
                                            <a href="#">部署</a>
                                        </b>大批武装部队，
                                        <a href="#">战争危机</a>造成地区局势严重紧张。
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <template #header>
                            <span class="content-card-title">新闻动态</span>
                        </template>
                    </n-card>
                    <n-card title="响应式布局">
                        <template #header-extra></template>
                        你可以试着缩放
                    </n-card>
                </n-space>
            </n-grid-item>
            <n-grid-item span="6 1068:4">
                <n-space vertical :size="[0, 25]">
                    <n-card>
                        <template #header-extra>#header-extra</template>
                        左边链接旁有空格是vscodee的"格式化文档"导致
                    </n-card>
                    <n-card title="响应式布局">
                        <template #header-extra></template>
                        你可以试着缩放
                    </n-card>
                </n-space>
            </n-grid-item>
        </n-grid>
    </div>
</template>

<style scoped>
.content {
    margin: 25px 3vw;
    font-family: SourceHanSansSC-regular;
}
.content-card-title {
    color: rgba(24, 54, 87, 100);
    font-size: 30px;
}
.content-card-content-special small {
    text-align: center;
    font-size: 0.857em;
}
.content-card-content-special dl {
    line-height: 1.5em;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.content-card-content-special dl dt {
    font-weight: bold;
    display: inline;
}
.content-card-content-special dl dt::after {
    content: " : ";
}
.content-card-content-special dd {
    display: inline;
    line-height: 1.5em;
}
.content-card-content-special dl dd::after {
    content: " · ";
    font-weight: bold;
}
.content-card-content-special dl dd:last-child::after {
    content: none;
}
.content-card-content-list {
    font-size: 0.98em;
}
.content-card-content-list ul {
    margin: 0.3em 0 0 1.6em;
}
.content-card-content-list ul li {
    margin-bottom: 0.8em;
}
.content-card-content-list-rightImage {
    margin: 0 0 0.5em 0.5em;
    clear: right;
    float: right;
}
</style>