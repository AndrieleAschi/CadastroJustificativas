<template>
  <div class="select__language">
    <multiselect 
      @input="changeLang" 
      :searchable="false" 
      v-model="value" 
      :options="option"
      selectLabel="" 
      selectedLabel="" 
      deselectLabel="">
      <template
        slot="singleLabel" 
        slot-scope="props">
        <country-flag  
          :country='props.option.country' 
          size='normal'/>
        <span class="country-text">
          {{ props.option.text }}
        </span>
      </template>
      <template 
        slot="option" 
        slot-scope="props">
        <country-flag  
          :country='props.option.country' 
          size='normal'/>
        <span class="country-text">
          {{ props.option.text }}
        </span>
      </template>
    </multiselect>
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'
import Multiselect from 'vue-multiselect'

export default {
  name: 'SelectedLanguage',

  components: {
    CountryFlag,
    Multiselect,
  },
  data () {
    return {
      value: { country: 'br', text: 'Português' },
      option: [
        { country: 'br', text: 'Português'},
        { country: 'es', text: 'Espanhol'},
        { country: 'us', text: 'Inglês'}
      ],
    }
  },
  methods: {
    changeLang (event) {
      if (event) {
        var bandeira = event.country
        switch (bandeira) {
          case 'br':
            this.$ml.change('pt')
            break
          case 'us':
            this.$ml.change('en')
            break
          case 'es':
            this.$ml.change('es')
        }
      } else {
        this.getDefaultLanguange()
      }
    },
    getDefaultLanguange () {
      var idioma = (navigator.browserLanguage !== undefined) ? navigator.browserLanguage : navigator.language
      var country = ''
      switch (idioma) {
        case 'pt-br':
        case 'pt-BR':
          country = 'br'
          break
        case 'es-ES':
        case 'es-es':
        case 'es':
          country = 'es'
          break
        case 'en-US':
        case 'en-us':
        case 'en':
          country = 'us'
          break
        default:
          country = 'br'
      }
      var language = { country: country }
      this.value = language
      this.changeLang(language)
    },
  },
  mounted () {
    this.getDefaultLanguange()
  }
}
</script>
<style lang="scss">

.select__language {
  padding: 0px 0px;
  margin-bottom: 15px;
  width: 20%;

  .multiselect {
    ul {
      padding: 0;
      background: #ffffff;
    }

    .multiselect__content-wrapper{
      max-height: 0 !important;
      background: #ffffff;
    }
    .multiselect__tags {
      background: #ffffff;
      height: 45px;
      padding: 0;
      overflow: hidden;
      border: 2px solid #EEEEEE;
      border-radius: 5px;
    }
    .multiselect__element { //bandeiras
      list-style: none;

      .multiselect__option {
        cursor: pointer;
        background: #ffffff;        

        .country-text { // texto
          position: absolute;
          padding: 10px 0;
          text-align: center;
          background: #ffffff;
        }
      }
    }
    .multiselect__single { // bandeira
      background: #ffffff;
      cursor: pointer;

      .country-text { // texto
        position: absolute;
        padding: 10px 0;
        text-align: center;
        background: #ffffff;
      }
    }
  } 
}
</style>