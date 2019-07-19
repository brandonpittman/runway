<template>
  <div>
    <p class="text-blue-500 text-3xl mt-8 italic">
      <slot>Thanks for trying {{ name }}!</slot>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Runway',
    }
  },
}
</script>
