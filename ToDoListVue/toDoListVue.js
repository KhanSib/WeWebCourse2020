Vue.component("todo-list-item", {
    props: {
        item: {
            type: Object,
            required: true
        }
    },

    data: function () {
        return {
            isEditing: false,
            editText: ""
        }
    },

    template: "#todo-list-item-template",

    methods: {
        startEditItem: function () {
            this.editText = this.item.text;
            this.isEditing = true;
        },

        stopEditItem: function () {
            this.isEditing = false;
        },

        saveItem: function () {
            this.isEditing = false;
            this.$emit("save-item", this.item, this.editText);
        },

        deleteItem: function () {
            this.$emit("delete-item", this.item);
        }
    }
})

Vue.component("todo-list", {
    data: function () {
        return {
            items: [],
            newToDoText: "",
            newId: 1
        };
    },

    template: "#todo-list-template",

    methods: {
        addNewToDoItem: function () {
            var text = this.newToDoText;

            if (text.trim().length === 0) {
                return;
            }

            this.items.push({
                id: this.newId,
                text: text
            });

            this.newToDoText = "";
            this.newId++;
        },

        deleteItem: function (item) {
            this.items = this.items.filter(function (e) {
                return e !== item;
            })
        },

        saveItem: function (item, newText) {
            item.text = newText;
        }
    }
})

new Vue({
    el: "#app"
});