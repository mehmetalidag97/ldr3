namespace ldr {
    /**
     * Read the LDR value (0-1023).
     */
    //% block
    //% subcategory="LDR"
    export function ReadLdrValue(): number {
        let ldrValue = pins.analogReadPin(0);
        return ldrValue;
    }
}

namespace potentiometer {
    /**
     * Read the POT value (0-1023).
     */
    //% block
    //% subcategory="POT"
    export function ReadPotValue(): number {
        let potValue = pins.analogReadPin(1);
        return potValue;
    }
}

namespace button {
    /**
     * Read the button value (0-1).
     */
    //% block
    //% subcategory="BUTTON"
    export function ReadButtonValue(): number {
        let buttonValue = pins.digitalReadPin(2);
        return buttonValue;
    }
}