<template>
  <div class="form">
    <form @submit="addItem">
      <v-col
        cols="12"
        md="12"
      >
      <!-- <div class="language">
        <tr>
          <th><img src="" alt=""> Português</th>
          <th><img src="" alt=""> Inglês</th>
          <th><img src="" alt=""> Espanhol</th>
        </tr>
      </div> -->
        <h3>Justificativa</h3>
        <input
          type="text"
          v-model="txt"
          placeholder="Digite um motivo para fazer opt out"
          required
        >
        <!-- <v-checkbox
        v-model="observacao"
        label="Permitir que o usuário informe uma observação."
        value="permitir observação"
        ></v-checkbox> -->
        <input type="submit" value="submit" class="btn btn-info">
      </v-col>
    </form>
  </div>
</template>

<script>
import uuid from 'uuid/v4';
export default {
  name: 'JustificationForm',

  data(){
    return {
        txt: '',
        id: ''
    }
  },
  
  methods: {
    addItem(e){
        e.preventDefault();
        //add new item
        const newJustItem = {
            txt: this.txt,
            id: uuid(),
        }
        //send to parent
        this.$emit('add-item-event', newJustItem);
        //clear the field
        this.txt='';
    }
  },

  watch: {
    txt:{
      handler(){
        if(this.txt === ''){
            this.txt = null;
        }
      }
    }
  }
}
</script>

