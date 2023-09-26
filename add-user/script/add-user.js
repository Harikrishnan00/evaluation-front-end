
const companySelectionBtn = document.querySelector("[data-company-selection-btn]")
const companyList = document.querySelector("[data-company-list]")
const companyNameElement = document.querySelector("[data-company-name]")
const companys = document.querySelectorAll(".comapny-list-box")
const roleSelectionBtn = document.querySelector("[data-role-selection-btn]")
const roleList = document.querySelector("[data-role-list]")
const roleNameElement = document.querySelector("[data-role-name]")
const roles = document.querySelectorAll(".role-list-box")
const form = document.querySelector("[data-form]")
const errorElemnt = document.querySelector("[data-error-field]")
const closeButton = document.querySelector("[data-close]")
const profileDropBtn = document.querySelector("[data-profile-drop-btn]")
const profileDropDown = document.querySelector("[data-profile-dropdown]")

const firstName = document.querySelector("[data-firstname]")
const lastName = document.querySelector("[data-lastname]")
const email = document.querySelector("[data-email]")
const userName = document.querySelector("[data-username]")
const phoneNumber = document.querySelector("[data-phone-number]")
const password = document.querySelector("[data-password]")
const confirmPassword = document.querySelector("[data-confirm-password]")
const joinignDate = document.querySelector("[data-date]")
const employeeID = document.querySelector("[data-employee-id]")
let companyname, rolename

const requiredInputBoxArray = [firstName,lastName,email,userName,password,confirmPassword,employeeID,joinignDate]

form.addEventListener("submit",formValidate)

closeButton.addEventListener("click",()=>{
    window.location.href = "http://127.0.0.1:5500/admin-dashboard/dashboard.html";
})

profileDropBtn.addEventListener("click",()=>{
    show(profileDropDown)
})

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const phoneNumberFormat = /^\d{10}$/

function formValidate(){
    if(checkValueExistOrNot().length!==0){
        const inputBoxesWithoutValue = checkValueExistOrNot()
        inputBoxesWithoutValue.forEach((value)=>addClass(value,"border-red"))
        errorHandle("please fill the required fields")
        return false
    }else if(password.value !==confirmPassword.value){
        errorHandle("password missmatch")
        return false
    }else if(!email.value.match(mailFormat)){
        errorHandle("please enter a valid mail")
        return false
    }else if(!phoneNumber.value.match(phoneNumberFormat)){
        errorHandle("please enter a valid phone number")
        return false
    }
}

// to append error message in error element
function errorHandle(message){
    addClass(errorElemnt,"show")
    errorElemnt.innerText=message
}

// to check if there are any fields that are not filled
function checkValueExistOrNot(){
    return element = requiredInputBoxArray.filter((data)=>{
        if(!data.value){
            return data
        }
    })
}

companySelectionBtn.addEventListener("click",()=>{
    show(companyList)
})

companys.forEach((company)=>{
    company.addEventListener("click",(e)=>{
        appendTextInElement(companyNameElement,e.target.innerText)
        companyname=e.target.innerText
        hide(companyList)
    })
})

roles.forEach((role)=>{
    role.addEventListener("click",(e)=>{
        appendTextInElement(roleNameElement,e.target.innerText)
        rolename=e.target.innerText
        hide(roleList)
    })
})

roleSelectionBtn.addEventListener("click",()=>{
    show(roleList)
})

// to add class to element
function addClass(element,className){
    element.classList.add(className)
}

function appendTextInElement(element,text){
    element.innerText = text
}

// to show element
function show(element){
    element.classList.toggle("show")
}

// to hide element
function hide(element){
    element.classList.remove("show")
}

