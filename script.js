function showPaymentOptions() {    document.getElementById('payment-options').style.display = 'block';
}
function selectPayment(type) {    document.getElementById('overlay').style.display = 'flex';
    if (type === 'finger') {        document.getElementById('image-finger').style.display = 'block';
        document.getElementById('image-face').style.display = 'none';    } else {
        document.getElementById('image-face').style.display = 'block';        document.getElementById('image-finger').style.display = 'none';
    }}
// Закрытие затемненного экрана кликом вне картинки
document.getElementById('overlay').onclick = function() {    this.style.display = 'none';
    document.getElementById('image-finger').style.display = 'none';    document.getElementById('image-face').style.display = 'none';
    document.getElementById('payment-options').style.display = 'none';};