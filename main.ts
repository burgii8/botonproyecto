input.onButtonPressed(Button.A, function () {
    numero = numero - 1
})
input.onGesture(Gesture.Shake, function () {
    numero2 = randint(1, 6)
    basic.clearScreen()
    basic.showNumber(numero2)
})
input.onButtonPressed(Button.B, function () {
    numero = numero + 1
})
let numero2 = 0
let numero = 0
numero = 1
basic.forever(function () {
    basic.showNumber(numero)
})
basic.forever(function () {
    if (numero2 == numero) {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    if (numero < 1) {
        numero = numero + 1
    }
    if (numero > 6) {
        numero = numero - 1
    }
})
