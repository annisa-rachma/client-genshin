<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";
import FooterComponentVue from "../components/FooterComponent.vue";
import { gsap } from "gsap";

export default {
  data() {
    return {
      imageLoaded: false,
    };
  },
  components: {
    FooterComponentVue,
  },
  computed: {
    ...mapState(useCounterStore, ["characterData"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchById"]),
    handleImageLoaded() {
      setTimeout(() => {
        this.imageLoaded = true;
        this.$nextTick(() => {
          gsap.fromTo(
            ".character-image",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 2.5, ease: "power2.out" }
          );
        });
      }, 2000);
    },
  },
  created() {
    this.fetchById(this.$route.params.id);
  },
};
</script>

<template>
  <div class="w-[1280px] mx-auto grid h-auto absolute mt-36 left-0 right-0">
    <div class="mx-[150px] grid content-center text-center grid-cols-2">
      <div class="overflow-hidden grid content-center">
        <div
          v-if="!imageLoaded"
          class="grid place-content-center h-[100px] w-[150px] mt-[220px] ml-[150px] absolute"
        >
          <img class="h-[150px]" src="/paimon-loading.gif" alt="" />
        </div>

        <img
          :src="characterData.splashImage"
          class="h-[500px] w-auto object-cover character-image"
          :alt="characterData.name"
          @load="handleImageLoaded"
          :style="{ visibility: imageLoaded ? 'visible' : 'hidden' }"
        />
      </div>

      <div class="bg-bgColor rounded-xl border p-12 text-white border-white">
        <div class="text-4xl font-bold text-left">{{ characterData.name }}</div>
        <div>
          <img
            v-if="characterData.rarity == 5"
            src="/5star.png"
            class="h-4 mt-3"
          />
          <img v-else src="/4star.png" class="h-4 mt-3" />
        </div>
        <div class="grid grid-cols-3 divide-y">
          <div class="text-left mt-3 mb-4 text-md col-span-3">
            {{ characterData.charDescription }}
          </div>
          <div class="text-left font-semibold text-md py-4 col-span-1">
            Vision
          </div>
          <div class="text-left text-md py-4 col-start-2 col-span-2">
            {{ characterData.vision }}
          </div>
          <div class="text-left font-semibold text-md py-4 col-span-1">
            Birthday
          </div>
          <div class="text-left text-md py-4 col-start-2 col-span-2">
            {{ characterData.birthday }}
          </div>
          <div class="text-left font-semibold text-md py-4 col-span-1">
            Location
          </div>
          <div class="text-left text-md py-4 col-start-2 col-span-2">
            {{ characterData.location }}
          </div>
          <div class="text-left font-semibold text-md py-4 col-span-1">
            Title
          </div>
          <div class="text-left text-md py-4 col-start-2 col-span-2">
            {{ characterData.title }}
          </div>
          <div class="text-left font-semibold text-md py-4 col-span-1">
            Constellation
          </div>
          <div class="text-left text-md py-4 col-start-2 col-span-2">
            {{ characterData.constellation }}
          </div>
        </div>
        <div></div>
      </div>
    </div>

    <!-- title-->
    <div
      class="mr-24 ml-24 grid content-center text-center grid-cols-8 mt-16 mb-8"
    >
      <div class="col-span-3 grid content-center justify-items-end">
        <img src="/arrow.png" class="w-[300px]" />
      </div>
      <h1 class="text-white col-span-2 text-3xl font-bold">Talents</h1>
      <div class="col-span-3 grid content-center justify-items-end rotate-180">
        <img src="/arrow.png" class="w-[300px]" />
      </div>
    </div>
    <!-- title-->
    <div
      class="mx-[150px] grid content-center text-center grid-cols-3 mb-36 gap-4"
    >
      <div
        class="bg-bgColor rounded-xl border p-8 text-white border-white mb-8 divide-y"
      >
        <div class="flex flex-row">
          <div>
            <img :src="characterData.normalAttack.icon" class="h-auto w-16" />
          </div>
          <div
            class="text-left ml-4 grid place-content-center text-md font-semibold"
          >
            {{ characterData.normalAttack.name }}
          </div>
        </div>
        <div
          v-html="characterData.normalAttack.description"
          class="text-md font-normal pt-4 mt-4 text-left whitespace-pre-line"
        ></div>
      </div>

      <div
        class="bg-bgColor rounded-xl border p-8 text-white border-white mb-8 divide-y"
      >
        <div class="flex flex-row">
          <div>
            <img :src="characterData.elementalSkill.icon" class="h-auto w-16" />
          </div>
          <div
            class="text-left ml-4 grid place-content-center text-md font-semibold"
          >
            {{ characterData.elementalSkill.name }}
          </div>
        </div>
        <div class="pt-4 mt-4 text-left">
          <span class="font-semibold">Cooldown</span> :
          {{ characterData.elementalSkill.cooldown }}
        </div>
        <div class="pt-4 mt-4 text-left">
          <span class="font-semibold">Max Charge</span> :
          {{ characterData.elementalSkill.maxCharge }}
        </div>
        <div
          v-html="characterData.elementalSkill.description"
          class="text-md font-normal pt-4 mt-4 text-left whitespace-pre-line"
        ></div>
      </div>
      <div
        class="bg-bgColor rounded-xl border p-8 text-white border-white mb-8 divide-y"
      >
        <div class="flex flex-row">
          <div>
            <img :src="characterData.elementalBurst.icon" class="h-auto w-16" />
          </div>
          <div
            class="text-left ml-4 grid place-content-center text-md font-semibold"
          >
            {{ characterData.elementalBurst.name }}
          </div>
        </div>
        <div class="pt-4 mt-4 text-left">
          <span class="font-semibold">Cooldown</span> :
          {{ characterData.elementalBurst.cooldown }}
        </div>
        <div class="pt-4 mt-4 text-left">
          <span class="font-semibold">Max Charge</span> :
          {{ characterData.elementalBurst.maxCharge }}
        </div>
        <div
          v-html="characterData.elementalBurst.description"
          class="text-md font-normal pt-4 mt-4 text-left whitespace-pre-line"
        ></div>
      </div>
    </div>
    <FooterComponentVue />
  </div>
</template>
