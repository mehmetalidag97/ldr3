namespace ldr {
    /**
     * Read the LDR value (0-1023).
     */
    //% block
    //% subcategory="LDR"
    export function ReadLdrValue(): number {
        let ldrValue = pins.analogReadPin(27);
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
        let potValue = pins.analogReadPin(26);
        return potValue;
    }
}