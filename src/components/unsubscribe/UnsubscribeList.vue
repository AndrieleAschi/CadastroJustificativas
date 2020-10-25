<template>
  <div>
    <div class="title">
      <h2>{{ $ml.get('titleListUnsubscribe') }}</h2>
    </div>
    <SelectedLanguage />
    <div class="list">
      <div 
        v-bind:key="justification.id" 
        v-for="justification in justifications"
        class="list-group-item mb-2">
        <JustificationItem 
          v-bind:justification="justification"
          v-if="justification.language === $ml.get('language')"></JustificationItem>
      </div>
    </div>
    <div class="items-list">
      <p>{{ $ml.get('emailUnsubscrible') }} nome.sobrenome@pmweb.com.br</p>
      <button>{{ $ml.get('buttonUnsubscrible') }}</button>
      {{$ml.get('language')}}
    </div>
  </div>
</template>

<script>
import JustificationItem from './JustificationItem'

export default {
  name: 'UnsubscribeList',
  props :["justifications"],

  components: {
      JustificationItem,
  },
}
</script>
<style>

</style>
