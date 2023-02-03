input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
    datalogger.deleteLog()
    plazieren_x = 0
    plazieren_y = 0
})
let plazieren_y = 0
let plazieren_x = 0
basic.clearScreen()
basic.forever(function () {
    led.plotBrightness(plazieren_x, plazieren_y, 255)
    if (input.isGesture(Gesture.TiltRight)) {
        if (plazieren_x < 4) {
            basic.clearScreen()
            plazieren_x += 1
        }
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        if (plazieren_x > 0) {
            basic.clearScreen()
            plazieren_x += -1
        }
    }
    if (input.isGesture(Gesture.ScreenDown)) {
        if (plazieren_y > 0) {
            basic.clearScreen()
            plazieren_y += -1
        }
    }
    if (input.isGesture(Gesture.LogoUp)) {
        if (plazieren_y < 4) {
            basic.clearScreen()
            plazieren_y += 1
        }
    }
    led.plotBrightness(plazieren_x, plazieren_y, 255)
    basic.pause(500)
})
