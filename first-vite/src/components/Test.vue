<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import job from "../types/job";
import type { student } from "../types/student";

//also we can write
let age: string | number = 23;

export default defineComponent({
  data() {
    name: `Test`;
    // by ref
    const val = ref("ref");
    const dob = ref<number | string>(25);

    // by reactive
    const state = reactive({
      val: "reactive",
      dob: 22 as string | number,
    });
    //state.dob=true // can not change
    state.dob = 99; //can change
    console.log(state.dob);

    const jobs = ref<job[]>([
      { id: 1, title: "developer", location: "noida" },
      { id: 2, title: "developer", location: "noida" },
    ]);

    return {
      // val: "abc",
      // dob: "23/02" as string | number,
      // by ref
      val,
      dob,
      jobs,
      students: [] as student[],
    };
  },
  methods: {
    change(val: string) {
      val = "xyz";
      this.val = val;
      return val;
    },
    changeAge(dob: string | number) {
      console.log(age);

      dob = 2;
      this.dob = dob;
      return dob;
    },
    addArray() {
      this.students.push({ id: 1, title: "ram" });
      console.log(this.students);

      return this.student;
    },
  },
});
</script>

<template>
  <div class="test">
    <p>This is Test component</p>
    <p>{{ val }} {{ dob }}</p>
    <button @click="change(val)">Change value</button>
    <button @click="changeAge(dob)">Change age</button>
    <p v-for="job in jobs" v-bind:key="job">{{ job }}</p>
    <p>{{ jobs[0].title }}</p>
    <button @click="addArray()">Add array</button>
    <p></p>
  </div>
</template>
