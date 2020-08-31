export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto+Slab&display=swap'
      }
    ]  
  },
  css: [
    '@/assets/css/_reset.css',
    '@/assets/css/_skeleton.css',
    '@/assets/css/global.scss',
    '@/assets/css/transitions.scss',
    '@/assets/css/blog.scss'
  ],
  loading: '@/components/LoadingBar.vue',
  components: true
}