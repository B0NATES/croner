let mainTimer = {
    minutes: 0,
    seconds: 0,
    isRunning: false,
    intervalId: null,
    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.intervalId = setInterval(() => {
                if (this.seconds === 0 && this.minutes === 0) {
                    this.stop();
                    this.playAlert();
                } else {
                    if (this.seconds === 0 && this.minutes > 0) {
                        this.minutes--;
                        this.seconds = 59;
                    } else if (this.seconds > 0) {
                        this.seconds--;
                    }
                }

                this.updateDisplay();
            }, 1000);
        }
    },
    stop() {
        clearInterval(this.intervalId);
        this.isRunning = false;
    },
    reset() {
        this.stop();
        this.minutes = 0;
        this.seconds = 0;
        this.updateDisplay();
    },
    updateDisplay() {
        document.getElementById('mainTimerDisplay').textContent = `${this.minutes}:${this.seconds < 10 ? '0' : ''}${this.seconds}`;
    },

    setGameTime(time) {
        switch (time) {
            case '3min':
                this.minutes = 3;
                break;
            case '5min':
                this.minutes = 5;
                break;
            case '7min':
                this.minutes = 7;
                break;
            case '10min':
                this.minutes = 10;
                break;
            case '20min':
                this.minutes = 20;
                break;
            case '25min':
                this.minutes = 25;
                break;
            case 'custom':
                // Faltando a lógica para definir um tempo personalizado
                break;
            case 'reset':
                this.reset();
                break;
            default:
                break;
        }

        this.seconds = 0;
        this.updateDisplay();
    },

    playAlert() {
        document.getElementById('audioAlarm').play();
    }
};

let intervalTimer = {
    minutes: 0,
    seconds: 0,
    isRunning: false,
    intervalId: null,
    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.intervalId = setInterval(() => {
                if (this.seconds === 0 && this.minutes > 0) {
                    this.minutes--;
                    this.seconds = 59;
                } else if (this.seconds > 0) {
                    this.seconds--;
                }

                // lógica de reprodução de áudio 
                if (this.minutes === 5 && this.seconds === 0) {
                    document.getElementById('audio5min').play();
                } else if (this.minutes === 3 && this.seconds === 0) {
                    document.getElementById('audio3min').play();
                } else if (this.minutes === 2 && this.seconds === 0) {
                    document.getElementById('audio2min').play();
                } else if (this.minutes === 1 && this.seconds === 0) {
                    document.getElementById('audio1min').play();
                } else if (this.minutes === 0 && this.seconds === 30) {
                    document.getElementById('audio30sec').play();
                } else if (this.minutes === 0 && this.seconds === 10) {
                    document.getElementById('audio10sec').play();
                } else if (this.minutes === 0 && this.seconds === 0) {
                    document.getElementById('audioAlarm').play();
                }

                if (this.minutes === 0 && this.seconds === 0) {
                    this.stop();
                }

                this.updateDisplay();
            }, 1000);
        }
    },
    stop() {
        clearInterval(this.intervalId);
        this.isRunning = false;
    },
    reset() {
        this.stop();
        this.minutes = 0;
        this.seconds = 0;
        this.updateDisplay();
    },
    updateDisplay() {
        document.getElementById('intervalTimerDisplay').textContent = `${this.minutes}:${this.seconds < 10 ? '0' : ''}${this.seconds}`;
    },

    setIntervalTime(time) {
        switch (time) {
            case '5min':
                this.minutes = 5;
                break;
            case '3min':
                this.minutes = 3;
                break;
            case '1:30min':
                this.minutes = 1;
                this.seconds = 30;
                break;
            case ':30':
                this.minutes = 0;
                this.seconds = 30;
                break;
            case 'custom':
                //lógica para definir um tempo personalizado
                break;
            case 'reset':
                this.reset();
                break;
            default:
                break;
        }

        this.updateDisplay();
    }
};

document.getElementById('3min').addEventListener('click', () => {
    mainTimer.setGameTime('3min');
});

document.getElementById('5min').addEventListener('click', () => {
    mainTimer.setGameTime('5min');
});

document.getElementById('7min').addEventListener('click', () => {
    mainTimer.setGameTime('7min');
});

document.getElementById('10min').addEventListener('click', () => {
    mainTimer.setGameTime('10min');
});

document.getElementById('20min').addEventListener('click', () => {
    mainTimer.setGameTime('20min');
});

document.getElementById('25min').addEventListener('click', () => {
    mainTimer.setGameTime('25min');
});

document.getElementById('custom').addEventListener('click', () => {
    mainTimer.setGameTime('custom');
});

document.getElementById('reset').addEventListener('click', () => {
    mainTimer.setGameTime('reset');
});


document.getElementById('5min-interval').addEventListener('click', () => {
    intervalTimer.setIntervalTime('5min');
});

document.getElementById('3min-interval').addEventListener('click', () => {
    intervalTimer.setIntervalTime('3min');
});

document.getElementById('1:30min-interval').addEventListener('click', () => {
    intervalTimer.setIntervalTime('1:30min');
});

document.getElementById(':30-interval').addEventListener('click', () => {
    intervalTimer.setIntervalTime(':30');
});

document.getElementById('custom-interval').addEventListener('click', () => {
    intervalTimer.setIntervalTime('custom');
});

document.getElementById('reset-interval').addEventListener('click', () => {
    intervalTimer.setIntervalTime('reset');
});

document.getElementById('startStopMainTimer').addEventListener('click', () => {
    if (mainTimer.isRunning) {
        mainTimer.stop();
    } else {
        mainTimer.start();
    }
});

document.getElementById('resetMainTimer').addEventListener('click', () => {
    mainTimer.reset();
});

document.getElementById('startStopIntervalTimer').addEventListener('click', () => {
    if (intervalTimer.isRunning) {
        intervalTimer.stop();
    } else {
        intervalTimer.start();
    }
});

document.getElementById('resetIntervalTimer').addEventListener('click', () => {
    intervalTimer.reset();
});

let scoreTeamA = 0;
let scoreTeamB = 0;

document.getElementById('incrementTeamA').addEventListener('click', () => {
    scoreTeamA++;
    document.getElementById('scoreTeamA').textContent = scoreTeamA;
});

document.getElementById('decrementTeamA').addEventListener('click', () => {
    if (scoreTeamA > 0) {
        scoreTeamA--;
        document.getElementById('scoreTeamA').textContent = scoreTeamA;
    }
});

document.getElementById('incrementTeamB').addEventListener('click', () => {
    scoreTeamB++;
    document.getElementById('scoreTeamB').textContent = scoreTeamB;
});

document.getElementById('decrementTeamB').addEventListener('click', () => {
    if (scoreTeamB > 0) {
        scoreTeamB--;
        document.getElementById('scoreTeamB').textContent = scoreTeamB;
    }
});


