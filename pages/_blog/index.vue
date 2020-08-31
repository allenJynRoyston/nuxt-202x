<template lang='pug'>
  .container
    h1 Blog page
    NuxtLink(to="/")
      | Back    
</template>

<script>
export default {
  transition: 'slide-left'
}
</script>
