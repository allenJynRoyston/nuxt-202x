<template lang='pug'>
  .container
    h1 Home page
    NuxtLink(to="/about")
      | About page      
    NuxtLink(to="/contact")
      | Contact page            
</template>

<script>
export default {
  transition: 'slide-left'
}
</script>
