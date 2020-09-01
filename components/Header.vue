<template lang='pug'>   
  header.header
    slot
    SiteLinks
</template>

<style lang='scss'>
  .header{
    display: block;
    max-width: 600px;
    margin: auto;  
    padding-top: 50px;          
  }
</style>