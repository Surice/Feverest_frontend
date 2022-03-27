export default {
    name: "Working_page",
    data: function() {
        return {
            userData: {},
            types: ["appCodeName", "appName", "appVersion", "cookieEnabled", "geolocation", "language", "onLine", "platform", "product", "userAgent"],
        }
    },
    beforeMount() {
        this.types.forEach(e => {
            this.userData[e] = navigator[e];
        });
    }
}