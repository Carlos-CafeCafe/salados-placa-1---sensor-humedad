function medirHumedad () {
    Humedad = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    Humedad,
    100
    )
    basic.showNumber(Humedad)
    if (Humedad >= 50) {
        radio.sendString("tanqueLleno")
    }
    basic.clearScreen()
}
let Humedad = 0
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
loops.everyInterval(5000, function () {
    medirHumedad()
})
