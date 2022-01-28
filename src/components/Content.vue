<script setup>
import { NSpace, NCard, NGrid, NGridItem } from 'naive-ui'
</script>

<template>
    <div class="content">
        <n-grid x-gap="25" cols="6" y-gap="25" item-responsive>
            <n-grid-item span="6 1068:2">
                <n-space vertical :size="[0, 25]">
                    <n-card>
                        <template #header-extra>
                            <div class="content-card-extra">
                                <ul>
                                    <li>
                                        <a href="#">候选</a>
                                    </li>
                                    <li>
                                        <a href="#">讣闻</a>
                                    </li>
                                    <li>
                                        <a href="#">更多新闻</a>
                                    </li>
                                </ul>
                            </div>
                        </template>
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
                                            src="../assets/test4.webp"
                                            decoding="async"
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
                        <template #header-extra>
                            <div class="content-card-extra">
                                <ul>
                                    <li>
                                        <a href="#">存档</a>
                                    </li>
                                    <li>
                                        <a href="#">更多历史事件</a>
                                    </li>
                                </ul>
                            </div>
                        </template>
                        <div class="content-card-content">
                            <p>
                                <a href="#">1月27日</a>：
                                <a href="#">圣萨瓦庆节</a>（
                                <a href="#">塞尔维亚正教会</a>）
                            </p>
                            <div class="content-card-content-otd">
                                <div class="content-card-content-otd-rightImage">
                                    <a href="#">
                                        <img
                                            alt="不知道"
                                            src="../assets/test8.jpg"
                                            decoding="async"
                                            width="120"
                                            height="97"
                                        />
                                    </a>
                                </div>
                                <dl>
                                    <dt>
                                        <a href="#">1142年</a>
                                    </dt>
                                    <dd>
                                        因宰相
                                        <a href="#">秦桧</a>等人以“
                                        <a href="#">莫须有</a>”的罪名诬陷，
                                        <a href="#">南宋</a>将领
                                        <b>
                                            <a href="#">岳飞</a>
                                        </b>被宋高宗下诏赐死于风波亭。
                                    </dd>
                                    <dt>
                                        <a href="#">1939年</a>
                                    </dt>
                                    <dd>
                                        美国
                                        <a href="#">洛克希德公司</a>因应
                                        <a href="#">美国陆军航空兵团</a>需求研制的
                                        <a href="#">P-38闪电式战斗机</a>首次起飞。
                                    </dd>
                                    <dt>
                                        <a href="#">1944年</a>
                                    </dt>
                                    <dd>
                                        <a href="#">苏联红军</a>对纳粹德国
                                        <a href="#">北方集团军群</a>发动大规模攻势后，结束历时872天的
                                        <b>
                                            <a href="#">列宁格勒围城战</a>
                                        </b>。
                                    </dd>
                                    <dt>
                                        <a href="#">1945年</a>
                                    </dt>
                                    <dd>
                                        <a href="#">苏联红军</a>攻占
                                        <b>
                                            <a href="#">奥斯威辛集中营</a>
                                        </b>（图），释放仍关押在此的7,600余名囚犯。
                                    </dd>
                                    <dt>
                                        <a href="#">1949年</a>
                                    </dt>
                                    <dd>
                                        由上海驶往
                                        <a href="#">基隆</a>的太平轮于
                                        <a href="#">舟山群岛</a>附近海域与货轮建元轮
                                        <b>
                                            <a href="#">相撞后沉没</a>
                                        </b>，造成两船共计1,004人死亡。
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <template #header>
                            <span class="content-card-title">历史今日</span>
                        </template>
                    </n-card>
                </n-space>
            </n-grid-item>
            <n-grid-item span="6 1068:4">
                <n-space vertical :size="[0, 25]">
                    <n-card>
                        <template #header-extra>
                            <div class="content-card-extra">
                                <ul>
                                    <li>
                                        <a href="#">典范条目（候选）</a>
                                    </li>
                                    <li>
                                        <a href="#">特色列表（候选）</a>
                                    </li>
                                    <li>
                                        <a href="#">存档</a>
                                    </li>
                                </ul>
                            </div>
                        </template>
                        <div class="content-card-content">
                            <div class="content-card-content-text">
                                <div class="content-card-content-text-leftImage">
                                    <a href="#">
                                        <img
                                            alt="i dont no"
                                            src="../assets/test6.png"
                                            decoding="async"
                                            width="143"
                                            height="190"
                                        />
                                    </a>
                                </div>
                                <p>
                                    〈
                                    <b>
                                        <a href="#">聚光之下</a>
                                    </b>〉是英国歌手
                                    <a href="#">哈里·斯泰尔斯</a>的歌曲，收录在他的第2张录音室专辑《
                                    <a href="#">摇滚界线</a>》中，由斯泰尔斯、制作人凯德·哈普尔和泰勒·约翰逊创作，于2019年10月11日由厄斯金唱片和哥伦比亚唱片作专辑首发单曲释出。〈聚光之下〉是首流行和节奏蓝调歌曲，内有多种吉他、钢琴、编制拍子和灵魂乐合唱团。斯泰尔斯证实，经过一段时间的反思后，歌词是有关自我发现和自我认同。评论界对斯泰尔斯的音乐方向感到别具一格，并认为歌曲有几段分解联奏的前副歌和后副歌，但只有一段副歌的结构不按常理出牌。不少乐评人称赞曲目令人难忘。单曲在英国单曲排行榜取得第3位，并获英国唱片业协会认证为白金唱片，还在澳洲、加拿大和美国拿下前20名和白金认证的好成绩。文斯·海考克执导歌曲音乐录影带，影片里斯泰尔斯裸著上身在汗流浃背的人群中跳舞。
                                </p>
                            </div>
                        </div>
                        <template #header>
                            <span class="content-card-title">特色列表</span>
                        </template>
                        <template #footer>
                            <div class="content-card-more">
                                <ul>
                                    <li>
                                        <a href="#" class="content-card-more-header">其他典范条目</a>：
                                        <a href="#">飓风伊莎贝尔</a>－
                                        <a href="#">飓风多利安的气象历史</a>－
                                        <a href="#">罗德岛州三百周年半美元</a>
                                    </li>
                                    <li>
                                        <a href="#" class="content-card-more-header">其他特色列表</a>：
                                        <a href="#">路易斯安那州行政区划</a>－
                                        <a href="#">中国共产党第十八届中央委员会候补委员列表</a>－
                                        <a href="#">秦国君主列表</a>
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </n-card>
                    <n-card>
                        <template #header-extra>
                            <div class="content-card-extra">
                                <ul>
                                    <li>
                                        <a href="#">候选</a>
                                    </li>
                                    <li>
                                        <a href="#">存档</a>
                                    </li>
                                    <li>
                                        <a href="#">更多新条目</a>
                                    </li>
                                </ul>
                            </div>
                        </template>
                        <div classs="content-card-content">
                            <div class="content-card-content-list content-card-content-dyk">
                                <div class="content-card-content-list-rightImage">
                                    <a href="#">
                                        <img
                                            alt="不知道"
                                            src="../assets/test3.webp"
                                            decoding="async"
                                            width="119"
                                            height="160"
                                        />
                                    </a>
                                </div>
                                <ul>
                                    <li>
                                        苯的
                                        <b>
                                            <a href="#">哪一个价键异构体</a>
                                        </b>拥有
                                        <a href="#">三棱柱形</a>的分子结构？
                                    </li>
                                    <li>
                                        2021年正式成立的
                                        <b>
                                            <a href="#">哪一个中共中央办事机构</a>
                                        </b>是
                                        <a href="#">中华人民共和国</a>
                                        <a href="#">空中交通管制</a>的主管机关？
                                    </li>
                                    <li>
                                        印度尼西亚
                                        <b>
                                            <a href="#">哪一个国家公园</a>
                                        </b>是苏门答腊岛最大的国家公园，2004年登录为世界遗产？
                                    </li>
                                    <li>
                                        <b>
                                            <a href="#">哪部Disney+网络电视剧</a>
                                        </b>以《
                                        <a href="#">星球大战</a>》角色
                                        <a href="#">波巴·费特</a>为主角？（图）
                                    </li>
                                    <li>
                                        <b>
                                            <a href="#">哪一个欧洲国家</a>
                                        </b>地处
                                        <a href="#">欧洲</a>的战略交通要地，其中部的
                                        <a href="#">摩拉瓦河谷</a>是从
                                        <a href="#">欧洲大陆</a>到
                                        <a href="#">小亚细亚</a>和
                                        <a href="#">近东</a>最便捷的陆路路线？
                                    </li>
                                    <li>
                                        <b>
                                            <a href="#">哪个意甲奥斯卡系列奖项</a>
                                        </b>旨在奖励意大利国内顶级足球联赛表现最出众的主教练？
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <template #header>
                            <span class="content-card-title">你知道吗</span>
                        </template>
                    </n-card>
                    <n-card>
                        <template #header-extra>
                            <div class="content-card-extra">
                                <ul>
                                    <li>
                                        <a href="#">优良条目（候选）</a>
                                    </li>
                                    <li>
                                        <a href="#">存档</a>
                                    </li>
                                </ul>
                            </div>
                        </template>
                        <div classs="content-card-content">
                            <div class="content-card-content-text">
                                <div class="content-card-content-text-leftImage">
                                    <a href="#">
                                        <img
                                            alt="i dont no"
                                            src="../assets/test5.jpg"
                                            decoding="async"
                                            width="140"
                                            height="105"
                                        />
                                    </a>
                                </div>
                                <p>
                                    <b>
                                        <a href="#">澳洲山庄</a>
                                    </b>为一件位于
                                    <a href="#">中华人民共和国</a>
                                    <a href="#">广东省广州市</a>
                                    <a href="#">黄埔区</a>
                                    <a href="#">新龙镇</a>金坑村的建筑开发案，占地逾千亩，由广州市澳美房地产开发公司开发。澳洲山庄于1997年动工，但由于澳美公司资金链断裂，工程于2001年停工。为筹措资金，澳美公司将部分澳洲山庄的土地、房屋等资产抵押或变卖，使澳洲山庄地块被分割，产生了权属争议。在2011年、2016年，澳洲山庄两度传出重建消息，但因为地块权属争议，重建计划没有施行，山庄也烂尾至今。
                                </p>
                            </div>
                        </div>
                        <template #header>
                            <span class="content-card-title">优良条目</span>
                        </template>
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
    color: #202122;
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
.content-card-extra ul li {
    display: inline;
}
.content-card-extra ul li::after {
    content: " · ";
    font-weight: bold;
}
.content-card-extra ul li:last-child::after {
    content: none;
}
.content-card-content {
    font-size: 0.98em;
    color: #1a1a1a;
}
.content-card-content p {
    margin: 0.5em 0;
    margin-top: 0;
}
.content-card-content-otd dl {
    padding-left: 1em;
    margin-top: 0.2em;
    margin-bottom: 0.5em;
}
.content-card-content-otd dl dt {
    float: left;
    width: 4.2em;
    font-weight: bold;
    margin-bottom: 0.1em;
}
.content-card-content-otd dl dd {
    margin-bottom: 0.8em;
    margin-left: 4.5em;
    margin-right: 0;
}
.content-card-more {
    clear: left;
    line-height: 1.5em;
    font-size: 0.938rem;
}
.content-card-more ul {
    list-style: none;
    margin: 0.3em 0 0 1.6em;
    margin-left: 0;
}
.content-card-more ul li {
    font-size: 0.9em;
    color: #474747;
    margin-bottom: 0.1em;
}
.content-card-more-header {
    font-weight: bold;
    color: #474747;
}
.content-card-content-text {
    font-size: 0.938rem;
}
.content-card-content-dyk ul li {
    margin-bottom: 0.5em;
}
.content-card-content-good {
    line-height: 1.5em;
    font-size: 0.938rem;
}
.content-card-content-text-leftImage {
    margin: 0 0.5em 0.5em 0;
    clear: left;
    float: left;
}
.content-card-content-text p {
    margin: 0;
}
.content-card-content-otd-rightImage {
    margin: 0 0 0.5em 0.5em;
    clear: right;
    float: right;
}
.content-card-content-text-leftImage img {
    margin: 0.4em 0.9em 0.3em 0;
}
.content-card-extra{
    max-width: 50%;
}
.content-card-extra ul{
    width: 100%;
}
</style>