function male ()
{
    document.getElementById( "gender" ).value = 'Male'
    document.getElementById( "femaleImg" ).src = 'https://static.cure.fit/assets/images/female-inactive.svg'
    document.getElementById( "maleImg" ).src = 'https://static.cure.fit/assets/images/male-active.svg'

}
function female ()
{
    document.getElementById( "gender" ).value = 'Female'
    document.getElementById( "maleImg" ).src = 'https://static.cure.fit/assets/images/male-inactive.svg'
    document.getElementById( "femaleImg" ).src = 'https://static.cure.fit/assets/images/female-active.svg'

}

function nameUser ()
{
    document.getElementById( "display_user_name" ).innerHTML = document.getElementById( "user_name" ).value;
}

function userLogout ( id )
{
    console.log( 'delete ID: ', id );


    window.location.href = "/home"
}