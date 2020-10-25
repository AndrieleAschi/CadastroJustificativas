<template>
  <div class="col-6">
    <div v-if="!justification.observacao">
      <span class="custom-radio">
          <input 
            type="radio" 
            class="custom-control-input" 
            v-bind:id="'id'+justification.id" 
            v-on:change="$emit('mark-todo-item', justification.id)"/>
      </span>
      <span v-bind:justification="'justification'+justification.txt">
          {{ justification.txt }}
      </span>
    </div>
    <div v-if="justification.observacao">
      <span class="custom-radio">
          <input 
            type="radio" 
            class="custom-control-input" 
            v-bind:id="'id'+justification.id" 
            v-on:change="$emit('mark-todo-item', justification.id)"/>
      </span>
      <span v-bind:justification="'justification'+justification.txt">
          {{ justification.txt }}
      </span>
      <span v-bind:justification="'justification'+justification.txt">
          <v-text-field
              v-model="observation"
              :rules="nameRules"
              :counter="150"
          ></v-text-field>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JustificationItem',
  props : ["justification"]
}
</script>
<style lang="scss">
  .custom-radio {
    margin-right: 10px;
  }
</style>


