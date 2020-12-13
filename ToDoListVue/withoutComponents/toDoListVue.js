(function () {
    var vm = new Vue({
        el: "#app",
        data: {
            items: [],
            newToDoText: "",
            newId: 1
        },

        methods: {
            addNewToDoItem: function () {
                var text = this.newToDoText;

                if (text.trim().length === 0) {
                    return;
                }

                this.items.push({
                    id: this.newId,
                    text: text,
                    isEditing: false,
                    editText: text
                })

                this.newToDoText = "";
                this.newId++;
            },

            deleteItem: function (item) {
                this.items = this.items.filter(function (e) {
                    return e !== item;
                })
            },

            startEditItem: function (item) {
                item.isEditing = true;
            },

            stopEditItem: function (item){
                item.isEditing=false;
                item.editText=item.text;
            },

            saveItem: function (item){
                item.isEditing=false;
                item.text=item.editText;
            }
        }
    });
}());