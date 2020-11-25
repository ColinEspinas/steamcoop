<template>
    <div>
        <h1>Hello world!</h1>
        <NuxtLink to="/dashboard" class="nuxtLink">Dashboard</NuxtLink>
    </div>
</template>

<script>
export default {
    data () {
        return {
        show: false
        }
    },
    methods: {
        showList() {
        this.show = true
        },
    }
}
</script>