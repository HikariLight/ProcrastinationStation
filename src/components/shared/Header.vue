<template>
  <header id="header">
    <div class="header-middle">
      <!--header-middle-->
      <div class="container">
        <div class="row">
          <div class="col-sm-4" style="text-align: left;">
            <div class="logo">
              <a href="index.html">
                <img src="../images/to-do-list.png" alt="Logo" style="text-align: center;">
              </a>
            </div>
          </div>

          <div class="col-sm-8 header-middle-menu">
            <div class="shop-menu pull-left">
              <ul class="nav navbar-nav" v-if="!IsUserAuthenticated">
                <li>
                  <router-link to="/Login" active-class="active" ><i class="fa fa-lock"></i>  login</router-link>
                </li>
                <li>
                 <router-link to="/Register" active-class="active" ><i class="fa fa-user"></i> register</router-link>

                </li>
              </ul>
              <ul class="nav navbar-nav" v-else>
                <li>
                  <a> <i class="fa fa-user"></i> {{ UserFullName }} Welcome Dear, </a>
                </li>
                <li>
                  <a style="cursor:pointer" @click="SignOutUser()"> <i class="fa fa-lock"></i> Exit</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <!--header-bottom-->
      <div class="container">
        <div class="row">
          <div class="col-sm-9 pull-left">
            
            <div class="mainmenu pull-right">
              <ul class="nav navbar-nav collapse navbar-collapse">
                <li>
                  <router-link to="/" active-class="active" exact>Home</router-link>
                </li>
                <li class="dropdown">
                  <router-link to="/Todo" active-class="active">What to do</router-link>
                </li>
                <li>
                  <router-link to="/Doing" active-class="active">Doing well</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-bottom-->
  </header>
</template>

<script>
export default {
  computed: {
    IsUserAuthenticated() {
      return this.$store.getters.IsUserAuthenticated;
    },
    UserFullName() {
      return this.$store.getters.GetUserFullName;
    }
  },
  methods: {
    CheckForLogin() {
      this.$store.dispatch("CheckForLogin");
    },
    SignOutUser() {
      this.$store.dispatch("SignOutUser");
    }
  },
  created() {
    this.CheckForLogin();
  }
};
</script>
