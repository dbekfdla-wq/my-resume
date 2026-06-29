document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');
    const toggleBtn = document.getElementById('toggleBtn');
    const btnText = toggleBtn.querySelector('.btn-text');

    // Click handler to toggle between Business Card and Resume
    toggleBtn.addEventListener('click', () => {
        // Toggle the flipped class on the card container
        cardContainer.classList.toggle('flipped');
        
        // Update the button text based on the flip state
        if (cardContainer.classList.contains('flipped')) {
            btnText.textContent = '명함 보기';
        } else {
            btnText.textContent = '이력서 보기';
        }
    });
});
