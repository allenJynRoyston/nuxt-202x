<template lang='pug'>
  .sitelinks-container
    NuxtLink(v-for="(data, index) in jsonData.links" :key='index' :to='data.link').link
      | {{data.name}}    
</template>

<script>
import jsonData from '../static/JSON/links.json'
export default {
  data(){
    return{
      jsonData
    }
  },
  transition: 'slide-left'
}
</script>

<style lang='scss' scoped>
  .link{
    font-size: 16px;
    margin: 0 5px;
  }
</style>
