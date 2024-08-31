<template>
  <NuxtLayout>
    <nav>
      <ul>
        <li>
          <NuxtLink to='/'>Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to='/about'>About</NuxtLink>
        </li>
        <li>
          <NuxtLink to='/services'>Services</NuxtLink>
        </li>
        <li>
          <NuxtLink to='/contact'>Contact</NuxtLink>
        </li>
      </ul>
    </nav>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup></script>