<script setup lang="ts">
import DataPaymentView from './DataPaymentView.vue';
import InfoUserView from './InfoUserView.vue';
import UpdatePasswordView from './UpdatePasswordView.vue'
import ProffitsView from './ProffitsView.vue'



</script>
<template>
    <div>
        <h1 class="text-4xl text-center font-bold">Panel de Usuario</h1>

        <InfoUserView />

        <ProffitsView />

        <DataPaymentView />

        <UpdatePasswordView />
    </div>
    
</template>
