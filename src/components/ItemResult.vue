<template>
  <div class="Pages3_teams__MiOh0 gap-1">
    <p>{{ source.match_time }}</p>
    <div class="flex items-center w-full">
      <div class="w-2/5 flex flex-col items-center gap-1">
        <img class="flag" :src="source.home_logo" alt="" />
        <p>{{ source.home_name }}</p>
      </div>
      <div class="w-1/5 bg-white text-black h-fit rounded-lg p-2 text-center">
        {{ source.home_scores[0] }} <span>-</span> {{ source.away_scores[0] }}
      </div>
      <div class="w-2/5 flex flex-col items-center gap-1">
        <img class="flag" :src="source.away_logo" alt="" />
        <p>{{ source.away_name }}</p>
      </div>
    </div>
  </div>
  <div
    class="flex justify-between w-full bg-[#001ac139] py-1.5 px-[20px] rounded-lg"
  >
    <p>Thẻ vàng: {{ source.home_scores[3] + source.away_scores[3] }}</p>
    <p>Thẻ đỏ: {{ source.home_scores[2] + source.away_scores[2] }}</p>
    <p>Tổng góc: {{ source.home_scores[4] + source.away_scores[4] }}</p>
  </div>
</template>
<script setup lang="ts">
import { IMatch } from '../interface/data'

const {source} = defineProps<{
  source: IMatch
}>()

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
