<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>
          <h1>Header</h1>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <nav class="nav">
        <router-link
          v-for="route in routes"
          :key="route.path"
          class="nav-link"
          :to="route.path"
        >
          {{ route.name }}
        </router-link>
      </nav>
    </ion-content>
    <ion-footer>
      <ion-toolbar color="secondary">
        Footer
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
export default {
  name: 'Home',
  props: {
  },
  data() {
    return {

    };
  },
  computed: {
    routes() {
      const allLinks = this.$router.options.routes ?? [];
      const linksWithoutRedirects = allLinks.filter((link) => !('redirect' in link));

      return linksWithoutRedirects;
    },
  },
};

</script>

<style scoped lang="scss">
.nav {
  margin: 1rem;
}

.nav-link {
  display: block;
  padding: 1rem;
  border: 1px solid #c3c3c3;
  text-decoration: none;

  & + & {
    margin-top: 1rem;
  }
}

</style>
