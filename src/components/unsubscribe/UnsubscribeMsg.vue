<template>
  <div>
    <v-col class="logo">
      <img src="@/assets/img/logo.png" alt="Logo">
    </v-col>
    <v-col class="informations">
      <div class="title">
        <h2>
          {{ $ml.get('titleUnsubscrible') }}
        </h2>
        <img src="@/assets/img/nuvem.png" alt="Nuvem triste">
      </div>
      <p>{{ $ml.get('txtUnsubscrible') }}</p>
    </v-col>
  </div>
</template>

<script>
export default {
  name: 'UnsubscribeMsg',
}
</script>

<style lang="scss">
  .logo {
    margin-bottom: 10%;
  }
  .informations {
    .title {
      h2 {
        font-weight: 700;
        font-size: 30px;
        font-style: normal;
        margin-bottom: 20px;
        margin-right: 10px;
        float: left;

        @media (max-width: 500px){
          font-size: 18px;
        }
      }
    }
    p {
      font-weight: 700;
      font-style: normal;
      font-size: 14px;
      line-height: 21px;
      padding-right: 30%;
      margin: 20px 0;
      width: 100%;
    }
  }
</style>