const pizza = document.getElementById('pizza');

let score = 0;
let endGame = false;

const checkPizza = () => {
    if(!endGame){
        if(pizza.classList.contains('cheese')){
            score += 5; 
        }
        if(pizza.classList.contains('tomato-sauce')){
            score += 5;
        }
    }
    endGame = true;
}

const handleToppings = (topping) =>{
    if(pizza.classList.contains(topping)){
        pizza.classList.remove(topping);
    }else{
        pizza.classList.add(topping)
    }
}

// bind event listener to start button
document.getElementById('check').addEventListener('click', checkPizza)
document.getElementById('tomatoSauceButton').addEventListener('click', handleToppings('tomato-sauce'))
document.getElementById('cheeseButton').addEventListener('click', handleToppings('cheese'))
