let recieving = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (recieving == 1) {
        basic.showNumber(receivedNumber)
    }
})
input.onButtonPressed(Button.A, function () {
    recieving = 1
    radio.sendNumber(4)
})
basic.forever(function () {
    basic.showNumber(0)
    basic.showNumber(1)
    basic.showNumber(2)
})
