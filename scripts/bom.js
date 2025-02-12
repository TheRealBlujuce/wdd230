document.addEventListener("DOMContentLoaded", () => {
    const chapterInput = document.getElementById("chapterInput");
    const addChapterBtn = document.getElementById("addChapterBtn");
    const chapterList = document.getElementById("chapterList");

    addChapterBtn.addEventListener("click", () => {
        const chapter = chapterInput.value.trim();
        if (chapter === "") {
            alert("Please enter a chapter.");
            chapterInput.focus();
            return;
        }

        const li = document.createElement("li");
        li.textContent = chapter;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            chapterList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        chapterList.appendChild(li);

        chapterInput.value = "";
        chapterInput.focus();
    });
});
