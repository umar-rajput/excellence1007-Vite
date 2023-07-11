// store without state getters actions

import { defineStore } from "pinia";
import { ref } from "vue";
import { Cars } from "../types/cartype";

export const useCarStore = defineStore("carStore", () => {
  const cars = ref<Cars[]>([
    {
      id: 1,
      name: "Audi",
      engine: [{ name: "fuel", power: 2345678, type: "diesel" }],
    },
    {
      id: 2,
      name: "BMW",
      engine: [{ name: "electric", power: 87654, type: "electric" }],
    },
  ]);
  const updateCar = (name: string) => {
    console.log(name);
    console.log(cars.value[0].name);

    console.log("working...");

    // cars[0].name=name
  };
  return { cars, updateCar };
});
