const rates = {
    USD: 1,
    EUR: 0.40,
    GBP: 0.89,
    CNY: 8.94
};

const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    let amount = amountInput.value;

    if (amount === '' || amount <= 0) {
        resultDiv.textContent = ' Введите корректную сумму';
        resultDiv.style.color = 'red';
        return;
    }

    const currency = currencySelect.value;
    const rate = rates[currency];
    const converted = (amount * rate).toFixed(2);

    resultDiv.style.color = '#333';
    resultDiv.textContent = `${amount} RUB = ${converted} ${currency}`;
});