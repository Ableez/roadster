// Deterministic, metre-scale city. Instanced street furniture keeps draw calls low.
export function buildCity(T, scene, refresh) {
  const {
    Group,
    Mesh,
    Box,
    Material,
    Texture,
    Loader,
    Instanced,
    Matrix,
    Vector,
    Quaternion,
    Cylinder,
    Sphere,
    Color,
  } = T;
  const group = new Group();
  group.name = "Harbor City";
  scene.add(group);
  const colliders = [],
    batches = new Map();
  let seed = 51483;
  const random = () => {
    seed = (1664525 * seed + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const material = (color, extra = {}) =>
    new Material({ color, roughness: 0.85, ...extra });
  const stone = material(0xb6b1a5),
    curb = material(0xd1ccbf),
    metal = material(0x303b3e, { metalness: 0.6, roughness: 0.42 });
  const white = material(0xe2ded0),
    yellow = material(0xd6b963),
    soil = material(0x555344),
    bark = material(0x665442);
  const leaf = material(0x506b43),
    glass = material(0x294347, { metalness: 0.45, roughness: 0.25 });
  const cube = new Box(1, 1, 1),
    cylinder = new Cylinder(1, 1, 1, 8),
    sphere = new Sphere(1, 8, 6);
  const add = (geo, mat, x, y, z, w, h, d, ry = 0) => {
    const key = geo.uuid + mat.uuid;
    if (!batches.has(key)) batches.set(key, { geo, mat, items: [] });
    batches.get(key).items.push([x, y, z, w, h, d, ry]);
  };
  const box = (mat, x, y, z, w, h, d, ry = 0) =>
    add(cube, mat, x, y, z, w, h, d, ry);
  const solid = (x, z, w, h, d, bottom = 0) =>
    colliders.push({ x, z, hx: w / 2, hz: d / 2, bottom, top: bottom + h });
  const texture = new Loader().load("assets/textures/asphalt.jpg", refresh);
  texture.wrapS = texture.wrapT = 1000;
  texture.repeat.set(180, 180);
  texture.colorSpace = "srgb";
  texture.anisotropy = 8;
  const asphalt = material(0xa3a5a4, { map: texture });
  box(asphalt, 0, -0.16, 0, 560, 0.3, 560);
  const signMaterials = new Map();
  function sign(text, bg = "#263c39", fg = "#f5f0df") {
    const key = text + bg;
    if (signMaterials.has(key)) return signMaterials.get(key);
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 128;
    const ctx = c.getContext("2d");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 512, 128);
    ctx.strokeStyle = fg;
    ctx.lineWidth = 3;
    ctx.strokeRect(8, 8, 496, 112);
    ctx.fillStyle = fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "500 42px sans-serif";
    ctx.fillText(text, 256, 66, 470);
    const tex = new Texture(c);
    tex.colorSpace = "srgb";
    tex.anisotropy = 4;
    const mat = material(0xffffff, { map: tex });
    signMaterials.set(key, mat);
    return mat;
  }
  function facade(style) {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 512;
    const ctx = c.getContext("2d");
    const palette = [
      ["#b4a28a", "#c4b299"],
      ["#8b7164", "#a08776"],
      ["#bcbab0", "#cfcdc4"],
      ["#6e7a7c", "#859193"],
    ][style];
    ctx.fillStyle = palette[0];
    ctx.fillRect(0, 0, 512, 512);
    for (let y = 0; y < 512; y += 16) {
      ctx.strokeStyle = palette[1];
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
      for (let x = ((y / 16) % 2) * 32; x < 512; x += 64) {
        ctx.fillStyle = palette[1];
        ctx.fillRect(x, y, 1, 16);
      }
    }
    for (let y = 24; y < 512; y += 128)
      for (let x = 24; x < 512; x += 128) {
        ctx.fillStyle = "#353e3c";
        ctx.fillRect(x - 4, y - 4, 88, 99);
        ctx.fillStyle = random() > 0.8 ? "#b1a78b" : "#42565a";
        ctx.fillRect(x, y, 80, 89);
        const grad = ctx.createLinearGradient(x, y, x + 80, y + 89);
        grad.addColorStop(0, "#a3b4ad88");
        grad.addColorStop(1, "#24363944");
        ctx.fillStyle = grad;
        ctx.fillRect(x, y, 80, 89);
        ctx.fillStyle = "#a9a89b";
        ctx.fillRect(x + 38, y, 3, 89);
        ctx.fillRect(x, y + 44, 80, 3);
        ctx.fillStyle = "#d0c5af";
        ctx.fillRect(x - 7, y + 89, 94, 6);
      }
    const tex = new Texture(c);
    tex.wrapS = tex.wrapT = 1000;
    tex.repeat.set(1, 1);
    tex.colorSpace = "srgb";
    tex.anisotropy = 8;
    return tex;
  }
  const facades = Array.from({ length: 4 }, (_, i) => facade(i));
  const shops = [
    "ATELIER",
    "CORNER COFFEE",
    "MERCANTILE",
    "STUDIO 04",
    "HARBOR BOOKS",
    "PROVISIONS",
  ];
  const carMats = [
    material(0x52636d, { metalness: 0.3 }),
    material(0xddd6c4),
    material(0x763e35),
    material(0x353b39),
  ];
  const avenues = [-192, -128, -64, 0, 64, 128, 192];
  // Pavement blocks have physical curbs, interrupted at junction crossings.
  for (let ix = 0; ix < 6; ix++)
    for (let iz = 0; iz < 6; iz++) {
      const cx = -160 + ix * 64,
        cz = -160 + iz * 64;
      box(stone, cx, 0.09, cz, 46, 0.18, 46);
      // Sidewalks are a collision surface, not a decorative plane.
      solid(cx, cz, 46, 0.18, 46);
      for (const side of [-1, 1]) {
        box(curb, cx + side * 23, 0.13, cz, 0.24, 0.26, 46);
        box(curb, cx, 0.13, cz + side * 23, 46, 0.26, 0.24);
        for (let t = -20; t <= 20; t += 4) {
          box(curb, cx + t, 0.185, cz + side * 20, 0.025, 0.008, 6);
          box(curb, cx + side * 20, 0.185, cz + t, 6, 0.008, 0.025);
        }
      }
      if (ix === 3 && iz === 3) {
        box(soil, cx, 0.22, cz, 34, 0.1, 34);
        for (const side of [-1, 1])
          for (let k = -12; k <= 12; k += 8) tree(cx + k, cz + side * 14);
        box(stone, cx, 0.28, cz, 7, 0.4, 7);
        box(glass, cx, 0.5, cz, 5, 0.1, 5);
        solid(cx, cz, 7, 0.5, 7);
      } else {
        // Four street-facing properties, with narrow service alleys between buildings.
        for (const sx of [-1, 1])
          for (const sz of [-1, 1]) {
            const x = cx + sx * 9,
              z = cz + sz * 9,
              w = 15 + random() * 2,
              d = 15 + random() * 2;
            const floors = 3 + Math.floor(random() * 6) + (ix < 2 ? 2 : 0),
              h = floors * 3.25 + 3.4;
            const tex = facades[Math.floor(random() * 4)].clone();
            tex.repeat.set(w / 12, (h - 3.4) / 12);
            tex.needsUpdate = true;
            const mat = material(0xffffff, { map: tex });
            box(mat, x, (h + 3.4) / 2 + 0.18, z, w, h - 3.4, d);
            box(stone, x, 1.9, z, w, 3.4, d);
            solid(x, z, w, h + 0.4, d, 0.18);
            box(curb, x, h + 0.25, z, w + 0.45, 0.4, d + 0.45);
            box(metal, x, h + 0.45, z, w - 0.7, 0.12, d - 0.7);
            box(stone, x + 2, h + 1, z + 2, 2.5, 1.2, 2);
            box(metal, x + 2, h + 1.65, z + 2, 2.6, 0.15, 2.1);
            solid(x + 2, z + 2, 2.6, 1.4, 2.1, h + 0.4);
            const front = z + sz * (d / 2 + 0.04);
            for (const offset of [-4.5, 0, 4.5])
              box(glass, x + offset, 1.65, front, 3.7, 2.7, 0.12);
            box(
              sign(
                shops[
                  (ix * 6 + iz + Number(sx > 0) + Number(sz > 0)) % shops.length
                ],
              ),
              x,
              3.1,
              front + sz * 0.1,
              w - 0.4,
              0.65,
              0.18,
              sz < 0 ? Math.PI : 0,
            );
            box(metal, x, 2.8, front + sz * 0.8, w - 0.4, 0.12, 1.6);
          }
      }
      for (const side of [-1, 1])
        for (const off of [-14, 8]) {
          tree(cx + off, cz + side * 20);
          lamp(cx + side * 21, cz + off);
        }
      // Benches, bins, hydrants, and parked cars share the same visual / collision bounds.
      for (const side of [-1, 1]) {
        const bx = cx + side * 20,
          bz = cz + 2;
        box(bark, bx, 0.65, bz, 0.65, 0.14, 2);
        box(metal, bx, 0.4, bz, 0.5, 0.6, 1.8);
        solid(bx, bz, 0.8, 1.1, 2);
        box(metal, bx, 0.65, bz + 3, 0.65, 1, 0.65);
        solid(bx, bz + 3, 0.65, 1.15, 0.65);
        const hydrant = material(0x8f4d36);
        add(cylinder, hydrant, cx + side * 21, 0.65, cz - 18, 0.16, 0.9, 0.16);
        solid(cx + side * 21, cz - 18, 0.4, 1.1, 0.4);
        if (random() > 0.25)
          parked(cx + side * 25.2, cz - 9, side > 0 ? 0 : Math.PI);
      }
    }
  function tree(x, z) {
    box(soil, x, 0.23, z, 2.2, 0.1, 2.2);
    add(cylinder, bark, x, 1.8, z, 0.16, 3.3, 0.16);
    add(sphere, leaf, x, 4.8, z, 2.15, 2.7, 2.15);
    add(sphere, leaf, x + 0.8, 5.9, z + 0.2, 1.55, 1.5, 1.5);
    solid(x, z, 0.4, 4, 0.4);
  }
  function lamp(x, z) {
    add(cylinder, metal, x, 3.5, z, 0.075, 7, 0.075);
    box(metal, x + 0.65, 6.95, z, 1.4, 0.1, 0.12);
    box(white, x + 1.25, 6.88, z, 0.7, 0.08, 0.3);
    solid(x, z, 0.2, 7, 0.2);
  }
  function parked(x, z, rotation) {
    const m = carMats[Math.floor(random() * carMats.length)];
    box(m, x, 0.65, z, 1.85, 0.65, 4.3, rotation);
    box(glass, x, 1.15, z - 0.2, 1.65, 0.65, 2.2, rotation);
    box(m, x, 1.5, z - 0.2, 1.7, 0.1, 2.3, rotation);
    for (const sx of [-1, 1])
      for (const sz of [-1, 1])
        box(metal, x + sx * 0.9, 0.38, z + sz * 1.4, 0.15, 0.55, 0.6);
    box(white, x, 0.72, z + 2.16, 1.5, 0.15, 0.03);
    solid(x, z, 1.85, 1.55, 4.3);
  }
  // Double centre lines, lane markings and crossings stop at intersections.
  for (const road of avenues) {
    for (let along = -220; along <= 220; along += 4) {
      if (avenues.some((v) => Math.abs(along - v) < 10)) continue;
      for (const side of [-1, 1]) {
        box(yellow, road + side * 0.16, 0.006, along, 0.1, 0.012, 4);
        box(yellow, along, 0.008, road + side * 0.16, 4, 0.012, 0.1);
        box(white, road + side * 4.4, 0.008, along, 0.1, 0.015, 1.7);
        box(white, along, 0.01, road + side * 4.4, 1.7, 0.015, 0.1);
      }
    }
  }
  for (const x of avenues)
    for (const z of avenues) {
      for (const side of [-1, 1])
        for (let stripe = -6; stripe <= 6; stripe += 1.5) {
          box(white, x + stripe, 0.012, z + side * 8, 0.7, 0.02, 2.3);
          box(white, x + side * 8, 0.014, z + stripe, 2.3, 0.02, 0.7);
        }
      for (const side of [-1, 1]) {
        const px = x + side * 10,
          pz = z + side * 10;
        add(cylinder, metal, px, 2.5, pz, 0.07, 5, 0.07);
        solid(px, pz, 0.2, 5, 0.2);
        box(metal, px, 4.5, pz, 0.4, 1.1, 0.4);
        box(material(0xb85a40), px, 4.75, pz - side * 0.23, 0.22, 0.22, 0.03);
        box(
          sign((Math.abs(x / 64) % 3 === 0 ? "HARBOR" : "CEDAR") + " AVE"),
          px,
          3.5,
          pz,
          2.7,
          0.48,
          0.12,
        );
      }
    }
  // Perimeter opens onto a continuous 4 km proving causeway at the north end.
  for (const side of [-1, 1]) {
    box(stone, side * 238, 0.7, 0, 1, 1.4, 477);
    solid(side * 238, 0, 1, 1.4, 477);
  }
  box(stone, 0, 0.7, -238, 477, 1.4, 1);
  solid(0, -238, 477, 1.4, 1);
  for (const side of [-1, 1]) {
    box(stone, side * 125.25, 0.7, 238, 226.5, 1.4, 1);
    solid(side * 125.25, 238, 226.5, 1.4, 1);
  }
  for(const side of [-1,1]){
    box(stone,side*13,.4,250,.25,.8,60);solid(side*13,250,.25,.8,60);
    box(white,side*11,.01,250,.12,.018,60);box(yellow,side*.16,.012,250,.1,.018,60);
  }
  for(let z=228;z<280;z+=16)for(const side of [-1,1])box(white,side*5.4,.012,z,.12,.018,5);
  box(sign('FOREST ROAD'),0,5,240,10,1,.2);
  for(const side of [-1,1]){box(metal,side*11.6,2.75,240,.14,5.5,.14);solid(side*11.6,240,.14,5.5,.14);}
  for (const { geo, mat, items } of batches.values()) {
    const mesh = new Instanced(geo, mat, items.length),
      matrix = new Matrix(),
      quat = new Quaternion();
    items.forEach(([x, y, z, w, h, d, ry], i) => {
      quat.setFromAxisAngle(new Vector(0, 1, 0), ry);
      matrix.compose(new Vector(x, y, z), quat, new Vector(w, h, d));
      mesh.setMatrixAt(i, matrix);
    });
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.computeBoundingSphere();
    group.add(mesh);
  }
  refresh();
  return { group, colliders };
}
