<template lang='pug'>
  .container
    h1 About page
    NuxtLink(to="/")
      | Back    
    hr
</template>

<script>
export default {
  transition: 'slide-left'
}
</script>
