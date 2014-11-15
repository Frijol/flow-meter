var tessel = require('tessel');
var myPin = tessel.port['B'].pin['G1'];

var state;

setInterval(function () {
  state = myPin.read();
  console.log(state);
}, 10);

// it just toggles based on flow
// if a plastic sensor use the following calculation
// Sensor Frequency (Hz) = 7.5 * Q (Liters/min)
// Liters = Q * time elapsed (seconds) / 60 (seconds/minute)
// Liters = (Frequency (Pulses/second) / 7.5) * time elapsed (seconds) / 60
// Liters = Pulses / (7.5 * 60)


// Count toggles to get a volume

// Get time between toggles to get an instantaneous flow rate

// What else is useful to measure?
