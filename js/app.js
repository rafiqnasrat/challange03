
function getPassword()
{
    let chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+?><:.,}{[]1234567890";
    let passLength = 12;
    let password = "";

    for(let i=0; i<passLength; i++)
    {
        let randNum = Math.floor(Math.random() * chars.length);
        console.log(randNum);

        password += chars.substring(randNum, randNum + 1);
        console.log(password);
    }
    document.querySelector('#password').value = password;
}