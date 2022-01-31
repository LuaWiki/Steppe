<script setup>
import { NH1, NH2, NList, NListItem, NThing, NSpace, NButton } from 'naive-ui'
</script>

<template>
    <div class="history">
        <div class="history-content">
            <div class="history-content-title">
                <n-h1>“飓风哈蒂”的版本历史</n-h1>
            </div>
            <div class="history-content-sub">
                <div class="history-content-sub-title">
                    <a href="#" title="Special:日志">查看该页面的日志</a>
                    <span>（</span>
                    <a href="#" title="查看该页面的过滤器日志">查看过滤器日志</a>
                    <span>）</span>
                </div>
            </div>
            <div class="history-content-legend">
                <p>
                    <span>选择下列任何一个版本的日期点击可以浏览。需要更多帮助请参看</span>
                    <a href="#" title="Help:页面历史">Help:页面历史</a>
                    <span>和</span>
                    <a href="#" title="Help:编辑摘要">Help:编辑摘要</a>。
                </p>
                <div class="history-content-legend-inline">
                    <ul>
                        <li>
                            <span>外部工具：</span>
                            <a rel="nofollow" class="external text" href="#">修订历史统计</a>
                        </li>
                        <li>
                            <a class="external text" href="#">搜索编辑历史</a>
                        </li>
                        <li>
                            <a class="external text" href="#">本月页面浏览统计</a>
                        </li>
                        <li>
                            <a class="external text" href="#">修复死链</a>
                        </li>
                    </ul>
                </div>
                <p>
                    <span>（当前）= 与最后修订版本的差别，（先前）= 与前一个修订版本的差别，</span>
                    <b>小</b>
                    <span>=</span>
                    <a href="#" title="Help:小修改">小修改</a>
                    <span>，→ =</span>
                    <a href="#" title="Help:章节">章节编辑</a>
                    <span>，← =</span>
                    <a href="#" class="mw-redirect" title="Wikipedia:AES">自动编辑摘要</a>
                </p>
            </div>
            <div>
                <span>（最新 |</span>
                <a href="#" title="飓风哈蒂">最早</a>
                <span>） 查看（前50个 |</span>
                <a href="#" title="飓风哈蒂">后50个</a>
                <span>）</span>
            </div>
            <div class="history-content-pagehistory">
                <n-space vertical>
                    <n-list>
                        <template #header>2021年11月16日（星期二）</template>
                        <n-list-item>
                            <template #prefix>
                                <p>03:59</p>
                                <p>+14</p>
                            </template>
                            <n-thing title="Htmlzycq" description="使用HotCat已添加Category:不列颠科学协会会长">
                                <template #header-extra>
                                    <abbr
                                        class="history-content-pagehistory-minoredit"
                                        title="该编辑为小编辑"
                                    >小</abbr>
                                </template>
                                <template #action>
                                    <n-space>
                                        <n-button size="small">查看</n-button>
                                        <n-button size="small">感谢</n-button>
                                        <n-button size="small">撤销</n-button>
                                    </n-space>
                                </template>
                            </n-thing>
                        </n-list-item>
                    </n-list>
                    <n-list>
                        <template #header>2021年11月17日（星期三）</template>
                        <n-list-item>
                            <template #prefix>
                                <p>03:59</p>
                                <p>+14</p>
                            </template>
                            <n-thing title="Htmlzycq" description="使用HotCat已添加Category:不列颠科学协会会长">
                                <template #header-extra>
                                    <abbr
                                        class="history-content-pagehistory-minoredit"
                                        title="该编辑为小编辑"
                                    >小</abbr>
                                </template>
                                <template #action>
                                    <n-space>
                                        <n-button size="small">查看</n-button>
                                        <n-button size="small">感谢</n-button>
                                        <n-button size="small">撤销</n-button>
                                    </n-space>
                                </template>
                            </n-thing>
                        </n-list-item>
                        <n-list-item>
                            <template #prefix>
                                <p>03:59</p>
                                <p>+14</p>
                            </template>
                            <n-thing title="Htmlzycq" description="使用HotCat已添加Category:不列颠科学协会会长">
                                <template #header-extra>
                                    <abbr
                                        class="history-content-pagehistory-minoredit"
                                        title="该编辑为小编辑"
                                    >小</abbr>
                                </template>
                                <template #action>
                                    <n-space>
                                        <n-button size="small">查看</n-button>
                                        <n-button size="small">感谢</n-button>
                                        <n-button size="small">撤销</n-button>
                                    </n-space>
                                </template>
                            </n-thing>
                        </n-list-item>
                    </n-list>
                </n-space>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageHistory'
})
</script>

<style scoped>
.history {
    padding: 100px 3vw;
    padding-bottom: 1vh;
}
.history-content {
    margin: 0 auto;
    font-size: 0.938rem;
}
.history-content-title {
    font-size: 1.8em;
}
.history-content-sub {
    font-size: 84%;
    line-height: 1.2em;
    margin: 0 0 1.4em 1em;
    color: #54595d;
    width: auto;
}
.history-content-legend {
    border-style: solid;
    background-color: #f9f9f9;
    border-color: #e9e9e9;
    border-width: 1px;
    font-size: 90%;
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 0 5px 5px 5px;
    clear: both;
}
.history-content-legend p {
    margin: 0.5em 0;
}
.history-content-legend-inline {
    display: inline;
}
.history-content-legend-inline ul {
    display: inline;
}
.history-content-legend ul li {
    display: inline;
}
.history-content-legend ul li::after {
    content: " · ";
    font-weight: bold;
}
.history-content-legend ul li:last-child::after {
    content: none;
}
.history-content-pagehistory {
    margin: 1.6em 0;
}
.history-content-pagehistory-minoredit {
    background: #eaecf0;
    border-radius: 2px;
    font-size: 0.9em;
    font-weight: bold;
    padding: 0 6px 1px;
}
</style>