<template>
  <div class="col-6">
    <span class="custom-radio">
        <input type="radio" class="custom-control-input" v-bind:id="'id'+justification.id" v-on:change="$emit('mark-todo-item', justification.id)"/>
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
</template>

<script>
export default {
  name: 'JustificationItem',
  props : ["justification"]
}
</script>

