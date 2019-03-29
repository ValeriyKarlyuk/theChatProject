<template>
<v-snackbar v-model="snackbar" :bottom="y === 'bottom'" :left="x === 'left'" :multi-line="mode === 'multi-line'" :right="x === 'right'" :timeout="timeout" :top="y === 'top'" :vertical="mode === 'vertical'">
    {{ text }}
    <v-btn color="green" flat @click="snackbar = false">
        Close
    </v-btn>
</v-snackbar>
</template>

<script>
export default {
    data() {
        return {
            snackbar: true,
            y: 'top',
            x: null,
            mode: '',
            timeout: 6000,
            text: 'Hello, I\'m a snackbar'
        }
    }
}
</script>
