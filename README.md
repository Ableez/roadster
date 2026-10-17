# Roadster — Harbor City

Serve the repository with `python3 -m http.server 4173`, then open <http://localhost:4173>.

The city and forest route is the default map, with the chase camera. Use the **City & forest / Original ramp** tabs at the top right for the restored stunt ground: daylight, Poly Haven trees, concrete perimeter barriers, and a darker variant of the same asphalt. R resets the selected scene; C changes camera. The ramp uses its original curved profile with surface-following tyre contact and assisted landing after release.

| Control | Action |
| --- | --- |
| WASD / arrows | Accelerate, brake/reverse, steer |
| E | Take off; tap again to request landing; tap during landing to cancel |
| Shift + W / ↑ | Fire rear thrusters |
| Shift + S / ↓ | Fire bottom thrusters to lift |
| Shift + A / ← | Fire left nozzles, pushing right |
| Shift + D / → | Fire right nozzles, pushing left |
| Q / Z | Raise / lower altitude target by 20 m |
| Space | Descend; land when reaching a surface |
| B | Fire rear boosters directly, including without W |
| C | Chase / orbit camera |
| L | Headlights |
| R | Reset |

Touch controls include flight, descent, boost, steering and pedals. Rise and descent are directly visible on touch screens. Open the top-right menu for reset, camera and headlights. The controls panel (? button) contains the Infinite boosters option, off by default.

## Implementation

- `assets/main.js` contains the existing bundled Three.js renderer/model loader and the simulation/render integration.
- `assets/vehicle.mjs` owns all motion and collision state. It runs at a fixed 120 Hz with interpolated rendering. Ground steering uses a rear-axle bicycle model with limited lateral acceleration and Ackermann wheel steering; wheel spin follows distance travelled. Body lean is separate from wheel contact. Assisted flight uses damped velocity/altitude control.
- `assets/city.mjs` creates a deterministic fictional district, using instanced geometry for roads, buildings and street furniture. Collision boxes come from the same placements as the geometry.

The physics is a simplified game simulation, not an engineering vehicle model. Swept oriented vehicle contacts cover buildings, roofs, kerbs, parked cars, trunks, poles and street furniture; foliage has no collision. There is no traffic or pedestrian simulation. The visible perimeter marks the district edge, with an opening onto Forest Road; flight can cross it.

## Calibrated performance

See [ROADSTER_SPECS.md](ROADSTER_SPECS.md) for manufacturer sources, assumptions and the calibration boundary. The actual model measures 0–60 mph in about 1.590 s on W and 0.581 s on W+B; the configured speed governor is 231 mph / 371.76 km/h. The HUD measures your launch from the first applied force without rollout. Braking or collision interrupts an unfinished timed run.

Follow the main avenue north from spawn onto Forest Road to reach top speed. The route continues through streamed forest sections. It is part of the city map, not a separate location.

## Flight control

The simulated ceiling is 500 m. Q/Z select height in 20 m increments; Q can also take off. Shift + S / Down holds bottom thrust to climb; Space lowers the target for descent. The selected target is held on release. Side jets translate without changing heading; unmodified A/D still steer. The touch rise button uses the same lift controller.

Manual and reserve landings brake horizontal motion and reduce sink rate near the detected support surface, including rooftops. They settle at low vertical speed. Rear boost is inhibited during an active landing; cancel a manual landing with E to resume propulsion.

## Thruster charge

Flight and rear boost share a charge capped at 100%. Hover consumes 4% per second (about 25 seconds); full rear boost on the ground consumes 22% per second (about 4.5 seconds). Climbing adds consumption. Manual side jets also consume charge. Ground recharge begins after a 1.5 second delay and restores 12.5% per second. Charging requires surface contact.

Infinite mode bypasses charge consumption while preserving the remaining finite charge. Switching it off restores the stored charge and reserve landing if empty. Reset preserves this option.

Depletion locks the main thrusters, initiates a controlled reserve-powered landing, and requires a full ground recharge before boost or takeoff is available again. E / Shift cannot override reserve landing. Partially used packs can recharge while driving; takeoff requires at least 20% charge.

Exhaust cores and vapour respond to the controller's propulsion output: rear boost, lift, countersteering jet couples, and flight braking. Ground wheel drive does not emit jet exhaust.

## Checks

```
node --test tests/*.test.mjs
node --check assets/main.js
```

For browser regression checks, open `http://localhost:4173/?bench` with agent-browser, then run:

```
agent-browser eval --stdin < tests/browser-regression.js
agent-browser eval --stdin < tests/propulsion-browser.js
agent-browser eval --stdin < tests/performance-browser.js
agent-browser eval --stdin < tests/altitude-browser.js
agent-browser eval --stdin < tests/manual-thrusters-browser.js
agent-browser eval --stdin < tests/forest-browser.js
```

The browser script uses actual keyboard handlers and the live controller to check default camera/map, takeoff, hover, repeat suppression, landing, driving after landing, flight steering, focus loss, and reset. Bench hooks are enabled only by `?bench`.

## Asset sources

- Asphalt 02 by Rob Tuytel, Poly Haven: <https://polyhaven.com/a/asphalt_02> — CC0, downloaded locally as `assets/textures/asphalt.jpg`. License: <https://polyhaven.com/license>.
- Existing Roadster model: <https://studio.sandbox.game/play/2a4b6624-9320-4b37-ba57-94898177db38> (inherited from the original project).
- Buildings, facades, signs and street furniture are generated locally. No third-party city model is used.

HUD refinement followed the design engineering and animation performance guidance at <https://github.com/Ableez/design-skills>.

Created by [Ableez · @ableezz](https://x.com/ableezz). Made with OpenAI Codex · GPT-6.

## Endless forest road and atmosphere

Drive north from the city onto Forest Road. It streams at most eight 256 m sections with deterministic tree / rock placement, continuous lane markings, guardrails and physical trunk / roadside contacts. There is no map switch and no road-end barrier. Road shoulders sit at distinct elevations to prevent overlapping-surface flicker.

Actual [Poly Haven Pine Forest](https://polyhaven.com/collections/pine_forest) assets are bundled locally under [CC0](https://polyhaven.com/license): Pine Sapling Small, Rock Moss Set 01 and Forest Ground 04. The tree was reduced from 122,235 to 9,618 triangles; the selected rock from 5,000 to 1,000 triangles. Meshopt-compressed GLBs are about 542 KB and 132 KB. Near trees use instanced 3D geometry; distant woodland uses crossed cutout cards baked from the same Poly Haven tree at runtime. No external asset request is needed while driving. See assets/forest/SOURCES.md.

Rendering rebases its origin at long distances while physics retains double-precision world positions. Car, camera, city, forest and exhaust particles shift together. The HUD switches to travelled distance on the forest road. Section counts stay bounded in both directions, and reset returns to the city.

N cycles Golden Hour → Clear Day → Dusk. Lighting includes an atmospheric sky, visible sun disk, warm directional light, brighter hemisphere fill, soft shadow filtering and view-dependent glare. Building / trunk bounds occlude glare. This is an artistic Three.js atmosphere, not a physically validated weather simulation.

## UI copy and attribution

Visible help is intentionally short. Only Abdullahi / @ableezz and GPT-6 credits appear in the interface. Three.js, Poly Haven, the original Roadster model, design guidance and the performance source details remain documented here and in ROADSTER_SPECS.md. The ∞ checkbox next to the charge bar controls infinite boosters and defaults off.
