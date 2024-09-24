/**
 * Intro à vue.js
 * @author Leny Mory
 * @date 2024-09-17
 */
const {createApp, ref} = Vue;

createApp({
    setup() {
        const message = "Bienvenue dans PokeCount!";
        const compteur = ref(0);
        const capturesTab = ref([]);

        function capturer() {
            compteur.value += 1;
        }

        function sauver() {
            if (compteur.value > 0) {
                capturesTab.value.push(compteur.value);
                compteur.value = 0;
            }
        }

        return {
            message,
            compteur,
            capturer,
            sauver,

        };
    }

}).mount("#poke-app");