const CARDHOLDER_DEFAULT = 'JANE APPLESED';
const CARDNUMBER_DEFAULT = '0000 0000 0000 0000';
const imageCardHolderData = document.getElementById("image-card-holder-data");
const imageCardNumberData = document.getElementById("image-card-number-data");

const bindingCardHolderDataData = (value) => {
  if(value == '') return imageCardHolderData.innerHTML = CARDHOLDER_DEFAULT;
  imageCardHolderData.innerHTML = value.toUpperCase();
}

const bindingCardNumberDataData = (value) => {
  if(value == '') return imageCardNumberData.innerHTML = CARDNUMBER_DEFAULT;

  maskedValue = maskValue( completeCardNumber(value) );
  imageCardNumberData.innerHTML = maskedValue;
}

const completeCardNumber = (value) => ( value + Array(16 - value.length).fill(0).join('') );
const maskValue = (value) => ( value.match(/.{1,4}/g).join(' ') );
