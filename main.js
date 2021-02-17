  'use strict';

  (() => {
    /* fields / inputs */
    const nameField = document.querySelector('#nameField');
    const phoneField = document.querySelector('#phoneField');

    /* Regular expensions */
    const phoneReg =   /^(?=[\d{11,}\s])(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;
    const nameReg = /^[_.-a-zа-я]{3,16}$/i;

    /* Check name and phone */
    const callBtn = document.querySelector('#callBtn');
    callBtn.addEventListener('click', () => {
    	const isUncorrectName = isUncorrectValue(nameReg, nameField, 'uncorrect');
    	const isUncorrectPhone = isUncorrectValue(phoneReg, phoneField, 'uncorrect');
  
      if(isUncorrectName && isUncorrectPhone) {
        console.log('true');
      }
  
    });

    /* Check correct value */
    function isUncorrectValue(reg, input, className) {
      if( reg.test(input.value) ) {
        input.classList.remove(className);
        return true;
      } 

      input.classList.add(className);
      return false;
    }


  })();