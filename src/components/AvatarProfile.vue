<script>
export default {
    props: { src: { type: String, default: '' } }
}
</script>

<template>
    <img class="rounded-full h-10 border border-white" :src="src" />
</template>