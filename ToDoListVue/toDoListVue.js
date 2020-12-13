(function () {
    var vm = new Vue({
        el: "#app",
        data: {
        message: ""
    },

    methods:   {
         multi:function(e){
               this.message=this.message+"01";
               }
    }
});
}());