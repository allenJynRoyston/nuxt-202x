<template lang='pug'>
  div
    Header
      h1 Home
    BodyContent(style='text-align: center')
      hr
      p Built with Nuxt/Vue
      img(src="~/assets/images/nuxt-icon-white.png")    
    Footer
</template>

<script>
  export default {
    transition: 'slide-left'
  }
</script>
