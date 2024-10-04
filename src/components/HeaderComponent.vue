<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-glass">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="/static/images/full%20logo-ico.png" alt="BookLib Logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-group">
          <router-link class="nav-link" to="/catalog">Каталог</router-link>
          <router-link class="nav-link" to="/about">О нас</router-link>
        </div>
        <form class="d-flex search-form" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Поиск"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            <img src="/static/images/search-ico.png" alt="search" style="width:20px;height:20px" />
          </button>
        </form>
        <div class="button-group">
          <router-link class="nav-link" to="/mylib">
            <img src="/static/images/mylib.png" alt="моя библиотека" style="width:20px;height:20px" />
          </router-link>
          <router-link class="nav-link" to="/login">
            <img src="/static/images/acc-ico.png" alt="логин" style="width:20px;height:20px" />
          </router-link>
          <router-link class="nav-link" to="/settings">
            <img src="/static/images/settings-ico.png" alt="настройки" style="width:20px;height:20px" />
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style scoped>
/* Добавь сюда CSS для шапки, если нужно */
</style>
