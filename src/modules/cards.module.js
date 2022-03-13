import {Module} from '../core/module';
import { random } from '../utils.js';

export class Cards extends Module {
    trigger() {
        const picturesPath = ['https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_960_720.jpg', 'https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/11/26/07/41/maine-coon-5778153_960_720.jpg', 'https://cdn.pixabay.com/photo/2021/12/01/18/17/cat-6838844_960_720.jpg', 'https://cdn.pixabay.com/photo/2019/05/21/07/11/cat-4218424_960_720.jpg'];
        
        const cardContainer = document.createElement('div');
        cardContainer.style.width = '700px';
        cardContainer.style.marginBottom = "20px";

        const cardInner = document.createElement('div');
        cardInner.style.width = '500px';

        const cardImg = document.createElement('img');        
        cardImg.style.maxWidth = '100%';
        cardImg.style.height = 'auto';
        cardImg.style.border = '3px solid #6bbdf3';
        cardImg.style.borderRadius = '5px';

        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = "flex";
        buttonContainer.style.justifyContent = "space-evenly";
        buttonContainer.style.width = '500px';

        const buttonOne = document.createElement('button');
        buttonOne.textContent = 'Брысь!';
        buttonOne.style.backgroundColor = "#313131";
        buttonOne.style.color = "#6bbdf3";
        buttonOne.style.padding = "10px";
        buttonOne.style.borderRadius = "3px";
        buttonOne.style.width = '150px';

        const buttonTwo = document.createElement('button');
        buttonTwo.textContent = 'Больше котов!';
        buttonTwo.style.backgroundColor = "#313131";
        buttonTwo.style.color = "#6bbdf3";
        buttonTwo.style.padding = "10px";
        buttonTwo.style.borderRadius = "3px";
        buttonTwo.style.width = '150px';

        buttonContainer.append(buttonOne);
        buttonContainer.append(buttonTwo);
         
           // let cardUrl = picturesPath[random(0, picturesPath.length - 1)];
            cardImg.src = `${picturesPath[0]}`;
            cardInner.append(cardImg);
            cardContainer.append(cardInner);
            document.body.append(cardContainer);
            document.body.append(buttonContainer);

        const changeCat = () => {
             let currentImg = picturesPath.indexOf(cardImg.src);
            currentImg ++;
            if (currentImg === picturesPath.length) {
                currentImg = 0;
            }
            cardImg.src = picturesPath[currentImg];
        }

         const handler = () => {
            cardContainer.remove();
            buttonContainer.remove();
            buttonOne.removeEventListener('click', handler);
            buttonTwo.removeEventListener('click', changeCat);
         }
       
        buttonOne.addEventListener('click', handler);

        buttonTwo.addEventListener('click', changeCat);
    }
}