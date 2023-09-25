enum btnList {
    //% block="M-LEFT"
    cleft = 2,
}

enum eventList {
    //% block="PRESSED"
    pressed = 1,
    //% block="RELEASED"
    released = 0
}
namespace JoyBit {
    export function btnPressed(btn: btnList, btnEvent: eventList): boolean {

        if (btn == btnList.cleft) {
            return pins.digitalReadPin(DigitalPin.P8) == btnEvent;
        } 
        else {
            return pins.digitalReadPin(DigitalPin.P15) == btnEvent;
        }
    }
}