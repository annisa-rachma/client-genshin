<script>
import NavBarVue from './components/NavBar.vue'
// import FooterComponentVue from './components/FooterComponent.vue'

export default {
  components : {
    NavBarVue

  }
}
</script>

<template>
 <div>
    <NavBarVue/>
   <RouterView />

 </div>

</template>
