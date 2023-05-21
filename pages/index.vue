<script lang="ts" setup></script>

<template>
  <div class="banner-bg py-16">
    <v-container>
      <v-row class="align-center mx-auto">
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6" lg="6" xl="4">
          <h1 class="text-h3 font-weight-black">安心補習，瞄準升學</h1>
          <h1 class="text-h3 font-weight-black my-3">實驗夢想。</h1>
          <h4 class="mb-10">
            專業教師，一對一授課，幫助你發掘自身潛能，讓每一個學生都能享受到高質量的教育資源。
          </h4>
          <div class="d-flex">
            <!-- <v-select label="類別/程度" variant="solo"></v-select>
            <v-select label="類別/程度" variant="solo"></v-select>
            <v-btn size="x-large">搜尋</v-btn> -->
          </div>
        </v-col>
        <v-col cols="12" sm="6" lg="6" xl="4">
          <v-img src="/banner/hero2@.png" contain></v-img>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </div>
  <div class="my-4">
    <v-img src="/banner/text.png"></v-img>
  </div>
  <div class="courses-bg py-16">
    <v-container>
      <div class="text-center">
        <h1 class="text-h4 font-weight-black">精選課程</h1>
        <div class="d-flex justify-center pt-6 pb-12">
          <v-btn class="mx-2 text-button font-weight-black" color="black" rounded="xl">國中</v-btn>
          <v-btn class="mx-2 text-button font-weight-black" rounded="xl">高中</v-btn>
          <v-btn class="mx-2 text-button font-weight-black" rounded="xl">語言</v-btn>
        </div>
      </div>
      <v-card class="mx-auto pb-16" elevation="0" max-width="1200" style="background-color: transparent;">
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="4" lg="4" v-for="(i) in 3">
            <Card />
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-card>
    </v-container>
  </div>
  <div class="comment-bg py-16">
    <v-container>
      <v-row class="comment-relative align-center mx-auto">
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6" lg="6" xl="4">
          <div class="commet-description">
            <h1 class="text-h3 font-weight-black">專業且</h1>
            <h1 class="text-h3 font-weight-black my-3">評分頂尖的導師</h1>
            <h4 class="mb-10">
              超過一百萬名學生給予他們的導師五星級評價
            </h4>
          </div>
          <div class="comment-decorate">
            <v-img src="/comment/Deco.png" width="300" contain></v-img>
          </div>
          <div class="d-flex">
            <v-btn class="rounded-xl text-white font-weight-black" color="orange-darken-1" variant="flat">
              開始挑選教師 <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="6" lg="6" xl="4">
          <v-img src="/banner/hero2@.png" contain></v-img>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </div>
  <div class="py-16">
    <v-container>
      <div class="text-center mb-16">
        <h1 class="text-h4 font-weight-black">非我們不可的理由</h1>
      </div>
      <v-card class="mx-auto pb-16" elevation="0" max-width="1200" style="background-color: transparent;">
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="12" md="5">
            <v-card class="rounded-lg" height="100%">
              <div class="d-flex justify-space-start">
                <v-avatar class="ma-3" size="100" rounded="lg">
                  <v-img src="/reason/01.png"></v-img>
                </v-avatar>
                <div>
                  <v-card-title class="text-h5 font-weight-black">
                    優秀師資
                  </v-card-title>
                  <p class="px-4 pb-3">平台師資豐富外，教師都們也都擁有豐富的教學經驗，讓學生們都能選擇到合適的教師</p>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="5">
            <v-card class="rounded-lg" height="100%">
              <div class="d-flex justify-space-start">
                <v-avatar class="ma-3" size="100" rounded="lg">
                  <v-img src="/reason/02.png"></v-img>
                </v-avatar>
                <div>
                  <v-card-title class="text-h5 font-weight-black">
                    客製化課程
                  </v-card-title>
                  <p class="px-4">可依照需求為學生調整與能力程度相符的課程</p>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="12" md="5">
            <v-card class="rounded-lg" height="100%">
              <div class="d-flex justify-space-start">
                <v-avatar class="ma-3" size="100" rounded="lg">
                  <v-img src="/reason/03.png"></v-img>
                </v-avatar>
                <div>
                  <v-card-title class="text-h5 font-weight-black">
                    上課時間彈性
                  </v-card-title>
                  <p class="px-4">選擇最符合自身的上課時段，學習效率 Up !</p>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="5">
            <v-card class="rounded-lg" height="100%">
              <div class="d-flex justify-space-start">
                <v-avatar class="ma-3" size="100" rounded="lg">
                  <v-img src="/reason/04.png"></v-img>
                </v-avatar>
                <div>
                  <v-card-title class="text-h5 font-weight-black">
                    購課彈性
                  </v-card-title>
                  <p class="px-4">無入會費與年費綁約機制，單堂購入，學習選擇彈性多元</p>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-card>
    </v-container>
  </div>
  <div class="py-16">
    <v-container>
      <div class="text-center mb-16">
        <h1 class="text-h4 font-weight-black">嚴選教師流程</h1>
      </div>
      <v-card class="mx-auto pb-16" elevation="0" max-width="1200" style="background-color: transparent;">
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="12" md="3">
            <v-card class="rounded-lg pa-4" height="100%">
              <v-card-title class="ps-0 text-h5 font-weight-black">
                嚴選教師
              </v-card-title>
              <p>家教/補習班相關教學經驗超過一年，才能進入面試階段</p>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card class="rounded-lg pa-4" height="100%">
              <v-card-title class="ps-0 text-h5 font-weight-black">
                細心篩選
              </v-card-title>
              <p>經過專業的師資團模擬學生上課情境測試，通過後才會進到下一階段</p>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card class="rounded-lg pa-4" height="100%">
              <v-card-title class="ps-0 text-h5 font-weight-black">
                培訓合格教師
              </v-card-title>
              <p>平台專業的師資教練團會針對專業科目、心理學、教學技巧培訓師資</p>
            </v-card>
          </v-col>
          <v-col cols="12" md="3">
            <v-card class="rounded-lg pa-4" height="100%">
              <v-card-title class="ps-0 text-h5 font-weight-black">
                持續翻轉
              </v-card-title>
              <p>平台每半年會審核、協助師資擁有更豐富、更符合學生需求的上課模式/教材</p>
            </v-card>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-card>
    </v-container>
  </div>
  <div class="teacher-bg py-16">
    <v-container>
      <v-card class="mx-auto pb-16" elevation="0" max-width="1200" style="background-color: transparent;">
        <div class="mb-16">
          <h1 class="text-h3 font-weight-black">我想成為</h1>
          <h1 class="text-h3 font-weight-black my-3">平台授課教師</h1>
          <div class="d-flex mt-10">
            <v-btn class="rounded-xl text-white font-weight-black" color="orange-darken-1" variant="flat">
              開始挑選教師 <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </div>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="rounded-lg py-4 px-2" height="100%">
              <div class="d-flex justify-space-start align-center">
                <v-avatar class="ma-3" size="120" rounded="lg">
                  <v-img src="/avatar/01.png"></v-img>
                </v-avatar>
                <div>
                  <v-card-title class="text-h5 font-weight-black">
                    我是一名教育工作者
                  </v-card-title>
                  <p class="px-4 pb-3">讓您的教學專業得到更好的展現</p>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="rounded-lg py-4 px-2" height="100%">
              <div class="d-flex justify-space-start align-center">
                <v-avatar class="ma-3" size="120" rounded="lg">
                  <v-img src="/avatar/02.png"></v-img>
                </v-avatar>
                <div>
                  <v-card-title class="text-h5 font-weight-black">
                    我沒從事教育工作<br>
                    但我有專業知識與技能
                  </v-card-title>
                  <p class="px-4">讓您在家也能夠輕鬆賺取額外收入</p>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.banner-bg {
  background-image: url('/banner/bg.png');
  background-size: contain;
}

.courses-bg {
  background-image: url('/courses/bg.png');
  background-size: contain;
}

.comment-bg {
  background: linear-gradient(180deg, #FDF0E7 0%, #FDF0E7 59.9%, rgba(253, 240, 231, 0) 100%);
}

.comment-relative {
  position: relative;
}

.commet-description {
  position: relative;
  z-index: 1;
}

.comment-decorate {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
.teacher-bg{
  background-image: url('/footer/bg.png');
  background-size: contain;
}
</style>
