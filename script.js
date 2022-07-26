// submitBtn button event handler.
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener("click", function(){
    const submitArea = document.getElementById('submit-area');
    submitArea.style.display = 'none'; 
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block'
})
// depositBtn event handler.
const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function(){
    const depositAmount = document.getElementById('depositAmount').value;
    const depositnum = parseFloat(depositAmount);

    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNum = parseFloat(currentDeposit);
    const totalDeposit = depositnum + currentDepositNum ;

    document.getElementById('currentDeposit').innerText = totalDeposit;

    const currentBalance = document.getElementById('currentBalance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositnum + currentBalanceNumber;
    document.getElementById('currentBalance').innerText = totalBalance;
     
    document.getElementById('depositAmount').value = ''; 
})
// withdrawBtn event handler.
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);

    const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const totalWithdraw = withdrawAmountNumber + currentWithdrawNumber ;
   
    document.getElementById('currentWithdraw').innerText = totalWithdraw;
    document.getElementById('withdrawAmount').value = '';

    const recent = document.getElementById('currentBalance').innerText;
    const recentBalance = parseFloat(recent);
    
    const availableBalance = recentBalance - totalWithdraw;
    document.getElementById('currentBalance').innerText = availableBalance;
}) 