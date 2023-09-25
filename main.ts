//% subcategory="LDR"
//% subcategory="Button"
//% subcategory="Pot"
namespace ldr {
    //% block="ldr read"
    export function ldrread(): number {
        let result;
        result = pins.analogReadPin(AnalogPin.P0);
        return result;
    }
}

namespace pot {
    //% block="pot read"
    export function potread(): number {
        let result;
        result = pins.analogReadPin(AnalogPin.P1);
        return result;
    }
}

namespace button {
    //% block="button read"
    export function buttonread(): number {
        let result;
        result = pins.digitalReadPin(DigitalPin.P2);
        return result;
    }
}