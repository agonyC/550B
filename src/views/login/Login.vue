<script setup lang="ts">
import { reactive, ref } from 'vue'
import router from '../../router/router'

const loginForm: { username: string | number; password: string | number } =
  reactive({
    username: '123',
    password: '12333',
  })
const loginFormRef = ref(null)
// 登录表单校验规则
const rules = reactive({
  username: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
})
// 登录按钮点击事件
function toLogin() {
  console.log(loginForm)
  router.push('/home')
}
</script>

<template>
  <div class="login">
    <n-card class="login-card" hoverable>
      <!-- 标题 -->
      <h1>帐号登录</h1>
      <n-form ref="loginFormRef" :model="loginForm" :rules="rules">
        <!-- 账号 -->
        <n-form-item path="username" size="large">
          <n-input
            class="login-input"
            v-model:value="loginForm.username"
            placeholder="帐号"
            round
          />
        </n-form-item>
        <!-- 密码 -->
        <n-form-item path="password" size="large">
          <n-input
            class="login-input"
            type="password"
            v-model:value="loginForm.password"
            show-password-on="mousedown"
            placeholder="密码"
            :maxlength="8"
            round
          />
        </n-form-item>
      </n-form>
      <!-- 登录按钮 -->
      <n-button class="login-btn" @click="toLogin" round> 登录 </n-button>
    </n-card>
  </div>
</template>
<style lang="scss" scoped>
.login-card {
  width: 400px;
  height: 400px;
  border-radius: 10%;
  margin: auto;
  margin-top: 20vh;
  .n-form {
    width: 280px;
    margin: auto;
  }
  h1 {
    text-align: center;
    font-size: 3vh;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }

  .login-btn {
    display: block;
    margin: auto;
    margin-top: 10px;
  }
}
</style>
