<script setup>
import { ref, reactive } from "vue";

import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  layoutsLogin: {
    type: Boolean,
    default: null,
  },
  onLoginSuccess: {
    type: Function,
    default: null,
  },
});

const isRegister = ref(false);
const loading = ref(false);
const user = reactive({
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const layoutsLoginRef = ref(props.layoutsLogin);
const toRegister = () => {
  isRegister.value = true;
};

const register = () => {
  loading.value = true;
  $fetch(`/student/v1/register`, {
    method: "post",
    baseURL: "https://tutorgurus-backend.onrender.com",
    body: user,
  }).then((response) => {
    console.log(response);
    if (response.status === false) {
      loading.value = false;
      alert(response.Errormessage);
    } else {
      loading.value = false;
      alert("註冊成功!");
      user.email = "";
      user.password = "";
      isRegister.value = false;
    }
  });
};

const login = () => {
  loading.value = true;
  $fetch(`/student/v1/login`, {
    method: "post",
    baseURL: "https://tutorgurus-backend.onrender.com",
    body: user,
  }).then((response) => {
    console.log(response);
    if (response.status === false) {
      alert(response.Errormessage);
      loading.value = false;
    } else {
      const user = {};
      user.token = response.data;
      sessionStorage.setItem("user", JSON.stringify(user));
      alert("登入成功!");
      loading.value = false;
      router.push("/user");
      if (layoutsLoginRef.value !== null) {
        layoutsLoginRef.value = false; // 修改引用的值为false
      }
      if (props.onLoginSuccess !== null) {
        props.onLoginSuccess(); // 调用父组件的登录成功方法
      }
    }
  });
};
</script>

<template>
  <v-card>
    <v-toolbar class="text-white" color="orange-darken-1">
      <v-toolbar-title>{{
        isRegister === false ? "登入" : "註冊"
      }}</v-toolbar-title>
      <template v-slot:append>
        <p v-if="!isRegister">
          沒有帳號，<span
            class="text-decoration-underline cursor-point"
            @click="toRegister"
            >快速註冊</span
          >
        </p>
        <p v-else>
          已經註冊，<span
            class="text-decoration-underline cursor-point"
            @click="isRegister = false"
            >登入</span
          >
        </p>
      </template>
    </v-toolbar>
    <v-card-text>
      <div class="pa-4">
        <v-text-field
          v-show="isRegister"
          v-model="user.userName"
          label="帳號"
          variant="underlined"
        ></v-text-field>
        <v-text-field
          v-model="user.email"
          label="信箱"
          hint="xxxxx@gmail.com"
          type="email"
          variant="underlined"
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          hint="密碼需包含一個大寫一個小寫，至少8碼"
          label="密碼"
          type="password"
          variant="underlined"
        ></v-text-field>
        <v-text-field
          v-show="isRegister"
          v-model="user.confirmPassword"
          label="再次輸入密碼"
          type="password"
          variant="underlined"
        ></v-text-field>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        v-if="!isRegister"
        :loading="loading"
        class="mx-auto mb-3 rounded text-white"
        color="#F2813B"
        width="90%"
        variant="elevated"
        @click="login"
        >登入</v-btn
      >
      <v-btn
        v-else
        :loading="loading"
        class="mx-auto mb-3 rounded text-white"
        color="#F2813B"
        width="90%"
        variant="elevated"
        @click="register"
        >註冊</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.cursor-point {
  cursor: pointer;
}
</style>
