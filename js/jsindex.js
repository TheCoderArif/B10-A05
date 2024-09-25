function getTextElementById (id) {
    const num = document.getElementById(id).innerText;
    const num2 = parseFloat(num);
    return num2;
    
}
function getInputFieldElementById (id) {
    const num = document.getElementById(id).value;
    return num;
    
}
// let date = date();

// const mainBalance = getTextElementById('main-balance');
// const noakhaliDonation = getTextElementById('noakhali-donation');
// const mainBalance = parseFloat(balance);

document.getElementById('noakhali-button').addEventListener('click', function(){
    const input = getInputFieldElementById('noakhali-input');

    const mainBalance = getTextElementById('main-balance');
const noakhaliDonation = getTextElementById('noakhali-donation');
    
    if ((input >= 0) && (mainBalance > input) ) {
        const mainBalanceUpdate = mainBalance - input;
        const noakhaliBalanceUpdate = parseFloat(noakhaliDonation) +  parseFloat(input);

        // let date =  date();
        document.getElementById('main-balance').innerText= mainBalanceUpdate;
        document.getElementById('noakhali-donation').innerText= noakhaliBalanceUpdate;

        const p = document.createElement('p');
        p.innerText = `${input} taka is donated for flood in Noakhali, Bangladesh
         `
        // p.write(tarikh);
        p.setAttribute('id','newHistory' );
        p.setAttribute('class','hidden' );
        
        p.setAttribute('class','ml-20');
        p.classList.add('border-4','mb-2', 'mr-20');
        
        

        
        document.getElementById('history-of-transaction').appendChild(p);

        alert('Congrates. You have donated humankind successfully'
        )
        


   


    }
    else{
        alert('There is an error. Please try again.')
    }
});





document.getElementById('feni-button').addEventListener('click', function(){
    const input = getInputFieldElementById('feni-input');

    const mainBalances = getTextElementById('main-balance');
const feniDonation = getTextElementById('feni-donation');
console.log(input);


if ((input >= 0) && (mainBalances > input) ) {
    const mainBalanceUpdate = mainBalances - input;
    const feniBalanceUpdate = parseFloat(feniDonation) +  parseFloat(input);

    document.getElementById('main-balance').innerText= mainBalanceUpdate;
        document.getElementById('feni-donation').innerText= feniBalanceUpdate;


        const p = document.createElement('p');
        p.innerText = `${input} taka is donated for flood in Feni, Bangladesh
         `
        // p.write(tarikh);
        // p.setAttribute('id','newHistory' );
        // p.setAttribute('class','hidden' );
        
        p.setAttribute('class','ml-20');
        p.classList.add('border-4','mb-2', 'mr-20');
        
        

        
        document.getElementById('history-of-transaction').appendChild(p);
        
        alert('Congrates. You have donated humankind successfully'
        )

}

else{
    alert('There is an error. Please try again.')
}



});










document.getElementById('quota-button').addEventListener('click', function(){
    const input = getInputFieldElementById('quota-input');

    const mainBalancesi = getTextElementById('main-balance');
const quotaDonation = getTextElementById('quota-donation');
console.log(input);


if ((input >= 0) && (mainBalancesi > input) ) {
    const mainBalanceUpdate = mainBalancesi - input;
    const quotaBalanceUpdate = parseFloat(quotaDonation) +  parseFloat(input);

    document.getElementById('main-balance').innerText= mainBalanceUpdate;
        document.getElementById('quota-donation').innerText= quotaBalanceUpdate;


        const p = document.createElement('p');
        p.innerText = `${input} taka is donated for Quota movement, Bangladesh
         `
        // p.write(tarikh);
        // p.setAttribute('id','newHistory' );
        // p.setAttribute('class','hidden' );
        
        p.setAttribute('class','ml-20');
        p.classList.add('border-4','mb-2', 'mr-20');
        
        

        
        document.getElementById('history-of-transaction').appendChild(p);
        
        alert('Congrates. You have donated humankind successfully'
        )

}

else{
    alert('There is an error. Please try again.')
}



});












// // Feni 
// document.getElementById('feni-button').addEventListener('click', function(){
//     const forInput = getInputFieldElementById('feni-input');

//     const mainBalance = getTextElementById('main-balance');
// const feniiDonation = getTextElementById('feni-donation');
    
//     if ((forInput >= 0) && (mainBalance > forInput) ) {
//         const mainBalanceUpdate = mainBalance - forInput;
//         const feniBalanceUpdate = parseFloat(feniDonation) +  parseFloat(forInput);

//         // let date =  date();
//         document.getElementById('main-balance').innerText= mainBalanceUpdate;
//         document.getElementById('feni-donation').innerText= feniBalanceUpdate;

//         const p = document.createElement('p');
//         p.innerText = `${forInput} taka is donated for flood in Feni, Bangladesh
//          `
//         // p.write(tarikh);
//         p.setAttribute('id','newHistory' );
//         p.setAttribute('class','hidden' );
        
//         p.setAttribute('class','ml-20');
//         p.classList.add('border-4','mb-2', 'mr-20');
        
        

        
//         document.getElementById('history-of-transaction').appendChild(p);
        


//     }
//     else{
//         alert('There is an error. Please try again.')
//     }
// });


// // quota
// document.getElementById('noakhali-button').addEventListener('click', function(){
//     const input = getInputFieldElementById('noakhali-input');

//     const mainBalance = getTextElementById('main-balance');
// const noakhaliDonation = getTextElementById('noakhali-donation');
    
//     if ((input >= 0) && (mainBalance > input) ) {
//         const mainBalanceUpdate = mainBalance - input;
//         const noakhaliBalanceUpdate = parseFloat(noakhaliDonation) +  parseFloat(input);

//         // let date =  date();
//         document.getElementById('main-balance').innerText= mainBalanceUpdate;
//         document.getElementById('noakhali-donation').innerText= noakhaliBalanceUpdate;

//         const p = document.createElement('p');
//         p.innerText = `${input} taka is donated for flood in Noakhali, Bangladesh
//          `
//         // p.write(tarikh);
//         p.setAttribute('id','newHistory' );
//         p.setAttribute('class','hidden' );
        
//         p.setAttribute('class','ml-20');
//         p.classList.add('border-4','mb-2', 'mr-20');
        
        

        
//         document.getElementById('history-of-transaction').appendChild(p);
        


//     }
//     else{
//         alert('There is an error. Please try again.')
//     }
// });











// donations 

document.getElementById('donation').addEventListener('click', function(){

    document.getElementById('history').classList.remove('bg-lime-300');
    document.getElementById('donation').classList.add('bg-lime-300');
    document.getElementById('card-section').classList.remove('hidden');
    document.getElementById('newHistory').classList.add('hidden');
    


});


// History 
document.getElementById('history').addEventListener('click', function(){
    document.getElementById('history').classList.add('bg-lime-300');
    document.getElementById('donation').classList.remove('bg-lime-300');
    document.getElementById('card-section').classList.add('hidden');
    // document.getElementById('transactions').classList.remove('hidden');
    document.getElementById('newHistory').classList.remove('hidden');

    
    // const p = document.getElementById('transactions').classList.remove('hidden');
    // console.log(p);
    

});



