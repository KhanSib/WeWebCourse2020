function ready() {
    var newTodoText = document.getElementById("new-todo-text");
    var list = document.getElementById("list");
    var errorMessage = document.getElementById("error-message");
    var button = document.getElementById("add-button");

    button.addEventListener("click", function () {
        var text = newTodoText.value;

        if (text === "") {
            errorMessage.textContent = "Пожалуйста введите текст";
            return;
        }

        errorMessage.textContent = "";

        function setViewMode(listItem) {
            listItem.innerHTML = "<span class='text'></span><button class='edit-button' type='button'>изменить</button>" +
                "<button class='delete-button' type='button'>удалить</button>";

            listItem.querySelector(".text").textContent = text;
            listItem.querySelector(".delete-button").addEventListener("click", function () {
                listItem.parentNode.removeChild(listItem);
            });

            listItem.querySelector(".edit-button").addEventListener("click", function () {
                listItem.innerHTML = "<input class='edit-text'/><button class='save-button' type='button'>сохранить</button>" +
                    "<button class='cancel-button' type='button'>отмена</button>";
                listItem.querySelector(".edit-text").value = text;

                listItem.querySelector(".save-button").addEventListener("click", function () {
                    text = listItem.querySelector(".edit-text").value;
                    setViewMode(listItem);
                });

                listItem.querySelector(".cancel-button").addEventListener("click", function () {
                    setViewMode(listItem);
                });
            });
        }

        var listItem = document.createElement("li");
        setViewMode(listItem);

        list.appendChild(listItem);

        newTodoText.value = "";
    });
}

document.addEventListener("DOMContentLoaded", ready);