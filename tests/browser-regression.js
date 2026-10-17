(() => {
  const d = window.__dbg,
    results = [];
  const assert = (condition, message) => {
    if (!condition) throw Error(message);
    results.push(message);
  };
  const key = (code, type = "keydown", repeat = false) =>
    dispatchEvent(new KeyboardEvent(type, { code, repeat }));
  const tap = (code) => {
    key(code);
    key(code, "keyup");
  };
  const step = (seconds) => {
    for (let i = 0; i < seconds * 120; i++) d.step(1 / 120);
  };
  d.reset();
  assert(d.drive.chase, "Chase camera is default");
  assert(
    !document.body.innerText.includes("Ramp City"),
    "Map switcher removed",
  );
  assert(
    d.city.group.visible &&
      !d.city.group.children.some((c) => c.name.includes("ramp")),
    "Replacement city is active",
  );
  tap("KeyE");
  assert(d.vehicle.flight, "E tap enters flight");
  step(8);
  assert(Math.abs(d.vehicle.y - 7) < 0.1, "Flight settles at seven metres");
  key("KeyE");
  key("KeyE", "keydown", true);
  assert(d.vehicle.landing, "Key repeat does not retoggle landing");
  key("KeyE", "keyup");
  step(12);
  assert(!d.vehicle.flight && d.vehicle.y < 0.05, "E lands safely");
  const x = d.vehicle.x,
    z = d.vehicle.z;
  key("KeyW");
  step(0.5);
  key("KeyW", "keyup");
  assert(
    Math.hypot(d.vehicle.x - x, d.vehicle.z - z) > 0.5,
    "Driving works after landing",
  );
  tap("KeyE");
  step(3);
  key("KeyD");
  step(1);
  key("KeyD", "keyup");
  assert(d.vehicle.yaw < -0.4, "Right steering works in flight");
  key("KeyW");
  dispatchEvent(new Event("blur"));
  step(8);
  assert(
    Math.hypot(d.vehicle.vx, d.vehicle.vz) < 0.1,
    "Focus loss clears held keys",
  );
  tap("KeyR");
  assert(
    !d.vehicle.flight &&
      d.vehicle.y === 0 &&
      d.vehicle.x === 4 &&
      d.vehicle.z === -24,
    "Reset clears flight and restores spawn",
  );
  tap("KeyE");
  step(4);
  tap("KeyR");
  step(1);
  assert(
    !d.vehicle.flight && Math.abs(d.vehicle.vy) < 0.01,
    "Reset during flight stays grounded",
  );
  d.reset();
  return results;
})();
