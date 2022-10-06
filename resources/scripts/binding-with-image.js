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

  maskedValue = value.match(/.{1,4}/g).join(' ');
  imageCardNumberData.innerHTML = maskedValue;
}
