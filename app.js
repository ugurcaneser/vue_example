new Vue({
    el: "#app",
    data: {
        counter: 0
    },
    methods: {
        reset: function() {
            return this.counter =  0;
            
        },
        result: function() {
        
            if (this.counter == 0) {
                return "Equal to 0"
            } else if (this.counter > 0) {
                return "Greater than 0"
            } else if (this.counter < 0) {
                return "Lesser than 0"
            }
        }
    }
});