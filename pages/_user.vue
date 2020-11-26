<template>
  <div>
    <p>Path: {{ $route.path }}</p>

    <ul v-for="use of user">
      <li>{{ use }}</li>
    </ul>


    <!-- <button @click="$fetch">Actualiser</button> -->

  </div>
</template>
<script>

export default {

  data () {
    return {
      
    }
  },

  

  // async asyncData({ params, $http }) {
  //   let user = await $http.$get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=ECFAABE514EF4BEADA68728BE5E3F8C0&steamids=${params.user}`)
  //   user = user['response']['players'][0];
  //   return { user }
  // }

  // async middleware({ params, redirect }) {
  //   const user = await fetch(
  //    'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=ECFAABE514EF4BEADA68728BE5E3F8C0&steamids='+params.user
  //   ).then(res => res.json());
    
  //   console.log(user);
  //   console.log(user['response']['players'][0]);
  // },

}
</script>
