<script setup lang="ts">
import Cnblog from '@/ui/icons/Cnblog.vue';
import Github from '@/ui/icons/Github.vue';
import Link from '@/ui/Link.vue';
import { useApp } from '@/utils/hooks';
import { toLocalDayjs } from '@/utils/logic';
import ConfigSwitchTheme from './ConfigSwitchTheme.vue';

const { theme } = useApp();
const now = toLocalDayjs();
const datetime = now.format();
const year = now.format('YYYY');
</script>

<template>
  <footer :class="$style.footer">
    <small>
      <time :datetime>{{ year }}</time> &copy; HeZulong.
    </small>

    <div :class="$style.socials">
      <Link :href="theme.github" title="Github"><Github /></Link>
      <Link :href="theme.cnblog" title="博客园"><Cnblog /></Link>
    </div>

    <ConfigSwitchTheme :class="$style.theme" />
  </footer>
</template>

<style lang="scss" module>
.footer {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.socials {
  display: flex;
  align-items: center;
  gap: .5rem;
  margin-left: auto;
  margin-right: 1rem;
}

@media (min-width: 44rem) {
  .socials {
    margin-right: 0;
  }

  .theme {
    display: none;
  }
}
</style>
