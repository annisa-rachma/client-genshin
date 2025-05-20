<script>
import AvatarProfileVue from './AvatarProfile.vue'
// import { useAuth } from '../Firebase.js'

export default {
  components: { AvatarProfileVue },
  // setup() {
  //   const { user, isLogin, signOut, signIn } = useAuth()
  //   return { user, isLogin, signOut, signIn }
  // }
}
</script>

<template>
  <!--hero image + navbar-->
  <div
    class="bg-center bg-no-repeat overflow-visible absolute w-[1520px] h-auto top-0 left-0 right-0 mx-auto"
  >
    <img
      v-if="this.$route.path === '/maps'"
      src="/hero-image.png"
      class="absolute w-[1520px] h-auto left-0 top-0 opacity-30"
    />
    <img
      v-else-if="this.$route.path === '/game'"
      src="/hero-image.png"
      class="absolute w-[1520px] h-auto left-0 top-0 opacity-30"
    />
    <img v-else src="/hero-image.png" class="absolute w-[1520px] h-auto left-0 top-0" />

    <!--hero image home-->
    <div v-if="this.$route.path === '/'" class="mr-24 ml-24 absolute grid grid-cols-7 h-[500px]">
      <div class="col-span-4 mt-20 text-white grid place-content-center">
        <h1 class="text-3xl font-bold ml-[280px]">Embark on an Epic Journey with Genshin Info!</h1>
        <p class="text-xl font-semibold ml-[280px]">Your Gateway to Teyvat's Wonders Awaits</p>
      </div>
      <div class="col-span-3 mt-20 grid justify-item-start ml-16 content-center">
        <img src="/Paimon_Infobox.webp" class="h-[320px]" />
      </div>
    </div>
    <!--hero image home-->

    <!--hero image archons-->
    <div
      v-if="this.$route.path === '/archons'"
      class="mr-24 ml-24 absolute grid grid-cols-5 h-[500px]"
    >
      <div>
        <img src="" alt="" />
      </div>
    </div>
    <!--hero image archons-->

    <!--hero image maps-->
    <div
      v-if="this.$route.path === '/maps'"
      class="mr-24 ml-24 absolute grid grid-cols-5 h-[500px]"
    >
      <div>
        <img src="" alt="" />
      </div>
    </div>
    <!--hero image maps-->

    <!--hero image game-->
    <div
      v-if="this.$route.path === '/game'"
      class="mr-24 ml-24 absolute grid grid-cols-5 h-[500px]"
    >
      <div>
        <img src="" alt="" />
      </div>
    </div>
    <!--hero image game-->

    <!--hero image chats-->
    <div
      v-if="this.$route.path === '/chats'"
      class="mr-24 ml-24 absolute grid grid-cols-7 h-[500px]"
    >
      <div class="col-span-4 mt-20 text-white grid place-content-center">
        <h1 class="text-3xl font-bold ml-[280px]">Hey, wanna team up with another fellow Traveler?</h1>
        <p class="text-xl font-semibold ml-[280px]">
          Time to sign in and embark on this chat adventure!
        </p>
      </div>
      <div class="col-span-3 mt-20 ml-16 grid justify-item-start content-center">
        <img src="/Paimon_Infobox.webp" class="h-[320px]" />
      </div>
    </div>
    <!--hero image chats-->
    <!--navbar-->
    <div
      class="bg-[#091418] w-[1520px] absolute bg-opacity-50 h-20 grid grid-cols-7 place-content-center"
    >
      <div class="text-white mr-24 ml-24 grid col-span-7 grid-cols-7">
        <a @click.prevent="$router.push('/')" href="">
        <div class="col-span-1 grid place-content-center">
          <img class="h-[50px] w-auto" src="/logo-genshin.png" alt="" />
        </div>
        </a>
        <div
          class="col-span-5 grid grid-cols-5 mx-36 place-content-center text-white text-center text-lg"
        >
          <div>
            <a v-if="this.$route.path === '/'" @click.prevent="$router.push('/')" href="">
              <div class="text-sky-300">Home</div>
            </a>
            <a v-else @click.prevent="$router.push('/')" href="">
              <div class="hover:text-sky-300 text-white">Home</div>
            </a>
          </div>

          <div>
            <a
              v-if="this.$route.path === '/archons'"
              @click.prevent="$router.push('/archons')"
              href=""
            >
              <div class="text-sky-300">Archons</div>
            </a>
            <a v-else @click.prevent="$router.push('/archons')" href="">
              <div class="hover:text-sky-300 text-white">Archons</div>
            </a>
          </div>

          <div>
            <a v-if="this.$route.path === '/maps'" @click.prevent="$router.push('/maps')" href="">
              <div class="text-sky-300">Maps</div>
            </a>
            <a v-else @click.prevent="$router.push('/maps')" href="">
              <div class="hover:text-sky-300 text-white">Maps</div>
            </a>
          </div>

          <div>
            <a v-if="this.$route.path === '/game'" @click.prevent="$router.push('/game')" href="">
              <div class="text-sky-300">Puzzles</div>
            </a>
            <a v-else @click.prevent="$router.push('/game')" href="">
              <div class="hover:text-sky-300 text-white">Puzzles</div>
            </a>
          </div>
          <div>
            <a v-if="this.$route.path === '/chats'" @click.prevent="$router.push('/chats')" href="">
              <div class="text-sky-300">Chats</div>
            </a>
            <a v-else @click.prevent="$router.push('/chats')" href="">
              <div class="hover:text-sky-300 text-white">Chats</div>
            </a>
          </div>
        </div>

        <!----->
        <div class="col-span-1 grid place-content-center">
          <div v-if="isLogin" class="login grid grid-cols-3">
            <div class="col-span-1">
              <AvatarProfileVue :src="user.photoURL" />
            </div>
            <a  href="">
              <div
                class="text-center col-span-2 text-white text-lg font-semibold w-24 h-10 grid place-content-center rounded-lg border border-white hover:bg-sky-300 hover:text-white hover:border-sky-300"
              >
                Sign Out
              </div>
            </a>
            <!-- <button class="text-gray-400 hover:text-white" @click="signOut">Sign Out</button> -->
          </div>
          <a v-else  href="">
            <div
              class="text-center text-white text-lg font-semibold w-24 h-10 grid place-content-center rounded-lg border border-white hover:bg-sky-300 hover:text-white hover:border-sky-300"
            >
              Sign In
            </div>
          </a>
        </div>
      </div>
    </div>
    <!--navbar-->
  </div>
  <!--hero image + navbar-->
</template>
