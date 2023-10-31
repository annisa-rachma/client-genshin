<script>
import CharacterCardVue from '../components/CharacterCard.vue'
import { mapActions, mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'
import FooterComponentVue from '../components/FooterComponent.vue'


export default {
  data() {
    return {
      selectedEl: ''
    }
  },
  components: {
    CharacterCardVue, FooterComponentVue
  },
  computed: {
    ...mapState(useCounterStore, ['characters'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchAllChar']),
    doClick(element) {
      this.selectedEl = element
      this.fetchAllChar(element)
    }
  },
  created() {
    this.selectedEl = 'Anemo'
    this.fetchAllChar(this.selectedEl)
  }
}
</script>

<template>
  <!--character-->
  <!-- <div class="grid"> -->
    <div class="w-[1280px] mx-auto grid h-auto absolute mt-[600px] left-0 right-0">
      <!--character title-->
      <div class="mr-24 ml-24 grid content-center text-center grid-cols-8">
        <div class="col-span-3 grid content-center justify-items-end">
          <img src="/arrow.png" class="w-[300px]" />
        </div>
        <h1 class="text-white col-span-2 text-3xl font-bold">Characters</h1>
        <div class="col-span-3 grid content-center justify-items-end rotate-180">
          <img src="/arrow.png" class="w-[300px]" />
        </div>
      </div>
      <!--character title-->

      <!--character section-->
      <div class="mr-24 ml-24 grid content-center text-center grid-cols-3 mt-8 mb-36">
        <!--element-->
        <div class="col-span-3 grid grid-cols-7 mx-40">
          <a v-if="selectedEl == 'Anemo'" @click.prevent="doClick('Anemo')" href="">
            <div class="grid place-content-center">
              <img src="/Element_Anemo.svg" class="w-16" />
            </div>
          </a>
          <a v-else @click.prevent="doClick('Anemo')" href="">
            <div class="grid place-content-center">
              <img src="/Element_Anemo.svg" class="w-16 grayscale hover:grayscale-0" />
            </div>
          </a>

          <a v-if="selectedEl == 'Cryo'" @click.prevent="doClick('Cryo')" href="">
            <div class="grid place-content-center">
              <img src="/Element_Cryo.svg" class="w-16" />
            </div>
          </a>
          <a v-else @click.prevent="doClick('Cryo')" href="">
            <div class="grid place-content-center">
              <img src="/Element_Cryo.svg" class="w-16 grayscale hover:grayscale-0" />
            </div>
          </a>

          <a v-if="selectedEl == 'Dendro'" @click.prevent="doClick('Dendro')" href="">
            <div class="grid place-content-center">
              <img src="/Element_Dendro.svg" class="w-16" />
            </div>
          </a>
          <a v-else @click.prevent="doClick('Dendro')" href="">
            <div class="grid place-content-center">
              <img src="/Element_Dendro.svg" class="w-16 grayscale hover:grayscale-0" />
            </div>
          </a>

          <a v-if="selectedEl == 'Electro'" @click.prevent="doClick('Electro')" href="">
            <div class="grid place-content-center">
              <img src="/Element_Electro.svg" class="w-16" />
            </div>
          </a>
          <a v-else @click.prevent="doClick('Electro')" href="">
            <div class="grid place-content-center">
              <img src="/Element_Electro.svg" class="w-16 grayscale hover:grayscale-0" />
            </div>
          </a>

          <a v-if="selectedEl == 'Geo'" @click.prevent="doClick('Geo')" href="">
            <div class="grid place-content-center">
              <img src="/Element_Geo.svg" class="w-16" />
            </div>
          </a>
          <a v-else @click.prevent="doClick('Geo')" href="">
            <div class="grid place-content-center">
              <img src="/Element_Geo.svg" class="w-16 grayscale hover:grayscale-0" />
            </div>
          </a>

          <a v-if="selectedEl == 'Hydro'" @click.prevent="doClick('Hydro')" href="">
            <div class="grid place-content-center">
              <img src="/Element_Hydro.svg" class="w-16" />
            </div>
          </a>
          <a v-else @click.prevent="doClick('Hydro')" href="">
            <div class="grid place-content-center">
              <img src="/Element_Hydro.svg" class="w-16 grayscale hover:grayscale-0" />
            </div>
          </a>

          <a v-if="selectedEl == 'Pyro'" @click.prevent="doClick('Pyro')" href="">
            <div class="grid place-content-center">
              <img src="/Element_Pyro.svg" class="w-16" />
            </div>
          </a>
          <a v-else @click.prevent="doClick('Pyro')" href="">
            <div class="grid place-content-center">
              <img src="/Element_Pyro.svg" class="w-16 grayscale hover:grayscale-0" />
            </div>
          </a>
        </div>

        <div
          class="col-span-3 mt-12 mr-24 ml-24 grid content-center text-center grid-cols-3 mb-20 gap-y-10"
        >
          <CharacterCardVue
            v-for="character in characters"
            :key="character.id"
            :character="character"
          />
        </div>
      </div>
      <!--character section-->

      <FooterComponentVue class=""/>

    </div>

  <!-- </div> -->

  <!--character-->
</template>
