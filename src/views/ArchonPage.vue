<script>
import FooterComponentVue from '../components/FooterComponent.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default {
  components : {
    FooterComponentVue
  },
  methods: {
    handleMoveToDetail(id) {
      this.$router.push(`/characters/${id}`)
      this.scrollToTop()
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  mounted() {
    // Animate each archon block on scroll
    const sections = document.querySelectorAll('.archon-section')

    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    })
  },
}
</script>

<template>
  <div class="w-[1280px] mx-auto grid h-auto mt-40 absolute left-0 right-0">
    <div class="mx-[150px] grid content-center mb-36 text-center grid-cols-5">
      <a href="#venti">
        <div class="hover:scale-125 transition-transform duration-300 ease-in-out">
          <img src="/venti-a.png" alt="" />
        </div>
      </a>
      <a href="#zhongli">
        <div class="hover:scale-125 transition-transform duration-300 ease-in-out">
          <img src="/zhongli.png" alt="" />
        </div>
      </a>
      <a href="#raiden">
        <div class="hover:scale-125 transition-transform duration-300 ease-in-out">
          <img src="/raiden.png" alt="" /></div
      ></a>
      <a href="#nahida">
        <div class="hover:scale-125 transition-transform duration-300 ease-in-out">
          <img src="/nahida.png" alt="" /></div
      ></a>
      <a href="#furina">
        <div class="hover:scale-125 transition-transform duration-300 ease-in-out">
          <img src="/furina.png" alt="" /></div
      ></a>
    </div>

    <!-- title-->
    <div class="mr-24 ml-24 grid content-center text-center grid-cols-8">
      <div class="col-span-3 grid content-center justify-items-end">
        <img src="/arrow.png" class="w-[300px]" />
      </div>
      <h1 class="text-white col-span-2 text-3xl font-bold">Archons</h1>
      <div class="col-span-3 grid content-center justify-items-end rotate-180">
        <img src="/arrow.png" class="w-[300px]" />
      </div>
    </div>
    <!-- title-->

    <div class="mx-[150px] grid content-center mb-36 mt-8 text-center grid-cols-6 divide-y">
      <!--Venti-->
      <div id="venti" class="archon-section col-span-6 grid grid-cols-6 py-8 scroll-mt-20">
        <div class="col-span-4 text-white grid content-center pl-8 pb-8 text-left">
          <div class="text-5xl font-bold">Venti</div>
          <div class="text-3xl font-semibold mt-2">Anemo Archon</div>
          <div class="mt-2">
            <p>
              Venti, also known as Barbatos, is the Anemo Archon that rules over the nation of
              Mondstadt. Known publically as Venti, one of the many bards that have arrived in
              Mondstadt, he spends his time singing songs and poems to earn his keep before
              indulging in Mondstadt's famous wines. As he reveals to the Traveler early into the
              Mondstadt Chapter, he is the Anemo Archon Barbatos and recruits their help in finding
              a way to appease Stormterror Dvalin.
            </p>
          </div>
          <a @click.prevent="handleMoveToDetail(10000022)" href="">
            <div
              class="text-center col-span-2 text-white font-semibold w-[150px] mt-4 h-10 grid place-content-center rounded-lg border border-white hover:text-[#091418] hover:bg-white"
            >
              More details...
            </div>
          </a>
        </div>
        <div class="col-span-2 grid justify-items-end">
          <div class="">
            <img src="/venti-a.png" alt="" />
          </div>
        </div>
      </div>
      <!--Venti-->

      <!--Zhongli-->
      <div id="zhongli" class="archon-section col-span-6 grid grid-cols-6 py-8 scroll-mt-20">
        <div class="col-span-2 grid justify-items-start">
          <div class="">
            <img src="/zhongli.png" alt="" />
          </div>
        </div>
        <div class="col-span-4 text-white grid content-center pl-8 pb-8 text-left">
          <div class="text-5xl font-bold">Zhongli</div>
          <div class="text-3xl font-semibold mt-2">Geo Archon</div>
          <div class="mt-2">
            <p>
              Zhongli is a highly cultured and erudite figure contracted by Wangsheng Funeral
              Parlor. He is a composed, dutiful, and respectful individual who is well-versed in
              Liyue's arts, literature, history, and customs, including those that have been
              neglected or distorted over the ages. As revealed in the Liyue Chapter, Zhongli's true
              identity is that of Morax, also commonly known as Rex Lapis by the locals, the former
              Geo Archon, and the ruler of Liyue. Aware that his reign as the nation's deity may be
              nearing its end, Morax works with the Fatui to set in motion the events of the Liyue
              Chapter as a litmus test for the readiness of the Liyue people to forge their own
              path, free from his guidance and protection.
            </p>
          </div>
          <a @click.prevent="handleMoveToDetail(10000030)" href="">
            <div
              class="text-center col-span-2 text-white font-semibold w-[150px] mt-4 h-10 grid place-content-center rounded-lg border border-white hover:text-[#091418] hover:bg-white"
            >
              More details...
            </div>
          </a>
        </div>
      </div>
      <!--Zhongli-->

      <!--Raiden-->
      <div id="raiden" class="archon-section col-span-6 grid grid-cols-6 py-8 scroll-mt-20">
        <div class="col-span-4 text-white grid content-center pt-5 pl-8 pb-8 text-left">
          <div class="text-5xl font-bold">Raiden Shogun</div>
          <div class="text-3xl font-semibold mt-2">Electro Archon</div>
          <div class="mt-2">
            <p>
              The Raiden Shogun, true name Ei, is the Electro Archon and the exalted ruler of the
              island nation of Inazuma. Despite her status as the incarnation of thunder itself,
              transient and instantaneous, she is committed to the pursuit of Eternity, the
              preservation of Inazuma in a world where Celestia destroys all unwanted civilizations,
              due to her wish to never lose the things that are precious to her ever again.
            </p>
          </div>
          <a @click.prevent="handleMoveToDetail(10000052)" href="">
            <div
              class="text-center col-span-2 text-white font-semibold w-[150px] mt-4 h-10 grid place-content-center rounded-lg border border-white hover:text-[#091418] hover:bg-white"
            >
              More details...
            </div>
          </a>
        </div>
        <div class="col-span-2 grid justify-items-end">
          <div class="">
            <img src="/raiden.png" alt="" />
          </div>
        </div>
      </div>
      <!--Raiden-->

      <!--Nahida-->
      <div id="nahida" class="archon-section col-span-6 grid grid-cols-6 py-8 scroll-mt-20">
        <div class="col-span-2 grid justify-items-start">
          <div class="">
            <img src="/nahida.png" alt="" />
          </div>
        </div>
        <div class="col-span-4 text-white grid content-center pl-8 pb-8 text-left">
          <div class="text-5xl font-bold">Nahida</div>
          <div class="text-3xl font-semibold mt-2">Dendro Archon</div>
          <div class="mt-2">
            <p>
              Nahida is a newly emerging deity in Sumeru, succeeding Greater Lord Rukkhadevata. This
              role stands in contrast to the enigmatic Lesser Lord Kusanali, who symbolizes ongoing
              divine protection. While Nahida's origins, abilities, and purpose remain uncertain,
              doubts arise due to Kusanali's vague responses, casting doubt on the revival of
              previous wisdom. The Akasha, inherited from Rukkhadevata, now aids Nahida by observing
              human emotions. Nahida appreciates people's loyalty to the former goddess while
              understanding their skepticism toward her. She willingly embraces the responsibility
              to mature quickly and confront formidable challenges in the world. Despite potential
              misconceptions, Nahida embraces her role with unwavering dedication and resilience.
            </p>
          </div>
          <a @click.prevent="handleMoveToDetail(10000073)" href="">
            <div
              class="text-center col-span-2 text-white font-semibold w-[150px] mt-4 h-10 grid place-content-center rounded-lg border border-white hover:text-[#091418] hover:bg-white"
            >
              More details...
            </div>
          </a>
        </div>
      </div>
      <!--Nahida-->

      <!--furina-->
      <div id="furina" class="archon-section col-span-6 grid grid-cols-6 py-8 scroll-mt-20">
        <div class="col-span-4 text-white grid content-center pt-5 pl-8 pb-8 text-left">
          <div class="text-5xl font-bold">Furina</div>
          <div class="text-3xl font-semibold mt-2">Hydro Archon</div>
          <div class="mt-2">
            <p>
              Focalors, also known as Lady Furina, is the God of Justice and the current Hydro
              Archon among The Seven who presides over Fontaine. Little is currently known about
              her, besides the fact that she is not one of the original members of The Seven who
              emerged after the end of the Archon War.
            </p>
          </div>
          <a @click.prevent="handleMoveToDetail(10000089)" href="">
            <div
              class="text-center col-span-2 text-white font-semibold w-[150px] mt-4 h-10 grid place-content-center rounded-lg border border-white hover:text-[#091418] hover:bg-white"
            >
              More details...
            </div>
          </a>

        </div>
        <div class="col-span-2 grid justify-items-end">
          <div class="">
            <img src="/furina.png" alt="" />
          </div>
        </div>
      </div>
      <!--furina-->

      <!--mavuika-->
      <div id="mavuika" class="archon-section col-span-6 grid grid-cols-6 py-8 scroll-mt-20">
        <div class="col-span-2 grid justify-items-start">
          <div class="">
            <img src="/zhongli.png" alt="" />
          </div>
        </div>
        <div class="col-span-4 text-white grid content-center pl-8 pb-8 text-left h-full">
          <div class="text-5xl font-bold">Mavuika</div>
          <div class="text-3xl font-semibold mt-2">Pyro Archon</div>
          <div class="mt-2">
            <p>
              Blazing with righteous fury and boundless passion, Mavuika rules Natlan with a fiery heart. Embodying both the chaos of battle and the warmth of devotion, she inspires warriors and artists alike. Her presence ignites courage, her gaze burns with truth—and her will, like flame, never yields.
            </p>
          </div>
          <a @click.prevent="handleMoveToDetail(10000106)" href="">
            <div
              class="text-center col-span-2 text-white font-semibold w-[150px] mt-4 h-10 grid place-content-center rounded-lg border border-white hover:text-[#091418] hover:bg-white"
            >
              More details...
            </div>
          </a>
        </div>
      </div>
      <!--Zhongli-->
    </div>

    

    <FooterComponentVue/>
  </div>
</template>
