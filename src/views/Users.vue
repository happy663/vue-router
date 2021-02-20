<template>
  <div>
    <h3>User</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr />
    <h1>User No.{{ id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'" class="link"
      >次へユーザへ</router-link
    >
    <router-link
      :to="{ name: 'user-id-profile', params: { id: Number(id) + 1 } }"
      class="link"
      >Name付き次のユーザーへ</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style scoped>
.link {
  margin-right: 10px;
}
</style>
