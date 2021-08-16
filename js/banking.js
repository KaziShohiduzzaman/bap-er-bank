document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newInputTotal = parseFloat(depositInput.value);
    const totalDiposit = document.getElementById('deposit-amount');
    const previousDipositAmount = parseFloat(totalDiposit.innerText);
    const newDepositTotal = previousDipositAmount + newInputTotal;
    totalDiposit.innerText = newDepositTotal;

    const balanceTotal = document.getElementById('balance-amount');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal + newInputTotal;
    balanceTotal.innerText = newBalanceTotal;

    depositInput.value = '';
})


document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawTotal = parseFloat(withdrawInput.value);
    const totalWithdraw = document.getElementById('withdraw-amount');
    const previousWithdrawAmount = parseFloat(totalWithdraw.innerText);
    const newWithdraw = previousWithdrawAmount + newWithdrawTotal;
    totalWithdraw.innerText = newWithdraw;

    const balanceTotal = document.getElementById('balance-amount');
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;




    withdrawInput.value = '';

})