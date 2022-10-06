const CARDHOLDER_DEFAULT = 'JANE APPLESED';
const imageCardHolderData = document.getElementById("image-card-holder-data");

const bindingCardHolderDataData = (value) => {
  if(value == '') return imageCardHolderData.innerHTML = CARDHOLDER_DEFAULT;
  imageCardHolderData.innerHTML = value.toUpperCase();
}
