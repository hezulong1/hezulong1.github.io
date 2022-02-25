<template>
  <a class="select-none relative" @click="toggleDark">
    <div class="sun-rays" />
    <div class="moon-or-sun" />
    <div class="moon-mask" />
  </a>
</template>

<script setup lang='ts'>
import { isDark } from '~/logics'

function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<style>
.sun-rays {
  position: relative;
  top: 16px;
  right: -7.5px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 2px solid #fff;
  background: #fff;
  transition: all 0.45s ease;
  overflow: hidden;
  box-shadow: 0 -23px 0 #fff, 0 23px 0 #fff, 23px 0 0 #fff, -23px 0 0 #fff,
    15px 15px 0 #fff, -15px 15px 0 #fff, 15px -15px 0 #fff, -15px -15px 0 #fff;
  transform: scale(0.1);
}

.dark .sun-rays {
  transform: scale(0.6);
  top: 16px;
  border-color: transparent;
  background: transparent;
}

.moon-or-sun {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #000;
  background: #000;
  transition: all 0.45s ease;
  overflow: hidden;
}

.dark .moon-or-sun {
  border-color: #fff;
  background: #fff;
  transform: scale(0.5);
}

.moon-mask {
  position: absolute;
  right: -7px;
  top: -1px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 0;
  background: #fff;
  transform: translate(0, 0);
  opacity: 1;
  transition: top 0.45s ease, right 0.45s ease, transform 0.45s ease,
    background 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955),
    color 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.dark .moon-mask {
  top: -15px;
  right: -22px;
  transform: scale(0.5);
  background: #000;

}

.mask-to-sun-animation {
  animation-name: mask-to-sun;
  animation-duration: 0.4s;
}

.mask-to-moon-animation {
  animation-name: mask-to-moon;
  animation-duration: 0.4s;
}

.to-sun-animation {
  animation-name: to-sun;
  animation-duration: 0.4s;
}

.to-moon-animation {
  animation-name: to-moon;
  animation-duration: 0.4s;
}

.expand-rays {
  animation-name: expand-rays;
  animation-duration: 0.5s;
}

.contract-rays {
  animation-name: contract-rays;
  animation-duration: 0.5s;
}

@keyframes mask-to-sun {
  from {
    top: -8px;
    right: -5px;
    transform: scale(1);
  }

  to {
    top: -25px;
    right: -15px;
    transform: scale(0.5);
  }
}

@keyframes mask-to-moon {
  from {
    top: -25px;
    right: -15px;
    transform: scale(0.5);
  }

  to {
    top: -8px;
    right: -5px;
    transform: scale(1);
  }
}

@keyframes to-sun {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.5);
  }
}

@keyframes to-moon {
  from {
    transform: scale(0.5);
  }

  to {
    transform: scale(1);
  }
}

@keyframes expand-rays {
  from {
    transform: scale(0.1);
  }

  to {
    transform: scale(0.6);
  }
}

@keyframes contract-rays {
  from {
    transform: scale(0.6);
  }

  to {
    transform: scale(0.1);
  }
}
</style>
