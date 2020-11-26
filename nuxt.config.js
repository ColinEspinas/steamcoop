export default {
  components: true,
  css: [
    '@/assets/css/style.scss'
  ],
  modules: [
    '@nuxt/http',
  ],
  serverMiddleware: [ 
    { path: 'api/user', handler: '~/api/user.js' },
    { path: 'api/game', handler: '~/api/game.js'}
  ]
}
  