<template lang="pug">
  b-navbar(toggleable="md", type="dark", variant="dark")
    b-container
      b-navbar-toggle(target="nav_collapse")
      b-navbar-brand(href="#") dpoll
      b-collapse(is-nav id="nav_collapse")
        b-navbar-nav
          b-nav-item(link="#asd") Hello
</template>
