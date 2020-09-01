<template lang='pug'>
  .container
    h1 Blog page
    RouteBack

    hr
    .entry-list
      .item(v-for="(data, index) in jsonData.entries" :key='index')
        NuxtLink(:to='data.url')
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

<style lang='scss'>
  .entry-list{
    display: flex;
    flex-direction: column;

    .item:not(:last-child){
      border-bottom: 1px dotted lightgrey;
      padding: 5px 0;
    }

    a{
      text-transform: uppercase;
      font-size: 16px;      
    }
  }
</style>
