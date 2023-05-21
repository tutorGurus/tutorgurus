<script setup>
import { ref, reactive } from "vue";
const icons = reactive([
    'mdi-facebook',
    'mdi-linkedin',
    'mdi-instagram',
]);

</script>

<template>
    <v-footer class="py-16" style="background-color: #ececec;">
        <v-container>
            <v-card class="mx-auto pb-16" elevation="0" max-width="1200" style="background-color: transparent;">

                <v-row class="align-start mx-auto">
                    <v-spacer></v-spacer>
                    <v-col cols="12" sm="3">
                        <v-img src="/LOGO.png" height="28px" width="auto"></v-img>
                        <h4 class="mt-4 ms-10">
                            國高中線上家教預約平台
                        </h4>
                    </v-col>
                    <v-col cols="12" sm="9">
                        <v-row>
                            <v-col col="3">
                                <div class="d-flex flex-column align-start">
                                    <v-btn variant="text" class="font-weight-black">關於我們</v-btn>
                                    <v-btn variant="text">我們的價值</v-btn>
                                    <v-btn variant="text">部落格</v-btn>
                                </div>

                            </v-col>
                            <v-col col="3">
                                <div class="d-flex flex-column align-start">
                                    <v-btn variant="text" class="font-weight-black">熱門頁面</v-btn>
                                    <v-btn variant="text">所有課程</v-btn>
                                    <v-btn variant="text">精選課程</v-btn>
                                </div>

                            </v-col>
                            <v-col col="3">
                                <div class="d-flex flex-column align-start">
                                    <v-btn variant="text" class="font-weight-black">幫助</v-btn>
                                    <v-btn variant="text">常見問答</v-btn>
                                    <v-btn variant="text">家教費用資訊</v-btn>
                                    <v-btn variant="text">成為教師</v-btn>
                                </div>
                            </v-col>
                            <v-col col="3">
                                <div class="d-flex flex-column align-start">
                                    <v-btn variant="text" class="font-weight-black">條款與政策</v-btn>
                                    <v-btn variant="text">平台會員規範及申訴管道</v-btn>
                                    <v-btn variant="text">優惠使用規則</v-btn>
                                    <v-btn variant="text">隱私權政策</v-btn>
                                    <v-btn variant="text">服務條款</v-btn>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>
            </v-card>
            <v-divider></v-divider>
            <div class="d-flex align-center px-4 mt-3">
                <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="plain" size="small"></v-btn>
                <v-spacer></v-spacer>
                <span class="text-caption">北七組 © 2023-2053 All Rights Reserved</span>
            </div>
        </v-container>
    </v-footer>
</template>

<style scoped></style>
