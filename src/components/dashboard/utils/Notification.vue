<script setup lang="ts">
import { ref } from 'vue';


</script>

<template>
    <div class="notification-bell">
        <i class="bell-icon h-24 w-24">🔔</i>

    </div>
</template>

<style scoped>
.notification-bell {
  position: relative;
}

.bell-icon {
  cursor: pointer;
}

.badge {
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 0.2em 0.4em;
  position: absolute;
  top: -5px;
  right: -10px;
}
</style>
