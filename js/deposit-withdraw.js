// deposit money system
// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2: get the deposit amount form the deposit input field
    // for input field use .value to get the inside value
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    if(isNaN(newDepositAmount)){
        alert('Please provie a vaild number')
        return;
    }
    // step-3: get the depost current total
    // for non-input field / textarea value get using interText
    const depositTotalElement = document.getElementById('deposit-total'); 
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);
    // step-4: get the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;
    // step-5: update total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    // step6: calculate total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    // step-7: clear the deposit fiedl
    depositField.value = '';
})

// withdraw money system
// step-1: add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2: get the deposit amount form the deposit input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    // step-7: clear the deposit fiedl
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please provie a vaild number')
        return;
    }
    // step-3: get the withdraw current total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
    // step-5: update total balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
    if(newWithdrawAmount > previousBalanceTotal){
        alert('Not Enough Money For Withdraw!!!');
        return;
    }
     // step-4: get the total withdraw
     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     withdrawTotalElement.innerText = currentWithdrawTotal;
    // step6: calculate total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
})
