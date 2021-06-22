<template>
  <div>
      <div>
          <div class="mt-3"><strong>MultiSelect</strong>
          <p>* Click and drag to select multiple items.</p></div>
    <b-form-select
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
      multiple :select-size="4"
      style="width: 25%"
    >
    </b-form-select>
    <div>Selected: <strong>{{ selected }}</strong></div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 'A',
        options: [
          { item: 'A', name: 'Option A' },
          { item: 'B', name: 'Option B' },
          { item: 'C', name: 'Option C' },
          { item: 'D', name: 'Option D' }
        ],
        userId: ''
      }
    },
    computed: {
        validation() {
            return this.userId.length > 4 && this.userId.length < 13
        }
    }
  }
</script>