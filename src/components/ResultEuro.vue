<template>
  <div class="flex flex-col items-center">
    <h4 class="w-fit">Kết quả Euro hôm nay</h4>
    <div class="flex flex-col w-full mt-1.5 text-sm font-semibold gap-2">
      <p v-if="is_loading" class="w-full text-center text-white"> Đang tải ...</p>
      <div v-else class="matches-wrapper text-white" v-for="item in datas">
        <div class="Pages3_teams__MiOh0 gap-1">
          <p>{{ item.match_time }}</p>
          <div class="flex items-center w-full">
            <div class="w-2/5 flex flex-col items-center gap-1">
              <img class="flag" :src="item.home_logo" alt="" />
              <p>{{ item.home_name }}</p>
            </div>
            <div
              class="w-1/5 bg-white text-black h-fit rounded-lg p-2 text-center"
            >
              {{ item.home_scores[0] }} <span>-</span> {{ item.away_scores[0] }}
            </div>
            <div class="w-2/5 flex flex-col items-center gap-1">
              <img class="flag" :src="item.away_logo" alt="" />
              <p>{{ item.away_name }}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-between w-full bg-[#001ac139] py-1.5 px-[20px] rounded-lg">
            <p>Thẻ vàng: {{item.home_scores[3]+item.away_scores[3]}}</p>
            <p>Thẻ đỏ: {{item.home_scores[2]+item.away_scores[2]}}</p>
            <p>Tổng góc: {{item.home_scores[4]+item.away_scores[4]}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { IMatch, IResultEuro } from '../interface/data'
import { format } from 'date-fns/format'
const dateformat = 'hh:mm - dd/MM/yyyy'
const datas = ref<IMatch[]>([])
const is_loading = ref<boolean>(false)

onMounted(() => {
  callData()
})
const callData = () => {
  is_loading.value = true
  fetch('https://api.5goall.com/resultsByLeague', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      id: 'v2y8m4zh3kql074',
    }),
  })
    .then((res) => {
      return res.json()
    })
    .then((data: IResultEuro[]) => {
      datas.value = data
        .reduce((result, item) => result.concat(item.matches), [] as IMatch[])
        .map((item) => {
          item.match_time = format(Number(item.match_time) * 1000, dateformat)
          return item
        })
      console.log(datas.value)
    })
    .finally(() => {
      is_loading.value = false
    })
}
</script>
<style scoped>
h4 {
  color: #fff;
  padding: 5px 10px;
  background-color: #dd00ca;
  border-radius: 10px;
  padding: 5px 20px;
  margin: 0;
  font-weight: 700;
}
.matches-wrapper {
  margin-bottom: 5px;
}
.Pages3_teams__MiOh0 {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  background-color: #001ac139;
  border-radius: 10px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  margin: auto;
  margin-bottom: 5px;
  flex-wrap: wrap;
}
.flag {
  width: 50px;
  height: 30px;
}
</style>
