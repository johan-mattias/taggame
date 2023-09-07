let recieving = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (recieving == 1) {
        basic.showNumber(receivedNumber)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(4)
    recieving = 1
})
basic.forever(function () {
    basic.showNumber(0)
    basic.showNumber(1)
    basic.showNumber(2)
})
