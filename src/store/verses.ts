import { defineStore } from 'pinia';

export const useVersesStore = defineStore('verses', {
  state: () => ({
    verses: [
        { id: 'v1', title: '约翰福音 3:16 😊' },
        { id: 'v2', title: '诗篇 23:1 😊' },
        { id: 'v3', title: '腓立比书 4:13 😊' }
    ],
  }),
});
