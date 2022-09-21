const colors=["red","green","pink","yello","orange","black"];
const btn= document.getElementById('btn');
const color = document.querySelector(".color");
console.log(randomNumber)
btn.addEventListener('click',function(){
    const randomNumber = 2;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = color[randomNumber]
})
function getRandomNumber(){
    return Math.random();
}
<script>
    alert('hello')
</script>