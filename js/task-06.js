const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    // console.log(this.currentTarget.value.length);
    if (this.getAttribute('data-length') > this.value.length || this.getAttribute('data-length') < this.value.length) { 
      this.classList.remove('valid');
      this.classList.add('invalid');
    } else {
      this.classList.remove('invalid');
      this.classList.add('valid');
    }
}


