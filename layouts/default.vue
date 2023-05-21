<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const scrolled = ref(false);

const login = ref(false);
const isLogout = ref(false);

const handleLoginSuccess = () => {
  login.value = false; // 在登录成功后将layouts中的ref改为false
  isLogout.value = true;
};

const toHome = () => {
  router.push("/");
};

const logout = () => {
  sessionStorage.removeItem("user");
  isLogout.value = false;
  alert("登出成功!");
  router.push("/");
};

const handleScroll = () => {
  scrolled.value = window.pageYOffset > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <v-layout>
    <v-toolbar
      absolute
      fixed
      class="mt-4"
      :class="{ 'white-bg': scrolled }"
      ref="navbar"
    >
      <v-toolbar-title class="cursor-pointer" @click="toHome">
        <v-img src="/LOGO.png" height="28px" width="auto"></v-img>
      </v-toolbar-title>
      <v-toolbar-title class="text-center">
        <v-btn class="text-button font-weight-black">搜尋教師</v-btn>
        <v-btn to="/courses" class="text-button font-weight-black"
          >課程一覽</v-btn
        >
        <v-btn to="/teachers" class="text-button font-weight-black"
          >師資一覽</v-btn
        >
      </v-toolbar-title>
      <v-toolbar-title class="text-end">
        <!-- <v-btn icon @click="login = true" v-if="!isLogout">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
        <v-btn icon v-else @click="logout"> 登出 </v-btn> -->
        <v-btn
          v-if="!isLogout"
          @click="login = true"
          class="rounded-xl text-white mx-3"
          color="orange-darken-1"
          variant="flat"
        >
          登入
        </v-btn>
        <div v-else>
          <v-btn icon @click="logout"> 登出 </v-btn>
          <!-- <v-btn icon>
            <v-icon>mdi-email</v-icon>
          </v-btn> -->
          <v-btn icon to="/cart">
            <v-icon>mdi-cart</v-icon>
          </v-btn>
          <v-btn icon to="/user">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </div>
      </v-toolbar-title>
    </v-toolbar>
    <v-dialog transition="dialog-top-transition" width="380" v-model="login">
      <LoginAndRegister
        :layoutsLogin="login"
        :onLoginSuccess="handleLoginSuccess"
      />
    </v-dialog>

    <v-main style="background-color: #ececec;">
      <slot />
      <Footer />
    </v-main>
  </v-layout>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.v-toolbar.v-toolbar--absolute {
  width: 100%;
  position: fixed;
  background-color: transparent;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
}
.white-bg {
  background-color: #ececec !important;
}
</style>
