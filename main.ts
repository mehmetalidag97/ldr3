namespace button {
    //% blockId=button_is_pressed
    //% block="button %button|is pressed"
    export function isPressed(button: Button): boolean {
        if (button === button) {
            return pins.digitalReadPin(DigitalPin.P2) == 1;
        } else {
            return pins.digitalReadPin(DigitalPin.P2) == 0;
        }
    }
}