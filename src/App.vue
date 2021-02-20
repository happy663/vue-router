<template>
  <div style="width:700px;margin:auto;padding-top:200px;">
    <nav>
      <router-link to="/" class="link">Home</router-link>
      <router-link
        :to="{ name: 'user-id-profile', params: { id: 1 } }"
        
        class="link"
        >Users</router-link
      >
    </nav>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>
.link {
  margin-right: 10px;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
