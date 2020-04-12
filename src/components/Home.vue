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
      <ion-slides
        pager="true"
        :options="slideOptions"
      >
        <ion-slide>
          <div class="slide-content">
            <h2 class="slide-title">
              Carbon
            </h2>
            <ion-img
              class="slide-image"
              src="carbon.svg"
            />
          </div>
        </ion-slide>
        <ion-slide>
          <div class="slide-content">
            <h2 class="slide-title">
              Astatine
            </h2>
            <ion-img
              class="slide-image"
              src="astatine.svg"
            />
          </div>
        </ion-slide>
      </ion-slides>
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
      slideOptions: {
        initialSlide: 1,
        speed: 400,
      },
    };
  },
};

</script>

<style scoped lang="scss">
.slide-content {
  display: block;
}

.slide-title {

}
.slide-image {
  max-width: 75%;
  margin: auto;
}
</style>
