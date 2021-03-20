<template>
    <div>
        <h1>Procrastination Station</h1>
        <AppLogin/>
           <AppRegister/> 
    
    </div>
</template>
<script>

import AppLogin from '../Login'
import AppRegister from '../Register'

export default {
  components: {
    appLogin: AppLogin,
    appRegister: AppRegister
    },
}
</script>