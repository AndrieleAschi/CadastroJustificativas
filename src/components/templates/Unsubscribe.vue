<template>
<v-container>
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
          <p>{{ $ml.get('emailUnsubscrible') }} <br><a>nome.sobrenome@pmweb.com.br</a></p>
          <button class="unsubscribe">{{ $ml.get('buttonUnsubscrible') }}</button>
        </div>
      </div>
    </div>
  </div>
  </v-container>
</template>

<script>
import UnsubscribeMsg from '@/components/UnsubscribeDetails/UnsubscribeMsg'
import SelectedLanguage from '@/components/UnsubscribeDetails/SelectedLanguage'
import JustificationItem from '@/components/UnsubscribeDetails/JustificationItem'

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
  .unsubscribe {
    background: #4569EF;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #FFFFFF;
    box-sizing: border-box;
    padding: 10px 40px;
    border-radius: 50px;
  }
}
</style>
