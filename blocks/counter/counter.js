export default function decorate(block) {
    // 1. Get the initial number from the content (the "0" you wrote)
    // We grab the text inside the first div
    const startValue = parseInt(block.innerText) || 0;
  
    // 2. Clear the block (remove the plain text)
    block.textContent = '';
  
    // 3. Create the elements
    const btnMinus = document.createElement('button');
    btnMinus.textContent = '-';
  
    const display = document.createElement('span');
    display.textContent = startValue;
  
    const btnPlus = document.createElement('button');
    btnPlus.textContent = '+';
  
    // 4. Add the Logic (Event Listeners)
    btnMinus.addEventListener('click', () => {
      let current = parseInt(display.textContent);
      display.textContent = current - 1;
    });
  
    btnPlus.addEventListener('click', () => {
      let current = parseInt(display.textContent);
      display.textContent = current + 1;
    });
  
    // 5. Put it all back into the block
    block.append(btnMinus, display, btnPlus);
  }