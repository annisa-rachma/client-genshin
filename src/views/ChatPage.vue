<script>
import MessageComponentVue from '../components/MessageComponent.vue'
import FooterComponentVue from '../components/FooterComponent.vue'

import { ref, watch, nextTick } from 'vue'
// import { useAuth, useChat } from '../Firebase.js'

export default {
  components: {
    MessageComponentVue,
    FooterComponentVue
  },
  // setup() {
  //   const { user, isLogin } = useAuth()
  //   const { messages, sendMessage } = useChat()

  //   const bottom = ref(null)
  //   watch(
  //     messages,
  //     () => {
  //       nextTick(() => {
  //         bottom.value?.scrollIntoView({ behavior: 'smooth' })
  //       })
  //     },
  //     { deep: true }
  //   )

  //   const message = ref('')
  //   const send = () => {
  //     sendMessage(message.value)
  //     message.value = ''
  //   }

  //   return { user, isLogin, messages, bottom, message, send }
  // }
}
</script>

<template>
  <div class="w-[1280px] mx-auto grid h-auto absolute mt-[600px] left-0 right-0">
    <!--Chat title-->
    <div class="mr-24 ml-24 grid content-center text-center grid-cols-8">
      <div class="col-span-3 grid content-center justify-items-end">
        <img src="/arrow.png" class="w-[300px]" />
      </div>
      <h1 class="text-white col-span-2 text-3xl font-bold">Chats</h1>
      <div class="col-span-3 grid content-center justify-items-end rotate-180">
        <img src="/arrow.png" class="w-[300px]" />
      </div>
    </div>
    <!--Chat title-->

    <div class="mr-24 ml-24 grid content-center text-center grid-cols-3 mt-8 mb-48">
      <!--element-->
      <!-- <div class="col-span-3 grid grid-cols-7 mx-24 bg-slate-400 h-8"> -->
      <div class="container-sm col-span-3 mx-auto w-full">
        <!-- <div class=""> -->
        <!-- <MessageComponentVue
          v-for="{ id, text, userPhotoURL, userName, userId } in messages"
          :key="id"
          :name="userName"
          :photo-url="userPhotoURL"
          :sender="userId === user?.uid"
        >
          {{ text }}
        </MessageComponentVue> -->
        <!-- </div> -->
      </div>

      <div ref="bottom" class="" />

      <div class="bottom col-span-3 mt-8 mx-[200px]">
        <div class="container-sm">
          <form v-if="isLogin" @submit.prevent="send" class="flex flex-row">
            <input
              v-model="message"
              placeholder="Message"
              required
              class="bg-[#232E32] w-full text-white rounded-lg grid content-center text-left px-4 py-4"
            />
            <button type="submit" class="w-10 ml-2">
              <img src="/send.png" alt="" class="opacity-50 hover:opacity-100" />
            </button>
          </form>
        </div>
      </div>
      <!-- </div> -->
    </div>

    <FooterComponentVue />
  </div>
</template>
