function clearScreen() {
    document.getElementById('screen').value = '';
}

function deleteLast() {
    let screen = document.getElementById('screen').value;
    screen.value = screen.slice(0, screen.length -1);
}

function appendValue(value) {
    document.getElementById('screen').value += value;
}

function calculateResult() {
    const screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = 'Error';
    }
}

