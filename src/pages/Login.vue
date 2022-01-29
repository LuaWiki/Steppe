<script setup>
import { NSpace, NTabs, NTabPane, NForm, NFormItemRow, NInput, NButton, NCard } from 'naive-ui'
</script>

<template>
    <div class="login">
        <div class="login-content">
            <n-card>
                <n-tabs default-value="signin" size="large">
                    <n-tab-pane name="signin" tab="登录">
                        <n-form>
                            <n-form-item-row label="用户名">
                                <n-input />
                            </n-form-item-row>
                            <n-form-item-row label="密码">
                                <n-input />
                            </n-form-item-row>
                        </n-form>
                        <n-button type="primary" block>登录</n-button>
                    </n-tab-pane>
                    <n-tab-pane name="signup" tab="注册">
                        <n-form>
                            <n-form-item-row label="用户名">
                                <n-input />
                            </n-form-item-row>
                            <n-form-item-row label="密码">
                                <n-input />
                            </n-form-item-row>
                            <n-form-item-row label="重复密码">
                                <n-input />
                            </n-form-item-row>
                        </n-form>
                        <n-button type="primary" block>注册</n-button>
                    </n-tab-pane>
                </n-tabs>
            </n-card>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageLogin'
})
</script>

<style scoped>
.login {
    padding: 25vh 3vw;
    padding-bottom: 1vh;
}
.login-content {
    margin: 0 auto;
    max-width: 600px;
}
</style>