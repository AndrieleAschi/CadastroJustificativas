<template>
  <div class="select__language">
    <multiselect @input="changeLang" :searchable="false" v-model="value" :options="option" selectLabel="" selectedLabel="" deselectLabel="" placeholder="">
      <template slot="singleLabel" slot-scope="props">
        <country-flag  :country='props.option.country' size='normal'/>
      </template>
      <template slot="option" slot-scope="props">
        <country-flag  :country='props.option.country' size='normal'/>
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
      value: { country: 'br' },
      option: [
        { country: 'br' },
        { country: 'es' },
        { country: 'us' }
      ],
      isModalVisible: false,
      menuIsVisible: false
    }
  },
  methods: {
    handleDropdowMenuShow () {
      this.menuIsVisible = true
    },
    handleDropdowMenuHide () {
      this.menuIsVisible = false
    },
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
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }
  },
  mounted () {
    this.getDefaultLanguange()
  }
}
</script>
<style lang="scss">
.select__language {
  padding: 0px 16px;
  margin-bottom: 15px;
    .multiselect {
      box-shadow: 0px 4px 4px rgba(101, 101, 101, 0.24);
      border-radius: 4px;
      .multiselect__tags {
        background: #FFF8F3;
        height: 40px;
        padding: 0px 40px 0 8px;
      overflow: hidden;
      }
      .multiselect__single {
        background: #FFF8F3;
      }
    }
}
</style>