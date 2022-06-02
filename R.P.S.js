let image = document.querySelectorAll(".img-items")
let cpuImage = document.querySelectorAll('.img-cpu-choosed')

    for(let i = 0;i <= image.length - 1; i++){
        image[i].addEventListener('click',()=>{
            hiddenSelect(i);
            randomCpu = Math.floor((Math.random()*10)/4);
            cpuImage[randomCpu].classList.remove('hidden');
            gameLogic(i,randomCpu);
        })
    }

    function hiddenSelect(i){
        for(let j = 0;j <= image.length - 1; j++){
            if(j !== i){
                image[j].classList.add('hidden');
            }
        }
    }


    const refreshFunction = () =>{
        for(let i = 0;i <= image.length - 1; i++){
            image[i].classList.remove('hidden');
            cpuImage[i].classList.add('hidden');
        }
    }


    document.querySelector('button').addEventListener('click',refreshFunction)


    document.addEventListener('keydown', (e) =>{
        if(e.key == 'r'){
            refreshFunction();
        }else if(e.key == 'a'){
            alert('ey gooz')
        }
    })


    function gameLogic(user,cpu){
        const userPoint = document.querySelector('#user-point');
        const cpuPoint = document.querySelector('#cpu-point');
        if(user!==cpu){
            if(user===0){
                if(cpu===1){
                    cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1
                }else{
                    userPoint.textContent = Number(userPoint.innerHTML) + 1
                }
            }
            if(user===1){
                if(cpu===0){
                    userPoint.textContent = Number(userPoint.innerHTML) + 1
                }else{
                    cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1
                }
            }
            if(user===2){
                if(cpu===0){
                    cpuPoint.innerHTML = Number(cpuPoint.innerHTML) + 1
                }else{
                    userPoint.textContent = Number(userPoint.innerHTML) + 1
                }
            }
        }
    }