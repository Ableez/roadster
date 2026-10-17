# Roadster performance calibration

Checked 2026-10-17. This simulator uses the redesigned, thruster-equipped Roadster's published targets rather than combining its specifications with the older 2017 concept or first-generation production car.

## Manufacturer sources

- [Tesla's configuration announcement, 2026-10-16](https://x.com/Tesla/status/2110905588402295283): Performance 0–60 mph <1.6 s; Thrust <0.9 s; Rocket <0.59 s; Rocket top speed above 230 mph. These are manufacturer claims, not independently verified production measurements. Direct X retrieval was blocked; the original post's text and author were read using the public FxTwitter representation of that exact post.
- [Tesla's current Roadster page](https://www.tesla.com/en_GB/roadster): rear cold-gas thrust for sub-one-second launches, suction / active aero, and perimeter thrusters for flight. Indexed content was readable; the direct site returned access restrictions during this check.

The older 1.9-second / >250 mph figures appeared in stale indexed pages and were not used. No exact production maximum speed is established by the >230 mph bound. No manufacturer mass, drag, tyre-friction, braking-distance or usable flight-endurance dataset was verified here.

## Implemented calibration

| Item | Simulation | Status |
| --- | --- | --- |
| W launch, 0–60 mph | 1.5898 s | Calibrated to the Performance <1.6 s claim |
| W+B launch, 0–60 mph | 0.5809 s | Calibrated to the Rocket <0.59 s claim |
| W launch, 0–100 km/h | 1.6468 s | Simulated result; not a separate Tesla claim |
| W+B launch, 0–100 km/h | 0.6017 s | Simulated result; not a separate Tesla claim |
| Governor | 231 mph / 371.76 km/h | Selected to represent >230 mph; exact production top speed unknown |
| Mass | 1,850 kg | Assumption |
| Wheel power | 900 kW | Assumption |
| Drag area | 0.65 m² | Assumption |
| Rear thrust | 54.2 kN | Tuned to the assisted launch target |
| Fan suction acceleration | 9.81 m/s² | Assumption |
| Tyre friction coefficient | 1.2 | Assumption |
| Maximum requested braking | 1.5 g | Assumption, limited by shared tyre grip |
| Flight ceiling / charge duration / recharge | Gameplay settings | Not Tesla specifications |

The W / W+B mappings provide two performance envelopes on the same playable model; they are not fully separate vehicle trims. Electric force is torque-limited at launch and power-limited at speed. Rolling resistance and quadratic air drag oppose motion. Tyre acceleration and cornering share a friction circle; gas thrust bypasses tyre grip. A smooth governor approaches the chosen maximum.

The 120 Hz controller measures launches using interpolated threshold crossings from rest, with no rollout subtraction. Completed times remain visible; collisions or braking invalidate incomplete runs. These calibrated targets do not validate the full acceleration curve or independent real-car behaviour.

The city's straight northern exit connects to a forest road long enough to reach the configured maximum and continue through recycled sections. The full-scene browser test reaches 371.76 km/h at z≈2,564 m from the normal spawn, without collisions.

## Validation

`node --test tests/*.test.mjs` covers acceleration targets, time-step consistency, reachable governed speed, braking, energy, height controls, soft touchdown, oriented collisions and wheel kinematics. Browser scripts check the actual input handlers, city-route reachability, options, HUD and visible nozzle output.
