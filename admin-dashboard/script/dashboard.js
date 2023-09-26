const actionButton = document.querySelector("[data-action-button]");
const actionBox = document.querySelector("[data-action-box]")
const addUserBtn = document.querySelector("[data-add-user-button]")
const profileDropBtn = document.querySelector("[data-profile-drop-btn]")
const profileDropDown = document.querySelector("[data-profile-dropdown]")


addUserBtn.addEventListener("click",()=>{
    window.location.href = "http://127.0.0.1:5500/add-user/add-user.html"
})

profileDropBtn.addEventListener("click",()=>{
    showElemnt(profileDropDown)
})


const showElemnt = (element) => {
    element.classList.toggle("show")
};

actionButton.addEventListener("click", ()=>{
    showElemnt(actionBox)
    actionButton.classList.toggle("color-blue")
});
