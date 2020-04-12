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
            :value="accountNumber"
            @input="accountNumber = $event.target.value"
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
            :value="sortCode"
            @input="sortCode = $event.target.value"
          />
        </ion-item>

        <ion-button type="submit">
          Submit
        </ion-button>

        <p v-if="showModulusCheckResults">
          Modulus check has been successful.
        </p>
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
import { addIcons } from 'ionicons';
import { checkmarkDoneCircleOutline } from 'ionicons/icons';

addIcons({
  'checkmark-circle-outline': checkmarkDoneCircleOutline,
});

export default {
  name: 'Banking',
  props: {
  },
  data() {
    return {
      accountNumber: '',
      sortCode: '',
      showModulusCheckResults: false,
      modulusCheck: false,
    };
  },
  methods: {
    async handleSubmit() {
      const isModulusCheckSuccessful = await this.getModulusCheckResults();

      if (isModulusCheckSuccessful) {
        this.showModulusCheckResults = true;
      }
    },
    async getModulusCheckResults() {
      try {
        const modulusCheckResults = new Promise((resolve) => {
          const accountNumberContainsNumbers = new RegExp(/^\d+$/).test(this.accountNumber);
          const accountNumberHasCorrectLength = this.accountNumber.length === 8;

          const sortCodeContainsNumbers = new RegExp(/^\d+$/).test(this.sortCode);
          const sortCodeHasCorrectLength = this.sortCode.length === 6;

          const checks = [
            accountNumberContainsNumbers,
            accountNumberHasCorrectLength,
            sortCodeContainsNumbers,
            sortCodeHasCorrectLength,
          ];

          const results = checks.every((check) => check);

          setTimeout(() => {
            resolve(results);
          }, 2000);
        });

        return modulusCheckResults;
      } catch (error) {
        return error;
      }
    },
  },
};

</script>

<style scoped lang="scss">

</style>
