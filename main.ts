input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
function medirHumedad () {
    Humedad = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(Humedad)
}
let Humedad = 0
radio.setGroup(1)
Humedad = 0
loops.everyInterval(5000, function () {
    medirHumedad()
    radio.sendValue("Humedad", Humedad)
})
