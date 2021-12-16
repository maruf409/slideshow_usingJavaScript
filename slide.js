var imgArr = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
var flag = 0;
var slideimg = document.getElementById('img');
var btn1_col = document.getElementById('btn1');
var btn2_col = document.getElementById('btn2');
slideimg.src = imgArr[0];
function showimage(x){
    if(x == 'left'){
        flag--;
    }
    else{
        flag++;
        flag %= imgArr.length ;
    }
    if(flag<0){
        flag = imgArr.length - 1;
    }
    /* important */
    slideimg.src = imgArr[flag];
};
btn1_col.addEventListener('click',function(y){
        y.target.style.backgroundColor = 'rgb(53, 4, 44)';
        y.target.style.color = 'white'
});
btn2_col.addEventListener('click',function(y){
    y.target.style.backgroundColor = 'rgb(4, 40, 54)';
    y.target.style.color = 'white'
});