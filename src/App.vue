<template>
    <AppNavbar/>
    <RouterView />
	<AppFooter/>
</template>

<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';

import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';

const { t, locale } = useI18n();

watch(
        locale, 
        (newLocale) => {document.title = t('title');}, 
        { immediate: true }
    );
</script>

