<template>
<div id="App">
  <!--/header-->
  <app-header />

  <!--/main-->

  <router-view/>
  
  <!--/footer-->
  <app-footer />
</div>
</template>

<script>

import AppHeader from '@/components/shared/Header'
import AppFooter from '@/components/shared/Footer'
//import { required, maxLength, email, minLength, sameAs} from './components/Register'

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
    
    
  }
}
</script>