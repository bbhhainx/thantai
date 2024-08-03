<template>
  <div class="flex flex-col items-center">
    <h4 class="w-fit">Kết quả Euro hôm nay</h4>
    <div class="flex flex-col w-full mt-1">
        <div class="matches-wrapper" v-for="item in datas">
            <div class="Pages3_teams__MiOh0">
                <p>{{ item.match_time }}</p>
            </div>
            <div></div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { IMatch, IResultEuro } from '../interface/data';
const dateformat = 'hh:mm - DD/MM/YYYY'
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
  }).then(res => {
    return res.json()
  }).then((data:IResultEuro[])=>{
    datas.value = data.reduce((result,item) => result.concat(item.matches),[] as IMatch[]).map((item)=>{
      item.match_time = new Date(item.match_time*1000).toDateString()
      return item
    })
    console.log(datas.value);
    
  }).finally(()=>{
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
.matches-wrapper{
    margin-bottom: 15px;
}
.Pages3_teams__MiOh0{
    width: 100%;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
    background-color: rgba(0, 26, 193, 0.2235294118);
    border-radius: 10px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    margin: auto;
    margin-bottom: 5px;
    flex-wrap: wrap
}
</style>
