<template lang='pug'>
  .container
    h1 {{date}}
    NuxtLink(to="/")
      | Back    
</template>

<script>
export default {
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({ date: '8/31/2020' })
      }, 1000)
    })
  },
  transition: 'slide-left'
}
</script>
