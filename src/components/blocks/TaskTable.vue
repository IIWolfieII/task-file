<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      headers: ["Task", "Hours Spent", "Date Added", "Actions"],
      tasks: [
        {
          name: "OTT",
          hoursSpent: 6,
          dateAdded: "12.05.2024",
        },
        {
          name: "Referral Campaign",
          hoursSpent: 8,
          dateAdded: "13.05.2024",
        },
      ],
    };
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    // increment() {
    //   this.count++;
    // },
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`);
  },
};
</script>

<template>
  <div class="bg-glass flex-1">
    <!-- <button @click="increment">Count is: {{ count }}</button> -->
    <table class="m-4 table-auto">
      <thead>
        <tr>
          <th class="py-2 px-4" v-for="header in this.headers">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in this.tasks">
          <td class="py-2 px-4" v-for="property in task">{{ property }}</td>
          <td class="flex">
            <button>
              <slot name="delete"></slot>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
