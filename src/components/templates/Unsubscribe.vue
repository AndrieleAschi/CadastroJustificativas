<template>
  <div class="layout">
    <div class="d-flex">
      <div class="align-start flex-column col-6">
        <UnsubscribeMsg/>
      </div>
      <div class="align-end flex-column col-10">
        <div class="list">
          <div class="language">
            <SelectedLanguage/>
          </div>
          <h2>{{ $ml.get('titleListUnsubscribe') }}</h2>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UnsubscribeMsg from '@/components/unsubscribe/UnsubscribeMsg'
import SelectedLanguage from '@/components/unsubscribe/SelectedLanguage'
import JustificationItem from '@/components/unsubscribe/JustificationItem'

export default {
  components: {
    UnsubscribeMsg,
    SelectedLanguage,
    JustificationItem
  },

  props :["justifications"],
}
</script>
<style lang="scss" scoped>
@media(min-width: 1024px){
 .layout {
   h2 {
     font-family: Roboto;
     font-weight: 500;
     font-style: normal;
     font-size: 32px;
     line-height: 35px;
     margin-bottom: 30px;
   }
   .language {
     margin-left: 40%;
     margin-bottom: 40px;
   }
 }
}
@media(max-width: 500px){
}
</style>
