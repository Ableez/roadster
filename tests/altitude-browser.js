(async () => {
  const d = window.__dbg,
    results = [],
    control = document.getElementById("infinite-boosters");
  const assert = (ok, text) => {
    if (!ok) throw Error(text);
    results.push(text);
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
  if (!control.checked) control.click();
  for (let i = 0; i < 6; i++) tap("KeyQ");
  assert(
    d.vehicle.altitude === 127,
    "Q takes off and raises the height target in 20 m steps",
  );
  step(20);
  assert(d.vehicle.y > 126, "Car flies above the former 100 m ceiling");
  tap("KeyZ");
  step(8);
  assert(
    Math.abs(d.vehicle.y - 107) < 0.1,
    "Z lowers and holds the selected altitude",
  );
  key("KeyQ");
  key("KeyQ", "keydown", true);
  key("KeyQ", "keyup");
  assert(
    d.vehicle.altitude === 127,
    "Held-key repeat does not unexpectedly raise the target",
  );
  for (let i = 0; i < 30; i++) tap("KeyQ");
  step(50);
  assert(
    Math.abs(d.vehicle.y - 500) < 0.1,
    "High-altitude flight reaches and holds 500 m",
  );
  assert(
    d.vehicle.y > Math.max(...d.city.colliders.map((b) => b.top)),
    "Flight height clears all city rooftops",
  );
  control.click();
  d.reset();
  return results;
})();
