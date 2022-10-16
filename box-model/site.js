const switchElement = document.getElementById('switch_element');
const mynameBox = document.getElementsByClassName('text')[0];
switchElement.addEventListener('change', () => {
  mynameBox.setAttribute('data-sizing', switchElement.checked ? 'intrinsic' : 'extrinsic');
});