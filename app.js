document.getElementById('bloodRequestForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bloodGroup = document.getElementById('bloodGroup').value;
    const quantity = document.getElementById('quantity').value;

    if (bloodGroup && quantity) {
        alert(`Blood Request Submitted!\nBlood Group: ${bloodGroup}\nQuantity: ${quantity} Liters`);
    } else {
        alert('Please select both blood group and quantity.');
    }
});