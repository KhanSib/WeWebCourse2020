$(document).ready(function () {
    var newTodoText = $("#new-todo-text");
    var list = $("#list");
    var errorMessage = $("#error-message");
    var button = $("#add-button");

    button.click(function () {
        var text = newTodoText.val();

        if (text === "") {
            errorMessage.text("Пожалуйста введите текст");
            return;
        }

        errorMessage.text("");

        function setViewMode(listItem) {
            listItem.html("<span class='text'></span><button class='edit-button' type='button'>изменить</button>" +
                "<button class='delete-button' type='button'>удалить</button>");

            listItem.find(".text").text(text);
            listItem.find(".delete-button").click(function () {
                listItem.remove();
            });

            listItem.find(".edit-button").click(function () {
                listItem.html("<input class='edit-text'/><button class='save-button' type='button'>сохранить</button>" +
                    "<button class='cancel-button' type='button'>отмена</button>");
                listItem.find(".edit-text").val(text);

                listItem.find(".save-button").click(function () {
                    text = listItem.find(".edit-text").val();
                    setViewMode(listItem);
                });

                listItem.find(".cancel-button").click(function () {
                    setViewMode(listItem);
                });
            });
        }

        var listItem = $("<li>");
        setViewMode(listItem);

        list.append(listItem);

        newTodoText.val("");
    });
});
