Vue.createApp({
    data() {
        return {
            cart: 0,
            image: 'assets/images/iphone-13-blue.png',
            product: "iPhone 13",
            description: "iPhone 13 is the latest iPhone in the iPhone series. It is powered by a 2.84-GHz dual-core processor and has a camera system that can take up to 8 photos in a single burst.",
            quantity: 5,
            specs: ['5G speed', 'Edge-to-edge OLED display', 'Ceramic Shield'],
            variants: [
                { id: 'iphone13-001', color: 'blue', image: './assets/images/iphone-13-blue.png' },
                { id: 'iphone13-002', color: 'midnight', image: './assets/images/iphone-13-midnight.png' },
                { id: 'iphone13-003', color: 'red', image: './assets/images/iphone-13-red.png' },
            ],
        }

    },
    methods: {
        updateImage(imageUrl) {
            this.image = imageUrl
        }
    }

}).mount('#app');