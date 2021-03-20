<template>
<div id="App">
  <!--/header-->
  <app-header></app-header>

  <!--/main-->
  <router-view></router-view>
  <!--/footer-->
  <app-footer></app-footer>
</div>
</template>

<script>

import AppHeader from './components/shared/Header'
import AppFooter from './components/shared/Footer'
//import { required, maxLength, email, minLength, sameAs} from './components/Register'

export default {
  name: "App",
  components: {
    appHeader: AppHeader,
    appFooter: AppFooter
    
    
  }
}
</script>