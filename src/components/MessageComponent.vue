<script>
import AvatarProfileVue from './AvatarProfile.vue'

export default {
  components: { AvatarProfileVue },
  props: {
    name: { type: String, default: '' },
    photoUrl: { type: String, default: '' },
    sender: { type: Boolean, default: false }
  }
}
</script>

<template>
  <div class="mt-2  mx-[200px]">
    <div class="text-left ml-16 text-gray-500 text-sm">
      <span v-if="!sender">{{ name }}</span>
    </div>
    <div class="flex mt-1 " :class="sender ? 'flex-row-reverse' : ''">
      <AvatarProfileVue class="mt-1" :src="photoUrl" />
      <div class=" " :class="sender ? 'border border-white w-full text-white rounded-lg mr-4 grid content-center text-right py-2.5 px-4 mt-2' : ' w-full text-white rounded-lg border-white border ml-4 grid content-center text-left px-4'">
        <slot />
      </div>
    </div>
  </div>
</template>
