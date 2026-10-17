import { test } from "node:test";
import assert from "node:assert/strict";
import {
  createVehicle,
  toggleFlight,
  stepVehicle,
} from "../assets/vehicle.mjs";
const run = (s, input, seconds, boxes = []) => {
  for (let n = 0; n < seconds * 120; n++) stepVehicle(s, input, 1 / 120, boxes);
};
test("one E tap takes off, settles at hover, then lands without a coordinate jump", () => {
  const s = createVehicle();
  toggleFlight(s);
  run(s, {}, 8);
  assert.ok(s.flight);
  assert.ok(Math.abs(s.y - 7) < 0.05);
  assert.ok(Math.abs(s.vy) < 0.05);
  run(s, { forward: 1, turn: 1 }, 2);
  const { x, z, yaw } = s;
  toggleFlight(s);
  run(s, {}, 12);
  assert.equal(s.flight, false);
  assert.equal(s.y, 0);
  const before = { x: s.x, z: s.z };
  run(s, {}, 0.1);
  assert.ok(Math.hypot(s.x - before.x, s.z - before.z) < 0.1);
  assert.ok(yaw < 0);
  assert.ok(Number.isFinite(x + z));
});
test("swept wall collision cannot tunnel at high speed; glancing hits retain tangent velocity", () => {
  const s = createVehicle();
  Object.assign(s, { x: 0, z: 0, vx: 120, vz: 20, yaw: Math.PI / 2 });
  stepVehicle(s, {}, 0.1, [
    { x: 5, z: 0, hx: 0.1, hz: 50, bottom: 0, top: 30 },
  ]);
  assert.ok(s.x < 2.8);
  assert.ok(s.vx <= 0);
  assert.ok(s.vz > 0);
});
test("flight passes above short props but hits building walls and roofs", () => {
  const boxes = [{ x: 0, z: 0, hx: 5, hz: 5, bottom: 0, top: 10 }];
  const s = createVehicle();
  Object.assign(s, { x: 0, z: -15, y: 15, vz: 30 });
  run(s, {}, 0.2, boxes);
  assert.ok(s.z > -15);
  Object.assign(s, { x: 0, z: 0, y: 15, vy: -30 });
  run(s, {}, 0.3, boxes);
  assert.ok(s.y >= 10);
});
test("opposite steering inputs are symmetric; braking stops before reversing", () => {
  const a = createVehicle(),
    b = createVehicle();
  run(a, { forward: 1, turn: 1 }, 2);
  run(b, { forward: 1, turn: -1 }, 2);
  assert.ok(Math.abs(a.yaw + b.yaw) < 1e-9);
  assert.ok(a.yaw < 0);
  const s = createVehicle();
  run(s, { forward: 1 }, 3);
  const speed = s.speed;
  run(s, { back: 1 }, 0.5);
  assert.ok(s.speed < speed);
});
test("hover stays stable within its available charge and responds to altitude changes", () => {
  const s = createVehicle();
  toggleFlight(s);
  run(s, { climb: 1 }, 8);
  run(s, {}, 6);
  assert.ok(Math.abs(s.y - s.altitude) < 0.02);
  assert.ok(s.y > 35);
  run(s, { descend: 1 }, 30);
  assert.equal(s.flight, false);
});
test("landing on a rooftop preserves roof height and allows takeoff again", () => {
  const s = createVehicle(),
    boxes = [{ x: 4, z: -24, hx: 10, hz: 10, bottom: 0, top: 12 }];
  Object.assign(s, { y: 20, flight: true, landing: true, altitude: 20 });
  run(s, {}, 10, boxes);
  assert.equal(s.flight, false);
  assert.ok(Math.abs(s.y - 12) < 0.02);
  toggleFlight(s);
  run(s, {}, 6, boxes);
  assert.equal(s.flight, true);
  assert.ok(s.y > 18);
});
test("starting in a rotated wall overlap resolves outside the building", () => {
  const s = createVehicle();
  Object.assign(s, { x: 6, z: 0, yaw: 0.6 });
  stepVehicle(s, {}, 1 / 120, [
    { x: 0, z: 0, hx: 5, hz: 5, bottom: 0, top: 20 },
  ]);
  assert.ok(s.x > 7);
});
