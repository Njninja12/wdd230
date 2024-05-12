document.addEventListener('DOMContentLoaded', () => {


    let chaptersArray = getChapterList() || [];

    chaptersArray.forEach(chapter => {
        displayList(chapter);
    });

    const input = document.querySelector("#favchap");
    const button = document.querySelector("button");
    const list = document.querySelector("#favchap");
    button.addEventListener("click", () => {
        const chapterName = input.value.trim();
        if (input.value === '')  {
            displayList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value = '';
            input.focus();
            return;
        }
    });
    function displayList(item) {

        let li = document.createElement("li");
        let deleteButton = document.createElement('button');
        li.textContent = item;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        li.append(deleteButton);
        list.append(li)
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });
        console.log("I don't copy the code because i typew it out and understand it. Nice try though!!")
    }
    function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
    }
    function getChapterList() {
        return JSON.parse(localStorage.getItem('myFavBOMList'));
    }
    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.fliter((item) => item !== chapter);
        setChapterList();
    }
});
