<script>
import headbreaker from 'headbreaker'
import FooterComponentVue from '../components/FooterComponent.vue'

const drawPuzzle = () => {
  let xul = new Image()

  let images = [
    '/puzzle1.jpeg',
    '/puzzle2.jpeg',
    '/puzzle3.jpeg',
    '/puzzle4.jpeg',
    '/puzzle5.jpeg',
    '/puzzle6.jpeg',
    '/puzzle7.jpg',
    '/puzzle8.jpg'
  ]
  xul.src = images[Math.floor(Math.random() * images.length)]

  xul.onload = () => {

    const puzzleContainer = document.getElementById('puzzle')
      if (puzzleContainer) {
        puzzleContainer.innerHTML = ''
      }
  
    const autogen = new headbreaker.Canvas('puzzle', {
      width: 900,
      height: 500,
      pieceSize: 100,
      proximity: 20,
      borderFill: 10,
      strokeWidth: 2,
      lineSoftness: 0.18,
      painter: new headbreaker.painters.Konva(),
      image: xul,
      preventOffstageDrag: true,
      fixed: true
    })
  
    autogen.adjustImagesToPuzzleHeight()
    autogen.autogenerate({
      horizontalPiecesCount: 5,
      verticalPiecesCount: 3
    })
  
    autogen.shuffleGrid()
  
    autogen.draw()
  }

}

export default {
  components: {
    FooterComponentVue
  },
  methods: {
    changeImage() {
      drawPuzzle()
    }
  },
  mounted() {
    drawPuzzle()
  }
}
</script>

<template>
  <div class="w-[1280px] mx-auto grid h-auto absolute mt-36 left-0 right-0">
    <!--maps title-->
    <div class="mr-24 ml-24 grid content-center text-center grid-cols-8">
      <div class="col-span-3 grid content-center justify-items-end">
        <img src="/arrow.png" class="w-[300px]" />
      </div>
      <h1 class="text-white col-span-2 text-3xl font-bold">Puzzles</h1>
      <div class="col-span-3 grid content-center justify-items-end rotate-180">
        <img src="/arrow.png" class="w-[300px]" />
      </div>
    </div>
    <!--maps title-->

    <div
      class="mx-auto w-36 mt-8 grid place-content-center text-white text-md font-semibold rounded-lg border py-2 px-4 border-white hover:text-[#091418] hover:bg-white"
    >
      <button @click.prevent="changeImage">Change Image</button>
    </div>

    <div
      id="app"
      class="grid mt-8 mb-48 place-content-center mx-auto rounded-lg border border-white overflow-hidden"
    >
      <div id="puzzle"></div>
    </div>

    <FooterComponentVue />
  </div>
</template>
