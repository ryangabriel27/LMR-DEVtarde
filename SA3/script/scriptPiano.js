for (let i = 0; i <= 30; i++) {
    const btn = document.getElementById(`btn${i}`);
    const audio = document.getElementById(`audio${i}`);
    btn.addEventListener('click', function () {
        audio.play();
    });
}
