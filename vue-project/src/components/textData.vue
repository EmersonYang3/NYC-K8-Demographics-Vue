<template>
    <div class="message-container">
        <p>{{ ApiData }}</p>
    </div>
</template>

<script>
import { fetchData } from '@/services/APIService';

export default {
    data() {
        return {
            ApiData: ''
        };
    },
    async created() {
        this.ApiData = await fetchData()
    }
}
</script>

<style lang="css" scoped>
.message-container {
    overflow-x: hidden
}
p {
    color: white;
}
</style>