<template>
  <div>
    <p>Path: {{ $route.path }}</p>

    <p>{{ message }}</p>

    <button @click="test">Test</button>

  </div>
</template>


<script>
export default {
    data () {
        return {
            message: ''
        }
    },
    methods: {
        async test() {
            const res = await this.$http.get('/api/user');
            this.message = await res.text();
        },
    }
}
</script>
