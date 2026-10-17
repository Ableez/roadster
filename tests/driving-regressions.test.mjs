import { test } from "node:test";
import assert from "node:assert/strict";
import {
  createVehicle,
  moveAndCollide,
  stepVehicle,
  toggleFlight,
} from "../assets/vehicle.mjs";
const run = (s, input, seconds, boxes = []) => {
  for (let i = 0; i < seconds * 120; i++) stepVehicle(s, input, 1 / 120, boxes);
};
test("diagonal car clears a corner when its actual hull does not touch it", () => {
  const s = createVehicle();
  Object.assign(s, { x: 3, z: 3, yaw: Math.PI / 4 });
  moveAndCollide(s, 1 / 120, [
    { x: 0, z: 0, hx: 1, hz: 1, bottom: 0, top: 20 },
  ]);
  assert.equal(s.x, 3);
  assert.equal(s.z, 3);
});
test("a low sidewalk does not stop the car like an invisible building", () => {
  const s = createVehicle();
  Object.assign(s, { x: 0, z: -5, vz: 5 });
  run(s, { forward: 1 }, 2, [
    { x: 0, z: 10, hx: 10, hz: 10, bottom: 0, top: 0.18, surface: true },
  ]);
  assert.ok(s.z > 1);
  assert.ok(s.speed > 4);
});
test("B fires rear boost without W and consumes bounded charge", () => {
  const s = createVehicle();
  run(s, { boost: 1 }, 1);
  assert.ok(s.speed > 5);
  assert.ok(s.charge < 1);
  assert.ok(s.thrusters.rear > 0);
});
test("exhaustion forces descent, blocks further boost, then recharges on the ground", () => {
  const s = createVehicle();
  toggleFlight(s);
  run(s, {}, 5);
  s.charge = 0.01;
  run(s, { boost: 1, climb: 1 }, 1);
  assert.ok(s.forcedLanding);
  assert.equal(s.charge, 0);
  const height = s.y;
  toggleFlight(s);
  run(s, { climb: 1, boost: 1 }, 2);
  assert.ok(s.y < height);
  assert.equal(s.thrusters.rear, 0);
  run(s, {}, 8);
  assert.equal(s.flight, false);
  assert.ok(s.charge > 0);
  run(s, {}, 12);
  assert.equal(s.charge, 1);
  assert.equal(s.recharging, false);
  toggleFlight(s);
  assert.equal(s.flight, true);
});
test("front wheel steering agrees with the rolling path without sideways rear slip", () => {
  const s = createVehicle();
  run(s, { forward: 1, turn: 1 }, 1);
  const sn = Math.sin(s.yaw),
    cs = Math.cos(s.yaw),
    half = 1.3844;
  const lateral = s.vx * cs - s.vz * sn;
  assert.ok(Math.abs(lateral - s.yawRate * half) < 0.08);
  assert.ok(
    Math.abs(Math.atan2(lateral + s.yawRate * half, s.speed) - s.steer) < 0.03,
  );
});
