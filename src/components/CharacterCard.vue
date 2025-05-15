<script>
export default {
  props: ['character'],
  methods: {
    handleMoveToDetail() {
      this.$router.push(`/characters/${this.character.id}`)
      this.scrollToTop()
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <!--character card-->
  <a @click.prevent="handleMoveToDetail" href="">
    <div class="hover:scale-[1.1] transition-transform duration-300 ease-in-out">
      <div class="grid place-content-center">
        <img :src="character.charImage" class="w-[180px] h-auto" />
      </div>
      <div
        class="bg-[#232E32] w-[200px] h-[75px] pt-2 pb-3.5 mx-auto rounded-xl grid place-content-center"
      >
        <p class="text-white text-lg text-center">{{ character.name }}</p>
        <div class="grid place-content-center">
          <img v-if="character.rarity == 4" src="/4star.png" class="h-3.5 w-auto mt-1" />
          <img v-if="character.rarity == 5" src="/5star.png" class="h-3.5 w-auto mt-1" />
        </div>
      </div>
    </div>
  </a>
  <!--character card-->
</template>
