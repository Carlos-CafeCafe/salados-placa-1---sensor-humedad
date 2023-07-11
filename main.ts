input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
function medirHumedad () {
    Humedad = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(Humedad)
    if (Humedad >= 99) {
        radio.sendString("tanqueLleno")
    }
}
let Humedad = 0
radio.setGroup(1)
Humedad = 0
loops.everyInterval(5000, function () {
    medirHumedad()
})
