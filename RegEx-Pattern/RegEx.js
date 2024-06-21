
const email_regex=/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/
const password_regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ //atleast 8 character
const phone_regex=/\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/  // US pattern
const hexadecimal_color=/#[0-9A-Fa-f]{6}\b|#[0-9A-Fa-f]{3}\b/
const url_regex=/\bhttps?:\/\/[^\s/$.?#].[^\s]*\b/
const date_regex = /\b\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\b/;  //yyyy-mm-dd


function fun(){
    var str=document.getElementById("text").value
    const  reg=new RegExp(email_regex,"g")
    console.log(reg.test(str)) 
}