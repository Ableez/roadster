// Manufacturer targets: https://x.com/Tesla/status/2110905588402295283
// Checked 2026-10-17. These are claimed bounds, not independent measurements.
export const MPH = 0.44704;
export const ROADSTER = {
  targets: {
    motorSixtySeconds: 1.6,
    rocketSixtySeconds: 0.59,
    topSpeedLowerBound: 230 * MPH,
  },
  // Remaining values are simulation assumptions / calibrated parameters.
  mass: 1850,
  gravity: 9.81,
  airDensity: 1.225,
  dragArea: 0.65,
  rollingCoefficient: 0.012,
  wheelPower: 900000,
  launchAcceleration: 17.04,
  rearThrust: 54200,
  tyreMu: 1.2,
  fanAcceleration: 9.81,
  aeroDownforceArea: 1.1,
  brakeAcceleration: 14.715,
  regenAcceleration: 1.5,
  reverseLimit: 9,
  // Pick 231 mph to represent the >230 mph target; exact production vmax is unknown.
  speedGovernor: 231 * MPH,
};
export function resistanceAcceleration(speed) {
  return (
    (0.5 * ROADSTER.airDensity * ROADSTER.dragArea * speed * speed) /
      ROADSTER.mass +
    ROADSTER.rollingCoefficient * ROADSTER.gravity
  );
}
export function normalAcceleration(speed) {
  return (
    ROADSTER.gravity +
    ROADSTER.fanAcceleration +
    (0.5 * ROADSTER.airDensity * ROADSTER.aeroDownforceArea * speed * speed) /
      ROADSTER.mass
  );
}
export function motorAcceleration(speed) {
  return Math.min(
    ROADSTER.launchAcceleration,
    ROADSTER.wheelPower / (ROADSTER.mass * Math.max(1, Math.abs(speed))),
  );
}
export function createLaunch() {
  return {
    active: false,
    elapsed: 0,
    sixtyMph: null,
    hundredKmh: null,
    peakG: 0,
    boosted: false,
    valid: true,
  };
}
export function recordLaunch(s, input, dt, previousSpeed) {
  const command = input.forward || s.thrusters.rear > 0;
  if (!command && Math.abs(s.speed) < 0.1) s.launchArmed = true;
  if (
    !s.flight &&
    command &&
    !input.back &&
    s.launchArmed &&
    Math.abs(previousSpeed) < 0.1
  ) {
    s.launch = createLaunch();
    s.launch.active = true;
    s.launchArmed = false;
  }
  const launch = s.launch;
  if (!launch.active) return;
  if (s.flight || input.back || s.impact > 0.5) {
    launch.active = false;
    launch.valid = false;
    return;
  }
  launch.boosted ||= s.thrusters.rear > 0;
  launch.peakG = Math.max(
    launch.peakG,
    Math.max(0, s.acceleration) / ROADSTER.gravity,
  );
  for (const [field, target] of [
    ["sixtyMph", 60 * MPH],
    ["hundredKmh", 100 / 3.6],
  ]) {
    if (launch[field] === null && previousSpeed < target && s.speed >= target) {
      const fraction =
        (target - previousSpeed) / Math.max(1e-9, s.speed - previousSpeed);
      launch[field] = launch.elapsed + fraction * dt;
    }
  }
  launch.elapsed += dt;
  if (launch.hundredKmh !== null) launch.active = false;
}
