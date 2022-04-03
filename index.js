var cRating = 0;
function selectRating(rating)
{
    cRating = rating;
    console.log(cRating);
}

function onSubmit(){
    if(cRating!=0){
        localStorage.setItem("RATING",cRating);
        location.href='thanks.html';
    }
}





