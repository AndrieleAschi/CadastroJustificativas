<template>
  <div>
    <div class="title">
      <h2>{{ $ml.get('titleListUnsubscribe') }}</h2>
    </div>
    <div class="list">
      <p class="card-text" v-if="!justifications">Your Todo List is empty. Add something! </p>
      <div 
        v-bind:key="justification.id" 
        v-for="justification in justifications" 
        class="list-group-item mb-2">
          <JustificationItem v-bind:justification="justification"></JustificationItem>
      </div>
    </div>
    <div class="items-list">
      <p>{{ $ml.get('emailUnsubscrible') }} nome.sobrenome@pmweb.com.br</p>
      <button>{{ $ml.get('buttonUnsubscrible') }}</button>
    </div>
  </div>
</template>

<script>
import JustificationItem from './JustificationItem'
export default {
  name: 'JustificationList',
  props : ["justifications"],

  components: {
      JustificationItem
  },
}
</script>
<style>

</style>
