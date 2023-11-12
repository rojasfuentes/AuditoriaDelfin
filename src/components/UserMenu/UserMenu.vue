
<template>
  <div class="user-menu">
    <div class="user-info" @click="toggleDropdown">
      <img :src="user.avatar" alt="User Avatar" class="avatar" />
      <span class="username">{{ user.username }}</span>
    </div>

    <transition name="fade">
      <div v-show="isDropdownOpen" class="dropdown">
        <ul>
          <li @click="navigateTo('profile')">Profile</li>
          <li @click="navigateTo('settings')">Settings</li>
          <li @click="logout">Logout</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: 'John Doe',
        avatar: 'https://placekitten.com/40/40', // Replace with your user's avatar URL
      },
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    navigateTo(page) {
      // Implement your navigation logic (e.g., using Vue Router)
      console.log(`Navigating to ${page}`);
      this.isDropdownOpen = false; // Close the dropdown after clicking an option
    },
    logout() {
      // Implement your logout logic
      console.log('Logging out');
      this.isDropdownOpen = false; // Close the dropdown after clicking "Logout"
    },
  },
};
</script>

<style scoped>
.user-menu {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.user-info {
  display: flex;
  align-items: center;
}

.avatar {
  border-radius: 50%;
  margin-right: 8px;
}

.username {
  font-weight: bold;
}

.dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 100;
  padding: 8px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  cursor: pointer;
  padding: 8px;
  transition: background-color 0.3s;
}

li:hover {
  background-color: #f5f5f5;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
