let input = document.querySelector('.input');
let add = document.querySelector(".add");
let para = document.querySelector('.task');
let mainDiv = document.querySelector('.mainDiv')

// localStorage.clear()
// Variables
// main array
let arrTasks = [];
//main object
let tasks = {
        id: Math.random(),
        title: ""
    }
    // array for delete items
let newTasks = [];
//بناخد الاراي اللي جي ونعمله كوبي في اراي جديد بعد كده بناخده 
//بنمشي علي كل اوبجت فيه ونعمله سيف في الاراي اللي هنضيف عليه الجديد
// copy array
// Keda bnakhod el Local storage copy fy el array day
// then
//n7oto fy el array el asly elly hb3to tany ll local storage 3shan akhdo tany b3d el refresh
//fy el copy array w ....
if (JSON.parse(localStorage.getItem('Key')) !== null) {
    let bwith = JSON.parse(localStorage.getItem('Key'))
    for (let i = 0; i < bwith.length; i++) {
        arrTasks.push(bwith[i])
    }
}
// الفنكشن بتاعت الSubmit
document.forms[0].onsubmit = function(e) {
        let condi = false
            // copy for object 3shan n3ml zio w n3mlo push fy el main array
        let clone = {...tasks }
        if (input.value !== "" && input.value.length > 5) {
            condi = true;
            clone.title = input.value
            arrTasks.push(clone)
            window.localStorage.setItem("Key", JSON.stringify(arrTasks))
        }
        if (condi == false) {
            e.preventDefault();
        }
    }
    //For Print The Tasks
for (let i = 0; i < arrTasks.length; i++) {
    let paragraph = document.createElement('p')
    let dele = document.createElement("input")
    let secondDiv = document.createElement("div")
    secondDiv.classList.add("secondDiv")
    dele.setAttribute("type", "submit")
    dele.setAttribute("value", "delete")
    dele.classList.add("delete")
        //Print From ArrTasks {id :  , title :  };
    paragraph.innerHTML = `${ arrTasks[i].title }`;
    paragraph.classList.add("task")
    secondDiv.append(paragraph)
    secondDiv.append(dele)
    mainDiv.append(secondDiv)
}

let allP = document.querySelectorAll(".delete")
    // bn3ml loop 3la kol el zrair 3shan n3ml click 3lihom
allP.forEach(ele => {
    let p = "for Eash"
    ele.addEventListener("click", e => {
        // Keda d5lna 3la el button Gabna Aboh (secondDiv) w khadna el Klam
        // e.currentTarget.parentNode.children[0].innerHTML
        // keda 3malna filter 3la kol el 3nast el ba2ya w defnaha fy array gdid
        newTasks = arrTasks.filter(ele => ele.title !== e.currentTarget.parentNode.children[0].innerHTML ? ele : "")
            //hena rf3na el aray fy el local storage
        window.localStorage.setItem("Key", JSON.stringify(newTasks))
        location.reload();
    })
})