
function getPassword()
{
     // Variables

    let chars = "qwertyuiopasdfghjklzxcvbnm";
    let passLength = 0;
    let password = "";
// PROMPT BOX FOR GETTING PASSWORD LENGTH
    let PassLen = prompt("Please provide password lenght: 8 - 128");
 // CHECK FOR  PROMPT VALUES
    if(PassLen === "" || PassLen === null){
        alert("Password length is required!");
        return getPassword();
    }else if(PassLen < 8){
        alert ("minimum password length is 8 characters");
        return getPassword();
    }else if (PassLen >128)
    {
        alert("Maximum password length is 128");
        return getPassword();
    }else if(PassLen.match(/[azAZ]/g)){
        alert("Only numeric data is allow");
        return getPassword();
    }else
    {
        passLength = PassLen;
    }

    // CHECKING FOR LETTER CASE
    let letterCase = window.confirm("Do you want to have uppercase?");    

    // CHECKING FOR SPECIAL CHARACTERS
    let specialChar = window.confirm("Do you want special characters in your password?");

    // CHECKING FOR NUMERIC CHARACTERS
    let numericChar = window.confirm("Do you want numeric characters in your password?");

    if (letterCase)
    {
        chars =+ "QWERTYUIOPASDFGHJKLZXCVBNM";
    }

    if (specialChar)
    {
        chars =+ "!@#$%^&*()_+?><:.,}{[]";
    }
    
    if (numericChar)
{
    alert =+ "1234567890";
}

    for(let i=0; i<passLength; i++)
    {
        let randNum = Math.floor(Math.random() * chars.length);
        console.log(randNum);

        password += chars.substring(randNum, randNum + 1);
        console.log(password);
    }
    document.querySelector('#password').value = password;
}