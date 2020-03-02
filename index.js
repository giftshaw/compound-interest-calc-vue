new Vue({
    el: "#app",
    data: {
        p: "",
        r: "",
        t: "",
        n: ""
    },
    computed: {
        compoundInterest: function(){
            let a = this.r/this.t
            let b = 1 + a
            let nt = this.n * this.t 
            let c = Math.pow(b, nt)
            let ans = this.p * c
            return ans.toFixed(2);
        }
    }
});