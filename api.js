/* 

Introduces a very simple api off the `window.emu` object. Allows for getting/setting a few common things.

*/

var Api = {};
Api.getSram = function() {
    return cpuMemory.subarray(0x6000, 0x8000);
};

Api.setSramValue = function(addr, value) {
    cpuMemory.set[0x6000+addr] = value;
};

Api.setSramValues = function(addr, values) {
    for (var i = 0; i < values.length; i++) {
        cpuMemory[0x6000+addr+i] = values[i];
    }
};