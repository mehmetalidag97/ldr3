namespace ldr {
    /**
     * Read the LDR value (0-1023).
     */
    //% block
    //% subcategory="LDR"
    export function ReadLdrValue(): number {
        return 0; 
    }
}

namespace potentiometer {
    /**
     * Read the POT value (0-1023).
     */
    //% block
    //% subcategory="POT"
    export function ReadPotValue(): number {
        return 0;
    }
}

namespace ldrtest {
    /**
     * Read the LDR value (0-1023) from pin 27 (assuming it's an analog pin).
     */
    //% block
    export function readLDRValue(): number {
        // Read the LDR value from pin 27 (assuming it's an analog pin)
        let ldrValue = pins.analogReadPin(27);
        return ldrValue;
    }
}