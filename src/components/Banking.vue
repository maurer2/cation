<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
        <ion-title>
          <h1>Header</h1>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <h2>Banking</h2>

      <form @submit.prevent="handleSubmit">
        <ion-item>
          <ion-label position="floating">
            Account number
          </ion-label>
          <ion-input
            placeholder="Enter account number"
            required
            maxlength="8"
            type="number"
            clear-input
          />
        </ion-item>

        <ion-item>
          <ion-label position="floating">
            Sort code
          </ion-label>
          <ion-input
            placeholder="Enter sort code"
            required
            maxlength="6"
            type="number"
            clear-input
          />
        </ion-item>

        <ion-button type="submit">
          Submit
        </ion-button>
      </form>
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
  name: 'Banking',
  props: {
  },
  data() {
    return {

    };
  },
  methods: {
    handleSubmit() {
      console.log('submit');
    },
  },
};

</script>

<style scoped lang="scss">

</style>
