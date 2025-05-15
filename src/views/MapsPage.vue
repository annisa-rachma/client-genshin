<script>
import FooterComponentVue from '../components/FooterComponent.vue'

export default {
  data() {
    return {
      src: ``,
      selectedButton: ''
    }
  },
  components: {
    FooterComponentVue
  },
  methods: {
    doClick(selected, type) {
      this.src = `https://genshin-impact-map.appsample.com/location?names=${selected}`
      this.selectedButton = type
    }
  },
  created() {
    this.src = 'https://genshin-impact-map.appsample.com/location?names=Statue%20of%20The%20Seven'
    this.selectedButton = 'selectedStatue'
  }
}
</script>

<template>
  <!-- <div> -->
    <div class="w-[1280px] mx-auto grid h-auto absolute mt-36 left-0 right-0">
      <!--maps title-->
      <div class="mr-24 ml-24 grid content-center text-center grid-cols-8">
        <div class="col-span-3 grid content-center justify-items-end">
          <img src="/arrow.png" class="w-[300px]" />
        </div>
        <h1 class="text-white col-span-2 text-3xl font-bold">Maps</h1>
        <div class="col-span-3 grid content-center justify-items-end rotate-180">
          <img src="/arrow.png" class="w-[300px]" />
        </div>
      </div>
      <!--maps title-->

      <!-- section-->
      <div class="mr-24 ml-24 grid content-center text-center grid-cols-3 mt-8 mb-8">
        <div class="col-span-3 flex flex-row mx-auto gap-8">
          <a @click.prevent="doClick('Statue%20of%20The%20Seven', 'selectedStatue')" href="">
            <div
              v-if="selectedButton == 'selectedStatue'"
              class="text-md font-semibold rounded-lg border py-2 px-4 border-white flex flex-row text-[#091418] bg-white"
            >
              <div class="">
                <img src="/statue7.webp" class="w-8" />
              </div>
              <div class="grid place-content-center ml-2">Statue of The Seven</div>
            </div>

            <div
              v-else
              class="text-white text-md font-semibold rounded-lg border py-2 px-4 border-white flex flex-row hover:text-[#091418] hover:bg-white"
            >
              <div class="">
                <img src="/statue7.webp" class="w-8" />
              </div>
              <div class="grid place-content-center ml-2">Statue of The Seven</div>
            </div>
          </a>

          <a @click.prevent="doClick('Teleport%20Waypoint', 'selectedTeleport')" href="">
            <div
              v-if="selectedButton == 'selectedTeleport'"
              class="text-md font-semibold rounded-lg border py-2 px-4 border-white col-span-1 flex flex-row text-[#091418] bg-white"
            >
              <div class="col-span-1 grid justify-items-end">
                <img src="/teleport.webp" class="w-8" />
              </div>
              <div class="col-span-7 grid place-content-center ml-2">Teleport Waypoint</div>
            </div>

            <div
              v-else
              class="text-white text-md font-semibold rounded-lg border py-2 px-4 border-white col-span-1 flex flex-row hover:text-[#091418] hover:bg-white"
            >
              <div class="col-span-1 grid justify-items-end">
                <img src="/teleport.webp" class="w-8" />
              </div>
              <div class="col-span-7 grid place-content-center ml-2">Teleport Waypoint</div>
            </div>
          </a>

          <a @click.prevent="doClick('Domain', 'selectedDomain')" href="">
            <div
              v-if="selectedButton == 'selectedDomain'"
              class="text-md font-semibold rounded-lg border py-2 px-4 border-white col-span-1 flex flex-row text-[#091418] bg-white"
            >
              <div class="col-span-1 grid justify-items-end">
                <img src="/domain.webp" class="w-8" />
              </div>
              <div class="col-span-7 grid place-content-center ml-2">Domain</div>
            </div>

            <div
              v-else
              class="text-white text-md font-semibold rounded-lg border py-2 px-4 border-white col-span-1 flex flex-row hover:text-[#091418] hover:bg-white"
            >
              <div class="col-span-1 grid justify-items-end">
                <img src="/domain.webp" class="w-8" />
              </div>
              <div class="col-span-7 grid place-content-center ml-2">Domain</div>
            </div>
          </a>
        </div>
      </div>
      <!-- section-->

      <div class="grid place-content-center mb-48">
        <iframe :src="src" height="800" width="1240" frameBorder="0"></iframe>
      </div>
      <FooterComponentVue class=""/>
    </div>
  <!-- </div> -->
</template>
