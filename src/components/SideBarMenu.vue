<template>
  <div class="menu" v-if="isVisible">
    <ul>
      <li v-for="category in availableCategory" :key="category" @click="filterByCategory(category)">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    availableCategory: {
      type: Array,
      required: true
    }
  },
  methods: {
    filterByCategory(category) {
      this.$emit('filter-category', category); // Emit event to parent
    }
  }
};
</script>

<style scoped>
.menu {
  width: 100%;
  display: flex;
  justify-content: center; /* Центровка элементов */
  padding: 10px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
}

.menu ul {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 10px 20px;
  cursor: pointer;
  color: #333;
  border-right: 1px solid #e0e0e0;
  transition: background-color 0.3s, color 0.3s;
}

.menu li:hover {
  background-color: #007bff;
  color: white;
}

.menu li:last-child {
  border-right: none; /* Убираем линию справа для последнего элемента */
}
</style>
