<script setup lang="ts">
import { computed } from 'vue';
import type { MyTheme } from '../type.ts';
import { useData } from '../utils/composables.ts';
import { isActive } from '../utils/utils.ts';
import VPButton from './VPButton.vue';

const props = defineProps<{ item: MyTheme.NavItem }>();

const { page } = useData();
const active = computed(() => isActive(page.value.relativePath, props.item.activeMatch || props.item.link, !!props.item.activeMatch));
</script>

<template>
  <VPButton
    class="VPSidebarItem"
    :class="{ active }"
    :href="item.link"
    :span="active"
    tabindex="0"
  >
    <span v-html="item.text" />
  </VPButton>
</template>
