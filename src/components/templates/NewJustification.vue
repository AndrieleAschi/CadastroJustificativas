<template>
  <div class="form">
    <v-container>
    <div class="title">
      <h2>Adicionar nova justificativa</h2>
    </div>
    <form @submit="addItem">
      <v-col 
        cols="12" 
        md="12">
        <div class="language">
          <v-radio-group v-model="language">
            <v-radio value="br">
              <template v-slot:label>
                <div class="select-country">
                  <img src="@/assets/img/br.jpg"> 
                  <span>Português</span>
                </div>
              </template>
            </v-radio>
            <v-radio value="es">
              <template v-slot:label>
                <div class="select-country">
                  <img src="@/assets/img/esp.png"> 
                  <span>Espanhol</span>
                </div>
              </template>
            </v-radio>
            <v-radio value="en">
              <template v-slot:label>
                <div class="select-country">
                  <img src="@/assets/img/usa.png">
                  <span>Inglês</span>
                </div>
              </template>
            </v-radio>
          </v-radio-group>
        </div>
        <h3> Justificativa </h3>
        <v-text-field
          v-model="txt"
          :counter="max"
          :rules="rules"
          label="Digite um motivo para fazer opt out"
          required
        ></v-text-field>
        <v-checkbox
          v-model="observacao"
          label="Permitir que o usuário informe uma observação."
          value="permitir observação"
        >
        </v-checkbox>
        <input 
          type="submit" 
          value="Salvar alterações" 
          class="btn btn-info">
      </v-col>
    </form>
    </v-container>
  </div>
</template>

<script>
import uuid from 'uuid/v4';
export default {
  name: 'NewJustification',

  data(){
    return {
        id: '',
        txt: '',
        observacao: false,
        language: 'br'
    }
  },
  
  methods: {
    addItem(e){
        e.preventDefault();
        //add new item
        const newJustItem = {
            txt: this.txt,
            observacao: this.observacao,
            language: this.language,
            id: uuid()
        }
        //send to parent
        this.$emit('add-item-event', newJustItem);
        //clear the field
        this.txt = '';
        this.observacao = false;
        this.language = 'br';
    }
  },

  watch: {
    txt:{
      handler(){
        if(this.txt === ''){
            this.txt = null;
        }
      },
    }
  }
}
</script>
<style lang="scss">
.btn-info {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 21px;
  align-items: center;
  text-align: center;
  color: #C2C2C2;
  border-radius: 50px;
  border: 1px solid #C2C2C2;
  background: #FFFFFF;
  box-sizing: border-box;
  padding: 10px 60px;
}

.btn-info:focus {
  border: 1px solid #C2C2C2 !important;
  border-radius: 50px !important;
  outline: red;
}

.btn {
  float: right;
}

h3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
}

.select-country {
  img {
    max-width: 20px;
  }
  span {
    float: right;
    margin: 0 5px;
  }
}
</style>