<template>
  <div class="test-store">
    <p>test store</p>
    <p>{{ values }}</p>
    <button @click="getStore">Get store value</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCarStore } from "../store/car";

export default defineComponent({
  name: `TestStore`,
  data() {
    return {
      values: [],
      carName: "audi4",
    };
  },
  computed: {
    updateCar() {
      return useCarStore().updateCar;
    },
  },
  methods: {
    getStore() {
      console.log("..re.", useCarStore().$state);
      this.values = useCarStore().$state;
      this.updateCar();
    },
  },
});
</script>
