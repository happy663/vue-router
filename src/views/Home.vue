<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページに行く</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      this.$router.push({
        name: "user-id-profile",
        params: { id: 1 },
      });
    },
  },
};
</script>
