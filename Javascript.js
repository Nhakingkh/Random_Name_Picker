function addConfettiEffect() {
    // Simple confetti effect using emojis
    const confetti = ['🎉', '🎊', '✨', '🌟'];
    const resultDiv = document.getElementById('result');
    
    confetti.forEach((emoji, index) => {
        setTimeout(() => {
            resultDiv.textContent += `${emoji}`;
        }, index * 100);
        function pickRandomName() {
            // Play the sound effect
            var audio = document.getElementById("clickSound");
            audio.play();
        
            // Your existing code for picking a random name goes here
        }
        
    });
}