<template>
  <div class="matches-wrapper">
    <div class="Pages3_teams__MiOh0">
      <p>{{ props.source.match_time }}</p>
    </div>
    <div></div>
  </div>
</template>
<script setup lang="ts">
import { IMatch } from '../interface/data';

const props = defineProps<{
    index:number,
    source: IMatch
}>()

</script>
<style scoped>
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
