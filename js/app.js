
function getPassword()
{
     // Variables

    let chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+?><:.,}{[]1234567890";
    let passLength = 0;
    let password = "";

    let PassLen = prompt("Please provide password lenght: 8 - 128");

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