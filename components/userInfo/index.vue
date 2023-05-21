<script setup>
import { ref, reactive } from "vue";
const tabs = ref();
</script>
<template>
  <div class="pt-16" style="background-color: #fffdff">
    <v-container>
      <div class="d-flex justify-space-between align-center">
        <div class="d-flex align-center">
          <v-avatar class="ma-3" size="120" rounded="lg">
            <v-img src="/avatar/01.png"></v-img>
          </v-avatar>
          <div>
            <v-card-title class="text-h4 font-weight-black">
              你好，Jessica
            </v-card-title>
            <div class="d-flex mt-3">
              <v-btn
                class="rounded text-white mx-2"
                color="#F2813B"
                variant="elevated"
                >我的課表</v-btn
              >
              <v-btn
                class="rounded text-white mx-2"
                color="#F2813B"
                variant="elevated"
                >帳戶資訊</v-btn
              >
              <v-btn
                class="rounded text-white mx-2"
                color="#F2813B"
                variant="elevated"
                >課程軌跡</v-btn
              >
            </div>
          </div>
        </div>
        <div class="d-flex algin-center px-15 pt-5">
          <div class="d-flex flex-column align-center mx-3">
            <p class="mb-2">預約中堂數</p>
            <p class="text-h3 font-weight-black">2</p>
          </div>
          <div class="d-flex flex-column align-center mx-3">
            <p class="mb-2">已購買堂數</p>
            <p class="text-h3 font-weight-black">10</p>
          </div>
          <div class="d-flex flex-column align-center mx-3">
            <p class="mb-2">已使用堂數</p>
            <p class="text-h3 font-weight-black">0</p>
          </div>
        </div>
      </div>
      <v-card class="tab-position">
        <v-tabs v-model="tabs" bg-color="white" color="deep-orange-accent-2">
          <v-tab :value="1"> 個人檔案 </v-tab>
          <v-tab :value="2"> 銀收分析 </v-tab>
        </v-tabs>
      </v-card>
    </v-container>
  </div>
</template>
<style scoped>
.tab-position {
  position: relative;
  top: 40px;
}
</style>
