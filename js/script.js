const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main");

addBtn.addEventListener("click",
    function() {
        addNote()
    })

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
            (note) => {
                data.push(note.value)
            }
        )
        // console.log(data);
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }

}


// <!-- <div class="note">
{
    /* <div class="tool">
        <i class='bx bxs-save'></i>
        <i class='bx bx-trash'></i>

    </div>
    <textarea></textarea> */
}
// </div>

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `<div class="tool">
    <i class='save bx bxs-save'></i>
    <i class='trash bx bx-trash'></i>

</div>
<textarea>${text}</textarea>`;
    note.querySelector(".trash").addEventListener(
        "click",
        function() {
            note.remove();
            saveNotes();
        }
    )

    note.querySelector(".save").addEventListener(
        "click",
        function() {
            saveNotes()
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function() {
            saveNotes()
        }
    )
    main.appendChild(note);
    saveNotes();

}


(
    function() {
        const notes = JSON.parse(localStorage.getItem("notes"));
        if (notes === null) {
            addNote()
        } else {
            notes.forEach(
                (lsnote) => {
                    addNote(lsnote)
                }
            )
        }

        if (notes.length === 0) {
            localStorage.removeItem("notes")
        } else {
            addNote()
        }
    }
)()