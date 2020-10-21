<template>
  <div>
    <v-container>
      <v-col class="col-12">
      <img src="logo.png" alt="Logo">
      </v-col>
      <v-col class="col-12 informations">
        <span>{{ $ml.get('titleUnsubscrible') }} <img src="nuvem.png" alt="nuvem.png"></span>
        <p>{{ $ml.get('txtUnsubscrible') }}</p>
      </v-col>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'UnsubscribeMsg',
}
</script>