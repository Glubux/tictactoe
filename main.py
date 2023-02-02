def on_logo_touched():
    datalogger.delete_log()
    datalogger.log(datalogger.create_cv("", 0))
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

basic.clear_screen()
basic.show_leds("""
    . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
""")