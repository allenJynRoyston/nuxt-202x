<template lang='pug'>
  .container
    h1 Blog page
    NuxtLink(v-for="(data, index) in jsonData.entries" :key='index' :to='data.url')
      | {{data.title}}    
</template>

<script>
import jsonData from '../../static/JSON/blog.json'

export default {
  data(){
    return{
      jsonData
    }
  },
  transition: 'slide-left'
}
</script>
