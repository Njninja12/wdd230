document.addEventListener('DOMContentLoaded', () => {


    const input = document.querySelector("#favchap");
    const button = document.querySelector("button");
    const list = document.querySelector("#favchap");
    button.addEventListener("click", () => {
        const chapterName = input.value.trim();
        if (input.value === '')  {
            input.focus();
            return;
        }

        const li = document.createElement("li");
        li.textContent = chapterName;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', () => {
            li.removeChild(li);
            input.focus;
        });

        li.appendChild(chapterName);
        list.appendChild(li);

        input.value = '';
        input.focus();
    });
});
