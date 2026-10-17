import {buildRampScene} from './ramp-scene.mjs?v=tabs1';
import {attachRamp} from './ramp-course.mjs';
import {createVehicle, toggleFlight, stepVehicle, wheelKinematics, WHEEL_RADIUS, setInfiniteBoosters, adjustFlightAltitude, FLIGHT} from './vehicle.mjs?v=flip1';
import {buildCity} from './city.mjs?v=forest2';
import {buildForestRoad} from './forest-road.mjs?v=ramp1';
import {createAtmosphere} from './atmosphere.mjs?v=forest3';
var Ki = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
}
  , Zi = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
}
  , kf = 0
  , ou = 1
  , zf = 2;
var Ad = 1
  , Rl = 2
  , qn = 3
  , Nn = 0
  , Gt = 1
  , Ot = 2
  , Un = 0
  , _i = 1
  , Xi = 2
  , cu = 3
  , lu = 4
  , Hf = 5
  , Vi = 100
  , Vf = 101
  , Gf = 102
  , Wf = 103
  , Xf = 104
  , qf = 200
  , jf = 201
  , Yf = 202
  , Kf = 203
  , lc = 204
  , hc = 205
  , Zf = 206
  , Jf = 207
  , Qf = 208
  , $f = 209
  , ep = 210
  , tp = 211
  , np = 212
  , ip = 213
  , sp = 214
  , uc = 0
  , dc = 1
  , fc = 2
  , Ss = 3
  , pc = 4
  , mc = 5
  , gc = 6
  , bc = 7
  , Rd = 0
  , rp = 1
  , ap = 2
  , xi = 0
  , Cl = 1
  , Pl = 2
  , Il = 3
  , Cr = 4
  , op = 5
  , Ll = 6
  , Dl = 7
  , hu = "attached"
  , cp = "detached"
  , Cd = 300
  , ws = 301
  , Es = 302
  , _c = 303
  , xc = 304
  , Qa = 306
  , Zn = 1e3
  , jn = 1001
  , mr = 1002
  , Wt = 1003
  , Ul = 1004;
var _s = 1005;
var Zt = 1006
  , lr = 1007;
var Dn = 1008;
var Jn = 1009
  , Pd = 1010
  , Id = 1011
  , gr = 1012
  , Nl = 1013
  , qi = 1014
  , Rn = 1015
  , rn = 1016
  , Fl = 1017
  , Ol = 1018
  , Ts = 1020
  , Ld = 35902
  , Dd = 1021
  , Ud = 1022
  , gn = 1023
  , Nd = 1024
  , Fd = 1025
  , vs = 1026
  , As = 1027
  , Bl = 1028
  , kl = 1029
  , Od = 1030
  , zl = 1031;
var Hl = 1033
  , ga = 33776
  , ba = 33777
  , _a = 33778
  , xa = 33779
  , vc = 35840
  , yc = 35841
  , Mc = 35842
  , Sc = 35843
  , wc = 36196
  , Ec = 37492
  , Tc = 37496
  , Ac = 37808
  , Rc = 37809
  , Cc = 37810
  , Pc = 37811
  , Ic = 37812
  , Lc = 37813
  , Dc = 37814
  , Uc = 37815
  , Nc = 37816
  , Fc = 37817
  , Oc = 37818
  , Bc = 37819
  , kc = 37820
  , zc = 37821
  , va = 36492
  , Hc = 36494
  , Vc = 36495
  , Bd = 36283
  , Gc = 36284
  , Wc = 36285
  , Xc = 36286;
var Rs = 2300
  , Cs = 2301
  , Ro = 2302
  , uu = 2400
  , du = 2401
  , fu = 2402
  , lp = 2500;
var kd = 0
  , $a = 1
  , Pr = 2
  , hp = 3200
  , up = 3201;
var zd = 0
  , dp = 1
  , gi = ""
  , St = "srgb"
  , Xt = "srgb-linear"
  , eo = "linear"
  , et = "srgb";
var is = 7680;
var pu = 519
  , fp = 512
  , pp = 513
  , mp = 514
  , Hd = 515
  , gp = 516
  , bp = 517
  , _p = 518
  , xp = 519
  , qc = 35044
  , Ir = 35048;
var mu = "300 es"
  , Yn = 2e3
  , ya = 2001
  , Qn = class {
    addEventListener(e, t) {
        this._listeners === void 0 && (this._listeners = {});
        let n = this._listeners;
        n[e] === void 0 && (n[e] = []),
        n[e].indexOf(t) === -1 && n[e].push(t)
    }
    hasEventListener(e, t) {
        if (this._listeners === void 0)
            return !1;
        let n = this._listeners;
        return n[e] !== void 0 && n[e].indexOf(t) !== -1
    }
    removeEventListener(e, t) {
        if (this._listeners === void 0)
            return;
        let s = this._listeners[e];
        if (s !== void 0) {
            let r = s.indexOf(t);
            r !== -1 && s.splice(r, 1)
        }
    }
    dispatchEvent(e) {
        if (this._listeners === void 0)
            return;
        let n = this._listeners[e.type];
        if (n !== void 0) {
            e.target = this;
            let s = n.slice(0);
            for (let r = 0, a = s.length; r < a; r++)
                s[r].call(this, e);
            e.target = null
        }
    }
}
  , Ht = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]
  , gu = 1234567
  , hr = Math.PI / 180
  , Ps = 180 / Math.PI;
function Cn() {
    let i = Math.random() * 4294967295 | 0
      , e = Math.random() * 4294967295 | 0
      , t = Math.random() * 4294967295 | 0
      , n = Math.random() * 4294967295 | 0;
    return (Ht[i & 255] + Ht[i >> 8 & 255] + Ht[i >> 16 & 255] + Ht[i >> 24 & 255] + "-" + Ht[e & 255] + Ht[e >> 8 & 255] + "-" + Ht[e >> 16 & 15 | 64] + Ht[e >> 24 & 255] + "-" + Ht[t & 63 | 128] + Ht[t >> 8 & 255] + "-" + Ht[t >> 16 & 255] + Ht[t >> 24 & 255] + Ht[n & 255] + Ht[n >> 8 & 255] + Ht[n >> 16 & 255] + Ht[n >> 24 & 255]).toLowerCase()
}
function Tt(i, e, t) {
    return Math.max(e, Math.min(t, i))
}
function Vl(i, e) {
    return (i % e + e) % e
}
function vp(i, e, t, n, s) {
    return n + (i - e) * (s - n) / (t - e)
}
function yp(i, e, t) {
    return i !== e ? (t - i) / (e - i) : 0
}
function ur(i, e, t) {
    return (1 - t) * i + t * e
}
function Mp(i, e, t, n) {
    return ur(i, e, 1 - Math.exp(-t * n))
}
function Sp(i, e=1) {
    return e - Math.abs(Vl(i, e * 2) - e)
}
function wp(i, e, t) {
    return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e),
    i * i * (3 - 2 * i))
}
function Ep(i, e, t) {
    return i <= e ? 0 : i >= t ? 1 : (i = (i - e) / (t - e),
    i * i * i * (i * (i * 6 - 15) + 10))
}
function Tp(i, e) {
    return i + Math.floor(Math.random() * (e - i + 1))
}
function Ap(i, e) {
    return i + Math.random() * (e - i)
}
function Rp(i) {
    return i * (.5 - Math.random())
}
function Cp(i) {
    i !== void 0 && (gu = i);
    let e = gu += 1831565813;
    return e = Math.imul(e ^ e >>> 15, e | 1),
    e ^= e + Math.imul(e ^ e >>> 7, e | 61),
    ((e ^ e >>> 14) >>> 0) / 4294967296
}
function Pp(i) {
    return i * hr
}
function Ip(i) {
    return i * Ps
}
function Lp(i) {
    return (i & i - 1) === 0 && i !== 0
}
function Dp(i) {
    return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2))
}
function Up(i) {
    return Math.pow(2, Math.floor(Math.log(i) / Math.LN2))
}
function Np(i, e, t, n, s) {
    let r = Math.cos
      , a = Math.sin
      , o = r(t / 2)
      , c = a(t / 2)
      , l = r((e + n) / 2)
      , h = a((e + n) / 2)
      , u = r((e - n) / 2)
      , f = a((e - n) / 2)
      , d = r((n - e) / 2)
      , m = a((n - e) / 2);
    switch (s) {
    case "XYX":
        i.set(o * h, c * u, c * f, o * l);
        break;
    case "YZY":
        i.set(c * f, o * h, c * u, o * l);
        break;
    case "ZXZ":
        i.set(c * u, c * f, o * h, o * l);
        break;
    case "XZX":
        i.set(o * h, c * m, c * d, o * l);
        break;
    case "YXY":
        i.set(c * d, o * h, c * m, o * l);
        break;
    case "ZYZ":
        i.set(c * m, c * d, o * h, o * l);
        break;
    default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s)
    }
}
function An(i, e) {
    switch (e.constructor) {
    case Float32Array:
        return i;
    case Uint32Array:
        return i / 4294967295;
    case Uint16Array:
        return i / 65535;
    case Uint8Array:
        return i / 255;
    case Int32Array:
        return Math.max(i / 2147483647, -1);
    case Int16Array:
        return Math.max(i / 32767, -1);
    case Int8Array:
        return Math.max(i / 127, -1);
    default:
        throw new Error("Invalid component type.")
    }
}
function st(i, e) {
    switch (e.constructor) {
    case Float32Array:
        return i;
    case Uint32Array:
        return Math.round(i * 4294967295);
    case Uint16Array:
        return Math.round(i * 65535);
    case Uint8Array:
        return Math.round(i * 255);
    case Int32Array:
        return Math.round(i * 2147483647);
    case Int16Array:
        return Math.round(i * 32767);
    case Int8Array:
        return Math.round(i * 127);
    default:
        throw new Error("Invalid component type.")
    }
}
var Jt = {
    DEG2RAD: hr,
    RAD2DEG: Ps,
    generateUUID: Cn,
    clamp: Tt,
    euclideanModulo: Vl,
    mapLinear: vp,
    inverseLerp: yp,
    lerp: ur,
    damp: Mp,
    pingpong: Sp,
    smoothstep: wp,
    smootherstep: Ep,
    randInt: Tp,
    randFloat: Ap,
    randFloatSpread: Rp,
    seededRandom: Cp,
    degToRad: Pp,
    radToDeg: Ip,
    isPowerOfTwo: Lp,
    ceilPowerOfTwo: Dp,
    floorPowerOfTwo: Up,
    setQuaternionFromProperEuler: Np,
    normalize: st,
    denormalize: An
}
  , ne = class i {
    constructor(e=0, t=0) {
        i.prototype.isVector2 = !0,
        this.x = e,
        this.y = t
    }
    get width() {
        return this.x
    }
    set width(e) {
        this.x = e
    }
    get height() {
        return this.y
    }
    set height(e) {
        this.y = e
    }
    set(e, t) {
        return this.x = e,
        this.y = t,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    applyMatrix3(e) {
        let t = this.x
          , n = this.y
          , s = e.elements;
        return this.x = s[0] * t + s[3] * n + s[6],
        this.y = s[1] * t + s[4] * n + s[7],
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this
    }
    clampLength(e, t) {
        let n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y
    }
    cross(e) {
        return this.x * e.y - this.y * e.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }
    angleTo(e) {
        let t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0)
            return Math.PI / 2;
        let n = this.dot(e) / t;
        return Math.acos(Tt(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        let t = this.x - e.x
          , n = this.y - e.y;
        return t * t + n * n
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this
    }
    rotateAround(e, t) {
        let n = Math.cos(t)
          , s = Math.sin(t)
          , r = this.x - e.x
          , a = this.y - e.y;
        return this.x = r * n - a * s + e.x,
        this.y = r * s + a * n + e.y,
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y
    }
}
  , Fe = class i {
    constructor(e, t, n, s, r, a, o, c, l) {
        i.prototype.isMatrix3 = !0,
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        e !== void 0 && this.set(e, t, n, s, r, a, o, c, l)
    }
    set(e, t, n, s, r, a, o, c, l) {
        let h = this.elements;
        return h[0] = e,
        h[1] = s,
        h[2] = o,
        h[3] = t,
        h[4] = r,
        h[5] = c,
        h[6] = n,
        h[7] = a,
        h[8] = l,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    }
    copy(e) {
        let t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
    }
    setFromMatrix4(e) {
        let t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        let n = e.elements
          , s = t.elements
          , r = this.elements
          , a = n[0]
          , o = n[3]
          , c = n[6]
          , l = n[1]
          , h = n[4]
          , u = n[7]
          , f = n[2]
          , d = n[5]
          , m = n[8]
          , b = s[0]
          , g = s[3]
          , p = s[6]
          , x = s[1]
          , v = s[4]
          , _ = s[7]
          , P = s[2]
          , E = s[5]
          , R = s[8];
        return r[0] = a * b + o * x + c * P,
        r[3] = a * g + o * v + c * E,
        r[6] = a * p + o * _ + c * R,
        r[1] = l * b + h * x + u * P,
        r[4] = l * g + h * v + u * E,
        r[7] = l * p + h * _ + u * R,
        r[2] = f * b + d * x + m * P,
        r[5] = f * g + d * v + m * E,
        r[8] = f * p + d * _ + m * R,
        this
    }
    multiplyScalar(e) {
        let t = this.elements;
        return t[0] *= e,
        t[3] *= e,
        t[6] *= e,
        t[1] *= e,
        t[4] *= e,
        t[7] *= e,
        t[2] *= e,
        t[5] *= e,
        t[8] *= e,
        this
    }
    determinant() {
        let e = this.elements
          , t = e[0]
          , n = e[1]
          , s = e[2]
          , r = e[3]
          , a = e[4]
          , o = e[5]
          , c = e[6]
          , l = e[7]
          , h = e[8];
        return t * a * h - t * o * l - n * r * h + n * o * c + s * r * l - s * a * c
    }
    invert() {
        let e = this.elements
          , t = e[0]
          , n = e[1]
          , s = e[2]
          , r = e[3]
          , a = e[4]
          , o = e[5]
          , c = e[6]
          , l = e[7]
          , h = e[8]
          , u = h * a - o * l
          , f = o * c - h * r
          , d = l * r - a * c
          , m = t * u + n * f + s * d;
        if (m === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        let b = 1 / m;
        return e[0] = u * b,
        e[1] = (s * l - h * n) * b,
        e[2] = (o * n - s * a) * b,
        e[3] = f * b,
        e[4] = (h * t - s * c) * b,
        e[5] = (s * r - o * t) * b,
        e[6] = d * b,
        e[7] = (n * c - l * t) * b,
        e[8] = (a * t - n * r) * b,
        this
    }
    transpose() {
        let e, t = this.elements;
        return e = t[1],
        t[1] = t[3],
        t[3] = e,
        e = t[2],
        t[2] = t[6],
        t[6] = e,
        e = t[5],
        t[5] = t[7],
        t[7] = e,
        this
    }
    getNormalMatrix(e) {
        return this.setFromMatrix4(e).invert().transpose()
    }
    transposeIntoArray(e) {
        let t = this.elements;
        return e[0] = t[0],
        e[1] = t[3],
        e[2] = t[6],
        e[3] = t[1],
        e[4] = t[4],
        e[5] = t[7],
        e[6] = t[2],
        e[7] = t[5],
        e[8] = t[8],
        this
    }
    setUvTransform(e, t, n, s, r, a, o) {
        let c = Math.cos(r)
          , l = Math.sin(r);
        return this.set(n * c, n * l, -n * (c * a + l * o) + a + e, -s * l, s * c, -s * (-l * a + c * o) + o + t, 0, 0, 1),
        this
    }
    scale(e, t) {
        return this.premultiply(Co.makeScale(e, t)),
        this
    }
    rotate(e) {
        return this.premultiply(Co.makeRotation(-e)),
        this
    }
    translate(e, t) {
        return this.premultiply(Co.makeTranslation(e, t)),
        this
    }
    makeTranslation(e, t) {
        return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
        this
    }
    makeRotation(e) {
        let t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, -n, 0, n, t, 0, 0, 0, 1),
        this
    }
    makeScale(e, t) {
        return this.set(e, 0, 0, 0, t, 0, 0, 0, 1),
        this
    }
    equals(e) {
        let t = this.elements
          , n = e.elements;
        for (let s = 0; s < 9; s++)
            if (t[s] !== n[s])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 9; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        let n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e
    }
    clone() {
        return new this.constructor().fromArray(this.elements)
    }
}
  , Co = new Fe;
function Vd(i) {
    for (let e = i.length - 1; e >= 0; --e)
        if (i[e] >= 65535)
            return !0;
    return !1
}
function br(i) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", i)
}
function Fp() {
    let i = br("canvas");
    return i.style.display = "block",
    i
}
var bu = {};
function or(i) {
    i in bu || (bu[i] = !0,
    console.warn(i))
}
function Op(i, e, t) {
    return new Promise(function(n, s) {
        function r() {
            switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
            case i.WAIT_FAILED:
                s();
                break;
            case i.TIMEOUT_EXPIRED:
                setTimeout(r, t);
                break;
            default:
                n()
            }
        }
        setTimeout(r, t)
    }
    )
}
function Bp(i) {
    let e = i.elements;
    e[2] = .5 * e[2] + .5 * e[3],
    e[6] = .5 * e[6] + .5 * e[7],
    e[10] = .5 * e[10] + .5 * e[11],
    e[14] = .5 * e[14] + .5 * e[15]
}
function kp(i) {
    let e = i.elements;
    e[11] === -1 ? (e[10] = -e[10] - 1,
    e[14] = -e[14]) : (e[10] = -e[10],
    e[14] = -e[14] + 1)
}
var Ge = {
    enabled: !0,
    workingColorSpace: Xt,
    spaces: {},
    convert: function(i, e, t) {
        return this.enabled === !1 || e === t || !e || !t || (this.spaces[e].transfer === et && (i.r = Kn(i.r),
        i.g = Kn(i.g),
        i.b = Kn(i.b)),
        this.spaces[e].primaries !== this.spaces[t].primaries && (i.applyMatrix3(this.spaces[e].toXYZ),
        i.applyMatrix3(this.spaces[t].fromXYZ)),
        this.spaces[t].transfer === et && (i.r = ys(i.r),
        i.g = ys(i.g),
        i.b = ys(i.b))),
        i
    },
    fromWorkingColorSpace: function(i, e) {
        return this.convert(i, this.workingColorSpace, e)
    },
    toWorkingColorSpace: function(i, e) {
        return this.convert(i, e, this.workingColorSpace)
    },
    getPrimaries: function(i) {
        return this.spaces[i].primaries
    },
    getTransfer: function(i) {
        return i === gi ? eo : this.spaces[i].transfer
    },
    getLuminanceCoefficients: function(i, e=this.workingColorSpace) {
        return i.fromArray(this.spaces[e].luminanceCoefficients)
    },
    define: function(i) {
        Object.assign(this.spaces, i)
    },
    _getMatrix: function(i, e, t) {
        return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)
    },
    _getDrawingBufferColorSpace: function(i) {
        return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace
    },
    _getUnpackColorSpace: function(i=this.workingColorSpace) {
        return this.spaces[i].workingColorSpaceConfig.unpackColorSpace
    }
};
function Kn(i) {
    return i < .04045 ? i * .0773993808 : Math.pow(i * .9478672986 + .0521327014, 2.4)
}
function ys(i) {
    return i < .0031308 ? i * 12.92 : 1.055 * Math.pow(i, .41666) - .055
}
var _u = [.64, .33, .3, .6, .15, .06]
  , xu = [.2126, .7152, .0722]
  , vu = [.3127, .329]
  , yu = new Fe().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322)
  , Mu = new Fe().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
Ge.define({
    [Xt]: {
        primaries: _u,
        whitePoint: vu,
        transfer: eo,
        toXYZ: yu,
        fromXYZ: Mu,
        luminanceCoefficients: xu,
        workingColorSpaceConfig: {
            unpackColorSpace: St
        },
        outputColorSpaceConfig: {
            drawingBufferColorSpace: St
        }
    },
    [St]: {
        primaries: _u,
        whitePoint: vu,
        transfer: et,
        toXYZ: yu,
        fromXYZ: Mu,
        luminanceCoefficients: xu,
        outputColorSpaceConfig: {
            drawingBufferColorSpace: St
        }
    }
});
var ss, jc = class {
    static getDataURL(e) {
        if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
            return e.src;
        let t;
        if (e instanceof HTMLCanvasElement)
            t = e;
        else {
            ss === void 0 && (ss = br("canvas")),
            ss.width = e.width,
            ss.height = e.height;
            let n = ss.getContext("2d");
            e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height),
            t = ss
        }
        return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e),
        t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
    }
    static sRGBToLinear(e) {
        if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
            let t = br("canvas");
            t.width = e.width,
            t.height = e.height;
            let n = t.getContext("2d");
            n.drawImage(e, 0, 0, e.width, e.height);
            let s = n.getImageData(0, 0, e.width, e.height)
              , r = s.data;
            for (let a = 0; a < r.length; a++)
                r[a] = Kn(r[a] / 255) * 255;
            return n.putImageData(s, 0, 0),
            t
        } else if (e.data) {
            let t = e.data.slice(0);
            for (let n = 0; n < t.length; n++)
                t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Kn(t[n] / 255) * 255) : t[n] = Kn(t[n]);
            return {
                data: t,
                width: e.width,
                height: e.height
            }
        } else
            return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),
            e
    }
}
, zp = 0, Ma = class {
    constructor(e=null) {
        this.isSource = !0,
        Object.defineProperty(this, "id", {
            value: zp++
        }),
        this.uuid = Cn(),
        this.data = e,
        this.dataReady = !0,
        this.version = 0
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    toJSON(e) {
        let t = e === void 0 || typeof e == "string";
        if (!t && e.images[this.uuid] !== void 0)
            return e.images[this.uuid];
        let n = {
            uuid: this.uuid,
            url: ""
        }
          , s = this.data;
        if (s !== null) {
            let r;
            if (Array.isArray(s)) {
                r = [];
                for (let a = 0, o = s.length; a < o; a++)
                    s[a].isDataTexture ? r.push(Po(s[a].image)) : r.push(Po(s[a]))
            } else
                r = Po(s);
            n.url = r
        }
        return t || (e.images[this.uuid] = n),
        n
    }
}
;
function Po(i) {
    return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? jc.getDataURL(i) : i.data ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."),
    {})
}
var Hp = 0
  , Nt = class i extends Qn {
    constructor(e=i.DEFAULT_IMAGE, t=i.DEFAULT_MAPPING, n=jn, s=jn, r=Zt, a=Dn, o=gn, c=Jn, l=i.DEFAULT_ANISOTROPY, h=gi) {
        super(),
        this.isTexture = !0,
        Object.defineProperty(this, "id", {
            value: Hp++
        }),
        this.uuid = Cn(),
        this.name = "",
        this.source = new Ma(e),
        this.mipmaps = [],
        this.mapping = t,
        this.channel = 0,
        this.wrapS = n,
        this.wrapT = s,
        this.magFilter = r,
        this.minFilter = a,
        this.anisotropy = l,
        this.format = o,
        this.internalFormat = null,
        this.type = c,
        this.offset = new ne(0,0),
        this.repeat = new ne(1,1),
        this.center = new ne(0,0),
        this.rotation = 0,
        this.matrixAutoUpdate = !0,
        this.matrix = new Fe,
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.colorSpace = h,
        this.userData = {},
        this.version = 0,
        this.onUpdate = null,
        this.isRenderTargetTexture = !1,
        this.pmremVersion = 0
    }
    get image() {
        return this.source.data
    }
    set image(e=null) {
        this.source.data = e
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.name = e.name,
        this.source = e.source,
        this.mipmaps = e.mipmaps.slice(0),
        this.mapping = e.mapping,
        this.channel = e.channel,
        this.wrapS = e.wrapS,
        this.wrapT = e.wrapT,
        this.magFilter = e.magFilter,
        this.minFilter = e.minFilter,
        this.anisotropy = e.anisotropy,
        this.format = e.format,
        this.internalFormat = e.internalFormat,
        this.type = e.type,
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        this.rotation = e.rotation,
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrix.copy(e.matrix),
        this.generateMipmaps = e.generateMipmaps,
        this.premultiplyAlpha = e.premultiplyAlpha,
        this.flipY = e.flipY,
        this.unpackAlignment = e.unpackAlignment,
        this.colorSpace = e.colorSpace,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this.needsUpdate = !0,
        this
    }
    toJSON(e) {
        let t = e === void 0 || typeof e == "string";
        if (!t && e.textures[this.uuid] !== void 0)
            return e.textures[this.uuid];
        let n = {
            metadata: {
                version: 4.6,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(e).uuid,
            mapping: this.mapping,
            channel: this.channel,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            internalFormat: this.internalFormat,
            type: this.type,
            colorSpace: this.colorSpace,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        return Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        t || (e.textures[this.uuid] = n),
        n
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    transformUv(e) {
        if (this.mapping !== Cd)
            return e;
        if (e.applyMatrix3(this.matrix),
        e.x < 0 || e.x > 1)
            switch (this.wrapS) {
            case Zn:
                e.x = e.x - Math.floor(e.x);
                break;
            case jn:
                e.x = e.x < 0 ? 0 : 1;
                break;
            case mr:
                Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
                break
            }
        if (e.y < 0 || e.y > 1)
            switch (this.wrapT) {
            case Zn:
                e.y = e.y - Math.floor(e.y);
                break;
            case jn:
                e.y = e.y < 0 ? 0 : 1;
                break;
            case mr:
                Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
                break
            }
        return this.flipY && (e.y = 1 - e.y),
        e
    }
    set needsUpdate(e) {
        e === !0 && (this.version++,
        this.source.needsUpdate = !0)
    }
    set needsPMREMUpdate(e) {
        e === !0 && this.pmremVersion++
    }
}
;
Nt.DEFAULT_IMAGE = null;
Nt.DEFAULT_MAPPING = Cd;
Nt.DEFAULT_ANISOTROPY = 1;
var Je = class i {
    constructor(e=0, t=0, n=0, s=1) {
        i.prototype.isVector4 = !0,
        this.x = e,
        this.y = t,
        this.z = n,
        this.w = s
    }
    get width() {
        return this.z
    }
    set width(e) {
        this.z = e
    }
    get height() {
        return this.w
    }
    set height(e) {
        this.w = e
    }
    set(e, t, n, s) {
        return this.x = e,
        this.y = t,
        this.z = n,
        this.w = s,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this.w = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setW(e) {
        return this.w = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        case 3:
            this.w = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this.w = e.w !== void 0 ? e.w : 1,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this.w += e.w,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this.w += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this.w = e.w + t.w,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this.w += e.w * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this.w -= e.w,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this.w -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this.w = e.w - t.w,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this.w *= e.w,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this.w *= e,
        this
    }
    applyMatrix4(e) {
        let t = this.x
          , n = this.y
          , s = this.z
          , r = this.w
          , a = e.elements;
        return this.x = a[0] * t + a[4] * n + a[8] * s + a[12] * r,
        this.y = a[1] * t + a[5] * n + a[9] * s + a[13] * r,
        this.z = a[2] * t + a[6] * n + a[10] * s + a[14] * r,
        this.w = a[3] * t + a[7] * n + a[11] * s + a[15] * r,
        this
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this.w /= e.w,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        let t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1,
        this.y = 0,
        this.z = 0) : (this.x = e.x / t,
        this.y = e.y / t,
        this.z = e.z / t),
        this
    }
    setAxisAngleFromRotationMatrix(e) {
        let t, n, s, r, c = e.elements, l = c[0], h = c[4], u = c[8], f = c[1], d = c[5], m = c[9], b = c[2], g = c[6], p = c[10];
        if (Math.abs(h - f) < .01 && Math.abs(u - b) < .01 && Math.abs(m - g) < .01) {
            if (Math.abs(h + f) < .1 && Math.abs(u + b) < .1 && Math.abs(m + g) < .1 && Math.abs(l + d + p - 3) < .1)
                return this.set(1, 0, 0, 0),
                this;
            t = Math.PI;
            let v = (l + 1) / 2
              , _ = (d + 1) / 2
              , P = (p + 1) / 2
              , E = (h + f) / 4
              , R = (u + b) / 4
              , L = (m + g) / 4;
            return v > _ && v > P ? v < .01 ? (n = 0,
            s = .707106781,
            r = .707106781) : (n = Math.sqrt(v),
            s = E / n,
            r = R / n) : _ > P ? _ < .01 ? (n = .707106781,
            s = 0,
            r = .707106781) : (s = Math.sqrt(_),
            n = E / s,
            r = L / s) : P < .01 ? (n = .707106781,
            s = .707106781,
            r = 0) : (r = Math.sqrt(P),
            n = R / r,
            s = L / r),
            this.set(n, s, r, t),
            this
        }
        let x = Math.sqrt((g - m) * (g - m) + (u - b) * (u - b) + (f - h) * (f - h));
        return Math.abs(x) < .001 && (x = 1),
        this.x = (g - m) / x,
        this.y = (u - b) / x,
        this.z = (f - h) / x,
        this.w = Math.acos((l + d + p - 1) / 2),
        this
    }
    setFromMatrixPosition(e) {
        let t = e.elements;
        return this.x = t[12],
        this.y = t[13],
        this.z = t[14],
        this.w = t[15],
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this.w = Math.min(this.w, e.w),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this.w = Math.max(this.w, e.w),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this.w = Math.max(e.w, Math.min(t.w, this.w)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this.z = Math.max(e, Math.min(t, this.z)),
        this.w = Math.max(e, Math.min(t, this.w)),
        this
    }
    clampLength(e, t) {
        let n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this.w = Math.floor(this.w),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this.w = Math.ceil(this.w),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this.w = Math.round(this.w),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this.w = Math.trunc(this.w),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this.w += (e.w - this.w) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this.w = e.w + (t.w - e.w) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this.w = e[t + 3],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e[t + 3] = this.w,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this.w = e.getW(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this.w = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z,
        yield this.w
    }
}
  , Yc = class extends Qn {
    constructor(e=1, t=1, n={}) {
        super(),
        this.isRenderTarget = !0,
        this.width = e,
        this.height = t,
        this.depth = 1,
        this.scissor = new Je(0,0,e,t),
        this.scissorTest = !1,
        this.viewport = new Je(0,0,e,t);
        let s = {
            width: e,
            height: t,
            depth: 1
        };
        n = Object.assign({
            generateMipmaps: !1,
            internalFormat: null,
            minFilter: Zt,
            depthBuffer: !0,
            stencilBuffer: !1,
            resolveDepthBuffer: !0,
            resolveStencilBuffer: !0,
            depthTexture: null,
            samples: 0,
            count: 1
        }, n);
        let r = new Nt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);
        r.flipY = !1,
        r.generateMipmaps = n.generateMipmaps,
        r.internalFormat = n.internalFormat,
        this.textures = [];
        let a = n.count;
        for (let o = 0; o < a; o++)
            this.textures[o] = r.clone(),
            this.textures[o].isRenderTargetTexture = !0;
        this.depthBuffer = n.depthBuffer,
        this.stencilBuffer = n.stencilBuffer,
        this.resolveDepthBuffer = n.resolveDepthBuffer,
        this.resolveStencilBuffer = n.resolveStencilBuffer,
        this.depthTexture = n.depthTexture,
        this.samples = n.samples
    }
    get texture() {
        return this.textures[0]
    }
    set texture(e) {
        this.textures[0] = e
    }
    setSize(e, t, n=1) {
        if (this.width !== e || this.height !== t || this.depth !== n) {
            this.width = e,
            this.height = t,
            this.depth = n;
            for (let s = 0, r = this.textures.length; s < r; s++)
                this.textures[s].image.width = e,
                this.textures[s].image.height = t,
                this.textures[s].image.depth = n;
            this.dispose()
        }
        this.viewport.set(0, 0, e, t),
        this.scissor.set(0, 0, e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.width = e.width,
        this.height = e.height,
        this.depth = e.depth,
        this.scissor.copy(e.scissor),
        this.scissorTest = e.scissorTest,
        this.viewport.copy(e.viewport),
        this.textures.length = 0;
        for (let n = 0, s = e.textures.length; n < s; n++)
            this.textures[n] = e.textures[n].clone(),
            this.textures[n].isRenderTargetTexture = !0;
        let t = Object.assign({}, e.texture.image);
        return this.texture.source = new Ma(t),
        this.depthBuffer = e.depthBuffer,
        this.stencilBuffer = e.stencilBuffer,
        this.resolveDepthBuffer = e.resolveDepthBuffer,
        this.resolveStencilBuffer = e.resolveStencilBuffer,
        e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
        this.samples = e.samples,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
  , kt = class extends Yc {
    constructor(e=1, t=1, n={}) {
        super(e, t, n),
        this.isWebGLRenderTarget = !0
    }
}
  , Sa = class extends Nt {
    constructor(e=null, t=1, n=1, s=1) {
        super(null),
        this.isDataArrayTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: s
        },
        this.magFilter = Wt,
        this.minFilter = Wt,
        this.wrapR = jn,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1,
        this.layerUpdates = new Set
    }
    addLayerUpdate(e) {
        this.layerUpdates.add(e)
    }
    clearLayerUpdates() {
        this.layerUpdates.clear()
    }
}
;
var Kc = class extends Nt {
    constructor(e=null, t=1, n=1, s=1) {
        super(null),
        this.isData3DTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: s
        },
        this.magFilter = Wt,
        this.minFilter = Wt,
        this.wrapR = jn,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
;
var wt = class {
    constructor(e=0, t=0, n=0, s=1) {
        this.isQuaternion = !0,
        this._x = e,
        this._y = t,
        this._z = n,
        this._w = s
    }
    static slerpFlat(e, t, n, s, r, a, o) {
        let c = n[s + 0]
          , l = n[s + 1]
          , h = n[s + 2]
          , u = n[s + 3]
          , f = r[a + 0]
          , d = r[a + 1]
          , m = r[a + 2]
          , b = r[a + 3];
        if (o === 0) {
            e[t + 0] = c,
            e[t + 1] = l,
            e[t + 2] = h,
            e[t + 3] = u;
            return
        }
        if (o === 1) {
            e[t + 0] = f,
            e[t + 1] = d,
            e[t + 2] = m,
            e[t + 3] = b;
            return
        }
        if (u !== b || c !== f || l !== d || h !== m) {
            let g = 1 - o
              , p = c * f + l * d + h * m + u * b
              , x = p >= 0 ? 1 : -1
              , v = 1 - p * p;
            if (v > Number.EPSILON) {
                let P = Math.sqrt(v)
                  , E = Math.atan2(P, p * x);
                g = Math.sin(g * E) / P,
                o = Math.sin(o * E) / P
            }
            let _ = o * x;
            if (c = c * g + f * _,
            l = l * g + d * _,
            h = h * g + m * _,
            u = u * g + b * _,
            g === 1 - o) {
                let P = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
                c *= P,
                l *= P,
                h *= P,
                u *= P
            }
        }
        e[t] = c,
        e[t + 1] = l,
        e[t + 2] = h,
        e[t + 3] = u
    }
    static multiplyQuaternionsFlat(e, t, n, s, r, a) {
        let o = n[s]
          , c = n[s + 1]
          , l = n[s + 2]
          , h = n[s + 3]
          , u = r[a]
          , f = r[a + 1]
          , d = r[a + 2]
          , m = r[a + 3];
        return e[t] = o * m + h * u + c * d - l * f,
        e[t + 1] = c * m + h * f + l * u - o * d,
        e[t + 2] = l * m + h * d + o * f - c * u,
        e[t + 3] = h * m - o * u - c * f - l * d,
        e
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(e) {
        this._w = e,
        this._onChangeCallback()
    }
    set(e, t, n, s) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._w = s,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    }
    copy(e) {
        return this._x = e.x,
        this._y = e.y,
        this._z = e.z,
        this._w = e.w,
        this._onChangeCallback(),
        this
    }
    setFromEuler(e, t=!0) {
        let n = e._x
          , s = e._y
          , r = e._z
          , a = e._order
          , o = Math.cos
          , c = Math.sin
          , l = o(n / 2)
          , h = o(s / 2)
          , u = o(r / 2)
          , f = c(n / 2)
          , d = c(s / 2)
          , m = c(r / 2);
        switch (a) {
        case "XYZ":
            this._x = f * h * u + l * d * m,
            this._y = l * d * u - f * h * m,
            this._z = l * h * m + f * d * u,
            this._w = l * h * u - f * d * m;
            break;
        case "YXZ":
            this._x = f * h * u + l * d * m,
            this._y = l * d * u - f * h * m,
            this._z = l * h * m - f * d * u,
            this._w = l * h * u + f * d * m;
            break;
        case "ZXY":
            this._x = f * h * u - l * d * m,
            this._y = l * d * u + f * h * m,
            this._z = l * h * m + f * d * u,
            this._w = l * h * u - f * d * m;
            break;
        case "ZYX":
            this._x = f * h * u - l * d * m,
            this._y = l * d * u + f * h * m,
            this._z = l * h * m - f * d * u,
            this._w = l * h * u + f * d * m;
            break;
        case "YZX":
            this._x = f * h * u + l * d * m,
            this._y = l * d * u + f * h * m,
            this._z = l * h * m - f * d * u,
            this._w = l * h * u - f * d * m;
            break;
        case "XZY":
            this._x = f * h * u - l * d * m,
            this._y = l * d * u - f * h * m,
            this._z = l * h * m + f * d * u,
            this._w = l * h * u + f * d * m;
            break;
        default:
            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
        }
        return t === !0 && this._onChangeCallback(),
        this
    }
    setFromAxisAngle(e, t) {
        let n = t / 2
          , s = Math.sin(n);
        return this._x = e.x * s,
        this._y = e.y * s,
        this._z = e.z * s,
        this._w = Math.cos(n),
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e) {
        let t = e.elements
          , n = t[0]
          , s = t[4]
          , r = t[8]
          , a = t[1]
          , o = t[5]
          , c = t[9]
          , l = t[2]
          , h = t[6]
          , u = t[10]
          , f = n + o + u;
        if (f > 0) {
            let d = .5 / Math.sqrt(f + 1);
            this._w = .25 / d,
            this._x = (h - c) * d,
            this._y = (r - l) * d,
            this._z = (a - s) * d
        } else if (n > o && n > u) {
            let d = 2 * Math.sqrt(1 + n - o - u);
            this._w = (h - c) / d,
            this._x = .25 * d,
            this._y = (s + a) / d,
            this._z = (r + l) / d
        } else if (o > u) {
            let d = 2 * Math.sqrt(1 + o - n - u);
            this._w = (r - l) / d,
            this._x = (s + a) / d,
            this._y = .25 * d,
            this._z = (c + h) / d
        } else {
            let d = 2 * Math.sqrt(1 + u - n - o);
            this._w = (a - s) / d,
            this._x = (r + l) / d,
            this._y = (c + h) / d,
            this._z = .25 * d
        }
        return this._onChangeCallback(),
        this
    }
    setFromUnitVectors(e, t) {
        let n = e.dot(t) + 1;
        return n < Number.EPSILON ? (n = 0,
        Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y,
        this._y = e.x,
        this._z = 0,
        this._w = n) : (this._x = 0,
        this._y = -e.z,
        this._z = e.y,
        this._w = n)) : (this._x = e.y * t.z - e.z * t.y,
        this._y = e.z * t.x - e.x * t.z,
        this._z = e.x * t.y - e.y * t.x,
        this._w = n),
        this.normalize()
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(Tt(this.dot(e), -1, 1)))
    }
    rotateTowards(e, t) {
        let n = this.angleTo(e);
        if (n === 0)
            return this;
        let s = Math.min(1, t / n);
        return this.slerp(e, s),
        this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this._onChangeCallback(),
        this
    }
    dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
        let e = this.length();
        return e === 0 ? (this._x = 0,
        this._y = 0,
        this._z = 0,
        this._w = 1) : (e = 1 / e,
        this._x = this._x * e,
        this._y = this._y * e,
        this._z = this._z * e,
        this._w = this._w * e),
        this._onChangeCallback(),
        this
    }
    multiply(e) {
        return this.multiplyQuaternions(this, e)
    }
    premultiply(e) {
        return this.multiplyQuaternions(e, this)
    }
    multiplyQuaternions(e, t) {
        let n = e._x
          , s = e._y
          , r = e._z
          , a = e._w
          , o = t._x
          , c = t._y
          , l = t._z
          , h = t._w;
        return this._x = n * h + a * o + s * l - r * c,
        this._y = s * h + a * c + r * o - n * l,
        this._z = r * h + a * l + n * c - s * o,
        this._w = a * h - n * o - s * c - r * l,
        this._onChangeCallback(),
        this
    }
    slerp(e, t) {
        if (t === 0)
            return this;
        if (t === 1)
            return this.copy(e);
        let n = this._x
          , s = this._y
          , r = this._z
          , a = this._w
          , o = a * e._w + n * e._x + s * e._y + r * e._z;
        if (o < 0 ? (this._w = -e._w,
        this._x = -e._x,
        this._y = -e._y,
        this._z = -e._z,
        o = -o) : this.copy(e),
        o >= 1)
            return this._w = a,
            this._x = n,
            this._y = s,
            this._z = r,
            this;
        let c = 1 - o * o;
        if (c <= Number.EPSILON) {
            let d = 1 - t;
            return this._w = d * a + t * this._w,
            this._x = d * n + t * this._x,
            this._y = d * s + t * this._y,
            this._z = d * r + t * this._z,
            this.normalize(),
            this
        }
        let l = Math.sqrt(c)
          , h = Math.atan2(l, o)
          , u = Math.sin((1 - t) * h) / l
          , f = Math.sin(t * h) / l;
        return this._w = a * u + this._w * f,
        this._x = n * u + this._x * f,
        this._y = s * u + this._y * f,
        this._z = r * u + this._z * f,
        this._onChangeCallback(),
        this
    }
    slerpQuaternions(e, t, n) {
        return this.copy(e).slerp(t, n)
    }
    random() {
        let e = 2 * Math.PI * Math.random()
          , t = 2 * Math.PI * Math.random()
          , n = Math.random()
          , s = Math.sqrt(1 - n)
          , r = Math.sqrt(n);
        return this.set(s * Math.sin(e), s * Math.cos(e), r * Math.sin(t), r * Math.cos(t))
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    }
    fromArray(e, t=0) {
        return this._x = e[t],
        this._y = e[t + 1],
        this._z = e[t + 2],
        this._w = e[t + 3],
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._w,
        e
    }
    fromBufferAttribute(e, t) {
        return this._x = e.getX(t),
        this._y = e.getY(t),
        this._z = e.getZ(t),
        this._w = e.getW(t),
        this._onChangeCallback(),
        this
    }
    toJSON() {
        return this.toArray()
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._w
    }
}
  , C = class i {
    constructor(e=0, t=0, n=0) {
        i.prototype.isVector3 = !0,
        this.x = e,
        this.y = t,
        this.z = n
    }
    set(e, t, n) {
        return n === void 0 && (n = this.z),
        this.x = e,
        this.y = t,
        this.z = n,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this
    }
    multiplyVectors(e, t) {
        return this.x = e.x * t.x,
        this.y = e.y * t.y,
        this.z = e.z * t.z,
        this
    }
    applyEuler(e) {
        return this.applyQuaternion(Su.setFromEuler(e))
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion(Su.setFromAxisAngle(e, t))
    }
    applyMatrix3(e) {
        let t = this.x
          , n = this.y
          , s = this.z
          , r = e.elements;
        return this.x = r[0] * t + r[3] * n + r[6] * s,
        this.y = r[1] * t + r[4] * n + r[7] * s,
        this.z = r[2] * t + r[5] * n + r[8] * s,
        this
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize()
    }
    applyMatrix4(e) {
        let t = this.x
          , n = this.y
          , s = this.z
          , r = e.elements
          , a = 1 / (r[3] * t + r[7] * n + r[11] * s + r[15]);
        return this.x = (r[0] * t + r[4] * n + r[8] * s + r[12]) * a,
        this.y = (r[1] * t + r[5] * n + r[9] * s + r[13]) * a,
        this.z = (r[2] * t + r[6] * n + r[10] * s + r[14]) * a,
        this
    }
    applyQuaternion(e) {
        let t = this.x
          , n = this.y
          , s = this.z
          , r = e.x
          , a = e.y
          , o = e.z
          , c = e.w
          , l = 2 * (a * s - o * n)
          , h = 2 * (o * t - r * s)
          , u = 2 * (r * n - a * t);
        return this.x = t + c * l + a * u - o * h,
        this.y = n + c * h + o * l - r * u,
        this.z = s + c * u + r * h - a * l,
        this
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
    }
    transformDirection(e) {
        let t = this.x
          , n = this.y
          , s = this.z
          , r = e.elements;
        return this.x = r[0] * t + r[4] * n + r[8] * s,
        this.y = r[1] * t + r[5] * n + r[9] * s,
        this.z = r[2] * t + r[6] * n + r[10] * s,
        this.normalize()
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this.z = Math.max(e, Math.min(t, this.z)),
        this
    }
    clampLength(e, t) {
        let n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this
    }
    cross(e) {
        return this.crossVectors(this, e)
    }
    crossVectors(e, t) {
        let n = e.x
          , s = e.y
          , r = e.z
          , a = t.x
          , o = t.y
          , c = t.z;
        return this.x = s * c - r * o,
        this.y = r * a - n * c,
        this.z = n * o - s * a,
        this
    }
    projectOnVector(e) {
        let t = e.lengthSq();
        if (t === 0)
            return this.set(0, 0, 0);
        let n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n)
    }
    projectOnPlane(e) {
        return Io.copy(this).projectOnVector(e),
        this.sub(Io)
    }
    reflect(e) {
        return this.sub(Io.copy(e).multiplyScalar(2 * this.dot(e)))
    }
    angleTo(e) {
        let t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0)
            return Math.PI / 2;
        let n = this.dot(e) / t;
        return Math.acos(Tt(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        let t = this.x - e.x
          , n = this.y - e.y
          , s = this.z - e.z;
        return t * t + n * n + s * s
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    }
    setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
    }
    setFromSphericalCoords(e, t, n) {
        let s = Math.sin(t) * e;
        return this.x = s * Math.sin(n),
        this.y = Math.cos(t) * e,
        this.z = s * Math.cos(n),
        this
    }
    setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
    }
    setFromCylindricalCoords(e, t, n) {
        return this.x = e * Math.sin(t),
        this.y = n,
        this.z = e * Math.cos(t),
        this
    }
    setFromMatrixPosition(e) {
        let t = e.elements;
        return this.x = t[12],
        this.y = t[13],
        this.z = t[14],
        this
    }
    setFromMatrixScale(e) {
        let t = this.setFromMatrixColumn(e, 0).length()
          , n = this.setFromMatrixColumn(e, 1).length()
          , s = this.setFromMatrixColumn(e, 2).length();
        return this.x = t,
        this.y = n,
        this.z = s,
        this
    }
    setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, t * 4)
    }
    setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, t * 3)
    }
    setFromEuler(e) {
        return this.x = e._x,
        this.y = e._y,
        this.z = e._z,
        this
    }
    setFromColor(e) {
        return this.x = e.r,
        this.y = e.g,
        this.z = e.b,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this
    }
    randomDirection() {
        let e = Math.random() * Math.PI * 2
          , t = Math.random() * 2 - 1
          , n = Math.sqrt(1 - t * t);
        return this.x = n * Math.cos(e),
        this.y = t,
        this.z = n * Math.sin(e),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z
    }
}
  , Io = new C
  , Su = new wt
  , bn = class {
    constructor(e=new C(1 / 0,1 / 0,1 / 0), t=new C(-1 / 0,-1 / 0,-1 / 0)) {
        this.isBox3 = !0,
        this.min = e,
        this.max = t
    }
    set(e, t) {
        return this.min.copy(e),
        this.max.copy(t),
        this
    }
    setFromArray(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t += 3)
            this.expandByPoint(Sn.fromArray(e, t));
        return this
    }
    setFromBufferAttribute(e) {
        this.makeEmpty();
        for (let t = 0, n = e.count; t < n; t++)
            this.expandByPoint(Sn.fromBufferAttribute(e, t));
        return this
    }
    setFromPoints(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t++)
            this.expandByPoint(e[t]);
        return this
    }
    setFromCenterAndSize(e, t) {
        let n = Sn.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(n),
        this.max.copy(e).add(n),
        this
    }
    setFromObject(e, t=!1) {
        return this.makeEmpty(),
        this.expandByObject(e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.min.copy(e.min),
        this.max.copy(e.max),
        this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -1 / 0,
        this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    }
    expandByPoint(e) {
        return this.min.min(e),
        this.max.max(e),
        this
    }
    expandByVector(e) {
        return this.min.sub(e),
        this.max.add(e),
        this
    }
    expandByScalar(e) {
        return this.min.addScalar(-e),
        this.max.addScalar(e),
        this
    }
    expandByObject(e, t=!1) {
        e.updateWorldMatrix(!1, !1);
        let n = e.geometry;
        if (n !== void 0) {
            let r = n.getAttribute("position");
            if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
                for (let a = 0, o = r.count; a < o; a++)
                    e.isMesh === !0 ? e.getVertexPosition(a, Sn) : Sn.fromBufferAttribute(r, a),
                    Sn.applyMatrix4(e.matrixWorld),
                    this.expandByPoint(Sn);
            else
                e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(),
                Vr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(),
                Vr.copy(n.boundingBox)),
                Vr.applyMatrix4(e.matrixWorld),
                this.union(Vr)
        }
        let s = e.children;
        for (let r = 0, a = s.length; r < a; r++)
            this.expandByObject(s[r], t);
        return this
    }
    containsPoint(e) {
        return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z
    }
    containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    }
    getParameter(e, t) {
        return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(e) {
        return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z
    }
    intersectsSphere(e) {
        return this.clampPoint(e.center, Sn),
        Sn.distanceToSquared(e.center) <= e.radius * e.radius
    }
    intersectsPlane(e) {
        let t, n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
        n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
        n = e.normal.x * this.min.x),
        e.normal.y > 0 ? (t += e.normal.y * this.min.y,
        n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
        n += e.normal.y * this.min.y),
        e.normal.z > 0 ? (t += e.normal.z * this.min.z,
        n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
        n += e.normal.z * this.min.z),
        t <= -e.constant && n >= -e.constant
    }
    intersectsTriangle(e) {
        if (this.isEmpty())
            return !1;
        this.getCenter($s),
        Gr.subVectors(this.max, $s),
        rs.subVectors(e.a, $s),
        as.subVectors(e.b, $s),
        os.subVectors(e.c, $s),
        hi.subVectors(as, rs),
        ui.subVectors(os, as),
        Ni.subVectors(rs, os);
        let t = [0, -hi.z, hi.y, 0, -ui.z, ui.y, 0, -Ni.z, Ni.y, hi.z, 0, -hi.x, ui.z, 0, -ui.x, Ni.z, 0, -Ni.x, -hi.y, hi.x, 0, -ui.y, ui.x, 0, -Ni.y, Ni.x, 0];
        return !Lo(t, rs, as, os, Gr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        !Lo(t, rs, as, os, Gr)) ? !1 : (Wr.crossVectors(hi, ui),
        t = [Wr.x, Wr.y, Wr.z],
        Lo(t, rs, as, os, Gr))
    }
    clampPoint(e, t) {
        return t.copy(e).clamp(this.min, this.max)
    }
    distanceToPoint(e) {
        return this.clampPoint(e, Sn).distanceTo(e)
    }
    getBoundingSphere(e) {
        return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center),
        e.radius = this.getSize(Sn).length() * .5),
        e
    }
    intersect(e) {
        return this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
    }
    union(e) {
        return this.min.min(e.min),
        this.max.max(e.max),
        this
    }
    applyMatrix4(e) {
        return this.isEmpty() ? this : (zn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        zn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        zn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        zn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        zn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        zn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        zn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        zn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(zn),
        this)
    }
    translate(e) {
        return this.min.add(e),
        this.max.add(e),
        this
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
}
  , zn = [new C, new C, new C, new C, new C, new C, new C, new C]
  , Sn = new C
  , Vr = new bn
  , rs = new C
  , as = new C
  , os = new C
  , hi = new C
  , ui = new C
  , Ni = new C
  , $s = new C
  , Gr = new C
  , Wr = new C
  , Fi = new C;
function Lo(i, e, t, n, s) {
    for (let r = 0, a = i.length - 3; r <= a; r += 3) {
        Fi.fromArray(i, r);
        let o = s.x * Math.abs(Fi.x) + s.y * Math.abs(Fi.y) + s.z * Math.abs(Fi.z)
          , c = e.dot(Fi)
          , l = t.dot(Fi)
          , h = n.dot(Fi);
        if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
            return !1
    }
    return !0
}
var Vp = new bn
  , er = new C
  , Do = new C
  , nn = class {
    constructor(e=new C, t=-1) {
        this.isSphere = !0,
        this.center = e,
        this.radius = t
    }
    set(e, t) {
        return this.center.copy(e),
        this.radius = t,
        this
    }
    setFromPoints(e, t) {
        let n = this.center;
        t !== void 0 ? n.copy(t) : Vp.setFromPoints(e).getCenter(n);
        let s = 0;
        for (let r = 0, a = e.length; r < a; r++)
            s = Math.max(s, n.distanceToSquared(e[r]));
        return this.radius = Math.sqrt(s),
        this
    }
    copy(e) {
        return this.center.copy(e.center),
        this.radius = e.radius,
        this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0),
        this.radius = -1,
        this
    }
    containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius
    }
    intersectsSphere(e) {
        let t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    }
    intersectsBox(e) {
        return e.intersectsSphere(this)
    }
    intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(e, t) {
        let n = this.center.distanceToSquared(e);
        return t.copy(e),
        n > this.radius * this.radius && (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
        t
    }
    getBoundingBox(e) {
        return this.isEmpty() ? (e.makeEmpty(),
        e) : (e.set(this.center, this.center),
        e.expandByScalar(this.radius),
        e)
    }
    applyMatrix4(e) {
        return this.center.applyMatrix4(e),
        this.radius = this.radius * e.getMaxScaleOnAxis(),
        this
    }
    translate(e) {
        return this.center.add(e),
        this
    }
    expandByPoint(e) {
        if (this.isEmpty())
            return this.center.copy(e),
            this.radius = 0,
            this;
        er.subVectors(e, this.center);
        let t = er.lengthSq();
        if (t > this.radius * this.radius) {
            let n = Math.sqrt(t)
              , s = (n - this.radius) * .5;
            this.center.addScaledVector(er, s / n),
            this.radius += s
        }
        return this
    }
    union(e) {
        return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e),
        this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Do.subVectors(e.center, this.center).setLength(e.radius),
        this.expandByPoint(er.copy(e.center).add(Do)),
        this.expandByPoint(er.copy(e.center).sub(Do))),
        this)
    }
    equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
  , Hn = new C
  , Uo = new C
  , Xr = new C
  , di = new C
  , No = new C
  , qr = new C
  , Fo = new C
  , vi = class {
    constructor(e=new C, t=new C(0,0,-1)) {
        this.origin = e,
        this.direction = t
    }
    set(e, t) {
        return this.origin.copy(e),
        this.direction.copy(t),
        this
    }
    copy(e) {
        return this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
    }
    at(e, t) {
        return t.copy(this.origin).addScaledVector(this.direction, e)
    }
    lookAt(e) {
        return this.direction.copy(e).sub(this.origin).normalize(),
        this
    }
    recast(e) {
        return this.origin.copy(this.at(e, Hn)),
        this
    }
    closestPointToPoint(e, t) {
        t.subVectors(e, this.origin);
        let n = t.dot(this.direction);
        return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n)
    }
    distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    }
    distanceSqToPoint(e) {
        let t = Hn.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (Hn.copy(this.origin).addScaledVector(this.direction, t),
        Hn.distanceToSquared(e))
    }
    distanceSqToSegment(e, t, n, s) {
        Uo.copy(e).add(t).multiplyScalar(.5),
        Xr.copy(t).sub(e).normalize(),
        di.copy(this.origin).sub(Uo);
        let r = e.distanceTo(t) * .5, a = -this.direction.dot(Xr), o = di.dot(this.direction), c = -di.dot(Xr), l = di.lengthSq(), h = Math.abs(1 - a * a), u, f, d, m;
        if (h > 0)
            if (u = a * c - o,
            f = a * o - c,
            m = r * h,
            u >= 0)
                if (f >= -m)
                    if (f <= m) {
                        let b = 1 / h;
                        u *= b,
                        f *= b,
                        d = u * (u + a * f + 2 * o) + f * (a * u + f + 2 * c) + l
                    } else
                        f = r,
                        u = Math.max(0, -(a * f + o)),
                        d = -u * u + f * (f + 2 * c) + l;
                else
                    f = -r,
                    u = Math.max(0, -(a * f + o)),
                    d = -u * u + f * (f + 2 * c) + l;
            else
                f <= -m ? (u = Math.max(0, -(-a * r + o)),
                f = u > 0 ? -r : Math.min(Math.max(-r, -c), r),
                d = -u * u + f * (f + 2 * c) + l) : f <= m ? (u = 0,
                f = Math.min(Math.max(-r, -c), r),
                d = f * (f + 2 * c) + l) : (u = Math.max(0, -(a * r + o)),
                f = u > 0 ? r : Math.min(Math.max(-r, -c), r),
                d = -u * u + f * (f + 2 * c) + l);
        else
            f = a > 0 ? -r : r,
            u = Math.max(0, -(a * f + o)),
            d = -u * u + f * (f + 2 * c) + l;
        return n && n.copy(this.origin).addScaledVector(this.direction, u),
        s && s.copy(Uo).addScaledVector(Xr, f),
        d
    }
    intersectSphere(e, t) {
        Hn.subVectors(e.center, this.origin);
        let n = Hn.dot(this.direction)
          , s = Hn.dot(Hn) - n * n
          , r = e.radius * e.radius;
        if (s > r)
            return null;
        let a = Math.sqrt(r - s)
          , o = n - a
          , c = n + a;
        return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t)
    }
    intersectsSphere(e) {
        return this.distanceSqToPoint(e.center) <= e.radius * e.radius
    }
    distanceToPlane(e) {
        let t = e.normal.dot(this.direction);
        if (t === 0)
            return e.distanceToPoint(this.origin) === 0 ? 0 : null;
        let n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null
    }
    intersectPlane(e, t) {
        let n = this.distanceToPlane(e);
        return n === null ? null : this.at(n, t)
    }
    intersectsPlane(e) {
        let t = e.distanceToPoint(this.origin);
        return t === 0 || e.normal.dot(this.direction) * t < 0
    }
    intersectBox(e, t) {
        let n, s, r, a, o, c, l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, f = this.origin;
        return l >= 0 ? (n = (e.min.x - f.x) * l,
        s = (e.max.x - f.x) * l) : (n = (e.max.x - f.x) * l,
        s = (e.min.x - f.x) * l),
        h >= 0 ? (r = (e.min.y - f.y) * h,
        a = (e.max.y - f.y) * h) : (r = (e.max.y - f.y) * h,
        a = (e.min.y - f.y) * h),
        n > a || r > s || ((r > n || isNaN(n)) && (n = r),
        (a < s || isNaN(s)) && (s = a),
        u >= 0 ? (o = (e.min.z - f.z) * u,
        c = (e.max.z - f.z) * u) : (o = (e.max.z - f.z) * u,
        c = (e.min.z - f.z) * u),
        n > c || o > s) || ((o > n || n !== n) && (n = o),
        (c < s || s !== s) && (s = c),
        s < 0) ? null : this.at(n >= 0 ? n : s, t)
    }
    intersectsBox(e) {
        return this.intersectBox(e, Hn) !== null
    }
    intersectTriangle(e, t, n, s, r) {
        No.subVectors(t, e),
        qr.subVectors(n, e),
        Fo.crossVectors(No, qr);
        let a = this.direction.dot(Fo), o;
        if (a > 0) {
            if (s)
                return null;
            o = 1
        } else if (a < 0)
            o = -1,
            a = -a;
        else
            return null;
        di.subVectors(this.origin, e);
        let c = o * this.direction.dot(qr.crossVectors(di, qr));
        if (c < 0)
            return null;
        let l = o * this.direction.dot(No.cross(di));
        if (l < 0 || c + l > a)
            return null;
        let h = -o * di.dot(Fo);
        return h < 0 ? null : this.at(h / a, r)
    }
    applyMatrix4(e) {
        return this.origin.applyMatrix4(e),
        this.direction.transformDirection(e),
        this
    }
    equals(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
  , Le = class i {
    constructor(e, t, n, s, r, a, o, c, l, h, u, f, d, m, b, g) {
        i.prototype.isMatrix4 = !0,
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        e !== void 0 && this.set(e, t, n, s, r, a, o, c, l, h, u, f, d, m, b, g)
    }
    set(e, t, n, s, r, a, o, c, l, h, u, f, d, m, b, g) {
        let p = this.elements;
        return p[0] = e,
        p[4] = t,
        p[8] = n,
        p[12] = s,
        p[1] = r,
        p[5] = a,
        p[9] = o,
        p[13] = c,
        p[2] = l,
        p[6] = h,
        p[10] = u,
        p[14] = f,
        p[3] = d,
        p[7] = m,
        p[11] = b,
        p[15] = g,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    clone() {
        return new i().fromArray(this.elements)
    }
    copy(e) {
        let t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        t[9] = n[9],
        t[10] = n[10],
        t[11] = n[11],
        t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        t[15] = n[15],
        this
    }
    copyPosition(e) {
        let t = this.elements
          , n = e.elements;
        return t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        this
    }
    setFromMatrix3(e) {
        let t = e.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),
        this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
    }
    makeBasis(e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1),
        this
    }
    extractRotation(e) {
        let t = this.elements
          , n = e.elements
          , s = 1 / cs.setFromMatrixColumn(e, 0).length()
          , r = 1 / cs.setFromMatrixColumn(e, 1).length()
          , a = 1 / cs.setFromMatrixColumn(e, 2).length();
        return t[0] = n[0] * s,
        t[1] = n[1] * s,
        t[2] = n[2] * s,
        t[3] = 0,
        t[4] = n[4] * r,
        t[5] = n[5] * r,
        t[6] = n[6] * r,
        t[7] = 0,
        t[8] = n[8] * a,
        t[9] = n[9] * a,
        t[10] = n[10] * a,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromEuler(e) {
        let t = this.elements
          , n = e.x
          , s = e.y
          , r = e.z
          , a = Math.cos(n)
          , o = Math.sin(n)
          , c = Math.cos(s)
          , l = Math.sin(s)
          , h = Math.cos(r)
          , u = Math.sin(r);
        if (e.order === "XYZ") {
            let f = a * h
              , d = a * u
              , m = o * h
              , b = o * u;
            t[0] = c * h,
            t[4] = -c * u,
            t[8] = l,
            t[1] = d + m * l,
            t[5] = f - b * l,
            t[9] = -o * c,
            t[2] = b - f * l,
            t[6] = m + d * l,
            t[10] = a * c
        } else if (e.order === "YXZ") {
            let f = c * h
              , d = c * u
              , m = l * h
              , b = l * u;
            t[0] = f + b * o,
            t[4] = m * o - d,
            t[8] = a * l,
            t[1] = a * u,
            t[5] = a * h,
            t[9] = -o,
            t[2] = d * o - m,
            t[6] = b + f * o,
            t[10] = a * c
        } else if (e.order === "ZXY") {
            let f = c * h
              , d = c * u
              , m = l * h
              , b = l * u;
            t[0] = f - b * o,
            t[4] = -a * u,
            t[8] = m + d * o,
            t[1] = d + m * o,
            t[5] = a * h,
            t[9] = b - f * o,
            t[2] = -a * l,
            t[6] = o,
            t[10] = a * c
        } else if (e.order === "ZYX") {
            let f = a * h
              , d = a * u
              , m = o * h
              , b = o * u;
            t[0] = c * h,
            t[4] = m * l - d,
            t[8] = f * l + b,
            t[1] = c * u,
            t[5] = b * l + f,
            t[9] = d * l - m,
            t[2] = -l,
            t[6] = o * c,
            t[10] = a * c
        } else if (e.order === "YZX") {
            let f = a * c
              , d = a * l
              , m = o * c
              , b = o * l;
            t[0] = c * h,
            t[4] = b - f * u,
            t[8] = m * u + d,
            t[1] = u,
            t[5] = a * h,
            t[9] = -o * h,
            t[2] = -l * h,
            t[6] = d * u + m,
            t[10] = f - b * u
        } else if (e.order === "XZY") {
            let f = a * c
              , d = a * l
              , m = o * c
              , b = o * l;
            t[0] = c * h,
            t[4] = -u,
            t[8] = l * h,
            t[1] = f * u + b,
            t[5] = a * h,
            t[9] = d * u - m,
            t[2] = m * u - d,
            t[6] = o * h,
            t[10] = b * u + f
        }
        return t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromQuaternion(e) {
        return this.compose(Gp, e, Wp)
    }
    lookAt(e, t, n) {
        let s = this.elements;
        return en.subVectors(e, t),
        en.lengthSq() === 0 && (en.z = 1),
        en.normalize(),
        fi.crossVectors(n, en),
        fi.lengthSq() === 0 && (Math.abs(n.z) === 1 ? en.x += 1e-4 : en.z += 1e-4,
        en.normalize(),
        fi.crossVectors(n, en)),
        fi.normalize(),
        jr.crossVectors(en, fi),
        s[0] = fi.x,
        s[4] = jr.x,
        s[8] = en.x,
        s[1] = fi.y,
        s[5] = jr.y,
        s[9] = en.y,
        s[2] = fi.z,
        s[6] = jr.z,
        s[10] = en.z,
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        let n = e.elements
          , s = t.elements
          , r = this.elements
          , a = n[0]
          , o = n[4]
          , c = n[8]
          , l = n[12]
          , h = n[1]
          , u = n[5]
          , f = n[9]
          , d = n[13]
          , m = n[2]
          , b = n[6]
          , g = n[10]
          , p = n[14]
          , x = n[3]
          , v = n[7]
          , _ = n[11]
          , P = n[15]
          , E = s[0]
          , R = s[4]
          , L = s[8]
          , w = s[12]
          , M = s[1]
          , I = s[5]
          , H = s[9]
          , B = s[13]
          , V = s[2]
          , J = s[6]
          , X = s[10]
          , ee = s[14]
          , G = s[3]
          , se = s[7]
          , fe = s[11]
          , Ee = s[15];
        return r[0] = a * E + o * M + c * V + l * G,
        r[4] = a * R + o * I + c * J + l * se,
        r[8] = a * L + o * H + c * X + l * fe,
        r[12] = a * w + o * B + c * ee + l * Ee,
        r[1] = h * E + u * M + f * V + d * G,
        r[5] = h * R + u * I + f * J + d * se,
        r[9] = h * L + u * H + f * X + d * fe,
        r[13] = h * w + u * B + f * ee + d * Ee,
        r[2] = m * E + b * M + g * V + p * G,
        r[6] = m * R + b * I + g * J + p * se,
        r[10] = m * L + b * H + g * X + p * fe,
        r[14] = m * w + b * B + g * ee + p * Ee,
        r[3] = x * E + v * M + _ * V + P * G,
        r[7] = x * R + v * I + _ * J + P * se,
        r[11] = x * L + v * H + _ * X + P * fe,
        r[15] = x * w + v * B + _ * ee + P * Ee,
        this
    }
    multiplyScalar(e) {
        let t = this.elements;
        return t[0] *= e,
        t[4] *= e,
        t[8] *= e,
        t[12] *= e,
        t[1] *= e,
        t[5] *= e,
        t[9] *= e,
        t[13] *= e,
        t[2] *= e,
        t[6] *= e,
        t[10] *= e,
        t[14] *= e,
        t[3] *= e,
        t[7] *= e,
        t[11] *= e,
        t[15] *= e,
        this
    }
    determinant() {
        let e = this.elements
          , t = e[0]
          , n = e[4]
          , s = e[8]
          , r = e[12]
          , a = e[1]
          , o = e[5]
          , c = e[9]
          , l = e[13]
          , h = e[2]
          , u = e[6]
          , f = e[10]
          , d = e[14]
          , m = e[3]
          , b = e[7]
          , g = e[11]
          , p = e[15];
        return m * (+r * c * u - s * l * u - r * o * f + n * l * f + s * o * d - n * c * d) + b * (+t * c * d - t * l * f + r * a * f - s * a * d + s * l * h - r * c * h) + g * (+t * l * u - t * o * d - r * a * u + n * a * d + r * o * h - n * l * h) + p * (-s * o * h - t * c * u + t * o * f + s * a * u - n * a * f + n * c * h)
    }
    transpose() {
        let e = this.elements, t;
        return t = e[1],
        e[1] = e[4],
        e[4] = t,
        t = e[2],
        e[2] = e[8],
        e[8] = t,
        t = e[6],
        e[6] = e[9],
        e[9] = t,
        t = e[3],
        e[3] = e[12],
        e[12] = t,
        t = e[7],
        e[7] = e[13],
        e[13] = t,
        t = e[11],
        e[11] = e[14],
        e[14] = t,
        this
    }
    setPosition(e, t, n) {
        let s = this.elements;
        return e.isVector3 ? (s[12] = e.x,
        s[13] = e.y,
        s[14] = e.z) : (s[12] = e,
        s[13] = t,
        s[14] = n),
        this
    }
    invert() {
        let e = this.elements
          , t = e[0]
          , n = e[1]
          , s = e[2]
          , r = e[3]
          , a = e[4]
          , o = e[5]
          , c = e[6]
          , l = e[7]
          , h = e[8]
          , u = e[9]
          , f = e[10]
          , d = e[11]
          , m = e[12]
          , b = e[13]
          , g = e[14]
          , p = e[15]
          , x = u * g * l - b * f * l + b * c * d - o * g * d - u * c * p + o * f * p
          , v = m * f * l - h * g * l - m * c * d + a * g * d + h * c * p - a * f * p
          , _ = h * b * l - m * u * l + m * o * d - a * b * d - h * o * p + a * u * p
          , P = m * u * c - h * b * c - m * o * f + a * b * f + h * o * g - a * u * g
          , E = t * x + n * v + s * _ + r * P;
        if (E === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        let R = 1 / E;
        return e[0] = x * R,
        e[1] = (b * f * r - u * g * r - b * s * d + n * g * d + u * s * p - n * f * p) * R,
        e[2] = (o * g * r - b * c * r + b * s * l - n * g * l - o * s * p + n * c * p) * R,
        e[3] = (u * c * r - o * f * r - u * s * l + n * f * l + o * s * d - n * c * d) * R,
        e[4] = v * R,
        e[5] = (h * g * r - m * f * r + m * s * d - t * g * d - h * s * p + t * f * p) * R,
        e[6] = (m * c * r - a * g * r - m * s * l + t * g * l + a * s * p - t * c * p) * R,
        e[7] = (a * f * r - h * c * r + h * s * l - t * f * l - a * s * d + t * c * d) * R,
        e[8] = _ * R,
        e[9] = (m * u * r - h * b * r - m * n * d + t * b * d + h * n * p - t * u * p) * R,
        e[10] = (a * b * r - m * o * r + m * n * l - t * b * l - a * n * p + t * o * p) * R,
        e[11] = (h * o * r - a * u * r - h * n * l + t * u * l + a * n * d - t * o * d) * R,
        e[12] = P * R,
        e[13] = (h * b * s - m * u * s + m * n * f - t * b * f - h * n * g + t * u * g) * R,
        e[14] = (m * o * s - a * b * s - m * n * c + t * b * c + a * n * g - t * o * g) * R,
        e[15] = (a * u * s - h * o * s + h * n * c - t * u * c - a * n * f + t * o * f) * R,
        this
    }
    scale(e) {
        let t = this.elements
          , n = e.x
          , s = e.y
          , r = e.z;
        return t[0] *= n,
        t[4] *= s,
        t[8] *= r,
        t[1] *= n,
        t[5] *= s,
        t[9] *= r,
        t[2] *= n,
        t[6] *= s,
        t[10] *= r,
        t[3] *= n,
        t[7] *= s,
        t[11] *= r,
        this
    }
    getMaxScaleOnAxis() {
        let e = this.elements
          , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
          , n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
          , s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, s))
    }
    makeTranslation(e, t, n) {
        return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
        this
    }
    makeRotationX(e) {
        let t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationY(e) {
        let t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationZ(e) {
        let t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    makeRotationAxis(e, t) {
        let n = Math.cos(t)
          , s = Math.sin(t)
          , r = 1 - n
          , a = e.x
          , o = e.y
          , c = e.z
          , l = r * a
          , h = r * o;
        return this.set(l * a + n, l * o - s * c, l * c + s * o, 0, l * o + s * c, h * o + n, h * c - s * a, 0, l * c - s * o, h * c + s * a, r * c * c + n, 0, 0, 0, 0, 1),
        this
    }
    makeScale(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
        this
    }
    makeShear(e, t, n, s, r, a) {
        return this.set(1, n, r, 0, e, 1, a, 0, t, s, 1, 0, 0, 0, 0, 1),
        this
    }
    compose(e, t, n) {
        let s = this.elements
          , r = t._x
          , a = t._y
          , o = t._z
          , c = t._w
          , l = r + r
          , h = a + a
          , u = o + o
          , f = r * l
          , d = r * h
          , m = r * u
          , b = a * h
          , g = a * u
          , p = o * u
          , x = c * l
          , v = c * h
          , _ = c * u
          , P = n.x
          , E = n.y
          , R = n.z;
        return s[0] = (1 - (b + p)) * P,
        s[1] = (d + _) * P,
        s[2] = (m - v) * P,
        s[3] = 0,
        s[4] = (d - _) * E,
        s[5] = (1 - (f + p)) * E,
        s[6] = (g + x) * E,
        s[7] = 0,
        s[8] = (m + v) * R,
        s[9] = (g - x) * R,
        s[10] = (1 - (f + b)) * R,
        s[11] = 0,
        s[12] = e.x,
        s[13] = e.y,
        s[14] = e.z,
        s[15] = 1,
        this
    }
    decompose(e, t, n) {
        let s = this.elements
          , r = cs.set(s[0], s[1], s[2]).length()
          , a = cs.set(s[4], s[5], s[6]).length()
          , o = cs.set(s[8], s[9], s[10]).length();
        this.determinant() < 0 && (r = -r),
        e.x = s[12],
        e.y = s[13],
        e.z = s[14],
        wn.copy(this);
        let l = 1 / r
          , h = 1 / a
          , u = 1 / o;
        return wn.elements[0] *= l,
        wn.elements[1] *= l,
        wn.elements[2] *= l,
        wn.elements[4] *= h,
        wn.elements[5] *= h,
        wn.elements[6] *= h,
        wn.elements[8] *= u,
        wn.elements[9] *= u,
        wn.elements[10] *= u,
        t.setFromRotationMatrix(wn),
        n.x = r,
        n.y = a,
        n.z = o,
        this
    }
    makePerspective(e, t, n, s, r, a, o=Yn) {
        let c = this.elements, l = 2 * r / (t - e), h = 2 * r / (n - s), u = (t + e) / (t - e), f = (n + s) / (n - s), d, m;
        if (o === Yn)
            d = -(a + r) / (a - r),
            m = -2 * a * r / (a - r);
        else if (o === ya)
            d = -a / (a - r),
            m = -a * r / (a - r);
        else
            throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
        return c[0] = l,
        c[4] = 0,
        c[8] = u,
        c[12] = 0,
        c[1] = 0,
        c[5] = h,
        c[9] = f,
        c[13] = 0,
        c[2] = 0,
        c[6] = 0,
        c[10] = d,
        c[14] = m,
        c[3] = 0,
        c[7] = 0,
        c[11] = -1,
        c[15] = 0,
        this
    }
    makeOrthographic(e, t, n, s, r, a, o=Yn) {
        let c = this.elements, l = 1 / (t - e), h = 1 / (n - s), u = 1 / (a - r), f = (t + e) * l, d = (n + s) * h, m, b;
        if (o === Yn)
            m = (a + r) * u,
            b = -2 * u;
        else if (o === ya)
            m = r * u,
            b = -1 * u;
        else
            throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
        return c[0] = 2 * l,
        c[4] = 0,
        c[8] = 0,
        c[12] = -f,
        c[1] = 0,
        c[5] = 2 * h,
        c[9] = 0,
        c[13] = -d,
        c[2] = 0,
        c[6] = 0,
        c[10] = b,
        c[14] = -m,
        c[3] = 0,
        c[7] = 0,
        c[11] = 0,
        c[15] = 1,
        this
    }
    equals(e) {
        let t = this.elements
          , n = e.elements;
        for (let s = 0; s < 16; s++)
            if (t[s] !== n[s])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 16; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        let n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e[t + 9] = n[9],
        e[t + 10] = n[10],
        e[t + 11] = n[11],
        e[t + 12] = n[12],
        e[t + 13] = n[13],
        e[t + 14] = n[14],
        e[t + 15] = n[15],
        e
    }
}
  , cs = new C
  , wn = new Le
  , Gp = new C(0,0,0)
  , Wp = new C(1,1,1)
  , fi = new C
  , jr = new C
  , en = new C
  , wu = new Le
  , Eu = new wt
  , Fn = class i {
    constructor(e=0, t=0, n=0, s=i.DEFAULT_ORDER) {
        this.isEuler = !0,
        this._x = e,
        this._y = t,
        this._z = n,
        this._order = s
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(e) {
        this._order = e,
        this._onChangeCallback()
    }
    set(e, t, n, s=this._order) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._order = s,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    }
    copy(e) {
        return this._x = e._x,
        this._y = e._y,
        this._z = e._z,
        this._order = e._order,
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e, t=this._order, n=!0) {
        let s = e.elements
          , r = s[0]
          , a = s[4]
          , o = s[8]
          , c = s[1]
          , l = s[5]
          , h = s[9]
          , u = s[2]
          , f = s[6]
          , d = s[10];
        switch (t) {
        case "XYZ":
            this._y = Math.asin(Tt(o, -1, 1)),
            Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, d),
            this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(f, l),
            this._z = 0);
            break;
        case "YXZ":
            this._x = Math.asin(-Tt(h, -1, 1)),
            Math.abs(h) < .9999999 ? (this._y = Math.atan2(o, d),
            this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, r),
            this._z = 0);
            break;
        case "ZXY":
            this._x = Math.asin(Tt(f, -1, 1)),
            Math.abs(f) < .9999999 ? (this._y = Math.atan2(-u, d),
            this._z = Math.atan2(-a, l)) : (this._y = 0,
            this._z = Math.atan2(c, r));
            break;
        case "ZYX":
            this._y = Math.asin(-Tt(u, -1, 1)),
            Math.abs(u) < .9999999 ? (this._x = Math.atan2(f, d),
            this._z = Math.atan2(c, r)) : (this._x = 0,
            this._z = Math.atan2(-a, l));
            break;
        case "YZX":
            this._z = Math.asin(Tt(c, -1, 1)),
            Math.abs(c) < .9999999 ? (this._x = Math.atan2(-h, l),
            this._y = Math.atan2(-u, r)) : (this._x = 0,
            this._y = Math.atan2(o, d));
            break;
        case "XZY":
            this._z = Math.asin(-Tt(a, -1, 1)),
            Math.abs(a) < .9999999 ? (this._x = Math.atan2(f, l),
            this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, d),
            this._y = 0);
            break;
        default:
            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
        }
        return this._order = t,
        n === !0 && this._onChangeCallback(),
        this
    }
    setFromQuaternion(e, t, n) {
        return wu.makeRotationFromQuaternion(e),
        this.setFromRotationMatrix(wu, t, n)
    }
    setFromVector3(e, t=this._order) {
        return this.set(e.x, e.y, e.z, t)
    }
    reorder(e) {
        return Eu.setFromEuler(this),
        this.setFromQuaternion(Eu, e)
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    }
    fromArray(e) {
        return this._x = e[0],
        this._y = e[1],
        this._z = e[2],
        e[3] !== void 0 && (this._order = e[3]),
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._order,
        e
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._order
    }
}
;
Fn.DEFAULT_ORDER = "XYZ";
var wa = class {
    constructor() {
        this.mask = 1
    }
    set(e) {
        this.mask = (1 << e | 0) >>> 0
    }
    enable(e) {
        this.mask |= 1 << e | 0
    }
    enableAll() {
        this.mask = -1
    }
    toggle(e) {
        this.mask ^= 1 << e | 0
    }
    disable(e) {
        this.mask &= ~(1 << e | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(e) {
        return (this.mask & e.mask) !== 0
    }
    isEnabled(e) {
        return (this.mask & (1 << e | 0)) !== 0
    }
}
  , Xp = 0
  , Tu = new C
  , ls = new wt
  , Vn = new Le
  , Yr = new C
  , tr = new C
  , qp = new C
  , jp = new wt
  , Au = new C(1,0,0)
  , Ru = new C(0,1,0)
  , Cu = new C(0,0,1)
  , Pu = {
    type: "added"
}
  , Yp = {
    type: "removed"
}
  , hs = {
    type: "childadded",
    child: null
}
  , Oo = {
    type: "childremoved",
    child: null
}
  , vt = class i extends Qn {
    constructor() {
        super(),
        this.isObject3D = !0,
        Object.defineProperty(this, "id", {
            value: Xp++
        }),
        this.uuid = Cn(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = i.DEFAULT_UP.clone();
        let e = new C
          , t = new Fn
          , n = new wt
          , s = new C(1,1,1);
        function r() {
            n.setFromEuler(t, !1)
        }
        function a() {
            t.setFromQuaternion(n, void 0, !1)
        }
        t._onChange(r),
        n._onChange(a),
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: s
            },
            modelViewMatrix: {
                value: new Le
            },
            normalMatrix: {
                value: new Fe
            }
        }),
        this.matrix = new Le,
        this.matrixWorld = new Le,
        this.matrixAutoUpdate = i.DEFAULT_MATRIX_AUTO_UPDATE,
        this.matrixWorldAutoUpdate = i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new wa,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.animations = [],
        this.userData = {}
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(e) {
        return this.quaternion.premultiply(e),
        this
    }
    setRotationFromAxisAngle(e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    }
    setRotationFromEuler(e) {
        this.quaternion.setFromEuler(e, !0)
    }
    setRotationFromMatrix(e) {
        this.quaternion.setFromRotationMatrix(e)
    }
    setRotationFromQuaternion(e) {
        this.quaternion.copy(e)
    }
    rotateOnAxis(e, t) {
        return ls.setFromAxisAngle(e, t),
        this.quaternion.multiply(ls),
        this
    }
    rotateOnWorldAxis(e, t) {
        return ls.setFromAxisAngle(e, t),
        this.quaternion.premultiply(ls),
        this
    }
    rotateX(e) {
        return this.rotateOnAxis(Au, e)
    }
    rotateY(e) {
        return this.rotateOnAxis(Ru, e)
    }
    rotateZ(e) {
        return this.rotateOnAxis(Cu, e)
    }
    translateOnAxis(e, t) {
        return Tu.copy(e).applyQuaternion(this.quaternion),
        this.position.add(Tu.multiplyScalar(t)),
        this
    }
    translateX(e) {
        return this.translateOnAxis(Au, e)
    }
    translateY(e) {
        return this.translateOnAxis(Ru, e)
    }
    translateZ(e) {
        return this.translateOnAxis(Cu, e)
    }
    localToWorld(e) {
        return this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(e) {
        return this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(Vn.copy(this.matrixWorld).invert())
    }
    lookAt(e, t, n) {
        e.isVector3 ? Yr.copy(e) : Yr.set(e, t, n);
        let s = this.parent;
        this.updateWorldMatrix(!0, !1),
        tr.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight ? Vn.lookAt(tr, Yr, this.up) : Vn.lookAt(Yr, tr, this.up),
        this.quaternion.setFromRotationMatrix(Vn),
        s && (Vn.extractRotation(s.matrixWorld),
        ls.setFromRotationMatrix(Vn),
        this.quaternion.premultiply(ls.invert()))
    }
    add(e) {
        if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++)
                this.add(arguments[t]);
            return this
        }
        return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e),
        this) : (e && e.isObject3D ? (e.removeFromParent(),
        e.parent = this,
        this.children.push(e),
        e.dispatchEvent(Pu),
        hs.child = e,
        this.dispatchEvent(hs),
        hs.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e),
        this)
    }
    remove(e) {
        if (arguments.length > 1) {
            for (let n = 0; n < arguments.length; n++)
                this.remove(arguments[n]);
            return this
        }
        let t = this.children.indexOf(e);
        return t !== -1 && (e.parent = null,
        this.children.splice(t, 1),
        e.dispatchEvent(Yp),
        Oo.child = e,
        this.dispatchEvent(Oo),
        Oo.child = null),
        this
    }
    removeFromParent() {
        let e = this.parent;
        return e !== null && e.remove(this),
        this
    }
    clear() {
        return this.remove(...this.children)
    }
    attach(e) {
        return this.updateWorldMatrix(!0, !1),
        Vn.copy(this.matrixWorld).invert(),
        e.parent !== null && (e.parent.updateWorldMatrix(!0, !1),
        Vn.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(Vn),
        e.removeFromParent(),
        e.parent = this,
        this.children.push(e),
        e.updateWorldMatrix(!1, !0),
        e.dispatchEvent(Pu),
        hs.child = e,
        this.dispatchEvent(hs),
        hs.child = null,
        this
    }
    getObjectById(e) {
        return this.getObjectByProperty("id", e)
    }
    getObjectByName(e) {
        return this.getObjectByProperty("name", e)
    }
    getObjectByProperty(e, t) {
        if (this[e] === t)
            return this;
        for (let n = 0, s = this.children.length; n < s; n++) {
            let a = this.children[n].getObjectByProperty(e, t);
            if (a !== void 0)
                return a
        }
    }
    getObjectsByProperty(e, t, n=[]) {
        this[e] === t && n.push(this);
        let s = this.children;
        for (let r = 0, a = s.length; r < a; r++)
            s[r].getObjectsByProperty(e, t, n);
        return n
    }
    getWorldPosition(e) {
        return this.updateWorldMatrix(!0, !1),
        e.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(tr, e, qp),
        e
    }
    getWorldScale(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(tr, jp, e),
        e
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        let t = this.matrixWorld.elements;
        return e.set(t[8], t[9], t[10]).normalize()
    }
    raycast() {}
    traverse(e) {
        e(this);
        let t = this.children;
        for (let n = 0, s = t.length; n < s; n++)
            t[n].traverse(e)
    }
    traverseVisible(e) {
        if (this.visible === !1)
            return;
        e(this);
        let t = this.children;
        for (let n = 0, s = t.length; n < s; n++)
            t[n].traverseVisible(e)
    }
    traverseAncestors(e) {
        let t = this.parent;
        t !== null && (e(t),
        t.traverseAncestors(e))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
        this.matrixWorldNeedsUpdate = !1,
        e = !0);
        let t = this.children;
        for (let n = 0, s = t.length; n < s; n++)
            t[n].updateMatrixWorld(e)
    }
    updateWorldMatrix(e, t) {
        let n = this.parent;
        if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
        t === !0) {
            let s = this.children;
            for (let r = 0, a = s.length; r < a; r++)
                s[r].updateWorldMatrix(!1, !0)
        }
    }
    toJSON(e) {
        let t = e === void 0 || typeof e == "string"
          , n = {};
        t && (e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
        },
        n.metadata = {
            version: 4.6,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        let s = {};
        s.uuid = this.uuid,
        s.type = this.type,
        this.name !== "" && (s.name = this.name),
        this.castShadow === !0 && (s.castShadow = !0),
        this.receiveShadow === !0 && (s.receiveShadow = !0),
        this.visible === !1 && (s.visible = !1),
        this.frustumCulled === !1 && (s.frustumCulled = !1),
        this.renderOrder !== 0 && (s.renderOrder = this.renderOrder),
        Object.keys(this.userData).length > 0 && (s.userData = this.userData),
        s.layers = this.layers.mask,
        s.matrix = this.matrix.toArray(),
        s.up = this.up.toArray(),
        this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1),
        this.isInstancedMesh && (s.type = "InstancedMesh",
        s.count = this.count,
        s.instanceMatrix = this.instanceMatrix.toJSON(),
        this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())),
        this.isBatchedMesh && (s.type = "BatchedMesh",
        s.perObjectFrustumCulled = this.perObjectFrustumCulled,
        s.sortObjects = this.sortObjects,
        s.drawRanges = this._drawRanges,
        s.reservedRanges = this._reservedRanges,
        s.visibility = this._visibility,
        s.active = this._active,
        s.bounds = this._bounds.map(o => ({
            boxInitialized: o.boxInitialized,
            boxMin: o.box.min.toArray(),
            boxMax: o.box.max.toArray(),
            sphereInitialized: o.sphereInitialized,
            sphereRadius: o.sphere.radius,
            sphereCenter: o.sphere.center.toArray()
        })),
        s.maxInstanceCount = this._maxInstanceCount,
        s.maxVertexCount = this._maxVertexCount,
        s.maxIndexCount = this._maxIndexCount,
        s.geometryInitialized = this._geometryInitialized,
        s.geometryCount = this._geometryCount,
        s.matricesTexture = this._matricesTexture.toJSON(e),
        this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null && (s.boundingSphere = {
            center: s.boundingSphere.center.toArray(),
            radius: s.boundingSphere.radius
        }),
        this.boundingBox !== null && (s.boundingBox = {
            min: s.boundingBox.min.toArray(),
            max: s.boundingBox.max.toArray()
        }));
        function r(o, c) {
            return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)),
            c.uuid
        }
        if (this.isScene)
            this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(e).uuid)),
            this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(e).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            s.geometry = r(e.geometries, this.geometry);
            let o = this.geometry.parameters;
            if (o !== void 0 && o.shapes !== void 0) {
                let c = o.shapes;
                if (Array.isArray(c))
                    for (let l = 0, h = c.length; l < h; l++) {
                        let u = c[l];
                        r(e.shapes, u)
                    }
                else
                    r(e.shapes, c)
            }
        }
        if (this.isSkinnedMesh && (s.bindMode = this.bindMode,
        s.bindMatrix = this.bindMatrix.toArray(),
        this.skeleton !== void 0 && (r(e.skeletons, this.skeleton),
        s.skeleton = this.skeleton.uuid)),
        this.material !== void 0)
            if (Array.isArray(this.material)) {
                let o = [];
                for (let c = 0, l = this.material.length; c < l; c++)
                    o.push(r(e.materials, this.material[c]));
                s.material = o
            } else
                s.material = r(e.materials, this.material);
        if (this.children.length > 0) {
            s.children = [];
            for (let o = 0; o < this.children.length; o++)
                s.children.push(this.children[o].toJSON(e).object)
        }
        if (this.animations.length > 0) {
            s.animations = [];
            for (let o = 0; o < this.animations.length; o++) {
                let c = this.animations[o];
                s.animations.push(r(e.animations, c))
            }
        }
        if (t) {
            let o = a(e.geometries)
              , c = a(e.materials)
              , l = a(e.textures)
              , h = a(e.images)
              , u = a(e.shapes)
              , f = a(e.skeletons)
              , d = a(e.animations)
              , m = a(e.nodes);
            o.length > 0 && (n.geometries = o),
            c.length > 0 && (n.materials = c),
            l.length > 0 && (n.textures = l),
            h.length > 0 && (n.images = h),
            u.length > 0 && (n.shapes = u),
            f.length > 0 && (n.skeletons = f),
            d.length > 0 && (n.animations = d),
            m.length > 0 && (n.nodes = m)
        }
        return n.object = s,
        n;
        function a(o) {
            let c = [];
            for (let l in o) {
                let h = o[l];
                delete h.metadata,
                c.push(h)
            }
            return c
        }
    }
    clone(e) {
        return new this.constructor().copy(this, e)
    }
    copy(e, t=!0) {
        if (this.name = e.name,
        this.up.copy(e.up),
        this.position.copy(e.position),
        this.rotation.order = e.rotation.order,
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate,
        this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
        this.layers.mask = e.layers.mask,
        this.visible = e.visible,
        this.castShadow = e.castShadow,
        this.receiveShadow = e.receiveShadow,
        this.frustumCulled = e.frustumCulled,
        this.renderOrder = e.renderOrder,
        this.animations = e.animations.slice(),
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        t === !0)
            for (let n = 0; n < e.children.length; n++) {
                let s = e.children[n];
                this.add(s.clone())
            }
        return this
    }
}
;
vt.DEFAULT_UP = new C(0,1,0);
vt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var En = new C
  , Gn = new C
  , Bo = new C
  , Wn = new C
  , us = new C
  , ds = new C
  , Iu = new C
  , ko = new C
  , zo = new C
  , Ho = new C
  , Vo = new Je
  , Go = new Je
  , Wo = new Je
  , Gi = class i {
    constructor(e=new C, t=new C, n=new C) {
        this.a = e,
        this.b = t,
        this.c = n
    }
    static getNormal(e, t, n, s) {
        s.subVectors(n, t),
        En.subVectors(e, t),
        s.cross(En);
        let r = s.lengthSq();
        return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0)
    }
    static getBarycoord(e, t, n, s, r) {
        En.subVectors(s, t),
        Gn.subVectors(n, t),
        Bo.subVectors(e, t);
        let a = En.dot(En)
          , o = En.dot(Gn)
          , c = En.dot(Bo)
          , l = Gn.dot(Gn)
          , h = Gn.dot(Bo)
          , u = a * l - o * o;
        if (u === 0)
            return r.set(0, 0, 0),
            null;
        let f = 1 / u
          , d = (l * c - o * h) * f
          , m = (a * h - o * c) * f;
        return r.set(1 - d - m, m, d)
    }
    static containsPoint(e, t, n, s) {
        return this.getBarycoord(e, t, n, s, Wn) === null ? !1 : Wn.x >= 0 && Wn.y >= 0 && Wn.x + Wn.y <= 1
    }
    static getInterpolation(e, t, n, s, r, a, o, c) {
        return this.getBarycoord(e, t, n, s, Wn) === null ? (c.x = 0,
        c.y = 0,
        "z" in c && (c.z = 0),
        "w" in c && (c.w = 0),
        null) : (c.setScalar(0),
        c.addScaledVector(r, Wn.x),
        c.addScaledVector(a, Wn.y),
        c.addScaledVector(o, Wn.z),
        c)
    }
    static getInterpolatedAttribute(e, t, n, s, r, a) {
        return Vo.setScalar(0),
        Go.setScalar(0),
        Wo.setScalar(0),
        Vo.fromBufferAttribute(e, t),
        Go.fromBufferAttribute(e, n),
        Wo.fromBufferAttribute(e, s),
        a.setScalar(0),
        a.addScaledVector(Vo, r.x),
        a.addScaledVector(Go, r.y),
        a.addScaledVector(Wo, r.z),
        a
    }
    static isFrontFacing(e, t, n, s) {
        return En.subVectors(n, t),
        Gn.subVectors(e, t),
        En.cross(Gn).dot(s) < 0
    }
    set(e, t, n) {
        return this.a.copy(e),
        this.b.copy(t),
        this.c.copy(n),
        this
    }
    setFromPointsAndIndices(e, t, n, s) {
        return this.a.copy(e[t]),
        this.b.copy(e[n]),
        this.c.copy(e[s]),
        this
    }
    setFromAttributeAndIndices(e, t, n, s) {
        return this.a.fromBufferAttribute(e, t),
        this.b.fromBufferAttribute(e, n),
        this.c.fromBufferAttribute(e, s),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.a.copy(e.a),
        this.b.copy(e.b),
        this.c.copy(e.c),
        this
    }
    getArea() {
        return En.subVectors(this.c, this.b),
        Gn.subVectors(this.a, this.b),
        En.cross(Gn).length() * .5
    }
    getMidpoint(e) {
        return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(e) {
        return i.getNormal(this.a, this.b, this.c, e)
    }
    getPlane(e) {
        return e.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(e, t) {
        return i.getBarycoord(e, this.a, this.b, this.c, t)
    }
    getInterpolation(e, t, n, s, r) {
        return i.getInterpolation(e, this.a, this.b, this.c, t, n, s, r)
    }
    containsPoint(e) {
        return i.containsPoint(e, this.a, this.b, this.c)
    }
    isFrontFacing(e) {
        return i.isFrontFacing(this.a, this.b, this.c, e)
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this)
    }
    closestPointToPoint(e, t) {
        let n = this.a, s = this.b, r = this.c, a, o;
        us.subVectors(s, n),
        ds.subVectors(r, n),
        ko.subVectors(e, n);
        let c = us.dot(ko)
          , l = ds.dot(ko);
        if (c <= 0 && l <= 0)
            return t.copy(n);
        zo.subVectors(e, s);
        let h = us.dot(zo)
          , u = ds.dot(zo);
        if (h >= 0 && u <= h)
            return t.copy(s);
        let f = c * u - h * l;
        if (f <= 0 && c >= 0 && h <= 0)
            return a = c / (c - h),
            t.copy(n).addScaledVector(us, a);
        Ho.subVectors(e, r);
        let d = us.dot(Ho)
          , m = ds.dot(Ho);
        if (m >= 0 && d <= m)
            return t.copy(r);
        let b = d * l - c * m;
        if (b <= 0 && l >= 0 && m <= 0)
            return o = l / (l - m),
            t.copy(n).addScaledVector(ds, o);
        let g = h * m - d * u;
        if (g <= 0 && u - h >= 0 && d - m >= 0)
            return Iu.subVectors(r, s),
            o = (u - h) / (u - h + (d - m)),
            t.copy(s).addScaledVector(Iu, o);
        let p = 1 / (g + b + f);
        return a = b * p,
        o = f * p,
        t.copy(n).addScaledVector(us, a).addScaledVector(ds, o)
    }
    equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
}
  , Gd = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}
  , pi = {
    h: 0,
    s: 0,
    l: 0
}
  , Kr = {
    h: 0,
    s: 0,
    l: 0
};
function Xo(i, e, t) {
    return t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i
}
var ue = class {
    constructor(e, t, n) {
        return this.isColor = !0,
        this.r = 1,
        this.g = 1,
        this.b = 1,
        this.set(e, t, n)
    }
    set(e, t, n) {
        if (t === void 0 && n === void 0) {
            let s = e;
            s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s)
        } else
            this.setRGB(e, t, n);
        return this
    }
    setScalar(e) {
        return this.r = e,
        this.g = e,
        this.b = e,
        this
    }
    setHex(e, t=St) {
        return e = Math.floor(e),
        this.r = (e >> 16 & 255) / 255,
        this.g = (e >> 8 & 255) / 255,
        this.b = (e & 255) / 255,
        Ge.toWorkingColorSpace(this, t),
        this
    }
    setRGB(e, t, n, s=Ge.workingColorSpace) {
        return this.r = e,
        this.g = t,
        this.b = n,
        Ge.toWorkingColorSpace(this, s),
        this
    }
    setHSL(e, t, n, s=Ge.workingColorSpace) {
        if (e = Vl(e, 1),
        t = Tt(t, 0, 1),
        n = Tt(n, 0, 1),
        t === 0)
            this.r = this.g = this.b = n;
        else {
            let r = n <= .5 ? n * (1 + t) : n + t - n * t
              , a = 2 * n - r;
            this.r = Xo(a, r, e + 1 / 3),
            this.g = Xo(a, r, e),
            this.b = Xo(a, r, e - 1 / 3)
        }
        return Ge.toWorkingColorSpace(this, s),
        this
    }
    setStyle(e, t=St) {
        function n(r) {
            r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
        }
        let s;
        if (s = /^(\w+)\(([^\)]*)\)/.exec(e)) {
            let r, a = s[1], o = s[2];
            switch (a) {
            case "rgb":
            case "rgba":
                if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(r[4]),
                    this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
                if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(r[4]),
                    this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t);
                break;
            case "hsl":
            case "hsla":
                if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(r[4]),
                    this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
                break;
            default:
                console.warn("THREE.Color: Unknown color model " + e)
            }
        } else if (s = /^\#([A-Fa-f\d]+)$/.exec(e)) {
            let r = s[1]
              , a = r.length;
            if (a === 3)
                return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
            if (a === 6)
                return this.setHex(parseInt(r, 16), t);
            console.warn("THREE.Color: Invalid hex color " + e)
        } else if (e && e.length > 0)
            return this.setColorName(e, t);
        return this
    }
    setColorName(e, t=St) {
        let n = Gd[e.toLowerCase()];
        return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e),
        this
    }
    clone() {
        return new this.constructor(this.r,this.g,this.b)
    }
    copy(e) {
        return this.r = e.r,
        this.g = e.g,
        this.b = e.b,
        this
    }
    copySRGBToLinear(e) {
        return this.r = Kn(e.r),
        this.g = Kn(e.g),
        this.b = Kn(e.b),
        this
    }
    copyLinearToSRGB(e) {
        return this.r = ys(e.r),
        this.g = ys(e.g),
        this.b = ys(e.b),
        this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this),
        this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this),
        this
    }
    getHex(e=St) {
        return Ge.fromWorkingColorSpace(Vt.copy(this), e),
        Math.round(Tt(Vt.r * 255, 0, 255)) * 65536 + Math.round(Tt(Vt.g * 255, 0, 255)) * 256 + Math.round(Tt(Vt.b * 255, 0, 255))
    }
    getHexString(e=St) {
        return ("000000" + this.getHex(e).toString(16)).slice(-6)
    }
    getHSL(e, t=Ge.workingColorSpace) {
        Ge.fromWorkingColorSpace(Vt.copy(this), t);
        let n = Vt.r, s = Vt.g, r = Vt.b, a = Math.max(n, s, r), o = Math.min(n, s, r), c, l, h = (o + a) / 2;
        if (o === a)
            c = 0,
            l = 0;
        else {
            let u = a - o;
            switch (l = h <= .5 ? u / (a + o) : u / (2 - a - o),
            a) {
            case n:
                c = (s - r) / u + (s < r ? 6 : 0);
                break;
            case s:
                c = (r - n) / u + 2;
                break;
            case r:
                c = (n - s) / u + 4;
                break
            }
            c /= 6
        }
        return e.h = c,
        e.s = l,
        e.l = h,
        e
    }
    getRGB(e, t=Ge.workingColorSpace) {
        return Ge.fromWorkingColorSpace(Vt.copy(this), t),
        e.r = Vt.r,
        e.g = Vt.g,
        e.b = Vt.b,
        e
    }
    getStyle(e=St) {
        Ge.fromWorkingColorSpace(Vt.copy(this), e);
        let t = Vt.r
          , n = Vt.g
          , s = Vt.b;
        return e !== St ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`
    }
    offsetHSL(e, t, n) {
        return this.getHSL(pi),
        this.setHSL(pi.h + e, pi.s + t, pi.l + n)
    }
    add(e) {
        return this.r += e.r,
        this.g += e.g,
        this.b += e.b,
        this
    }
    addColors(e, t) {
        return this.r = e.r + t.r,
        this.g = e.g + t.g,
        this.b = e.b + t.b,
        this
    }
    addScalar(e) {
        return this.r += e,
        this.g += e,
        this.b += e,
        this
    }
    sub(e) {
        return this.r = Math.max(0, this.r - e.r),
        this.g = Math.max(0, this.g - e.g),
        this.b = Math.max(0, this.b - e.b),
        this
    }
    multiply(e) {
        return this.r *= e.r,
        this.g *= e.g,
        this.b *= e.b,
        this
    }
    multiplyScalar(e) {
        return this.r *= e,
        this.g *= e,
        this.b *= e,
        this
    }
    lerp(e, t) {
        return this.r += (e.r - this.r) * t,
        this.g += (e.g - this.g) * t,
        this.b += (e.b - this.b) * t,
        this
    }
    lerpColors(e, t, n) {
        return this.r = e.r + (t.r - e.r) * n,
        this.g = e.g + (t.g - e.g) * n,
        this.b = e.b + (t.b - e.b) * n,
        this
    }
    lerpHSL(e, t) {
        this.getHSL(pi),
        e.getHSL(Kr);
        let n = ur(pi.h, Kr.h, t)
          , s = ur(pi.s, Kr.s, t)
          , r = ur(pi.l, Kr.l, t);
        return this.setHSL(n, s, r),
        this
    }
    setFromVector3(e) {
        return this.r = e.x,
        this.g = e.y,
        this.b = e.z,
        this
    }
    applyMatrix3(e) {
        let t = this.r
          , n = this.g
          , s = this.b
          , r = e.elements;
        return this.r = r[0] * t + r[3] * n + r[6] * s,
        this.g = r[1] * t + r[4] * n + r[7] * s,
        this.b = r[2] * t + r[5] * n + r[8] * s,
        this
    }
    equals(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    }
    fromArray(e, t=0) {
        return this.r = e[t],
        this.g = e[t + 1],
        this.b = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.r,
        e[t + 1] = this.g,
        e[t + 2] = this.b,
        e
    }
    fromBufferAttribute(e, t) {
        return this.r = e.getX(t),
        this.g = e.getY(t),
        this.b = e.getZ(t),
        this
    }
    toJSON() {
        return this.getHex()
    }
    *[Symbol.iterator]() {
        yield this.r,
        yield this.g,
        yield this.b
    }
}
  , Vt = new ue;
ue.NAMES = Gd;
var Kp = 0
  , sn = class extends Qn {
    static get type() {
        return "Material"
    }
    get type() {
        return this.constructor.type
    }
    set type(e) {}
    constructor() {
        super(),
        this.isMaterial = !0,
        Object.defineProperty(this, "id", {
            value: Kp++
        }),
        this.uuid = Cn(),
        this.name = "",
        this.blending = _i,
        this.side = Nn,
        this.vertexColors = !1,
        this.opacity = 1,
        this.transparent = !1,
        this.alphaHash = !1,
        this.blendSrc = lc,
        this.blendDst = hc,
        this.blendEquation = Vi,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.blendColor = new ue(0,0,0),
        this.blendAlpha = 0,
        this.depthFunc = Ss,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.stencilWriteMask = 255,
        this.stencilFunc = pu,
        this.stencilRef = 0,
        this.stencilFuncMask = 255,
        this.stencilFail = is,
        this.stencilZFail = is,
        this.stencilZPass = is,
        this.stencilWrite = !1,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.dithering = !1,
        this.alphaToCoverage = !1,
        this.premultipliedAlpha = !1,
        this.forceSinglePass = !1,
        this.visible = !0,
        this.toneMapped = !0,
        this.userData = {},
        this.version = 0,
        this._alphaTest = 0
    }
    get alphaTest() {
        return this._alphaTest
    }
    set alphaTest(e) {
        this._alphaTest > 0 != e > 0 && this.version++,
        this._alphaTest = e
    }
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString()
    }
    setValues(e) {
        if (e !== void 0)
            for (let t in e) {
                let n = e[t];
                if (n === void 0) {
                    console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
                    continue
                }
                let s = this[t];
                if (s === void 0) {
                    console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
                    continue
                }
                s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[t] = n
            }
    }
    toJSON(e) {
        let t = e === void 0 || typeof e == "string";
        t && (e = {
            textures: {},
            images: {}
        });
        let n = {
            metadata: {
                version: 4.6,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        n.uuid = this.uuid,
        n.type = this.type,
        this.name !== "" && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        this.roughness !== void 0 && (n.roughness = this.roughness),
        this.metalness !== void 0 && (n.metalness = this.metalness),
        this.sheen !== void 0 && (n.sheen = this.sheen),
        this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness),
        this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity),
        this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity),
        this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (n.shininess = this.shininess),
        this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
        this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
        this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid,
        n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
        this.dispersion !== void 0 && (n.dispersion = this.dispersion),
        this.iridescence !== void 0 && (n.iridescence = this.iridescence),
        this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR),
        this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
        this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
        this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
        this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation),
        this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
        this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid,
        n.lightMapIntensity = this.lightMapIntensity),
        this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid,
        n.aoMapIntensity = this.aoMapIntensity),
        this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid,
        n.bumpScale = this.bumpScale),
        this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid,
        n.normalMapType = this.normalMapType,
        n.normalScale = this.normalScale.toArray()),
        this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid,
        n.displacementScale = this.displacementScale,
        n.displacementBias = this.displacementBias),
        this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
        this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
        this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
        this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid,
        this.combine !== void 0 && (n.combine = this.combine)),
        this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()),
        this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio),
        this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
        this.transmission !== void 0 && (n.transmission = this.transmission),
        this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
        this.thickness !== void 0 && (n.thickness = this.thickness),
        this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
        this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (n.size = this.size),
        this.shadowSide !== null && (n.shadowSide = this.shadowSide),
        this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation),
        this.blending !== _i && (n.blending = this.blending),
        this.side !== Nn && (n.side = this.side),
        this.vertexColors === !0 && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        this.transparent === !0 && (n.transparent = !0),
        this.blendSrc !== lc && (n.blendSrc = this.blendSrc),
        this.blendDst !== hc && (n.blendDst = this.blendDst),
        this.blendEquation !== Vi && (n.blendEquation = this.blendEquation),
        this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
        this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
        this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha),
        this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()),
        this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
        this.depthFunc !== Ss && (n.depthFunc = this.depthFunc),
        this.depthTest === !1 && (n.depthTest = this.depthTest),
        this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
        this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
        this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask),
        this.stencilFunc !== pu && (n.stencilFunc = this.stencilFunc),
        this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
        this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask),
        this.stencilFail !== is && (n.stencilFail = this.stencilFail),
        this.stencilZFail !== is && (n.stencilZFail = this.stencilZFail),
        this.stencilZPass !== is && (n.stencilZPass = this.stencilZPass),
        this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
        this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation),
        this.polygonOffset === !0 && (n.polygonOffset = !0),
        this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor),
        this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth),
        this.dashSize !== void 0 && (n.dashSize = this.dashSize),
        this.gapSize !== void 0 && (n.gapSize = this.gapSize),
        this.scale !== void 0 && (n.scale = this.scale),
        this.dithering === !0 && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        this.alphaHash === !0 && (n.alphaHash = !0),
        this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
        this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
        this.forceSinglePass === !0 && (n.forceSinglePass = !0),
        this.wireframe === !0 && (n.wireframe = !0),
        this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading === !0 && (n.flatShading = !0),
        this.visible === !1 && (n.visible = !1),
        this.toneMapped === !1 && (n.toneMapped = !1),
        this.fog === !1 && (n.fog = !1),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData);
        function s(r) {
            let a = [];
            for (let o in r) {
                let c = r[o];
                delete c.metadata,
                a.push(c)
            }
            return a
        }
        if (t) {
            let r = s(e.textures)
              , a = s(e.images);
            r.length > 0 && (n.textures = r),
            a.length > 0 && (n.images = a)
        }
        return n
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.name = e.name,
        this.blending = e.blending,
        this.side = e.side,
        this.vertexColors = e.vertexColors,
        this.opacity = e.opacity,
        this.transparent = e.transparent,
        this.blendSrc = e.blendSrc,
        this.blendDst = e.blendDst,
        this.blendEquation = e.blendEquation,
        this.blendSrcAlpha = e.blendSrcAlpha,
        this.blendDstAlpha = e.blendDstAlpha,
        this.blendEquationAlpha = e.blendEquationAlpha,
        this.blendColor.copy(e.blendColor),
        this.blendAlpha = e.blendAlpha,
        this.depthFunc = e.depthFunc,
        this.depthTest = e.depthTest,
        this.depthWrite = e.depthWrite,
        this.stencilWriteMask = e.stencilWriteMask,
        this.stencilFunc = e.stencilFunc,
        this.stencilRef = e.stencilRef,
        this.stencilFuncMask = e.stencilFuncMask,
        this.stencilFail = e.stencilFail,
        this.stencilZFail = e.stencilZFail,
        this.stencilZPass = e.stencilZPass,
        this.stencilWrite = e.stencilWrite;
        let t = e.clippingPlanes
          , n = null;
        if (t !== null) {
            let s = t.length;
            n = new Array(s);
            for (let r = 0; r !== s; ++r)
                n[r] = t[r].clone()
        }
        return this.clippingPlanes = n,
        this.clipIntersection = e.clipIntersection,
        this.clipShadows = e.clipShadows,
        this.shadowSide = e.shadowSide,
        this.colorWrite = e.colorWrite,
        this.precision = e.precision,
        this.polygonOffset = e.polygonOffset,
        this.polygonOffsetFactor = e.polygonOffsetFactor,
        this.polygonOffsetUnits = e.polygonOffsetUnits,
        this.dithering = e.dithering,
        this.alphaTest = e.alphaTest,
        this.alphaHash = e.alphaHash,
        this.alphaToCoverage = e.alphaToCoverage,
        this.premultipliedAlpha = e.premultipliedAlpha,
        this.forceSinglePass = e.forceSinglePass,
        this.visible = e.visible,
        this.toneMapped = e.toneMapped,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    onBuild() {
        console.warn("Material: onBuild() has been removed.")
    }
}
  , Ft = class extends sn {
    static get type() {
        return "MeshBasicMaterial"
    }
    constructor(e) {
        super(),
        this.isMeshBasicMaterial = !0,
        this.color = new ue(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new Fn,
        this.combine = Rd,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.specularMap = e.specularMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapRotation.copy(e.envMapRotation),
        this.combine = e.combine,
        this.reflectivity = e.reflectivity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.fog = e.fog,
        this
    }
}
;
var Et = new C
  , Zr = new ne
  , ut = class {
    constructor(e, t, n=!1) {
        if (Array.isArray(e))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.isBufferAttribute = !0,
        this.name = "",
        this.array = e,
        this.itemSize = t,
        this.count = e !== void 0 ? e.length / t : 0,
        this.normalized = n,
        this.usage = qc,
        this.updateRanges = [],
        this.gpuType = Rn,
        this.version = 0
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    setUsage(e) {
        return this.usage = e,
        this
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    copy(e) {
        return this.name = e.name,
        this.array = new e.array.constructor(e.array),
        this.itemSize = e.itemSize,
        this.count = e.count,
        this.normalized = e.normalized,
        this.usage = e.usage,
        this.gpuType = e.gpuType,
        this
    }
    copyAt(e, t, n) {
        e *= this.itemSize,
        n *= t.itemSize;
        for (let s = 0, r = this.itemSize; s < r; s++)
            this.array[e + s] = t.array[n + s];
        return this
    }
    copyArray(e) {
        return this.array.set(e),
        this
    }
    applyMatrix3(e) {
        if (this.itemSize === 2)
            for (let t = 0, n = this.count; t < n; t++)
                Zr.fromBufferAttribute(this, t),
                Zr.applyMatrix3(e),
                this.setXY(t, Zr.x, Zr.y);
        else if (this.itemSize === 3)
            for (let t = 0, n = this.count; t < n; t++)
                Et.fromBufferAttribute(this, t),
                Et.applyMatrix3(e),
                this.setXYZ(t, Et.x, Et.y, Et.z);
        return this
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.count; t < n; t++)
            Et.fromBufferAttribute(this, t),
            Et.applyMatrix4(e),
            this.setXYZ(t, Et.x, Et.y, Et.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++)
            Et.fromBufferAttribute(this, t),
            Et.applyNormalMatrix(e),
            this.setXYZ(t, Et.x, Et.y, Et.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++)
            Et.fromBufferAttribute(this, t),
            Et.transformDirection(e),
            this.setXYZ(t, Et.x, Et.y, Et.z);
        return this
    }
    set(e, t=0) {
        return this.array.set(e, t),
        this
    }
    getComponent(e, t) {
        let n = this.array[e * this.itemSize + t];
        return this.normalized && (n = An(n, this.array)),
        n
    }
    setComponent(e, t, n) {
        return this.normalized && (n = st(n, this.array)),
        this.array[e * this.itemSize + t] = n,
        this
    }
    getX(e) {
        let t = this.array[e * this.itemSize];
        return this.normalized && (t = An(t, this.array)),
        t
    }
    setX(e, t) {
        return this.normalized && (t = st(t, this.array)),
        this.array[e * this.itemSize] = t,
        this
    }
    getY(e) {
        let t = this.array[e * this.itemSize + 1];
        return this.normalized && (t = An(t, this.array)),
        t
    }
    setY(e, t) {
        return this.normalized && (t = st(t, this.array)),
        this.array[e * this.itemSize + 1] = t,
        this
    }
    getZ(e) {
        let t = this.array[e * this.itemSize + 2];
        return this.normalized && (t = An(t, this.array)),
        t
    }
    setZ(e, t) {
        return this.normalized && (t = st(t, this.array)),
        this.array[e * this.itemSize + 2] = t,
        this
    }
    getW(e) {
        let t = this.array[e * this.itemSize + 3];
        return this.normalized && (t = An(t, this.array)),
        t
    }
    setW(e, t) {
        return this.normalized && (t = st(t, this.array)),
        this.array[e * this.itemSize + 3] = t,
        this
    }
    setXY(e, t, n) {
        return e *= this.itemSize,
        this.normalized && (t = st(t, this.array),
        n = st(n, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this
    }
    setXYZ(e, t, n, s) {
        return e *= this.itemSize,
        this.normalized && (t = st(t, this.array),
        n = st(n, this.array),
        s = st(s, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = s,
        this
    }
    setXYZW(e, t, n, s, r) {
        return e *= this.itemSize,
        this.normalized && (t = st(t, this.array),
        n = st(n, this.array),
        s = st(s, this.array),
        r = st(r, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = s,
        this.array[e + 3] = r,
        this
    }
    onUpload(e) {
        return this.onUploadCallback = e,
        this
    }
    clone() {
        return new this.constructor(this.array,this.itemSize).copy(this)
    }
    toJSON() {
        let e = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
        };
        return this.name !== "" && (e.name = this.name),
        this.usage !== qc && (e.usage = this.usage),
        e
    }
}
;
var Ea = class extends ut {
    constructor(e, t, n) {
        super(new Uint16Array(e), t, n)
    }
}
;
var Ta = class extends ut {
    constructor(e, t, n) {
        super(new Uint32Array(e), t, n)
    }
}
;
var We = class extends ut {
    constructor(e, t, n) {
        super(new Float32Array(e), t, n)
    }
}
  , Zp = 0
  , mn = new Le
  , qo = new vt
  , fs = new C
  , tn = new bn
  , nr = new bn
  , Ut = new C
  , bt = class i extends Qn {
    constructor() {
        super(),
        this.isBufferGeometry = !0,
        Object.defineProperty(this, "id", {
            value: Zp++
        }),
        this.uuid = Cn(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.indirect = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.morphTargetsRelative = !1,
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(e) {
        return Array.isArray(e) ? this.index = new (Vd(e) ? Ta : Ea)(e,1) : this.index = e,
        this
    }
    setIndirect(e) {
        return this.indirect = e,
        this
    }
    getIndirect() {
        return this.indirect
    }
    getAttribute(e) {
        return this.attributes[e]
    }
    setAttribute(e, t) {
        return this.attributes[e] = t,
        this
    }
    deleteAttribute(e) {
        return delete this.attributes[e],
        this
    }
    hasAttribute(e) {
        return this.attributes[e] !== void 0
    }
    addGroup(e, t, n=0) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: n
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(e, t) {
        this.drawRange.start = e,
        this.drawRange.count = t
    }
    applyMatrix4(e) {
        let t = this.attributes.position;
        t !== void 0 && (t.applyMatrix4(e),
        t.needsUpdate = !0);
        let n = this.attributes.normal;
        if (n !== void 0) {
            let r = new Fe().getNormalMatrix(e);
            n.applyNormalMatrix(r),
            n.needsUpdate = !0
        }
        let s = this.attributes.tangent;
        return s !== void 0 && (s.transformDirection(e),
        s.needsUpdate = !0),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        this
    }
    applyQuaternion(e) {
        return mn.makeRotationFromQuaternion(e),
        this.applyMatrix4(mn),
        this
    }
    rotateX(e) {
        return mn.makeRotationX(e),
        this.applyMatrix4(mn),
        this
    }
    rotateY(e) {
        return mn.makeRotationY(e),
        this.applyMatrix4(mn),
        this
    }
    rotateZ(e) {
        return mn.makeRotationZ(e),
        this.applyMatrix4(mn),
        this
    }
    translate(e, t, n) {
        return mn.makeTranslation(e, t, n),
        this.applyMatrix4(mn),
        this
    }
    scale(e, t, n) {
        return mn.makeScale(e, t, n),
        this.applyMatrix4(mn),
        this
    }
    lookAt(e) {
        return qo.lookAt(e),
        qo.updateMatrix(),
        this.applyMatrix4(qo.matrix),
        this
    }
    center() {
        return this.computeBoundingBox(),
        this.boundingBox.getCenter(fs).negate(),
        this.translate(fs.x, fs.y, fs.z),
        this
    }
    setFromPoints(e) {
        let t = this.getAttribute("position");
        if (t === void 0) {
            let n = [];
            for (let s = 0, r = e.length; s < r; s++) {
                let a = e[s];
                n.push(a.x, a.y, a.z || 0)
            }
            this.setAttribute("position", new We(n,3))
        } else {
            for (let n = 0, s = t.count; n < s; n++) {
                let r = e[n];
                t.setXYZ(n, r.x, r.y, r.z || 0)
            }
            e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),
            t.needsUpdate = !0
        }
        return this
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new bn);
        let e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this),
            this.boundingBox.set(new C(-1 / 0,-1 / 0,-1 / 0), new C(1 / 0,1 / 0,1 / 0));
            return
        }
        if (e !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(e),
            t)
                for (let n = 0, s = t.length; n < s; n++) {
                    let r = t[n];
                    tn.setFromBufferAttribute(r),
                    this.morphTargetsRelative ? (Ut.addVectors(this.boundingBox.min, tn.min),
                    this.boundingBox.expandByPoint(Ut),
                    Ut.addVectors(this.boundingBox.max, tn.max),
                    this.boundingBox.expandByPoint(Ut)) : (this.boundingBox.expandByPoint(tn.min),
                    this.boundingBox.expandByPoint(tn.max))
                }
        } else
            this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new nn);
        let e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this),
            this.boundingSphere.set(new C, 1 / 0);
            return
        }
        if (e) {
            let n = this.boundingSphere.center;
            if (tn.setFromBufferAttribute(e),
            t)
                for (let r = 0, a = t.length; r < a; r++) {
                    let o = t[r];
                    nr.setFromBufferAttribute(o),
                    this.morphTargetsRelative ? (Ut.addVectors(tn.min, nr.min),
                    tn.expandByPoint(Ut),
                    Ut.addVectors(tn.max, nr.max),
                    tn.expandByPoint(Ut)) : (tn.expandByPoint(nr.min),
                    tn.expandByPoint(nr.max))
                }
            tn.getCenter(n);
            let s = 0;
            for (let r = 0, a = e.count; r < a; r++)
                Ut.fromBufferAttribute(e, r),
                s = Math.max(s, n.distanceToSquared(Ut));
            if (t)
                for (let r = 0, a = t.length; r < a; r++) {
                    let o = t[r]
                      , c = this.morphTargetsRelative;
                    for (let l = 0, h = o.count; l < h; l++)
                        Ut.fromBufferAttribute(o, l),
                        c && (fs.fromBufferAttribute(e, l),
                        Ut.add(fs)),
                        s = Math.max(s, n.distanceToSquared(Ut))
                }
            this.boundingSphere.radius = Math.sqrt(s),
            isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    }
    computeTangents() {
        let e = this.index
          , t = this.attributes;
        if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
            console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            return
        }
        let n = t.position
          , s = t.normal
          , r = t.uv;
        this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new ut(new Float32Array(4 * n.count),4));
        let a = this.getAttribute("tangent")
          , o = []
          , c = [];
        for (let L = 0; L < n.count; L++)
            o[L] = new C,
            c[L] = new C;
        let l = new C
          , h = new C
          , u = new C
          , f = new ne
          , d = new ne
          , m = new ne
          , b = new C
          , g = new C;
        function p(L, w, M) {
            l.fromBufferAttribute(n, L),
            h.fromBufferAttribute(n, w),
            u.fromBufferAttribute(n, M),
            f.fromBufferAttribute(r, L),
            d.fromBufferAttribute(r, w),
            m.fromBufferAttribute(r, M),
            h.sub(l),
            u.sub(l),
            d.sub(f),
            m.sub(f);
            let I = 1 / (d.x * m.y - m.x * d.y);
            isFinite(I) && (b.copy(h).multiplyScalar(m.y).addScaledVector(u, -d.y).multiplyScalar(I),
            g.copy(u).multiplyScalar(d.x).addScaledVector(h, -m.x).multiplyScalar(I),
            o[L].add(b),
            o[w].add(b),
            o[M].add(b),
            c[L].add(g),
            c[w].add(g),
            c[M].add(g))
        }
        let x = this.groups;
        x.length === 0 && (x = [{
            start: 0,
            count: e.count
        }]);
        for (let L = 0, w = x.length; L < w; ++L) {
            let M = x[L]
              , I = M.start
              , H = M.count;
            for (let B = I, V = I + H; B < V; B += 3)
                p(e.getX(B + 0), e.getX(B + 1), e.getX(B + 2))
        }
        let v = new C
          , _ = new C
          , P = new C
          , E = new C;
        function R(L) {
            P.fromBufferAttribute(s, L),
            E.copy(P);
            let w = o[L];
            v.copy(w),
            v.sub(P.multiplyScalar(P.dot(w))).normalize(),
            _.crossVectors(E, w);
            let I = _.dot(c[L]) < 0 ? -1 : 1;
            a.setXYZW(L, v.x, v.y, v.z, I)
        }
        for (let L = 0, w = x.length; L < w; ++L) {
            let M = x[L]
              , I = M.start
              , H = M.count;
            for (let B = I, V = I + H; B < V; B += 3)
                R(e.getX(B + 0)),
                R(e.getX(B + 1)),
                R(e.getX(B + 2))
        }
    }
    computeVertexNormals() {
        let e = this.index
          , t = this.getAttribute("position");
        if (t !== void 0) {
            let n = this.getAttribute("normal");
            if (n === void 0)
                n = new ut(new Float32Array(t.count * 3),3),
                this.setAttribute("normal", n);
            else
                for (let f = 0, d = n.count; f < d; f++)
                    n.setXYZ(f, 0, 0, 0);
            let s = new C
              , r = new C
              , a = new C
              , o = new C
              , c = new C
              , l = new C
              , h = new C
              , u = new C;
            if (e)
                for (let f = 0, d = e.count; f < d; f += 3) {
                    let m = e.getX(f + 0)
                      , b = e.getX(f + 1)
                      , g = e.getX(f + 2);
                    s.fromBufferAttribute(t, m),
                    r.fromBufferAttribute(t, b),
                    a.fromBufferAttribute(t, g),
                    h.subVectors(a, r),
                    u.subVectors(s, r),
                    h.cross(u),
                    o.fromBufferAttribute(n, m),
                    c.fromBufferAttribute(n, b),
                    l.fromBufferAttribute(n, g),
                    o.add(h),
                    c.add(h),
                    l.add(h),
                    n.setXYZ(m, o.x, o.y, o.z),
                    n.setXYZ(b, c.x, c.y, c.z),
                    n.setXYZ(g, l.x, l.y, l.z)
                }
            else
                for (let f = 0, d = t.count; f < d; f += 3)
                    s.fromBufferAttribute(t, f + 0),
                    r.fromBufferAttribute(t, f + 1),
                    a.fromBufferAttribute(t, f + 2),
                    h.subVectors(a, r),
                    u.subVectors(s, r),
                    h.cross(u),
                    n.setXYZ(f + 0, h.x, h.y, h.z),
                    n.setXYZ(f + 1, h.x, h.y, h.z),
                    n.setXYZ(f + 2, h.x, h.y, h.z);
            this.normalizeNormals(),
            n.needsUpdate = !0
        }
    }
    normalizeNormals() {
        let e = this.attributes.normal;
        for (let t = 0, n = e.count; t < n; t++)
            Ut.fromBufferAttribute(e, t),
            Ut.normalize(),
            e.setXYZ(t, Ut.x, Ut.y, Ut.z)
    }
    toNonIndexed() {
        function e(o, c) {
            let l = o.array
              , h = o.itemSize
              , u = o.normalized
              , f = new l.constructor(c.length * h)
              , d = 0
              , m = 0;
            for (let b = 0, g = c.length; b < g; b++) {
                o.isInterleavedBufferAttribute ? d = c[b] * o.data.stride + o.offset : d = c[b] * h;
                for (let p = 0; p < h; p++)
                    f[m++] = l[d++]
            }
            return new ut(f,h,u)
        }
        if (this.index === null)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
            this;
        let t = new i
          , n = this.index.array
          , s = this.attributes;
        for (let o in s) {
            let c = s[o]
              , l = e(c, n);
            t.setAttribute(o, l)
        }
        let r = this.morphAttributes;
        for (let o in r) {
            let c = []
              , l = r[o];
            for (let h = 0, u = l.length; h < u; h++) {
                let f = l[h]
                  , d = e(f, n);
                c.push(d)
            }
            t.morphAttributes[o] = c
        }
        t.morphTargetsRelative = this.morphTargetsRelative;
        let a = this.groups;
        for (let o = 0, c = a.length; o < c; o++) {
            let l = a[o];
            t.addGroup(l.start, l.count, l.materialIndex)
        }
        return t
    }
    toJSON() {
        let e = {
            metadata: {
                version: 4.6,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (e.uuid = this.uuid,
        e.type = this.type,
        this.name !== "" && (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        this.parameters !== void 0) {
            let c = this.parameters;
            for (let l in c)
                c[l] !== void 0 && (e[l] = c[l]);
            return e
        }
        e.data = {
            attributes: {}
        };
        let t = this.index;
        t !== null && (e.data.index = {
            type: t.array.constructor.name,
            array: Array.prototype.slice.call(t.array)
        });
        let n = this.attributes;
        for (let c in n) {
            let l = n[c];
            e.data.attributes[c] = l.toJSON(e.data)
        }
        let s = {}
          , r = !1;
        for (let c in this.morphAttributes) {
            let l = this.morphAttributes[c]
              , h = [];
            for (let u = 0, f = l.length; u < f; u++) {
                let d = l[u];
                h.push(d.toJSON(e.data))
            }
            h.length > 0 && (s[c] = h,
            r = !0)
        }
        r && (e.data.morphAttributes = s,
        e.data.morphTargetsRelative = this.morphTargetsRelative);
        let a = this.groups;
        a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
        let o = this.boundingSphere;
        return o !== null && (e.data.boundingSphere = {
            center: o.center.toArray(),
            radius: o.radius
        }),
        e
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null;
        let t = {};
        this.name = e.name;
        let n = e.index;
        n !== null && this.setIndex(n.clone(t));
        let s = e.attributes;
        for (let l in s) {
            let h = s[l];
            this.setAttribute(l, h.clone(t))
        }
        let r = e.morphAttributes;
        for (let l in r) {
            let h = []
              , u = r[l];
            for (let f = 0, d = u.length; f < d; f++)
                h.push(u[f].clone(t));
            this.morphAttributes[l] = h
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        let a = e.groups;
        for (let l = 0, h = a.length; l < h; l++) {
            let u = a[l];
            this.addGroup(u.start, u.count, u.materialIndex)
        }
        let o = e.boundingBox;
        o !== null && (this.boundingBox = o.clone());
        let c = e.boundingSphere;
        return c !== null && (this.boundingSphere = c.clone()),
        this.drawRange.start = e.drawRange.start,
        this.drawRange.count = e.drawRange.count,
        this.userData = e.userData,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
  , Lu = new Le
  , Oi = new vi
  , Jr = new nn
  , Du = new C
  , Qr = new C
  , $r = new C
  , ea = new C
  , jo = new C
  , ta = new C
  , Uu = new C
  , na = new C
  , be = class extends vt {
    constructor(e=new bt, t=new Ft) {
        super(),
        this.isMesh = !0,
        this.type = "Mesh",
        this.geometry = e,
        this.material = t,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    updateMorphTargets() {
        let t = this.geometry.morphAttributes
          , n = Object.keys(t);
        if (n.length > 0) {
            let s = t[n[0]];
            if (s !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let r = 0, a = s.length; r < a; r++) {
                    let o = s[r].name || String(r);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[o] = r
                }
            }
        }
    }
    getVertexPosition(e, t) {
        let n = this.geometry
          , s = n.attributes.position
          , r = n.morphAttributes.position
          , a = n.morphTargetsRelative;
        t.fromBufferAttribute(s, e);
        let o = this.morphTargetInfluences;
        if (r && o) {
            ta.set(0, 0, 0);
            for (let c = 0, l = r.length; c < l; c++) {
                let h = o[c]
                  , u = r[c];
                h !== 0 && (jo.fromBufferAttribute(u, e),
                a ? ta.addScaledVector(jo, h) : ta.addScaledVector(jo.sub(t), h))
            }
            t.add(ta)
        }
        return t
    }
    raycast(e, t) {
        let n = this.geometry
          , s = this.material
          , r = this.matrixWorld;
        s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(),
        Jr.copy(n.boundingSphere),
        Jr.applyMatrix4(r),
        Oi.copy(e.ray).recast(e.near),
        !(Jr.containsPoint(Oi.origin) === !1 && (Oi.intersectSphere(Jr, Du) === null || Oi.origin.distanceToSquared(Du) > (e.far - e.near) ** 2)) && (Lu.copy(r).invert(),
        Oi.copy(e.ray).applyMatrix4(Lu),
        !(n.boundingBox !== null && Oi.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Oi)))
    }
    _computeIntersections(e, t, n) {
        let s, r = this.geometry, a = this.material, o = r.index, c = r.attributes.position, l = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, f = r.groups, d = r.drawRange;
        if (o !== null)
            if (Array.isArray(a))
                for (let m = 0, b = f.length; m < b; m++) {
                    let g = f[m]
                      , p = a[g.materialIndex]
                      , x = Math.max(g.start, d.start)
                      , v = Math.min(o.count, Math.min(g.start + g.count, d.start + d.count));
                    for (let _ = x, P = v; _ < P; _ += 3) {
                        let E = o.getX(_)
                          , R = o.getX(_ + 1)
                          , L = o.getX(_ + 2);
                        s = ia(this, p, e, n, l, h, u, E, R, L),
                        s && (s.faceIndex = Math.floor(_ / 3),
                        s.face.materialIndex = g.materialIndex,
                        t.push(s))
                    }
                }
            else {
                let m = Math.max(0, d.start)
                  , b = Math.min(o.count, d.start + d.count);
                for (let g = m, p = b; g < p; g += 3) {
                    let x = o.getX(g)
                      , v = o.getX(g + 1)
                      , _ = o.getX(g + 2);
                    s = ia(this, a, e, n, l, h, u, x, v, _),
                    s && (s.faceIndex = Math.floor(g / 3),
                    t.push(s))
                }
            }
        else if (c !== void 0)
            if (Array.isArray(a))
                for (let m = 0, b = f.length; m < b; m++) {
                    let g = f[m]
                      , p = a[g.materialIndex]
                      , x = Math.max(g.start, d.start)
                      , v = Math.min(c.count, Math.min(g.start + g.count, d.start + d.count));
                    for (let _ = x, P = v; _ < P; _ += 3) {
                        let E = _
                          , R = _ + 1
                          , L = _ + 2;
                        s = ia(this, p, e, n, l, h, u, E, R, L),
                        s && (s.faceIndex = Math.floor(_ / 3),
                        s.face.materialIndex = g.materialIndex,
                        t.push(s))
                    }
                }
            else {
                let m = Math.max(0, d.start)
                  , b = Math.min(c.count, d.start + d.count);
                for (let g = m, p = b; g < p; g += 3) {
                    let x = g
                      , v = g + 1
                      , _ = g + 2;
                    s = ia(this, a, e, n, l, h, u, x, v, _),
                    s && (s.faceIndex = Math.floor(g / 3),
                    t.push(s))
                }
            }
    }
}
;
function Jp(i, e, t, n, s, r, a, o) {
    let c;
    if (e.side === Gt ? c = n.intersectTriangle(a, r, s, !0, o) : c = n.intersectTriangle(s, r, a, e.side === Nn, o),
    c === null)
        return null;
    na.copy(o),
    na.applyMatrix4(i.matrixWorld);
    let l = t.ray.origin.distanceTo(na);
    return l < t.near || l > t.far ? null : {
        distance: l,
        point: na.clone(),
        object: i
    }
}
function ia(i, e, t, n, s, r, a, o, c, l) {
    i.getVertexPosition(o, Qr),
    i.getVertexPosition(c, $r),
    i.getVertexPosition(l, ea);
    let h = Jp(i, e, t, n, Qr, $r, ea, Uu);
    if (h) {
        let u = new C;
        Gi.getBarycoord(Uu, Qr, $r, ea, u),
        s && (h.uv = Gi.getInterpolatedAttribute(s, o, c, l, u, new ne)),
        r && (h.uv1 = Gi.getInterpolatedAttribute(r, o, c, l, u, new ne)),
        a && (h.normal = Gi.getInterpolatedAttribute(a, o, c, l, u, new C),
        h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
        let f = {
            a: o,
            b: c,
            c: l,
            normal: new C,
            materialIndex: 0
        };
        Gi.getNormal(Qr, $r, ea, f.normal),
        h.face = f,
        h.barycoord = u
    }
    return h
}
var Ct = class i extends bt {
    constructor(e=1, t=1, n=1, s=1, r=1, a=1) {
        super(),
        this.type = "BoxGeometry",
        this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: s,
            heightSegments: r,
            depthSegments: a
        };
        let o = this;
        s = Math.floor(s),
        r = Math.floor(r),
        a = Math.floor(a);
        let c = []
          , l = []
          , h = []
          , u = []
          , f = 0
          , d = 0;
        m("z", "y", "x", -1, -1, n, t, e, a, r, 0),
        m("z", "y", "x", 1, -1, n, t, -e, a, r, 1),
        m("x", "z", "y", 1, 1, e, n, t, s, a, 2),
        m("x", "z", "y", 1, -1, e, n, -t, s, a, 3),
        m("x", "y", "z", 1, -1, e, t, n, s, r, 4),
        m("x", "y", "z", -1, -1, e, t, -n, s, r, 5),
        this.setIndex(c),
        this.setAttribute("position", new We(l,3)),
        this.setAttribute("normal", new We(h,3)),
        this.setAttribute("uv", new We(u,2));
        function m(b, g, p, x, v, _, P, E, R, L, w) {
            let M = _ / R
              , I = P / L
              , H = _ / 2
              , B = P / 2
              , V = E / 2
              , J = R + 1
              , X = L + 1
              , ee = 0
              , G = 0
              , se = new C;
            for (let fe = 0; fe < X; fe++) {
                let Ee = fe * I - B;
                for (let Ve = 0; Ve < J; Ve++) {
                    let tt = Ve * M - H;
                    se[b] = tt * x,
                    se[g] = Ee * v,
                    se[p] = V,
                    l.push(se.x, se.y, se.z),
                    se[b] = 0,
                    se[g] = 0,
                    se[p] = E > 0 ? 1 : -1,
                    h.push(se.x, se.y, se.z),
                    u.push(Ve / R),
                    u.push(1 - fe / L),
                    ee += 1
                }
            }
            for (let fe = 0; fe < L; fe++)
                for (let Ee = 0; Ee < R; Ee++) {
                    let Ve = f + Ee + J * fe
                      , tt = f + Ee + J * (fe + 1)
                      , j = f + (Ee + 1) + J * (fe + 1)
                      , $ = f + (Ee + 1) + J * fe;
                    c.push(Ve, tt, $),
                    c.push(tt, j, $),
                    G += 6
                }
            o.addGroup(d, G, w),
            d += G,
            f += ee
        }
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)
    }
}
;
function Is(i) {
    let e = {};
    for (let t in i) {
        e[t] = {};
        for (let n in i[t]) {
            let s = i[t][n];
            s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),
            e[t][n] = null) : e[t][n] = s.clone() : Array.isArray(s) ? e[t][n] = s.slice() : e[t][n] = s
        }
    }
    return e
}
function Yt(i) {
    let e = {};
    for (let t = 0; t < i.length; t++) {
        let n = Is(i[t]);
        for (let s in n)
            e[s] = n[s]
    }
    return e
}
function Qp(i) {
    let e = [];
    for (let t = 0; t < i.length; t++)
        e.push(i[t].clone());
    return e
}
function Wd(i) {
    let e = i.getRenderTarget();
    return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : Ge.workingColorSpace
}
var Ri = {
    clone: Is,
    merge: Yt
}
  , $p = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`
  , em = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`
  , Mt = class extends sn {
    static get type() {
        return "ShaderMaterial"
    }
    constructor(e) {
        super(),
        this.isShaderMaterial = !0,
        this.defines = {},
        this.uniforms = {},
        this.uniformsGroups = [],
        this.vertexShader = $p,
        this.fragmentShader = em,
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.forceSinglePass = !0,
        this.extensions = {
            clipCullDistance: !1,
            multiDraw: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv1: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        this.glslVersion = null,
        e !== void 0 && this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.fragmentShader = e.fragmentShader,
        this.vertexShader = e.vertexShader,
        this.uniforms = Is(e.uniforms),
        this.uniformsGroups = Qp(e.uniformsGroups),
        this.defines = Object.assign({}, e.defines),
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.fog = e.fog,
        this.lights = e.lights,
        this.clipping = e.clipping,
        this.extensions = Object.assign({}, e.extensions),
        this.glslVersion = e.glslVersion,
        this
    }
    toJSON(e) {
        let t = super.toJSON(e);
        t.glslVersion = this.glslVersion,
        t.uniforms = {};
        for (let s in this.uniforms) {
            let a = this.uniforms[s].value;
            a && a.isTexture ? t.uniforms[s] = {
                type: "t",
                value: a.toJSON(e).uuid
            } : a && a.isColor ? t.uniforms[s] = {
                type: "c",
                value: a.getHex()
            } : a && a.isVector2 ? t.uniforms[s] = {
                type: "v2",
                value: a.toArray()
            } : a && a.isVector3 ? t.uniforms[s] = {
                type: "v3",
                value: a.toArray()
            } : a && a.isVector4 ? t.uniforms[s] = {
                type: "v4",
                value: a.toArray()
            } : a && a.isMatrix3 ? t.uniforms[s] = {
                type: "m3",
                value: a.toArray()
            } : a && a.isMatrix4 ? t.uniforms[s] = {
                type: "m4",
                value: a.toArray()
            } : t.uniforms[s] = {
                value: a
            }
        }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        t.vertexShader = this.vertexShader,
        t.fragmentShader = this.fragmentShader,
        t.lights = this.lights,
        t.clipping = this.clipping;
        let n = {};
        for (let s in this.extensions)
            this.extensions[s] === !0 && (n[s] = !0);
        return Object.keys(n).length > 0 && (t.extensions = n),
        t
    }
}
  , Aa = class extends vt {
    constructor() {
        super(),
        this.isCamera = !0,
        this.type = "Camera",
        this.matrixWorldInverse = new Le,
        this.projectionMatrix = new Le,
        this.projectionMatrixInverse = new Le,
        this.coordinateSystem = Yn
    }
    copy(e, t) {
        return super.copy(e, t),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
        this.coordinateSystem = e.coordinateSystem,
        this
    }
    getWorldDirection(e) {
        return super.getWorldDirection(e).negate()
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(e, t) {
        super.updateWorldMatrix(e, t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
  , mi = new C
  , Nu = new ne
  , Fu = new ne
  , Rt = class extends Aa {
    constructor(e=50, t=1, n=.1, s=2e3) {
        super(),
        this.isPerspectiveCamera = !0,
        this.type = "PerspectiveCamera",
        this.fov = e,
        this.zoom = 1,
        this.near = n,
        this.far = s,
        this.focus = 10,
        this.aspect = t,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.fov = e.fov,
        this.zoom = e.zoom,
        this.near = e.near,
        this.far = e.far,
        this.focus = e.focus,
        this.aspect = e.aspect,
        this.view = e.view === null ? null : Object.assign({}, e.view),
        this.filmGauge = e.filmGauge,
        this.filmOffset = e.filmOffset,
        this
    }
    setFocalLength(e) {
        let t = .5 * this.getFilmHeight() / e;
        this.fov = Ps * 2 * Math.atan(t),
        this.updateProjectionMatrix()
    }
    getFocalLength() {
        let e = Math.tan(hr * .5 * this.fov);
        return .5 * this.getFilmHeight() / e
    }
    getEffectiveFOV() {
        return Ps * 2 * Math.atan(Math.tan(hr * .5 * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    getViewBounds(e, t, n) {
        mi.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse),
        t.set(mi.x, mi.y).multiplyScalar(-e / mi.z),
        mi.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse),
        n.set(mi.x, mi.y).multiplyScalar(-e / mi.z)
    }
    getViewSize(e, t) {
        return this.getViewBounds(e, Nu, Fu),
        t.subVectors(Fu, Nu)
    }
    setViewOffset(e, t, n, s, r, a) {
        this.aspect = e / t,
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = n,
        this.view.offsetY = s,
        this.view.width = r,
        this.view.height = a,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        let e = this.near
          , t = e * Math.tan(hr * .5 * this.fov) / this.zoom
          , n = 2 * t
          , s = this.aspect * n
          , r = -.5 * s
          , a = this.view;
        if (this.view !== null && this.view.enabled) {
            let c = a.fullWidth
              , l = a.fullHeight;
            r += a.offsetX * s / c,
            t -= a.offsetY * n / l,
            s *= a.width / c,
            n *= a.height / l
        }
        let o = this.filmOffset;
        o !== 0 && (r += e * o / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(r, r + s, t, t - n, e, this.far, this.coordinateSystem),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.fov = this.fov,
        t.object.zoom = this.zoom,
        t.object.near = this.near,
        t.object.far = this.far,
        t.object.focus = this.focus,
        t.object.aspect = this.aspect,
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t.object.filmGauge = this.filmGauge,
        t.object.filmOffset = this.filmOffset,
        t
    }
}
  , ps = -90
  , ms = 1
  , Zc = class extends vt {
    constructor(e, t, n) {
        super(),
        this.type = "CubeCamera",
        this.renderTarget = n,
        this.coordinateSystem = null,
        this.activeMipmapLevel = 0;
        let s = new Rt(ps,ms,e,t);
        s.layers = this.layers,
        this.add(s);
        let r = new Rt(ps,ms,e,t);
        r.layers = this.layers,
        this.add(r);
        let a = new Rt(ps,ms,e,t);
        a.layers = this.layers,
        this.add(a);
        let o = new Rt(ps,ms,e,t);
        o.layers = this.layers,
        this.add(o);
        let c = new Rt(ps,ms,e,t);
        c.layers = this.layers,
        this.add(c);
        let l = new Rt(ps,ms,e,t);
        l.layers = this.layers,
        this.add(l)
    }
    updateCoordinateSystem() {
        let e = this.coordinateSystem
          , t = this.children.concat()
          , [n,s,r,a,o,c] = t;
        for (let l of t)
            this.remove(l);
        if (e === Yn)
            n.up.set(0, 1, 0),
            n.lookAt(1, 0, 0),
            s.up.set(0, 1, 0),
            s.lookAt(-1, 0, 0),
            r.up.set(0, 0, -1),
            r.lookAt(0, 1, 0),
            a.up.set(0, 0, 1),
            a.lookAt(0, -1, 0),
            o.up.set(0, 1, 0),
            o.lookAt(0, 0, 1),
            c.up.set(0, 1, 0),
            c.lookAt(0, 0, -1);
        else if (e === ya)
            n.up.set(0, -1, 0),
            n.lookAt(-1, 0, 0),
            s.up.set(0, -1, 0),
            s.lookAt(1, 0, 0),
            r.up.set(0, 0, 1),
            r.lookAt(0, 1, 0),
            a.up.set(0, 0, -1),
            a.lookAt(0, -1, 0),
            o.up.set(0, -1, 0),
            o.lookAt(0, 0, 1),
            c.up.set(0, -1, 0),
            c.lookAt(0, 0, -1);
        else
            throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
        for (let l of t)
            this.add(l),
            l.updateMatrixWorld()
    }
    update(e, t) {
        this.parent === null && this.updateMatrixWorld();
        let {renderTarget: n, activeMipmapLevel: s} = this;
        this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem,
        this.updateCoordinateSystem());
        let[r,a,o,c,l,h] = this.children
          , u = e.getRenderTarget()
          , f = e.getActiveCubeFace()
          , d = e.getActiveMipmapLevel()
          , m = e.xr.enabled;
        e.xr.enabled = !1;
        let b = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1,
        e.setRenderTarget(n, 0, s),
        e.render(t, r),
        e.setRenderTarget(n, 1, s),
        e.render(t, a),
        e.setRenderTarget(n, 2, s),
        e.render(t, o),
        e.setRenderTarget(n, 3, s),
        e.render(t, c),
        e.setRenderTarget(n, 4, s),
        e.render(t, l),
        n.texture.generateMipmaps = b,
        e.setRenderTarget(n, 5, s),
        e.render(t, h),
        e.setRenderTarget(u, f, d),
        e.xr.enabled = m,
        n.texture.needsPMREMUpdate = !0
    }
}
  , Ra = class extends Nt {
    constructor(e, t, n, s, r, a, o, c, l, h) {
        e = e !== void 0 ? e : [],
        t = t !== void 0 ? t : ws,
        super(e, t, n, s, r, a, o, c, l, h),
        this.isCubeTexture = !0,
        this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
}
  , Jc = class extends kt {
    constructor(e=1, t={}) {
        super(e, e, t),
        this.isWebGLCubeRenderTarget = !0;
        let n = {
            width: e,
            height: e,
            depth: 1
        }
          , s = [n, n, n, n, n, n];
        this.texture = new Ra(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),
        this.texture.isRenderTargetTexture = !0,
        this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1,
        this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Zt
    }
    fromEquirectangularTexture(e, t) {
        this.texture.type = t.type,
        this.texture.colorSpace = t.colorSpace,
        this.texture.generateMipmaps = t.generateMipmaps,
        this.texture.minFilter = t.minFilter,
        this.texture.magFilter = t.magFilter;
        let n = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
            fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
        }
          , s = new Ct(5,5,5)
          , r = new Mt({
            name: "CubemapFromEquirect",
            uniforms: Is(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: Gt,
            blending: Un
        });
        r.uniforms.tEquirect.value = t;
        let a = new be(s,r)
          , o = t.minFilter;
        return t.minFilter === Dn && (t.minFilter = Zt),
        new Zc(1,10,this).update(e, a),
        t.minFilter = o,
        a.geometry.dispose(),
        a.material.dispose(),
        this
    }
    clear(e, t, n, s) {
        let r = e.getRenderTarget();
        for (let a = 0; a < 6; a++)
            e.setRenderTarget(this, a),
            e.clear(t, n, s);
        e.setRenderTarget(r)
    }
}
  , Yo = new C
  , tm = new C
  , nm = new Fe
  , Tn = class {
    constructor(e=new C(1,0,0), t=0) {
        this.isPlane = !0,
        this.normal = e,
        this.constant = t
    }
    set(e, t) {
        return this.normal.copy(e),
        this.constant = t,
        this
    }
    setComponents(e, t, n, s) {
        return this.normal.set(e, t, n),
        this.constant = s,
        this
    }
    setFromNormalAndCoplanarPoint(e, t) {
        return this.normal.copy(e),
        this.constant = -t.dot(this.normal),
        this
    }
    setFromCoplanarPoints(e, t, n) {
        let s = Yo.subVectors(n, t).cross(tm.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(s, e),
        this
    }
    copy(e) {
        return this.normal.copy(e.normal),
        this.constant = e.constant,
        this
    }
    normalize() {
        let e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e),
        this.constant *= e,
        this
    }
    negate() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    }
    distanceToPoint(e) {
        return this.normal.dot(e) + this.constant
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius
    }
    projectPoint(e, t) {
        return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e))
    }
    intersectLine(e, t) {
        let n = e.delta(Yo)
          , s = this.normal.dot(n);
        if (s === 0)
            return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
        let r = -(e.start.dot(this.normal) + this.constant) / s;
        return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r)
    }
    intersectsLine(e) {
        let t = this.distanceToPoint(e.start)
          , n = this.distanceToPoint(e.end);
        return t < 0 && n > 0 || n < 0 && t > 0
    }
    intersectsBox(e) {
        return e.intersectsPlane(this)
    }
    intersectsSphere(e) {
        return e.intersectsPlane(this)
    }
    coplanarPoint(e) {
        return e.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(e, t) {
        let n = t || nm.getNormalMatrix(e)
          , s = this.coplanarPoint(Yo).applyMatrix4(e)
          , r = this.normal.applyMatrix3(n).normalize();
        return this.constant = -s.dot(r),
        this
    }
    translate(e) {
        return this.constant -= e.dot(this.normal),
        this
    }
    equals(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
  , Bi = new nn
  , sa = new C
  , _r = class {
    constructor(e=new Tn, t=new Tn, n=new Tn, s=new Tn, r=new Tn, a=new Tn) {
        this.planes = [e, t, n, s, r, a]
    }
    set(e, t, n, s, r, a) {
        let o = this.planes;
        return o[0].copy(e),
        o[1].copy(t),
        o[2].copy(n),
        o[3].copy(s),
        o[4].copy(r),
        o[5].copy(a),
        this
    }
    copy(e) {
        let t = this.planes;
        for (let n = 0; n < 6; n++)
            t[n].copy(e.planes[n]);
        return this
    }
    setFromProjectionMatrix(e, t=Yn) {
        let n = this.planes
          , s = e.elements
          , r = s[0]
          , a = s[1]
          , o = s[2]
          , c = s[3]
          , l = s[4]
          , h = s[5]
          , u = s[6]
          , f = s[7]
          , d = s[8]
          , m = s[9]
          , b = s[10]
          , g = s[11]
          , p = s[12]
          , x = s[13]
          , v = s[14]
          , _ = s[15];
        if (n[0].setComponents(c - r, f - l, g - d, _ - p).normalize(),
        n[1].setComponents(c + r, f + l, g + d, _ + p).normalize(),
        n[2].setComponents(c + a, f + h, g + m, _ + x).normalize(),
        n[3].setComponents(c - a, f - h, g - m, _ - x).normalize(),
        n[4].setComponents(c - o, f - u, g - b, _ - v).normalize(),
        t === Yn)
            n[5].setComponents(c + o, f + u, g + b, _ + v).normalize();
        else if (t === ya)
            n[5].setComponents(o, u, b, v).normalize();
        else
            throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
        return this
    }
    intersectsObject(e) {
        if (e.boundingSphere !== void 0)
            e.boundingSphere === null && e.computeBoundingSphere(),
            Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
        else {
            let t = e.geometry;
            t.boundingSphere === null && t.computeBoundingSphere(),
            Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)
        }
        return this.intersectsSphere(Bi)
    }
    intersectsSprite(e) {
        return Bi.center.set(0, 0, 0),
        Bi.radius = .7071067811865476,
        Bi.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(Bi)
    }
    intersectsSphere(e) {
        let t = this.planes
          , n = e.center
          , s = -e.radius;
        for (let r = 0; r < 6; r++)
            if (t[r].distanceToPoint(n) < s)
                return !1;
        return !0
    }
    intersectsBox(e) {
        let t = this.planes;
        for (let n = 0; n < 6; n++) {
            let s = t[n];
            if (sa.x = s.normal.x > 0 ? e.max.x : e.min.x,
            sa.y = s.normal.y > 0 ? e.max.y : e.min.y,
            sa.z = s.normal.z > 0 ? e.max.z : e.min.z,
            s.distanceToPoint(sa) < 0)
                return !1
        }
        return !0
    }
    containsPoint(e) {
        let t = this.planes;
        for (let n = 0; n < 6; n++)
            if (t[n].distanceToPoint(e) < 0)
                return !1;
        return !0
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
;
function Xd() {
    let i = null
      , e = !1
      , t = null
      , n = null;
    function s(r, a) {
        t(r, a),
        n = i.requestAnimationFrame(s)
    }
    return {
        start: function() {
            e !== !0 && t !== null && (n = i.requestAnimationFrame(s),
            e = !0)
        },
        stop: function() {
            i.cancelAnimationFrame(n),
            e = !1
        },
        setAnimationLoop: function(r) {
            t = r
        },
        setContext: function(r) {
            i = r
        }
    }
}
function im(i) {
    let e = new WeakMap;
    function t(o, c) {
        let l = o.array
          , h = o.usage
          , u = l.byteLength
          , f = i.createBuffer();
        i.bindBuffer(c, f),
        i.bufferData(c, l, h),
        o.onUploadCallback();
        let d;
        if (l instanceof Float32Array)
            d = i.FLOAT;
        else if (l instanceof Uint16Array)
            o.isFloat16BufferAttribute ? d = i.HALF_FLOAT : d = i.UNSIGNED_SHORT;
        else if (l instanceof Int16Array)
            d = i.SHORT;
        else if (l instanceof Uint32Array)
            d = i.UNSIGNED_INT;
        else if (l instanceof Int32Array)
            d = i.INT;
        else if (l instanceof Int8Array)
            d = i.BYTE;
        else if (l instanceof Uint8Array)
            d = i.UNSIGNED_BYTE;
        else if (l instanceof Uint8ClampedArray)
            d = i.UNSIGNED_BYTE;
        else
            throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
        return {
            buffer: f,
            type: d,
            bytesPerElement: l.BYTES_PER_ELEMENT,
            version: o.version,
            size: u
        }
    }
    function n(o, c, l) {
        let h = c.array
          , u = c.updateRanges;
        if (i.bindBuffer(l, o),
        u.length === 0)
            i.bufferSubData(l, 0, h);
        else {
            u.sort( (d, m) => d.start - m.start);
            let f = 0;
            for (let d = 1; d < u.length; d++) {
                let m = u[f]
                  , b = u[d];
                b.start <= m.start + m.count + 1 ? m.count = Math.max(m.count, b.start + b.count - m.start) : (++f,
                u[f] = b)
            }
            u.length = f + 1;
            for (let d = 0, m = u.length; d < m; d++) {
                let b = u[d];
                i.bufferSubData(l, b.start * h.BYTES_PER_ELEMENT, h, b.start, b.count)
            }
            c.clearUpdateRanges()
        }
        c.onUploadCallback()
    }
    function s(o) {
        return o.isInterleavedBufferAttribute && (o = o.data),
        e.get(o)
    }
    function r(o) {
        o.isInterleavedBufferAttribute && (o = o.data);
        let c = e.get(o);
        c && (i.deleteBuffer(c.buffer),
        e.delete(o))
    }
    function a(o, c) {
        if (o.isInterleavedBufferAttribute && (o = o.data),
        o.isGLBufferAttribute) {
            let h = e.get(o);
            (!h || h.version < o.version) && e.set(o, {
                buffer: o.buffer,
                type: o.type,
                bytesPerElement: o.elementSize,
                version: o.version
            });
            return
        }
        let l = e.get(o);
        if (l === void 0)
            e.set(o, t(o, c));
        else if (l.version < o.version) {
            if (l.size !== o.array.byteLength)
                throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
            n(l.buffer, o, c),
            l.version = o.version
        }
    }
    return {
        get: s,
        remove: r,
        update: a
    }
}
var yi = class i extends bt {
    constructor(e=1, t=1, n=1, s=1) {
        super(),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: s
        };
        let r = e / 2
          , a = t / 2
          , o = Math.floor(n)
          , c = Math.floor(s)
          , l = o + 1
          , h = c + 1
          , u = e / o
          , f = t / c
          , d = []
          , m = []
          , b = []
          , g = [];
        for (let p = 0; p < h; p++) {
            let x = p * f - a;
            for (let v = 0; v < l; v++) {
                let _ = v * u - r;
                m.push(_, -x, 0),
                b.push(0, 0, 1),
                g.push(v / o),
                g.push(1 - p / c)
            }
        }
        for (let p = 0; p < c; p++)
            for (let x = 0; x < o; x++) {
                let v = x + l * p
                  , _ = x + l * (p + 1)
                  , P = x + 1 + l * (p + 1)
                  , E = x + 1 + l * p;
                d.push(v, _, E),
                d.push(_, P, E)
            }
        this.setIndex(d),
        this.setAttribute("position", new We(m,3)),
        this.setAttribute("normal", new We(b,3)),
        this.setAttribute("uv", new We(g,2))
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new i(e.width,e.height,e.widthSegments,e.heightSegments)
    }
}
  , sm = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`
  , rm = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`
  , am = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`
  , om = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , cm = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`
  , lm = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`
  , hm = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`
  , um = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`
  , dm = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`
  , fm = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`
  , pm = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`
  , mm = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`
  , gm = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`
  , bm = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`
  , _m = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`
  , xm = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`
  , vm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`
  , ym = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`
  , Mm = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`
  , Sm = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`
  , wm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`
  , Em = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`
  , Tm = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`
  , Am = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`
  , Rm = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`
  , Cm = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`
  , Pm = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`
  , Im = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`
  , Lm = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`
  , Dm = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`
  , Um = "gl_FragColor = linearToOutputTexel( gl_FragColor );"
  , Nm = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`
  , Fm = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`
  , Om = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`
  , Bm = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`
  , km = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`
  , zm = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`
  , Hm = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`
  , Vm = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`
  , Gm = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`
  , Wm = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`
  , Xm = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`
  , qm = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`
  , jm = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`
  , Ym = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`
  , Km = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`
  , Zm = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`
  , Jm = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`
  , Qm = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`
  , $m = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`
  , eg = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`
  , tg = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`
  , ng = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`
  , ig = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`
  , sg = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`
  , rg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`
  , ag = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`
  , og = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , cg = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , lg = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`
  , hg = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`
  , ug = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`
  , dg = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`
  , fg = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , pg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`
  , mg = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`
  , gg = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`
  , bg = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`
  , _g = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`
  , xg = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`
  , vg = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`
  , yg = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`
  , Mg = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`
  , Sg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , wg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , Eg = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`
  , Tg = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`
  , Ag = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`
  , Rg = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`
  , Cg = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`
  , Pg = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`
  , Ig = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`
  , Lg = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`
  , Dg = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`
  , Ug = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`
  , Ng = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`
  , Fg = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`
  , Og = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`
  , Bg = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`
  , kg = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`
  , zg = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`
  , Hg = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`
  , Vg = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`
  , Gg = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`
  , Wg = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`
  , Xg = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`
  , qg = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`
  , jg = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`
  , Yg = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`
  , Kg = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`
  , Zg = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`
  , Jg = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`
  , Qg = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`
  , $g = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , e0 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , t0 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`
  , n0 = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`
  , i0 = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`
  , s0 = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , r0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , a0 = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , o0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , c0 = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , l0 = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`
  , h0 = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`
  , u0 = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`
  , d0 = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`
  , f0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`
  , p0 = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , m0 = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , g0 = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , b0 = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`
  , _0 = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , x0 = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , v0 = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , y0 = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`
  , M0 = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , S0 = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`
  , w0 = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`
  , E0 = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , T0 = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , A0 = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`
  , R0 = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , C0 = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , P0 = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , I0 = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`
  , L0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , D0 = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , U0 = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
  , N0 = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , F0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
  , He = {
    alphahash_fragment: sm,
    alphahash_pars_fragment: rm,
    alphamap_fragment: am,
    alphamap_pars_fragment: om,
    alphatest_fragment: cm,
    alphatest_pars_fragment: lm,
    aomap_fragment: hm,
    aomap_pars_fragment: um,
    batching_pars_vertex: dm,
    batching_vertex: fm,
    begin_vertex: pm,
    beginnormal_vertex: mm,
    bsdfs: gm,
    iridescence_fragment: bm,
    bumpmap_pars_fragment: _m,
    clipping_planes_fragment: xm,
    clipping_planes_pars_fragment: vm,
    clipping_planes_pars_vertex: ym,
    clipping_planes_vertex: Mm,
    color_fragment: Sm,
    color_pars_fragment: wm,
    color_pars_vertex: Em,
    color_vertex: Tm,
    common: Am,
    cube_uv_reflection_fragment: Rm,
    defaultnormal_vertex: Cm,
    displacementmap_pars_vertex: Pm,
    displacementmap_vertex: Im,
    emissivemap_fragment: Lm,
    emissivemap_pars_fragment: Dm,
    colorspace_fragment: Um,
    colorspace_pars_fragment: Nm,
    envmap_fragment: Fm,
    envmap_common_pars_fragment: Om,
    envmap_pars_fragment: Bm,
    envmap_pars_vertex: km,
    envmap_physical_pars_fragment: Zm,
    envmap_vertex: zm,
    fog_vertex: Hm,
    fog_pars_vertex: Vm,
    fog_fragment: Gm,
    fog_pars_fragment: Wm,
    gradientmap_pars_fragment: Xm,
    lightmap_pars_fragment: qm,
    lights_lambert_fragment: jm,
    lights_lambert_pars_fragment: Ym,
    lights_pars_begin: Km,
    lights_toon_fragment: Jm,
    lights_toon_pars_fragment: Qm,
    lights_phong_fragment: $m,
    lights_phong_pars_fragment: eg,
    lights_physical_fragment: tg,
    lights_physical_pars_fragment: ng,
    lights_fragment_begin: ig,
    lights_fragment_maps: sg,
    lights_fragment_end: rg,
    logdepthbuf_fragment: ag,
    logdepthbuf_pars_fragment: og,
    logdepthbuf_pars_vertex: cg,
    logdepthbuf_vertex: lg,
    map_fragment: hg,
    map_pars_fragment: ug,
    map_particle_fragment: dg,
    map_particle_pars_fragment: fg,
    metalnessmap_fragment: pg,
    metalnessmap_pars_fragment: mg,
    morphinstance_vertex: gg,
    morphcolor_vertex: bg,
    morphnormal_vertex: _g,
    morphtarget_pars_vertex: xg,
    morphtarget_vertex: vg,
    normal_fragment_begin: yg,
    normal_fragment_maps: Mg,
    normal_pars_fragment: Sg,
    normal_pars_vertex: wg,
    normal_vertex: Eg,
    normalmap_pars_fragment: Tg,
    clearcoat_normal_fragment_begin: Ag,
    clearcoat_normal_fragment_maps: Rg,
    clearcoat_pars_fragment: Cg,
    iridescence_pars_fragment: Pg,
    opaque_fragment: Ig,
    packing: Lg,
    premultiplied_alpha_fragment: Dg,
    project_vertex: Ug,
    dithering_fragment: Ng,
    dithering_pars_fragment: Fg,
    roughnessmap_fragment: Og,
    roughnessmap_pars_fragment: Bg,
    shadowmap_pars_fragment: kg,
    shadowmap_pars_vertex: zg,
    shadowmap_vertex: Hg,
    shadowmask_pars_fragment: Vg,
    skinbase_vertex: Gg,
    skinning_pars_vertex: Wg,
    skinning_vertex: Xg,
    skinnormal_vertex: qg,
    specularmap_fragment: jg,
    specularmap_pars_fragment: Yg,
    tonemapping_fragment: Kg,
    tonemapping_pars_fragment: Zg,
    transmission_fragment: Jg,
    transmission_pars_fragment: Qg,
    uv_pars_fragment: $g,
    uv_pars_vertex: e0,
    uv_vertex: t0,
    worldpos_vertex: n0,
    background_vert: i0,
    background_frag: s0,
    backgroundCube_vert: r0,
    backgroundCube_frag: a0,
    cube_vert: o0,
    cube_frag: c0,
    depth_vert: l0,
    depth_frag: h0,
    distanceRGBA_vert: u0,
    distanceRGBA_frag: d0,
    equirect_vert: f0,
    equirect_frag: p0,
    linedashed_vert: m0,
    linedashed_frag: g0,
    meshbasic_vert: b0,
    meshbasic_frag: _0,
    meshlambert_vert: x0,
    meshlambert_frag: v0,
    meshmatcap_vert: y0,
    meshmatcap_frag: M0,
    meshnormal_vert: S0,
    meshnormal_frag: w0,
    meshphong_vert: E0,
    meshphong_frag: T0,
    meshphysical_vert: A0,
    meshphysical_frag: R0,
    meshtoon_vert: C0,
    meshtoon_frag: P0,
    points_vert: I0,
    points_frag: L0,
    shadow_vert: D0,
    shadow_frag: U0,
    sprite_vert: N0,
    sprite_frag: F0
}
  , re = {
    common: {
        diffuse: {
            value: new ue(16777215)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new Fe
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new Fe
        },
        alphaTest: {
            value: 0
        }
    },
    specularmap: {
        specularMap: {
            value: null
        },
        specularMapTransform: {
            value: new Fe
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        envMapRotation: {
            value: new Fe
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        ior: {
            value: 1.5
        },
        refractionRatio: {
            value: .98
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        },
        aoMapTransform: {
            value: new Fe
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        },
        lightMapTransform: {
            value: new Fe
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpMapTransform: {
            value: new Fe
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalMapTransform: {
            value: new Fe
        },
        normalScale: {
            value: new ne(1,1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementMapTransform: {
            value: new Fe
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        },
        emissiveMapTransform: {
            value: new Fe
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        },
        metalnessMapTransform: {
            value: new Fe
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        },
        roughnessMapTransform: {
            value: new Fe
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 25e-5
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2e3
        },
        fogColor: {
            value: new ue(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMap: {
            value: []
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotLightMap: {
            value: []
        },
        spotShadowMap: {
            value: []
        },
        spotLightMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMap: {
            value: []
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        ltc_1: {
            value: null
        },
        ltc_2: {
            value: null
        }
    },
    points: {
        diffuse: {
            value: new ue(16777215)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new Fe
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new Fe
        }
    },
    sprite: {
        diffuse: {
            value: new ue(16777215)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new ne(.5,.5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new Fe
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new Fe
        },
        alphaTest: {
            value: 0
        }
    }
}
  , Ln = {
    basic: {
        uniforms: Yt([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.fog]),
        vertexShader: He.meshbasic_vert,
        fragmentShader: He.meshbasic_frag
    },
    lambert: {
        uniforms: Yt([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.fog, re.lights, {
            emissive: {
                value: new ue(0)
            }
        }]),
        vertexShader: He.meshlambert_vert,
        fragmentShader: He.meshlambert_frag
    },
    phong: {
        uniforms: Yt([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.fog, re.lights, {
            emissive: {
                value: new ue(0)
            },
            specular: {
                value: new ue(1118481)
            },
            shininess: {
                value: 30
            }
        }]),
        vertexShader: He.meshphong_vert,
        fragmentShader: He.meshphong_frag
    },
    standard: {
        uniforms: Yt([re.common, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.roughnessmap, re.metalnessmap, re.fog, re.lights, {
            emissive: {
                value: new ue(0)
            },
            roughness: {
                value: 1
            },
            metalness: {
                value: 0
            },
            envMapIntensity: {
                value: 1
            }
        }]),
        vertexShader: He.meshphysical_vert,
        fragmentShader: He.meshphysical_frag
    },
    toon: {
        uniforms: Yt([re.common, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.gradientmap, re.fog, re.lights, {
            emissive: {
                value: new ue(0)
            }
        }]),
        vertexShader: He.meshtoon_vert,
        fragmentShader: He.meshtoon_frag
    },
    matcap: {
        uniforms: Yt([re.common, re.bumpmap, re.normalmap, re.displacementmap, re.fog, {
            matcap: {
                value: null
            }
        }]),
        vertexShader: He.meshmatcap_vert,
        fragmentShader: He.meshmatcap_frag
    },
    points: {
        uniforms: Yt([re.points, re.fog]),
        vertexShader: He.points_vert,
        fragmentShader: He.points_frag
    },
    dashed: {
        uniforms: Yt([re.common, re.fog, {
            scale: {
                value: 1
            },
            dashSize: {
                value: 1
            },
            totalSize: {
                value: 2
            }
        }]),
        vertexShader: He.linedashed_vert,
        fragmentShader: He.linedashed_frag
    },
    depth: {
        uniforms: Yt([re.common, re.displacementmap]),
        vertexShader: He.depth_vert,
        fragmentShader: He.depth_frag
    },
    normal: {
        uniforms: Yt([re.common, re.bumpmap, re.normalmap, re.displacementmap, {
            opacity: {
                value: 1
            }
        }]),
        vertexShader: He.meshnormal_vert,
        fragmentShader: He.meshnormal_frag
    },
    sprite: {
        uniforms: Yt([re.sprite, re.fog]),
        vertexShader: He.sprite_vert,
        fragmentShader: He.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new Fe
            },
            t2D: {
                value: null
            },
            backgroundIntensity: {
                value: 1
            }
        },
        vertexShader: He.background_vert,
        fragmentShader: He.background_frag
    },
    backgroundCube: {
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            backgroundBlurriness: {
                value: 0
            },
            backgroundIntensity: {
                value: 1
            },
            backgroundRotation: {
                value: new Fe
            }
        },
        vertexShader: He.backgroundCube_vert,
        fragmentShader: He.backgroundCube_frag
    },
    cube: {
        uniforms: {
            tCube: {
                value: null
            },
            tFlip: {
                value: -1
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: He.cube_vert,
        fragmentShader: He.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: He.equirect_vert,
        fragmentShader: He.equirect_frag
    },
    distanceRGBA: {
        uniforms: Yt([re.common, re.displacementmap, {
            referencePosition: {
                value: new C
            },
            nearDistance: {
                value: 1
            },
            farDistance: {
                value: 1e3
            }
        }]),
        vertexShader: He.distanceRGBA_vert,
        fragmentShader: He.distanceRGBA_frag
    },
    shadow: {
        uniforms: Yt([re.lights, re.fog, {
            color: {
                value: new ue(0)
            },
            opacity: {
                value: 1
            }
        }]),
        vertexShader: He.shadow_vert,
        fragmentShader: He.shadow_frag
    }
};
Ln.physical = {
    uniforms: Yt([Ln.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatMapTransform: {
            value: new Fe
        },
        clearcoatNormalMap: {
            value: null
        },
        clearcoatNormalMapTransform: {
            value: new Fe
        },
        clearcoatNormalScale: {
            value: new ne(1,1)
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatRoughnessMapTransform: {
            value: new Fe
        },
        dispersion: {
            value: 0
        },
        iridescence: {
            value: 0
        },
        iridescenceMap: {
            value: null
        },
        iridescenceMapTransform: {
            value: new Fe
        },
        iridescenceIOR: {
            value: 1.3
        },
        iridescenceThicknessMinimum: {
            value: 100
        },
        iridescenceThicknessMaximum: {
            value: 400
        },
        iridescenceThicknessMap: {
            value: null
        },
        iridescenceThicknessMapTransform: {
            value: new Fe
        },
        sheen: {
            value: 0
        },
        sheenColor: {
            value: new ue(0)
        },
        sheenColorMap: {
            value: null
        },
        sheenColorMapTransform: {
            value: new Fe
        },
        sheenRoughness: {
            value: 1
        },
        sheenRoughnessMap: {
            value: null
        },
        sheenRoughnessMapTransform: {
            value: new Fe
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        },
        transmissionMapTransform: {
            value: new Fe
        },
        transmissionSamplerSize: {
            value: new ne
        },
        transmissionSamplerMap: {
            value: null
        },
        thickness: {
            value: 0
        },
        thicknessMap: {
            value: null
        },
        thicknessMapTransform: {
            value: new Fe
        },
        attenuationDistance: {
            value: 0
        },
        attenuationColor: {
            value: new ue(0)
        },
        specularColor: {
            value: new ue(1,1,1)
        },
        specularColorMap: {
            value: null
        },
        specularColorMapTransform: {
            value: new Fe
        },
        specularIntensity: {
            value: 1
        },
        specularIntensityMap: {
            value: null
        },
        specularIntensityMapTransform: {
            value: new Fe
        },
        anisotropyVector: {
            value: new ne
        },
        anisotropyMap: {
            value: null
        },
        anisotropyMapTransform: {
            value: new Fe
        }
    }]),
    vertexShader: He.meshphysical_vert,
    fragmentShader: He.meshphysical_frag
};
var ra = {
    r: 0,
    b: 0,
    g: 0
}
  , ki = new Fn
  , O0 = new Le;
function B0(i, e, t, n, s, r, a) {
    let o = new ue(0), c = r === !0 ? 0 : 1, l, h, u = null, f = 0, d = null;
    function m(x) {
        let v = x.isScene === !0 ? x.background : null;
        return v && v.isTexture && (v = (x.backgroundBlurriness > 0 ? t : e).get(v)),
        v
    }
    function b(x) {
        let v = !1
          , _ = m(x);
        _ === null ? p(o, c) : _ && _.isColor && (p(_, 1),
        v = !0);
        let P = i.xr.getEnvironmentBlendMode();
        P === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : P === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
        (i.autoClear || v) && (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil))
    }
    function g(x, v) {
        let _ = m(v);
        _ && (_.isCubeTexture || _.mapping === Qa) ? (h === void 0 && (h = new be(new Ct(1,1,1),new Mt({
            name: "BackgroundCubeMaterial",
            uniforms: Is(Ln.backgroundCube.uniforms),
            vertexShader: Ln.backgroundCube.vertexShader,
            fragmentShader: Ln.backgroundCube.fragmentShader,
            side: Gt,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })),
        h.geometry.deleteAttribute("normal"),
        h.geometry.deleteAttribute("uv"),
        h.onBeforeRender = function(P, E, R) {
            this.matrixWorld.copyPosition(R.matrixWorld)
        }
        ,
        Object.defineProperty(h.material, "envMap", {
            get: function() {
                return this.uniforms.envMap.value
            }
        }),
        s.update(h)),
        ki.copy(v.backgroundRotation),
        ki.x *= -1,
        ki.y *= -1,
        ki.z *= -1,
        _.isCubeTexture && _.isRenderTargetTexture === !1 && (ki.y *= -1,
        ki.z *= -1),
        h.material.uniforms.envMap.value = _,
        h.material.uniforms.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1,
        h.material.uniforms.backgroundBlurriness.value = v.backgroundBlurriness,
        h.material.uniforms.backgroundIntensity.value = v.backgroundIntensity,
        h.material.uniforms.backgroundRotation.value.setFromMatrix4(O0.makeRotationFromEuler(ki)),
        h.material.toneMapped = Ge.getTransfer(_.colorSpace) !== et,
        (u !== _ || f !== _.version || d !== i.toneMapping) && (h.material.needsUpdate = !0,
        u = _,
        f = _.version,
        d = i.toneMapping),
        h.layers.enableAll(),
        x.unshift(h, h.geometry, h.material, 0, 0, null)) : _ && _.isTexture && (l === void 0 && (l = new be(new yi(2,2),new Mt({
            name: "BackgroundMaterial",
            uniforms: Is(Ln.background.uniforms),
            vertexShader: Ln.background.vertexShader,
            fragmentShader: Ln.background.fragmentShader,
            side: Nn,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })),
        l.geometry.deleteAttribute("normal"),
        Object.defineProperty(l.material, "map", {
            get: function() {
                return this.uniforms.t2D.value
            }
        }),
        s.update(l)),
        l.material.uniforms.t2D.value = _,
        l.material.uniforms.backgroundIntensity.value = v.backgroundIntensity,
        l.material.toneMapped = Ge.getTransfer(_.colorSpace) !== et,
        _.matrixAutoUpdate === !0 && _.updateMatrix(),
        l.material.uniforms.uvTransform.value.copy(_.matrix),
        (u !== _ || f !== _.version || d !== i.toneMapping) && (l.material.needsUpdate = !0,
        u = _,
        f = _.version,
        d = i.toneMapping),
        l.layers.enableAll(),
        x.unshift(l, l.geometry, l.material, 0, 0, null))
    }
    function p(x, v) {
        x.getRGB(ra, Wd(i)),
        n.buffers.color.setClear(ra.r, ra.g, ra.b, v, a)
    }
    return {
        getClearColor: function() {
            return o
        },
        setClearColor: function(x, v=1) {
            o.set(x),
            c = v,
            p(o, c)
        },
        getClearAlpha: function() {
            return c
        },
        setClearAlpha: function(x) {
            c = x,
            p(o, c)
        },
        render: b,
        addToRenderList: g
    }
}
function k0(i, e) {
    let t = i.getParameter(i.MAX_VERTEX_ATTRIBS)
      , n = {}
      , s = f(null)
      , r = s
      , a = !1;
    function o(M, I, H, B, V) {
        let J = !1
          , X = u(B, H, I);
        r !== X && (r = X,
        l(r.object)),
        J = d(M, B, H, V),
        J && m(M, B, H, V),
        V !== null && e.update(V, i.ELEMENT_ARRAY_BUFFER),
        (J || a) && (a = !1,
        _(M, I, H, B),
        V !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(V).buffer))
    }
    function c() {
        return i.createVertexArray()
    }
    function l(M) {
        return i.bindVertexArray(M)
    }
    function h(M) {
        return i.deleteVertexArray(M)
    }
    function u(M, I, H) {
        let B = H.wireframe === !0
          , V = n[M.id];
        V === void 0 && (V = {},
        n[M.id] = V);
        let J = V[I.id];
        J === void 0 && (J = {},
        V[I.id] = J);
        let X = J[B];
        return X === void 0 && (X = f(c()),
        J[B] = X),
        X
    }
    function f(M) {
        let I = []
          , H = []
          , B = [];
        for (let V = 0; V < t; V++)
            I[V] = 0,
            H[V] = 0,
            B[V] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: I,
            enabledAttributes: H,
            attributeDivisors: B,
            object: M,
            attributes: {},
            index: null
        }
    }
    function d(M, I, H, B) {
        let V = r.attributes
          , J = I.attributes
          , X = 0
          , ee = H.getAttributes();
        for (let G in ee)
            if (ee[G].location >= 0) {
                let fe = V[G]
                  , Ee = J[G];
                if (Ee === void 0 && (G === "instanceMatrix" && M.instanceMatrix && (Ee = M.instanceMatrix),
                G === "instanceColor" && M.instanceColor && (Ee = M.instanceColor)),
                fe === void 0 || fe.attribute !== Ee || Ee && fe.data !== Ee.data)
                    return !0;
                X++
            }
        return r.attributesNum !== X || r.index !== B
    }
    function m(M, I, H, B) {
        let V = {}
          , J = I.attributes
          , X = 0
          , ee = H.getAttributes();
        for (let G in ee)
            if (ee[G].location >= 0) {
                let fe = J[G];
                fe === void 0 && (G === "instanceMatrix" && M.instanceMatrix && (fe = M.instanceMatrix),
                G === "instanceColor" && M.instanceColor && (fe = M.instanceColor));
                let Ee = {};
                Ee.attribute = fe,
                fe && fe.data && (Ee.data = fe.data),
                V[G] = Ee,
                X++
            }
        r.attributes = V,
        r.attributesNum = X,
        r.index = B
    }
    function b() {
        let M = r.newAttributes;
        for (let I = 0, H = M.length; I < H; I++)
            M[I] = 0
    }
    function g(M) {
        p(M, 0)
    }
    function p(M, I) {
        let H = r.newAttributes
          , B = r.enabledAttributes
          , V = r.attributeDivisors;
        H[M] = 1,
        B[M] === 0 && (i.enableVertexAttribArray(M),
        B[M] = 1),
        V[M] !== I && (i.vertexAttribDivisor(M, I),
        V[M] = I)
    }
    function x() {
        let M = r.newAttributes
          , I = r.enabledAttributes;
        for (let H = 0, B = I.length; H < B; H++)
            I[H] !== M[H] && (i.disableVertexAttribArray(H),
            I[H] = 0)
    }
    function v(M, I, H, B, V, J, X) {
        X === !0 ? i.vertexAttribIPointer(M, I, H, V, J) : i.vertexAttribPointer(M, I, H, B, V, J)
    }
    function _(M, I, H, B) {
        b();
        let V = B.attributes
          , J = H.getAttributes()
          , X = I.defaultAttributeValues;
        for (let ee in J) {
            let G = J[ee];
            if (G.location >= 0) {
                let se = V[ee];
                if (se === void 0 && (ee === "instanceMatrix" && M.instanceMatrix && (se = M.instanceMatrix),
                ee === "instanceColor" && M.instanceColor && (se = M.instanceColor)),
                se !== void 0) {
                    let fe = se.normalized
                      , Ee = se.itemSize
                      , Ve = e.get(se);
                    if (Ve === void 0)
                        continue;
                    let tt = Ve.buffer
                      , j = Ve.type
                      , $ = Ve.bytesPerElement
                      , xe = j === i.INT || j === i.UNSIGNED_INT || se.gpuType === Nl;
                    if (se.isInterleavedBufferAttribute) {
                        let ae = se.data
                          , Te = ae.stride
                          , De = se.offset;
                        if (ae.isInstancedInterleavedBuffer) {
                            for (let ke = 0; ke < G.locationSize; ke++)
                                p(G.location + ke, ae.meshPerAttribute);
                            M.isInstancedMesh !== !0 && B._maxInstanceCount === void 0 && (B._maxInstanceCount = ae.meshPerAttribute * ae.count)
                        } else
                            for (let ke = 0; ke < G.locationSize; ke++)
                                g(G.location + ke);
                        i.bindBuffer(i.ARRAY_BUFFER, tt);
                        for (let ke = 0; ke < G.locationSize; ke++)
                            v(G.location + ke, Ee / G.locationSize, j, fe, Te * $, (De + Ee / G.locationSize * ke) * $, xe)
                    } else {
                        if (se.isInstancedBufferAttribute) {
                            for (let ae = 0; ae < G.locationSize; ae++)
                                p(G.location + ae, se.meshPerAttribute);
                            M.isInstancedMesh !== !0 && B._maxInstanceCount === void 0 && (B._maxInstanceCount = se.meshPerAttribute * se.count)
                        } else
                            for (let ae = 0; ae < G.locationSize; ae++)
                                g(G.location + ae);
                        i.bindBuffer(i.ARRAY_BUFFER, tt);
                        for (let ae = 0; ae < G.locationSize; ae++)
                            v(G.location + ae, Ee / G.locationSize, j, fe, Ee * $, Ee / G.locationSize * ae * $, xe)
                    }
                } else if (X !== void 0) {
                    let fe = X[ee];
                    if (fe !== void 0)
                        switch (fe.length) {
                        case 2:
                            i.vertexAttrib2fv(G.location, fe);
                            break;
                        case 3:
                            i.vertexAttrib3fv(G.location, fe);
                            break;
                        case 4:
                            i.vertexAttrib4fv(G.location, fe);
                            break;
                        default:
                            i.vertexAttrib1fv(G.location, fe)
                        }
                }
            }
        }
        x()
    }
    function P() {
        L();
        for (let M in n) {
            let I = n[M];
            for (let H in I) {
                let B = I[H];
                for (let V in B)
                    h(B[V].object),
                    delete B[V];
                delete I[H]
            }
            delete n[M]
        }
    }
    function E(M) {
        if (n[M.id] === void 0)
            return;
        let I = n[M.id];
        for (let H in I) {
            let B = I[H];
            for (let V in B)
                h(B[V].object),
                delete B[V];
            delete I[H]
        }
        delete n[M.id]
    }
    function R(M) {
        for (let I in n) {
            let H = n[I];
            if (H[M.id] === void 0)
                continue;
            let B = H[M.id];
            for (let V in B)
                h(B[V].object),
                delete B[V];
            delete H[M.id]
        }
    }
    function L() {
        w(),
        a = !0,
        r !== s && (r = s,
        l(r.object))
    }
    function w() {
        s.geometry = null,
        s.program = null,
        s.wireframe = !1
    }
    return {
        setup: o,
        reset: L,
        resetDefaultState: w,
        dispose: P,
        releaseStatesOfGeometry: E,
        releaseStatesOfProgram: R,
        initAttributes: b,
        enableAttribute: g,
        disableUnusedAttributes: x
    }
}
function z0(i, e, t) {
    let n;
    function s(l) {
        n = l
    }
    function r(l, h) {
        i.drawArrays(n, l, h),
        t.update(h, n, 1)
    }
    function a(l, h, u) {
        u !== 0 && (i.drawArraysInstanced(n, l, h, u),
        t.update(h, n, u))
    }
    function o(l, h, u) {
        if (u === 0)
            return;
        e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, h, 0, u);
        let d = 0;
        for (let m = 0; m < u; m++)
            d += h[m];
        t.update(d, n, 1)
    }
    function c(l, h, u, f) {
        if (u === 0)
            return;
        let d = e.get("WEBGL_multi_draw");
        if (d === null)
            for (let m = 0; m < l.length; m++)
                a(l[m], h[m], f[m]);
        else {
            d.multiDrawArraysInstancedWEBGL(n, l, 0, h, 0, f, 0, u);
            let m = 0;
            for (let b = 0; b < u; b++)
                m += h[b] * f[b];
            t.update(m, n, 1)
        }
    }
    this.setMode = s,
    this.render = r,
    this.renderInstances = a,
    this.renderMultiDraw = o,
    this.renderMultiDrawInstances = c
}
function H0(i, e, t, n) {
    let s;
    function r() {
        if (s !== void 0)
            return s;
        if (e.has("EXT_texture_filter_anisotropic") === !0) {
            let R = e.get("EXT_texture_filter_anisotropic");
            s = i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        } else
            s = 0;
        return s
    }
    function a(R) {
        return !(R !== gn && n.convert(R) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))
    }
    function o(R) {
        let L = R === rn && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
        return !(R !== Jn && n.convert(R) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && R !== Rn && !L)
    }
    function c(R) {
        if (R === "highp") {
            if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
                return "highp";
            R = "mediump"
        }
        return R === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
    }
    let l = t.precision !== void 0 ? t.precision : "highp"
      , h = c(l);
    h !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", h, "instead."),
    l = h);
    let u = t.logarithmicDepthBuffer === !0
      , f = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control")
      , d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS)
      , m = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
      , b = i.getParameter(i.MAX_TEXTURE_SIZE)
      , g = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE)
      , p = i.getParameter(i.MAX_VERTEX_ATTRIBS)
      , x = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS)
      , v = i.getParameter(i.MAX_VARYING_VECTORS)
      , _ = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS)
      , P = m > 0
      , E = i.getParameter(i.MAX_SAMPLES);
    return {
        isWebGL2: !0,
        getMaxAnisotropy: r,
        getMaxPrecision: c,
        textureFormatReadable: a,
        textureTypeReadable: o,
        precision: l,
        logarithmicDepthBuffer: u,
        reverseDepthBuffer: f,
        maxTextures: d,
        maxVertexTextures: m,
        maxTextureSize: b,
        maxCubemapSize: g,
        maxAttributes: p,
        maxVertexUniforms: x,
        maxVaryings: v,
        maxFragmentUniforms: _,
        vertexTextures: P,
        maxSamples: E
    }
}
function V0(i) {
    let e = this
      , t = null
      , n = 0
      , s = !1
      , r = !1
      , a = new Tn
      , o = new Fe
      , c = {
        value: null,
        needsUpdate: !1
    };
    this.uniform = c,
    this.numPlanes = 0,
    this.numIntersection = 0,
    this.init = function(u, f) {
        let d = u.length !== 0 || f || n !== 0 || s;
        return s = f,
        n = u.length,
        d
    }
    ,
    this.beginShadows = function() {
        r = !0,
        h(null)
    }
    ,
    this.endShadows = function() {
        r = !1
    }
    ,
    this.setGlobalState = function(u, f) {
        t = h(u, f, 0)
    }
    ,
    this.setState = function(u, f, d) {
        let m = u.clippingPlanes
          , b = u.clipIntersection
          , g = u.clipShadows
          , p = i.get(u);
        if (!s || m === null || m.length === 0 || r && !g)
            r ? h(null) : l();
        else {
            let x = r ? 0 : n
              , v = x * 4
              , _ = p.clippingState || null;
            c.value = _,
            _ = h(m, f, v, d);
            for (let P = 0; P !== v; ++P)
                _[P] = t[P];
            p.clippingState = _,
            this.numIntersection = b ? this.numPlanes : 0,
            this.numPlanes += x
        }
    }
    ;
    function l() {
        c.value !== t && (c.value = t,
        c.needsUpdate = n > 0),
        e.numPlanes = n,
        e.numIntersection = 0
    }
    function h(u, f, d, m) {
        let b = u !== null ? u.length : 0
          , g = null;
        if (b !== 0) {
            if (g = c.value,
            m !== !0 || g === null) {
                let p = d + b * 4
                  , x = f.matrixWorldInverse;
                o.getNormalMatrix(x),
                (g === null || g.length < p) && (g = new Float32Array(p));
                for (let v = 0, _ = d; v !== b; ++v,
                _ += 4)
                    a.copy(u[v]).applyMatrix4(x, o),
                    a.normal.toArray(g, _),
                    g[_ + 3] = a.constant
            }
            c.value = g,
            c.needsUpdate = !0
        }
        return e.numPlanes = b,
        e.numIntersection = 0,
        g
    }
}
function G0(i) {
    let e = new WeakMap;
    function t(a, o) {
        return o === _c ? a.mapping = ws : o === xc && (a.mapping = Es),
        a
    }
    function n(a) {
        if (a && a.isTexture) {
            let o = a.mapping;
            if (o === _c || o === xc)
                if (e.has(a)) {
                    let c = e.get(a).texture;
                    return t(c, a.mapping)
                } else {
                    let c = a.image;
                    if (c && c.height > 0) {
                        let l = new Jc(c.height);
                        return l.fromEquirectangularTexture(i, a),
                        e.set(a, l),
                        a.addEventListener("dispose", s),
                        t(l.texture, a.mapping)
                    } else
                        return null
                }
        }
        return a
    }
    function s(a) {
        let o = a.target;
        o.removeEventListener("dispose", s);
        let c = e.get(o);
        c !== void 0 && (e.delete(o),
        c.dispose())
    }
    function r() {
        e = new WeakMap
    }
    return {
        get: n,
        dispose: r
    }
}
var Mi = class extends Aa {
    constructor(e=-1, t=1, n=1, s=-1, r=.1, a=2e3) {
        super(),
        this.isOrthographicCamera = !0,
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = e,
        this.right = t,
        this.top = n,
        this.bottom = s,
        this.near = r,
        this.far = a,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.left = e.left,
        this.right = e.right,
        this.top = e.top,
        this.bottom = e.bottom,
        this.near = e.near,
        this.far = e.far,
        this.zoom = e.zoom,
        this.view = e.view === null ? null : Object.assign({}, e.view),
        this
    }
    setViewOffset(e, t, n, s, r, a) {
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = n,
        this.view.offsetY = s,
        this.view.width = r,
        this.view.height = a,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        let e = (this.right - this.left) / (2 * this.zoom)
          , t = (this.top - this.bottom) / (2 * this.zoom)
          , n = (this.right + this.left) / 2
          , s = (this.top + this.bottom) / 2
          , r = n - e
          , a = n + e
          , o = s + t
          , c = s - t;
        if (this.view !== null && this.view.enabled) {
            let l = (this.right - this.left) / this.view.fullWidth / this.zoom
              , h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            r += l * this.view.offsetX,
            a = r + l * this.view.width,
            o -= h * this.view.offsetY,
            c = o - h * this.view.height
        }
        this.projectionMatrix.makeOrthographic(r, a, o, c, this.near, this.far, this.coordinateSystem),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.zoom = this.zoom,
        t.object.left = this.left,
        t.object.right = this.right,
        t.object.top = this.top,
        t.object.bottom = this.bottom,
        t.object.near = this.near,
        t.object.far = this.far,
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t
    }
}
  , xs = 4
  , Ou = [.125, .215, .35, .446, .526, .582]
  , Wi = 20
  , Ko = new Mi
  , Bu = new ue
  , Zo = null
  , Jo = 0
  , Qo = 0
  , $o = !1
  , Hi = (1 + Math.sqrt(5)) / 2
  , gs = 1 / Hi
  , ku = [new C(-Hi,gs,0), new C(Hi,gs,0), new C(-gs,0,Hi), new C(gs,0,Hi), new C(0,Hi,-gs), new C(0,Hi,gs), new C(-1,1,-1), new C(1,1,-1), new C(-1,1,1), new C(1,1,1)]
  , Ls = class {
    constructor(e) {
        this._renderer = e,
        this._pingPongRenderTarget = null,
        this._lodMax = 0,
        this._cubeSize = 0,
        this._lodPlanes = [],
        this._sizeLods = [],
        this._sigmas = [],
        this._blurMaterial = null,
        this._cubemapMaterial = null,
        this._equirectMaterial = null,
        this._compileMaterial(this._blurMaterial)
    }
    fromScene(e, t=0, n=.1, s=100) {
        Zo = this._renderer.getRenderTarget(),
        Jo = this._renderer.getActiveCubeFace(),
        Qo = this._renderer.getActiveMipmapLevel(),
        $o = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1,
        this._setSize(256);
        let r = this._allocateTargets();
        return r.depthBuffer = !0,
        this._sceneToCubeUV(e, n, s, r),
        t > 0 && this._blur(r, 0, 0, t),
        this._applyPMREM(r),
        this._cleanup(r),
        r
    }
    fromEquirectangular(e, t=null) {
        return this._fromTexture(e, t)
    }
    fromCubemap(e, t=null) {
        return this._fromTexture(e, t)
    }
    compileCubemapShader() {
        this._cubemapMaterial === null && (this._cubemapMaterial = Vu(),
        this._compileMaterial(this._cubemapMaterial))
    }
    compileEquirectangularShader() {
        this._equirectMaterial === null && (this._equirectMaterial = Hu(),
        this._compileMaterial(this._equirectMaterial))
    }
    dispose() {
        this._dispose(),
        this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
        this._equirectMaterial !== null && this._equirectMaterial.dispose()
    }
    _setSize(e) {
        this._lodMax = Math.floor(Math.log2(e)),
        this._cubeSize = Math.pow(2, this._lodMax)
    }
    _dispose() {
        this._blurMaterial !== null && this._blurMaterial.dispose(),
        this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
        for (let e = 0; e < this._lodPlanes.length; e++)
            this._lodPlanes[e].dispose()
    }
    _cleanup(e) {
        this._renderer.setRenderTarget(Zo, Jo, Qo),
        this._renderer.xr.enabled = $o,
        e.scissorTest = !1,
        aa(e, 0, 0, e.width, e.height)
    }
    _fromTexture(e, t) {
        e.mapping === ws || e.mapping === Es ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4),
        Zo = this._renderer.getRenderTarget(),
        Jo = this._renderer.getActiveCubeFace(),
        Qo = this._renderer.getActiveMipmapLevel(),
        $o = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1;
        let n = t || this._allocateTargets();
        return this._textureToCubeUV(e, n),
        this._applyPMREM(n),
        this._cleanup(n),
        n
    }
    _allocateTargets() {
        let e = 3 * Math.max(this._cubeSize, 112)
          , t = 4 * this._cubeSize
          , n = {
            magFilter: Zt,
            minFilter: Zt,
            generateMipmaps: !1,
            type: rn,
            format: gn,
            colorSpace: Xt,
            depthBuffer: !1
        }
          , s = zu(e, t, n);
        if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
            this._pingPongRenderTarget !== null && this._dispose(),
            this._pingPongRenderTarget = zu(e, t, n);
            let {_lodMax: r} = this;
            ({sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas} = W0(r)),
            this._blurMaterial = X0(r, e, t)
        }
        return s
    }
    _compileMaterial(e) {
        let t = new be(this._lodPlanes[0],e);
        this._renderer.compile(t, Ko)
    }
    _sceneToCubeUV(e, t, n, s) {
        let o = new Rt(90,1,t,n)
          , c = [1, -1, 1, 1, 1, 1]
          , l = [1, 1, 1, -1, -1, -1]
          , h = this._renderer
          , u = h.autoClear
          , f = h.toneMapping;
        h.getClearColor(Bu),
        h.toneMapping = xi,
        h.autoClear = !1;
        let d = new Ft({
            name: "PMREM.Background",
            side: Gt,
            depthWrite: !1,
            depthTest: !1
        })
          , m = new be(new Ct,d)
          , b = !1
          , g = e.background;
        g ? g.isColor && (d.color.copy(g),
        e.background = null,
        b = !0) : (d.color.copy(Bu),
        b = !0);
        for (let p = 0; p < 6; p++) {
            let x = p % 3;
            x === 0 ? (o.up.set(0, c[p], 0),
            o.lookAt(l[p], 0, 0)) : x === 1 ? (o.up.set(0, 0, c[p]),
            o.lookAt(0, l[p], 0)) : (o.up.set(0, c[p], 0),
            o.lookAt(0, 0, l[p]));
            let v = this._cubeSize;
            aa(s, x * v, p > 2 ? v : 0, v, v),
            h.setRenderTarget(s),
            b && h.render(m, o),
            h.render(e, o)
        }
        m.geometry.dispose(),
        m.material.dispose(),
        h.toneMapping = f,
        h.autoClear = u,
        e.background = g
    }
    _textureToCubeUV(e, t) {
        let n = this._renderer
          , s = e.mapping === ws || e.mapping === Es;
        s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Vu()),
        this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Hu());
        let r = s ? this._cubemapMaterial : this._equirectMaterial
          , a = new be(this._lodPlanes[0],r)
          , o = r.uniforms;
        o.envMap.value = e;
        let c = this._cubeSize;
        aa(t, 0, 0, 3 * c, 2 * c),
        n.setRenderTarget(t),
        n.render(a, Ko)
    }
    _applyPMREM(e) {
        let t = this._renderer
          , n = t.autoClear;
        t.autoClear = !1;
        let s = this._lodPlanes.length;
        for (let r = 1; r < s; r++) {
            let a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1])
              , o = ku[(s - r - 1) % ku.length];
            this._blur(e, r - 1, r, a, o)
        }
        t.autoClear = n
    }
    _blur(e, t, n, s, r) {
        let a = this._pingPongRenderTarget;
        this._halfBlur(e, a, t, n, s, "latitudinal", r),
        this._halfBlur(a, e, n, n, s, "longitudinal", r)
    }
    _halfBlur(e, t, n, s, r, a, o) {
        let c = this._renderer
          , l = this._blurMaterial;
        a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
        let h = 3
          , u = new be(this._lodPlanes[s],l)
          , f = l.uniforms
          , d = this._sizeLods[n] - 1
          , m = isFinite(r) ? Math.PI / (2 * d) : 2 * Math.PI / (2 * Wi - 1)
          , b = r / m
          , g = isFinite(r) ? 1 + Math.floor(h * b) : Wi;
        g > Wi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wi}`);
        let p = []
          , x = 0;
        for (let R = 0; R < Wi; ++R) {
            let L = R / b
              , w = Math.exp(-L * L / 2);
            p.push(w),
            R === 0 ? x += w : R < g && (x += 2 * w)
        }
        for (let R = 0; R < p.length; R++)
            p[R] = p[R] / x;
        f.envMap.value = e.texture,
        f.samples.value = g,
        f.weights.value = p,
        f.latitudinal.value = a === "latitudinal",
        o && (f.poleAxis.value = o);
        let {_lodMax: v} = this;
        f.dTheta.value = m,
        f.mipInt.value = v - n;
        let _ = this._sizeLods[s]
          , P = 3 * _ * (s > v - xs ? s - v + xs : 0)
          , E = 4 * (this._cubeSize - _);
        aa(t, P, E, 3 * _, 2 * _),
        c.setRenderTarget(t),
        c.render(u, Ko)
    }
}
;
function W0(i) {
    let e = []
      , t = []
      , n = []
      , s = i
      , r = i - xs + 1 + Ou.length;
    for (let a = 0; a < r; a++) {
        let o = Math.pow(2, s);
        t.push(o);
        let c = 1 / o;
        a > i - xs ? c = Ou[a - i + xs - 1] : a === 0 && (c = 0),
        n.push(c);
        let l = 1 / (o - 2)
          , h = -l
          , u = 1 + l
          , f = [h, h, u, h, u, u, h, h, u, u, h, u]
          , d = 6
          , m = 6
          , b = 3
          , g = 2
          , p = 1
          , x = new Float32Array(b * m * d)
          , v = new Float32Array(g * m * d)
          , _ = new Float32Array(p * m * d);
        for (let E = 0; E < d; E++) {
            let R = E % 3 * 2 / 3 - 1
              , L = E > 2 ? 0 : -1
              , w = [R, L, 0, R + 2 / 3, L, 0, R + 2 / 3, L + 1, 0, R, L, 0, R + 2 / 3, L + 1, 0, R, L + 1, 0];
            x.set(w, b * m * E),
            v.set(f, g * m * E);
            let M = [E, E, E, E, E, E];
            _.set(M, p * m * E)
        }
        let P = new bt;
        P.setAttribute("position", new ut(x,b)),
        P.setAttribute("uv", new ut(v,g)),
        P.setAttribute("faceIndex", new ut(_,p)),
        e.push(P),
        s > xs && s--
    }
    return {
        lodPlanes: e,
        sizeLods: t,
        sigmas: n
    }
}
function zu(i, e, t) {
    let n = new kt(i,e,t);
    return n.texture.mapping = Qa,
    n.texture.name = "PMREM.cubeUv",
    n.scissorTest = !0,
    n
}
function aa(i, e, t, n, s) {
    i.viewport.set(e, t, n, s),
    i.scissor.set(e, t, n, s)
}
function X0(i, e, t) {
    let n = new Float32Array(Wi)
      , s = new C(0,1,0);
    return new Mt({
        name: "SphericalGaussianBlur",
        defines: {
            n: Wi,
            CUBEUV_TEXEL_WIDTH: 1 / e,
            CUBEUV_TEXEL_HEIGHT: 1 / t,
            CUBEUV_MAX_MIP: `${i}.0`
        },
        uniforms: {
            envMap: {
                value: null
            },
            samples: {
                value: 1
            },
            weights: {
                value: n
            },
            latitudinal: {
                value: !1
            },
            dTheta: {
                value: 0
            },
            mipInt: {
                value: 0
            },
            poleAxis: {
                value: s
            }
        },
        vertexShader: Gl(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
        blending: Un,
        depthTest: !1,
        depthWrite: !1
    })
}
function Hu() {
    return new Mt({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            }
        },
        vertexShader: Gl(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
        blending: Un,
        depthTest: !1,
        depthWrite: !1
    })
}
function Vu() {
    return new Mt({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: Gl(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
        blending: Un,
        depthTest: !1,
        depthWrite: !1
    })
}
function Gl() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
}
function q0(i) {
    let e = new WeakMap
      , t = null;
    function n(o) {
        if (o && o.isTexture) {
            let c = o.mapping
              , l = c === _c || c === xc
              , h = c === ws || c === Es;
            if (l || h) {
                let u = e.get(o)
                  , f = u !== void 0 ? u.texture.pmremVersion : 0;
                if (o.isRenderTargetTexture && o.pmremVersion !== f)
                    return t === null && (t = new Ls(i)),
                    u = l ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u),
                    u.texture.pmremVersion = o.pmremVersion,
                    e.set(o, u),
                    u.texture;
                if (u !== void 0)
                    return u.texture;
                {
                    let d = o.image;
                    return l && d && d.height > 0 || h && d && s(d) ? (t === null && (t = new Ls(i)),
                    u = l ? t.fromEquirectangular(o) : t.fromCubemap(o),
                    u.texture.pmremVersion = o.pmremVersion,
                    e.set(o, u),
                    o.addEventListener("dispose", r),
                    u.texture) : null
                }
            }
        }
        return o
    }
    function s(o) {
        let c = 0
          , l = 6;
        for (let h = 0; h < l; h++)
            o[h] !== void 0 && c++;
        return c === l
    }
    function r(o) {
        let c = o.target;
        c.removeEventListener("dispose", r);
        let l = e.get(c);
        l !== void 0 && (e.delete(c),
        l.dispose())
    }
    function a() {
        e = new WeakMap,
        t !== null && (t.dispose(),
        t = null)
    }
    return {
        get: n,
        dispose: a
    }
}
function j0(i) {
    let e = {};
    function t(n) {
        if (e[n] !== void 0)
            return e[n];
        let s;
        switch (n) {
        case "WEBGL_depth_texture":
            s = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
        case "EXT_texture_filter_anisotropic":
            s = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            s = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            s = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        default:
            s = i.getExtension(n)
        }
        return e[n] = s,
        s
    }
    return {
        has: function(n) {
            return t(n) !== null
        },
        init: function() {
            t("EXT_color_buffer_float"),
            t("WEBGL_clip_cull_distance"),
            t("OES_texture_float_linear"),
            t("EXT_color_buffer_half_float"),
            t("WEBGL_multisampled_render_to_texture"),
            t("WEBGL_render_shared_exponent")
        },
        get: function(n) {
            let s = t(n);
            return s === null && or("THREE.WebGLRenderer: " + n + " extension not supported."),
            s
        }
    }
}
function Y0(i, e, t, n) {
    let s = {}
      , r = new WeakMap;
    function a(u) {
        let f = u.target;
        f.index !== null && e.remove(f.index);
        for (let m in f.attributes)
            e.remove(f.attributes[m]);
        for (let m in f.morphAttributes) {
            let b = f.morphAttributes[m];
            for (let g = 0, p = b.length; g < p; g++)
                e.remove(b[g])
        }
        f.removeEventListener("dispose", a),
        delete s[f.id];
        let d = r.get(f);
        d && (e.remove(d),
        r.delete(f)),
        n.releaseStatesOfGeometry(f),
        f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
        t.memory.geometries--
    }
    function o(u, f) {
        return s[f.id] === !0 || (f.addEventListener("dispose", a),
        s[f.id] = !0,
        t.memory.geometries++),
        f
    }
    function c(u) {
        let f = u.attributes;
        for (let m in f)
            e.update(f[m], i.ARRAY_BUFFER);
        let d = u.morphAttributes;
        for (let m in d) {
            let b = d[m];
            for (let g = 0, p = b.length; g < p; g++)
                e.update(b[g], i.ARRAY_BUFFER)
        }
    }
    function l(u) {
        let f = []
          , d = u.index
          , m = u.attributes.position
          , b = 0;
        if (d !== null) {
            let x = d.array;
            b = d.version;
            for (let v = 0, _ = x.length; v < _; v += 3) {
                let P = x[v + 0]
                  , E = x[v + 1]
                  , R = x[v + 2];
                f.push(P, E, E, R, R, P)
            }
        } else if (m !== void 0) {
            let x = m.array;
            b = m.version;
            for (let v = 0, _ = x.length / 3 - 1; v < _; v += 3) {
                let P = v + 0
                  , E = v + 1
                  , R = v + 2;
                f.push(P, E, E, R, R, P)
            }
        } else
            return;
        let g = new (Vd(f) ? Ta : Ea)(f,1);
        g.version = b;
        let p = r.get(u);
        p && e.remove(p),
        r.set(u, g)
    }
    function h(u) {
        let f = r.get(u);
        if (f) {
            let d = u.index;
            d !== null && f.version < d.version && l(u)
        } else
            l(u);
        return r.get(u)
    }
    return {
        get: o,
        update: c,
        getWireframeAttribute: h
    }
}
function K0(i, e, t) {
    let n;
    function s(f) {
        n = f
    }
    let r, a;
    function o(f) {
        r = f.type,
        a = f.bytesPerElement
    }
    function c(f, d) {
        i.drawElements(n, d, r, f * a),
        t.update(d, n, 1)
    }
    function l(f, d, m) {
        m !== 0 && (i.drawElementsInstanced(n, d, r, f * a, m),
        t.update(d, n, m))
    }
    function h(f, d, m) {
        if (m === 0)
            return;
        e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, d, 0, r, f, 0, m);
        let g = 0;
        for (let p = 0; p < m; p++)
            g += d[p];
        t.update(g, n, 1)
    }
    function u(f, d, m, b) {
        if (m === 0)
            return;
        let g = e.get("WEBGL_multi_draw");
        if (g === null)
            for (let p = 0; p < f.length; p++)
                l(f[p] / a, d[p], b[p]);
        else {
            g.multiDrawElementsInstancedWEBGL(n, d, 0, r, f, 0, b, 0, m);
            let p = 0;
            for (let x = 0; x < m; x++)
                p += d[x] * b[x];
            t.update(p, n, 1)
        }
    }
    this.setMode = s,
    this.setIndex = o,
    this.render = c,
    this.renderInstances = l,
    this.renderMultiDraw = h,
    this.renderMultiDrawInstances = u
}
function Z0(i) {
    let e = {
        geometries: 0,
        textures: 0
    }
      , t = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    function n(r, a, o) {
        switch (t.calls++,
        a) {
        case i.TRIANGLES:
            t.triangles += o * (r / 3);
            break;
        case i.LINES:
            t.lines += o * (r / 2);
            break;
        case i.LINE_STRIP:
            t.lines += o * (r - 1);
            break;
        case i.LINE_LOOP:
            t.lines += o * r;
            break;
        case i.POINTS:
            t.points += o * r;
            break;
        default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", a);
            break
        }
    }
    function s() {
        t.calls = 0,
        t.triangles = 0,
        t.points = 0,
        t.lines = 0
    }
    return {
        memory: e,
        render: t,
        programs: null,
        autoReset: !0,
        reset: s,
        update: n
    }
}
function J0(i, e, t) {
    let n = new WeakMap
      , s = new Je;
    function r(a, o, c) {
        let l = a.morphTargetInfluences
          , h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color
          , u = h !== void 0 ? h.length : 0
          , f = n.get(o);
        if (f === void 0 || f.count !== u) {
            let w = function() {
                R.dispose(),
                n.delete(o),
                o.removeEventListener("dispose", w)
            };
            f !== void 0 && f.texture.dispose();
            let d = o.morphAttributes.position !== void 0
              , m = o.morphAttributes.normal !== void 0
              , b = o.morphAttributes.color !== void 0
              , g = o.morphAttributes.position || []
              , p = o.morphAttributes.normal || []
              , x = o.morphAttributes.color || []
              , v = 0;
            d === !0 && (v = 1),
            m === !0 && (v = 2),
            b === !0 && (v = 3);
            let _ = o.attributes.position.count * v
              , P = 1;
            _ > e.maxTextureSize && (P = Math.ceil(_ / e.maxTextureSize),
            _ = e.maxTextureSize);
            let E = new Float32Array(_ * P * 4 * u)
              , R = new Sa(E,_,P,u);
            R.type = Rn,
            R.needsUpdate = !0;
            let L = v * 4;
            for (let M = 0; M < u; M++) {
                let I = g[M]
                  , H = p[M]
                  , B = x[M]
                  , V = _ * P * 4 * M;
                for (let J = 0; J < I.count; J++) {
                    let X = J * L;
                    d === !0 && (s.fromBufferAttribute(I, J),
                    E[V + X + 0] = s.x,
                    E[V + X + 1] = s.y,
                    E[V + X + 2] = s.z,
                    E[V + X + 3] = 0),
                    m === !0 && (s.fromBufferAttribute(H, J),
                    E[V + X + 4] = s.x,
                    E[V + X + 5] = s.y,
                    E[V + X + 6] = s.z,
                    E[V + X + 7] = 0),
                    b === !0 && (s.fromBufferAttribute(B, J),
                    E[V + X + 8] = s.x,
                    E[V + X + 9] = s.y,
                    E[V + X + 10] = s.z,
                    E[V + X + 11] = B.itemSize === 4 ? s.w : 1)
                }
            }
            f = {
                count: u,
                texture: R,
                size: new ne(_,P)
            },
            n.set(o, f),
            o.addEventListener("dispose", w)
        }
        if (a.isInstancedMesh === !0 && a.morphTexture !== null)
            c.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
        else {
            let d = 0;
            for (let b = 0; b < l.length; b++)
                d += l[b];
            let m = o.morphTargetsRelative ? 1 : 1 - d;
            c.getUniforms().setValue(i, "morphTargetBaseInfluence", m),
            c.getUniforms().setValue(i, "morphTargetInfluences", l)
        }
        c.getUniforms().setValue(i, "morphTargetsTexture", f.texture, t),
        c.getUniforms().setValue(i, "morphTargetsTextureSize", f.size)
    }
    return {
        update: r
    }
}
function Q0(i, e, t, n) {
    let s = new WeakMap;
    function r(c) {
        let l = n.render.frame
          , h = c.geometry
          , u = e.get(c, h);
        if (s.get(u) !== l && (e.update(u),
        s.set(u, l)),
        c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o),
        s.get(c) !== l && (t.update(c.instanceMatrix, i.ARRAY_BUFFER),
        c.instanceColor !== null && t.update(c.instanceColor, i.ARRAY_BUFFER),
        s.set(c, l))),
        c.isSkinnedMesh) {
            let f = c.skeleton;
            s.get(f) !== l && (f.update(),
            s.set(f, l))
        }
        return u
    }
    function a() {
        s = new WeakMap
    }
    function o(c) {
        let l = c.target;
        l.removeEventListener("dispose", o),
        t.remove(l.instanceMatrix),
        l.instanceColor !== null && t.remove(l.instanceColor)
    }
    return {
        update: r,
        dispose: a
    }
}
var Ca = class extends Nt {
    constructor(e, t, n, s, r, a, o, c, l, h=vs) {
        if (h !== vs && h !== As)
            throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        n === void 0 && h === vs && (n = qi),
        n === void 0 && h === As && (n = Ts),
        super(null, s, r, a, o, c, h, n, l),
        this.isDepthTexture = !0,
        this.image = {
            width: e,
            height: t
        },
        this.magFilter = o !== void 0 ? o : Wt,
        this.minFilter = c !== void 0 ? c : Wt,
        this.flipY = !1,
        this.generateMipmaps = !1,
        this.compareFunction = null
    }
    copy(e) {
        return super.copy(e),
        this.compareFunction = e.compareFunction,
        this
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return this.compareFunction !== null && (t.compareFunction = this.compareFunction),
        t
    }
}
  , qd = new Nt
  , Gu = new Ca(1,1)
  , jd = new Sa
  , Yd = new Kc
  , Kd = new Ra
  , Wu = []
  , Xu = []
  , qu = new Float32Array(16)
  , ju = new Float32Array(9)
  , Yu = new Float32Array(4);
function Vs(i, e, t) {
    let n = i[0];
    if (n <= 0 || n > 0)
        return i;
    let s = e * t
      , r = Wu[s];
    if (r === void 0 && (r = new Float32Array(s),
    Wu[s] = r),
    e !== 0) {
        n.toArray(r, 0);
        for (let a = 1, o = 0; a !== e; ++a)
            o += t,
            i[a].toArray(r, o)
    }
    return r
}
function Pt(i, e) {
    if (i.length !== e.length)
        return !1;
    for (let t = 0, n = i.length; t < n; t++)
        if (i[t] !== e[t])
            return !1;
    return !0
}
function It(i, e) {
    for (let t = 0, n = e.length; t < n; t++)
        i[t] = e[t]
}
function to(i, e) {
    let t = Xu[e];
    t === void 0 && (t = new Int32Array(e),
    Xu[e] = t);
    for (let n = 0; n !== e; ++n)
        t[n] = i.allocateTextureUnit();
    return t
}
function $0(i, e) {
    let t = this.cache;
    t[0] !== e && (i.uniform1f(this.addr, e),
    t[0] = e)
}
function eb(i, e) {
    let t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y),
        t[0] = e.x,
        t[1] = e.y);
    else {
        if (Pt(t, e))
            return;
        i.uniform2fv(this.addr, e),
        It(t, e)
    }
}
function tb(i, e) {
    let t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z);
    else if (e.r !== void 0)
        (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b),
        t[0] = e.r,
        t[1] = e.g,
        t[2] = e.b);
    else {
        if (Pt(t, e))
            return;
        i.uniform3fv(this.addr, e),
        It(t, e)
    }
}
function nb(i, e) {
    let t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z,
        t[3] = e.w);
    else {
        if (Pt(t, e))
            return;
        i.uniform4fv(this.addr, e),
        It(t, e)
    }
}
function ib(i, e) {
    let t = this.cache
      , n = e.elements;
    if (n === void 0) {
        if (Pt(t, e))
            return;
        i.uniformMatrix2fv(this.addr, !1, e),
        It(t, e)
    } else {
        if (Pt(t, n))
            return;
        Yu.set(n),
        i.uniformMatrix2fv(this.addr, !1, Yu),
        It(t, n)
    }
}
function sb(i, e) {
    let t = this.cache
      , n = e.elements;
    if (n === void 0) {
        if (Pt(t, e))
            return;
        i.uniformMatrix3fv(this.addr, !1, e),
        It(t, e)
    } else {
        if (Pt(t, n))
            return;
        ju.set(n),
        i.uniformMatrix3fv(this.addr, !1, ju),
        It(t, n)
    }
}
function rb(i, e) {
    let t = this.cache
      , n = e.elements;
    if (n === void 0) {
        if (Pt(t, e))
            return;
        i.uniformMatrix4fv(this.addr, !1, e),
        It(t, e)
    } else {
        if (Pt(t, n))
            return;
        qu.set(n),
        i.uniformMatrix4fv(this.addr, !1, qu),
        It(t, n)
    }
}
function ab(i, e) {
    let t = this.cache;
    t[0] !== e && (i.uniform1i(this.addr, e),
    t[0] = e)
}
function ob(i, e) {
    let t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y),
        t[0] = e.x,
        t[1] = e.y);
    else {
        if (Pt(t, e))
            return;
        i.uniform2iv(this.addr, e),
        It(t, e)
    }
}
function cb(i, e) {
    let t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z);
    else {
        if (Pt(t, e))
            return;
        i.uniform3iv(this.addr, e),
        It(t, e)
    }
}
function lb(i, e) {
    let t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z,
        t[3] = e.w);
    else {
        if (Pt(t, e))
            return;
        i.uniform4iv(this.addr, e),
        It(t, e)
    }
}
function hb(i, e) {
    let t = this.cache;
    t[0] !== e && (i.uniform1ui(this.addr, e),
    t[0] = e)
}
function ub(i, e) {
    let t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y),
        t[0] = e.x,
        t[1] = e.y);
    else {
        if (Pt(t, e))
            return;
        i.uniform2uiv(this.addr, e),
        It(t, e)
    }
}
function db(i, e) {
    let t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z);
    else {
        if (Pt(t, e))
            return;
        i.uniform3uiv(this.addr, e),
        It(t, e)
    }
}
function fb(i, e) {
    let t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z,
        t[3] = e.w);
    else {
        if (Pt(t, e))
            return;
        i.uniform4uiv(this.addr, e),
        It(t, e)
    }
}
function pb(i, e, t) {
    let n = this.cache
      , s = t.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s),
    n[0] = s);
    let r;
    this.type === i.SAMPLER_2D_SHADOW ? (Gu.compareFunction = Hd,
    r = Gu) : r = qd,
    t.setTexture2D(e || r, s)
}
function mb(i, e, t) {
    let n = this.cache
      , s = t.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s),
    n[0] = s),
    t.setTexture3D(e || Yd, s)
}
function gb(i, e, t) {
    let n = this.cache
      , s = t.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s),
    n[0] = s),
    t.setTextureCube(e || Kd, s)
}
function bb(i, e, t) {
    let n = this.cache
      , s = t.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s),
    n[0] = s),
    t.setTexture2DArray(e || jd, s)
}
function _b(i) {
    switch (i) {
    case 5126:
        return $0;
    case 35664:
        return eb;
    case 35665:
        return tb;
    case 35666:
        return nb;
    case 35674:
        return ib;
    case 35675:
        return sb;
    case 35676:
        return rb;
    case 5124:
    case 35670:
        return ab;
    case 35667:
    case 35671:
        return ob;
    case 35668:
    case 35672:
        return cb;
    case 35669:
    case 35673:
        return lb;
    case 5125:
        return hb;
    case 36294:
        return ub;
    case 36295:
        return db;
    case 36296:
        return fb;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return pb;
    case 35679:
    case 36299:
    case 36307:
        return mb;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return gb;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return bb
    }
}
function xb(i, e) {
    i.uniform1fv(this.addr, e)
}
function vb(i, e) {
    let t = Vs(e, this.size, 2);
    i.uniform2fv(this.addr, t)
}
function yb(i, e) {
    let t = Vs(e, this.size, 3);
    i.uniform3fv(this.addr, t)
}
function Mb(i, e) {
    let t = Vs(e, this.size, 4);
    i.uniform4fv(this.addr, t)
}
function Sb(i, e) {
    let t = Vs(e, this.size, 4);
    i.uniformMatrix2fv(this.addr, !1, t)
}
function wb(i, e) {
    let t = Vs(e, this.size, 9);
    i.uniformMatrix3fv(this.addr, !1, t)
}
function Eb(i, e) {
    let t = Vs(e, this.size, 16);
    i.uniformMatrix4fv(this.addr, !1, t)
}
function Tb(i, e) {
    i.uniform1iv(this.addr, e)
}
function Ab(i, e) {
    i.uniform2iv(this.addr, e)
}
function Rb(i, e) {
    i.uniform3iv(this.addr, e)
}
function Cb(i, e) {
    i.uniform4iv(this.addr, e)
}
function Pb(i, e) {
    i.uniform1uiv(this.addr, e)
}
function Ib(i, e) {
    i.uniform2uiv(this.addr, e)
}
function Lb(i, e) {
    i.uniform3uiv(this.addr, e)
}
function Db(i, e) {
    i.uniform4uiv(this.addr, e)
}
function Ub(i, e, t) {
    let n = this.cache
      , s = e.length
      , r = to(t, s);
    Pt(n, r) || (i.uniform1iv(this.addr, r),
    It(n, r));
    for (let a = 0; a !== s; ++a)
        t.setTexture2D(e[a] || qd, r[a])
}
function Nb(i, e, t) {
    let n = this.cache
      , s = e.length
      , r = to(t, s);
    Pt(n, r) || (i.uniform1iv(this.addr, r),
    It(n, r));
    for (let a = 0; a !== s; ++a)
        t.setTexture3D(e[a] || Yd, r[a])
}
function Fb(i, e, t) {
    let n = this.cache
      , s = e.length
      , r = to(t, s);
    Pt(n, r) || (i.uniform1iv(this.addr, r),
    It(n, r));
    for (let a = 0; a !== s; ++a)
        t.setTextureCube(e[a] || Kd, r[a])
}
function Ob(i, e, t) {
    let n = this.cache
      , s = e.length
      , r = to(t, s);
    Pt(n, r) || (i.uniform1iv(this.addr, r),
    It(n, r));
    for (let a = 0; a !== s; ++a)
        t.setTexture2DArray(e[a] || jd, r[a])
}
function Bb(i) {
    switch (i) {
    case 5126:
        return xb;
    case 35664:
        return vb;
    case 35665:
        return yb;
    case 35666:
        return Mb;
    case 35674:
        return Sb;
    case 35675:
        return wb;
    case 35676:
        return Eb;
    case 5124:
    case 35670:
        return Tb;
    case 35667:
    case 35671:
        return Ab;
    case 35668:
    case 35672:
        return Rb;
    case 35669:
    case 35673:
        return Cb;
    case 5125:
        return Pb;
    case 36294:
        return Ib;
    case 36295:
        return Lb;
    case 36296:
        return Db;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return Ub;
    case 35679:
    case 36299:
    case 36307:
        return Nb;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return Fb;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return Ob
    }
}
var Qc = class {
    constructor(e, t, n) {
        this.id = e,
        this.addr = n,
        this.cache = [],
        this.type = t.type,
        this.setValue = _b(t.type)
    }
}
  , $c = class {
    constructor(e, t, n) {
        this.id = e,
        this.addr = n,
        this.cache = [],
        this.type = t.type,
        this.size = t.size,
        this.setValue = Bb(t.type)
    }
}
  , el = class {
    constructor(e) {
        this.id = e,
        this.seq = [],
        this.map = {}
    }
    setValue(e, t, n) {
        let s = this.seq;
        for (let r = 0, a = s.length; r !== a; ++r) {
            let o = s[r];
            o.setValue(e, t[o.id], n)
        }
    }
}
  , ec = /(\w+)(\])?(\[|\.)?/g;
function Ku(i, e) {
    i.seq.push(e),
    i.map[e.id] = e
}
function kb(i, e, t) {
    let n = i.name
      , s = n.length;
    for (ec.lastIndex = 0; ; ) {
        let r = ec.exec(n)
          , a = ec.lastIndex
          , o = r[1]
          , c = r[2] === "]"
          , l = r[3];
        if (c && (o = o | 0),
        l === void 0 || l === "[" && a + 2 === s) {
            Ku(t, l === void 0 ? new Qc(o,i,e) : new $c(o,i,e));
            break
        } else {
            let u = t.map[o];
            u === void 0 && (u = new el(o),
            Ku(t, u)),
            t = u
        }
    }
}
var Ms = class {
    constructor(e, t) {
        this.seq = [],
        this.map = {};
        let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
        for (let s = 0; s < n; ++s) {
            let r = e.getActiveUniform(t, s)
              , a = e.getUniformLocation(t, r.name);
            kb(r, a, this)
        }
    }
    setValue(e, t, n, s) {
        let r = this.map[t];
        r !== void 0 && r.setValue(e, n, s)
    }
    setOptional(e, t, n) {
        let s = t[n];
        s !== void 0 && this.setValue(e, n, s)
    }
    static upload(e, t, n, s) {
        for (let r = 0, a = t.length; r !== a; ++r) {
            let o = t[r]
              , c = n[o.id];
            c.needsUpdate !== !1 && o.setValue(e, c.value, s)
        }
    }
    static seqWithValue(e, t) {
        let n = [];
        for (let s = 0, r = e.length; s !== r; ++s) {
            let a = e[s];
            a.id in t && n.push(a)
        }
        return n
    }
}
;
function Zu(i, e, t) {
    let n = i.createShader(e);
    return i.shaderSource(n, t),
    i.compileShader(n),
    n
}
var zb = 37297
  , Hb = 0;
function Vb(i, e) {
    let t = i.split(`
`)
      , n = []
      , s = Math.max(e - 6, 0)
      , r = Math.min(e + 6, t.length);
    for (let a = s; a < r; a++) {
        let o = a + 1;
        n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`)
    }
    return n.join(`
`)
}
var Ju = new Fe;
function Gb(i) {
    Ge._getMatrix(Ju, Ge.workingColorSpace, i);
    let e = `mat3( ${Ju.elements.map(t => t.toFixed(4))} )`;
    switch (Ge.getTransfer(i)) {
    case eo:
        return [e, "LinearTransferOETF"];
    case et:
        return [e, "sRGBTransferOETF"];
    default:
        return console.warn("THREE.WebGLProgram: Unsupported color space: ", i),
        [e, "LinearTransferOETF"]
    }
}
function Qu(i, e, t) {
    let n = i.getShaderParameter(e, i.COMPILE_STATUS)
      , s = i.getShaderInfoLog(e).trim();
    if (n && s === "")
        return "";
    let r = /ERROR: 0:(\d+)/.exec(s);
    if (r) {
        let a = parseInt(r[1]);
        return t.toUpperCase() + `

` + s + `

` + Vb(i.getShaderSource(e), a)
    } else
        return s
}
function Wb(i, e) {
    let t = Gb(e);
    return [`vec4 ${i}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`)
}
function Xb(i, e) {
    let t;
    switch (e) {
    case Cl:
        t = "Linear";
        break;
    case Pl:
        t = "Reinhard";
        break;
    case Il:
        t = "Cineon";
        break;
    case Cr:
        t = "ACESFilmic";
        break;
    case Ll:
        t = "AgX";
        break;
    case Dl:
        t = "Neutral";
        break;
    case op:
        t = "Custom";
        break;
    default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        t = "Linear"
    }
    return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
}
var oa = new C;
function qb() {
    Ge.getLuminanceCoefficients(oa);
    let i = oa.x.toFixed(4)
      , e = oa.y.toFixed(4)
      , t = oa.z.toFixed(4);
    return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`)
}
function jb(i) {
    return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(cr).join(`
`)
}
function Yb(i) {
    let e = [];
    for (let t in i) {
        let n = i[t];
        n !== !1 && e.push("#define " + t + " " + n)
    }
    return e.join(`
`)
}
function Kb(i, e) {
    let t = {}
      , n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
    for (let s = 0; s < n; s++) {
        let r = i.getActiveAttrib(e, s)
          , a = r.name
          , o = 1;
        r.type === i.FLOAT_MAT2 && (o = 2),
        r.type === i.FLOAT_MAT3 && (o = 3),
        r.type === i.FLOAT_MAT4 && (o = 4),
        t[a] = {
            type: r.type,
            location: i.getAttribLocation(e, a),
            locationSize: o
        }
    }
    return t
}
function cr(i) {
    return i !== ""
}
function $u(i, e) {
    let t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
}
function ed(i, e) {
    return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
}
var Zb = /^[ \t]*#include +<([\w\d./]+)>/gm;
function tl(i) {
    return i.replace(Zb, Qb)
}
var Jb = new Map;
function Qb(i, e) {
    let t = He[e];
    if (t === void 0) {
        let n = Jb.get(e);
        if (n !== void 0)
            t = He[n],
            console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
        else
            throw new Error("Can not resolve #include <" + e + ">")
    }
    return tl(t)
}
var $b = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function td(i) {
    return i.replace($b, e_)
}
function e_(i, e, t, n) {
    let s = "";
    for (let r = parseInt(e); r < parseInt(t); r++)
        s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
    return s
}
function nd(i) {
    let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
    return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`),
    e
}
function t_(i) {
    let e = "SHADOWMAP_TYPE_BASIC";
    return i.shadowMapType === Ad ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Rl ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === qn && (e = "SHADOWMAP_TYPE_VSM"),
    e
}
function n_(i) {
    let e = "ENVMAP_TYPE_CUBE";
    if (i.envMap)
        switch (i.envMapMode) {
        case ws:
        case Es:
            e = "ENVMAP_TYPE_CUBE";
            break;
        case Qa:
            e = "ENVMAP_TYPE_CUBE_UV";
            break
        }
    return e
}
function i_(i) {
    let e = "ENVMAP_MODE_REFLECTION";
    if (i.envMap)
        switch (i.envMapMode) {
        case Es:
            e = "ENVMAP_MODE_REFRACTION";
            break
        }
    return e
}
function s_(i) {
    let e = "ENVMAP_BLENDING_NONE";
    if (i.envMap)
        switch (i.combine) {
        case Rd:
            e = "ENVMAP_BLENDING_MULTIPLY";
            break;
        case rp:
            e = "ENVMAP_BLENDING_MIX";
            break;
        case ap:
            e = "ENVMAP_BLENDING_ADD";
            break
        }
    return e
}
function r_(i) {
    let e = i.envMapCubeUVHeight;
    if (e === null)
        return null;
    let t = Math.log2(e) - 2
      , n = 1 / e;
    return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)),
        texelHeight: n,
        maxMip: t
    }
}
function a_(i, e, t, n) {
    let s = i.getContext(), r = t.defines, a = t.vertexShader, o = t.fragmentShader, c = t_(t), l = n_(t), h = i_(t), u = s_(t), f = r_(t), d = jb(t), m = Yb(r), b = s.createProgram(), g, p, x = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
    t.isRawShaderMaterial ? (g = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m].filter(cr).join(`
`),
    g.length > 0 && (g += `
`),
    p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m].filter(cr).join(`
`),
    p.length > 0 && (p += `
`)) : (g = [nd(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(cr).join(`
`),
    p = [nd(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, m, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + l : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== xi ? "#define TONE_MAPPING" : "", t.toneMapping !== xi ? He.tonemapping_pars_fragment : "", t.toneMapping !== xi ? Xb("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", He.colorspace_pars_fragment, Wb("linearToOutputTexel", t.outputColorSpace), qb(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(cr).join(`
`)),
    a = tl(a),
    a = $u(a, t),
    a = ed(a, t),
    o = tl(o),
    o = $u(o, t),
    o = ed(o, t),
    a = td(a),
    o = td(o),
    t.isRawShaderMaterial !== !0 && (x = `#version 300 es
`,
    g = [d, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + g,
    p = ["#define varying in", t.glslVersion === mu ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === mu ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + p);
    let v = x + g + a
      , _ = x + p + o
      , P = Zu(s, s.VERTEX_SHADER, v)
      , E = Zu(s, s.FRAGMENT_SHADER, _);
    s.attachShader(b, P),
    s.attachShader(b, E),
    t.index0AttributeName !== void 0 ? s.bindAttribLocation(b, 0, t.index0AttributeName) : t.morphTargets === !0 && s.bindAttribLocation(b, 0, "position"),
    s.linkProgram(b);
    function R(I) {
        if (i.debug.checkShaderErrors) {
            let H = s.getProgramInfoLog(b).trim()
              , B = s.getShaderInfoLog(P).trim()
              , V = s.getShaderInfoLog(E).trim()
              , J = !0
              , X = !0;
            if (s.getProgramParameter(b, s.LINK_STATUS) === !1)
                if (J = !1,
                typeof i.debug.onShaderError == "function")
                    i.debug.onShaderError(s, b, P, E);
                else {
                    let ee = Qu(s, P, "vertex")
                      , G = Qu(s, E, "fragment");
                    console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(b, s.VALIDATE_STATUS) + `

Material Name: ` + I.name + `
Material Type: ` + I.type + `

Program Info Log: ` + H + `
` + ee + `
` + G)
                }
            else
                H !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", H) : (B === "" || V === "") && (X = !1);
            X && (I.diagnostics = {
                runnable: J,
                programLog: H,
                vertexShader: {
                    log: B,
                    prefix: g
                },
                fragmentShader: {
                    log: V,
                    prefix: p
                }
            })
        }
        s.deleteShader(P),
        s.deleteShader(E),
        L = new Ms(s,b),
        w = Kb(s, b)
    }
    let L;
    this.getUniforms = function() {
        return L === void 0 && R(this),
        L
    }
    ;
    let w;
    this.getAttributes = function() {
        return w === void 0 && R(this),
        w
    }
    ;
    let M = t.rendererExtensionParallelShaderCompile === !1;
    return this.isReady = function() {
        return M === !1 && (M = s.getProgramParameter(b, zb)),
        M
    }
    ,
    this.destroy = function() {
        n.releaseStatesOfProgram(this),
        s.deleteProgram(b),
        this.program = void 0
    }
    ,
    this.type = t.shaderType,
    this.name = t.shaderName,
    this.id = Hb++,
    this.cacheKey = e,
    this.usedTimes = 1,
    this.program = b,
    this.vertexShader = P,
    this.fragmentShader = E,
    this
}
var o_ = 0
  , nl = class {
    constructor() {
        this.shaderCache = new Map,
        this.materialCache = new Map
    }
    update(e) {
        let t = e.vertexShader
          , n = e.fragmentShader
          , s = this._getShaderStage(t)
          , r = this._getShaderStage(n)
          , a = this._getShaderCacheForMaterial(e);
        return a.has(s) === !1 && (a.add(s),
        s.usedTimes++),
        a.has(r) === !1 && (a.add(r),
        r.usedTimes++),
        this
    }
    remove(e) {
        let t = this.materialCache.get(e);
        for (let n of t)
            n.usedTimes--,
            n.usedTimes === 0 && this.shaderCache.delete(n.code);
        return this.materialCache.delete(e),
        this
    }
    getVertexShaderID(e) {
        return this._getShaderStage(e.vertexShader).id
    }
    getFragmentShaderID(e) {
        return this._getShaderStage(e.fragmentShader).id
    }
    dispose() {
        this.shaderCache.clear(),
        this.materialCache.clear()
    }
    _getShaderCacheForMaterial(e) {
        let t = this.materialCache
          , n = t.get(e);
        return n === void 0 && (n = new Set,
        t.set(e, n)),
        n
    }
    _getShaderStage(e) {
        let t = this.shaderCache
          , n = t.get(e);
        return n === void 0 && (n = new il(e),
        t.set(e, n)),
        n
    }
}
  , il = class {
    constructor(e) {
        this.id = o_++,
        this.code = e,
        this.usedTimes = 0
    }
}
;
function c_(i, e, t, n, s, r, a) {
    let o = new wa
      , c = new nl
      , l = new Set
      , h = []
      , u = s.logarithmicDepthBuffer
      , f = s.vertexTextures
      , d = s.precision
      , m = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    };
    function b(w) {
        return l.add(w),
        w === 0 ? "uv" : `uv${w}`
    }
    function g(w, M, I, H, B) {
        let V = H.fog
          , J = B.geometry
          , X = w.isMeshStandardMaterial ? H.environment : null
          , ee = (w.isMeshStandardMaterial ? t : e).get(w.envMap || X)
          , G = ee && ee.mapping === Qa ? ee.image.height : null
          , se = m[w.type];
        w.precision !== null && (d = s.getMaxPrecision(w.precision),
        d !== w.precision && console.warn("THREE.WebGLProgram.getParameters:", w.precision, "not supported, using", d, "instead."));
        let fe = J.morphAttributes.position || J.morphAttributes.normal || J.morphAttributes.color
          , Ee = fe !== void 0 ? fe.length : 0
          , Ve = 0;
        J.morphAttributes.position !== void 0 && (Ve = 1),
        J.morphAttributes.normal !== void 0 && (Ve = 2),
        J.morphAttributes.color !== void 0 && (Ve = 3);
        let tt, j, $, xe;
        if (se) {
            let it = Ln[se];
            tt = it.vertexShader,
            j = it.fragmentShader
        } else
            tt = w.vertexShader,
            j = w.fragmentShader,
            c.update(w),
            $ = c.getVertexShaderID(w),
            xe = c.getFragmentShaderID(w);
        let ae = i.getRenderTarget()
          , Te = i.state.buffers.depth.getReversed()
          , De = B.isInstancedMesh === !0
          , ke = B.isBatchedMesh === !0
          , ot = !!w.map
          , _e = !!w.matcap
          , nt = !!ee
          , U = !!w.aoMap
          , fn = !!w.lightMap
          , qe = !!w.bumpMap
          , je = !!w.normalMap
          , Ce = !!w.displacementMap
          , ft = !!w.emissiveMap
          , Ae = !!w.metalnessMap
          , T = !!w.roughnessMap
          , y = w.anisotropy > 0
          , O = w.clearcoat > 0
          , K = w.dispersion > 0
          , Q = w.iridescence > 0
          , Y = w.sheen > 0
          , Se = w.transmission > 0
          , ce = y && !!w.anisotropyMap
          , pe = O && !!w.clearcoatMap
          , Ke = O && !!w.clearcoatNormalMap
          , te = O && !!w.clearcoatRoughnessMap
          , me = Q && !!w.iridescenceMap
          , Ie = Q && !!w.iridescenceThicknessMap
          , Ue = Y && !!w.sheenColorMap
          , ge = Y && !!w.sheenRoughnessMap
          , Ye = !!w.specularMap
          , ze = !!w.specularColorMap
          , ct = !!w.specularIntensityMap
          , D = Se && !!w.transmissionMap
          , oe = Se && !!w.thicknessMap
          , W = !!w.gradientMap
          , Z = !!w.alphaMap
          , de = w.alphaTest > 0
          , le = !!w.alphaHash
          , Oe = !!w.extensions
          , yt = xi;
        w.toneMapped && (ae === null || ae.isXRRenderTarget === !0) && (yt = i.toneMapping);
        let zt = {
            shaderID: se,
            shaderType: w.type,
            shaderName: w.name,
            vertexShader: tt,
            fragmentShader: j,
            defines: w.defines,
            customVertexShaderID: $,
            customFragmentShaderID: xe,
            isRawShaderMaterial: w.isRawShaderMaterial === !0,
            glslVersion: w.glslVersion,
            precision: d,
            batching: ke,
            batchingColor: ke && B._colorsTexture !== null,
            instancing: De,
            instancingColor: De && B.instanceColor !== null,
            instancingMorph: De && B.morphTexture !== null,
            supportsVertexTextures: f,
            outputColorSpace: ae === null ? i.outputColorSpace : ae.isXRRenderTarget === !0 ? ae.texture.colorSpace : Xt,
            alphaToCoverage: !!w.alphaToCoverage,
            map: ot,
            matcap: _e,
            envMap: nt,
            envMapMode: nt && ee.mapping,
            envMapCubeUVHeight: G,
            aoMap: U,
            lightMap: fn,
            bumpMap: qe,
            normalMap: je,
            displacementMap: f && Ce,
            emissiveMap: ft,
            normalMapObjectSpace: je && w.normalMapType === dp,
            normalMapTangentSpace: je && w.normalMapType === zd,
            metalnessMap: Ae,
            roughnessMap: T,
            anisotropy: y,
            anisotropyMap: ce,
            clearcoat: O,
            clearcoatMap: pe,
            clearcoatNormalMap: Ke,
            clearcoatRoughnessMap: te,
            dispersion: K,
            iridescence: Q,
            iridescenceMap: me,
            iridescenceThicknessMap: Ie,
            sheen: Y,
            sheenColorMap: Ue,
            sheenRoughnessMap: ge,
            specularMap: Ye,
            specularColorMap: ze,
            specularIntensityMap: ct,
            transmission: Se,
            transmissionMap: D,
            thicknessMap: oe,
            gradientMap: W,
            opaque: w.transparent === !1 && w.blending === _i && w.alphaToCoverage === !1,
            alphaMap: Z,
            alphaTest: de,
            alphaHash: le,
            combine: w.combine,
            mapUv: ot && b(w.map.channel),
            aoMapUv: U && b(w.aoMap.channel),
            lightMapUv: fn && b(w.lightMap.channel),
            bumpMapUv: qe && b(w.bumpMap.channel),
            normalMapUv: je && b(w.normalMap.channel),
            displacementMapUv: Ce && b(w.displacementMap.channel),
            emissiveMapUv: ft && b(w.emissiveMap.channel),
            metalnessMapUv: Ae && b(w.metalnessMap.channel),
            roughnessMapUv: T && b(w.roughnessMap.channel),
            anisotropyMapUv: ce && b(w.anisotropyMap.channel),
            clearcoatMapUv: pe && b(w.clearcoatMap.channel),
            clearcoatNormalMapUv: Ke && b(w.clearcoatNormalMap.channel),
            clearcoatRoughnessMapUv: te && b(w.clearcoatRoughnessMap.channel),
            iridescenceMapUv: me && b(w.iridescenceMap.channel),
            iridescenceThicknessMapUv: Ie && b(w.iridescenceThicknessMap.channel),
            sheenColorMapUv: Ue && b(w.sheenColorMap.channel),
            sheenRoughnessMapUv: ge && b(w.sheenRoughnessMap.channel),
            specularMapUv: Ye && b(w.specularMap.channel),
            specularColorMapUv: ze && b(w.specularColorMap.channel),
            specularIntensityMapUv: ct && b(w.specularIntensityMap.channel),
            transmissionMapUv: D && b(w.transmissionMap.channel),
            thicknessMapUv: oe && b(w.thicknessMap.channel),
            alphaMapUv: Z && b(w.alphaMap.channel),
            vertexTangents: !!J.attributes.tangent && (je || y),
            vertexColors: w.vertexColors,
            vertexAlphas: w.vertexColors === !0 && !!J.attributes.color && J.attributes.color.itemSize === 4,
            pointsUvs: B.isPoints === !0 && !!J.attributes.uv && (ot || Z),
            fog: !!V,
            useFog: w.fog === !0,
            fogExp2: !!V && V.isFogExp2,
            flatShading: w.flatShading === !0,
            sizeAttenuation: w.sizeAttenuation === !0,
            logarithmicDepthBuffer: u,
            reverseDepthBuffer: Te,
            skinning: B.isSkinnedMesh === !0,
            morphTargets: J.morphAttributes.position !== void 0,
            morphNormals: J.morphAttributes.normal !== void 0,
            morphColors: J.morphAttributes.color !== void 0,
            morphTargetsCount: Ee,
            morphTextureStride: Ve,
            numDirLights: M.directional.length,
            numPointLights: M.point.length,
            numSpotLights: M.spot.length,
            numSpotLightMaps: M.spotLightMap.length,
            numRectAreaLights: M.rectArea.length,
            numHemiLights: M.hemi.length,
            numDirLightShadows: M.directionalShadowMap.length,
            numPointLightShadows: M.pointShadowMap.length,
            numSpotLightShadows: M.spotShadowMap.length,
            numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
            numLightProbes: M.numLightProbes,
            numClippingPlanes: a.numPlanes,
            numClipIntersection: a.numIntersection,
            dithering: w.dithering,
            shadowMapEnabled: i.shadowMap.enabled && I.length > 0,
            shadowMapType: i.shadowMap.type,
            toneMapping: yt,
            decodeVideoTexture: ot && w.map.isVideoTexture === !0 && Ge.getTransfer(w.map.colorSpace) === et,
            decodeVideoTextureEmissive: ft && w.emissiveMap.isVideoTexture === !0 && Ge.getTransfer(w.emissiveMap.colorSpace) === et,
            premultipliedAlpha: w.premultipliedAlpha,
            doubleSided: w.side === Ot,
            flipSided: w.side === Gt,
            useDepthPacking: w.depthPacking >= 0,
            depthPacking: w.depthPacking || 0,
            index0AttributeName: w.index0AttributeName,
            extensionClipCullDistance: Oe && w.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
            extensionMultiDraw: (Oe && w.extensions.multiDraw === !0 || ke) && n.has("WEBGL_multi_draw"),
            rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
            customProgramCacheKey: w.customProgramCacheKey()
        };
        return zt.vertexUv1s = l.has(1),
        zt.vertexUv2s = l.has(2),
        zt.vertexUv3s = l.has(3),
        l.clear(),
        zt
    }
    function p(w) {
        let M = [];
        if (w.shaderID ? M.push(w.shaderID) : (M.push(w.customVertexShaderID),
        M.push(w.customFragmentShaderID)),
        w.defines !== void 0)
            for (let I in w.defines)
                M.push(I),
                M.push(w.defines[I]);
        return w.isRawShaderMaterial === !1 && (x(M, w),
        v(M, w),
        M.push(i.outputColorSpace)),
        M.push(w.customProgramCacheKey),
        M.join()
    }
    function x(w, M) {
        w.push(M.precision),
        w.push(M.outputColorSpace),
        w.push(M.envMapMode),
        w.push(M.envMapCubeUVHeight),
        w.push(M.mapUv),
        w.push(M.alphaMapUv),
        w.push(M.lightMapUv),
        w.push(M.aoMapUv),
        w.push(M.bumpMapUv),
        w.push(M.normalMapUv),
        w.push(M.displacementMapUv),
        w.push(M.emissiveMapUv),
        w.push(M.metalnessMapUv),
        w.push(M.roughnessMapUv),
        w.push(M.anisotropyMapUv),
        w.push(M.clearcoatMapUv),
        w.push(M.clearcoatNormalMapUv),
        w.push(M.clearcoatRoughnessMapUv),
        w.push(M.iridescenceMapUv),
        w.push(M.iridescenceThicknessMapUv),
        w.push(M.sheenColorMapUv),
        w.push(M.sheenRoughnessMapUv),
        w.push(M.specularMapUv),
        w.push(M.specularColorMapUv),
        w.push(M.specularIntensityMapUv),
        w.push(M.transmissionMapUv),
        w.push(M.thicknessMapUv),
        w.push(M.combine),
        w.push(M.fogExp2),
        w.push(M.sizeAttenuation),
        w.push(M.morphTargetsCount),
        w.push(M.morphAttributeCount),
        w.push(M.numDirLights),
        w.push(M.numPointLights),
        w.push(M.numSpotLights),
        w.push(M.numSpotLightMaps),
        w.push(M.numHemiLights),
        w.push(M.numRectAreaLights),
        w.push(M.numDirLightShadows),
        w.push(M.numPointLightShadows),
        w.push(M.numSpotLightShadows),
        w.push(M.numSpotLightShadowsWithMaps),
        w.push(M.numLightProbes),
        w.push(M.shadowMapType),
        w.push(M.toneMapping),
        w.push(M.numClippingPlanes),
        w.push(M.numClipIntersection),
        w.push(M.depthPacking)
    }
    function v(w, M) {
        o.disableAll(),
        M.supportsVertexTextures && o.enable(0),
        M.instancing && o.enable(1),
        M.instancingColor && o.enable(2),
        M.instancingMorph && o.enable(3),
        M.matcap && o.enable(4),
        M.envMap && o.enable(5),
        M.normalMapObjectSpace && o.enable(6),
        M.normalMapTangentSpace && o.enable(7),
        M.clearcoat && o.enable(8),
        M.iridescence && o.enable(9),
        M.alphaTest && o.enable(10),
        M.vertexColors && o.enable(11),
        M.vertexAlphas && o.enable(12),
        M.vertexUv1s && o.enable(13),
        M.vertexUv2s && o.enable(14),
        M.vertexUv3s && o.enable(15),
        M.vertexTangents && o.enable(16),
        M.anisotropy && o.enable(17),
        M.alphaHash && o.enable(18),
        M.batching && o.enable(19),
        M.dispersion && o.enable(20),
        M.batchingColor && o.enable(21),
        w.push(o.mask),
        o.disableAll(),
        M.fog && o.enable(0),
        M.useFog && o.enable(1),
        M.flatShading && o.enable(2),
        M.logarithmicDepthBuffer && o.enable(3),
        M.reverseDepthBuffer && o.enable(4),
        M.skinning && o.enable(5),
        M.morphTargets && o.enable(6),
        M.morphNormals && o.enable(7),
        M.morphColors && o.enable(8),
        M.premultipliedAlpha && o.enable(9),
        M.shadowMapEnabled && o.enable(10),
        M.doubleSided && o.enable(11),
        M.flipSided && o.enable(12),
        M.useDepthPacking && o.enable(13),
        M.dithering && o.enable(14),
        M.transmission && o.enable(15),
        M.sheen && o.enable(16),
        M.opaque && o.enable(17),
        M.pointsUvs && o.enable(18),
        M.decodeVideoTexture && o.enable(19),
        M.decodeVideoTextureEmissive && o.enable(20),
        M.alphaToCoverage && o.enable(21),
        w.push(o.mask)
    }
    function _(w) {
        let M = m[w.type], I;
        if (M) {
            let H = Ln[M];
            I = Ri.clone(H.uniforms)
        } else
            I = w.uniforms;
        return I
    }
    function P(w, M) {
        let I;
        for (let H = 0, B = h.length; H < B; H++) {
            let V = h[H];
            if (V.cacheKey === M) {
                I = V,
                ++I.usedTimes;
                break
            }
        }
        return I === void 0 && (I = new a_(i,M,w,r),
        h.push(I)),
        I
    }
    function E(w) {
        if (--w.usedTimes === 0) {
            let M = h.indexOf(w);
            h[M] = h[h.length - 1],
            h.pop(),
            w.destroy()
        }
    }
    function R(w) {
        c.remove(w)
    }
    function L() {
        c.dispose()
    }
    return {
        getParameters: g,
        getProgramCacheKey: p,
        getUniforms: _,
        acquireProgram: P,
        releaseProgram: E,
        releaseShaderCache: R,
        programs: h,
        dispose: L
    }
}
function l_() {
    let i = new WeakMap;
    function e(a) {
        return i.has(a)
    }
    function t(a) {
        let o = i.get(a);
        return o === void 0 && (o = {},
        i.set(a, o)),
        o
    }
    function n(a) {
        i.delete(a)
    }
    function s(a, o, c) {
        i.get(a)[o] = c
    }
    function r() {
        i = new WeakMap
    }
    return {
        has: e,
        get: t,
        remove: n,
        update: s,
        dispose: r
    }
}
function h_(i, e) {
    return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id
}
function id(i, e) {
    return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id
}
function sd() {
    let i = []
      , e = 0
      , t = []
      , n = []
      , s = [];
    function r() {
        e = 0,
        t.length = 0,
        n.length = 0,
        s.length = 0
    }
    function a(u, f, d, m, b, g) {
        let p = i[e];
        return p === void 0 ? (p = {
            id: u.id,
            object: u,
            geometry: f,
            material: d,
            groupOrder: m,
            renderOrder: u.renderOrder,
            z: b,
            group: g
        },
        i[e] = p) : (p.id = u.id,
        p.object = u,
        p.geometry = f,
        p.material = d,
        p.groupOrder = m,
        p.renderOrder = u.renderOrder,
        p.z = b,
        p.group = g),
        e++,
        p
    }
    function o(u, f, d, m, b, g) {
        let p = a(u, f, d, m, b, g);
        d.transmission > 0 ? n.push(p) : d.transparent === !0 ? s.push(p) : t.push(p)
    }
    function c(u, f, d, m, b, g) {
        let p = a(u, f, d, m, b, g);
        d.transmission > 0 ? n.unshift(p) : d.transparent === !0 ? s.unshift(p) : t.unshift(p)
    }
    function l(u, f) {
        t.length > 1 && t.sort(u || h_),
        n.length > 1 && n.sort(f || id),
        s.length > 1 && s.sort(f || id)
    }
    function h() {
        for (let u = e, f = i.length; u < f; u++) {
            let d = i[u];
            if (d.id === null)
                break;
            d.id = null,
            d.object = null,
            d.geometry = null,
            d.material = null,
            d.group = null
        }
    }
    return {
        opaque: t,
        transmissive: n,
        transparent: s,
        init: r,
        push: o,
        unshift: c,
        finish: h,
        sort: l
    }
}
function u_() {
    let i = new WeakMap;
    function e(n, s) {
        let r = i.get(n), a;
        return r === void 0 ? (a = new sd,
        i.set(n, [a])) : s >= r.length ? (a = new sd,
        r.push(a)) : a = r[s],
        a
    }
    function t() {
        i = new WeakMap
    }
    return {
        get: e,
        dispose: t
    }
}
function d_() {
    let i = {};
    return {
        get: function(e) {
            if (i[e.id] !== void 0)
                return i[e.id];
            let t;
            switch (e.type) {
            case "DirectionalLight":
                t = {
                    direction: new C,
                    color: new ue
                };
                break;
            case "SpotLight":
                t = {
                    position: new C,
                    direction: new C,
                    color: new ue,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0
                };
                break;
            case "PointLight":
                t = {
                    position: new C,
                    color: new ue,
                    distance: 0,
                    decay: 0
                };
                break;
            case "HemisphereLight":
                t = {
                    direction: new C,
                    skyColor: new ue,
                    groundColor: new ue
                };
                break;
            case "RectAreaLight":
                t = {
                    color: new ue,
                    position: new C,
                    halfWidth: new C,
                    halfHeight: new C
                };
                break
            }
            return i[e.id] = t,
            t
        }
    }
}
function f_() {
    let i = {};
    return {
        get: function(e) {
            if (i[e.id] !== void 0)
                return i[e.id];
            let t;
            switch (e.type) {
            case "DirectionalLight":
                t = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new ne
                };
                break;
            case "SpotLight":
                t = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new ne
                };
                break;
            case "PointLight":
                t = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new ne,
                    shadowCameraNear: 1,
                    shadowCameraFar: 1e3
                };
                break
            }
            return i[e.id] = t,
            t
        }
    }
}
var p_ = 0;
function m_(i, e) {
    return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0)
}
function g_(i) {
    let e = new d_
      , t = f_()
      , n = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
            numSpotMaps: -1,
            numLightProbes: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
        numLightProbes: 0
    };
    for (let l = 0; l < 9; l++)
        n.probe.push(new C);
    let s = new C
      , r = new Le
      , a = new Le;
    function o(l) {
        let h = 0
          , u = 0
          , f = 0;
        for (let w = 0; w < 9; w++)
            n.probe[w].set(0, 0, 0);
        let d = 0
          , m = 0
          , b = 0
          , g = 0
          , p = 0
          , x = 0
          , v = 0
          , _ = 0
          , P = 0
          , E = 0
          , R = 0;
        l.sort(m_);
        for (let w = 0, M = l.length; w < M; w++) {
            let I = l[w]
              , H = I.color
              , B = I.intensity
              , V = I.distance
              , J = I.shadow && I.shadow.map ? I.shadow.map.texture : null;
            if (I.isAmbientLight)
                h += H.r * B,
                u += H.g * B,
                f += H.b * B;
            else if (I.isLightProbe) {
                for (let X = 0; X < 9; X++)
                    n.probe[X].addScaledVector(I.sh.coefficients[X], B);
                R++
            } else if (I.isDirectionalLight) {
                let X = e.get(I);
                if (X.color.copy(I.color).multiplyScalar(I.intensity),
                I.castShadow) {
                    let ee = I.shadow
                      , G = t.get(I);
                    G.shadowIntensity = ee.intensity,
                    G.shadowBias = ee.bias,
                    G.shadowNormalBias = ee.normalBias,
                    G.shadowRadius = ee.radius,
                    G.shadowMapSize = ee.mapSize,
                    n.directionalShadow[d] = G,
                    n.directionalShadowMap[d] = J,
                    n.directionalShadowMatrix[d] = I.shadow.matrix,
                    x++
                }
                n.directional[d] = X,
                d++
            } else if (I.isSpotLight) {
                let X = e.get(I);
                X.position.setFromMatrixPosition(I.matrixWorld),
                X.color.copy(H).multiplyScalar(B),
                X.distance = V,
                X.coneCos = Math.cos(I.angle),
                X.penumbraCos = Math.cos(I.angle * (1 - I.penumbra)),
                X.decay = I.decay,
                n.spot[b] = X;
                let ee = I.shadow;
                if (I.map && (n.spotLightMap[P] = I.map,
                P++,
                ee.updateMatrices(I),
                I.castShadow && E++),
                n.spotLightMatrix[b] = ee.matrix,
                I.castShadow) {
                    let G = t.get(I);
                    G.shadowIntensity = ee.intensity,
                    G.shadowBias = ee.bias,
                    G.shadowNormalBias = ee.normalBias,
                    G.shadowRadius = ee.radius,
                    G.shadowMapSize = ee.mapSize,
                    n.spotShadow[b] = G,
                    n.spotShadowMap[b] = J,
                    _++
                }
                b++
            } else if (I.isRectAreaLight) {
                let X = e.get(I);
                X.color.copy(H).multiplyScalar(B),
                X.halfWidth.set(I.width * .5, 0, 0),
                X.halfHeight.set(0, I.height * .5, 0),
                n.rectArea[g] = X,
                g++
            } else if (I.isPointLight) {
                let X = e.get(I);
                if (X.color.copy(I.color).multiplyScalar(I.intensity),
                X.distance = I.distance,
                X.decay = I.decay,
                I.castShadow) {
                    let ee = I.shadow
                      , G = t.get(I);
                    G.shadowIntensity = ee.intensity,
                    G.shadowBias = ee.bias,
                    G.shadowNormalBias = ee.normalBias,
                    G.shadowRadius = ee.radius,
                    G.shadowMapSize = ee.mapSize,
                    G.shadowCameraNear = ee.camera.near,
                    G.shadowCameraFar = ee.camera.far,
                    n.pointShadow[m] = G,
                    n.pointShadowMap[m] = J,
                    n.pointShadowMatrix[m] = I.shadow.matrix,
                    v++
                }
                n.point[m] = X,
                m++
            } else if (I.isHemisphereLight) {
                let X = e.get(I);
                X.skyColor.copy(I.color).multiplyScalar(B),
                X.groundColor.copy(I.groundColor).multiplyScalar(B),
                n.hemi[p] = X,
                p++
            }
        }
        g > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = re.LTC_FLOAT_1,
        n.rectAreaLTC2 = re.LTC_FLOAT_2) : (n.rectAreaLTC1 = re.LTC_HALF_1,
        n.rectAreaLTC2 = re.LTC_HALF_2)),
        n.ambient[0] = h,
        n.ambient[1] = u,
        n.ambient[2] = f;
        let L = n.hash;
        (L.directionalLength !== d || L.pointLength !== m || L.spotLength !== b || L.rectAreaLength !== g || L.hemiLength !== p || L.numDirectionalShadows !== x || L.numPointShadows !== v || L.numSpotShadows !== _ || L.numSpotMaps !== P || L.numLightProbes !== R) && (n.directional.length = d,
        n.spot.length = b,
        n.rectArea.length = g,
        n.point.length = m,
        n.hemi.length = p,
        n.directionalShadow.length = x,
        n.directionalShadowMap.length = x,
        n.pointShadow.length = v,
        n.pointShadowMap.length = v,
        n.spotShadow.length = _,
        n.spotShadowMap.length = _,
        n.directionalShadowMatrix.length = x,
        n.pointShadowMatrix.length = v,
        n.spotLightMatrix.length = _ + P - E,
        n.spotLightMap.length = P,
        n.numSpotLightShadowsWithMaps = E,
        n.numLightProbes = R,
        L.directionalLength = d,
        L.pointLength = m,
        L.spotLength = b,
        L.rectAreaLength = g,
        L.hemiLength = p,
        L.numDirectionalShadows = x,
        L.numPointShadows = v,
        L.numSpotShadows = _,
        L.numSpotMaps = P,
        L.numLightProbes = R,
        n.version = p_++)
    }
    function c(l, h) {
        let u = 0
          , f = 0
          , d = 0
          , m = 0
          , b = 0
          , g = h.matrixWorldInverse;
        for (let p = 0, x = l.length; p < x; p++) {
            let v = l[p];
            if (v.isDirectionalLight) {
                let _ = n.directional[u];
                _.direction.setFromMatrixPosition(v.matrixWorld),
                s.setFromMatrixPosition(v.target.matrixWorld),
                _.direction.sub(s),
                _.direction.transformDirection(g),
                u++
            } else if (v.isSpotLight) {
                let _ = n.spot[d];
                _.position.setFromMatrixPosition(v.matrixWorld),
                _.position.applyMatrix4(g),
                _.direction.setFromMatrixPosition(v.matrixWorld),
                s.setFromMatrixPosition(v.target.matrixWorld),
                _.direction.sub(s),
                _.direction.transformDirection(g),
                d++
            } else if (v.isRectAreaLight) {
                let _ = n.rectArea[m];
                _.position.setFromMatrixPosition(v.matrixWorld),
                _.position.applyMatrix4(g),
                a.identity(),
                r.copy(v.matrixWorld),
                r.premultiply(g),
                a.extractRotation(r),
                _.halfWidth.set(v.width * .5, 0, 0),
                _.halfHeight.set(0, v.height * .5, 0),
                _.halfWidth.applyMatrix4(a),
                _.halfHeight.applyMatrix4(a),
                m++
            } else if (v.isPointLight) {
                let _ = n.point[f];
                _.position.setFromMatrixPosition(v.matrixWorld),
                _.position.applyMatrix4(g),
                f++
            } else if (v.isHemisphereLight) {
                let _ = n.hemi[b];
                _.direction.setFromMatrixPosition(v.matrixWorld),
                _.direction.transformDirection(g),
                b++
            }
        }
    }
    return {
        setup: o,
        setupView: c,
        state: n
    }
}
function rd(i) {
    let e = new g_(i)
      , t = []
      , n = [];
    function s(h) {
        l.camera = h,
        t.length = 0,
        n.length = 0
    }
    function r(h) {
        t.push(h)
    }
    function a(h) {
        n.push(h)
    }
    function o() {
        e.setup(t)
    }
    function c(h) {
        e.setupView(t, h)
    }
    let l = {
        lightsArray: t,
        shadowsArray: n,
        camera: null,
        lights: e,
        transmissionRenderTarget: {}
    };
    return {
        init: s,
        state: l,
        setupLights: o,
        setupLightsView: c,
        pushLight: r,
        pushShadow: a
    }
}
function b_(i) {
    let e = new WeakMap;
    function t(s, r=0) {
        let a = e.get(s), o;
        return a === void 0 ? (o = new rd(i),
        e.set(s, [o])) : r >= a.length ? (o = new rd(i),
        a.push(o)) : o = a[r],
        o
    }
    function n() {
        e = new WeakMap
    }
    return {
        get: t,
        dispose: n
    }
}
var sl = class extends sn {
    static get type() {
        return "MeshDepthMaterial"
    }
    constructor(e) {
        super(),
        this.isMeshDepthMaterial = !0,
        this.depthPacking = hp,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.depthPacking = e.depthPacking,
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this
    }
}
  , rl = class extends sn {
    static get type() {
        return "MeshDistanceMaterial"
    }
    constructor(e) {
        super(),
        this.isMeshDistanceMaterial = !0,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this
    }
}
  , __ = `void main() {
	gl_Position = vec4( position, 1.0 );
}`
  , x_ = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function v_(i, e, t) {
    let n = new _r
      , s = new ne
      , r = new ne
      , a = new Je
      , o = new sl({
        depthPacking: up
    })
      , c = new rl
      , l = {}
      , h = t.maxTextureSize
      , u = {
        [Nn]: Gt,
        [Gt]: Nn,
        [Ot]: Ot
    }
      , f = new Mt({
        defines: {
            VSM_SAMPLES: 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new ne
            },
            radius: {
                value: 4
            }
        },
        vertexShader: __,
        fragmentShader: x_
    })
      , d = f.clone();
    d.defines.HORIZONTAL_PASS = 1;
    let m = new bt;
    m.setAttribute("position", new ut(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
    let b = new be(m,f)
      , g = this;
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = Ad;
    let p = this.type;
    this.render = function(E, R, L) {
        if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || E.length === 0)
            return;
        let w = i.getRenderTarget()
          , M = i.getActiveCubeFace()
          , I = i.getActiveMipmapLevel()
          , H = i.state;
        H.setBlending(Un),
        H.buffers.color.setClear(1, 1, 1, 1),
        H.buffers.depth.setTest(!0),
        H.setScissorTest(!1);
        let B = p !== qn && this.type === qn
          , V = p === qn && this.type !== qn;
        for (let J = 0, X = E.length; J < X; J++) {
            let ee = E[J]
              , G = ee.shadow;
            if (G === void 0) {
                console.warn("THREE.WebGLShadowMap:", ee, "has no shadow.");
                continue
            }
            if (G.autoUpdate === !1 && G.needsUpdate === !1)
                continue;
            s.copy(G.mapSize);
            let se = G.getFrameExtents();
            if (s.multiply(se),
            r.copy(G.mapSize),
            (s.x > h || s.y > h) && (s.x > h && (r.x = Math.floor(h / se.x),
            s.x = r.x * se.x,
            G.mapSize.x = r.x),
            s.y > h && (r.y = Math.floor(h / se.y),
            s.y = r.y * se.y,
            G.mapSize.y = r.y)),
            G.map === null || B === !0 || V === !0) {
                let Ee = this.type !== qn ? {
                    minFilter: Wt,
                    magFilter: Wt
                } : {};
                G.map !== null && G.map.dispose(),
                G.map = new kt(s.x,s.y,Ee),
                G.map.texture.name = ee.name + ".shadowMap",
                G.camera.updateProjectionMatrix()
            }
            i.setRenderTarget(G.map),
            i.clear();
            let fe = G.getViewportCount();
            for (let Ee = 0; Ee < fe; Ee++) {
                let Ve = G.getViewport(Ee);
                a.set(r.x * Ve.x, r.y * Ve.y, r.x * Ve.z, r.y * Ve.w),
                H.viewport(a),
                G.updateMatrices(ee, Ee),
                n = G.getFrustum(),
                _(R, L, G.camera, ee, this.type)
            }
            G.isPointLightShadow !== !0 && this.type === qn && x(G, L),
            G.needsUpdate = !1
        }
        p = this.type,
        g.needsUpdate = !1,
        i.setRenderTarget(w, M, I)
    }
    ;
    function x(E, R) {
        let L = e.update(b);
        f.defines.VSM_SAMPLES !== E.blurSamples && (f.defines.VSM_SAMPLES = E.blurSamples,
        d.defines.VSM_SAMPLES = E.blurSamples,
        f.needsUpdate = !0,
        d.needsUpdate = !0),
        E.mapPass === null && (E.mapPass = new kt(s.x,s.y)),
        f.uniforms.shadow_pass.value = E.map.texture,
        f.uniforms.resolution.value = E.mapSize,
        f.uniforms.radius.value = E.radius,
        i.setRenderTarget(E.mapPass),
        i.clear(),
        i.renderBufferDirect(R, null, L, f, b, null),
        d.uniforms.shadow_pass.value = E.mapPass.texture,
        d.uniforms.resolution.value = E.mapSize,
        d.uniforms.radius.value = E.radius,
        i.setRenderTarget(E.map),
        i.clear(),
        i.renderBufferDirect(R, null, L, d, b, null)
    }
    function v(E, R, L, w) {
        let M = null
          , I = L.isPointLight === !0 ? E.customDistanceMaterial : E.customDepthMaterial;
        if (I !== void 0)
            M = I;
        else if (M = L.isPointLight === !0 ? c : o,
        i.localClippingEnabled && R.clipShadows === !0 && Array.isArray(R.clippingPlanes) && R.clippingPlanes.length !== 0 || R.displacementMap && R.displacementScale !== 0 || R.alphaMap && R.alphaTest > 0 || R.map && R.alphaTest > 0) {
            let H = M.uuid
              , B = R.uuid
              , V = l[H];
            V === void 0 && (V = {},
            l[H] = V);
            let J = V[B];
            J === void 0 && (J = M.clone(),
            V[B] = J,
            R.addEventListener("dispose", P)),
            M = J
        }
        if (M.visible = R.visible,
        M.wireframe = R.wireframe,
        w === qn ? M.side = R.shadowSide !== null ? R.shadowSide : R.side : M.side = R.shadowSide !== null ? R.shadowSide : u[R.side],
        M.alphaMap = R.alphaMap,
        M.alphaTest = R.alphaTest,
        M.map = R.map,
        M.clipShadows = R.clipShadows,
        M.clippingPlanes = R.clippingPlanes,
        M.clipIntersection = R.clipIntersection,
        M.displacementMap = R.displacementMap,
        M.displacementScale = R.displacementScale,
        M.displacementBias = R.displacementBias,
        M.wireframeLinewidth = R.wireframeLinewidth,
        M.linewidth = R.linewidth,
        L.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
            let H = i.properties.get(M);
            H.light = L
        }
        return M
    }
    function _(E, R, L, w, M) {
        if (E.visible === !1)
            return;
        if (E.layers.test(R.layers) && (E.isMesh || E.isLine || E.isPoints) && (E.castShadow || E.receiveShadow && M === qn) && (!E.frustumCulled || n.intersectsObject(E))) {
            E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse, E.matrixWorld);
            let B = e.update(E)
              , V = E.material;
            if (Array.isArray(V)) {
                let J = B.groups;
                for (let X = 0, ee = J.length; X < ee; X++) {
                    let G = J[X]
                      , se = V[G.materialIndex];
                    if (se && se.visible) {
                        let fe = v(E, se, w, M);
                        E.onBeforeShadow(i, E, R, L, B, fe, G),
                        i.renderBufferDirect(L, null, B, fe, E, G),
                        E.onAfterShadow(i, E, R, L, B, fe, G)
                    }
                }
            } else if (V.visible) {
                let J = v(E, V, w, M);
                E.onBeforeShadow(i, E, R, L, B, J, null),
                i.renderBufferDirect(L, null, B, J, E, null),
                E.onAfterShadow(i, E, R, L, B, J, null)
            }
        }
        let H = E.children;
        for (let B = 0, V = H.length; B < V; B++)
            _(H[B], R, L, w, M)
    }
    function P(E) {
        E.target.removeEventListener("dispose", P);
        for (let L in l) {
            let w = l[L]
              , M = E.target.uuid;
            M in w && (w[M].dispose(),
            delete w[M])
        }
    }
}
var y_ = {
    [uc]: dc,
    [fc]: gc,
    [pc]: bc,
    [Ss]: mc,
    [dc]: uc,
    [gc]: fc,
    [bc]: pc,
    [mc]: Ss
};
function M_(i, e) {
    function t() {
        let D = !1
          , oe = new Je
          , W = null
          , Z = new Je(0,0,0,0);
        return {
            setMask: function(de) {
                W !== de && !D && (i.colorMask(de, de, de, de),
                W = de)
            },
            setLocked: function(de) {
                D = de
            },
            setClear: function(de, le, Oe, yt, zt) {
                zt === !0 && (de *= yt,
                le *= yt,
                Oe *= yt),
                oe.set(de, le, Oe, yt),
                Z.equals(oe) === !1 && (i.clearColor(de, le, Oe, yt),
                Z.copy(oe))
            },
            reset: function() {
                D = !1,
                W = null,
                Z.set(-1, 0, 0, 0)
            }
        }
    }
    function n() {
        let D = !1
          , oe = !1
          , W = null
          , Z = null
          , de = null;
        return {
            setReversed: function(le) {
                if (oe !== le) {
                    let Oe = e.get("EXT_clip_control");
                    oe ? Oe.clipControlEXT(Oe.LOWER_LEFT_EXT, Oe.ZERO_TO_ONE_EXT) : Oe.clipControlEXT(Oe.LOWER_LEFT_EXT, Oe.NEGATIVE_ONE_TO_ONE_EXT);
                    let yt = de;
                    de = null,
                    this.setClear(yt)
                }
                oe = le
            },
            getReversed: function() {
                return oe
            },
            setTest: function(le) {
                le ? ae(i.DEPTH_TEST) : Te(i.DEPTH_TEST)
            },
            setMask: function(le) {
                W !== le && !D && (i.depthMask(le),
                W = le)
            },
            setFunc: function(le) {
                if (oe && (le = y_[le]),
                Z !== le) {
                    switch (le) {
                    case uc:
                        i.depthFunc(i.NEVER);
                        break;
                    case dc:
                        i.depthFunc(i.ALWAYS);
                        break;
                    case fc:
                        i.depthFunc(i.LESS);
                        break;
                    case Ss:
                        i.depthFunc(i.LEQUAL);
                        break;
                    case pc:
                        i.depthFunc(i.EQUAL);
                        break;
                    case mc:
                        i.depthFunc(i.GEQUAL);
                        break;
                    case gc:
                        i.depthFunc(i.GREATER);
                        break;
                    case bc:
                        i.depthFunc(i.NOTEQUAL);
                        break;
                    default:
                        i.depthFunc(i.LEQUAL)
                    }
                    Z = le
                }
            },
            setLocked: function(le) {
                D = le
            },
            setClear: function(le) {
                de !== le && (oe && (le = 1 - le),
                i.clearDepth(le),
                de = le)
            },
            reset: function() {
                D = !1,
                W = null,
                Z = null,
                de = null,
                oe = !1
            }
        }
    }
    function s() {
        let D = !1
          , oe = null
          , W = null
          , Z = null
          , de = null
          , le = null
          , Oe = null
          , yt = null
          , zt = null;
        return {
            setTest: function(it) {
                D || (it ? ae(i.STENCIL_TEST) : Te(i.STENCIL_TEST))
            },
            setMask: function(it) {
                oe !== it && !D && (i.stencilMask(it),
                oe = it)
            },
            setFunc: function(it, yn, Bn) {
                (W !== it || Z !== yn || de !== Bn) && (i.stencilFunc(it, yn, Bn),
                W = it,
                Z = yn,
                de = Bn)
            },
            setOp: function(it, yn, Bn) {
                (le !== it || Oe !== yn || yt !== Bn) && (i.stencilOp(it, yn, Bn),
                le = it,
                Oe = yn,
                yt = Bn)
            },
            setLocked: function(it) {
                D = it
            },
            setClear: function(it) {
                zt !== it && (i.clearStencil(it),
                zt = it)
            },
            reset: function() {
                D = !1,
                oe = null,
                W = null,
                Z = null,
                de = null,
                le = null,
                Oe = null,
                yt = null,
                zt = null
            }
        }
    }
    let r = new t
      , a = new n
      , o = new s
      , c = new WeakMap
      , l = new WeakMap
      , h = {}
      , u = {}
      , f = new WeakMap
      , d = []
      , m = null
      , b = !1
      , g = null
      , p = null
      , x = null
      , v = null
      , _ = null
      , P = null
      , E = null
      , R = new ue(0,0,0)
      , L = 0
      , w = !1
      , M = null
      , I = null
      , H = null
      , B = null
      , V = null
      , J = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
      , X = !1
      , ee = 0
      , G = i.getParameter(i.VERSION);
    G.indexOf("WebGL") !== -1 ? (ee = parseFloat(/^WebGL (\d)/.exec(G)[1]),
    X = ee >= 1) : G.indexOf("OpenGL ES") !== -1 && (ee = parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),
    X = ee >= 2);
    let se = null
      , fe = {}
      , Ee = i.getParameter(i.SCISSOR_BOX)
      , Ve = i.getParameter(i.VIEWPORT)
      , tt = new Je().fromArray(Ee)
      , j = new Je().fromArray(Ve);
    function $(D, oe, W, Z) {
        let de = new Uint8Array(4)
          , le = i.createTexture();
        i.bindTexture(D, le),
        i.texParameteri(D, i.TEXTURE_MIN_FILTER, i.NEAREST),
        i.texParameteri(D, i.TEXTURE_MAG_FILTER, i.NEAREST);
        for (let Oe = 0; Oe < W; Oe++)
            D === i.TEXTURE_3D || D === i.TEXTURE_2D_ARRAY ? i.texImage3D(oe, 0, i.RGBA, 1, 1, Z, 0, i.RGBA, i.UNSIGNED_BYTE, de) : i.texImage2D(oe + Oe, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, de);
        return le
    }
    let xe = {};
    xe[i.TEXTURE_2D] = $(i.TEXTURE_2D, i.TEXTURE_2D, 1),
    xe[i.TEXTURE_CUBE_MAP] = $(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
    xe[i.TEXTURE_2D_ARRAY] = $(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1),
    xe[i.TEXTURE_3D] = $(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1),
    r.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    ae(i.DEPTH_TEST),
    a.setFunc(Ss),
    qe(!1),
    je(ou),
    ae(i.CULL_FACE),
    U(Un);
    function ae(D) {
        h[D] !== !0 && (i.enable(D),
        h[D] = !0)
    }
    function Te(D) {
        h[D] !== !1 && (i.disable(D),
        h[D] = !1)
    }
    function De(D, oe) {
        return u[D] !== oe ? (i.bindFramebuffer(D, oe),
        u[D] = oe,
        D === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = oe),
        D === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = oe),
        !0) : !1
    }
    function ke(D, oe) {
        let W = d
          , Z = !1;
        if (D) {
            W = f.get(oe),
            W === void 0 && (W = [],
            f.set(oe, W));
            let de = D.textures;
            if (W.length !== de.length || W[0] !== i.COLOR_ATTACHMENT0) {
                for (let le = 0, Oe = de.length; le < Oe; le++)
                    W[le] = i.COLOR_ATTACHMENT0 + le;
                W.length = de.length,
                Z = !0
            }
        } else
            W[0] !== i.BACK && (W[0] = i.BACK,
            Z = !0);
        Z && i.drawBuffers(W)
    }
    function ot(D) {
        return m !== D ? (i.useProgram(D),
        m = D,
        !0) : !1
    }
    let _e = {
        [Vi]: i.FUNC_ADD,
        [Vf]: i.FUNC_SUBTRACT,
        [Gf]: i.FUNC_REVERSE_SUBTRACT
    };
    _e[Wf] = i.MIN,
    _e[Xf] = i.MAX;
    let nt = {
        [qf]: i.ZERO,
        [jf]: i.ONE,
        [Yf]: i.SRC_COLOR,
        [lc]: i.SRC_ALPHA,
        [ep]: i.SRC_ALPHA_SATURATE,
        [Qf]: i.DST_COLOR,
        [Zf]: i.DST_ALPHA,
        [Kf]: i.ONE_MINUS_SRC_COLOR,
        [hc]: i.ONE_MINUS_SRC_ALPHA,
        [$f]: i.ONE_MINUS_DST_COLOR,
        [Jf]: i.ONE_MINUS_DST_ALPHA,
        [tp]: i.CONSTANT_COLOR,
        [np]: i.ONE_MINUS_CONSTANT_COLOR,
        [ip]: i.CONSTANT_ALPHA,
        [sp]: i.ONE_MINUS_CONSTANT_ALPHA
    };
    function U(D, oe, W, Z, de, le, Oe, yt, zt, it) {
        if (D === Un) {
            b === !0 && (Te(i.BLEND),
            b = !1);
            return
        }
        if (b === !1 && (ae(i.BLEND),
        b = !0),
        D !== Hf) {
            if (D !== g || it !== w) {
                if ((p !== Vi || _ !== Vi) && (i.blendEquation(i.FUNC_ADD),
                p = Vi,
                _ = Vi),
                it)
                    switch (D) {
                    case _i:
                        i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                        break;
                    case Xi:
                        i.blendFunc(i.ONE, i.ONE);
                        break;
                    case cu:
                        i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
                        break;
                    case lu:
                        i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", D);
                        break
                    }
                else
                    switch (D) {
                    case _i:
                        i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                        break;
                    case Xi:
                        i.blendFunc(i.SRC_ALPHA, i.ONE);
                        break;
                    case cu:
                        i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
                        break;
                    case lu:
                        i.blendFunc(i.ZERO, i.SRC_COLOR);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", D);
                        break
                    }
                x = null,
                v = null,
                P = null,
                E = null,
                R.set(0, 0, 0),
                L = 0,
                g = D,
                w = it
            }
            return
        }
        de = de || oe,
        le = le || W,
        Oe = Oe || Z,
        (oe !== p || de !== _) && (i.blendEquationSeparate(_e[oe], _e[de]),
        p = oe,
        _ = de),
        (W !== x || Z !== v || le !== P || Oe !== E) && (i.blendFuncSeparate(nt[W], nt[Z], nt[le], nt[Oe]),
        x = W,
        v = Z,
        P = le,
        E = Oe),
        (yt.equals(R) === !1 || zt !== L) && (i.blendColor(yt.r, yt.g, yt.b, zt),
        R.copy(yt),
        L = zt),
        g = D,
        w = !1
    }
    function fn(D, oe) {
        D.side === Ot ? Te(i.CULL_FACE) : ae(i.CULL_FACE);
        let W = D.side === Gt;
        oe && (W = !W),
        qe(W),
        D.blending === _i && D.transparent === !1 ? U(Un) : U(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha),
        a.setFunc(D.depthFunc),
        a.setTest(D.depthTest),
        a.setMask(D.depthWrite),
        r.setMask(D.colorWrite);
        let Z = D.stencilWrite;
        o.setTest(Z),
        Z && (o.setMask(D.stencilWriteMask),
        o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask),
        o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)),
        ft(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits),
        D.alphaToCoverage === !0 ? ae(i.SAMPLE_ALPHA_TO_COVERAGE) : Te(i.SAMPLE_ALPHA_TO_COVERAGE)
    }
    function qe(D) {
        M !== D && (D ? i.frontFace(i.CW) : i.frontFace(i.CCW),
        M = D)
    }
    function je(D) {
        D !== kf ? (ae(i.CULL_FACE),
        D !== I && (D === ou ? i.cullFace(i.BACK) : D === zf ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Te(i.CULL_FACE),
        I = D
    }
    function Ce(D) {
        D !== H && (X && i.lineWidth(D),
        H = D)
    }
    function ft(D, oe, W) {
        D ? (ae(i.POLYGON_OFFSET_FILL),
        (B !== oe || V !== W) && (i.polygonOffset(oe, W),
        B = oe,
        V = W)) : Te(i.POLYGON_OFFSET_FILL)
    }
    function Ae(D) {
        D ? ae(i.SCISSOR_TEST) : Te(i.SCISSOR_TEST)
    }
    function T(D) {
        D === void 0 && (D = i.TEXTURE0 + J - 1),
        se !== D && (i.activeTexture(D),
        se = D)
    }
    function y(D, oe, W) {
        W === void 0 && (se === null ? W = i.TEXTURE0 + J - 1 : W = se);
        let Z = fe[W];
        Z === void 0 && (Z = {
            type: void 0,
            texture: void 0
        },
        fe[W] = Z),
        (Z.type !== D || Z.texture !== oe) && (se !== W && (i.activeTexture(W),
        se = W),
        i.bindTexture(D, oe || xe[D]),
        Z.type = D,
        Z.texture = oe)
    }
    function O() {
        let D = fe[se];
        D !== void 0 && D.type !== void 0 && (i.bindTexture(D.type, null),
        D.type = void 0,
        D.texture = void 0)
    }
    function K() {
        try {
            i.compressedTexImage2D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function Q() {
        try {
            i.compressedTexImage3D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function Y() {
        try {
            i.texSubImage2D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function Se() {
        try {
            i.texSubImage3D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function ce() {
        try {
            i.compressedTexSubImage2D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function pe() {
        try {
            i.compressedTexSubImage3D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function Ke() {
        try {
            i.texStorage2D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function te() {
        try {
            i.texStorage3D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function me() {
        try {
            i.texImage2D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function Ie() {
        try {
            i.texImage3D.apply(i, arguments)
        } catch (D) {
            console.error("THREE.WebGLState:", D)
        }
    }
    function Ue(D) {
        tt.equals(D) === !1 && (i.scissor(D.x, D.y, D.z, D.w),
        tt.copy(D))
    }
    function ge(D) {
        j.equals(D) === !1 && (i.viewport(D.x, D.y, D.z, D.w),
        j.copy(D))
    }
    function Ye(D, oe) {
        let W = l.get(oe);
        W === void 0 && (W = new WeakMap,
        l.set(oe, W));
        let Z = W.get(D);
        Z === void 0 && (Z = i.getUniformBlockIndex(oe, D.name),
        W.set(D, Z))
    }
    function ze(D, oe) {
        let Z = l.get(oe).get(D);
        c.get(oe) !== Z && (i.uniformBlockBinding(oe, Z, D.__bindingPointIndex),
        c.set(oe, Z))
    }
    function ct() {
        i.disable(i.BLEND),
        i.disable(i.CULL_FACE),
        i.disable(i.DEPTH_TEST),
        i.disable(i.POLYGON_OFFSET_FILL),
        i.disable(i.SCISSOR_TEST),
        i.disable(i.STENCIL_TEST),
        i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
        i.blendEquation(i.FUNC_ADD),
        i.blendFunc(i.ONE, i.ZERO),
        i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
        i.blendColor(0, 0, 0, 0),
        i.colorMask(!0, !0, !0, !0),
        i.clearColor(0, 0, 0, 0),
        i.depthMask(!0),
        i.depthFunc(i.LESS),
        a.setReversed(!1),
        i.clearDepth(1),
        i.stencilMask(4294967295),
        i.stencilFunc(i.ALWAYS, 0, 4294967295),
        i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
        i.clearStencil(0),
        i.cullFace(i.BACK),
        i.frontFace(i.CCW),
        i.polygonOffset(0, 0),
        i.activeTexture(i.TEXTURE0),
        i.bindFramebuffer(i.FRAMEBUFFER, null),
        i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
        i.useProgram(null),
        i.lineWidth(1),
        i.scissor(0, 0, i.canvas.width, i.canvas.height),
        i.viewport(0, 0, i.canvas.width, i.canvas.height),
        h = {},
        se = null,
        fe = {},
        u = {},
        f = new WeakMap,
        d = [],
        m = null,
        b = !1,
        g = null,
        p = null,
        x = null,
        v = null,
        _ = null,
        P = null,
        E = null,
        R = new ue(0,0,0),
        L = 0,
        w = !1,
        M = null,
        I = null,
        H = null,
        B = null,
        V = null,
        tt.set(0, 0, i.canvas.width, i.canvas.height),
        j.set(0, 0, i.canvas.width, i.canvas.height),
        r.reset(),
        a.reset(),
        o.reset()
    }
    return {
        buffers: {
            color: r,
            depth: a,
            stencil: o
        },
        enable: ae,
        disable: Te,
        bindFramebuffer: De,
        drawBuffers: ke,
        useProgram: ot,
        setBlending: U,
        setMaterial: fn,
        setFlipSided: qe,
        setCullFace: je,
        setLineWidth: Ce,
        setPolygonOffset: ft,
        setScissorTest: Ae,
        activeTexture: T,
        bindTexture: y,
        unbindTexture: O,
        compressedTexImage2D: K,
        compressedTexImage3D: Q,
        texImage2D: me,
        texImage3D: Ie,
        updateUBOMapping: Ye,
        uniformBlockBinding: ze,
        texStorage2D: Ke,
        texStorage3D: te,
        texSubImage2D: Y,
        texSubImage3D: Se,
        compressedTexSubImage2D: ce,
        compressedTexSubImage3D: pe,
        scissor: Ue,
        viewport: ge,
        reset: ct
    }
}
function ad(i, e, t, n) {
    let s = S_(n);
    switch (t) {
    case Dd:
        return i * e;
    case Nd:
        return i * e;
    case Fd:
        return i * e * 2;
    case Bl:
        return i * e / s.components * s.byteLength;
    case kl:
        return i * e / s.components * s.byteLength;
    case Od:
        return i * e * 2 / s.components * s.byteLength;
    case zl:
        return i * e * 2 / s.components * s.byteLength;
    case Ud:
        return i * e * 3 / s.components * s.byteLength;
    case gn:
        return i * e * 4 / s.components * s.byteLength;
    case Hl:
        return i * e * 4 / s.components * s.byteLength;
    case ga:
    case ba:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case _a:
    case xa:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case yc:
    case Sc:
        return Math.max(i, 16) * Math.max(e, 8) / 4;
    case vc:
    case Mc:
        return Math.max(i, 8) * Math.max(e, 8) / 2;
    case wc:
    case Ec:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Tc:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ac:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Rc:
        return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Cc:
        return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Pc:
        return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Ic:
        return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Lc:
        return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Dc:
        return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Uc:
        return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Nc:
        return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Fc:
        return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Oc:
        return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Bc:
        return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case kc:
        return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case zc:
        return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case va:
    case Hc:
    case Vc:
        return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case Bd:
    case Gc:
        return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case Wc:
    case Xc:
        return Math.ceil(i / 4) * Math.ceil(e / 4) * 16
    }
    throw new Error(`Unable to determine texture byte length for ${t} format.`)
}
function S_(i) {
    switch (i) {
    case Jn:
    case Pd:
        return {
            byteLength: 1,
            components: 1
        };
    case gr:
    case Id:
    case rn:
        return {
            byteLength: 2,
            components: 1
        };
    case Fl:
    case Ol:
        return {
            byteLength: 2,
            components: 4
        };
    case qi:
    case Nl:
    case Rn:
        return {
            byteLength: 4,
            components: 1
        };
    case Ld:
        return {
            byteLength: 4,
            components: 3
        }
    }
    throw new Error(`Unknown texture type ${i}.`)
}
function w_(i, e, t, n, s, r, a) {
    let o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new ne, h = new WeakMap, u, f = new WeakMap, d = !1;
    try {
        d = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1,1).getContext("2d") !== null
    } catch {}
    function m(T, y) {
        return d ? new OffscreenCanvas(T,y) : br("canvas")
    }
    function b(T, y, O) {
        let K = 1
          , Q = Ae(T);
        if ((Q.width > O || Q.height > O) && (K = O / Math.max(Q.width, Q.height)),
        K < 1)
            if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
                let Y = Math.floor(K * Q.width)
                  , Se = Math.floor(K * Q.height);
                u === void 0 && (u = m(Y, Se));
                let ce = y ? m(Y, Se) : u;
                return ce.width = Y,
                ce.height = Se,
                ce.getContext("2d").drawImage(T, 0, 0, Y, Se),
                console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Q.width + "x" + Q.height + ") to (" + Y + "x" + Se + ")."),
                ce
            } else
                return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Q.width + "x" + Q.height + ")."),
                T;
        return T
    }
    function g(T) {
        return T.generateMipmaps
    }
    function p(T) {
        i.generateMipmap(T)
    }
    function x(T) {
        return T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? i.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D
    }
    function v(T, y, O, K, Q=!1) {
        if (T !== null) {
            if (i[T] !== void 0)
                return i[T];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'")
        }
        let Y = y;
        if (y === i.RED && (O === i.FLOAT && (Y = i.R32F),
        O === i.HALF_FLOAT && (Y = i.R16F),
        O === i.UNSIGNED_BYTE && (Y = i.R8)),
        y === i.RED_INTEGER && (O === i.UNSIGNED_BYTE && (Y = i.R8UI),
        O === i.UNSIGNED_SHORT && (Y = i.R16UI),
        O === i.UNSIGNED_INT && (Y = i.R32UI),
        O === i.BYTE && (Y = i.R8I),
        O === i.SHORT && (Y = i.R16I),
        O === i.INT && (Y = i.R32I)),
        y === i.RG && (O === i.FLOAT && (Y = i.RG32F),
        O === i.HALF_FLOAT && (Y = i.RG16F),
        O === i.UNSIGNED_BYTE && (Y = i.RG8)),
        y === i.RG_INTEGER && (O === i.UNSIGNED_BYTE && (Y = i.RG8UI),
        O === i.UNSIGNED_SHORT && (Y = i.RG16UI),
        O === i.UNSIGNED_INT && (Y = i.RG32UI),
        O === i.BYTE && (Y = i.RG8I),
        O === i.SHORT && (Y = i.RG16I),
        O === i.INT && (Y = i.RG32I)),
        y === i.RGB_INTEGER && (O === i.UNSIGNED_BYTE && (Y = i.RGB8UI),
        O === i.UNSIGNED_SHORT && (Y = i.RGB16UI),
        O === i.UNSIGNED_INT && (Y = i.RGB32UI),
        O === i.BYTE && (Y = i.RGB8I),
        O === i.SHORT && (Y = i.RGB16I),
        O === i.INT && (Y = i.RGB32I)),
        y === i.RGBA_INTEGER && (O === i.UNSIGNED_BYTE && (Y = i.RGBA8UI),
        O === i.UNSIGNED_SHORT && (Y = i.RGBA16UI),
        O === i.UNSIGNED_INT && (Y = i.RGBA32UI),
        O === i.BYTE && (Y = i.RGBA8I),
        O === i.SHORT && (Y = i.RGBA16I),
        O === i.INT && (Y = i.RGBA32I)),
        y === i.RGB && O === i.UNSIGNED_INT_5_9_9_9_REV && (Y = i.RGB9_E5),
        y === i.RGBA) {
            let Se = Q ? eo : Ge.getTransfer(K);
            O === i.FLOAT && (Y = i.RGBA32F),
            O === i.HALF_FLOAT && (Y = i.RGBA16F),
            O === i.UNSIGNED_BYTE && (Y = Se === et ? i.SRGB8_ALPHA8 : i.RGBA8),
            O === i.UNSIGNED_SHORT_4_4_4_4 && (Y = i.RGBA4),
            O === i.UNSIGNED_SHORT_5_5_5_1 && (Y = i.RGB5_A1)
        }
        return (Y === i.R16F || Y === i.R32F || Y === i.RG16F || Y === i.RG32F || Y === i.RGBA16F || Y === i.RGBA32F) && e.get("EXT_color_buffer_float"),
        Y
    }
    function _(T, y) {
        let O;
        return T ? y === null || y === qi || y === Ts ? O = i.DEPTH24_STENCIL8 : y === Rn ? O = i.DEPTH32F_STENCIL8 : y === gr && (O = i.DEPTH24_STENCIL8,
        console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : y === null || y === qi || y === Ts ? O = i.DEPTH_COMPONENT24 : y === Rn ? O = i.DEPTH_COMPONENT32F : y === gr && (O = i.DEPTH_COMPONENT16),
        O
    }
    function P(T, y) {
        return g(T) === !0 || T.isFramebufferTexture && T.minFilter !== Wt && T.minFilter !== Zt ? Math.log2(Math.max(y.width, y.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? y.mipmaps.length : 1
    }
    function E(T) {
        let y = T.target;
        y.removeEventListener("dispose", E),
        L(y),
        y.isVideoTexture && h.delete(y)
    }
    function R(T) {
        let y = T.target;
        y.removeEventListener("dispose", R),
        M(y)
    }
    function L(T) {
        let y = n.get(T);
        if (y.__webglInit === void 0)
            return;
        let O = T.source
          , K = f.get(O);
        if (K) {
            let Q = K[y.__cacheKey];
            Q.usedTimes--,
            Q.usedTimes === 0 && w(T),
            Object.keys(K).length === 0 && f.delete(O)
        }
        n.remove(T)
    }
    function w(T) {
        let y = n.get(T);
        i.deleteTexture(y.__webglTexture);
        let O = T.source
          , K = f.get(O);
        delete K[y.__cacheKey],
        a.memory.textures--
    }
    function M(T) {
        let y = n.get(T);
        if (T.depthTexture && (T.depthTexture.dispose(),
        n.remove(T.depthTexture)),
        T.isWebGLCubeRenderTarget)
            for (let K = 0; K < 6; K++) {
                if (Array.isArray(y.__webglFramebuffer[K]))
                    for (let Q = 0; Q < y.__webglFramebuffer[K].length; Q++)
                        i.deleteFramebuffer(y.__webglFramebuffer[K][Q]);
                else
                    i.deleteFramebuffer(y.__webglFramebuffer[K]);
                y.__webglDepthbuffer && i.deleteRenderbuffer(y.__webglDepthbuffer[K])
            }
        else {
            if (Array.isArray(y.__webglFramebuffer))
                for (let K = 0; K < y.__webglFramebuffer.length; K++)
                    i.deleteFramebuffer(y.__webglFramebuffer[K]);
            else
                i.deleteFramebuffer(y.__webglFramebuffer);
            if (y.__webglDepthbuffer && i.deleteRenderbuffer(y.__webglDepthbuffer),
            y.__webglMultisampledFramebuffer && i.deleteFramebuffer(y.__webglMultisampledFramebuffer),
            y.__webglColorRenderbuffer)
                for (let K = 0; K < y.__webglColorRenderbuffer.length; K++)
                    y.__webglColorRenderbuffer[K] && i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);
            y.__webglDepthRenderbuffer && i.deleteRenderbuffer(y.__webglDepthRenderbuffer)
        }
        let O = T.textures;
        for (let K = 0, Q = O.length; K < Q; K++) {
            let Y = n.get(O[K]);
            Y.__webglTexture && (i.deleteTexture(Y.__webglTexture),
            a.memory.textures--),
            n.remove(O[K])
        }
        n.remove(T)
    }
    let I = 0;
    function H() {
        I = 0
    }
    function B() {
        let T = I;
        return T >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + s.maxTextures),
        I += 1,
        T
    }
    function V(T) {
        let y = [];
        return y.push(T.wrapS),
        y.push(T.wrapT),
        y.push(T.wrapR || 0),
        y.push(T.magFilter),
        y.push(T.minFilter),
        y.push(T.anisotropy),
        y.push(T.internalFormat),
        y.push(T.format),
        y.push(T.type),
        y.push(T.generateMipmaps),
        y.push(T.premultiplyAlpha),
        y.push(T.flipY),
        y.push(T.unpackAlignment),
        y.push(T.colorSpace),
        y.join()
    }
    function J(T, y) {
        let O = n.get(T);
        if (T.isVideoTexture && Ce(T),
        T.isRenderTargetTexture === !1 && T.version > 0 && O.__version !== T.version) {
            let K = T.image;
            if (K === null)
                console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
            else if (K.complete === !1)
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            else {
                j(O, T, y);
                return
            }
        }
        t.bindTexture(i.TEXTURE_2D, O.__webglTexture, i.TEXTURE0 + y)
    }
    function X(T, y) {
        let O = n.get(T);
        if (T.version > 0 && O.__version !== T.version) {
            j(O, T, y);
            return
        }
        t.bindTexture(i.TEXTURE_2D_ARRAY, O.__webglTexture, i.TEXTURE0 + y)
    }
    function ee(T, y) {
        let O = n.get(T);
        if (T.version > 0 && O.__version !== T.version) {
            j(O, T, y);
            return
        }
        t.bindTexture(i.TEXTURE_3D, O.__webglTexture, i.TEXTURE0 + y)
    }
    function G(T, y) {
        let O = n.get(T);
        if (T.version > 0 && O.__version !== T.version) {
            $(O, T, y);
            return
        }
        t.bindTexture(i.TEXTURE_CUBE_MAP, O.__webglTexture, i.TEXTURE0 + y)
    }
    let se = {
        [Zn]: i.REPEAT,
        [jn]: i.CLAMP_TO_EDGE,
        [mr]: i.MIRRORED_REPEAT
    }
      , fe = {
        [Wt]: i.NEAREST,
        [Ul]: i.NEAREST_MIPMAP_NEAREST,
        [_s]: i.NEAREST_MIPMAP_LINEAR,
        [Zt]: i.LINEAR,
        [lr]: i.LINEAR_MIPMAP_NEAREST,
        [Dn]: i.LINEAR_MIPMAP_LINEAR
    }
      , Ee = {
        [fp]: i.NEVER,
        [xp]: i.ALWAYS,
        [pp]: i.LESS,
        [Hd]: i.LEQUAL,
        [mp]: i.EQUAL,
        [_p]: i.GEQUAL,
        [gp]: i.GREATER,
        [bp]: i.NOTEQUAL
    };
    function Ve(T, y) {
        if (y.type === Rn && e.has("OES_texture_float_linear") === !1 && (y.magFilter === Zt || y.magFilter === lr || y.magFilter === _s || y.magFilter === Dn || y.minFilter === Zt || y.minFilter === lr || y.minFilter === _s || y.minFilter === Dn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),
        i.texParameteri(T, i.TEXTURE_WRAP_S, se[y.wrapS]),
        i.texParameteri(T, i.TEXTURE_WRAP_T, se[y.wrapT]),
        (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, se[y.wrapR]),
        i.texParameteri(T, i.TEXTURE_MAG_FILTER, fe[y.magFilter]),
        i.texParameteri(T, i.TEXTURE_MIN_FILTER, fe[y.minFilter]),
        y.compareFunction && (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, Ee[y.compareFunction])),
        e.has("EXT_texture_filter_anisotropic") === !0) {
            if (y.magFilter === Wt || y.minFilter !== _s && y.minFilter !== Dn || y.type === Rn && e.has("OES_texture_float_linear") === !1)
                return;
            if (y.anisotropy > 1 || n.get(y).__currentAnisotropy) {
                let O = e.get("EXT_texture_filter_anisotropic");
                i.texParameterf(T, O.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(y.anisotropy, s.getMaxAnisotropy())),
                n.get(y).__currentAnisotropy = y.anisotropy
            }
        }
    }
    function tt(T, y) {
        let O = !1;
        T.__webglInit === void 0 && (T.__webglInit = !0,
        y.addEventListener("dispose", E));
        let K = y.source
          , Q = f.get(K);
        Q === void 0 && (Q = {},
        f.set(K, Q));
        let Y = V(y);
        if (Y !== T.__cacheKey) {
            Q[Y] === void 0 && (Q[Y] = {
                texture: i.createTexture(),
                usedTimes: 0
            },
            a.memory.textures++,
            O = !0),
            Q[Y].usedTimes++;
            let Se = Q[T.__cacheKey];
            Se !== void 0 && (Q[T.__cacheKey].usedTimes--,
            Se.usedTimes === 0 && w(y)),
            T.__cacheKey = Y,
            T.__webglTexture = Q[Y].texture
        }
        return O
    }
    function j(T, y, O) {
        let K = i.TEXTURE_2D;
        (y.isDataArrayTexture || y.isCompressedArrayTexture) && (K = i.TEXTURE_2D_ARRAY),
        y.isData3DTexture && (K = i.TEXTURE_3D);
        let Q = tt(T, y)
          , Y = y.source;
        t.bindTexture(K, T.__webglTexture, i.TEXTURE0 + O);
        let Se = n.get(Y);
        if (Y.version !== Se.__version || Q === !0) {
            t.activeTexture(i.TEXTURE0 + O);
            let ce = Ge.getPrimaries(Ge.workingColorSpace)
              , pe = y.colorSpace === gi ? null : Ge.getPrimaries(y.colorSpace)
              , Ke = y.colorSpace === gi || ce === pe ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
            i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, y.flipY),
            i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha),
            i.pixelStorei(i.UNPACK_ALIGNMENT, y.unpackAlignment),
            i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ke);
            let te = b(y.image, !1, s.maxTextureSize);
            te = ft(y, te);
            let me = r.convert(y.format, y.colorSpace)
              , Ie = r.convert(y.type)
              , Ue = v(y.internalFormat, me, Ie, y.colorSpace, y.isVideoTexture);
            Ve(K, y);
            let ge, Ye = y.mipmaps, ze = y.isVideoTexture !== !0, ct = Se.__version === void 0 || Q === !0, D = Y.dataReady, oe = P(y, te);
            if (y.isDepthTexture)
                Ue = _(y.format === As, y.type),
                ct && (ze ? t.texStorage2D(i.TEXTURE_2D, 1, Ue, te.width, te.height) : t.texImage2D(i.TEXTURE_2D, 0, Ue, te.width, te.height, 0, me, Ie, null));
            else if (y.isDataTexture)
                if (Ye.length > 0) {
                    ze && ct && t.texStorage2D(i.TEXTURE_2D, oe, Ue, Ye[0].width, Ye[0].height);
                    for (let W = 0, Z = Ye.length; W < Z; W++)
                        ge = Ye[W],
                        ze ? D && t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, ge.width, ge.height, me, Ie, ge.data) : t.texImage2D(i.TEXTURE_2D, W, Ue, ge.width, ge.height, 0, me, Ie, ge.data);
                    y.generateMipmaps = !1
                } else
                    ze ? (ct && t.texStorage2D(i.TEXTURE_2D, oe, Ue, te.width, te.height),
                    D && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, te.width, te.height, me, Ie, te.data)) : t.texImage2D(i.TEXTURE_2D, 0, Ue, te.width, te.height, 0, me, Ie, te.data);
            else if (y.isCompressedTexture)
                if (y.isCompressedArrayTexture) {
                    ze && ct && t.texStorage3D(i.TEXTURE_2D_ARRAY, oe, Ue, Ye[0].width, Ye[0].height, te.depth);
                    for (let W = 0, Z = Ye.length; W < Z; W++)
                        if (ge = Ye[W],
                        y.format !== gn)
                            if (me !== null)
                                if (ze) {
                                    if (D)
                                        if (y.layerUpdates.size > 0) {
                                            let de = ad(ge.width, ge.height, y.format, y.type);
                                            for (let le of y.layerUpdates) {
                                                let Oe = ge.data.subarray(le * de / ge.data.BYTES_PER_ELEMENT, (le + 1) * de / ge.data.BYTES_PER_ELEMENT);
                                                t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, W, 0, 0, le, ge.width, ge.height, 1, me, Oe)
                                            }
                                            y.clearLayerUpdates()
                                        } else
                                            t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, W, 0, 0, 0, ge.width, ge.height, te.depth, me, ge.data)
                                } else
                                    t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, W, Ue, ge.width, ge.height, te.depth, 0, ge.data, 0, 0);
                            else
                                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
                        else
                            ze ? D && t.texSubImage3D(i.TEXTURE_2D_ARRAY, W, 0, 0, 0, ge.width, ge.height, te.depth, me, Ie, ge.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, W, Ue, ge.width, ge.height, te.depth, 0, me, Ie, ge.data)
                } else {
                    ze && ct && t.texStorage2D(i.TEXTURE_2D, oe, Ue, Ye[0].width, Ye[0].height);
                    for (let W = 0, Z = Ye.length; W < Z; W++)
                        ge = Ye[W],
                        y.format !== gn ? me !== null ? ze ? D && t.compressedTexSubImage2D(i.TEXTURE_2D, W, 0, 0, ge.width, ge.height, me, ge.data) : t.compressedTexImage2D(i.TEXTURE_2D, W, Ue, ge.width, ge.height, 0, ge.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : ze ? D && t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, ge.width, ge.height, me, Ie, ge.data) : t.texImage2D(i.TEXTURE_2D, W, Ue, ge.width, ge.height, 0, me, Ie, ge.data)
                }
            else if (y.isDataArrayTexture)
                if (ze) {
                    if (ct && t.texStorage3D(i.TEXTURE_2D_ARRAY, oe, Ue, te.width, te.height, te.depth),
                    D)
                        if (y.layerUpdates.size > 0) {
                            let W = ad(te.width, te.height, y.format, y.type);
                            for (let Z of y.layerUpdates) {
                                let de = te.data.subarray(Z * W / te.data.BYTES_PER_ELEMENT, (Z + 1) * W / te.data.BYTES_PER_ELEMENT);
                                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, Z, te.width, te.height, 1, me, Ie, de)
                            }
                            y.clearLayerUpdates()
                        } else
                            t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, te.width, te.height, te.depth, me, Ie, te.data)
                } else
                    t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Ue, te.width, te.height, te.depth, 0, me, Ie, te.data);
            else if (y.isData3DTexture)
                ze ? (ct && t.texStorage3D(i.TEXTURE_3D, oe, Ue, te.width, te.height, te.depth),
                D && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, te.width, te.height, te.depth, me, Ie, te.data)) : t.texImage3D(i.TEXTURE_3D, 0, Ue, te.width, te.height, te.depth, 0, me, Ie, te.data);
            else if (y.isFramebufferTexture) {
                if (ct)
                    if (ze)
                        t.texStorage2D(i.TEXTURE_2D, oe, Ue, te.width, te.height);
                    else {
                        let W = te.width
                          , Z = te.height;
                        for (let de = 0; de < oe; de++)
                            t.texImage2D(i.TEXTURE_2D, de, Ue, W, Z, 0, me, Ie, null),
                            W >>= 1,
                            Z >>= 1
                    }
            } else if (Ye.length > 0) {
                if (ze && ct) {
                    let W = Ae(Ye[0]);
                    t.texStorage2D(i.TEXTURE_2D, oe, Ue, W.width, W.height)
                }
                for (let W = 0, Z = Ye.length; W < Z; W++)
                    ge = Ye[W],
                    ze ? D && t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, me, Ie, ge) : t.texImage2D(i.TEXTURE_2D, W, Ue, me, Ie, ge);
                y.generateMipmaps = !1
            } else if (ze) {
                if (ct) {
                    let W = Ae(te);
                    t.texStorage2D(i.TEXTURE_2D, oe, Ue, W.width, W.height)
                }
                D && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, me, Ie, te)
            } else
                t.texImage2D(i.TEXTURE_2D, 0, Ue, me, Ie, te);
            g(y) && p(K),
            Se.__version = Y.version,
            y.onUpdate && y.onUpdate(y)
        }
        T.__version = y.version
    }
    function $(T, y, O) {
        if (y.image.length !== 6)
            return;
        let K = tt(T, y)
          , Q = y.source;
        t.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + O);
        let Y = n.get(Q);
        if (Q.version !== Y.__version || K === !0) {
            t.activeTexture(i.TEXTURE0 + O);
            let Se = Ge.getPrimaries(Ge.workingColorSpace)
              , ce = y.colorSpace === gi ? null : Ge.getPrimaries(y.colorSpace)
              , pe = y.colorSpace === gi || Se === ce ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
            i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, y.flipY),
            i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha),
            i.pixelStorei(i.UNPACK_ALIGNMENT, y.unpackAlignment),
            i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, pe);
            let Ke = y.isCompressedTexture || y.image[0].isCompressedTexture
              , te = y.image[0] && y.image[0].isDataTexture
              , me = [];
            for (let Z = 0; Z < 6; Z++)
                !Ke && !te ? me[Z] = b(y.image[Z], !0, s.maxCubemapSize) : me[Z] = te ? y.image[Z].image : y.image[Z],
                me[Z] = ft(y, me[Z]);
            let Ie = me[0]
              , Ue = r.convert(y.format, y.colorSpace)
              , ge = r.convert(y.type)
              , Ye = v(y.internalFormat, Ue, ge, y.colorSpace)
              , ze = y.isVideoTexture !== !0
              , ct = Y.__version === void 0 || K === !0
              , D = Q.dataReady
              , oe = P(y, Ie);
            Ve(i.TEXTURE_CUBE_MAP, y);
            let W;
            if (Ke) {
                ze && ct && t.texStorage2D(i.TEXTURE_CUBE_MAP, oe, Ye, Ie.width, Ie.height);
                for (let Z = 0; Z < 6; Z++) {
                    W = me[Z].mipmaps;
                    for (let de = 0; de < W.length; de++) {
                        let le = W[de];
                        y.format !== gn ? Ue !== null ? ze ? D && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de, 0, 0, le.width, le.height, Ue, le.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de, Ye, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : ze ? D && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de, 0, 0, le.width, le.height, Ue, ge, le.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de, Ye, le.width, le.height, 0, Ue, ge, le.data)
                    }
                }
            } else {
                if (W = y.mipmaps,
                ze && ct) {
                    W.length > 0 && oe++;
                    let Z = Ae(me[0]);
                    t.texStorage2D(i.TEXTURE_CUBE_MAP, oe, Ye, Z.width, Z.height)
                }
                for (let Z = 0; Z < 6; Z++)
                    if (te) {
                        ze ? D && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, me[Z].width, me[Z].height, Ue, ge, me[Z].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, Ye, me[Z].width, me[Z].height, 0, Ue, ge, me[Z].data);
                        for (let de = 0; de < W.length; de++) {
                            let Oe = W[de].image[Z].image;
                            ze ? D && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de + 1, 0, 0, Oe.width, Oe.height, Ue, ge, Oe.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de + 1, Ye, Oe.width, Oe.height, 0, Ue, ge, Oe.data)
                        }
                    } else {
                        ze ? D && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, 0, 0, Ue, ge, me[Z]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, 0, Ye, Ue, ge, me[Z]);
                        for (let de = 0; de < W.length; de++) {
                            let le = W[de];
                            ze ? D && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de + 1, 0, 0, Ue, ge, le.image[Z]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Z, de + 1, Ye, Ue, ge, le.image[Z])
                        }
                    }
            }
            g(y) && p(i.TEXTURE_CUBE_MAP),
            Y.__version = Q.version,
            y.onUpdate && y.onUpdate(y)
        }
        T.__version = y.version
    }
    function xe(T, y, O, K, Q, Y) {
        let Se = r.convert(O.format, O.colorSpace)
          , ce = r.convert(O.type)
          , pe = v(O.internalFormat, Se, ce, O.colorSpace)
          , Ke = n.get(y)
          , te = n.get(O);
        if (te.__renderTarget = y,
        !Ke.__hasExternalTextures) {
            let me = Math.max(1, y.width >> Y)
              , Ie = Math.max(1, y.height >> Y);
            Q === i.TEXTURE_3D || Q === i.TEXTURE_2D_ARRAY ? t.texImage3D(Q, Y, pe, me, Ie, y.depth, 0, Se, ce, null) : t.texImage2D(Q, Y, pe, me, Ie, 0, Se, ce, null)
        }
        t.bindFramebuffer(i.FRAMEBUFFER, T),
        je(y) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, K, Q, te.__webglTexture, 0, qe(y)) : (Q === i.TEXTURE_2D || Q >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Q <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, K, Q, te.__webglTexture, Y),
        t.bindFramebuffer(i.FRAMEBUFFER, null)
    }
    function ae(T, y, O) {
        if (i.bindRenderbuffer(i.RENDERBUFFER, T),
        y.depthBuffer) {
            let K = y.depthTexture
              , Q = K && K.isDepthTexture ? K.type : null
              , Y = _(y.stencilBuffer, Q)
              , Se = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
              , ce = qe(y);
            je(y) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ce, Y, y.width, y.height) : O ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ce, Y, y.width, y.height) : i.renderbufferStorage(i.RENDERBUFFER, Y, y.width, y.height),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, Se, i.RENDERBUFFER, T)
        } else {
            let K = y.textures;
            for (let Q = 0; Q < K.length; Q++) {
                let Y = K[Q]
                  , Se = r.convert(Y.format, Y.colorSpace)
                  , ce = r.convert(Y.type)
                  , pe = v(Y.internalFormat, Se, ce, Y.colorSpace)
                  , Ke = qe(y);
                O && je(y) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Ke, pe, y.width, y.height) : je(y) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Ke, pe, y.width, y.height) : i.renderbufferStorage(i.RENDERBUFFER, pe, y.width, y.height)
            }
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null)
    }
    function Te(T, y) {
        if (y && y.isWebGLCubeRenderTarget)
            throw new Error("Depth Texture with cube render targets is not supported");
        if (t.bindFramebuffer(i.FRAMEBUFFER, T),
        !(y.depthTexture && y.depthTexture.isDepthTexture))
            throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        let K = n.get(y.depthTexture);
        K.__renderTarget = y,
        (!K.__webglTexture || y.depthTexture.image.width !== y.width || y.depthTexture.image.height !== y.height) && (y.depthTexture.image.width = y.width,
        y.depthTexture.image.height = y.height,
        y.depthTexture.needsUpdate = !0),
        J(y.depthTexture, 0);
        let Q = K.__webglTexture
          , Y = qe(y);
        if (y.depthTexture.format === vs)
            je(y) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Q, 0, Y) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Q, 0);
        else if (y.depthTexture.format === As)
            je(y) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Q, 0, Y) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Q, 0);
        else
            throw new Error("Unknown depthTexture format")
    }
    function De(T) {
        let y = n.get(T)
          , O = T.isWebGLCubeRenderTarget === !0;
        if (y.__boundDepthTexture !== T.depthTexture) {
            let K = T.depthTexture;
            if (y.__depthDisposeCallback && y.__depthDisposeCallback(),
            K) {
                let Q = () => {
                    delete y.__boundDepthTexture,
                    delete y.__depthDisposeCallback,
                    K.removeEventListener("dispose", Q)
                }
                ;
                K.addEventListener("dispose", Q),
                y.__depthDisposeCallback = Q
            }
            y.__boundDepthTexture = K
        }
        if (T.depthTexture && !y.__autoAllocateDepthBuffer) {
            if (O)
                throw new Error("target.depthTexture not supported in Cube render targets");
            Te(y.__webglFramebuffer, T)
        } else if (O) {
            y.__webglDepthbuffer = [];
            for (let K = 0; K < 6; K++)
                if (t.bindFramebuffer(i.FRAMEBUFFER, y.__webglFramebuffer[K]),
                y.__webglDepthbuffer[K] === void 0)
                    y.__webglDepthbuffer[K] = i.createRenderbuffer(),
                    ae(y.__webglDepthbuffer[K], T, !1);
                else {
                    let Q = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
                      , Y = y.__webglDepthbuffer[K];
                    i.bindRenderbuffer(i.RENDERBUFFER, Y),
                    i.framebufferRenderbuffer(i.FRAMEBUFFER, Q, i.RENDERBUFFER, Y)
                }
        } else if (t.bindFramebuffer(i.FRAMEBUFFER, y.__webglFramebuffer),
        y.__webglDepthbuffer === void 0)
            y.__webglDepthbuffer = i.createRenderbuffer(),
            ae(y.__webglDepthbuffer, T, !1);
        else {
            let K = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
              , Q = y.__webglDepthbuffer;
            i.bindRenderbuffer(i.RENDERBUFFER, Q),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, K, i.RENDERBUFFER, Q)
        }
        t.bindFramebuffer(i.FRAMEBUFFER, null)
    }
    function ke(T, y, O) {
        let K = n.get(T);
        y !== void 0 && xe(K.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0),
        O !== void 0 && De(T)
    }
    function ot(T) {
        let y = T.texture
          , O = n.get(T)
          , K = n.get(y);
        T.addEventListener("dispose", R);
        let Q = T.textures
          , Y = T.isWebGLCubeRenderTarget === !0
          , Se = Q.length > 1;
        if (Se || (K.__webglTexture === void 0 && (K.__webglTexture = i.createTexture()),
        K.__version = y.version,
        a.memory.textures++),
        Y) {
            O.__webglFramebuffer = [];
            for (let ce = 0; ce < 6; ce++)
                if (y.mipmaps && y.mipmaps.length > 0) {
                    O.__webglFramebuffer[ce] = [];
                    for (let pe = 0; pe < y.mipmaps.length; pe++)
                        O.__webglFramebuffer[ce][pe] = i.createFramebuffer()
                } else
                    O.__webglFramebuffer[ce] = i.createFramebuffer()
        } else {
            if (y.mipmaps && y.mipmaps.length > 0) {
                O.__webglFramebuffer = [];
                for (let ce = 0; ce < y.mipmaps.length; ce++)
                    O.__webglFramebuffer[ce] = i.createFramebuffer()
            } else
                O.__webglFramebuffer = i.createFramebuffer();
            if (Se)
                for (let ce = 0, pe = Q.length; ce < pe; ce++) {
                    let Ke = n.get(Q[ce]);
                    Ke.__webglTexture === void 0 && (Ke.__webglTexture = i.createTexture(),
                    a.memory.textures++)
                }
            if (T.samples > 0 && je(T) === !1) {
                O.__webglMultisampledFramebuffer = i.createFramebuffer(),
                O.__webglColorRenderbuffer = [],
                t.bindFramebuffer(i.FRAMEBUFFER, O.__webglMultisampledFramebuffer);
                for (let ce = 0; ce < Q.length; ce++) {
                    let pe = Q[ce];
                    O.__webglColorRenderbuffer[ce] = i.createRenderbuffer(),
                    i.bindRenderbuffer(i.RENDERBUFFER, O.__webglColorRenderbuffer[ce]);
                    let Ke = r.convert(pe.format, pe.colorSpace)
                      , te = r.convert(pe.type)
                      , me = v(pe.internalFormat, Ke, te, pe.colorSpace, T.isXRRenderTarget === !0)
                      , Ie = qe(T);
                    i.renderbufferStorageMultisample(i.RENDERBUFFER, Ie, me, T.width, T.height),
                    i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ce, i.RENDERBUFFER, O.__webglColorRenderbuffer[ce])
                }
                i.bindRenderbuffer(i.RENDERBUFFER, null),
                T.depthBuffer && (O.__webglDepthRenderbuffer = i.createRenderbuffer(),
                ae(O.__webglDepthRenderbuffer, T, !0)),
                t.bindFramebuffer(i.FRAMEBUFFER, null)
            }
        }
        if (Y) {
            t.bindTexture(i.TEXTURE_CUBE_MAP, K.__webglTexture),
            Ve(i.TEXTURE_CUBE_MAP, y);
            for (let ce = 0; ce < 6; ce++)
                if (y.mipmaps && y.mipmaps.length > 0)
                    for (let pe = 0; pe < y.mipmaps.length; pe++)
                        xe(O.__webglFramebuffer[ce][pe], T, y, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ce, pe);
                else
                    xe(O.__webglFramebuffer[ce], T, y, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ce, 0);
            g(y) && p(i.TEXTURE_CUBE_MAP),
            t.unbindTexture()
        } else if (Se) {
            for (let ce = 0, pe = Q.length; ce < pe; ce++) {
                let Ke = Q[ce]
                  , te = n.get(Ke);
                t.bindTexture(i.TEXTURE_2D, te.__webglTexture),
                Ve(i.TEXTURE_2D, Ke),
                xe(O.__webglFramebuffer, T, Ke, i.COLOR_ATTACHMENT0 + ce, i.TEXTURE_2D, 0),
                g(Ke) && p(i.TEXTURE_2D)
            }
            t.unbindTexture()
        } else {
            let ce = i.TEXTURE_2D;
            if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (ce = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
            t.bindTexture(ce, K.__webglTexture),
            Ve(ce, y),
            y.mipmaps && y.mipmaps.length > 0)
                for (let pe = 0; pe < y.mipmaps.length; pe++)
                    xe(O.__webglFramebuffer[pe], T, y, i.COLOR_ATTACHMENT0, ce, pe);
            else
                xe(O.__webglFramebuffer, T, y, i.COLOR_ATTACHMENT0, ce, 0);
            g(y) && p(ce),
            t.unbindTexture()
        }
        T.depthBuffer && De(T)
    }
    function _e(T) {
        let y = T.textures;
        for (let O = 0, K = y.length; O < K; O++) {
            let Q = y[O];
            if (g(Q)) {
                let Y = x(T)
                  , Se = n.get(Q).__webglTexture;
                t.bindTexture(Y, Se),
                p(Y),
                t.unbindTexture()
            }
        }
    }
    let nt = []
      , U = [];
    function fn(T) {
        if (T.samples > 0) {
            if (je(T) === !1) {
                let y = T.textures
                  , O = T.width
                  , K = T.height
                  , Q = i.COLOR_BUFFER_BIT
                  , Y = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
                  , Se = n.get(T)
                  , ce = y.length > 1;
                if (ce)
                    for (let pe = 0; pe < y.length; pe++)
                        t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglMultisampledFramebuffer),
                        i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pe, i.RENDERBUFFER, null),
                        t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglFramebuffer),
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pe, i.TEXTURE_2D, null, 0);
                t.bindFramebuffer(i.READ_FRAMEBUFFER, Se.__webglMultisampledFramebuffer),
                t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Se.__webglFramebuffer);
                for (let pe = 0; pe < y.length; pe++) {
                    if (T.resolveDepthBuffer && (T.depthBuffer && (Q |= i.DEPTH_BUFFER_BIT),
                    T.stencilBuffer && T.resolveStencilBuffer && (Q |= i.STENCIL_BUFFER_BIT)),
                    ce) {
                        i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, Se.__webglColorRenderbuffer[pe]);
                        let Ke = n.get(y[pe]).__webglTexture;
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Ke, 0)
                    }
                    i.blitFramebuffer(0, 0, O, K, 0, 0, O, K, Q, i.NEAREST),
                    c === !0 && (nt.length = 0,
                    U.length = 0,
                    nt.push(i.COLOR_ATTACHMENT0 + pe),
                    T.depthBuffer && T.resolveDepthBuffer === !1 && (nt.push(Y),
                    U.push(Y),
                    i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, U)),
                    i.invalidateFramebuffer(i.READ_FRAMEBUFFER, nt))
                }
                if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
                t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
                ce)
                    for (let pe = 0; pe < y.length; pe++) {
                        t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglMultisampledFramebuffer),
                        i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pe, i.RENDERBUFFER, Se.__webglColorRenderbuffer[pe]);
                        let Ke = n.get(y[pe]).__webglTexture;
                        t.bindFramebuffer(i.FRAMEBUFFER, Se.__webglFramebuffer),
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + pe, i.TEXTURE_2D, Ke, 0)
                    }
                t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Se.__webglMultisampledFramebuffer)
            } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && c) {
                let y = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
                i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [y])
            }
        }
    }
    function qe(T) {
        return Math.min(s.maxSamples, T.samples)
    }
    function je(T) {
        let y = n.get(T);
        return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && y.__useRenderToTexture !== !1
    }
    function Ce(T) {
        let y = a.render.frame;
        h.get(T) !== y && (h.set(T, y),
        T.update())
    }
    function ft(T, y) {
        let O = T.colorSpace
          , K = T.format
          , Q = T.type;
        return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || O !== Xt && O !== gi && (Ge.getTransfer(O) === et ? (K !== gn || Q !== Jn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", O)),
        y
    }
    function Ae(T) {
        return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (l.width = T.naturalWidth || T.width,
        l.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (l.width = T.displayWidth,
        l.height = T.displayHeight) : (l.width = T.width,
        l.height = T.height),
        l
    }
    this.allocateTextureUnit = B,
    this.resetTextureUnits = H,
    this.setTexture2D = J,
    this.setTexture2DArray = X,
    this.setTexture3D = ee,
    this.setTextureCube = G,
    this.rebindTextures = ke,
    this.setupRenderTarget = ot,
    this.updateRenderTargetMipmap = _e,
    this.updateMultisampleRenderTarget = fn,
    this.setupDepthRenderbuffer = De,
    this.setupFrameBufferTexture = xe,
    this.useMultisampledRTT = je
}
function E_(i, e) {
    function t(n, s=gi) {
        let r, a = Ge.getTransfer(s);
        if (n === Jn)
            return i.UNSIGNED_BYTE;
        if (n === Fl)
            return i.UNSIGNED_SHORT_4_4_4_4;
        if (n === Ol)
            return i.UNSIGNED_SHORT_5_5_5_1;
        if (n === Ld)
            return i.UNSIGNED_INT_5_9_9_9_REV;
        if (n === Pd)
            return i.BYTE;
        if (n === Id)
            return i.SHORT;
        if (n === gr)
            return i.UNSIGNED_SHORT;
        if (n === Nl)
            return i.INT;
        if (n === qi)
            return i.UNSIGNED_INT;
        if (n === Rn)
            return i.FLOAT;
        if (n === rn)
            return i.HALF_FLOAT;
        if (n === Dd)
            return i.ALPHA;
        if (n === Ud)
            return i.RGB;
        if (n === gn)
            return i.RGBA;
        if (n === Nd)
            return i.LUMINANCE;
        if (n === Fd)
            return i.LUMINANCE_ALPHA;
        if (n === vs)
            return i.DEPTH_COMPONENT;
        if (n === As)
            return i.DEPTH_STENCIL;
        if (n === Bl)
            return i.RED;
        if (n === kl)
            return i.RED_INTEGER;
        if (n === Od)
            return i.RG;
        if (n === zl)
            return i.RG_INTEGER;
        if (n === Hl)
            return i.RGBA_INTEGER;
        if (n === ga || n === ba || n === _a || n === xa)
            if (a === et)
                if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"),
                r !== null) {
                    if (n === ga)
                        return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                    if (n === ba)
                        return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    if (n === _a)
                        return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                    if (n === xa)
                        return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                } else
                    return null;
            else if (r = e.get("WEBGL_compressed_texture_s3tc"),
            r !== null) {
                if (n === ga)
                    return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (n === ba)
                    return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (n === _a)
                    return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (n === xa)
                    return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
            } else
                return null;
        if (n === vc || n === yc || n === Mc || n === Sc)
            if (r = e.get("WEBGL_compressed_texture_pvrtc"),
            r !== null) {
                if (n === vc)
                    return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (n === yc)
                    return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (n === Mc)
                    return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (n === Sc)
                    return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            } else
                return null;
        if (n === wc || n === Ec || n === Tc)
            if (r = e.get("WEBGL_compressed_texture_etc"),
            r !== null) {
                if (n === wc || n === Ec)
                    return a === et ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
                if (n === Tc)
                    return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC
            } else
                return null;
        if (n === Ac || n === Rc || n === Cc || n === Pc || n === Ic || n === Lc || n === Dc || n === Uc || n === Nc || n === Fc || n === Oc || n === Bc || n === kc || n === zc)
            if (r = e.get("WEBGL_compressed_texture_astc"),
            r !== null) {
                if (n === Ac)
                    return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (n === Rc)
                    return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (n === Cc)
                    return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (n === Pc)
                    return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (n === Ic)
                    return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (n === Lc)
                    return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (n === Dc)
                    return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (n === Uc)
                    return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (n === Nc)
                    return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (n === Fc)
                    return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (n === Oc)
                    return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (n === Bc)
                    return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (n === kc)
                    return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (n === zc)
                    return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR
            } else
                return null;
        if (n === va || n === Hc || n === Vc)
            if (r = e.get("EXT_texture_compression_bptc"),
            r !== null) {
                if (n === va)
                    return a === et ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                if (n === Hc)
                    return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                if (n === Vc)
                    return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT
            } else
                return null;
        if (n === Bd || n === Gc || n === Wc || n === Xc)
            if (r = e.get("EXT_texture_compression_rgtc"),
            r !== null) {
                if (n === va)
                    return r.COMPRESSED_RED_RGTC1_EXT;
                if (n === Gc)
                    return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                if (n === Wc)
                    return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
                if (n === Xc)
                    return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
            } else
                return null;
        return n === Ts ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null
    }
    return {
        convert: t
    }
}
var al = class extends Rt {
    constructor(e=[]) {
        super(),
        this.isArrayCamera = !0,
        this.cameras = e
    }
}
  , Bt = class extends vt {
    constructor() {
        super(),
        this.isGroup = !0,
        this.type = "Group"
    }
}
  , T_ = {
    type: "move"
}
  , dr = class {
    constructor() {
        this._targetRay = null,
        this._grip = null,
        this._hand = null
    }
    getHandSpace() {
        return this._hand === null && (this._hand = new Bt,
        this._hand.matrixAutoUpdate = !1,
        this._hand.visible = !1,
        this._hand.joints = {},
        this._hand.inputState = {
            pinching: !1
        }),
        this._hand
    }
    getTargetRaySpace() {
        return this._targetRay === null && (this._targetRay = new Bt,
        this._targetRay.matrixAutoUpdate = !1,
        this._targetRay.visible = !1,
        this._targetRay.hasLinearVelocity = !1,
        this._targetRay.linearVelocity = new C,
        this._targetRay.hasAngularVelocity = !1,
        this._targetRay.angularVelocity = new C),
        this._targetRay
    }
    getGripSpace() {
        return this._grip === null && (this._grip = new Bt,
        this._grip.matrixAutoUpdate = !1,
        this._grip.visible = !1,
        this._grip.hasLinearVelocity = !1,
        this._grip.linearVelocity = new C,
        this._grip.hasAngularVelocity = !1,
        this._grip.angularVelocity = new C),
        this._grip
    }
    dispatchEvent(e) {
        return this._targetRay !== null && this._targetRay.dispatchEvent(e),
        this._grip !== null && this._grip.dispatchEvent(e),
        this._hand !== null && this._hand.dispatchEvent(e),
        this
    }
    connect(e) {
        if (e && e.hand) {
            let t = this._hand;
            if (t)
                for (let n of e.hand.values())
                    this._getHandJoint(t, n)
        }
        return this.dispatchEvent({
            type: "connected",
            data: e
        }),
        this
    }
    disconnect(e) {
        return this.dispatchEvent({
            type: "disconnected",
            data: e
        }),
        this._targetRay !== null && (this._targetRay.visible = !1),
        this._grip !== null && (this._grip.visible = !1),
        this._hand !== null && (this._hand.visible = !1),
        this
    }
    update(e, t, n) {
        let s = null
          , r = null
          , a = null
          , o = this._targetRay
          , c = this._grip
          , l = this._hand;
        if (e && t.session.visibilityState !== "visible-blurred") {
            if (l && e.hand) {
                a = !0;
                for (let b of e.hand.values()) {
                    let g = t.getJointPose(b, n)
                      , p = this._getHandJoint(l, b);
                    g !== null && (p.matrix.fromArray(g.transform.matrix),
                    p.matrix.decompose(p.position, p.rotation, p.scale),
                    p.matrixWorldNeedsUpdate = !0,
                    p.jointRadius = g.radius),
                    p.visible = g !== null
                }
                let h = l.joints["index-finger-tip"]
                  , u = l.joints["thumb-tip"]
                  , f = h.position.distanceTo(u.position)
                  , d = .02
                  , m = .005;
                l.inputState.pinching && f > d + m ? (l.inputState.pinching = !1,
                this.dispatchEvent({
                    type: "pinchend",
                    handedness: e.handedness,
                    target: this
                })) : !l.inputState.pinching && f <= d - m && (l.inputState.pinching = !0,
                this.dispatchEvent({
                    type: "pinchstart",
                    handedness: e.handedness,
                    target: this
                }))
            } else
                c !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n),
                r !== null && (c.matrix.fromArray(r.transform.matrix),
                c.matrix.decompose(c.position, c.rotation, c.scale),
                c.matrixWorldNeedsUpdate = !0,
                r.linearVelocity ? (c.hasLinearVelocity = !0,
                c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1,
                r.angularVelocity ? (c.hasAngularVelocity = !0,
                c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1));
            o !== null && (s = t.getPose(e.targetRaySpace, n),
            s === null && r !== null && (s = r),
            s !== null && (o.matrix.fromArray(s.transform.matrix),
            o.matrix.decompose(o.position, o.rotation, o.scale),
            o.matrixWorldNeedsUpdate = !0,
            s.linearVelocity ? (o.hasLinearVelocity = !0,
            o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = !1,
            s.angularVelocity ? (o.hasAngularVelocity = !0,
            o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = !1,
            this.dispatchEvent(T_)))
        }
        return o !== null && (o.visible = s !== null),
        c !== null && (c.visible = r !== null),
        l !== null && (l.visible = a !== null),
        this
    }
    _getHandJoint(e, t) {
        if (e.joints[t.jointName] === void 0) {
            let n = new Bt;
            n.matrixAutoUpdate = !1,
            n.visible = !1,
            e.joints[t.jointName] = n,
            e.add(n)
        }
        return e.joints[t.jointName]
    }
}
  , A_ = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`
  , R_ = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`
  , ol = class {
    constructor() {
        this.texture = null,
        this.mesh = null,
        this.depthNear = 0,
        this.depthFar = 0
    }
    init(e, t, n) {
        if (this.texture === null) {
            let s = new Nt
              , r = e.properties.get(s);
            r.__webglTexture = t.texture,
            (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear,
            this.depthFar = t.depthFar),
            this.texture = s
        }
    }
    getMesh(e) {
        if (this.texture !== null && this.mesh === null) {
            let t = e.cameras[0].viewport
              , n = new Mt({
                vertexShader: A_,
                fragmentShader: R_,
                uniforms: {
                    depthColor: {
                        value: this.texture
                    },
                    depthWidth: {
                        value: t.z
                    },
                    depthHeight: {
                        value: t.w
                    }
                }
            });
            this.mesh = new be(new yi(20,20),n)
        }
        return this.mesh
    }
    reset() {
        this.texture = null,
        this.mesh = null
    }
    getDepthTexture() {
        return this.texture
    }
}
  , cl = class extends Qn {
    constructor(e, t) {
        super();
        let n = this
          , s = null
          , r = 1
          , a = null
          , o = "local-floor"
          , c = 1
          , l = null
          , h = null
          , u = null
          , f = null
          , d = null
          , m = null
          , b = new ol
          , g = t.getContextAttributes()
          , p = null
          , x = null
          , v = []
          , _ = []
          , P = new ne
          , E = null
          , R = new Rt;
        R.viewport = new Je;
        let L = new Rt;
        L.viewport = new Je;
        let w = [R, L]
          , M = new al
          , I = null
          , H = null;
        this.cameraAutoUpdate = !0,
        this.enabled = !1,
        this.isPresenting = !1,
        this.getController = function(j) {
            let $ = v[j];
            return $ === void 0 && ($ = new dr,
            v[j] = $),
            $.getTargetRaySpace()
        }
        ,
        this.getControllerGrip = function(j) {
            let $ = v[j];
            return $ === void 0 && ($ = new dr,
            v[j] = $),
            $.getGripSpace()
        }
        ,
        this.getHand = function(j) {
            let $ = v[j];
            return $ === void 0 && ($ = new dr,
            v[j] = $),
            $.getHandSpace()
        }
        ;
        function B(j) {
            let $ = _.indexOf(j.inputSource);
            if ($ === -1)
                return;
            let xe = v[$];
            xe !== void 0 && (xe.update(j.inputSource, j.frame, l || a),
            xe.dispatchEvent({
                type: j.type,
                data: j.inputSource
            }))
        }
        function V() {
            s.removeEventListener("select", B),
            s.removeEventListener("selectstart", B),
            s.removeEventListener("selectend", B),
            s.removeEventListener("squeeze", B),
            s.removeEventListener("squeezestart", B),
            s.removeEventListener("squeezeend", B),
            s.removeEventListener("end", V),
            s.removeEventListener("inputsourceschange", J);
            for (let j = 0; j < v.length; j++) {
                let $ = _[j];
                $ !== null && (_[j] = null,
                v[j].disconnect($))
            }
            I = null,
            H = null,
            b.reset(),
            e.setRenderTarget(p),
            d = null,
            f = null,
            u = null,
            s = null,
            x = null,
            tt.stop(),
            n.isPresenting = !1,
            e.setPixelRatio(E),
            e.setSize(P.width, P.height, !1),
            n.dispatchEvent({
                type: "sessionend"
            })
        }
        this.setFramebufferScaleFactor = function(j) {
            r = j,
            n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
        }
        ,
        this.setReferenceSpaceType = function(j) {
            o = j,
            n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
        }
        ,
        this.getReferenceSpace = function() {
            return l || a
        }
        ,
        this.setReferenceSpace = function(j) {
            l = j
        }
        ,
        this.getBaseLayer = function() {
            return f !== null ? f : d
        }
        ,
        this.getBinding = function() {
            return u
        }
        ,
        this.getFrame = function() {
            return m
        }
        ,
        this.getSession = function() {
            return s
        }
        ,
        this.setSession = async function(j) {
            if (s = j,
            s !== null) {
                if (p = e.getRenderTarget(),
                s.addEventListener("select", B),
                s.addEventListener("selectstart", B),
                s.addEventListener("selectend", B),
                s.addEventListener("squeeze", B),
                s.addEventListener("squeezestart", B),
                s.addEventListener("squeezeend", B),
                s.addEventListener("end", V),
                s.addEventListener("inputsourceschange", J),
                g.xrCompatible !== !0 && await t.makeXRCompatible(),
                E = e.getPixelRatio(),
                e.getSize(P),
                s.renderState.layers === void 0) {
                    let $ = {
                        antialias: g.antialias,
                        alpha: !0,
                        depth: g.depth,
                        stencil: g.stencil,
                        framebufferScaleFactor: r
                    };
                    d = new XRWebGLLayer(s,t,$),
                    s.updateRenderState({
                        baseLayer: d
                    }),
                    e.setPixelRatio(1),
                    e.setSize(d.framebufferWidth, d.framebufferHeight, !1),
                    x = new kt(d.framebufferWidth,d.framebufferHeight,{
                        format: gn,
                        type: Jn,
                        colorSpace: e.outputColorSpace,
                        stencilBuffer: g.stencil
                    })
                } else {
                    let $ = null
                      , xe = null
                      , ae = null;
                    g.depth && (ae = g.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24,
                    $ = g.stencil ? As : vs,
                    xe = g.stencil ? Ts : qi);
                    let Te = {
                        colorFormat: t.RGBA8,
                        depthFormat: ae,
                        scaleFactor: r
                    };
                    u = new XRWebGLBinding(s,t),
                    f = u.createProjectionLayer(Te),
                    s.updateRenderState({
                        layers: [f]
                    }),
                    e.setPixelRatio(1),
                    e.setSize(f.textureWidth, f.textureHeight, !1),
                    x = new kt(f.textureWidth,f.textureHeight,{
                        format: gn,
                        type: Jn,
                        depthTexture: new Ca(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,$),
                        stencilBuffer: g.stencil,
                        colorSpace: e.outputColorSpace,
                        samples: g.antialias ? 4 : 0,
                        resolveDepthBuffer: f.ignoreDepthValues === !1
                    })
                }
                x.isXRRenderTarget = !0,
                this.setFoveation(c),
                l = null,
                a = await s.requestReferenceSpace(o),
                tt.setContext(s),
                tt.start(),
                n.isPresenting = !0,
                n.dispatchEvent({
                    type: "sessionstart"
                })
            }
        }
        ,
        this.getEnvironmentBlendMode = function() {
            if (s !== null)
                return s.environmentBlendMode
        }
        ,
        this.getDepthTexture = function() {
            return b.getDepthTexture()
        }
        ;
        function J(j) {
            for (let $ = 0; $ < j.removed.length; $++) {
                let xe = j.removed[$]
                  , ae = _.indexOf(xe);
                ae >= 0 && (_[ae] = null,
                v[ae].disconnect(xe))
            }
            for (let $ = 0; $ < j.added.length; $++) {
                let xe = j.added[$]
                  , ae = _.indexOf(xe);
                if (ae === -1) {
                    for (let De = 0; De < v.length; De++)
                        if (De >= _.length) {
                            _.push(xe),
                            ae = De;
                            break
                        } else if (_[De] === null) {
                            _[De] = xe,
                            ae = De;
                            break
                        }
                    if (ae === -1)
                        break
                }
                let Te = v[ae];
                Te && Te.connect(xe)
            }
        }
        let X = new C
          , ee = new C;
        function G(j, $, xe) {
            X.setFromMatrixPosition($.matrixWorld),
            ee.setFromMatrixPosition(xe.matrixWorld);
            let ae = X.distanceTo(ee)
              , Te = $.projectionMatrix.elements
              , De = xe.projectionMatrix.elements
              , ke = Te[14] / (Te[10] - 1)
              , ot = Te[14] / (Te[10] + 1)
              , _e = (Te[9] + 1) / Te[5]
              , nt = (Te[9] - 1) / Te[5]
              , U = (Te[8] - 1) / Te[0]
              , fn = (De[8] + 1) / De[0]
              , qe = ke * U
              , je = ke * fn
              , Ce = ae / (-U + fn)
              , ft = Ce * -U;
            if ($.matrixWorld.decompose(j.position, j.quaternion, j.scale),
            j.translateX(ft),
            j.translateZ(Ce),
            j.matrixWorld.compose(j.position, j.quaternion, j.scale),
            j.matrixWorldInverse.copy(j.matrixWorld).invert(),
            Te[10] === -1)
                j.projectionMatrix.copy($.projectionMatrix),
                j.projectionMatrixInverse.copy($.projectionMatrixInverse);
            else {
                let Ae = ke + Ce
                  , T = ot + Ce
                  , y = qe - ft
                  , O = je + (ae - ft)
                  , K = _e * ot / T * Ae
                  , Q = nt * ot / T * Ae;
                j.projectionMatrix.makePerspective(y, O, K, Q, Ae, T),
                j.projectionMatrixInverse.copy(j.projectionMatrix).invert()
            }
        }
        function se(j, $) {
            $ === null ? j.matrixWorld.copy(j.matrix) : j.matrixWorld.multiplyMatrices($.matrixWorld, j.matrix),
            j.matrixWorldInverse.copy(j.matrixWorld).invert()
        }
        this.updateCamera = function(j) {
            if (s === null)
                return;
            let $ = j.near
              , xe = j.far;
            b.texture !== null && (b.depthNear > 0 && ($ = b.depthNear),
            b.depthFar > 0 && (xe = b.depthFar)),
            M.near = L.near = R.near = $,
            M.far = L.far = R.far = xe,
            (I !== M.near || H !== M.far) && (s.updateRenderState({
                depthNear: M.near,
                depthFar: M.far
            }),
            I = M.near,
            H = M.far),
            R.layers.mask = j.layers.mask | 2,
            L.layers.mask = j.layers.mask | 4,
            M.layers.mask = R.layers.mask | L.layers.mask;
            let ae = j.parent
              , Te = M.cameras;
            se(M, ae);
            for (let De = 0; De < Te.length; De++)
                se(Te[De], ae);
            Te.length === 2 ? G(M, R, L) : M.projectionMatrix.copy(R.projectionMatrix),
            fe(j, M, ae)
        }
        ;
        function fe(j, $, xe) {
            xe === null ? j.matrix.copy($.matrixWorld) : (j.matrix.copy(xe.matrixWorld),
            j.matrix.invert(),
            j.matrix.multiply($.matrixWorld)),
            j.matrix.decompose(j.position, j.quaternion, j.scale),
            j.updateMatrixWorld(!0),
            j.projectionMatrix.copy($.projectionMatrix),
            j.projectionMatrixInverse.copy($.projectionMatrixInverse),
            j.isPerspectiveCamera && (j.fov = Ps * 2 * Math.atan(1 / j.projectionMatrix.elements[5]),
            j.zoom = 1)
        }
        this.getCamera = function() {
            return M
        }
        ,
        this.getFoveation = function() {
            if (!(f === null && d === null))
                return c
        }
        ,
        this.setFoveation = function(j) {
            c = j,
            f !== null && (f.fixedFoveation = j),
            d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = j)
        }
        ,
        this.hasDepthSensing = function() {
            return b.texture !== null
        }
        ,
        this.getDepthSensingMesh = function() {
            return b.getMesh(M)
        }
        ;
        let Ee = null;
        function Ve(j, $) {
            if (h = $.getViewerPose(l || a),
            m = $,
            h !== null) {
                let xe = h.views;
                d !== null && (e.setRenderTargetFramebuffer(x, d.framebuffer),
                e.setRenderTarget(x));
                let ae = !1;
                xe.length !== M.cameras.length && (M.cameras.length = 0,
                ae = !0);
                for (let De = 0; De < xe.length; De++) {
                    let ke = xe[De]
                      , ot = null;
                    if (d !== null)
                        ot = d.getViewport(ke);
                    else {
                        let nt = u.getViewSubImage(f, ke);
                        ot = nt.viewport,
                        De === 0 && (e.setRenderTargetTextures(x, nt.colorTexture, f.ignoreDepthValues ? void 0 : nt.depthStencilTexture),
                        e.setRenderTarget(x))
                    }
                    let _e = w[De];
                    _e === void 0 && (_e = new Rt,
                    _e.layers.enable(De),
                    _e.viewport = new Je,
                    w[De] = _e),
                    _e.matrix.fromArray(ke.transform.matrix),
                    _e.matrix.decompose(_e.position, _e.quaternion, _e.scale),
                    _e.projectionMatrix.fromArray(ke.projectionMatrix),
                    _e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),
                    _e.viewport.set(ot.x, ot.y, ot.width, ot.height),
                    De === 0 && (M.matrix.copy(_e.matrix),
                    M.matrix.decompose(M.position, M.quaternion, M.scale)),
                    ae === !0 && M.cameras.push(_e)
                }
                let Te = s.enabledFeatures;
                if (Te && Te.includes("depth-sensing")) {
                    let De = u.getDepthInformation(xe[0]);
                    De && De.isValid && De.texture && b.init(e, De, s.renderState)
                }
            }
            for (let xe = 0; xe < v.length; xe++) {
                let ae = _[xe]
                  , Te = v[xe];
                ae !== null && Te !== void 0 && Te.update(ae, $, l || a)
            }
            Ee && Ee(j, $),
            $.detectedPlanes && n.dispatchEvent({
                type: "planesdetected",
                data: $
            }),
            m = null
        }
        let tt = new Xd;
        tt.setAnimationLoop(Ve),
        this.setAnimationLoop = function(j) {
            Ee = j
        }
        ,
        this.dispose = function() {}
    }
}
  , zi = new Fn
  , C_ = new Le;
function P_(i, e) {
    function t(g, p) {
        g.matrixAutoUpdate === !0 && g.updateMatrix(),
        p.value.copy(g.matrix)
    }
    function n(g, p) {
        p.color.getRGB(g.fogColor.value, Wd(i)),
        p.isFog ? (g.fogNear.value = p.near,
        g.fogFar.value = p.far) : p.isFogExp2 && (g.fogDensity.value = p.density)
    }
    function s(g, p, x, v, _) {
        p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(g, p) : p.isMeshToonMaterial ? (r(g, p),
        u(g, p)) : p.isMeshPhongMaterial ? (r(g, p),
        h(g, p)) : p.isMeshStandardMaterial ? (r(g, p),
        f(g, p),
        p.isMeshPhysicalMaterial && d(g, p, _)) : p.isMeshMatcapMaterial ? (r(g, p),
        m(g, p)) : p.isMeshDepthMaterial ? r(g, p) : p.isMeshDistanceMaterial ? (r(g, p),
        b(g, p)) : p.isMeshNormalMaterial ? r(g, p) : p.isLineBasicMaterial ? (a(g, p),
        p.isLineDashedMaterial && o(g, p)) : p.isPointsMaterial ? c(g, p, x, v) : p.isSpriteMaterial ? l(g, p) : p.isShadowMaterial ? (g.color.value.copy(p.color),
        g.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1)
    }
    function r(g, p) {
        g.opacity.value = p.opacity,
        p.color && g.diffuse.value.copy(p.color),
        p.emissive && g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),
        p.map && (g.map.value = p.map,
        t(p.map, g.mapTransform)),
        p.alphaMap && (g.alphaMap.value = p.alphaMap,
        t(p.alphaMap, g.alphaMapTransform)),
        p.bumpMap && (g.bumpMap.value = p.bumpMap,
        t(p.bumpMap, g.bumpMapTransform),
        g.bumpScale.value = p.bumpScale,
        p.side === Gt && (g.bumpScale.value *= -1)),
        p.normalMap && (g.normalMap.value = p.normalMap,
        t(p.normalMap, g.normalMapTransform),
        g.normalScale.value.copy(p.normalScale),
        p.side === Gt && g.normalScale.value.negate()),
        p.displacementMap && (g.displacementMap.value = p.displacementMap,
        t(p.displacementMap, g.displacementMapTransform),
        g.displacementScale.value = p.displacementScale,
        g.displacementBias.value = p.displacementBias),
        p.emissiveMap && (g.emissiveMap.value = p.emissiveMap,
        t(p.emissiveMap, g.emissiveMapTransform)),
        p.specularMap && (g.specularMap.value = p.specularMap,
        t(p.specularMap, g.specularMapTransform)),
        p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
        let x = e.get(p)
          , v = x.envMap
          , _ = x.envMapRotation;
        v && (g.envMap.value = v,
        zi.copy(_),
        zi.x *= -1,
        zi.y *= -1,
        zi.z *= -1,
        v.isCubeTexture && v.isRenderTargetTexture === !1 && (zi.y *= -1,
        zi.z *= -1),
        g.envMapRotation.value.setFromMatrix4(C_.makeRotationFromEuler(zi)),
        g.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1,
        g.reflectivity.value = p.reflectivity,
        g.ior.value = p.ior,
        g.refractionRatio.value = p.refractionRatio),
        p.lightMap && (g.lightMap.value = p.lightMap,
        g.lightMapIntensity.value = p.lightMapIntensity,
        t(p.lightMap, g.lightMapTransform)),
        p.aoMap && (g.aoMap.value = p.aoMap,
        g.aoMapIntensity.value = p.aoMapIntensity,
        t(p.aoMap, g.aoMapTransform))
    }
    function a(g, p) {
        g.diffuse.value.copy(p.color),
        g.opacity.value = p.opacity,
        p.map && (g.map.value = p.map,
        t(p.map, g.mapTransform))
    }
    function o(g, p) {
        g.dashSize.value = p.dashSize,
        g.totalSize.value = p.dashSize + p.gapSize,
        g.scale.value = p.scale
    }
    function c(g, p, x, v) {
        g.diffuse.value.copy(p.color),
        g.opacity.value = p.opacity,
        g.size.value = p.size * x,
        g.scale.value = v * .5,
        p.map && (g.map.value = p.map,
        t(p.map, g.uvTransform)),
        p.alphaMap && (g.alphaMap.value = p.alphaMap,
        t(p.alphaMap, g.alphaMapTransform)),
        p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest)
    }
    function l(g, p) {
        g.diffuse.value.copy(p.color),
        g.opacity.value = p.opacity,
        g.rotation.value = p.rotation,
        p.map && (g.map.value = p.map,
        t(p.map, g.mapTransform)),
        p.alphaMap && (g.alphaMap.value = p.alphaMap,
        t(p.alphaMap, g.alphaMapTransform)),
        p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest)
    }
    function h(g, p) {
        g.specular.value.copy(p.specular),
        g.shininess.value = Math.max(p.shininess, 1e-4)
    }
    function u(g, p) {
        p.gradientMap && (g.gradientMap.value = p.gradientMap)
    }
    function f(g, p) {
        g.metalness.value = p.metalness,
        p.metalnessMap && (g.metalnessMap.value = p.metalnessMap,
        t(p.metalnessMap, g.metalnessMapTransform)),
        g.roughness.value = p.roughness,
        p.roughnessMap && (g.roughnessMap.value = p.roughnessMap,
        t(p.roughnessMap, g.roughnessMapTransform)),
        p.envMap && (g.envMapIntensity.value = p.envMapIntensity)
    }
    function d(g, p, x) {
        g.ior.value = p.ior,
        p.sheen > 0 && (g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),
        g.sheenRoughness.value = p.sheenRoughness,
        p.sheenColorMap && (g.sheenColorMap.value = p.sheenColorMap,
        t(p.sheenColorMap, g.sheenColorMapTransform)),
        p.sheenRoughnessMap && (g.sheenRoughnessMap.value = p.sheenRoughnessMap,
        t(p.sheenRoughnessMap, g.sheenRoughnessMapTransform))),
        p.clearcoat > 0 && (g.clearcoat.value = p.clearcoat,
        g.clearcoatRoughness.value = p.clearcoatRoughness,
        p.clearcoatMap && (g.clearcoatMap.value = p.clearcoatMap,
        t(p.clearcoatMap, g.clearcoatMapTransform)),
        p.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap,
        t(p.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)),
        p.clearcoatNormalMap && (g.clearcoatNormalMap.value = p.clearcoatNormalMap,
        t(p.clearcoatNormalMap, g.clearcoatNormalMapTransform),
        g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),
        p.side === Gt && g.clearcoatNormalScale.value.negate())),
        p.dispersion > 0 && (g.dispersion.value = p.dispersion),
        p.iridescence > 0 && (g.iridescence.value = p.iridescence,
        g.iridescenceIOR.value = p.iridescenceIOR,
        g.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0],
        g.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1],
        p.iridescenceMap && (g.iridescenceMap.value = p.iridescenceMap,
        t(p.iridescenceMap, g.iridescenceMapTransform)),
        p.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = p.iridescenceThicknessMap,
        t(p.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))),
        p.transmission > 0 && (g.transmission.value = p.transmission,
        g.transmissionSamplerMap.value = x.texture,
        g.transmissionSamplerSize.value.set(x.width, x.height),
        p.transmissionMap && (g.transmissionMap.value = p.transmissionMap,
        t(p.transmissionMap, g.transmissionMapTransform)),
        g.thickness.value = p.thickness,
        p.thicknessMap && (g.thicknessMap.value = p.thicknessMap,
        t(p.thicknessMap, g.thicknessMapTransform)),
        g.attenuationDistance.value = p.attenuationDistance,
        g.attenuationColor.value.copy(p.attenuationColor)),
        p.anisotropy > 0 && (g.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)),
        p.anisotropyMap && (g.anisotropyMap.value = p.anisotropyMap,
        t(p.anisotropyMap, g.anisotropyMapTransform))),
        g.specularIntensity.value = p.specularIntensity,
        g.specularColor.value.copy(p.specularColor),
        p.specularColorMap && (g.specularColorMap.value = p.specularColorMap,
        t(p.specularColorMap, g.specularColorMapTransform)),
        p.specularIntensityMap && (g.specularIntensityMap.value = p.specularIntensityMap,
        t(p.specularIntensityMap, g.specularIntensityMapTransform))
    }
    function m(g, p) {
        p.matcap && (g.matcap.value = p.matcap)
    }
    function b(g, p) {
        let x = e.get(p).light;
        g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),
        g.nearDistance.value = x.shadow.camera.near,
        g.farDistance.value = x.shadow.camera.far
    }
    return {
        refreshFogUniforms: n,
        refreshMaterialUniforms: s
    }
}
function I_(i, e, t, n) {
    let s = {}
      , r = {}
      , a = []
      , o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
    function c(x, v) {
        let _ = v.program;
        n.uniformBlockBinding(x, _)
    }
    function l(x, v) {
        let _ = s[x.id];
        _ === void 0 && (m(x),
        _ = h(x),
        s[x.id] = _,
        x.addEventListener("dispose", g));
        let P = v.program;
        n.updateUBOMapping(x, P);
        let E = e.render.frame;
        r[x.id] !== E && (f(x),
        r[x.id] = E)
    }
    function h(x) {
        let v = u();
        x.__bindingPointIndex = v;
        let _ = i.createBuffer()
          , P = x.__size
          , E = x.usage;
        return i.bindBuffer(i.UNIFORM_BUFFER, _),
        i.bufferData(i.UNIFORM_BUFFER, P, E),
        i.bindBuffer(i.UNIFORM_BUFFER, null),
        i.bindBufferBase(i.UNIFORM_BUFFER, v, _),
        _
    }
    function u() {
        for (let x = 0; x < o; x++)
            if (a.indexOf(x) === -1)
                return a.push(x),
                x;
        return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),
        0
    }
    function f(x) {
        let v = s[x.id]
          , _ = x.uniforms
          , P = x.__cache;
        i.bindBuffer(i.UNIFORM_BUFFER, v);
        for (let E = 0, R = _.length; E < R; E++) {
            let L = Array.isArray(_[E]) ? _[E] : [_[E]];
            for (let w = 0, M = L.length; w < M; w++) {
                let I = L[w];
                if (d(I, E, w, P) === !0) {
                    let H = I.__offset
                      , B = Array.isArray(I.value) ? I.value : [I.value]
                      , V = 0;
                    for (let J = 0; J < B.length; J++) {
                        let X = B[J]
                          , ee = b(X);
                        typeof X == "number" || typeof X == "boolean" ? (I.__data[0] = X,
                        i.bufferSubData(i.UNIFORM_BUFFER, H + V, I.__data)) : X.isMatrix3 ? (I.__data[0] = X.elements[0],
                        I.__data[1] = X.elements[1],
                        I.__data[2] = X.elements[2],
                        I.__data[3] = 0,
                        I.__data[4] = X.elements[3],
                        I.__data[5] = X.elements[4],
                        I.__data[6] = X.elements[5],
                        I.__data[7] = 0,
                        I.__data[8] = X.elements[6],
                        I.__data[9] = X.elements[7],
                        I.__data[10] = X.elements[8],
                        I.__data[11] = 0) : (X.toArray(I.__data, V),
                        V += ee.storage / Float32Array.BYTES_PER_ELEMENT)
                    }
                    i.bufferSubData(i.UNIFORM_BUFFER, H, I.__data)
                }
            }
        }
        i.bindBuffer(i.UNIFORM_BUFFER, null)
    }
    function d(x, v, _, P) {
        let E = x.value
          , R = v + "_" + _;
        if (P[R] === void 0)
            return typeof E == "number" || typeof E == "boolean" ? P[R] = E : P[R] = E.clone(),
            !0;
        {
            let L = P[R];
            if (typeof E == "number" || typeof E == "boolean") {
                if (L !== E)
                    return P[R] = E,
                    !0
            } else if (L.equals(E) === !1)
                return L.copy(E),
                !0
        }
        return !1
    }
    function m(x) {
        let v = x.uniforms
          , _ = 0
          , P = 16;
        for (let R = 0, L = v.length; R < L; R++) {
            let w = Array.isArray(v[R]) ? v[R] : [v[R]];
            for (let M = 0, I = w.length; M < I; M++) {
                let H = w[M]
                  , B = Array.isArray(H.value) ? H.value : [H.value];
                for (let V = 0, J = B.length; V < J; V++) {
                    let X = B[V]
                      , ee = b(X)
                      , G = _ % P
                      , se = G % ee.boundary
                      , fe = G + se;
                    _ += se,
                    fe !== 0 && P - fe < ee.storage && (_ += P - fe),
                    H.__data = new Float32Array(ee.storage / Float32Array.BYTES_PER_ELEMENT),
                    H.__offset = _,
                    _ += ee.storage
                }
            }
        }
        let E = _ % P;
        return E > 0 && (_ += P - E),
        x.__size = _,
        x.__cache = {},
        this
    }
    function b(x) {
        let v = {
            boundary: 0,
            storage: 0
        };
        return typeof x == "number" || typeof x == "boolean" ? (v.boundary = 4,
        v.storage = 4) : x.isVector2 ? (v.boundary = 8,
        v.storage = 8) : x.isVector3 || x.isColor ? (v.boundary = 16,
        v.storage = 12) : x.isVector4 ? (v.boundary = 16,
        v.storage = 16) : x.isMatrix3 ? (v.boundary = 48,
        v.storage = 48) : x.isMatrix4 ? (v.boundary = 64,
        v.storage = 64) : x.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", x),
        v
    }
    function g(x) {
        let v = x.target;
        v.removeEventListener("dispose", g);
        let _ = a.indexOf(v.__bindingPointIndex);
        a.splice(_, 1),
        i.deleteBuffer(s[v.id]),
        delete s[v.id],
        delete r[v.id]
    }
    function p() {
        for (let x in s)
            i.deleteBuffer(s[x]);
        a = [],
        s = {},
        r = {}
    }
    return {
        bind: c,
        update: l,
        dispose: p
    }
}
var Pa = class {
    constructor(e={}) {
        let {canvas: t=Fp(), context: n=null, depth: s=!0, stencil: r=!1, alpha: a=!1, antialias: o=!1, premultipliedAlpha: c=!0, preserveDrawingBuffer: l=!1, powerPreference: h="default", failIfMajorPerformanceCaveat: u=!1, reverseDepthBuffer: f=!1} = e;
        this.isWebGLRenderer = !0;
        let d;
        if (n !== null) {
            if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
                throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
            d = n.getContextAttributes().alpha
        } else
            d = a;
        let m = new Uint32Array(4)
          , b = new Int32Array(4)
          , g = null
          , p = null
          , x = []
          , v = [];
        this.domElement = t,
        this.debug = {
            checkShaderErrors: !0,
            onShaderError: null
        },
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this._outputColorSpace = St,
        this.toneMapping = xi,
        this.toneMappingExposure = 1;
        let _ = this
          , P = !1
          , E = 0
          , R = 0
          , L = null
          , w = -1
          , M = null
          , I = new Je
          , H = new Je
          , B = null
          , V = new ue(0)
          , J = 0
          , X = t.width
          , ee = t.height
          , G = 1
          , se = null
          , fe = null
          , Ee = new Je(0,0,X,ee)
          , Ve = new Je(0,0,X,ee)
          , tt = !1
          , j = new _r
          , $ = !1
          , xe = !1
          , ae = new Le
          , Te = new Le
          , De = new C
          , ke = new Je
          , ot = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        }
          , _e = !1;
        function nt() {
            return L === null ? G : 1
        }
        let U = n;
        function fn(S, N) {
            return t.getContext(S, N)
        }
        try {
            let S = {
                alpha: !0,
                depth: s,
                stencil: r,
                antialias: o,
                premultipliedAlpha: c,
                preserveDrawingBuffer: l,
                powerPreference: h,
                failIfMajorPerformanceCaveat: u
            };
            if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r170"),
            t.addEventListener("webglcontextlost", Z, !1),
            t.addEventListener("webglcontextrestored", de, !1),
            t.addEventListener("webglcontextcreationerror", le, !1),
            U === null) {
                let N = "webgl2";
                if (U = fn(N, S),
                U === null)
                    throw fn(N) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
            }
        } catch (S) {
            throw console.error("THREE.WebGLRenderer: " + S.message),
            S
        }
        let qe, je, Ce, ft, Ae, T, y, O, K, Q, Y, Se, ce, pe, Ke, te, me, Ie, Ue, ge, Ye, ze, ct, D;
        function oe() {
            qe = new j0(U),
            qe.init(),
            ze = new E_(U,qe),
            je = new H0(U,qe,e,ze),
            Ce = new M_(U,qe),
            je.reverseDepthBuffer && f && Ce.buffers.depth.setReversed(!0),
            ft = new Z0(U),
            Ae = new l_,
            T = new w_(U,qe,Ce,Ae,je,ze,ft),
            y = new G0(_),
            O = new q0(_),
            K = new im(U),
            ct = new k0(U,K),
            Q = new Y0(U,K,ft,ct),
            Y = new Q0(U,Q,K,ft),
            Ue = new J0(U,je,T),
            te = new V0(Ae),
            Se = new c_(_,y,O,qe,je,ct,te),
            ce = new P_(_,Ae),
            pe = new u_,
            Ke = new b_(qe),
            Ie = new B0(_,y,O,Ce,Y,d,c),
            me = new v_(_,Y,je),
            D = new I_(U,ft,je,Ce),
            ge = new z0(U,qe,ft),
            Ye = new K0(U,qe,ft),
            ft.programs = Se.programs,
            _.capabilities = je,
            _.extensions = qe,
            _.properties = Ae,
            _.renderLists = pe,
            _.shadowMap = me,
            _.state = Ce,
            _.info = ft
        }
        oe();
        let W = new cl(_,U);
        this.xr = W,
        this.getContext = function() {
            return U
        }
        ,
        this.getContextAttributes = function() {
            return U.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            let S = qe.get("WEBGL_lose_context");
            S && S.loseContext()
        }
        ,
        this.forceContextRestore = function() {
            let S = qe.get("WEBGL_lose_context");
            S && S.restoreContext()
        }
        ,
        this.getPixelRatio = function() {
            return G
        }
        ,
        this.setPixelRatio = function(S) {
            S !== void 0 && (G = S,
            this.setSize(X, ee, !1))
        }
        ,
        this.getSize = function(S) {
            return S.set(X, ee)
        }
        ,
        this.setSize = function(S, N, k=!0) {
            if (W.isPresenting) {
                console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                return
            }
            X = S,
            ee = N,
            t.width = Math.floor(S * G),
            t.height = Math.floor(N * G),
            k === !0 && (t.style.width = S + "px",
            t.style.height = N + "px"),
            this.setViewport(0, 0, S, N)
        }
        ,
        this.getDrawingBufferSize = function(S) {
            return S.set(X * G, ee * G).floor()
        }
        ,
        this.setDrawingBufferSize = function(S, N, k) {
            X = S,
            ee = N,
            G = k,
            t.width = Math.floor(S * k),
            t.height = Math.floor(N * k),
            this.setViewport(0, 0, S, N)
        }
        ,
        this.getCurrentViewport = function(S) {
            return S.copy(I)
        }
        ,
        this.getViewport = function(S) {
            return S.copy(Ee)
        }
        ,
        this.setViewport = function(S, N, k, z) {
            S.isVector4 ? Ee.set(S.x, S.y, S.z, S.w) : Ee.set(S, N, k, z),
            Ce.viewport(I.copy(Ee).multiplyScalar(G).round())
        }
        ,
        this.getScissor = function(S) {
            return S.copy(Ve)
        }
        ,
        this.setScissor = function(S, N, k, z) {
            S.isVector4 ? Ve.set(S.x, S.y, S.z, S.w) : Ve.set(S, N, k, z),
            Ce.scissor(H.copy(Ve).multiplyScalar(G).round())
        }
        ,
        this.getScissorTest = function() {
            return tt
        }
        ,
        this.setScissorTest = function(S) {
            Ce.setScissorTest(tt = S)
        }
        ,
        this.setOpaqueSort = function(S) {
            se = S
        }
        ,
        this.setTransparentSort = function(S) {
            fe = S
        }
        ,
        this.getClearColor = function(S) {
            return S.copy(Ie.getClearColor())
        }
        ,
        this.setClearColor = function() {
            Ie.setClearColor.apply(Ie, arguments)
        }
        ,
        this.getClearAlpha = function() {
            return Ie.getClearAlpha()
        }
        ,
        this.setClearAlpha = function() {
            Ie.setClearAlpha.apply(Ie, arguments)
        }
        ,
        this.clear = function(S=!0, N=!0, k=!0) {
            let z = 0;
            if (S) {
                let F = !1;
                if (L !== null) {
                    let ie = L.texture.format;
                    F = ie === Hl || ie === zl || ie === kl
                }
                if (F) {
                    let ie = L.texture.type
                      , he = ie === Jn || ie === qi || ie === gr || ie === Ts || ie === Fl || ie === Ol
                      , ve = Ie.getClearColor()
                      , ye = Ie.getClearAlpha()
                      , Ne = ve.r
                      , Be = ve.g
                      , Me = ve.b;
                    he ? (m[0] = Ne,
                    m[1] = Be,
                    m[2] = Me,
                    m[3] = ye,
                    U.clearBufferuiv(U.COLOR, 0, m)) : (b[0] = Ne,
                    b[1] = Be,
                    b[2] = Me,
                    b[3] = ye,
                    U.clearBufferiv(U.COLOR, 0, b))
                } else
                    z |= U.COLOR_BUFFER_BIT
            }
            N && (z |= U.DEPTH_BUFFER_BIT),
            k && (z |= U.STENCIL_BUFFER_BIT,
            this.state.buffers.stencil.setMask(4294967295)),
            U.clear(z)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.dispose = function() {
            t.removeEventListener("webglcontextlost", Z, !1),
            t.removeEventListener("webglcontextrestored", de, !1),
            t.removeEventListener("webglcontextcreationerror", le, !1),
            pe.dispose(),
            Ke.dispose(),
            Ae.dispose(),
            y.dispose(),
            O.dispose(),
            Y.dispose(),
            ct.dispose(),
            D.dispose(),
            Se.dispose(),
            W.dispose(),
            W.removeEventListener("sessionstart", $h),
            W.removeEventListener("sessionend", eu),
            Ui.stop()
        }
        ;
        function Z(S) {
            S.preventDefault(),
            console.log("THREE.WebGLRenderer: Context Lost."),
            P = !0
        }
        function de() {
            console.log("THREE.WebGLRenderer: Context Restored."),
            P = !1;
            let S = ft.autoReset
              , N = me.enabled
              , k = me.autoUpdate
              , z = me.needsUpdate
              , F = me.type;
            oe(),
            ft.autoReset = S,
            me.enabled = N,
            me.autoUpdate = k,
            me.needsUpdate = z,
            me.type = F
        }
        function le(S) {
            console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage)
        }
        function Oe(S) {
            let N = S.target;
            N.removeEventListener("dispose", Oe),
            yt(N)
        }
        function yt(S) {
            zt(S),
            Ae.remove(S)
        }
        function zt(S) {
            let N = Ae.get(S).programs;
            N !== void 0 && (N.forEach(function(k) {
                Se.releaseProgram(k)
            }),
            S.isShaderMaterial && Se.releaseShaderCache(S))
        }
        this.renderBufferDirect = function(S, N, k, z, F, ie) {
            N === null && (N = ot);
            let he = F.isMesh && F.matrixWorld.determinant() < 0
              , ve = Ff(S, N, k, z, F);
            Ce.setMaterial(z, he);
            let ye = k.index
              , Ne = 1;
            if (z.wireframe === !0) {
                if (ye = Q.getWireframeAttribute(k),
                ye === void 0)
                    return;
                Ne = 2
            }
            let Be = k.drawRange
              , Me = k.attributes.position
              , Ze = Be.start * Ne
              , lt = (Be.start + Be.count) * Ne;
            ie !== null && (Ze = Math.max(Ze, ie.start * Ne),
            lt = Math.min(lt, (ie.start + ie.count) * Ne)),
            ye !== null ? (Ze = Math.max(Ze, 0),
            lt = Math.min(lt, ye.count)) : Me != null && (Ze = Math.max(Ze, 0),
            lt = Math.min(lt, Me.count));
            let pt = lt - Ze;
            if (pt < 0 || pt === 1 / 0)
                return;
            ct.setup(F, z, ve, k, ye);
            let Kt, Qe = ge;
            if (ye !== null && (Kt = K.get(ye),
            Qe = Ye,
            Qe.setIndex(Kt)),
            F.isMesh)
                z.wireframe === !0 ? (Ce.setLineWidth(z.wireframeLinewidth * nt()),
                Qe.setMode(U.LINES)) : Qe.setMode(U.TRIANGLES);
            else if (F.isLine) {
                let we = z.linewidth;
                we === void 0 && (we = 1),
                Ce.setLineWidth(we * nt()),
                F.isLineSegments ? Qe.setMode(U.LINES) : F.isLineLoop ? Qe.setMode(U.LINE_LOOP) : Qe.setMode(U.LINE_STRIP)
            } else
                F.isPoints ? Qe.setMode(U.POINTS) : F.isSprite && Qe.setMode(U.TRIANGLES);
            if (F.isBatchedMesh)
                if (F._multiDrawInstances !== null)
                    Qe.renderMultiDrawInstances(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount, F._multiDrawInstances);
                else if (qe.get("WEBGL_multi_draw"))
                    Qe.renderMultiDraw(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount);
                else {
                    let we = F._multiDrawStarts
                      , kn = F._multiDrawCounts
                      , $e = F._multiDrawCount
                      , Mn = ye ? K.get(ye).bytesPerElement : 1
                      , ns = Ae.get(z).currentProgram.getUniforms();
                    for (let $t = 0; $t < $e; $t++)
                        ns.setValue(U, "_gl_DrawID", $t),
                        Qe.render(we[$t] / Mn, kn[$t])
                }
            else if (F.isInstancedMesh)
                Qe.renderInstances(Ze, pt, F.count);
            else if (k.isInstancedBufferGeometry) {
                let we = k._maxInstanceCount !== void 0 ? k._maxInstanceCount : 1 / 0
                  , kn = Math.min(k.instanceCount, we);
                Qe.renderInstances(Ze, pt, kn)
            } else
                Qe.render(Ze, pt)
        }
        ;
        function it(S, N, k) {
            S.transparent === !0 && S.side === Ot && S.forceSinglePass === !1 ? (S.side = Gt,
            S.needsUpdate = !0,
            Hr(S, N, k),
            S.side = Nn,
            S.needsUpdate = !0,
            Hr(S, N, k),
            S.side = Ot) : Hr(S, N, k)
        }
        this.compile = function(S, N, k=null) {
            k === null && (k = S),
            p = Ke.get(k),
            p.init(N),
            v.push(p),
            k.traverseVisible(function(F) {
                F.isLight && F.layers.test(N.layers) && (p.pushLight(F),
                F.castShadow && p.pushShadow(F))
            }),
            S !== k && S.traverseVisible(function(F) {
                F.isLight && F.layers.test(N.layers) && (p.pushLight(F),
                F.castShadow && p.pushShadow(F))
            }),
            p.setupLights();
            let z = new Set;
            return S.traverse(function(F) {
                if (!(F.isMesh || F.isPoints || F.isLine || F.isSprite))
                    return;
                let ie = F.material;
                if (ie)
                    if (Array.isArray(ie))
                        for (let he = 0; he < ie.length; he++) {
                            let ve = ie[he];
                            it(ve, k, F),
                            z.add(ve)
                        }
                    else
                        it(ie, k, F),
                        z.add(ie)
            }),
            v.pop(),
            p = null,
            z
        }
        ,
        this.compileAsync = function(S, N, k=null) {
            let z = this.compile(S, N, k);
            return new Promise(F => {
                function ie() {
                    if (z.forEach(function(he) {
                        Ae.get(he).currentProgram.isReady() && z.delete(he)
                    }),
                    z.size === 0) {
                        F(S);
                        return
                    }
                    setTimeout(ie, 10)
                }
                qe.get("KHR_parallel_shader_compile") !== null ? ie() : setTimeout(ie, 10)
            }
            )
        }
        ;
        let yn = null;
        function Bn(S) {
            yn && yn(S)
        }
        function $h() {
            Ui.stop()
        }
        function eu() {
            Ui.start()
        }
        let Ui = new Xd;
        Ui.setAnimationLoop(Bn),
        typeof self < "u" && Ui.setContext(self),
        this.setAnimationLoop = function(S) {
            yn = S,
            W.setAnimationLoop(S),
            S === null ? Ui.stop() : Ui.start()
        }
        ,
        W.addEventListener("sessionstart", $h),
        W.addEventListener("sessionend", eu),
        this.render = function(S, N) {
            if (N !== void 0 && N.isCamera !== !0) {
                console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                return
            }
            if (P === !0)
                return;
            if (S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(),
            N.parent === null && N.matrixWorldAutoUpdate === !0 && N.updateMatrixWorld(),
            W.enabled === !0 && W.isPresenting === !0 && (W.cameraAutoUpdate === !0 && W.updateCamera(N),
            N = W.getCamera()),
            S.isScene === !0 && S.onBeforeRender(_, S, N, L),
            p = Ke.get(S, v.length),
            p.init(N),
            v.push(p),
            Te.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse),
            j.setFromProjectionMatrix(Te),
            xe = this.localClippingEnabled,
            $ = te.init(this.clippingPlanes, xe),
            g = pe.get(S, x.length),
            g.init(),
            x.push(g),
            W.enabled === !0 && W.isPresenting === !0) {
                let ie = _.xr.getDepthSensingMesh();
                ie !== null && Ao(ie, N, -1 / 0, _.sortObjects)
            }
            Ao(S, N, 0, _.sortObjects),
            g.finish(),
            _.sortObjects === !0 && g.sort(se, fe),
            _e = W.enabled === !1 || W.isPresenting === !1 || W.hasDepthSensing() === !1,
            _e && Ie.addToRenderList(g, S),
            this.info.render.frame++,
            $ === !0 && te.beginShadows();
            let k = p.state.shadowsArray;
            me.render(k, S, N),
            $ === !0 && te.endShadows(),
            this.info.autoReset === !0 && this.info.reset();
            let z = g.opaque
              , F = g.transmissive;
            if (p.setupLights(),
            N.isArrayCamera) {
                let ie = N.cameras;
                if (F.length > 0)
                    for (let he = 0, ve = ie.length; he < ve; he++) {
                        let ye = ie[he];
                        nu(z, F, S, ye)
                    }
                _e && Ie.render(S);
                for (let he = 0, ve = ie.length; he < ve; he++) {
                    let ye = ie[he];
                    tu(g, S, ye, ye.viewport)
                }
            } else
                F.length > 0 && nu(z, F, S, N),
                _e && Ie.render(S),
                tu(g, S, N);
            L !== null && (T.updateMultisampleRenderTarget(L),
            T.updateRenderTargetMipmap(L)),
            S.isScene === !0 && S.onAfterRender(_, S, N),
            ct.resetDefaultState(),
            w = -1,
            M = null,
            v.pop(),
            v.length > 0 ? (p = v[v.length - 1],
            $ === !0 && te.setGlobalState(_.clippingPlanes, p.state.camera)) : p = null,
            x.pop(),
            x.length > 0 ? g = x[x.length - 1] : g = null
        }
        ;
        function Ao(S, N, k, z) {
            if (S.visible === !1)
                return;
            if (S.layers.test(N.layers)) {
                if (S.isGroup)
                    k = S.renderOrder;
                else if (S.isLOD)
                    S.autoUpdate === !0 && S.update(N);
                else if (S.isLight)
                    p.pushLight(S),
                    S.castShadow && p.pushShadow(S);
                else if (S.isSprite) {
                    if (!S.frustumCulled || j.intersectsSprite(S)) {
                        z && ke.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Te);
                        let he = Y.update(S)
                          , ve = S.material;
                        ve.visible && g.push(S, he, ve, k, ke.z, null)
                    }
                } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || j.intersectsObject(S))) {
                    let he = Y.update(S)
                      , ve = S.material;
                    if (z && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(),
                    ke.copy(S.boundingSphere.center)) : (he.boundingSphere === null && he.computeBoundingSphere(),
                    ke.copy(he.boundingSphere.center)),
                    ke.applyMatrix4(S.matrixWorld).applyMatrix4(Te)),
                    Array.isArray(ve)) {
                        let ye = he.groups;
                        for (let Ne = 0, Be = ye.length; Ne < Be; Ne++) {
                            let Me = ye[Ne]
                              , Ze = ve[Me.materialIndex];
                            Ze && Ze.visible && g.push(S, he, Ze, k, ke.z, Me)
                        }
                    } else
                        ve.visible && g.push(S, he, ve, k, ke.z, null)
                }
            }
            let ie = S.children;
            for (let he = 0, ve = ie.length; he < ve; he++)
                Ao(ie[he], N, k, z)
        }
        function tu(S, N, k, z) {
            let F = S.opaque
              , ie = S.transmissive
              , he = S.transparent;
            p.setupLightsView(k),
            $ === !0 && te.setGlobalState(_.clippingPlanes, k),
            z && Ce.viewport(I.copy(z)),
            F.length > 0 && zr(F, N, k),
            ie.length > 0 && zr(ie, N, k),
            he.length > 0 && zr(he, N, k),
            Ce.buffers.depth.setTest(!0),
            Ce.buffers.depth.setMask(!0),
            Ce.buffers.color.setMask(!0),
            Ce.setPolygonOffset(!1)
        }
        function nu(S, N, k, z) {
            if ((k.isScene === !0 ? k.overrideMaterial : null) !== null)
                return;
            p.state.transmissionRenderTarget[z.id] === void 0 && (p.state.transmissionRenderTarget[z.id] = new kt(1,1,{
                generateMipmaps: !0,
                type: qe.has("EXT_color_buffer_half_float") || qe.has("EXT_color_buffer_float") ? rn : Jn,
                minFilter: Dn,
                samples: 4,
                stencilBuffer: r,
                resolveDepthBuffer: !1,
                resolveStencilBuffer: !1,
                colorSpace: Ge.workingColorSpace
            }));
            let ie = p.state.transmissionRenderTarget[z.id]
              , he = z.viewport || I;
            ie.setSize(he.z, he.w);
            let ve = _.getRenderTarget();
            _.setRenderTarget(ie),
            _.getClearColor(V),
            J = _.getClearAlpha(),
            J < 1 && _.setClearColor(16777215, .5),
            _.clear(),
            _e && Ie.render(k);
            let ye = _.toneMapping;
            _.toneMapping = xi;
            let Ne = z.viewport;
            if (z.viewport !== void 0 && (z.viewport = void 0),
            p.setupLightsView(z),
            $ === !0 && te.setGlobalState(_.clippingPlanes, z),
            zr(S, k, z),
            T.updateMultisampleRenderTarget(ie),
            T.updateRenderTargetMipmap(ie),
            qe.has("WEBGL_multisampled_render_to_texture") === !1) {
                let Be = !1;
                for (let Me = 0, Ze = N.length; Me < Ze; Me++) {
                    let lt = N[Me]
                      , pt = lt.object
                      , Kt = lt.geometry
                      , Qe = lt.material
                      , we = lt.group;
                    if (Qe.side === Ot && pt.layers.test(z.layers)) {
                        let kn = Qe.side;
                        Qe.side = Gt,
                        Qe.needsUpdate = !0,
                        iu(pt, k, z, Kt, Qe, we),
                        Qe.side = kn,
                        Qe.needsUpdate = !0,
                        Be = !0
                    }
                }
                Be === !0 && (T.updateMultisampleRenderTarget(ie),
                T.updateRenderTargetMipmap(ie))
            }
            _.setRenderTarget(ve),
            _.setClearColor(V, J),
            Ne !== void 0 && (z.viewport = Ne),
            _.toneMapping = ye
        }
        function zr(S, N, k) {
            let z = N.isScene === !0 ? N.overrideMaterial : null;
            for (let F = 0, ie = S.length; F < ie; F++) {
                let he = S[F]
                  , ve = he.object
                  , ye = he.geometry
                  , Ne = z === null ? he.material : z
                  , Be = he.group;
                ve.layers.test(k.layers) && iu(ve, N, k, ye, Ne, Be)
            }
        }
        function iu(S, N, k, z, F, ie) {
            S.onBeforeRender(_, N, k, z, F, ie),
            S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse, S.matrixWorld),
            S.normalMatrix.getNormalMatrix(S.modelViewMatrix),
            F.onBeforeRender(_, N, k, z, S, ie),
            F.transparent === !0 && F.side === Ot && F.forceSinglePass === !1 ? (F.side = Gt,
            F.needsUpdate = !0,
            _.renderBufferDirect(k, N, z, F, S, ie),
            F.side = Nn,
            F.needsUpdate = !0,
            _.renderBufferDirect(k, N, z, F, S, ie),
            F.side = Ot) : _.renderBufferDirect(k, N, z, F, S, ie),
            S.onAfterRender(_, N, k, z, F, ie)
        }
        function Hr(S, N, k) {
            N.isScene !== !0 && (N = ot);
            let z = Ae.get(S)
              , F = p.state.lights
              , ie = p.state.shadowsArray
              , he = F.state.version
              , ve = Se.getParameters(S, F.state, ie, N, k)
              , ye = Se.getProgramCacheKey(ve)
              , Ne = z.programs;
            z.environment = S.isMeshStandardMaterial ? N.environment : null,
            z.fog = N.fog,
            z.envMap = (S.isMeshStandardMaterial ? O : y).get(S.envMap || z.environment),
            z.envMapRotation = z.environment !== null && S.envMap === null ? N.environmentRotation : S.envMapRotation,
            Ne === void 0 && (S.addEventListener("dispose", Oe),
            Ne = new Map,
            z.programs = Ne);
            let Be = Ne.get(ye);
            if (Be !== void 0) {
                if (z.currentProgram === Be && z.lightsStateVersion === he)
                    return ru(S, ve),
                    Be
            } else
                ve.uniforms = Se.getUniforms(S),
                S.onBeforeCompile(ve, _),
                Be = Se.acquireProgram(ve, ye),
                Ne.set(ye, Be),
                z.uniforms = ve.uniforms;
            let Me = z.uniforms;
            return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Me.clippingPlanes = te.uniform),
            ru(S, ve),
            z.needsLights = Bf(S),
            z.lightsStateVersion = he,
            z.needsLights && (Me.ambientLightColor.value = F.state.ambient,
            Me.lightProbe.value = F.state.probe,
            Me.directionalLights.value = F.state.directional,
            Me.directionalLightShadows.value = F.state.directionalShadow,
            Me.spotLights.value = F.state.spot,
            Me.spotLightShadows.value = F.state.spotShadow,
            Me.rectAreaLights.value = F.state.rectArea,
            Me.ltc_1.value = F.state.rectAreaLTC1,
            Me.ltc_2.value = F.state.rectAreaLTC2,
            Me.pointLights.value = F.state.point,
            Me.pointLightShadows.value = F.state.pointShadow,
            Me.hemisphereLights.value = F.state.hemi,
            Me.directionalShadowMap.value = F.state.directionalShadowMap,
            Me.directionalShadowMatrix.value = F.state.directionalShadowMatrix,
            Me.spotShadowMap.value = F.state.spotShadowMap,
            Me.spotLightMatrix.value = F.state.spotLightMatrix,
            Me.spotLightMap.value = F.state.spotLightMap,
            Me.pointShadowMap.value = F.state.pointShadowMap,
            Me.pointShadowMatrix.value = F.state.pointShadowMatrix),
            z.currentProgram = Be,
            z.uniformsList = null,
            Be
        }
        function su(S) {
            if (S.uniformsList === null) {
                let N = S.currentProgram.getUniforms();
                S.uniformsList = Ms.seqWithValue(N.seq, S.uniforms)
            }
            return S.uniformsList
        }
        function ru(S, N) {
            let k = Ae.get(S);
            k.outputColorSpace = N.outputColorSpace,
            k.batching = N.batching,
            k.batchingColor = N.batchingColor,
            k.instancing = N.instancing,
            k.instancingColor = N.instancingColor,
            k.instancingMorph = N.instancingMorph,
            k.skinning = N.skinning,
            k.morphTargets = N.morphTargets,
            k.morphNormals = N.morphNormals,
            k.morphColors = N.morphColors,
            k.morphTargetsCount = N.morphTargetsCount,
            k.numClippingPlanes = N.numClippingPlanes,
            k.numIntersection = N.numClipIntersection,
            k.vertexAlphas = N.vertexAlphas,
            k.vertexTangents = N.vertexTangents,
            k.toneMapping = N.toneMapping
        }
        function Ff(S, N, k, z, F) {
            N.isScene !== !0 && (N = ot),
            T.resetTextureUnits();
            let ie = N.fog
              , he = z.isMeshStandardMaterial ? N.environment : null
              , ve = L === null ? _.outputColorSpace : L.isXRRenderTarget === !0 ? L.texture.colorSpace : Xt
              , ye = (z.isMeshStandardMaterial ? O : y).get(z.envMap || he)
              , Ne = z.vertexColors === !0 && !!k.attributes.color && k.attributes.color.itemSize === 4
              , Be = !!k.attributes.tangent && (!!z.normalMap || z.anisotropy > 0)
              , Me = !!k.morphAttributes.position
              , Ze = !!k.morphAttributes.normal
              , lt = !!k.morphAttributes.color
              , pt = xi;
            z.toneMapped && (L === null || L.isXRRenderTarget === !0) && (pt = _.toneMapping);
            let Kt = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color
              , Qe = Kt !== void 0 ? Kt.length : 0
              , we = Ae.get(z)
              , kn = p.state.lights;
            if ($ === !0 && (xe === !0 || S !== M)) {
                let pn = S === M && z.id === w;
                te.setState(z, S, pn)
            }
            let $e = !1;
            z.version === we.__version ? (we.needsLights && we.lightsStateVersion !== kn.state.version || we.outputColorSpace !== ve || F.isBatchedMesh && we.batching === !1 || !F.isBatchedMesh && we.batching === !0 || F.isBatchedMesh && we.batchingColor === !0 && F.colorTexture === null || F.isBatchedMesh && we.batchingColor === !1 && F.colorTexture !== null || F.isInstancedMesh && we.instancing === !1 || !F.isInstancedMesh && we.instancing === !0 || F.isSkinnedMesh && we.skinning === !1 || !F.isSkinnedMesh && we.skinning === !0 || F.isInstancedMesh && we.instancingColor === !0 && F.instanceColor === null || F.isInstancedMesh && we.instancingColor === !1 && F.instanceColor !== null || F.isInstancedMesh && we.instancingMorph === !0 && F.morphTexture === null || F.isInstancedMesh && we.instancingMorph === !1 && F.morphTexture !== null || we.envMap !== ye || z.fog === !0 && we.fog !== ie || we.numClippingPlanes !== void 0 && (we.numClippingPlanes !== te.numPlanes || we.numIntersection !== te.numIntersection) || we.vertexAlphas !== Ne || we.vertexTangents !== Be || we.morphTargets !== Me || we.morphNormals !== Ze || we.morphColors !== lt || we.toneMapping !== pt || we.morphTargetsCount !== Qe) && ($e = !0) : ($e = !0,
            we.__version = z.version);
            let Mn = we.currentProgram;
            $e === !0 && (Mn = Hr(z, N, F));
            let ns = !1
              , $t = !1
              , Js = !1
              , mt = Mn.getUniforms()
              , In = we.uniforms;
            if (Ce.useProgram(Mn.program) && (ns = !0,
            $t = !0,
            Js = !0),
            z.id !== w && (w = z.id,
            $t = !0),
            ns || M !== S) {
                Ce.buffers.depth.getReversed() ? (ae.copy(S.projectionMatrix),
                Bp(ae),
                kp(ae),
                mt.setValue(U, "projectionMatrix", ae)) : mt.setValue(U, "projectionMatrix", S.projectionMatrix),
                mt.setValue(U, "viewMatrix", S.matrixWorldInverse);
                let ci = mt.map.cameraPosition;
                ci !== void 0 && ci.setValue(U, De.setFromMatrixPosition(S.matrixWorld)),
                je.logarithmicDepthBuffer && mt.setValue(U, "logDepthBufFC", 2 / (Math.log(S.far + 1) / Math.LN2)),
                (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && mt.setValue(U, "isOrthographic", S.isOrthographicCamera === !0),
                M !== S && (M = S,
                $t = !0,
                Js = !0)
            }
            if (F.isSkinnedMesh) {
                mt.setOptional(U, F, "bindMatrix"),
                mt.setOptional(U, F, "bindMatrixInverse");
                let pn = F.skeleton;
                pn && (pn.boneTexture === null && pn.computeBoneTexture(),
                mt.setValue(U, "boneTexture", pn.boneTexture, T))
            }
            F.isBatchedMesh && (mt.setOptional(U, F, "batchingTexture"),
            mt.setValue(U, "batchingTexture", F._matricesTexture, T),
            mt.setOptional(U, F, "batchingIdTexture"),
            mt.setValue(U, "batchingIdTexture", F._indirectTexture, T),
            mt.setOptional(U, F, "batchingColorTexture"),
            F._colorsTexture !== null && mt.setValue(U, "batchingColorTexture", F._colorsTexture, T));
            let Qs = k.morphAttributes;
            if ((Qs.position !== void 0 || Qs.normal !== void 0 || Qs.color !== void 0) && Ue.update(F, k, Mn),
            ($t || we.receiveShadow !== F.receiveShadow) && (we.receiveShadow = F.receiveShadow,
            mt.setValue(U, "receiveShadow", F.receiveShadow)),
            z.isMeshGouraudMaterial && z.envMap !== null && (In.envMap.value = ye,
            In.flipEnvMap.value = ye.isCubeTexture && ye.isRenderTargetTexture === !1 ? -1 : 1),
            z.isMeshStandardMaterial && z.envMap === null && N.environment !== null && (In.envMapIntensity.value = N.environmentIntensity),
            $t && (mt.setValue(U, "toneMappingExposure", _.toneMappingExposure),
            we.needsLights && Of(In, Js),
            ie && z.fog === !0 && ce.refreshFogUniforms(In, ie),
            ce.refreshMaterialUniforms(In, z, G, ee, p.state.transmissionRenderTarget[S.id]),
            Ms.upload(U, su(we), In, T)),
            z.isShaderMaterial && z.uniformsNeedUpdate === !0 && (Ms.upload(U, su(we), In, T),
            z.uniformsNeedUpdate = !1),
            z.isSpriteMaterial && mt.setValue(U, "center", F.center),
            mt.setValue(U, "modelViewMatrix", F.modelViewMatrix),
            mt.setValue(U, "normalMatrix", F.normalMatrix),
            mt.setValue(U, "modelMatrix", F.matrixWorld),
            z.isShaderMaterial || z.isRawShaderMaterial) {
                let pn = z.uniformsGroups;
                for (let ci = 0, li = pn.length; ci < li; ci++) {
                    let au = pn[ci];
                    D.update(au, Mn),
                    D.bind(au, Mn)
                }
            }
            return Mn
        }
        function Of(S, N) {
            S.ambientLightColor.needsUpdate = N,
            S.lightProbe.needsUpdate = N,
            S.directionalLights.needsUpdate = N,
            S.directionalLightShadows.needsUpdate = N,
            S.pointLights.needsUpdate = N,
            S.pointLightShadows.needsUpdate = N,
            S.spotLights.needsUpdate = N,
            S.spotLightShadows.needsUpdate = N,
            S.rectAreaLights.needsUpdate = N,
            S.hemisphereLights.needsUpdate = N
        }
        function Bf(S) {
            return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0
        }
        this.getActiveCubeFace = function() {
            return E
        }
        ,
        this.getActiveMipmapLevel = function() {
            return R
        }
        ,
        this.getRenderTarget = function() {
            return L
        }
        ,
        this.setRenderTargetTextures = function(S, N, k) {
            Ae.get(S.texture).__webglTexture = N,
            Ae.get(S.depthTexture).__webglTexture = k;
            let z = Ae.get(S);
            z.__hasExternalTextures = !0,
            z.__autoAllocateDepthBuffer = k === void 0,
            z.__autoAllocateDepthBuffer || qe.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),
            z.__useRenderToTexture = !1)
        }
        ,
        this.setRenderTargetFramebuffer = function(S, N) {
            let k = Ae.get(S);
            k.__webglFramebuffer = N,
            k.__useDefaultFramebuffer = N === void 0
        }
        ,
        this.setRenderTarget = function(S, N=0, k=0) {
            L = S,
            E = N,
            R = k;
            let z = !0
              , F = null
              , ie = !1
              , he = !1;
            if (S) {
                let ye = Ae.get(S);
                if (ye.__useDefaultFramebuffer !== void 0)
                    Ce.bindFramebuffer(U.FRAMEBUFFER, null),
                    z = !1;
                else if (ye.__webglFramebuffer === void 0)
                    T.setupRenderTarget(S);
                else if (ye.__hasExternalTextures)
                    T.rebindTextures(S, Ae.get(S.texture).__webglTexture, Ae.get(S.depthTexture).__webglTexture);
                else if (S.depthBuffer) {
                    let Me = S.depthTexture;
                    if (ye.__boundDepthTexture !== Me) {
                        if (Me !== null && Ae.has(Me) && (S.width !== Me.image.width || S.height !== Me.image.height))
                            throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
                        T.setupDepthRenderbuffer(S)
                    }
                }
                let Ne = S.texture;
                (Ne.isData3DTexture || Ne.isDataArrayTexture || Ne.isCompressedArrayTexture) && (he = !0);
                let Be = Ae.get(S).__webglFramebuffer;
                S.isWebGLCubeRenderTarget ? (Array.isArray(Be[N]) ? F = Be[N][k] : F = Be[N],
                ie = !0) : S.samples > 0 && T.useMultisampledRTT(S) === !1 ? F = Ae.get(S).__webglMultisampledFramebuffer : Array.isArray(Be) ? F = Be[k] : F = Be,
                I.copy(S.viewport),
                H.copy(S.scissor),
                B = S.scissorTest
            } else
                I.copy(Ee).multiplyScalar(G).floor(),
                H.copy(Ve).multiplyScalar(G).floor(),
                B = tt;
            if (Ce.bindFramebuffer(U.FRAMEBUFFER, F) && z && Ce.drawBuffers(S, F),
            Ce.viewport(I),
            Ce.scissor(H),
            Ce.setScissorTest(B),
            ie) {
                let ye = Ae.get(S.texture);
                U.framebufferTexture2D(U.FRAMEBUFFER, U.COLOR_ATTACHMENT0, U.TEXTURE_CUBE_MAP_POSITIVE_X + N, ye.__webglTexture, k)
            } else if (he) {
                let ye = Ae.get(S.texture)
                  , Ne = N || 0;
                U.framebufferTextureLayer(U.FRAMEBUFFER, U.COLOR_ATTACHMENT0, ye.__webglTexture, k || 0, Ne)
            }
            w = -1
        }
        ,
        this.readRenderTargetPixels = function(S, N, k, z, F, ie, he) {
            if (!(S && S.isWebGLRenderTarget)) {
                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                return
            }
            let ve = Ae.get(S).__webglFramebuffer;
            if (S.isWebGLCubeRenderTarget && he !== void 0 && (ve = ve[he]),
            ve) {
                Ce.bindFramebuffer(U.FRAMEBUFFER, ve);
                try {
                    let ye = S.texture
                      , Ne = ye.format
                      , Be = ye.type;
                    if (!je.textureFormatReadable(Ne)) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        return
                    }
                    if (!je.textureTypeReadable(Be)) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        return
                    }
                    N >= 0 && N <= S.width - z && k >= 0 && k <= S.height - F && U.readPixels(N, k, z, F, ze.convert(Ne), ze.convert(Be), ie)
                } finally {
                    let ye = L !== null ? Ae.get(L).__webglFramebuffer : null;
                    Ce.bindFramebuffer(U.FRAMEBUFFER, ye)
                }
            }
        }
        ,
        this.readRenderTargetPixelsAsync = async function(S, N, k, z, F, ie, he) {
            if (!(S && S.isWebGLRenderTarget))
                throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            let ve = Ae.get(S).__webglFramebuffer;
            if (S.isWebGLCubeRenderTarget && he !== void 0 && (ve = ve[he]),
            ve) {
                let ye = S.texture
                  , Ne = ye.format
                  , Be = ye.type;
                if (!je.textureFormatReadable(Ne))
                    throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
                if (!je.textureTypeReadable(Be))
                    throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
                if (N >= 0 && N <= S.width - z && k >= 0 && k <= S.height - F) {
                    Ce.bindFramebuffer(U.FRAMEBUFFER, ve);
                    let Me = U.createBuffer();
                    U.bindBuffer(U.PIXEL_PACK_BUFFER, Me),
                    U.bufferData(U.PIXEL_PACK_BUFFER, ie.byteLength, U.STREAM_READ),
                    U.readPixels(N, k, z, F, ze.convert(Ne), ze.convert(Be), 0);
                    let Ze = L !== null ? Ae.get(L).__webglFramebuffer : null;
                    Ce.bindFramebuffer(U.FRAMEBUFFER, Ze);
                    let lt = U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE, 0);
                    return U.flush(),
                    await Op(U, lt, 4),
                    U.bindBuffer(U.PIXEL_PACK_BUFFER, Me),
                    U.getBufferSubData(U.PIXEL_PACK_BUFFER, 0, ie),
                    U.deleteBuffer(Me),
                    U.deleteSync(lt),
                    ie
                } else
                    throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")
            }
        }
        ,
        this.copyFramebufferToTexture = function(S, N=null, k=0) {
            S.isTexture !== !0 && (or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),
            N = arguments[0] || null,
            S = arguments[1]);
            let z = Math.pow(2, -k)
              , F = Math.floor(S.image.width * z)
              , ie = Math.floor(S.image.height * z)
              , he = N !== null ? N.x : 0
              , ve = N !== null ? N.y : 0;
            T.setTexture2D(S, 0),
            U.copyTexSubImage2D(U.TEXTURE_2D, k, 0, 0, he, ve, F, ie),
            Ce.unbindTexture()
        }
        ,
        this.copyTextureToTexture = function(S, N, k=null, z=null, F=0) {
            S.isTexture !== !0 && (or("WebGLRenderer: copyTextureToTexture function signature has changed."),
            z = arguments[0] || null,
            S = arguments[1],
            N = arguments[2],
            F = arguments[3] || 0,
            k = null);
            let ie, he, ve, ye, Ne, Be, Me, Ze, lt, pt = S.isCompressedTexture ? S.mipmaps[F] : S.image;
            k !== null ? (ie = k.max.x - k.min.x,
            he = k.max.y - k.min.y,
            ve = k.isBox3 ? k.max.z - k.min.z : 1,
            ye = k.min.x,
            Ne = k.min.y,
            Be = k.isBox3 ? k.min.z : 0) : (ie = pt.width,
            he = pt.height,
            ve = pt.depth || 1,
            ye = 0,
            Ne = 0,
            Be = 0),
            z !== null ? (Me = z.x,
            Ze = z.y,
            lt = z.z) : (Me = 0,
            Ze = 0,
            lt = 0);
            let Kt = ze.convert(N.format), Qe = ze.convert(N.type), we;
            N.isData3DTexture ? (T.setTexture3D(N, 0),
            we = U.TEXTURE_3D) : N.isDataArrayTexture || N.isCompressedArrayTexture ? (T.setTexture2DArray(N, 0),
            we = U.TEXTURE_2D_ARRAY) : (T.setTexture2D(N, 0),
            we = U.TEXTURE_2D),
            U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL, N.flipY),
            U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha),
            U.pixelStorei(U.UNPACK_ALIGNMENT, N.unpackAlignment);
            let kn = U.getParameter(U.UNPACK_ROW_LENGTH)
              , $e = U.getParameter(U.UNPACK_IMAGE_HEIGHT)
              , Mn = U.getParameter(U.UNPACK_SKIP_PIXELS)
              , ns = U.getParameter(U.UNPACK_SKIP_ROWS)
              , $t = U.getParameter(U.UNPACK_SKIP_IMAGES);
            U.pixelStorei(U.UNPACK_ROW_LENGTH, pt.width),
            U.pixelStorei(U.UNPACK_IMAGE_HEIGHT, pt.height),
            U.pixelStorei(U.UNPACK_SKIP_PIXELS, ye),
            U.pixelStorei(U.UNPACK_SKIP_ROWS, Ne),
            U.pixelStorei(U.UNPACK_SKIP_IMAGES, Be);
            let Js = S.isDataArrayTexture || S.isData3DTexture
              , mt = N.isDataArrayTexture || N.isData3DTexture;
            if (S.isRenderTargetTexture || S.isDepthTexture) {
                let In = Ae.get(S)
                  , Qs = Ae.get(N)
                  , pn = Ae.get(In.__renderTarget)
                  , ci = Ae.get(Qs.__renderTarget);
                Ce.bindFramebuffer(U.READ_FRAMEBUFFER, pn.__webglFramebuffer),
                Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER, ci.__webglFramebuffer);
                for (let li = 0; li < ve; li++)
                    Js && U.framebufferTextureLayer(U.READ_FRAMEBUFFER, U.COLOR_ATTACHMENT0, Ae.get(S).__webglTexture, F, Be + li),
                    S.isDepthTexture ? (mt && U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER, U.COLOR_ATTACHMENT0, Ae.get(N).__webglTexture, F, lt + li),
                    U.blitFramebuffer(ye, Ne, ie, he, Me, Ze, ie, he, U.DEPTH_BUFFER_BIT, U.NEAREST)) : mt ? U.copyTexSubImage3D(we, F, Me, Ze, lt + li, ye, Ne, ie, he) : U.copyTexSubImage2D(we, F, Me, Ze, lt + li, ye, Ne, ie, he);
                Ce.bindFramebuffer(U.READ_FRAMEBUFFER, null),
                Ce.bindFramebuffer(U.DRAW_FRAMEBUFFER, null)
            } else
                mt ? S.isDataTexture || S.isData3DTexture ? U.texSubImage3D(we, F, Me, Ze, lt, ie, he, ve, Kt, Qe, pt.data) : N.isCompressedArrayTexture ? U.compressedTexSubImage3D(we, F, Me, Ze, lt, ie, he, ve, Kt, pt.data) : U.texSubImage3D(we, F, Me, Ze, lt, ie, he, ve, Kt, Qe, pt) : S.isDataTexture ? U.texSubImage2D(U.TEXTURE_2D, F, Me, Ze, ie, he, Kt, Qe, pt.data) : S.isCompressedTexture ? U.compressedTexSubImage2D(U.TEXTURE_2D, F, Me, Ze, pt.width, pt.height, Kt, pt.data) : U.texSubImage2D(U.TEXTURE_2D, F, Me, Ze, ie, he, Kt, Qe, pt);
            U.pixelStorei(U.UNPACK_ROW_LENGTH, kn),
            U.pixelStorei(U.UNPACK_IMAGE_HEIGHT, $e),
            U.pixelStorei(U.UNPACK_SKIP_PIXELS, Mn),
            U.pixelStorei(U.UNPACK_SKIP_ROWS, ns),
            U.pixelStorei(U.UNPACK_SKIP_IMAGES, $t),
            F === 0 && N.generateMipmaps && U.generateMipmap(we),
            Ce.unbindTexture()
        }
        ,
        this.copyTextureToTexture3D = function(S, N, k=null, z=null, F=0) {
            return S.isTexture !== !0 && (or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),
            k = arguments[0] || null,
            z = arguments[1] || null,
            S = arguments[2],
            N = arguments[3],
            F = arguments[4] || 0),
            or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),
            this.copyTextureToTexture(S, N, k, z, F)
        }
        ,
        this.initRenderTarget = function(S) {
            Ae.get(S).__webglFramebuffer === void 0 && T.setupRenderTarget(S)
        }
        ,
        this.initTexture = function(S) {
            S.isCubeTexture ? T.setTextureCube(S, 0) : S.isData3DTexture ? T.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? T.setTexture2DArray(S, 0) : T.setTexture2D(S, 0),
            Ce.unbindTexture()
        }
        ,
        this.resetState = function() {
            E = 0,
            R = 0,
            L = null,
            Ce.reset(),
            ct.reset()
        }
        ,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    get coordinateSystem() {
        return Yn
    }
    get outputColorSpace() {
        return this._outputColorSpace
    }
    set outputColorSpace(e) {
        this._outputColorSpace = e;
        let t = this.getContext();
        t.drawingBufferColorspace = Ge._getDrawingBufferColorSpace(e),
        t.unpackColorSpace = Ge._getUnpackColorSpace()
    }
}
  , Ia = class i {
    constructor(e, t=25e-5) {
        this.isFogExp2 = !0,
        this.name = "",
        this.color = new ue(e),
        this.density = t
    }
    clone() {
        return new i(this.color,this.density)
    }
    toJSON() {
        return {
            type: "FogExp2",
            name: this.name,
            color: this.color.getHex(),
            density: this.density
        }
    }
}
;
var Ds = class extends vt {
    constructor() {
        super(),
        this.isScene = !0,
        this.type = "Scene",
        this.background = null,
        this.environment = null,
        this.fog = null,
        this.backgroundBlurriness = 0,
        this.backgroundIntensity = 1,
        this.backgroundRotation = new Fn,
        this.environmentIntensity = 1,
        this.environmentRotation = new Fn,
        this.overrideMaterial = null,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    copy(e, t) {
        return super.copy(e, t),
        e.background !== null && (this.background = e.background.clone()),
        e.environment !== null && (this.environment = e.environment.clone()),
        e.fog !== null && (this.fog = e.fog.clone()),
        this.backgroundBlurriness = e.backgroundBlurriness,
        this.backgroundIntensity = e.backgroundIntensity,
        this.backgroundRotation.copy(e.backgroundRotation),
        this.environmentIntensity = e.environmentIntensity,
        this.environmentRotation.copy(e.environmentRotation),
        e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return this.fog !== null && (t.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness),
        this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity),
        t.object.backgroundRotation = this.backgroundRotation.toArray(),
        this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity),
        t.object.environmentRotation = this.environmentRotation.toArray(),
        t
    }
}
  , xr = class {
    constructor(e, t) {
        this.isInterleavedBuffer = !0,
        this.array = e,
        this.stride = t,
        this.count = e !== void 0 ? e.length / t : 0,
        this.usage = qc,
        this.updateRanges = [],
        this.version = 0,
        this.uuid = Cn()
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    setUsage(e) {
        return this.usage = e,
        this
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    copy(e) {
        return this.array = new e.array.constructor(e.array),
        this.count = e.count,
        this.stride = e.stride,
        this.usage = e.usage,
        this
    }
    copyAt(e, t, n) {
        e *= this.stride,
        n *= t.stride;
        for (let s = 0, r = this.stride; s < r; s++)
            this.array[e + s] = t.array[n + s];
        return this
    }
    set(e, t=0) {
        return this.array.set(e, t),
        this
    }
    clone(e) {
        e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Cn()),
        e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
        let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid])
          , n = new this.constructor(t,this.stride);
        return n.setUsage(this.usage),
        n
    }
    onUpload(e) {
        return this.onUploadCallback = e,
        this
    }
    toJSON(e) {
        return e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Cn()),
        e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))),
        {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
        }
    }
}
  , jt = new C
  , vr = class i {
    constructor(e, t, n, s=!1) {
        this.isInterleavedBufferAttribute = !0,
        this.name = "",
        this.data = e,
        this.itemSize = t,
        this.offset = n,
        this.normalized = s
    }
    get count() {
        return this.data.count
    }
    get array() {
        return this.data.array
    }
    set needsUpdate(e) {
        this.data.needsUpdate = e
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.data.count; t < n; t++)
            jt.fromBufferAttribute(this, t),
            jt.applyMatrix4(e),
            this.setXYZ(t, jt.x, jt.y, jt.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++)
            jt.fromBufferAttribute(this, t),
            jt.applyNormalMatrix(e),
            this.setXYZ(t, jt.x, jt.y, jt.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++)
            jt.fromBufferAttribute(this, t),
            jt.transformDirection(e),
            this.setXYZ(t, jt.x, jt.y, jt.z);
        return this
    }
    getComponent(e, t) {
        let n = this.array[e * this.data.stride + this.offset + t];
        return this.normalized && (n = An(n, this.array)),
        n
    }
    setComponent(e, t, n) {
        return this.normalized && (n = st(n, this.array)),
        this.data.array[e * this.data.stride + this.offset + t] = n,
        this
    }
    setX(e, t) {
        return this.normalized && (t = st(t, this.array)),
        this.data.array[e * this.data.stride + this.offset] = t,
        this
    }
    setY(e, t) {
        return this.normalized && (t = st(t, this.array)),
        this.data.array[e * this.data.stride + this.offset + 1] = t,
        this
    }
    setZ(e, t) {
        return this.normalized && (t = st(t, this.array)),
        this.data.array[e * this.data.stride + this.offset + 2] = t,
        this
    }
    setW(e, t) {
        return this.normalized && (t = st(t, this.array)),
        this.data.array[e * this.data.stride + this.offset + 3] = t,
        this
    }
    getX(e) {
        let t = this.data.array[e * this.data.stride + this.offset];
        return this.normalized && (t = An(t, this.array)),
        t
    }
    getY(e) {
        let t = this.data.array[e * this.data.stride + this.offset + 1];
        return this.normalized && (t = An(t, this.array)),
        t
    }
    getZ(e) {
        let t = this.data.array[e * this.data.stride + this.offset + 2];
        return this.normalized && (t = An(t, this.array)),
        t
    }
    getW(e) {
        let t = this.data.array[e * this.data.stride + this.offset + 3];
        return this.normalized && (t = An(t, this.array)),
        t
    }
    setXY(e, t, n) {
        return e = e * this.data.stride + this.offset,
        this.normalized && (t = st(t, this.array),
        n = st(n, this.array)),
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this
    }
    setXYZ(e, t, n, s) {
        return e = e * this.data.stride + this.offset,
        this.normalized && (t = st(t, this.array),
        n = st(n, this.array),
        s = st(s, this.array)),
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this.data.array[e + 2] = s,
        this
    }
    setXYZW(e, t, n, s, r) {
        return e = e * this.data.stride + this.offset,
        this.normalized && (t = st(t, this.array),
        n = st(n, this.array),
        s = st(s, this.array),
        r = st(r, this.array)),
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this.data.array[e + 2] = s,
        this.data.array[e + 3] = r,
        this
    }
    clone(e) {
        if (e === void 0) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
            let t = [];
            for (let n = 0; n < this.count; n++) {
                let s = n * this.data.stride + this.offset;
                for (let r = 0; r < this.itemSize; r++)
                    t.push(this.data.array[s + r])
            }
            return new ut(new this.array.constructor(t),this.itemSize,this.normalized)
        } else
            return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
            e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
            new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)
    }
    toJSON(e) {
        if (e === void 0) {
            console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
            let t = [];
            for (let n = 0; n < this.count; n++) {
                let s = n * this.data.stride + this.offset;
                for (let r = 0; r < this.itemSize; r++)
                    t.push(this.data.array[s + r])
            }
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: t,
                normalized: this.normalized
            }
        } else
            return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
            e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
            {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            }
    }
}
;
var od = new C
  , cd = new Je
  , ld = new Je
  , L_ = new C
  , hd = new Le
  , ca = new C
  , tc = new nn
  , ud = new Le
  , nc = new vi
  , La = class extends be {
    constructor(e, t) {
        super(e, t),
        this.isSkinnedMesh = !0,
        this.type = "SkinnedMesh",
        this.bindMode = hu,
        this.bindMatrix = new Le,
        this.bindMatrixInverse = new Le,
        this.boundingBox = null,
        this.boundingSphere = null
    }
    computeBoundingBox() {
        let e = this.geometry;
        this.boundingBox === null && (this.boundingBox = new bn),
        this.boundingBox.makeEmpty();
        let t = e.getAttribute("position");
        for (let n = 0; n < t.count; n++)
            this.getVertexPosition(n, ca),
            this.boundingBox.expandByPoint(ca)
    }
    computeBoundingSphere() {
        let e = this.geometry;
        this.boundingSphere === null && (this.boundingSphere = new nn),
        this.boundingSphere.makeEmpty();
        let t = e.getAttribute("position");
        for (let n = 0; n < t.count; n++)
            this.getVertexPosition(n, ca),
            this.boundingSphere.expandByPoint(ca)
    }
    copy(e, t) {
        return super.copy(e, t),
        this.bindMode = e.bindMode,
        this.bindMatrix.copy(e.bindMatrix),
        this.bindMatrixInverse.copy(e.bindMatrixInverse),
        this.skeleton = e.skeleton,
        e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
        e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()),
        this
    }
    raycast(e, t) {
        let n = this.material
          , s = this.matrixWorld;
        n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(),
        tc.copy(this.boundingSphere),
        tc.applyMatrix4(s),
        e.ray.intersectsSphere(tc) !== !1 && (ud.copy(s).invert(),
        nc.copy(e.ray).applyMatrix4(ud),
        !(this.boundingBox !== null && nc.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, nc)))
    }
    getVertexPosition(e, t) {
        return super.getVertexPosition(e, t),
        this.applyBoneTransform(e, t),
        t
    }
    bind(e, t) {
        this.skeleton = e,
        t === void 0 && (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        t = this.matrixWorld),
        this.bindMatrix.copy(t),
        this.bindMatrixInverse.copy(t).invert()
    }
    pose() {
        this.skeleton.pose()
    }
    normalizeSkinWeights() {
        let e = new Je
          , t = this.geometry.attributes.skinWeight;
        for (let n = 0, s = t.count; n < s; n++) {
            e.fromBufferAttribute(t, n);
            let r = 1 / e.manhattanLength();
            r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0),
            t.setXYZW(n, e.x, e.y, e.z, e.w)
        }
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
        this.bindMode === hu ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === cp ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
    }
    applyBoneTransform(e, t) {
        let n = this.skeleton
          , s = this.geometry;
        cd.fromBufferAttribute(s.attributes.skinIndex, e),
        ld.fromBufferAttribute(s.attributes.skinWeight, e),
        od.copy(t).applyMatrix4(this.bindMatrix),
        t.set(0, 0, 0);
        for (let r = 0; r < 4; r++) {
            let a = ld.getComponent(r);
            if (a !== 0) {
                let o = cd.getComponent(r);
                hd.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]),
                t.addScaledVector(L_.copy(od).applyMatrix4(hd), a)
            }
        }
        return t.applyMatrix4(this.bindMatrixInverse)
    }
}
  , yr = class extends vt {
    constructor() {
        super(),
        this.isBone = !0,
        this.type = "Bone"
    }
}
  , Da = class extends Nt {
    constructor(e=null, t=1, n=1, s, r, a, o, c, l=Wt, h=Wt, u, f) {
        super(null, a, o, c, l, h, s, r, u, f),
        this.isDataTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n
        },
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
  , dd = new Le
  , D_ = new Le
  , Ua = class i {
    constructor(e=[], t=[]) {
        this.uuid = Cn(),
        this.bones = e.slice(0),
        this.boneInverses = t,
        this.boneMatrices = null,
        this.boneTexture = null,
        this.init()
    }
    init() {
        let e = this.bones
          , t = this.boneInverses;
        if (this.boneMatrices = new Float32Array(e.length * 16),
        t.length === 0)
            this.calculateInverses();
        else if (e.length !== t.length) {
            console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),
            this.boneInverses = [];
            for (let n = 0, s = this.bones.length; n < s; n++)
                this.boneInverses.push(new Le)
        }
    }
    calculateInverses() {
        this.boneInverses.length = 0;
        for (let e = 0, t = this.bones.length; e < t; e++) {
            let n = new Le;
            this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(),
            this.boneInverses.push(n)
        }
    }
    pose() {
        for (let e = 0, t = this.bones.length; e < t; e++) {
            let n = this.bones[e];
            n && n.matrixWorld.copy(this.boneInverses[e]).invert()
        }
        for (let e = 0, t = this.bones.length; e < t; e++) {
            let n = this.bones[e];
            n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(),
            n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld),
            n.matrix.decompose(n.position, n.quaternion, n.scale))
        }
    }
    update() {
        let e = this.bones
          , t = this.boneInverses
          , n = this.boneMatrices
          , s = this.boneTexture;
        for (let r = 0, a = e.length; r < a; r++) {
            let o = e[r] ? e[r].matrixWorld : D_;
            dd.multiplyMatrices(o, t[r]),
            dd.toArray(n, r * 16)
        }
        s !== null && (s.needsUpdate = !0)
    }
    clone() {
        return new i(this.bones,this.boneInverses)
    }
    computeBoneTexture() {
        let e = Math.sqrt(this.bones.length * 4);
        e = Math.ceil(e / 4) * 4,
        e = Math.max(e, 4);
        let t = new Float32Array(e * e * 4);
        t.set(this.boneMatrices);
        let n = new Da(t,e,e,gn,Rn);
        return n.needsUpdate = !0,
        this.boneMatrices = t,
        this.boneTexture = n,
        this
    }
    getBoneByName(e) {
        for (let t = 0, n = this.bones.length; t < n; t++) {
            let s = this.bones[t];
            if (s.name === e)
                return s
        }
    }
    dispose() {
        this.boneTexture !== null && (this.boneTexture.dispose(),
        this.boneTexture = null)
    }
    fromJSON(e, t) {
        this.uuid = e.uuid;
        for (let n = 0, s = e.bones.length; n < s; n++) {
            let r = e.bones[n]
              , a = t[r];
            a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r),
            a = new yr),
            this.bones.push(a),
            this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))
        }
        return this.init(),
        this
    }
    toJSON() {
        let e = {
            metadata: {
                version: 4.6,
                type: "Skeleton",
                generator: "Skeleton.toJSON"
            },
            bones: [],
            boneInverses: []
        };
        e.uuid = this.uuid;
        let t = this.bones
          , n = this.boneInverses;
        for (let s = 0, r = t.length; s < r; s++) {
            let a = t[s];
            e.bones.push(a.uuid);
            let o = n[s];
            e.boneInverses.push(o.toArray())
        }
        return e
    }
}
  , ji = class extends ut {
    constructor(e, t, n, s=1) {
        super(e, t, n),
        this.isInstancedBufferAttribute = !0,
        this.meshPerAttribute = s
    }
    copy(e) {
        return super.copy(e),
        this.meshPerAttribute = e.meshPerAttribute,
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.meshPerAttribute = this.meshPerAttribute,
        e.isInstancedBufferAttribute = !0,
        e
    }
}
  , bs = new Le
  , fd = new Le
  , la = []
  , pd = new bn
  , U_ = new Le
  , ir = new be
  , sr = new nn
  , Us = class extends be {
    constructor(e, t, n) {
        super(e, t),
        this.isInstancedMesh = !0,
        this.instanceMatrix = new ji(new Float32Array(n * 16),16),
        this.instanceColor = null,
        this.morphTexture = null,
        this.count = n,
        this.boundingBox = null,
        this.boundingSphere = null;
        for (let s = 0; s < n; s++)
            this.setMatrixAt(s, U_)
    }
    computeBoundingBox() {
        let e = this.geometry
          , t = this.count;
        this.boundingBox === null && (this.boundingBox = new bn),
        e.boundingBox === null && e.computeBoundingBox(),
        this.boundingBox.makeEmpty();
        for (let n = 0; n < t; n++)
            this.getMatrixAt(n, bs),
            pd.copy(e.boundingBox).applyMatrix4(bs),
            this.boundingBox.union(pd)
    }
    computeBoundingSphere() {
        let e = this.geometry
          , t = this.count;
        this.boundingSphere === null && (this.boundingSphere = new nn),
        e.boundingSphere === null && e.computeBoundingSphere(),
        this.boundingSphere.makeEmpty();
        for (let n = 0; n < t; n++)
            this.getMatrixAt(n, bs),
            sr.copy(e.boundingSphere).applyMatrix4(bs),
            this.boundingSphere.union(sr)
    }
    copy(e, t) {
        return super.copy(e, t),
        this.instanceMatrix.copy(e.instanceMatrix),
        e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()),
        e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()),
        this.count = e.count,
        e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
        e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()),
        this
    }
    getColorAt(e, t) {
        t.fromArray(this.instanceColor.array, e * 3)
    }
    getMatrixAt(e, t) {
        t.fromArray(this.instanceMatrix.array, e * 16)
    }
    getMorphAt(e, t) {
        let n = t.morphTargetInfluences
          , s = this.morphTexture.source.data.data
          , r = n.length + 1
          , a = e * r + 1;
        for (let o = 0; o < n.length; o++)
            n[o] = s[a + o]
    }
    raycast(e, t) {
        let n = this.matrixWorld
          , s = this.count;
        if (ir.geometry = this.geometry,
        ir.material = this.material,
        ir.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(),
        sr.copy(this.boundingSphere),
        sr.applyMatrix4(n),
        e.ray.intersectsSphere(sr) !== !1))
            for (let r = 0; r < s; r++) {
                this.getMatrixAt(r, bs),
                fd.multiplyMatrices(n, bs),
                ir.matrixWorld = fd,
                ir.raycast(e, la);
                for (let a = 0, o = la.length; a < o; a++) {
                    let c = la[a];
                    c.instanceId = r,
                    c.object = this,
                    t.push(c)
                }
                la.length = 0
            }
    }
    setColorAt(e, t) {
        this.instanceColor === null && (this.instanceColor = new ji(new Float32Array(this.instanceMatrix.count * 3).fill(1),3)),
        t.toArray(this.instanceColor.array, e * 3)
    }
    setMatrixAt(e, t) {
        t.toArray(this.instanceMatrix.array, e * 16)
    }
    setMorphAt(e, t) {
        let n = t.morphTargetInfluences
          , s = n.length + 1;
        this.morphTexture === null && (this.morphTexture = new Da(new Float32Array(s * this.count),s,this.count,Bl,Rn));
        let r = this.morphTexture.source.data.data
          , a = 0;
        for (let l = 0; l < n.length; l++)
            a += n[l];
        let o = this.geometry.morphTargetsRelative ? 1 : 1 - a
          , c = s * e;
        r[c] = o,
        r.set(n, c + 1)
    }
    updateMorphTargets() {}
    dispose() {
        return this.dispatchEvent({
            type: "dispose"
        }),
        this.morphTexture !== null && (this.morphTexture.dispose(),
        this.morphTexture = null),
        this
    }
}
;
var Mr = class extends sn {
    static get type() {
        return "LineBasicMaterial"
    }
    constructor(e) {
        super(),
        this.isLineBasicMaterial = !0,
        this.color = new ue(16777215),
        this.map = null,
        this.linewidth = 1,
        this.linecap = "round",
        this.linejoin = "round",
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.linewidth = e.linewidth,
        this.linecap = e.linecap,
        this.linejoin = e.linejoin,
        this.fog = e.fog,
        this
    }
}
  , Na = new C
  , Fa = new C
  , md = new Le
  , rr = new vi
  , ha = new nn
  , ic = new C
  , gd = new C
  , Ns = class extends vt {
    constructor(e=new bt, t=new Mr) {
        super(),
        this.isLine = !0,
        this.type = "Line",
        this.geometry = e,
        this.material = t,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    computeLineDistances() {
        let e = this.geometry;
        if (e.index === null) {
            let t = e.attributes.position
              , n = [0];
            for (let s = 1, r = t.count; s < r; s++)
                Na.fromBufferAttribute(t, s - 1),
                Fa.fromBufferAttribute(t, s),
                n[s] = n[s - 1],
                n[s] += Na.distanceTo(Fa);
            e.setAttribute("lineDistance", new We(n,1))
        } else
            console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }
    raycast(e, t) {
        let n = this.geometry
          , s = this.matrixWorld
          , r = e.params.Line.threshold
          , a = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(),
        ha.copy(n.boundingSphere),
        ha.applyMatrix4(s),
        ha.radius += r,
        e.ray.intersectsSphere(ha) === !1)
            return;
        md.copy(s).invert(),
        rr.copy(e.ray).applyMatrix4(md);
        let o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , c = o * o
          , l = this.isLineSegments ? 2 : 1
          , h = n.index
          , f = n.attributes.position;
        if (h !== null) {
            let d = Math.max(0, a.start)
              , m = Math.min(h.count, a.start + a.count);
            for (let b = d, g = m - 1; b < g; b += l) {
                let p = h.getX(b)
                  , x = h.getX(b + 1)
                  , v = ua(this, e, rr, c, p, x);
                v && t.push(v)
            }
            if (this.isLineLoop) {
                let b = h.getX(m - 1)
                  , g = h.getX(d)
                  , p = ua(this, e, rr, c, b, g);
                p && t.push(p)
            }
        } else {
            let d = Math.max(0, a.start)
              , m = Math.min(f.count, a.start + a.count);
            for (let b = d, g = m - 1; b < g; b += l) {
                let p = ua(this, e, rr, c, b, b + 1);
                p && t.push(p)
            }
            if (this.isLineLoop) {
                let b = ua(this, e, rr, c, m - 1, d);
                b && t.push(b)
            }
        }
    }
    updateMorphTargets() {
        let t = this.geometry.morphAttributes
          , n = Object.keys(t);
        if (n.length > 0) {
            let s = t[n[0]];
            if (s !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let r = 0, a = s.length; r < a; r++) {
                    let o = s[r].name || String(r);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[o] = r
                }
            }
        }
    }
}
;
function ua(i, e, t, n, s, r) {
    let a = i.geometry.attributes.position;
    if (Na.fromBufferAttribute(a, s),
    Fa.fromBufferAttribute(a, r),
    t.distanceSqToSegment(Na, Fa, ic, gd) > n)
        return;
    ic.applyMatrix4(i.matrixWorld);
    let c = e.ray.origin.distanceTo(ic);
    if (!(c < e.near || c > e.far))
        return {
            distance: c,
            point: gd.clone().applyMatrix4(i.matrixWorld),
            index: s,
            face: null,
            faceIndex: null,
            barycoord: null,
            object: i
        }
}
var bd = new C
  , _d = new C
  , Oa = class extends Ns {
    constructor(e, t) {
        super(e, t),
        this.isLineSegments = !0,
        this.type = "LineSegments"
    }
    computeLineDistances() {
        let e = this.geometry;
        if (e.index === null) {
            let t = e.attributes.position
              , n = [];
            for (let s = 0, r = t.count; s < r; s += 2)
                bd.fromBufferAttribute(t, s),
                _d.fromBufferAttribute(t, s + 1),
                n[s] = s === 0 ? 0 : n[s - 1],
                n[s + 1] = n[s] + bd.distanceTo(_d);
            e.setAttribute("lineDistance", new We(n,1))
        } else
            console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }
}
  , Ba = class extends Ns {
    constructor(e, t) {
        super(e, t),
        this.isLineLoop = !0,
        this.type = "LineLoop"
    }
}
  , Sr = class extends sn {
    static get type() {
        return "PointsMaterial"
    }
    constructor(e) {
        super(),
        this.isPointsMaterial = !0,
        this.color = new ue(16777215),
        this.map = null,
        this.alphaMap = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.size = e.size,
        this.sizeAttenuation = e.sizeAttenuation,
        this.fog = e.fog,
        this
    }
}
  , xd = new Le
  , ll = new vi
  , da = new nn
  , fa = new C
  , Fs = class extends vt {
    constructor(e=new bt, t=new Sr) {
        super(),
        this.isPoints = !0,
        this.type = "Points",
        this.geometry = e,
        this.material = t,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    raycast(e, t) {
        let n = this.geometry
          , s = this.matrixWorld
          , r = e.params.Points.threshold
          , a = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(),
        da.copy(n.boundingSphere),
        da.applyMatrix4(s),
        da.radius += r,
        e.ray.intersectsSphere(da) === !1)
            return;
        xd.copy(s).invert(),
        ll.copy(e.ray).applyMatrix4(xd);
        let o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , c = o * o
          , l = n.index
          , u = n.attributes.position;
        if (l !== null) {
            let f = Math.max(0, a.start)
              , d = Math.min(l.count, a.start + a.count);
            for (let m = f, b = d; m < b; m++) {
                let g = l.getX(m);
                fa.fromBufferAttribute(u, g),
                vd(fa, g, c, s, e, t, this)
            }
        } else {
            let f = Math.max(0, a.start)
              , d = Math.min(u.count, a.start + a.count);
            for (let m = f, b = d; m < b; m++)
                fa.fromBufferAttribute(u, m),
                vd(fa, m, c, s, e, t, this)
        }
    }
    updateMorphTargets() {
        let t = this.geometry.morphAttributes
          , n = Object.keys(t);
        if (n.length > 0) {
            let s = t[n[0]];
            if (s !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let r = 0, a = s.length; r < a; r++) {
                    let o = s[r].name || String(r);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[o] = r
                }
            }
        }
    }
}
;
function vd(i, e, t, n, s, r, a) {
    let o = ll.distanceSqToPoint(i);
    if (o < t) {
        let c = new C;
        ll.closestPointToPoint(i, c),
        c.applyMatrix4(n);
        let l = s.ray.origin.distanceTo(c);
        if (l < s.near || l > s.far)
            return;
        r.push({
            distance: l,
            distanceToRay: Math.sqrt(o),
            point: c,
            index: e,
            face: null,
            faceIndex: null,
            barycoord: null,
            object: a
        })
    }
}
var Os = class extends Nt {
    constructor(e, t, n, s, r, a, o, c, l) {
        super(e, t, n, s, r, a, o, c, l),
        this.isCanvasTexture = !0,
        this.needsUpdate = !0
    }
}
  , Pn = class {
    constructor() {
        this.type = "Curve",
        this.arcLengthDivisions = 200
    }
    getPoint() {
        return console.warn("THREE.Curve: .getPoint() not implemented."),
        null
    }
    getPointAt(e, t) {
        let n = this.getUtoTmapping(e);
        return this.getPoint(n, t)
    }
    getPoints(e=5) {
        let t = [];
        for (let n = 0; n <= e; n++)
            t.push(this.getPoint(n / e));
        return t
    }
    getSpacedPoints(e=5) {
        let t = [];
        for (let n = 0; n <= e; n++)
            t.push(this.getPointAt(n / e));
        return t
    }
    getLength() {
        let e = this.getLengths();
        return e[e.length - 1]
    }
    getLengths(e=this.arcLengthDivisions) {
        if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
            return this.cacheArcLengths;
        this.needsUpdate = !1;
        let t = [], n, s = this.getPoint(0), r = 0;
        t.push(0);
        for (let a = 1; a <= e; a++)
            n = this.getPoint(a / e),
            r += n.distanceTo(s),
            t.push(r),
            s = n;
        return this.cacheArcLengths = t,
        t
    }
    updateArcLengths() {
        this.needsUpdate = !0,
        this.getLengths()
    }
    getUtoTmapping(e, t) {
        let n = this.getLengths(), s = 0, r = n.length, a;
        t ? a = t : a = e * n[r - 1];
        let o = 0, c = r - 1, l;
        for (; o <= c; )
            if (s = Math.floor(o + (c - o) / 2),
            l = n[s] - a,
            l < 0)
                o = s + 1;
            else if (l > 0)
                c = s - 1;
            else {
                c = s;
                break
            }
        if (s = c,
        n[s] === a)
            return s / (r - 1);
        let h = n[s]
          , f = n[s + 1] - h
          , d = (a - h) / f;
        return (s + d) / (r - 1)
    }
    getTangent(e, t) {
        let s = e - 1e-4
          , r = e + 1e-4;
        s < 0 && (s = 0),
        r > 1 && (r = 1);
        let a = this.getPoint(s)
          , o = this.getPoint(r)
          , c = t || (a.isVector2 ? new ne : new C);
        return c.copy(o).sub(a).normalize(),
        c
    }
    getTangentAt(e, t) {
        let n = this.getUtoTmapping(e);
        return this.getTangent(n, t)
    }
    computeFrenetFrames(e, t) {
        let n = new C
          , s = []
          , r = []
          , a = []
          , o = new C
          , c = new Le;
        for (let d = 0; d <= e; d++) {
            let m = d / e;
            s[d] = this.getTangentAt(m, new C)
        }
        r[0] = new C,
        a[0] = new C;
        let l = Number.MAX_VALUE
          , h = Math.abs(s[0].x)
          , u = Math.abs(s[0].y)
          , f = Math.abs(s[0].z);
        h <= l && (l = h,
        n.set(1, 0, 0)),
        u <= l && (l = u,
        n.set(0, 1, 0)),
        f <= l && n.set(0, 0, 1),
        o.crossVectors(s[0], n).normalize(),
        r[0].crossVectors(s[0], o),
        a[0].crossVectors(s[0], r[0]);
        for (let d = 1; d <= e; d++) {
            if (r[d] = r[d - 1].clone(),
            a[d] = a[d - 1].clone(),
            o.crossVectors(s[d - 1], s[d]),
            o.length() > Number.EPSILON) {
                o.normalize();
                let m = Math.acos(Tt(s[d - 1].dot(s[d]), -1, 1));
                r[d].applyMatrix4(c.makeRotationAxis(o, m))
            }
            a[d].crossVectors(s[d], r[d])
        }
        if (t === !0) {
            let d = Math.acos(Tt(r[0].dot(r[e]), -1, 1));
            d /= e,
            s[0].dot(o.crossVectors(r[0], r[e])) > 0 && (d = -d);
            for (let m = 1; m <= e; m++)
                r[m].applyMatrix4(c.makeRotationAxis(s[m], d * m)),
                a[m].crossVectors(s[m], r[m])
        }
        return {
            tangents: s,
            normals: r,
            binormals: a
        }
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions,
        this
    }
    toJSON() {
        let e = {
            metadata: {
                version: 4.6,
                type: "Curve",
                generator: "Curve.toJSON"
            }
        };
        return e.arcLengthDivisions = this.arcLengthDivisions,
        e.type = this.type,
        e
    }
    fromJSON(e) {
        return this.arcLengthDivisions = e.arcLengthDivisions,
        this
    }
}
  , ka = class extends Pn {
    constructor(e=0, t=0, n=1, s=1, r=0, a=Math.PI * 2, o=!1, c=0) {
        super(),
        this.isEllipseCurve = !0,
        this.type = "EllipseCurve",
        this.aX = e,
        this.aY = t,
        this.xRadius = n,
        this.yRadius = s,
        this.aStartAngle = r,
        this.aEndAngle = a,
        this.aClockwise = o,
        this.aRotation = c
    }
    getPoint(e, t=new ne) {
        let n = t
          , s = Math.PI * 2
          , r = this.aEndAngle - this.aStartAngle
          , a = Math.abs(r) < Number.EPSILON;
        for (; r < 0; )
            r += s;
        for (; r > s; )
            r -= s;
        r < Number.EPSILON && (a ? r = 0 : r = s),
        this.aClockwise === !0 && !a && (r === s ? r = -s : r = r - s);
        let o = this.aStartAngle + e * r
          , c = this.aX + this.xRadius * Math.cos(o)
          , l = this.aY + this.yRadius * Math.sin(o);
        if (this.aRotation !== 0) {
            let h = Math.cos(this.aRotation)
              , u = Math.sin(this.aRotation)
              , f = c - this.aX
              , d = l - this.aY;
            c = f * h - d * u + this.aX,
            l = f * u + d * h + this.aY
        }
        return n.set(c, l)
    }
    copy(e) {
        return super.copy(e),
        this.aX = e.aX,
        this.aY = e.aY,
        this.xRadius = e.xRadius,
        this.yRadius = e.yRadius,
        this.aStartAngle = e.aStartAngle,
        this.aEndAngle = e.aEndAngle,
        this.aClockwise = e.aClockwise,
        this.aRotation = e.aRotation,
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.aX = this.aX,
        e.aY = this.aY,
        e.xRadius = this.xRadius,
        e.yRadius = this.yRadius,
        e.aStartAngle = this.aStartAngle,
        e.aEndAngle = this.aEndAngle,
        e.aClockwise = this.aClockwise,
        e.aRotation = this.aRotation,
        e
    }
    fromJSON(e) {
        return super.fromJSON(e),
        this.aX = e.aX,
        this.aY = e.aY,
        this.xRadius = e.xRadius,
        this.yRadius = e.yRadius,
        this.aStartAngle = e.aStartAngle,
        this.aEndAngle = e.aEndAngle,
        this.aClockwise = e.aClockwise,
        this.aRotation = e.aRotation,
        this
    }
}
  , hl = class extends ka {
    constructor(e, t, n, s, r, a) {
        super(e, t, n, n, s, r, a),
        this.isArcCurve = !0,
        this.type = "ArcCurve"
    }
}
;
function Wl() {
    let i = 0
      , e = 0
      , t = 0
      , n = 0;
    function s(r, a, o, c) {
        i = r,
        e = o,
        t = -3 * r + 3 * a - 2 * o - c,
        n = 2 * r - 2 * a + o + c
    }
    return {
        initCatmullRom: function(r, a, o, c, l) {
            s(a, o, l * (o - r), l * (c - a))
        },
        initNonuniformCatmullRom: function(r, a, o, c, l, h, u) {
            let f = (a - r) / l - (o - r) / (l + h) + (o - a) / h
              , d = (o - a) / h - (c - a) / (h + u) + (c - o) / u;
            f *= h,
            d *= h,
            s(a, o, f, d)
        },
        calc: function(r) {
            let a = r * r
              , o = a * r;
            return i + e * r + t * a + n * o
        }
    }
}
var pa = new C
  , sc = new Wl
  , rc = new Wl
  , ac = new Wl
  , Bs = class extends Pn {
    constructor(e=[], t=!1, n="centripetal", s=.5) {
        super(),
        this.isCatmullRomCurve3 = !0,
        this.type = "CatmullRomCurve3",
        this.points = e,
        this.closed = t,
        this.curveType = n,
        this.tension = s
    }
    getPoint(e, t=new C) {
        let n = t
          , s = this.points
          , r = s.length
          , a = (r - (this.closed ? 0 : 1)) * e
          , o = Math.floor(a)
          , c = a - o;
        this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r) + 1) * r : c === 0 && o === r - 1 && (o = r - 2,
        c = 1);
        let l, h;
        this.closed || o > 0 ? l = s[(o - 1) % r] : (pa.subVectors(s[0], s[1]).add(s[0]),
        l = pa);
        let u = s[o % r]
          , f = s[(o + 1) % r];
        if (this.closed || o + 2 < r ? h = s[(o + 2) % r] : (pa.subVectors(s[r - 1], s[r - 2]).add(s[r - 1]),
        h = pa),
        this.curveType === "centripetal" || this.curveType === "chordal") {
            let d = this.curveType === "chordal" ? .5 : .25
              , m = Math.pow(l.distanceToSquared(u), d)
              , b = Math.pow(u.distanceToSquared(f), d)
              , g = Math.pow(f.distanceToSquared(h), d);
            b < 1e-4 && (b = 1),
            m < 1e-4 && (m = b),
            g < 1e-4 && (g = b),
            sc.initNonuniformCatmullRom(l.x, u.x, f.x, h.x, m, b, g),
            rc.initNonuniformCatmullRom(l.y, u.y, f.y, h.y, m, b, g),
            ac.initNonuniformCatmullRom(l.z, u.z, f.z, h.z, m, b, g)
        } else
            this.curveType === "catmullrom" && (sc.initCatmullRom(l.x, u.x, f.x, h.x, this.tension),
            rc.initCatmullRom(l.y, u.y, f.y, h.y, this.tension),
            ac.initCatmullRom(l.z, u.z, f.z, h.z, this.tension));
        return n.set(sc.calc(c), rc.calc(c), ac.calc(c)),
        n
    }
    copy(e) {
        super.copy(e),
        this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            let s = e.points[t];
            this.points.push(s.clone())
        }
        return this.closed = e.closed,
        this.curveType = e.curveType,
        this.tension = e.tension,
        this
    }
    toJSON() {
        let e = super.toJSON();
        e.points = [];
        for (let t = 0, n = this.points.length; t < n; t++) {
            let s = this.points[t];
            e.points.push(s.toArray())
        }
        return e.closed = this.closed,
        e.curveType = this.curveType,
        e.tension = this.tension,
        e
    }
    fromJSON(e) {
        super.fromJSON(e),
        this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            let s = e.points[t];
            this.points.push(new C().fromArray(s))
        }
        return this.closed = e.closed,
        this.curveType = e.curveType,
        this.tension = e.tension,
        this
    }
}
;
function yd(i, e, t, n, s) {
    let r = (n - e) * .5
      , a = (s - t) * .5
      , o = i * i
      , c = i * o;
    return (2 * t - 2 * n + r + a) * c + (-3 * t + 3 * n - 2 * r - a) * o + r * i + t
}
function N_(i, e) {
    let t = 1 - i;
    return t * t * e
}
function F_(i, e) {
    return 2 * (1 - i) * i * e
}
function O_(i, e) {
    return i * i * e
}
function fr(i, e, t, n) {
    return N_(i, e) + F_(i, t) + O_(i, n)
}
function B_(i, e) {
    let t = 1 - i;
    return t * t * t * e
}
function k_(i, e) {
    let t = 1 - i;
    return 3 * t * t * i * e
}
function z_(i, e) {
    return 3 * (1 - i) * i * i * e
}
function H_(i, e) {
    return i * i * i * e
}
function pr(i, e, t, n, s) {
    return B_(i, e) + k_(i, t) + z_(i, n) + H_(i, s)
}
var ul = class extends Pn {
    constructor(e=new ne, t=new ne, n=new ne, s=new ne) {
        super(),
        this.isCubicBezierCurve = !0,
        this.type = "CubicBezierCurve",
        this.v0 = e,
        this.v1 = t,
        this.v2 = n,
        this.v3 = s
    }
    getPoint(e, t=new ne) {
        let n = t
          , s = this.v0
          , r = this.v1
          , a = this.v2
          , o = this.v3;
        return n.set(pr(e, s.x, r.x, a.x, o.x), pr(e, s.y, r.y, a.y, o.y)),
        n
    }
    copy(e) {
        return super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this.v3.copy(e.v3),
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.v0 = this.v0.toArray(),
        e.v1 = this.v1.toArray(),
        e.v2 = this.v2.toArray(),
        e.v3 = this.v3.toArray(),
        e
    }
    fromJSON(e) {
        return super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this.v3.fromArray(e.v3),
        this
    }
}
  , dl = class extends Pn {
    constructor(e=new C, t=new C, n=new C, s=new C) {
        super(),
        this.isCubicBezierCurve3 = !0,
        this.type = "CubicBezierCurve3",
        this.v0 = e,
        this.v1 = t,
        this.v2 = n,
        this.v3 = s
    }
    getPoint(e, t=new C) {
        let n = t
          , s = this.v0
          , r = this.v1
          , a = this.v2
          , o = this.v3;
        return n.set(pr(e, s.x, r.x, a.x, o.x), pr(e, s.y, r.y, a.y, o.y), pr(e, s.z, r.z, a.z, o.z)),
        n
    }
    copy(e) {
        return super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this.v3.copy(e.v3),
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.v0 = this.v0.toArray(),
        e.v1 = this.v1.toArray(),
        e.v2 = this.v2.toArray(),
        e.v3 = this.v3.toArray(),
        e
    }
    fromJSON(e) {
        return super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this.v3.fromArray(e.v3),
        this
    }
}
  , fl = class extends Pn {
    constructor(e=new ne, t=new ne) {
        super(),
        this.isLineCurve = !0,
        this.type = "LineCurve",
        this.v1 = e,
        this.v2 = t
    }
    getPoint(e, t=new ne) {
        let n = t;
        return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1),
        n.multiplyScalar(e).add(this.v1)),
        n
    }
    getPointAt(e, t) {
        return this.getPoint(e, t)
    }
    getTangent(e, t=new ne) {
        return t.subVectors(this.v2, this.v1).normalize()
    }
    getTangentAt(e, t) {
        return this.getTangent(e, t)
    }
    copy(e) {
        return super.copy(e),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.v1 = this.v1.toArray(),
        e.v2 = this.v2.toArray(),
        e
    }
    fromJSON(e) {
        return super.fromJSON(e),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
    }
}
  , pl = class extends Pn {
    constructor(e=new C, t=new C) {
        super(),
        this.isLineCurve3 = !0,
        this.type = "LineCurve3",
        this.v1 = e,
        this.v2 = t
    }
    getPoint(e, t=new C) {
        let n = t;
        return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1),
        n.multiplyScalar(e).add(this.v1)),
        n
    }
    getPointAt(e, t) {
        return this.getPoint(e, t)
    }
    getTangent(e, t=new C) {
        return t.subVectors(this.v2, this.v1).normalize()
    }
    getTangentAt(e, t) {
        return this.getTangent(e, t)
    }
    copy(e) {
        return super.copy(e),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.v1 = this.v1.toArray(),
        e.v2 = this.v2.toArray(),
        e
    }
    fromJSON(e) {
        return super.fromJSON(e),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
    }
}
  , ml = class extends Pn {
    constructor(e=new ne, t=new ne, n=new ne) {
        super(),
        this.isQuadraticBezierCurve = !0,
        this.type = "QuadraticBezierCurve",
        this.v0 = e,
        this.v1 = t,
        this.v2 = n
    }
    getPoint(e, t=new ne) {
        let n = t
          , s = this.v0
          , r = this.v1
          , a = this.v2;
        return n.set(fr(e, s.x, r.x, a.x), fr(e, s.y, r.y, a.y)),
        n
    }
    copy(e) {
        return super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.v0 = this.v0.toArray(),
        e.v1 = this.v1.toArray(),
        e.v2 = this.v2.toArray(),
        e
    }
    fromJSON(e) {
        return super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
    }
}
  , za = class extends Pn {
    constructor(e=new C, t=new C, n=new C) {
        super(),
        this.isQuadraticBezierCurve3 = !0,
        this.type = "QuadraticBezierCurve3",
        this.v0 = e,
        this.v1 = t,
        this.v2 = n
    }
    getPoint(e, t=new C) {
        let n = t
          , s = this.v0
          , r = this.v1
          , a = this.v2;
        return n.set(fr(e, s.x, r.x, a.x), fr(e, s.y, r.y, a.y), fr(e, s.z, r.z, a.z)),
        n
    }
    copy(e) {
        return super.copy(e),
        this.v0.copy(e.v0),
        this.v1.copy(e.v1),
        this.v2.copy(e.v2),
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.v0 = this.v0.toArray(),
        e.v1 = this.v1.toArray(),
        e.v2 = this.v2.toArray(),
        e
    }
    fromJSON(e) {
        return super.fromJSON(e),
        this.v0.fromArray(e.v0),
        this.v1.fromArray(e.v1),
        this.v2.fromArray(e.v2),
        this
    }
}
  , gl = class extends Pn {
    constructor(e=[]) {
        super(),
        this.isSplineCurve = !0,
        this.type = "SplineCurve",
        this.points = e
    }
    getPoint(e, t=new ne) {
        let n = t
          , s = this.points
          , r = (s.length - 1) * e
          , a = Math.floor(r)
          , o = r - a
          , c = s[a === 0 ? a : a - 1]
          , l = s[a]
          , h = s[a > s.length - 2 ? s.length - 1 : a + 1]
          , u = s[a > s.length - 3 ? s.length - 1 : a + 2];
        return n.set(yd(o, c.x, l.x, h.x, u.x), yd(o, c.y, l.y, h.y, u.y)),
        n
    }
    copy(e) {
        super.copy(e),
        this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            let s = e.points[t];
            this.points.push(s.clone())
        }
        return this
    }
    toJSON() {
        let e = super.toJSON();
        e.points = [];
        for (let t = 0, n = this.points.length; t < n; t++) {
            let s = this.points[t];
            e.points.push(s.toArray())
        }
        return e
    }
    fromJSON(e) {
        super.fromJSON(e),
        this.points = [];
        for (let t = 0, n = e.points.length; t < n; t++) {
            let s = e.points[t];
            this.points.push(new ne().fromArray(s))
        }
        return this
    }
}
  , V_ = Object.freeze({
    __proto__: null,
    ArcCurve: hl,
    CatmullRomCurve3: Bs,
    CubicBezierCurve: ul,
    CubicBezierCurve3: dl,
    EllipseCurve: ka,
    LineCurve: fl,
    LineCurve3: pl,
    QuadraticBezierCurve: ml,
    QuadraticBezierCurve3: za,
    SplineCurve: gl
});
var Ha = class i extends bt {
    constructor(e=[new ne(0,-.5), new ne(.5,0), new ne(0,.5)], t=12, n=0, s=Math.PI * 2) {
        super(),
        this.type = "LatheGeometry",
        this.parameters = {
            points: e,
            segments: t,
            phiStart: n,
            phiLength: s
        },
        t = Math.floor(t),
        s = Tt(s, 0, Math.PI * 2);
        let r = []
          , a = []
          , o = []
          , c = []
          , l = []
          , h = 1 / t
          , u = new C
          , f = new ne
          , d = new C
          , m = new C
          , b = new C
          , g = 0
          , p = 0;
        for (let x = 0; x <= e.length - 1; x++)
            switch (x) {
            case 0:
                g = e[x + 1].x - e[x].x,
                p = e[x + 1].y - e[x].y,
                d.x = p * 1,
                d.y = -g,
                d.z = p * 0,
                b.copy(d),
                d.normalize(),
                c.push(d.x, d.y, d.z);
                break;
            case e.length - 1:
                c.push(b.x, b.y, b.z);
                break;
            default:
                g = e[x + 1].x - e[x].x,
                p = e[x + 1].y - e[x].y,
                d.x = p * 1,
                d.y = -g,
                d.z = p * 0,
                m.copy(d),
                d.x += b.x,
                d.y += b.y,
                d.z += b.z,
                d.normalize(),
                c.push(d.x, d.y, d.z),
                b.copy(m)
            }
        for (let x = 0; x <= t; x++) {
            let v = n + x * h * s
              , _ = Math.sin(v)
              , P = Math.cos(v);
            for (let E = 0; E <= e.length - 1; E++) {
                u.x = e[E].x * _,
                u.y = e[E].y,
                u.z = e[E].x * P,
                a.push(u.x, u.y, u.z),
                f.x = x / t,
                f.y = E / (e.length - 1),
                o.push(f.x, f.y);
                let R = c[3 * E + 0] * _
                  , L = c[3 * E + 1]
                  , w = c[3 * E + 0] * P;
                l.push(R, L, w)
            }
        }
        for (let x = 0; x < t; x++)
            for (let v = 0; v < e.length - 1; v++) {
                let _ = v + x * e.length
                  , P = _
                  , E = _ + e.length
                  , R = _ + e.length + 1
                  , L = _ + 1;
                r.push(P, E, L),
                r.push(R, L, E)
            }
        this.setIndex(r),
        this.setAttribute("position", new We(a,3)),
        this.setAttribute("uv", new We(o,2)),
        this.setAttribute("normal", new We(l,3))
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new i(e.points,e.segments,e.phiStart,e.phiLength)
    }
}
;
var wr = class i extends bt {
    constructor(e=1, t=32, n=0, s=Math.PI * 2) {
        super(),
        this.type = "CircleGeometry",
        this.parameters = {
            radius: e,
            segments: t,
            thetaStart: n,
            thetaLength: s
        },
        t = Math.max(3, t);
        let r = []
          , a = []
          , o = []
          , c = []
          , l = new C
          , h = new ne;
        a.push(0, 0, 0),
        o.push(0, 0, 1),
        c.push(.5, .5);
        for (let u = 0, f = 3; u <= t; u++,
        f += 3) {
            let d = n + u / t * s;
            l.x = e * Math.cos(d),
            l.y = e * Math.sin(d),
            a.push(l.x, l.y, l.z),
            o.push(0, 0, 1),
            h.x = (a[f] / e + 1) / 2,
            h.y = (a[f + 1] / e + 1) / 2,
            c.push(h.x, h.y)
        }
        for (let u = 1; u <= t; u++)
            r.push(u, u + 1, 0);
        this.setIndex(r),
        this.setAttribute("position", new We(a,3)),
        this.setAttribute("normal", new We(o,3)),
        this.setAttribute("uv", new We(c,2))
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)
    }
}
  , Si = class i extends bt {
    constructor(e=1, t=1, n=1, s=32, r=1, a=!1, o=0, c=Math.PI * 2) {
        super(),
        this.type = "CylinderGeometry",
        this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: n,
            radialSegments: s,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: c
        };
        let l = this;
        s = Math.floor(s),
        r = Math.floor(r);
        let h = []
          , u = []
          , f = []
          , d = []
          , m = 0
          , b = []
          , g = n / 2
          , p = 0;
        x(),
        a === !1 && (e > 0 && v(!0),
        t > 0 && v(!1)),
        this.setIndex(h),
        this.setAttribute("position", new We(u,3)),
        this.setAttribute("normal", new We(f,3)),
        this.setAttribute("uv", new We(d,2));
        function x() {
            let _ = new C
              , P = new C
              , E = 0
              , R = (t - e) / n;
            for (let L = 0; L <= r; L++) {
                let w = []
                  , M = L / r
                  , I = M * (t - e) + e;
                for (let H = 0; H <= s; H++) {
                    let B = H / s
                      , V = B * c + o
                      , J = Math.sin(V)
                      , X = Math.cos(V);
                    P.x = I * J,
                    P.y = -M * n + g,
                    P.z = I * X,
                    u.push(P.x, P.y, P.z),
                    _.set(J, R, X).normalize(),
                    f.push(_.x, _.y, _.z),
                    d.push(B, 1 - M),
                    w.push(m++)
                }
                b.push(w)
            }
            for (let L = 0; L < s; L++)
                for (let w = 0; w < r; w++) {
                    let M = b[w][L]
                      , I = b[w + 1][L]
                      , H = b[w + 1][L + 1]
                      , B = b[w][L + 1];
                    (e > 0 || w !== 0) && (h.push(M, I, B),
                    E += 3),
                    (t > 0 || w !== r - 1) && (h.push(I, H, B),
                    E += 3)
                }
            l.addGroup(p, E, 0),
            p += E
        }
        function v(_) {
            let P = m
              , E = new ne
              , R = new C
              , L = 0
              , w = _ === !0 ? e : t
              , M = _ === !0 ? 1 : -1;
            for (let H = 1; H <= s; H++)
                u.push(0, g * M, 0),
                f.push(0, M, 0),
                d.push(.5, .5),
                m++;
            let I = m;
            for (let H = 0; H <= s; H++) {
                let V = H / s * c + o
                  , J = Math.cos(V)
                  , X = Math.sin(V);
                R.x = w * X,
                R.y = g * M,
                R.z = w * J,
                u.push(R.x, R.y, R.z),
                f.push(0, M, 0),
                E.x = J * .5 + .5,
                E.y = X * .5 * M + .5,
                d.push(E.x, E.y),
                m++
            }
            for (let H = 0; H < s; H++) {
                let B = P + H
                  , V = I + H;
                _ === !0 ? h.push(V, V + 1, B) : h.push(V + 1, V, B),
                L += 3
            }
            l.addGroup(p, L, _ === !0 ? 1 : 2),
            p += L
        }
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)
    }
}
;
var Va = class i extends bt {
    constructor(e=1, t=32, n=16, s=0, r=Math.PI * 2, a=0, o=Math.PI) {
        super(),
        this.type = "SphereGeometry",
        this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: n,
            phiStart: s,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        },
        t = Math.max(3, Math.floor(t)),
        n = Math.max(2, Math.floor(n));
        let c = Math.min(a + o, Math.PI)
          , l = 0
          , h = []
          , u = new C
          , f = new C
          , d = []
          , m = []
          , b = []
          , g = [];
        for (let p = 0; p <= n; p++) {
            let x = []
              , v = p / n
              , _ = 0;
            p === 0 && a === 0 ? _ = .5 / t : p === n && c === Math.PI && (_ = -.5 / t);
            for (let P = 0; P <= t; P++) {
                let E = P / t;
                u.x = -e * Math.cos(s + E * r) * Math.sin(a + v * o),
                u.y = e * Math.cos(a + v * o),
                u.z = e * Math.sin(s + E * r) * Math.sin(a + v * o),
                m.push(u.x, u.y, u.z),
                f.copy(u).normalize(),
                b.push(f.x, f.y, f.z),
                g.push(E + _, 1 - v),
                x.push(l++)
            }
            h.push(x)
        }
        for (let p = 0; p < n; p++)
            for (let x = 0; x < t; x++) {
                let v = h[p][x + 1]
                  , _ = h[p][x]
                  , P = h[p + 1][x]
                  , E = h[p + 1][x + 1];
                (p !== 0 || a > 0) && d.push(v, _, E),
                (p !== n - 1 || c < Math.PI) && d.push(_, P, E)
            }
        this.setIndex(d),
        this.setAttribute("position", new We(m,3)),
        this.setAttribute("normal", new We(b,3)),
        this.setAttribute("uv", new We(g,2))
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)
    }
}
;
var Ga = class i extends bt {
    constructor(e=1, t=.4, n=12, s=48, r=Math.PI * 2) {
        super(),
        this.type = "TorusGeometry",
        this.parameters = {
            radius: e,
            tube: t,
            radialSegments: n,
            tubularSegments: s,
            arc: r
        },
        n = Math.floor(n),
        s = Math.floor(s);
        let a = []
          , o = []
          , c = []
          , l = []
          , h = new C
          , u = new C
          , f = new C;
        for (let d = 0; d <= n; d++)
            for (let m = 0; m <= s; m++) {
                let b = m / s * r
                  , g = d / n * Math.PI * 2;
                u.x = (e + t * Math.cos(g)) * Math.cos(b),
                u.y = (e + t * Math.cos(g)) * Math.sin(b),
                u.z = t * Math.sin(g),
                o.push(u.x, u.y, u.z),
                h.x = e * Math.cos(b),
                h.y = e * Math.sin(b),
                f.subVectors(u, h).normalize(),
                c.push(f.x, f.y, f.z),
                l.push(m / s),
                l.push(d / n)
            }
        for (let d = 1; d <= n; d++)
            for (let m = 1; m <= s; m++) {
                let b = (s + 1) * d + m - 1
                  , g = (s + 1) * (d - 1) + m - 1
                  , p = (s + 1) * (d - 1) + m
                  , x = (s + 1) * d + m;
                a.push(b, g, x),
                a.push(g, p, x)
            }
        this.setIndex(a),
        this.setAttribute("position", new We(o,3)),
        this.setAttribute("normal", new We(c,3)),
        this.setAttribute("uv", new We(l,2))
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)
    }
}
;
var Er = class i extends bt {
    constructor(e=new za(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)), t=64, n=1, s=8, r=!1) {
        super(),
        this.type = "TubeGeometry",
        this.parameters = {
            path: e,
            tubularSegments: t,
            radius: n,
            radialSegments: s,
            closed: r
        };
        let a = e.computeFrenetFrames(t, r);
        this.tangents = a.tangents,
        this.normals = a.normals,
        this.binormals = a.binormals;
        let o = new C
          , c = new C
          , l = new ne
          , h = new C
          , u = []
          , f = []
          , d = []
          , m = [];
        b(),
        this.setIndex(m),
        this.setAttribute("position", new We(u,3)),
        this.setAttribute("normal", new We(f,3)),
        this.setAttribute("uv", new We(d,2));
        function b() {
            for (let v = 0; v < t; v++)
                g(v);
            g(r === !1 ? t : 0),
            x(),
            p()
        }
        function g(v) {
            h = e.getPointAt(v / t, h);
            let _ = a.normals[v]
              , P = a.binormals[v];
            for (let E = 0; E <= s; E++) {
                let R = E / s * Math.PI * 2
                  , L = Math.sin(R)
                  , w = -Math.cos(R);
                c.x = w * _.x + L * P.x,
                c.y = w * _.y + L * P.y,
                c.z = w * _.z + L * P.z,
                c.normalize(),
                f.push(c.x, c.y, c.z),
                o.x = h.x + n * c.x,
                o.y = h.y + n * c.y,
                o.z = h.z + n * c.z,
                u.push(o.x, o.y, o.z)
            }
        }
        function p() {
            for (let v = 1; v <= t; v++)
                for (let _ = 1; _ <= s; _++) {
                    let P = (s + 1) * (v - 1) + (_ - 1)
                      , E = (s + 1) * v + (_ - 1)
                      , R = (s + 1) * v + _
                      , L = (s + 1) * (v - 1) + _;
                    m.push(P, E, L),
                    m.push(E, R, L)
                }
        }
        function x() {
            for (let v = 0; v <= t; v++)
                for (let _ = 0; _ <= s; _++)
                    l.x = v / t,
                    l.y = _ / s,
                    d.push(l.x, l.y)
        }
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    toJSON() {
        let e = super.toJSON();
        return e.path = this.parameters.path.toJSON(),
        e
    }
    static fromJSON(e) {
        return new i(new V_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)
    }
}
;
var Wa = class extends Mt {
    static get type() {
        return "RawShaderMaterial"
    }
    constructor(e) {
        super(e),
        this.isRawShaderMaterial = !0
    }
}
  , Lt = class extends sn {
    static get type() {
        return "MeshStandardMaterial"
    }
    constructor(e) {
        super(),
        this.isMeshStandardMaterial = !0,
        this.defines = {
            STANDARD: ""
        },
        this.color = new ue(16777215),
        this.roughness = 1,
        this.metalness = 0,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new ue(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = zd,
        this.normalScale = new ne(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.roughnessMap = null,
        this.metalnessMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new Fn,
        this.envMapIntensity = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.flatShading = !1,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.defines = {
            STANDARD: ""
        },
        this.color.copy(e.color),
        this.roughness = e.roughness,
        this.metalness = e.metalness,
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.emissive.copy(e.emissive),
        this.emissiveMap = e.emissiveMap,
        this.emissiveIntensity = e.emissiveIntensity,
        this.bumpMap = e.bumpMap,
        this.bumpScale = e.bumpScale,
        this.normalMap = e.normalMap,
        this.normalMapType = e.normalMapType,
        this.normalScale.copy(e.normalScale),
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.roughnessMap = e.roughnessMap,
        this.metalnessMap = e.metalnessMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapRotation.copy(e.envMapRotation),
        this.envMapIntensity = e.envMapIntensity,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.flatShading = e.flatShading,
        this.fog = e.fog,
        this
    }
}
  , At = class extends Lt {
    static get type() {
        return "MeshPhysicalMaterial"
    }
    constructor(e) {
        super(),
        this.isMeshPhysicalMaterial = !0,
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        },
        this.anisotropyRotation = 0,
        this.anisotropyMap = null,
        this.clearcoatMap = null,
        this.clearcoatRoughness = 0,
        this.clearcoatRoughnessMap = null,
        this.clearcoatNormalScale = new ne(1,1),
        this.clearcoatNormalMap = null,
        this.ior = 1.5,
        Object.defineProperty(this, "reflectivity", {
            get: function() {
                return Tt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1)
            },
            set: function(t) {
                this.ior = (1 + .4 * t) / (1 - .4 * t)
            }
        }),
        this.iridescenceMap = null,
        this.iridescenceIOR = 1.3,
        this.iridescenceThicknessRange = [100, 400],
        this.iridescenceThicknessMap = null,
        this.sheenColor = new ue(0),
        this.sheenColorMap = null,
        this.sheenRoughness = 1,
        this.sheenRoughnessMap = null,
        this.transmissionMap = null,
        this.thickness = 0,
        this.thicknessMap = null,
        this.attenuationDistance = 1 / 0,
        this.attenuationColor = new ue(1,1,1),
        this.specularIntensity = 1,
        this.specularIntensityMap = null,
        this.specularColor = new ue(1,1,1),
        this.specularColorMap = null,
        this._anisotropy = 0,
        this._clearcoat = 0,
        this._dispersion = 0,
        this._iridescence = 0,
        this._sheen = 0,
        this._transmission = 0,
        this.setValues(e)
    }
    get anisotropy() {
        return this._anisotropy
    }
    set anisotropy(e) {
        this._anisotropy > 0 != e > 0 && this.version++,
        this._anisotropy = e
    }
    get clearcoat() {
        return this._clearcoat
    }
    set clearcoat(e) {
        this._clearcoat > 0 != e > 0 && this.version++,
        this._clearcoat = e
    }
    get iridescence() {
        return this._iridescence
    }
    set iridescence(e) {
        this._iridescence > 0 != e > 0 && this.version++,
        this._iridescence = e
    }
    get dispersion() {
        return this._dispersion
    }
    set dispersion(e) {
        this._dispersion > 0 != e > 0 && this.version++,
        this._dispersion = e
    }
    get sheen() {
        return this._sheen
    }
    set sheen(e) {
        this._sheen > 0 != e > 0 && this.version++,
        this._sheen = e
    }
    get transmission() {
        return this._transmission
    }
    set transmission(e) {
        this._transmission > 0 != e > 0 && this.version++,
        this._transmission = e
    }
    copy(e) {
        return super.copy(e),
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        },
        this.anisotropy = e.anisotropy,
        this.anisotropyRotation = e.anisotropyRotation,
        this.anisotropyMap = e.anisotropyMap,
        this.clearcoat = e.clearcoat,
        this.clearcoatMap = e.clearcoatMap,
        this.clearcoatRoughness = e.clearcoatRoughness,
        this.clearcoatRoughnessMap = e.clearcoatRoughnessMap,
        this.clearcoatNormalMap = e.clearcoatNormalMap,
        this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
        this.dispersion = e.dispersion,
        this.ior = e.ior,
        this.iridescence = e.iridescence,
        this.iridescenceMap = e.iridescenceMap,
        this.iridescenceIOR = e.iridescenceIOR,
        this.iridescenceThicknessRange = [...e.iridescenceThicknessRange],
        this.iridescenceThicknessMap = e.iridescenceThicknessMap,
        this.sheen = e.sheen,
        this.sheenColor.copy(e.sheenColor),
        this.sheenColorMap = e.sheenColorMap,
        this.sheenRoughness = e.sheenRoughness,
        this.sheenRoughnessMap = e.sheenRoughnessMap,
        this.transmission = e.transmission,
        this.transmissionMap = e.transmissionMap,
        this.thickness = e.thickness,
        this.thicknessMap = e.thicknessMap,
        this.attenuationDistance = e.attenuationDistance,
        this.attenuationColor.copy(e.attenuationColor),
        this.specularIntensity = e.specularIntensity,
        this.specularIntensityMap = e.specularIntensityMap,
        this.specularColor.copy(e.specularColor),
        this.specularColorMap = e.specularColorMap,
        this
    }
}
;
function ma(i, e, t) {
    return !i || !t && i.constructor === e ? i : typeof e.BYTES_PER_ELEMENT == "number" ? new e(i) : Array.prototype.slice.call(i)
}
function G_(i) {
    return ArrayBuffer.isView(i) && !(i instanceof DataView)
}
function W_(i) {
    function e(s, r) {
        return i[s] - i[r]
    }
    let t = i.length
      , n = new Array(t);
    for (let s = 0; s !== t; ++s)
        n[s] = s;
    return n.sort(e),
    n
}
function Md(i, e, t) {
    let n = i.length
      , s = new i.constructor(n);
    for (let r = 0, a = 0; a !== n; ++r) {
        let o = t[r] * e;
        for (let c = 0; c !== e; ++c)
            s[a++] = i[o + c]
    }
    return s
}
function Zd(i, e, t, n) {
    let s = 1
      , r = i[0];
    for (; r !== void 0 && r[n] === void 0; )
        r = i[s++];
    if (r === void 0)
        return;
    let a = r[n];
    if (a !== void 0)
        if (Array.isArray(a))
            do
                a = r[n],
                a !== void 0 && (e.push(r.time),
                t.push.apply(t, a)),
                r = i[s++];
            while (r !== void 0);
        else if (a.toArray !== void 0)
            do
                a = r[n],
                a !== void 0 && (e.push(r.time),
                a.toArray(t, t.length)),
                r = i[s++];
            while (r !== void 0);
        else
            do
                a = r[n],
                a !== void 0 && (e.push(r.time),
                t.push(a)),
                r = i[s++];
            while (r !== void 0)
}
var wi = class {
    constructor(e, t, n, s) {
        this.parameterPositions = e,
        this._cachedIndex = 0,
        this.resultBuffer = s !== void 0 ? s : new t.constructor(n),
        this.sampleValues = t,
        this.valueSize = n,
        this.settings = null,
        this.DefaultSettings_ = {}
    }
    evaluate(e) {
        let t = this.parameterPositions
          , n = this._cachedIndex
          , s = t[n]
          , r = t[n - 1];
        n: {
            e: {
                let a;
                t: {
                    i: if (!(e < s)) {
                        for (let o = n + 2; ; ) {
                            if (s === void 0) {
                                if (e < r)
                                    break i;
                                return n = t.length,
                                this._cachedIndex = n,
                                this.copySampleValue_(n - 1)
                            }
                            if (n === o)
                                break;
                            if (r = s,
                            s = t[++n],
                            e < s)
                                break e
                        }
                        a = t.length;
                        break t
                    }
                    if (!(e >= r)) {
                        let o = t[1];
                        e < o && (n = 2,
                        r = o);
                        for (let c = n - 2; ; ) {
                            if (r === void 0)
                                return this._cachedIndex = 0,
                                this.copySampleValue_(0);
                            if (n === c)
                                break;
                            if (s = r,
                            r = t[--n - 1],
                            e >= r)
                                break e
                        }
                        a = n,
                        n = 0;
                        break t
                    }
                    break n
                }
                for (; n < a; ) {
                    let o = n + a >>> 1;
                    e < t[o] ? a = o : n = o + 1
                }
                if (s = t[n],
                r = t[n - 1],
                r === void 0)
                    return this._cachedIndex = 0,
                    this.copySampleValue_(0);
                if (s === void 0)
                    return n = t.length,
                    this._cachedIndex = n,
                    this.copySampleValue_(n - 1)
            }
            this._cachedIndex = n,
            this.intervalChanged_(n, r, s)
        }
        return this.interpolate_(n, r, e, s)
    }
    getSettings_() {
        return this.settings || this.DefaultSettings_
    }
    copySampleValue_(e) {
        let t = this.resultBuffer
          , n = this.sampleValues
          , s = this.valueSize
          , r = e * s;
        for (let a = 0; a !== s; ++a)
            t[a] = n[r + a];
        return t
    }
    interpolate_() {
        throw new Error("call to abstract method")
    }
    intervalChanged_() {}
}
  , bl = class extends wi {
    constructor(e, t, n, s) {
        super(e, t, n, s),
        this._weightPrev = -0,
        this._offsetPrev = -0,
        this._weightNext = -0,
        this._offsetNext = -0,
        this.DefaultSettings_ = {
            endingStart: uu,
            endingEnd: uu
        }
    }
    intervalChanged_(e, t, n) {
        let s = this.parameterPositions
          , r = e - 2
          , a = e + 1
          , o = s[r]
          , c = s[a];
        if (o === void 0)
            switch (this.getSettings_().endingStart) {
            case du:
                r = e,
                o = 2 * t - n;
                break;
            case fu:
                r = s.length - 2,
                o = t + s[r] - s[r + 1];
                break;
            default:
                r = e,
                o = n
            }
        if (c === void 0)
            switch (this.getSettings_().endingEnd) {
            case du:
                a = e,
                c = 2 * n - t;
                break;
            case fu:
                a = 1,
                c = n + s[1] - s[0];
                break;
            default:
                a = e - 1,
                c = t
            }
        let l = (n - t) * .5
          , h = this.valueSize;
        this._weightPrev = l / (t - o),
        this._weightNext = l / (c - n),
        this._offsetPrev = r * h,
        this._offsetNext = a * h
    }
    interpolate_(e, t, n, s) {
        let r = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , c = e * o
          , l = c - o
          , h = this._offsetPrev
          , u = this._offsetNext
          , f = this._weightPrev
          , d = this._weightNext
          , m = (n - t) / (s - t)
          , b = m * m
          , g = b * m
          , p = -f * g + 2 * f * b - f * m
          , x = (1 + f) * g + (-1.5 - 2 * f) * b + (-.5 + f) * m + 1
          , v = (-1 - d) * g + (1.5 + d) * b + .5 * m
          , _ = d * g - d * b;
        for (let P = 0; P !== o; ++P)
            r[P] = p * a[h + P] + x * a[l + P] + v * a[c + P] + _ * a[u + P];
        return r
    }
}
  , _l = class extends wi {
    constructor(e, t, n, s) {
        super(e, t, n, s)
    }
    interpolate_(e, t, n, s) {
        let r = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , c = e * o
          , l = c - o
          , h = (n - t) / (s - t)
          , u = 1 - h;
        for (let f = 0; f !== o; ++f)
            r[f] = a[l + f] * u + a[c + f] * h;
        return r
    }
}
  , xl = class extends wi {
    constructor(e, t, n, s) {
        super(e, t, n, s)
    }
    interpolate_(e) {
        return this.copySampleValue_(e - 1)
    }
}
  , _n = class {
    constructor(e, t, n, s) {
        if (e === void 0)
            throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (t === void 0 || t.length === 0)
            throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
        this.name = e,
        this.times = ma(t, this.TimeBufferType),
        this.values = ma(n, this.ValueBufferType),
        this.setInterpolation(s || this.DefaultInterpolation)
    }
    static toJSON(e) {
        let t = e.constructor, n;
        if (t.toJSON !== this.toJSON)
            n = t.toJSON(e);
        else {
            n = {
                name: e.name,
                times: ma(e.times, Array),
                values: ma(e.values, Array)
            };
            let s = e.getInterpolation();
            s !== e.DefaultInterpolation && (n.interpolation = s)
        }
        return n.type = e.ValueTypeName,
        n
    }
    InterpolantFactoryMethodDiscrete(e) {
        return new xl(this.times,this.values,this.getValueSize(),e)
    }
    InterpolantFactoryMethodLinear(e) {
        return new _l(this.times,this.values,this.getValueSize(),e)
    }
    InterpolantFactoryMethodSmooth(e) {
        return new bl(this.times,this.values,this.getValueSize(),e)
    }
    setInterpolation(e) {
        let t;
        switch (e) {
        case Rs:
            t = this.InterpolantFactoryMethodDiscrete;
            break;
        case Cs:
            t = this.InterpolantFactoryMethodLinear;
            break;
        case Ro:
            t = this.InterpolantFactoryMethodSmooth;
            break
        }
        if (t === void 0) {
            let n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (this.createInterpolant === void 0)
                if (e !== this.DefaultInterpolation)
                    this.setInterpolation(this.DefaultInterpolation);
                else
                    throw new Error(n);
            return console.warn("THREE.KeyframeTrack:", n),
            this
        }
        return this.createInterpolant = t,
        this
    }
    getInterpolation() {
        switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
            return Rs;
        case this.InterpolantFactoryMethodLinear:
            return Cs;
        case this.InterpolantFactoryMethodSmooth:
            return Ro
        }
    }
    getValueSize() {
        return this.values.length / this.times.length
    }
    shift(e) {
        if (e !== 0) {
            let t = this.times;
            for (let n = 0, s = t.length; n !== s; ++n)
                t[n] += e
        }
        return this
    }
    scale(e) {
        if (e !== 1) {
            let t = this.times;
            for (let n = 0, s = t.length; n !== s; ++n)
                t[n] *= e
        }
        return this
    }
    trim(e, t) {
        let n = this.times
          , s = n.length
          , r = 0
          , a = s - 1;
        for (; r !== s && n[r] < e; )
            ++r;
        for (; a !== -1 && n[a] > t; )
            --a;
        if (++a,
        r !== 0 || a !== s) {
            r >= a && (a = Math.max(a, 1),
            r = a - 1);
            let o = this.getValueSize();
            this.times = n.slice(r, a),
            this.values = this.values.slice(r * o, a * o)
        }
        return this
    }
    validate() {
        let e = !0
          , t = this.getValueSize();
        t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
        e = !1);
        let n = this.times
          , s = this.values
          , r = n.length;
        r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this),
        e = !1);
        let a = null;
        for (let o = 0; o !== r; o++) {
            let c = n[o];
            if (typeof c == "number" && isNaN(c)) {
                console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, c),
                e = !1;
                break
            }
            if (a !== null && a > c) {
                console.error("THREE.KeyframeTrack: Out of order keys.", this, o, c, a),
                e = !1;
                break
            }
            a = c
        }
        if (s !== void 0 && G_(s))
            for (let o = 0, c = s.length; o !== c; ++o) {
                let l = s[o];
                if (isNaN(l)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l),
                    e = !1;
                    break
                }
            }
        return e
    }
    optimize() {
        let e = this.times.slice()
          , t = this.values.slice()
          , n = this.getValueSize()
          , s = this.getInterpolation() === Ro
          , r = e.length - 1
          , a = 1;
        for (let o = 1; o < r; ++o) {
            let c = !1
              , l = e[o]
              , h = e[o + 1];
            if (l !== h && (o !== 1 || l !== e[0]))
                if (s)
                    c = !0;
                else {
                    let u = o * n
                      , f = u - n
                      , d = u + n;
                    for (let m = 0; m !== n; ++m) {
                        let b = t[u + m];
                        if (b !== t[f + m] || b !== t[d + m]) {
                            c = !0;
                            break
                        }
                    }
                }
            if (c) {
                if (o !== a) {
                    e[a] = e[o];
                    let u = o * n
                      , f = a * n;
                    for (let d = 0; d !== n; ++d)
                        t[f + d] = t[u + d]
                }
                ++a
            }
        }
        if (r > 0) {
            e[a] = e[r];
            for (let o = r * n, c = a * n, l = 0; l !== n; ++l)
                t[c + l] = t[o + l];
            ++a
        }
        return a !== e.length ? (this.times = e.slice(0, a),
        this.values = t.slice(0, a * n)) : (this.times = e,
        this.values = t),
        this
    }
    clone() {
        let e = this.times.slice()
          , t = this.values.slice()
          , n = this.constructor
          , s = new n(this.name,e,t);
        return s.createInterpolant = this.createInterpolant,
        s
    }
}
;
_n.prototype.TimeBufferType = Float32Array;
_n.prototype.ValueBufferType = Float32Array;
_n.prototype.DefaultInterpolation = Cs;
var Ei = class extends _n {
    constructor(e, t, n) {
        super(e, t, n)
    }
}
;
Ei.prototype.ValueTypeName = "bool";
Ei.prototype.ValueBufferType = Array;
Ei.prototype.DefaultInterpolation = Rs;
Ei.prototype.InterpolantFactoryMethodLinear = void 0;
Ei.prototype.InterpolantFactoryMethodSmooth = void 0;
var Xa = class extends _n {
}
;
Xa.prototype.ValueTypeName = "color";
var $n = class extends _n {
}
;
$n.prototype.ValueTypeName = "number";
var vl = class extends wi {
    constructor(e, t, n, s) {
        super(e, t, n, s)
    }
    interpolate_(e, t, n, s) {
        let r = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , c = (n - t) / (s - t)
          , l = e * o;
        for (let h = l + o; l !== h; l += 4)
            wt.slerpFlat(r, 0, a, l - o, a, l, c);
        return r
    }
}
  , ei = class extends _n {
    InterpolantFactoryMethodLinear(e) {
        return new vl(this.times,this.values,this.getValueSize(),e)
    }
}
;
ei.prototype.ValueTypeName = "quaternion";
ei.prototype.InterpolantFactoryMethodSmooth = void 0;
var Ti = class extends _n {
    constructor(e, t, n) {
        super(e, t, n)
    }
}
;
Ti.prototype.ValueTypeName = "string";
Ti.prototype.ValueBufferType = Array;
Ti.prototype.DefaultInterpolation = Rs;
Ti.prototype.InterpolantFactoryMethodLinear = void 0;
Ti.prototype.InterpolantFactoryMethodSmooth = void 0;
var ti = class extends _n {
}
;
ti.prototype.ValueTypeName = "vector";
var qa = class {
    constructor(e="", t=-1, n=[], s=lp) {
        this.name = e,
        this.tracks = n,
        this.duration = t,
        this.blendMode = s,
        this.uuid = Cn(),
        this.duration < 0 && this.resetDuration()
    }
    static parse(e) {
        let t = []
          , n = e.tracks
          , s = 1 / (e.fps || 1);
        for (let a = 0, o = n.length; a !== o; ++a)
            t.push(q_(n[a]).scale(s));
        let r = new this(e.name,e.duration,t,e.blendMode);
        return r.uuid = e.uuid,
        r
    }
    static toJSON(e) {
        let t = []
          , n = e.tracks
          , s = {
            name: e.name,
            duration: e.duration,
            tracks: t,
            uuid: e.uuid,
            blendMode: e.blendMode
        };
        for (let r = 0, a = n.length; r !== a; ++r)
            t.push(_n.toJSON(n[r]));
        return s
    }
    static CreateFromMorphTargetSequence(e, t, n, s) {
        let r = t.length
          , a = [];
        for (let o = 0; o < r; o++) {
            let c = []
              , l = [];
            c.push((o + r - 1) % r, o, (o + 1) % r),
            l.push(0, 1, 0);
            let h = W_(c);
            c = Md(c, 1, h),
            l = Md(l, 1, h),
            !s && c[0] === 0 && (c.push(r),
            l.push(l[0])),
            a.push(new $n(".morphTargetInfluences[" + t[o].name + "]",c,l).scale(1 / n))
        }
        return new this(e,-1,a)
    }
    static findByName(e, t) {
        let n = e;
        if (!Array.isArray(e)) {
            let s = e;
            n = s.geometry && s.geometry.animations || s.animations
        }
        for (let s = 0; s < n.length; s++)
            if (n[s].name === t)
                return n[s];
        return null
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
        let s = {}
          , r = /^([\w-]*?)([\d]+)$/;
        for (let o = 0, c = e.length; o < c; o++) {
            let l = e[o]
              , h = l.name.match(r);
            if (h && h.length > 1) {
                let u = h[1]
                  , f = s[u];
                f || (s[u] = f = []),
                f.push(l)
            }
        }
        let a = [];
        for (let o in s)
            a.push(this.CreateFromMorphTargetSequence(o, s[o], t, n));
        return a
    }
    static parseAnimation(e, t) {
        if (!e)
            return console.error("THREE.AnimationClip: No animation in JSONLoader data."),
            null;
        let n = function(u, f, d, m, b) {
            if (d.length !== 0) {
                let g = []
                  , p = [];
                Zd(d, g, p, m),
                g.length !== 0 && b.push(new u(f,g,p))
            }
        }
          , s = []
          , r = e.name || "default"
          , a = e.fps || 30
          , o = e.blendMode
          , c = e.length || -1
          , l = e.hierarchy || [];
        for (let u = 0; u < l.length; u++) {
            let f = l[u].keys;
            if (!(!f || f.length === 0))
                if (f[0].morphTargets) {
                    let d = {}, m;
                    for (m = 0; m < f.length; m++)
                        if (f[m].morphTargets)
                            for (let b = 0; b < f[m].morphTargets.length; b++)
                                d[f[m].morphTargets[b]] = -1;
                    for (let b in d) {
                        let g = []
                          , p = [];
                        for (let x = 0; x !== f[m].morphTargets.length; ++x) {
                            let v = f[m];
                            g.push(v.time),
                            p.push(v.morphTarget === b ? 1 : 0)
                        }
                        s.push(new $n(".morphTargetInfluence[" + b + "]",g,p))
                    }
                    c = d.length * a
                } else {
                    let d = ".bones[" + t[u].name + "]";
                    n(ti, d + ".position", f, "pos", s),
                    n(ei, d + ".quaternion", f, "rot", s),
                    n(ti, d + ".scale", f, "scl", s)
                }
        }
        return s.length === 0 ? null : new this(r,c,s,o)
    }
    resetDuration() {
        let e = this.tracks
          , t = 0;
        for (let n = 0, s = e.length; n !== s; ++n) {
            let r = this.tracks[n];
            t = Math.max(t, r.times[r.times.length - 1])
        }
        return this.duration = t,
        this
    }
    trim() {
        for (let e = 0; e < this.tracks.length; e++)
            this.tracks[e].trim(0, this.duration);
        return this
    }
    validate() {
        let e = !0;
        for (let t = 0; t < this.tracks.length; t++)
            e = e && this.tracks[t].validate();
        return e
    }
    optimize() {
        for (let e = 0; e < this.tracks.length; e++)
            this.tracks[e].optimize();
        return this
    }
    clone() {
        let e = [];
        for (let t = 0; t < this.tracks.length; t++)
            e.push(this.tracks[t].clone());
        return new this.constructor(this.name,this.duration,e,this.blendMode)
    }
    toJSON() {
        return this.constructor.toJSON(this)
    }
}
;
function X_(i) {
    switch (i.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
        return $n;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
        return ti;
    case "color":
        return Xa;
    case "quaternion":
        return ei;
    case "bool":
    case "boolean":
        return Ei;
    case "string":
        return Ti
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + i)
}
function q_(i) {
    if (i.type === void 0)
        throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    let e = X_(i.type);
    if (i.times === void 0) {
        let t = []
          , n = [];
        Zd(i.keys, t, n, "value"),
        i.times = t,
        i.values = n
    }
    return e.parse !== void 0 ? e.parse(i) : new e(i.name,i.times,i.values,i.interpolation)
}
var bi = {
    enabled: !1,
    files: {},
    add: function(i, e) {
        this.enabled !== !1 && (this.files[i] = e)
    },
    get: function(i) {
        if (this.enabled !== !1)
            return this.files[i]
    },
    remove: function(i) {
        delete this.files[i]
    },
    clear: function() {
        this.files = {}
    }
}
  , yl = class {
    constructor(e, t, n) {
        let s = this, r = !1, a = 0, o = 0, c, l = [];
        this.onStart = void 0,
        this.onLoad = e,
        this.onProgress = t,
        this.onError = n,
        this.itemStart = function(h) {
            o++,
            r === !1 && s.onStart !== void 0 && s.onStart(h, a, o),
            r = !0
        }
        ,
        this.itemEnd = function(h) {
            a++,
            s.onProgress !== void 0 && s.onProgress(h, a, o),
            a === o && (r = !1,
            s.onLoad !== void 0 && s.onLoad())
        }
        ,
        this.itemError = function(h) {
            s.onError !== void 0 && s.onError(h)
        }
        ,
        this.resolveURL = function(h) {
            return c ? c(h) : h
        }
        ,
        this.setURLModifier = function(h) {
            return c = h,
            this
        }
        ,
        this.addHandler = function(h, u) {
            return l.push(h, u),
            this
        }
        ,
        this.removeHandler = function(h) {
            let u = l.indexOf(h);
            return u !== -1 && l.splice(u, 2),
            this
        }
        ,
        this.getHandler = function(h) {
            for (let u = 0, f = l.length; u < f; u += 2) {
                let d = l[u]
                  , m = l[u + 1];
                if (d.global && (d.lastIndex = 0),
                d.test(h))
                    return m
            }
            return null
        }
    }
}
  , j_ = new yl
  , ni = class {
    constructor(e) {
        this.manager = e !== void 0 ? e : j_,
        this.crossOrigin = "anonymous",
        this.withCredentials = !1,
        this.path = "",
        this.resourcePath = "",
        this.requestHeader = {}
    }
    load() {}
    loadAsync(e, t) {
        let n = this;
        return new Promise(function(s, r) {
            n.load(e, s, t, r)
        }
        )
    }
    parse() {}
    setCrossOrigin(e) {
        return this.crossOrigin = e,
        this
    }
    setWithCredentials(e) {
        return this.withCredentials = e,
        this
    }
    setPath(e) {
        return this.path = e,
        this
    }
    setResourcePath(e) {
        return this.resourcePath = e,
        this
    }
    setRequestHeader(e) {
        return this.requestHeader = e,
        this
    }
}
;
ni.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var Xn = {}
  , Ml = class extends Error {
    constructor(e, t) {
        super(e),
        this.response = t
    }
}
  , Tr = class extends ni {
    constructor(e) {
        super(e)
    }
    load(e, t, n, s) {
        e === void 0 && (e = ""),
        this.path !== void 0 && (e = this.path + e),
        e = this.manager.resolveURL(e);
        let r = bi.get(e);
        if (r !== void 0)
            return this.manager.itemStart(e),
            setTimeout( () => {
                t && t(r),
                this.manager.itemEnd(e)
            }
            , 0),
            r;
        if (Xn[e] !== void 0) {
            Xn[e].push({
                onLoad: t,
                onProgress: n,
                onError: s
            });
            return
        }
        Xn[e] = [],
        Xn[e].push({
            onLoad: t,
            onProgress: n,
            onError: s
        });
        let a = new Request(e,{
            headers: new Headers(this.requestHeader),
            credentials: this.withCredentials ? "include" : "same-origin"
        })
          , o = this.mimeType
          , c = this.responseType;
        fetch(a).then(l => {
            if (l.status === 200 || l.status === 0) {
                if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."),
                typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
                    return l;
                let h = Xn[e]
                  , u = l.body.getReader()
                  , f = l.headers.get("X-File-Size") || l.headers.get("Content-Length")
                  , d = f ? parseInt(f) : 0
                  , m = d !== 0
                  , b = 0
                  , g = new ReadableStream({
                    start(p) {
                        x();
                        function x() {
                            u.read().then( ({done: v, value: _}) => {
                                if (v)
                                    p.close();
                                else {
                                    b += _.byteLength;
                                    let P = new ProgressEvent("progress",{
                                        lengthComputable: m,
                                        loaded: b,
                                        total: d
                                    });
                                    for (let E = 0, R = h.length; E < R; E++) {
                                        let L = h[E];
                                        L.onProgress && L.onProgress(P)
                                    }
                                    p.enqueue(_),
                                    x()
                                }
                            }
                            , v => {
                                p.error(v)
                            }
                            )
                        }
                    }
                });
                return new Response(g)
            } else
                throw new Ml(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)
        }
        ).then(l => {
            switch (c) {
            case "arraybuffer":
                return l.arrayBuffer();
            case "blob":
                return l.blob();
            case "document":
                return l.text().then(h => new DOMParser().parseFromString(h, o));
            case "json":
                return l.json();
            default:
                if (o === void 0)
                    return l.text();
                {
                    let u = /charset="?([^;"\s]*)"?/i.exec(o)
                      , f = u && u[1] ? u[1].toLowerCase() : void 0
                      , d = new TextDecoder(f);
                    return l.arrayBuffer().then(m => d.decode(m))
                }
            }
        }
        ).then(l => {
            bi.add(e, l);
            let h = Xn[e];
            delete Xn[e];
            for (let u = 0, f = h.length; u < f; u++) {
                let d = h[u];
                d.onLoad && d.onLoad(l)
            }
        }
        ).catch(l => {
            let h = Xn[e];
            if (h === void 0)
                throw this.manager.itemError(e),
                l;
            delete Xn[e];
            for (let u = 0, f = h.length; u < f; u++) {
                let d = h[u];
                d.onError && d.onError(l)
            }
            this.manager.itemError(e)
        }
        ).finally( () => {
            this.manager.itemEnd(e)
        }
        ),
        this.manager.itemStart(e)
    }
    setResponseType(e) {
        return this.responseType = e,
        this
    }
    setMimeType(e) {
        return this.mimeType = e,
        this
    }
}
;
var Sl = class extends ni {
    constructor(e) {
        super(e)
    }
    load(e, t, n, s) {
        this.path !== void 0 && (e = this.path + e),
        e = this.manager.resolveURL(e);
        let r = this
          , a = bi.get(e);
        if (a !== void 0)
            return r.manager.itemStart(e),
            setTimeout(function() {
                t && t(a),
                r.manager.itemEnd(e)
            }, 0),
            a;
        let o = br("img");
        function c() {
            h(),
            bi.add(e, this),
            t && t(this),
            r.manager.itemEnd(e)
        }
        function l(u) {
            h(),
            s && s(u),
            r.manager.itemError(e),
            r.manager.itemEnd(e)
        }
        function h() {
            o.removeEventListener("load", c, !1),
            o.removeEventListener("error", l, !1)
        }
        return o.addEventListener("load", c, !1),
        o.addEventListener("error", l, !1),
        e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin),
        r.manager.itemStart(e),
        o.src = e,
        o
    }
}
;
var ja = class extends ni {
    constructor(e) {
        super(e)
    }
    load(e, t, n, s) {
        let r = new Nt
          , a = new Sl(this.manager);
        return a.setCrossOrigin(this.crossOrigin),
        a.setPath(this.path),
        a.load(e, function(o) {
            r.image = o,
            r.needsUpdate = !0,
            t !== void 0 && t(r)
        }, n, s),
        r
    }
}
  , ks = class extends vt {
    constructor(e, t=1) {
        super(),
        this.isLight = !0,
        this.type = "Light",
        this.color = new ue(e),
        this.intensity = t
    }
    dispose() {}
    copy(e, t) {
        return super.copy(e, t),
        this.color.copy(e.color),
        this.intensity = e.intensity,
        this
    }
    toJSON(e) {
        let t = super.toJSON(e);
        return t.object.color = this.color.getHex(),
        t.object.intensity = this.intensity,
        this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()),
        this.distance !== void 0 && (t.object.distance = this.distance),
        this.angle !== void 0 && (t.object.angle = this.angle),
        this.decay !== void 0 && (t.object.decay = this.decay),
        this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
        this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
        this.target !== void 0 && (t.object.target = this.target.uuid),
        t
    }
}
  , Ya = class extends ks {
    constructor(e, t, n) {
        super(e, n),
        this.isHemisphereLight = !0,
        this.type = "HemisphereLight",
        this.position.copy(vt.DEFAULT_UP),
        this.updateMatrix(),
        this.groundColor = new ue(t)
    }
    copy(e, t) {
        return super.copy(e, t),
        this.groundColor.copy(e.groundColor),
        this
    }
}
  , oc = new Le
  , Sd = new C
  , wd = new C
  , Ar = class {
    constructor(e) {
        this.camera = e,
        this.intensity = 1,
        this.bias = 0,
        this.normalBias = 0,
        this.radius = 1,
        this.blurSamples = 8,
        this.mapSize = new ne(512,512),
        this.map = null,
        this.mapPass = null,
        this.matrix = new Le,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this._frustum = new _r,
        this._frameExtents = new ne(1,1),
        this._viewportCount = 1,
        this._viewports = [new Je(0,0,1,1)]
    }
    getViewportCount() {
        return this._viewportCount
    }
    getFrustum() {
        return this._frustum
    }
    updateMatrices(e) {
        let t = this.camera
          , n = this.matrix;
        Sd.setFromMatrixPosition(e.matrixWorld),
        t.position.copy(Sd),
        wd.setFromMatrixPosition(e.target.matrixWorld),
        t.lookAt(wd),
        t.updateMatrixWorld(),
        oc.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(oc),
        n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
        n.multiply(oc)
    }
    getViewport(e) {
        return this._viewports[e]
    }
    getFrameExtents() {
        return this._frameExtents
    }
    dispose() {
        this.map && this.map.dispose(),
        this.mapPass && this.mapPass.dispose()
    }
    copy(e) {
        return this.camera = e.camera.clone(),
        this.intensity = e.intensity,
        this.bias = e.bias,
        this.radius = e.radius,
        this.mapSize.copy(e.mapSize),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    toJSON() {
        let e = {};
        return this.intensity !== 1 && (e.intensity = this.intensity),
        this.bias !== 0 && (e.bias = this.bias),
        this.normalBias !== 0 && (e.normalBias = this.normalBias),
        this.radius !== 1 && (e.radius = this.radius),
        (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()),
        e.camera = this.camera.toJSON(!1).object,
        delete e.camera.matrix,
        e
    }
}
  , wl = class extends Ar {
    constructor() {
        super(new Rt(50,1,.5,500)),
        this.isSpotLightShadow = !0,
        this.focus = 1
    }
    updateMatrices(e) {
        let t = this.camera
          , n = Ps * 2 * e.angle * this.focus
          , s = this.mapSize.width / this.mapSize.height
          , r = e.distance || t.far;
        (n !== t.fov || s !== t.aspect || r !== t.far) && (t.fov = n,
        t.aspect = s,
        t.far = r,
        t.updateProjectionMatrix()),
        super.updateMatrices(e)
    }
    copy(e) {
        return super.copy(e),
        this.focus = e.focus,
        this
    }
}
  , Yi = class extends ks {
    constructor(e, t, n=0, s=Math.PI / 3, r=0, a=2) {
        super(e, t),
        this.isSpotLight = !0,
        this.type = "SpotLight",
        this.position.copy(vt.DEFAULT_UP),
        this.updateMatrix(),
        this.target = new vt,
        this.distance = n,
        this.angle = s,
        this.penumbra = r,
        this.decay = a,
        this.map = null,
        this.shadow = new wl
    }
    get power() {
        return this.intensity * Math.PI
    }
    set power(e) {
        this.intensity = e / Math.PI
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.distance = e.distance,
        this.angle = e.angle,
        this.penumbra = e.penumbra,
        this.decay = e.decay,
        this.target = e.target.clone(),
        this.shadow = e.shadow.clone(),
        this
    }
}
  , Ed = new Le
  , ar = new C
  , cc = new C
  , El = class extends Ar {
    constructor() {
        super(new Rt(90,1,.5,500)),
        this.isPointLightShadow = !0,
        this._frameExtents = new ne(4,2),
        this._viewportCount = 6,
        this._viewports = [new Je(2,1,1,1), new Je(0,1,1,1), new Je(3,1,1,1), new Je(1,1,1,1), new Je(3,0,1,1), new Je(1,0,1,1)],
        this._cubeDirections = [new C(1,0,0), new C(-1,0,0), new C(0,0,1), new C(0,0,-1), new C(0,1,0), new C(0,-1,0)],
        this._cubeUps = [new C(0,1,0), new C(0,1,0), new C(0,1,0), new C(0,1,0), new C(0,0,1), new C(0,0,-1)]
    }
    updateMatrices(e, t=0) {
        let n = this.camera
          , s = this.matrix
          , r = e.distance || n.far;
        r !== n.far && (n.far = r,
        n.updateProjectionMatrix()),
        ar.setFromMatrixPosition(e.matrixWorld),
        n.position.copy(ar),
        cc.copy(n.position),
        cc.add(this._cubeDirections[t]),
        n.up.copy(this._cubeUps[t]),
        n.lookAt(cc),
        n.updateMatrixWorld(),
        s.makeTranslation(-ar.x, -ar.y, -ar.z),
        Ed.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Ed)
    }
}
  , zs = class extends ks {
    constructor(e, t, n=0, s=2) {
        super(e, t),
        this.isPointLight = !0,
        this.type = "PointLight",
        this.distance = n,
        this.decay = s,
        this.shadow = new El
    }
    get power() {
        return this.intensity * 4 * Math.PI
    }
    set power(e) {
        this.intensity = e / (4 * Math.PI)
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.distance = e.distance,
        this.decay = e.decay,
        this.shadow = e.shadow.clone(),
        this
    }
}
  , Tl = class extends Ar {
    constructor() {
        super(new Mi(-5,5,5,-5,.5,500)),
        this.isDirectionalLightShadow = !0
    }
}
  , Ka = class extends ks {
    constructor(e, t) {
        super(e, t),
        this.isDirectionalLight = !0,
        this.type = "DirectionalLight",
        this.position.copy(vt.DEFAULT_UP),
        this.updateMatrix(),
        this.target = new vt,
        this.shadow = new Tl
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e),
        this.target = e.target.clone(),
        this.shadow = e.shadow.clone(),
        this
    }
}
;
var Ai = class {
    static decodeText(e) {
        if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),
        typeof TextDecoder < "u")
            return new TextDecoder().decode(e);
        let t = "";
        for (let n = 0, s = e.length; n < s; n++)
            t += String.fromCharCode(e[n]);
        try {
            return decodeURIComponent(escape(t))
        } catch {
            return t
        }
    }
    static extractUrlBase(e) {
        let t = e.lastIndexOf("/");
        return t === -1 ? "./" : e.slice(0, t + 1)
    }
    static resolveURL(e, t) {
        return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e)
    }
}
;
var Za = class extends ni {
    constructor(e) {
        super(e),
        this.isImageBitmapLoader = !0,
        typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),
        typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
        this.options = {
            premultiplyAlpha: "none"
        }
    }
    setOptions(e) {
        return this.options = e,
        this
    }
    load(e, t, n, s) {
        e === void 0 && (e = ""),
        this.path !== void 0 && (e = this.path + e),
        e = this.manager.resolveURL(e);
        let r = this
          , a = bi.get(e);
        if (a !== void 0) {
            if (r.manager.itemStart(e),
            a.then) {
                a.then(l => {
                    t && t(l),
                    r.manager.itemEnd(e)
                }
                ).catch(l => {
                    s && s(l)
                }
                );
                return
            }
            return setTimeout(function() {
                t && t(a),
                r.manager.itemEnd(e)
            }, 0),
            a
        }
        let o = {};
        o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include",
        o.headers = this.requestHeader;
        let c = fetch(e, o).then(function(l) {
            return l.blob()
        }).then(function(l) {
            return createImageBitmap(l, Object.assign(r.options, {
                colorSpaceConversion: "none"
            }))
        }).then(function(l) {
            return bi.add(e, l),
            t && t(l),
            r.manager.itemEnd(e),
            l
        }).catch(function(l) {
            s && s(l),
            bi.remove(e),
            r.manager.itemError(e),
            r.manager.itemEnd(e)
        });
        bi.add(e, c),
        r.manager.itemStart(e)
    }
}
;
var Hs = class {
    constructor(e=!0) {
        this.autoStart = e,
        this.startTime = 0,
        this.oldTime = 0,
        this.elapsedTime = 0,
        this.running = !1
    }
    start() {
        this.startTime = Td(),
        this.oldTime = this.startTime,
        this.elapsedTime = 0,
        this.running = !0
    }
    stop() {
        this.getElapsedTime(),
        this.running = !1,
        this.autoStart = !1
    }
    getElapsedTime() {
        return this.getDelta(),
        this.elapsedTime
    }
    getDelta() {
        let e = 0;
        if (this.autoStart && !this.running)
            return this.start(),
            0;
        if (this.running) {
            let t = Td();
            e = (t - this.oldTime) / 1e3,
            this.oldTime = t,
            this.elapsedTime += e
        }
        return e
    }
}
;
function Td() {
    return performance.now()
}
var Xl = "\\[\\]\\.:\\/"
  , Y_ = new RegExp("[" + Xl + "]","g")
  , ql = "[^" + Xl + "]"
  , K_ = "[^" + Xl.replace("\\.", "") + "]"
  , Z_ = /((?:WC+[\/:])*)/.source.replace("WC", ql)
  , J_ = /(WCOD+)?/.source.replace("WCOD", K_)
  , Q_ = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ql)
  , $_ = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ql)
  , ex = new RegExp("^" + Z_ + J_ + Q_ + $_ + "$")
  , tx = ["material", "materials", "bones", "map"]
  , Al = class {
    constructor(e, t, n) {
        let s = n || ht.parseTrackName(t);
        this._targetGroup = e,
        this._bindings = e.subscribe_(t, s)
    }
    getValue(e, t) {
        this.bind();
        let n = this._targetGroup.nCachedObjects_
          , s = this._bindings[n];
        s !== void 0 && s.getValue(e, t)
    }
    setValue(e, t) {
        let n = this._bindings;
        for (let s = this._targetGroup.nCachedObjects_, r = n.length; s !== r; ++s)
            n[s].setValue(e, t)
    }
    bind() {
        let e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
            e[t].bind()
    }
    unbind() {
        let e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
            e[t].unbind()
    }
}
  , ht = class i {
    constructor(e, t, n) {
        this.path = t,
        this.parsedPath = n || i.parseTrackName(t),
        this.node = i.findNode(e, this.parsedPath.nodeName),
        this.rootNode = e,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
    static create(e, t, n) {
        return e && e.isAnimationObjectGroup ? new i.Composite(e,t,n) : new i(e,t,n)
    }
    static sanitizeNodeName(e) {
        return e.replace(/\s/g, "_").replace(Y_, "")
    }
    static parseTrackName(e) {
        let t = ex.exec(e);
        if (t === null)
            throw new Error("PropertyBinding: Cannot parse trackName: " + e);
        let n = {
            nodeName: t[2],
            objectName: t[3],
            objectIndex: t[4],
            propertyName: t[5],
            propertyIndex: t[6]
        }
          , s = n.nodeName && n.nodeName.lastIndexOf(".");
        if (s !== void 0 && s !== -1) {
            let r = n.nodeName.substring(s + 1);
            tx.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, s),
            n.objectName = r)
        }
        if (n.propertyName === null || n.propertyName.length === 0)
            throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
        return n
    }
    static findNode(e, t) {
        if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
            return e;
        if (e.skeleton) {
            let n = e.skeleton.getBoneByName(t);
            if (n !== void 0)
                return n
        }
        if (e.children) {
            let n = function(r) {
                for (let a = 0; a < r.length; a++) {
                    let o = r[a];
                    if (o.name === t || o.uuid === t)
                        return o;
                    let c = n(o.children);
                    if (c)
                        return c
                }
                return null
            }
              , s = n(e.children);
            if (s)
                return s
        }
        return null
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
        e[t] = this.targetObject[this.propertyName]
    }
    _getValue_array(e, t) {
        let n = this.resolvedProperty;
        for (let s = 0, r = n.length; s !== r; ++s)
            e[t++] = n[s]
    }
    _getValue_arrayElement(e, t) {
        e[t] = this.resolvedProperty[this.propertyIndex]
    }
    _getValue_toArray(e, t) {
        this.resolvedProperty.toArray(e, t)
    }
    _setValue_direct(e, t) {
        this.targetObject[this.propertyName] = e[t]
    }
    _setValue_direct_setNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t],
        this.targetObject.needsUpdate = !0
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_array(e, t) {
        let n = this.resolvedProperty;
        for (let s = 0, r = n.length; s !== r; ++s)
            n[s] = e[t++]
    }
    _setValue_array_setNeedsUpdate(e, t) {
        let n = this.resolvedProperty;
        for (let s = 0, r = n.length; s !== r; ++s)
            n[s] = e[t++];
        this.targetObject.needsUpdate = !0
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
        let n = this.resolvedProperty;
        for (let s = 0, r = n.length; s !== r; ++s)
            n[s] = e[t++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_arrayElement(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t]
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.needsUpdate = !0
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_fromArray(e, t) {
        this.resolvedProperty.fromArray(e, t)
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.needsUpdate = !0
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _getValue_unbound(e, t) {
        this.bind(),
        this.getValue(e, t)
    }
    _setValue_unbound(e, t) {
        this.bind(),
        this.setValue(e, t)
    }
    bind() {
        let e = this.node
          , t = this.parsedPath
          , n = t.objectName
          , s = t.propertyName
          , r = t.propertyIndex;
        if (e || (e = i.findNode(this.rootNode, t.nodeName),
        this.node = e),
        this.getValue = this._getValue_unavailable,
        this.setValue = this._setValue_unavailable,
        !e) {
            console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
            return
        }
        if (n) {
            let l = t.objectIndex;
            switch (n) {
            case "materials":
                if (!e.material) {
                    console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                    return
                }
                if (!e.material.materials) {
                    console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                    return
                }
                e = e.material.materials;
                break;
            case "bones":
                if (!e.skeleton) {
                    console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                    return
                }
                e = e.skeleton.bones;
                for (let h = 0; h < e.length; h++)
                    if (e[h].name === l) {
                        l = h;
                        break
                    }
                break;
            case "map":
                if ("map" in e) {
                    e = e.map;
                    break
                }
                if (!e.material) {
                    console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                    return
                }
                if (!e.material.map) {
                    console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                    return
                }
                e = e.material.map;
                break;
            default:
                if (e[n] === void 0) {
                    console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                    return
                }
                e = e[n]
            }
            if (l !== void 0) {
                if (e[l] === void 0) {
                    console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                    return
                }
                e = e[l]
            }
        }
        let a = e[s];
        if (a === void 0) {
            let l = t.nodeName;
            console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + s + " but it wasn't found.", e);
            return
        }
        let o = this.Versioning.None;
        this.targetObject = e,
        e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
        let c = this.BindingType.Direct;
        if (r !== void 0) {
            if (s === "morphTargetInfluences") {
                if (!e.geometry) {
                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    return
                }
                if (!e.geometry.morphAttributes) {
                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                    return
                }
                e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r])
            }
            c = this.BindingType.ArrayElement,
            this.resolvedProperty = a,
            this.propertyIndex = r
        } else
            a.fromArray !== void 0 && a.toArray !== void 0 ? (c = this.BindingType.HasFromToArray,
            this.resolvedProperty = a) : Array.isArray(a) ? (c = this.BindingType.EntireArray,
            this.resolvedProperty = a) : this.propertyName = s;
        this.getValue = this.GetterByBindingType[c],
        this.setValue = this.SetterByBindingTypeAndVersioning[c][o]
    }
    unbind() {
        this.node = null,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
}
;
ht.Composite = Al;
ht.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
};
ht.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
};
ht.prototype.GetterByBindingType = [ht.prototype._getValue_direct, ht.prototype._getValue_array, ht.prototype._getValue_arrayElement, ht.prototype._getValue_toArray];
ht.prototype.SetterByBindingTypeAndVersioning = [[ht.prototype._setValue_direct, ht.prototype._setValue_direct_setNeedsUpdate, ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [ht.prototype._setValue_array, ht.prototype._setValue_array_setNeedsUpdate, ht.prototype._setValue_array_setMatrixWorldNeedsUpdate], [ht.prototype._setValue_arrayElement, ht.prototype._setValue_arrayElement_setNeedsUpdate, ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [ht.prototype._setValue_fromArray, ht.prototype._setValue_fromArray_setNeedsUpdate, ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
var gv = new Float32Array(1);
var Rr = class {
    constructor(e=1, t=0, n=0) {
        return this.radius = e,
        this.phi = t,
        this.theta = n,
        this
    }
    set(e, t, n) {
        return this.radius = e,
        this.phi = t,
        this.theta = n,
        this
    }
    copy(e) {
        return this.radius = e.radius,
        this.phi = e.phi,
        this.theta = e.theta,
        this
    }
    makeSafe() {
        return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)),
        this
    }
    setFromVector3(e) {
        return this.setFromCartesianCoords(e.x, e.y, e.z)
    }
    setFromCartesianCoords(e, t, n) {
        return this.radius = Math.sqrt(e * e + t * t + n * n),
        this.radius === 0 ? (this.theta = 0,
        this.phi = 0) : (this.theta = Math.atan2(e, n),
        this.phi = Math.acos(Tt(t / this.radius, -1, 1))),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
;
var Ja = class extends Qn {
    constructor(e, t=null) {
        super(),
        this.object = e,
        this.domElement = t,
        this.enabled = !0,
        this.state = -1,
        this.keys = {},
        this.mouseButtons = {
            LEFT: null,
            MIDDLE: null,
            RIGHT: null
        },
        this.touches = {
            ONE: null,
            TWO: null
        }
    }
    connect() {}
    disconnect() {}
    dispose() {}
    update() {}
}
;
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
    detail: {
        revision: "170"
    }
}));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "170");
var Jd = {
    type: "change"
}
  , Yl = {
    type: "start"
}
  , $d = {
    type: "end"
}
  , no = new vi
  , Qd = new Tn
  , ix = Math.cos(70 * Jt.DEG2RAD)
  , Dt = new C
  , Qt = 2 * Math.PI
  , rt = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6
}
  , jl = 1e-6
  , io = class extends Ja {
    constructor(e, t=null) {
        super(e, t),
        this.state = rt.NONE,
        this.enabled = !0,
        this.target = new C,
        this.cursor = new C,
        this.minDistance = 0,
        this.maxDistance = 1 / 0,
        this.minZoom = 0,
        this.maxZoom = 1 / 0,
        this.minTargetRadius = 0,
        this.maxTargetRadius = 1 / 0,
        this.minPolarAngle = 0,
        this.maxPolarAngle = Math.PI,
        this.minAzimuthAngle = -1 / 0,
        this.maxAzimuthAngle = 1 / 0,
        this.enableDamping = !1,
        this.dampingFactor = .05,
        this.enableZoom = !0,
        this.zoomSpeed = 1,
        this.enableRotate = !0,
        this.rotateSpeed = 1,
        this.enablePan = !0,
        this.panSpeed = 1,
        this.screenSpacePanning = !0,
        this.keyPanSpeed = 7,
        this.zoomToCursor = !1,
        this.autoRotate = !1,
        this.autoRotateSpeed = 2,
        this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        },
        this.mouseButtons = {
            LEFT: Ki.ROTATE,
            MIDDLE: Ki.DOLLY,
            RIGHT: Ki.PAN
        },
        this.touches = {
            ONE: Zi.ROTATE,
            TWO: Zi.DOLLY_PAN
        },
        this.target0 = this.target.clone(),
        this.position0 = this.object.position.clone(),
        this.zoom0 = this.object.zoom,
        this._domElementKeyEvents = null,
        this._lastPosition = new C,
        this._lastQuaternion = new wt,
        this._lastTargetPosition = new C,
        this._quat = new wt().setFromUnitVectors(e.up, new C(0,1,0)),
        this._quatInverse = this._quat.clone().invert(),
        this._spherical = new Rr,
        this._sphericalDelta = new Rr,
        this._scale = 1,
        this._panOffset = new C,
        this._rotateStart = new ne,
        this._rotateEnd = new ne,
        this._rotateDelta = new ne,
        this._panStart = new ne,
        this._panEnd = new ne,
        this._panDelta = new ne,
        this._dollyStart = new ne,
        this._dollyEnd = new ne,
        this._dollyDelta = new ne,
        this._dollyDirection = new C,
        this._mouse = new ne,
        this._performCursorZoom = !1,
        this._pointers = [],
        this._pointerPositions = {},
        this._controlActive = !1,
        this._onPointerMove = rx.bind(this),
        this._onPointerDown = sx.bind(this),
        this._onPointerUp = ax.bind(this),
        this._onContextMenu = fx.bind(this),
        this._onMouseWheel = lx.bind(this),
        this._onKeyDown = hx.bind(this),
        this._onTouchStart = ux.bind(this),
        this._onTouchMove = dx.bind(this),
        this._onMouseDown = ox.bind(this),
        this._onMouseMove = cx.bind(this),
        this._interceptControlDown = px.bind(this),
        this._interceptControlUp = mx.bind(this),
        this.domElement !== null && this.connect(),
        this.update()
    }
    connect() {
        this.domElement.addEventListener("pointerdown", this._onPointerDown),
        this.domElement.addEventListener("pointercancel", this._onPointerUp),
        this.domElement.addEventListener("contextmenu", this._onContextMenu),
        this.domElement.addEventListener("wheel", this._onMouseWheel, {
            passive: !1
        }),
        this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
            passive: !0,
            capture: !0
        }),
        this.domElement.style.touchAction = "none"
    }
    disconnect() {
        this.domElement.removeEventListener("pointerdown", this._onPointerDown),
        this.domElement.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.removeEventListener("pointerup", this._onPointerUp),
        this.domElement.removeEventListener("pointercancel", this._onPointerUp),
        this.domElement.removeEventListener("wheel", this._onMouseWheel),
        this.domElement.removeEventListener("contextmenu", this._onContextMenu),
        this.stopListenToKeyEvents(),
        this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, {
            capture: !0
        }),
        this.domElement.style.touchAction = "auto"
    }
    dispose() {
        this.disconnect()
    }
    getPolarAngle() {
        return this._spherical.phi
    }
    getAzimuthalAngle() {
        return this._spherical.theta
    }
    getDistance() {
        return this.object.position.distanceTo(this.target)
    }
    listenToKeyEvents(e) {
        e.addEventListener("keydown", this._onKeyDown),
        this._domElementKeyEvents = e
    }
    stopListenToKeyEvents() {
        this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown),
        this._domElementKeyEvents = null)
    }
    saveState() {
        this.target0.copy(this.target),
        this.position0.copy(this.object.position),
        this.zoom0 = this.object.zoom
    }
    reset() {
        this.target.copy(this.target0),
        this.object.position.copy(this.position0),
        this.object.zoom = this.zoom0,
        this.object.updateProjectionMatrix(),
        this.dispatchEvent(Jd),
        this.update(),
        this.state = rt.NONE
    }
    update(e=null) {
        let t = this.object.position;
        Dt.copy(t).sub(this.target),
        Dt.applyQuaternion(this._quat),
        this._spherical.setFromVector3(Dt),
        this.autoRotate && this.state === rt.NONE && this._rotateLeft(this._getAutoRotationAngle(e)),
        this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor,
        this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta,
        this._spherical.phi += this._sphericalDelta.phi);
        let n = this.minAzimuthAngle
          , s = this.maxAzimuthAngle;
        isFinite(n) && isFinite(s) && (n < -Math.PI ? n += Qt : n > Math.PI && (n -= Qt),
        s < -Math.PI ? s += Qt : s > Math.PI && (s -= Qt),
        n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)),
        this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)),
        this._spherical.makeSafe(),
        this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset),
        this.target.sub(this.cursor),
        this.target.clampLength(this.minTargetRadius, this.maxTargetRadius),
        this.target.add(this.cursor);
        let r = !1;
        if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
            this._spherical.radius = this._clampDistance(this._spherical.radius);
        else {
            let a = this._spherical.radius;
            this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale),
            r = a != this._spherical.radius
        }
        if (Dt.setFromSpherical(this._spherical),
        Dt.applyQuaternion(this._quatInverse),
        t.copy(this.target).add(Dt),
        this.object.lookAt(this.target),
        this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor,
        this._sphericalDelta.phi *= 1 - this.dampingFactor,
        this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0),
        this._panOffset.set(0, 0, 0)),
        this.zoomToCursor && this._performCursorZoom) {
            let a = null;
            if (this.object.isPerspectiveCamera) {
                let o = Dt.length();
                a = this._clampDistance(o * this._scale);
                let c = o - a;
                this.object.position.addScaledVector(this._dollyDirection, c),
                this.object.updateMatrixWorld(),
                r = !!c
            } else if (this.object.isOrthographicCamera) {
                let o = new C(this._mouse.x,this._mouse.y,0);
                o.unproject(this.object);
                let c = this.object.zoom;
                this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)),
                this.object.updateProjectionMatrix(),
                r = c !== this.object.zoom;
                let l = new C(this._mouse.x,this._mouse.y,0);
                l.unproject(this.object),
                this.object.position.sub(l).add(o),
                this.object.updateMatrixWorld(),
                a = Dt.length()
            } else
                console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),
                this.zoomToCursor = !1;
            a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (no.origin.copy(this.object.position),
            no.direction.set(0, 0, -1).transformDirection(this.object.matrix),
            Math.abs(this.object.up.dot(no.direction)) < ix ? this.object.lookAt(this.target) : (Qd.setFromNormalAndCoplanarPoint(this.object.up, this.target),
            no.intersectPlane(Qd, this.target))))
        } else if (this.object.isOrthographicCamera) {
            let a = this.object.zoom;
            this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)),
            a !== this.object.zoom && (this.object.updateProjectionMatrix(),
            r = !0)
        }
        return this._scale = 1,
        this._performCursorZoom = !1,
        r || this._lastPosition.distanceToSquared(this.object.position) > jl || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > jl || this._lastTargetPosition.distanceToSquared(this.target) > jl ? (this.dispatchEvent(Jd),
        this._lastPosition.copy(this.object.position),
        this._lastQuaternion.copy(this.object.quaternion),
        this._lastTargetPosition.copy(this.target),
        !0) : !1
    }
    _getAutoRotationAngle(e) {
        return e !== null ? Qt / 60 * this.autoRotateSpeed * e : Qt / 60 / 60 * this.autoRotateSpeed
    }
    _getZoomScale(e) {
        let t = Math.abs(e * .01);
        return Math.pow(.95, this.zoomSpeed * t)
    }
    _rotateLeft(e) {
        this._sphericalDelta.theta -= e
    }
    _rotateUp(e) {
        this._sphericalDelta.phi -= e
    }
    _panLeft(e, t) {
        Dt.setFromMatrixColumn(t, 0),
        Dt.multiplyScalar(-e),
        this._panOffset.add(Dt)
    }
    _panUp(e, t) {
        this.screenSpacePanning === !0 ? Dt.setFromMatrixColumn(t, 1) : (Dt.setFromMatrixColumn(t, 0),
        Dt.crossVectors(this.object.up, Dt)),
        Dt.multiplyScalar(e),
        this._panOffset.add(Dt)
    }
    _pan(e, t) {
        let n = this.domElement;
        if (this.object.isPerspectiveCamera) {
            let s = this.object.position;
            Dt.copy(s).sub(this.target);
            let r = Dt.length();
            r *= Math.tan(this.object.fov / 2 * Math.PI / 180),
            this._panLeft(2 * e * r / n.clientHeight, this.object.matrix),
            this._panUp(2 * t * r / n.clientHeight, this.object.matrix)
        } else
            this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix),
            this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),
            this.enablePan = !1)
    }
    _dollyOut(e) {
        this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
        this.enableZoom = !1)
    }
    _dollyIn(e) {
        this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
        this.enableZoom = !1)
    }
    _updateZoomParameters(e, t) {
        if (!this.zoomToCursor)
            return;
        this._performCursorZoom = !0;
        let n = this.domElement.getBoundingClientRect()
          , s = e - n.left
          , r = t - n.top
          , a = n.width
          , o = n.height;
        this._mouse.x = s / a * 2 - 1,
        this._mouse.y = -(r / o) * 2 + 1,
        this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize()
    }
    _clampDistance(e) {
        return Math.max(this.minDistance, Math.min(this.maxDistance, e))
    }
    _handleMouseDownRotate(e) {
        this._rotateStart.set(e.clientX, e.clientY)
    }
    _handleMouseDownDolly(e) {
        this._updateZoomParameters(e.clientX, e.clientX),
        this._dollyStart.set(e.clientX, e.clientY)
    }
    _handleMouseDownPan(e) {
        this._panStart.set(e.clientX, e.clientY)
    }
    _handleMouseMoveRotate(e) {
        this._rotateEnd.set(e.clientX, e.clientY),
        this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
        let t = this.domElement;
        this._rotateLeft(Qt * this._rotateDelta.x / t.clientHeight),
        this._rotateUp(Qt * this._rotateDelta.y / t.clientHeight),
        this._rotateStart.copy(this._rotateEnd),
        this.update()
    }
    _handleMouseMoveDolly(e) {
        this._dollyEnd.set(e.clientX, e.clientY),
        this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart),
        this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)),
        this._dollyStart.copy(this._dollyEnd),
        this.update()
    }
    _handleMouseMovePan(e) {
        this._panEnd.set(e.clientX, e.clientY),
        this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed),
        this._pan(this._panDelta.x, this._panDelta.y),
        this._panStart.copy(this._panEnd),
        this.update()
    }
    _handleMouseWheel(e) {
        this._updateZoomParameters(e.clientX, e.clientY),
        e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)),
        this.update()
    }
    _handleKeyDown(e) {
        let t = !1;
        switch (e.code) {
        case this.keys.UP:
            e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(Qt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed),
            t = !0;
            break;
        case this.keys.BOTTOM:
            e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(-Qt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed),
            t = !0;
            break;
        case this.keys.LEFT:
            e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(Qt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0),
            t = !0;
            break;
        case this.keys.RIGHT:
            e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(-Qt * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0),
            t = !0;
            break
        }
        t && (e.preventDefault(),
        this.update())
    }
    _handleTouchStartRotate(e) {
        if (this._pointers.length === 1)
            this._rotateStart.set(e.pageX, e.pageY);
        else {
            let t = this._getSecondPointerPosition(e)
              , n = .5 * (e.pageX + t.x)
              , s = .5 * (e.pageY + t.y);
            this._rotateStart.set(n, s)
        }
    }
    _handleTouchStartPan(e) {
        if (this._pointers.length === 1)
            this._panStart.set(e.pageX, e.pageY);
        else {
            let t = this._getSecondPointerPosition(e)
              , n = .5 * (e.pageX + t.x)
              , s = .5 * (e.pageY + t.y);
            this._panStart.set(n, s)
        }
    }
    _handleTouchStartDolly(e) {
        let t = this._getSecondPointerPosition(e)
          , n = e.pageX - t.x
          , s = e.pageY - t.y
          , r = Math.sqrt(n * n + s * s);
        this._dollyStart.set(0, r)
    }
    _handleTouchStartDollyPan(e) {
        this.enableZoom && this._handleTouchStartDolly(e),
        this.enablePan && this._handleTouchStartPan(e)
    }
    _handleTouchStartDollyRotate(e) {
        this.enableZoom && this._handleTouchStartDolly(e),
        this.enableRotate && this._handleTouchStartRotate(e)
    }
    _handleTouchMoveRotate(e) {
        if (this._pointers.length == 1)
            this._rotateEnd.set(e.pageX, e.pageY);
        else {
            let n = this._getSecondPointerPosition(e)
              , s = .5 * (e.pageX + n.x)
              , r = .5 * (e.pageY + n.y);
            this._rotateEnd.set(s, r)
        }
        this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
        let t = this.domElement;
        this._rotateLeft(Qt * this._rotateDelta.x / t.clientHeight),
        this._rotateUp(Qt * this._rotateDelta.y / t.clientHeight),
        this._rotateStart.copy(this._rotateEnd)
    }
    _handleTouchMovePan(e) {
        if (this._pointers.length === 1)
            this._panEnd.set(e.pageX, e.pageY);
        else {
            let t = this._getSecondPointerPosition(e)
              , n = .5 * (e.pageX + t.x)
              , s = .5 * (e.pageY + t.y);
            this._panEnd.set(n, s)
        }
        this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed),
        this._pan(this._panDelta.x, this._panDelta.y),
        this._panStart.copy(this._panEnd)
    }
    _handleTouchMoveDolly(e) {
        let t = this._getSecondPointerPosition(e)
          , n = e.pageX - t.x
          , s = e.pageY - t.y
          , r = Math.sqrt(n * n + s * s);
        this._dollyEnd.set(0, r),
        this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)),
        this._dollyOut(this._dollyDelta.y),
        this._dollyStart.copy(this._dollyEnd);
        let a = (e.pageX + t.x) * .5
          , o = (e.pageY + t.y) * .5;
        this._updateZoomParameters(a, o)
    }
    _handleTouchMoveDollyPan(e) {
        this.enableZoom && this._handleTouchMoveDolly(e),
        this.enablePan && this._handleTouchMovePan(e)
    }
    _handleTouchMoveDollyRotate(e) {
        this.enableZoom && this._handleTouchMoveDolly(e),
        this.enableRotate && this._handleTouchMoveRotate(e)
    }
    _addPointer(e) {
        this._pointers.push(e.pointerId)
    }
    _removePointer(e) {
        delete this._pointerPositions[e.pointerId];
        for (let t = 0; t < this._pointers.length; t++)
            if (this._pointers[t] == e.pointerId) {
                this._pointers.splice(t, 1);
                return
            }
    }
    _isTrackingPointer(e) {
        for (let t = 0; t < this._pointers.length; t++)
            if (this._pointers[t] == e.pointerId)
                return !0;
        return !1
    }
    _trackPointer(e) {
        let t = this._pointerPositions[e.pointerId];
        t === void 0 && (t = new ne,
        this._pointerPositions[e.pointerId] = t),
        t.set(e.pageX, e.pageY)
    }
    _getSecondPointerPosition(e) {
        let t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
        return this._pointerPositions[t]
    }
    _customWheelEvent(e) {
        let t = e.deltaMode
          , n = {
            clientX: e.clientX,
            clientY: e.clientY,
            deltaY: e.deltaY
        };
        switch (t) {
        case 1:
            n.deltaY *= 16;
            break;
        case 2:
            n.deltaY *= 100;
            break
        }
        return e.ctrlKey && !this._controlActive && (n.deltaY *= 10),
        n
    }
}
;
function sx(i) {
    this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId),
    this.domElement.addEventListener("pointermove", this._onPointerMove),
    this.domElement.addEventListener("pointerup", this._onPointerUp)),
    !this._isTrackingPointer(i) && (this._addPointer(i),
    i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)))
}
function rx(i) {
    this.enabled !== !1 && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i))
}
function ax(i) {
    switch (this._removePointer(i),
    this._pointers.length) {
    case 0:
        this.domElement.releasePointerCapture(i.pointerId),
        this.domElement.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.removeEventListener("pointerup", this._onPointerUp),
        this.dispatchEvent($d),
        this.state = rt.NONE;
        break;
    case 1:
        let e = this._pointers[0]
          , t = this._pointerPositions[e];
        this._onTouchStart({
            pointerId: e,
            pageX: t.x,
            pageY: t.y
        });
        break
    }
}
function ox(i) {
    let e;
    switch (i.button) {
    case 0:
        e = this.mouseButtons.LEFT;
        break;
    case 1:
        e = this.mouseButtons.MIDDLE;
        break;
    case 2:
        e = this.mouseButtons.RIGHT;
        break;
    default:
        e = -1
    }
    switch (e) {
    case Ki.DOLLY:
        if (this.enableZoom === !1)
            return;
        this._handleMouseDownDolly(i),
        this.state = rt.DOLLY;
        break;
    case Ki.ROTATE:
        if (i.ctrlKey || i.metaKey || i.shiftKey) {
            if (this.enablePan === !1)
                return;
            this._handleMouseDownPan(i),
            this.state = rt.PAN
        } else {
            if (this.enableRotate === !1)
                return;
            this._handleMouseDownRotate(i),
            this.state = rt.ROTATE
        }
        break;
    case Ki.PAN:
        if (i.ctrlKey || i.metaKey || i.shiftKey) {
            if (this.enableRotate === !1)
                return;
            this._handleMouseDownRotate(i),
            this.state = rt.ROTATE
        } else {
            if (this.enablePan === !1)
                return;
            this._handleMouseDownPan(i),
            this.state = rt.PAN
        }
        break;
    default:
        this.state = rt.NONE
    }
    this.state !== rt.NONE && this.dispatchEvent(Yl)
}
function cx(i) {
    switch (this.state) {
    case rt.ROTATE:
        if (this.enableRotate === !1)
            return;
        this._handleMouseMoveRotate(i);
        break;
    case rt.DOLLY:
        if (this.enableZoom === !1)
            return;
        this._handleMouseMoveDolly(i);
        break;
    case rt.PAN:
        if (this.enablePan === !1)
            return;
        this._handleMouseMovePan(i);
        break
    }
}
function lx(i) {
    this.enabled === !1 || this.enableZoom === !1 || this.state !== rt.NONE || (i.preventDefault(),
    this.dispatchEvent(Yl),
    this._handleMouseWheel(this._customWheelEvent(i)),
    this.dispatchEvent($d))
}
function hx(i) {
    this.enabled === !1 || this.enablePan === !1 || this._handleKeyDown(i)
}
function ux(i) {
    switch (this._trackPointer(i),
    this._pointers.length) {
    case 1:
        switch (this.touches.ONE) {
        case Zi.ROTATE:
            if (this.enableRotate === !1)
                return;
            this._handleTouchStartRotate(i),
            this.state = rt.TOUCH_ROTATE;
            break;
        case Zi.PAN:
            if (this.enablePan === !1)
                return;
            this._handleTouchStartPan(i),
            this.state = rt.TOUCH_PAN;
            break;
        default:
            this.state = rt.NONE
        }
        break;
    case 2:
        switch (this.touches.TWO) {
        case Zi.DOLLY_PAN:
            if (this.enableZoom === !1 && this.enablePan === !1)
                return;
            this._handleTouchStartDollyPan(i),
            this.state = rt.TOUCH_DOLLY_PAN;
            break;
        case Zi.DOLLY_ROTATE:
            if (this.enableZoom === !1 && this.enableRotate === !1)
                return;
            this._handleTouchStartDollyRotate(i),
            this.state = rt.TOUCH_DOLLY_ROTATE;
            break;
        default:
            this.state = rt.NONE
        }
        break;
    default:
        this.state = rt.NONE
    }
    this.state !== rt.NONE && this.dispatchEvent(Yl)
}
function dx(i) {
    switch (this._trackPointer(i),
    this.state) {
    case rt.TOUCH_ROTATE:
        if (this.enableRotate === !1)
            return;
        this._handleTouchMoveRotate(i),
        this.update();
        break;
    case rt.TOUCH_PAN:
        if (this.enablePan === !1)
            return;
        this._handleTouchMovePan(i),
        this.update();
        break;
    case rt.TOUCH_DOLLY_PAN:
        if (this.enableZoom === !1 && this.enablePan === !1)
            return;
        this._handleTouchMoveDollyPan(i),
        this.update();
        break;
    case rt.TOUCH_DOLLY_ROTATE:
        if (this.enableZoom === !1 && this.enableRotate === !1)
            return;
        this._handleTouchMoveDollyRotate(i),
        this.update();
        break;
    default:
        this.state = rt.NONE
    }
}
function fx(i) {
    this.enabled !== !1 && i.preventDefault()
}
function px(i) {
    i.key === "Control" && (this._controlActive = !0,
    this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0
    }))
}
function mx(i) {
    i.key === "Control" && (this._controlActive = !1,
    this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0
    }))
}
function tf(i, e=!1) {
    let t = i[0].index !== null
      , n = new Set(Object.keys(i[0].attributes))
      , s = new Set(Object.keys(i[0].morphAttributes))
      , r = {}
      , a = {}
      , o = i[0].morphTargetsRelative
      , c = new bt
      , l = 0;
    for (let h = 0; h < i.length; ++h) {
        let u = i[h]
          , f = 0;
        if (t !== (u.index !== null))
            return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),
            null;
        for (let d in u.attributes) {
            if (!n.has(d))
                return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + '. All geometries must have compatible attributes; make sure "' + d + '" attribute exists among all geometries, or in none of them.'),
                null;
            r[d] === void 0 && (r[d] = []),
            r[d].push(u.attributes[d]),
            f++
        }
        if (f !== n.size)
            return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". Make sure all geometries have the same number of attributes."),
            null;
        if (o !== u.morphTargetsRelative)
            return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". .morphTargetsRelative must be consistent throughout all geometries."),
            null;
        for (let d in u.morphAttributes) {
            if (!s.has(d))
                return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ".  .morphAttributes must be consistent throughout all geometries."),
                null;
            a[d] === void 0 && (a[d] = []),
            a[d].push(u.morphAttributes[d])
        }
        if (e) {
            let d;
            if (t)
                d = u.index.count;
            else if (u.attributes.position !== void 0)
                d = u.attributes.position.count;
            else
                return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " + h + ". The geometry must have either an index or a position attribute"),
                null;
            c.addGroup(l, d, h),
            l += d
        }
    }
    if (t) {
        let h = 0
          , u = [];
        for (let f = 0; f < i.length; ++f) {
            let d = i[f].index;
            for (let m = 0; m < d.count; ++m)
                u.push(d.getX(m) + h);
            h += i[f].attributes.position.count
        }
        c.setIndex(u)
    }
    for (let h in r) {
        let u = ef(r[h]);
        if (!u)
            return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + h + " attribute."),
            null;
        c.setAttribute(h, u)
    }
    for (let h in a) {
        let u = a[h][0].length;
        if (u === 0)
            break;
        c.morphAttributes = c.morphAttributes || {},
        c.morphAttributes[h] = [];
        for (let f = 0; f < u; ++f) {
            let d = [];
            for (let b = 0; b < a[h].length; ++b)
                d.push(a[h][b][f]);
            let m = ef(d);
            if (!m)
                return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " + h + " morphAttribute."),
                null;
            c.morphAttributes[h].push(m)
        }
    }
    return c
}
function ef(i) {
    let e, t, n, s = -1, r = 0;
    for (let l = 0; l < i.length; ++l) {
        let h = i[l];
        if (e === void 0 && (e = h.array.constructor),
        e !== h.array.constructor)
            return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),
            null;
        if (t === void 0 && (t = h.itemSize),
        t !== h.itemSize)
            return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),
            null;
        if (n === void 0 && (n = h.normalized),
        n !== h.normalized)
            return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),
            null;
        if (s === -1 && (s = h.gpuType),
        s !== h.gpuType)
            return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),
            null;
        r += h.count * t
    }
    let a = new e(r)
      , o = new ut(a,t,n)
      , c = 0;
    for (let l = 0; l < i.length; ++l) {
        let h = i[l];
        if (h.isInterleavedBufferAttribute) {
            let u = c / t;
            for (let f = 0, d = h.count; f < d; f++)
                for (let m = 0; m < t; m++) {
                    let b = h.getComponent(f, m);
                    o.setComponent(f + u, m, b)
                }
        } else
            a.set(h.array, c);
        c += h.count * t
    }
    return s !== void 0 && (o.gpuType = s),
    o
}
function Kl(i, e) {
    if (e === kd)
        return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),
        i;
    if (e === Pr || e === $a) {
        let t = i.getIndex();
        if (t === null) {
            let a = []
              , o = i.getAttribute("position");
            if (o !== void 0) {
                for (let c = 0; c < o.count; c++)
                    a.push(c);
                i.setIndex(a),
                t = i.getIndex()
            } else
                return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),
                i
        }
        let n = t.count - 2
          , s = [];
        if (e === Pr)
            for (let a = 1; a <= n; a++)
                s.push(t.getX(0)),
                s.push(t.getX(a)),
                s.push(t.getX(a + 1));
        else
            for (let a = 0; a < n; a++)
                a % 2 === 0 ? (s.push(t.getX(a)),
                s.push(t.getX(a + 1)),
                s.push(t.getX(a + 2))) : (s.push(t.getX(a + 2)),
                s.push(t.getX(a + 1)),
                s.push(t.getX(a)));
        s.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
        let r = i.clone();
        return r.setIndex(s),
        r.clearGroups(),
        r
    } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e),
        i
}
var so = class extends ni {
    constructor(e) {
        super(e),
        this.dracoLoader = null,
        this.ktx2Loader = null,
        this.meshoptDecoder = null,
        this.pluginCallbacks = [],
        this.register(function(t) {
            return new nh(t)
        }),
        this.register(function(t) {
            return new ih(t)
        }),
        this.register(function(t) {
            return new dh(t)
        }),
        this.register(function(t) {
            return new fh(t)
        }),
        this.register(function(t) {
            return new ph(t)
        }),
        this.register(function(t) {
            return new rh(t)
        }),
        this.register(function(t) {
            return new ah(t)
        }),
        this.register(function(t) {
            return new oh(t)
        }),
        this.register(function(t) {
            return new ch(t)
        }),
        this.register(function(t) {
            return new th(t)
        }),
        this.register(function(t) {
            return new lh(t)
        }),
        this.register(function(t) {
            return new sh(t)
        }),
        this.register(function(t) {
            return new uh(t)
        }),
        this.register(function(t) {
            return new hh(t)
        }),
        this.register(function(t) {
            return new $l(t)
        }),
        this.register(function(t) {
            return new mh(t)
        }),
        this.register(function(t) {
            return new gh(t)
        })
    }
    load(e, t, n, s) {
        let r = this, a;
        if (this.resourcePath !== "")
            a = this.resourcePath;
        else if (this.path !== "") {
            let l = Ai.extractUrlBase(e);
            a = Ai.resolveURL(l, this.path)
        } else
            a = Ai.extractUrlBase(e);
        this.manager.itemStart(e);
        let o = function(l) {
            s ? s(l) : console.error(l),
            r.manager.itemError(e),
            r.manager.itemEnd(e)
        }
          , c = new Tr(this.manager);
        c.setPath(this.path),
        c.setResponseType("arraybuffer"),
        c.setRequestHeader(this.requestHeader),
        c.setWithCredentials(this.withCredentials),
        c.load(e, function(l) {
            try {
                r.parse(l, a, function(h) {
                    t(h),
                    r.manager.itemEnd(e)
                }, o)
            } catch (h) {
                o(h)
            }
        }, n, o)
    }
    setDRACOLoader(e) {
        return this.dracoLoader = e,
        this
    }
    setKTX2Loader(e) {
        return this.ktx2Loader = e,
        this
    }
    setMeshoptDecoder(e) {
        return this.meshoptDecoder = e,
        this
    }
    register(e) {
        return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
        this
    }
    unregister(e) {
        return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
        this
    }
    parse(e, t, n, s) {
        let r, a = {}, o = {}, c = new TextDecoder;
        if (typeof e == "string")
            r = JSON.parse(e);
        else if (e instanceof ArrayBuffer)
            if (c.decode(new Uint8Array(e,0,4)) === of) {
                try {
                    a[Xe.KHR_BINARY_GLTF] = new bh(e)
                } catch (u) {
                    s && s(u);
                    return
                }
                r = JSON.parse(a[Xe.KHR_BINARY_GLTF].content)
            } else
                r = JSON.parse(c.decode(e));
        else
            r = e;
        if (r.asset === void 0 || r.asset.version[0] < 2) {
            s && s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
            return
        }
        let l = new wh(r,{
            path: t || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
        });
        l.fileLoader.setRequestHeader(this.requestHeader);
        for (let h = 0; h < this.pluginCallbacks.length; h++) {
            let u = this.pluginCallbacks[h](l);
            u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),
            o[u.name] = u,
            a[u.name] = !0
        }
        if (r.extensionsUsed)
            for (let h = 0; h < r.extensionsUsed.length; ++h) {
                let u = r.extensionsUsed[h]
                  , f = r.extensionsRequired || [];
                switch (u) {
                case Xe.KHR_MATERIALS_UNLIT:
                    a[u] = new eh;
                    break;
                case Xe.KHR_DRACO_MESH_COMPRESSION:
                    a[u] = new _h(r,this.dracoLoader);
                    break;
                case Xe.KHR_TEXTURE_TRANSFORM:
                    a[u] = new xh;
                    break;
                case Xe.KHR_MESH_QUANTIZATION:
                    a[u] = new vh;
                    break;
                default:
                    f.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".')
                }
            }
        l.setExtensions(a),
        l.setPlugins(o),
        l.parse(n, s)
    }
    parseAsync(e, t) {
        let n = this;
        return new Promise(function(s, r) {
            n.parse(e, t, s, r)
        }
        )
    }
}
;
function gx() {
    let i = {};
    return {
        get: function(e) {
            return i[e]
        },
        add: function(e, t) {
            i[e] = t
        },
        remove: function(e) {
            delete i[e]
        },
        removeAll: function() {
            i = {}
        }
    }
}
var Xe = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_MATERIALS_BUMP: "EXT_materials_bump",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
}
  , $l = class {
    constructor(e) {
        this.parser = e,
        this.name = Xe.KHR_LIGHTS_PUNCTUAL,
        this.cache = {
            refs: {},
            uses: {}
        }
    }
    _markDefs() {
        let e = this.parser
          , t = this.parser.json.nodes || [];
        for (let n = 0, s = t.length; n < s; n++) {
            let r = t[n];
            r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light)
        }
    }
    _loadLight(e) {
        let t = this.parser
          , n = "light:" + e
          , s = t.cache.get(n);
        if (s)
            return s;
        let r = t.json, c = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e], l, h = new ue(16777215);
        c.color !== void 0 && h.setRGB(c.color[0], c.color[1], c.color[2], Xt);
        let u = c.range !== void 0 ? c.range : 0;
        switch (c.type) {
        case "directional":
            l = new Ka(h),
            l.target.position.set(0, 0, -1),
            l.add(l.target);
            break;
        case "point":
            l = new zs(h),
            l.distance = u;
            break;
        case "spot":
            l = new Yi(h),
            l.distance = u,
            c.spot = c.spot || {},
            c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0,
            c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4,
            l.angle = c.spot.outerConeAngle,
            l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle,
            l.target.position.set(0, 0, -1),
            l.add(l.target);
            break;
        default:
            throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type)
        }
        return l.position.set(0, 0, 0),
        l.decay = 2,
        ii(l, c),
        c.intensity !== void 0 && (l.intensity = c.intensity),
        l.name = t.createUniqueName(c.name || "light_" + e),
        s = Promise.resolve(l),
        t.cache.add(n, s),
        s
    }
    getDependency(e, t) {
        if (e === "light")
            return this._loadLight(t)
    }
    createNodeAttachment(e) {
        let t = this
          , n = this.parser
          , r = n.json.nodes[e]
          , o = (r.extensions && r.extensions[this.name] || {}).light;
        return o === void 0 ? null : this._loadLight(o).then(function(c) {
            return n._getNodeRef(t.cache, o, c)
        })
    }
}
  , eh = class {
    constructor() {
        this.name = Xe.KHR_MATERIALS_UNLIT
    }
    getMaterialType() {
        return Ft
    }
    extendParams(e, t, n) {
        let s = [];
        e.color = new ue(1,1,1),
        e.opacity = 1;
        let r = t.pbrMetallicRoughness;
        if (r) {
            if (Array.isArray(r.baseColorFactor)) {
                let a = r.baseColorFactor;
                e.color.setRGB(a[0], a[1], a[2], Xt),
                e.opacity = a[3]
            }
            r.baseColorTexture !== void 0 && s.push(n.assignTexture(e, "map", r.baseColorTexture, St))
        }
        return Promise.all(s)
    }
}
  , th = class {
    constructor(e) {
        this.parser = e,
        this.name = Xe.KHR_MATERIALS_EMISSIVE_STRENGTH
    }
    extendMaterialParams(e, t) {
        let s = this.parser.json.materials[e];
        if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
        let r = s.extensions[this.name].emissiveStrength;
        return r !== void 0 && (t.emissiveIntensity = r),
        Promise.resolve()
    }
}
  , nh = class {
    constructor(e) {
        this.parser = e,
        this.name = Xe.KHR_MATERIALS_CLEARCOAT
    }
    getMaterialType(e) {
        let n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : At
    }
    extendMaterialParams(e, t) {
        let n = this.parser
          , s = n.json.materials[e];
        if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
        let r = []
          , a = s.extensions[this.name];
        if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor),
        a.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)),
        a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor),
        a.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)),
        a.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)),
        a.clearcoatNormalTexture.scale !== void 0)) {
            let o = a.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new ne(o,o)
        }
        return Promise.all(r)
    }
}
  , ih = class {
    constructor(e) {
        this.parser = e,
        this.name = Xe.KHR_MATERIALS_DISPERSION
    }
    getMaterialType(e) {
        let n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : At
    }
    extendMaterialParams(e, t) {
        let s = this.parser.json.materials[e];
        if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
        let r = s.extensions[this.name];
        return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0,
        Promise.resolve()
    }
}
  , sh = class {
    constructor(e) {
        this.parser = e,
        this.name = Xe.KHR_MATERIALS_IRIDESCENCE
    }
    getMaterialType(e) {
        let n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : At
    }
    extendMaterialParams(e, t) {
        let n = this.parser
          , s = n.json.materials[e];
        if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
        let r = []
          , a = s.extensions[this.name];
        return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor),
        a.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)),
        a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor),
        t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]),
        a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum),
        a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum),
        a.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)),
        Promise.all(r)
    }
}
  , rh = class {
    constructor(e) {
        this.parser = e,
        this.name = Xe.KHR_MATERIALS_SHEEN
    }
    getMaterialType(e) {
        let n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : At
    }
    extendMaterialParams(e, t) {
        let n = this.parser
          , s = n.json.materials[e];
        if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
        let r = [];
        t.sheenColor = new ue(0,0,0),
        t.sheenRoughness = 0,
        t.sheen = 1;
        let a = s.extensions[this.name];
        if (a.sheenColorFactor !== void 0) {
            let o = a.sheenColorFactor;
            t.sheenColor.setRGB(o[0], o[1], o[2], Xt)
        }
        return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor),
        a.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, St)),
        a.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)),
        Promise.all(r)
    }
}
  , ah = class {
    constructor(e) {
        this.parser = e,
        this.name = Xe.KHR_MATERIALS_TRANSMISSION
    }
    getMaterialType(e) {
        let n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : At
    }
    extendMaterialParams(e, t) {
        let n = this.parser
          , s = n.json.materials[e];
        if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
        let r = []
          , a = s.extensions[this.name];
        return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor),
        a.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)),
        Promise.all(r)
    }
}
  , oh = class {
    constructor(e) {
        this.parser = e,
        this.name = Xe.KHR_MATERIALS_VOLUME
    }
    getMaterialType(e) {
        let n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : At
    }
    extendMaterialParams(e, t) {
        let n = this.parser
          , s = n.json.materials[e];
        if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
        let r = []
          , a = s.extensions[this.name];
        t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0,
        a.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)),
        t.attenuationDistance = a.attenuationDistance || 1 / 0;
        let o = a.attenuationColor || [1, 1, 1];
        return t.attenuationColor = new ue().setRGB(o[0], o[1], o[2], Xt),
        Promise.all(r)
    }
}
  , ch = class {
    constructor(e) {
        this.parser = e,
        this.name = Xe.KHR_MATERIALS_IOR
    }
    getMaterialType(e) {
        let n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : At
    }
    extendMaterialParams(e, t) {
        let s = this.parser.json.materials[e];
        if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
        let r = s.extensions[this.name];
        return t.ior = r.ior !== void 0 ? r.ior : 1.5,
        Promise.resolve()
    }
}
  , lh = class {
    constructor(e) {
        this.parser = e,
        this.name = Xe.KHR_MATERIALS_SPECULAR
    }
    getMaterialType(e) {
        let n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : At
    }
    extendMaterialParams(e, t) {
        let n = this.parser
          , s = n.json.materials[e];
        if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
        let r = []
          , a = s.extensions[this.name];
        t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1,
        a.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
        let o = a.specularColorFactor || [1, 1, 1];
        return t.specularColor = new ue().setRGB(o[0], o[1], o[2], Xt),
        a.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, St)),
        Promise.all(r)
    }
}
  , hh = class {
    constructor(e) {
        this.parser = e,
        this.name = Xe.EXT_MATERIALS_BUMP
    }
    getMaterialType(e) {
        let n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : At
    }
    extendMaterialParams(e, t) {
        let n = this.parser
          , s = n.json.materials[e];
        if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
        let r = []
          , a = s.extensions[this.name];
        return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1,
        a.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", a.bumpTexture)),
        Promise.all(r)
    }
}
  , uh = class {
    constructor(e) {
        this.parser = e,
        this.name = Xe.KHR_MATERIALS_ANISOTROPY
    }
    getMaterialType(e) {
        let n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : At
    }
    extendMaterialParams(e, t) {
        let n = this.parser
          , s = n.json.materials[e];
        if (!s.extensions || !s.extensions[this.name])
            return Promise.resolve();
        let r = []
          , a = s.extensions[this.name];
        return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength),
        a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation),
        a.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)),
        Promise.all(r)
    }
}
  , dh = class {
    constructor(e) {
        this.parser = e,
        this.name = Xe.KHR_TEXTURE_BASISU
    }
    loadTexture(e) {
        let t = this.parser
          , n = t.json
          , s = n.textures[e];
        if (!s.extensions || !s.extensions[this.name])
            return null;
        let r = s.extensions[this.name]
          , a = t.options.ktx2Loader;
        if (!a) {
            if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
                throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return null
        }
        return t.loadTextureImage(e, r.source, a)
    }
}
  , fh = class {
    constructor(e) {
        this.parser = e,
        this.name = Xe.EXT_TEXTURE_WEBP,
        this.isSupported = null
    }
    loadTexture(e) {
        let t = this.name
          , n = this.parser
          , s = n.json
          , r = s.textures[e];
        if (!r.extensions || !r.extensions[t])
            return null;
        let a = r.extensions[t]
          , o = s.images[a.source]
          , c = n.textureLoader;
        if (o.uri) {
            let l = n.options.manager.getHandler(o.uri);
            l !== null && (c = l)
        }
        return this.detectSupport().then(function(l) {
            if (l)
                return n.loadTextureImage(e, a.source, c);
            if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
                throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
            return n.loadTexture(e)
        })
    }
    detectSupport() {
        return this.isSupported || (this.isSupported = new Promise(function(e) {
            let t = new Image;
            t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
            t.onload = t.onerror = function() {
                e(t.height === 1)
            }
        }
        )),
        this.isSupported
    }
}
  , ph = class {
    constructor(e) {
        this.parser = e,
        this.name = Xe.EXT_TEXTURE_AVIF,
        this.isSupported = null
    }
    loadTexture(e) {
        let t = this.name
          , n = this.parser
          , s = n.json
          , r = s.textures[e];
        if (!r.extensions || !r.extensions[t])
            return null;
        let a = r.extensions[t]
          , o = s.images[a.source]
          , c = n.textureLoader;
        if (o.uri) {
            let l = n.options.manager.getHandler(o.uri);
            l !== null && (c = l)
        }
        return this.detectSupport().then(function(l) {
            if (l)
                return n.loadTextureImage(e, a.source, c);
            if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
                throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
            return n.loadTexture(e)
        })
    }
    detectSupport() {
        return this.isSupported || (this.isSupported = new Promise(function(e) {
            let t = new Image;
            t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",
            t.onload = t.onerror = function() {
                e(t.height === 1)
            }
        }
        )),
        this.isSupported
    }
}
  , mh = class {
    constructor(e) {
        this.name = Xe.EXT_MESHOPT_COMPRESSION,
        this.parser = e
    }
    loadBufferView(e) {
        let t = this.parser.json
          , n = t.bufferViews[e];
        if (n.extensions && n.extensions[this.name]) {
            let s = n.extensions[this.name]
              , r = this.parser.getDependency("buffer", s.buffer)
              , a = this.parser.options.meshoptDecoder;
            if (!a || !a.supported) {
                if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
                    throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                return null
            }
            return r.then(function(o) {
                let c = s.byteOffset || 0
                  , l = s.byteLength || 0
                  , h = s.count
                  , u = s.byteStride
                  , f = new Uint8Array(o,c,l);
                return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, u, f, s.mode, s.filter).then(function(d) {
                    return d.buffer
                }) : a.ready.then(function() {
                    let d = new ArrayBuffer(h * u);
                    return a.decodeGltfBuffer(new Uint8Array(d), h, u, f, s.mode, s.filter),
                    d
                })
            })
        } else
            return null
    }
}
  , gh = class {
    constructor(e) {
        this.name = Xe.EXT_MESH_GPU_INSTANCING,
        this.parser = e
    }
    createNodeMesh(e) {
        let t = this.parser.json
          , n = t.nodes[e];
        if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
            return null;
        let s = t.meshes[n.mesh];
        for (let l of s.primitives)
            if (l.mode !== xn.TRIANGLES && l.mode !== xn.TRIANGLE_STRIP && l.mode !== xn.TRIANGLE_FAN && l.mode !== void 0)
                return null;
        let a = n.extensions[this.name].attributes
          , o = []
          , c = {};
        for (let l in a)
            o.push(this.parser.getDependency("accessor", a[l]).then(h => (c[l] = h,
            c[l])));
        return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)),
        Promise.all(o).then(l => {
            let h = l.pop()
              , u = h.isGroup ? h.children : [h]
              , f = l[0].count
              , d = [];
            for (let m of u) {
                let b = new Le
                  , g = new C
                  , p = new wt
                  , x = new C(1,1,1)
                  , v = new Us(m.geometry,m.material,f);
                for (let _ = 0; _ < f; _++)
                    c.TRANSLATION && g.fromBufferAttribute(c.TRANSLATION, _),
                    c.ROTATION && p.fromBufferAttribute(c.ROTATION, _),
                    c.SCALE && x.fromBufferAttribute(c.SCALE, _),
                    v.setMatrixAt(_, b.compose(g, p, x));
                for (let _ in c)
                    if (_ === "_COLOR_0") {
                        let P = c[_];
                        v.instanceColor = new ji(P.array,P.itemSize,P.normalized)
                    } else
                        _ !== "TRANSLATION" && _ !== "ROTATION" && _ !== "SCALE" && m.geometry.setAttribute(_, c[_]);
                vt.prototype.copy.call(v, m),
                this.parser.assignFinalMaterial(v),
                d.push(v)
            }
            return h.isGroup ? (h.clear(),
            h.add(...d),
            h) : d[0]
        }
        ))
    }
}
  , of = "glTF"
  , Lr = 12
  , nf = {
    JSON: 1313821514,
    BIN: 5130562
}
  , bh = class {
    constructor(e) {
        this.name = Xe.KHR_BINARY_GLTF,
        this.content = null,
        this.body = null;
        let t = new DataView(e,0,Lr)
          , n = new TextDecoder;
        if (this.header = {
            magic: n.decode(new Uint8Array(e.slice(0, 4))),
            version: t.getUint32(4, !0),
            length: t.getUint32(8, !0)
        },
        this.header.magic !== of)
            throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
        if (this.header.version < 2)
            throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
        let s = this.header.length - Lr
          , r = new DataView(e,Lr)
          , a = 0;
        for (; a < s; ) {
            let o = r.getUint32(a, !0);
            a += 4;
            let c = r.getUint32(a, !0);
            if (a += 4,
            c === nf.JSON) {
                let l = new Uint8Array(e,Lr + a,o);
                this.content = n.decode(l)
            } else if (c === nf.BIN) {
                let l = Lr + a;
                this.body = e.slice(l, l + o)
            }
            a += o
        }
        if (this.content === null)
            throw new Error("THREE.GLTFLoader: JSON content not found.")
    }
}
  , _h = class {
    constructor(e, t) {
        if (!t)
            throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
        this.name = Xe.KHR_DRACO_MESH_COMPRESSION,
        this.json = e,
        this.dracoLoader = t,
        this.dracoLoader.preload()
    }
    decodePrimitive(e, t) {
        let n = this.json
          , s = this.dracoLoader
          , r = e.extensions[this.name].bufferView
          , a = e.extensions[this.name].attributes
          , o = {}
          , c = {}
          , l = {};
        for (let h in a) {
            let u = Mh[h] || h.toLowerCase();
            o[u] = a[h]
        }
        for (let h in e.attributes) {
            let u = Mh[h] || h.toLowerCase();
            if (a[h] !== void 0) {
                let f = n.accessors[e.attributes[h]]
                  , d = Gs[f.componentType];
                l[u] = d.name,
                c[u] = f.normalized === !0
            }
        }
        return t.getDependency("bufferView", r).then(function(h) {
            return new Promise(function(u, f) {
                s.decodeDracoFile(h, function(d) {
                    for (let m in d.attributes) {
                        let b = d.attributes[m]
                          , g = c[m];
                        g !== void 0 && (b.normalized = g)
                    }
                    u(d)
                }, o, l, Xt, f)
            }
            )
        })
    }
}
  , xh = class {
    constructor() {
        this.name = Xe.KHR_TEXTURE_TRANSFORM
    }
    extendTexture(e, t) {
        return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(),
        t.texCoord !== void 0 && (e.channel = t.texCoord),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        e.needsUpdate = !0),
        e
    }
}
  , vh = class {
    constructor() {
        this.name = Xe.KHR_MESH_QUANTIZATION
    }
}
  , ro = class extends wi {
    constructor(e, t, n, s) {
        super(e, t, n, s)
    }
    copySampleValue_(e) {
        let t = this.resultBuffer
          , n = this.sampleValues
          , s = this.valueSize
          , r = e * s * 3 + s;
        for (let a = 0; a !== s; a++)
            t[a] = n[r + a];
        return t
    }
    interpolate_(e, t, n, s) {
        let r = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , c = o * 2
          , l = o * 3
          , h = s - t
          , u = (n - t) / h
          , f = u * u
          , d = f * u
          , m = e * l
          , b = m - l
          , g = -2 * d + 3 * f
          , p = d - f
          , x = 1 - g
          , v = p - f + u;
        for (let _ = 0; _ !== o; _++) {
            let P = a[b + _ + o]
              , E = a[b + _ + c] * h
              , R = a[m + _ + o]
              , L = a[m + _] * h;
            r[_] = x * P + v * E + g * R + p * L
        }
        return r
    }
}
  , bx = new wt
  , yh = class extends ro {
    interpolate_(e, t, n, s) {
        let r = super.interpolate_(e, t, n, s);
        return bx.fromArray(r).normalize().toArray(r),
        r
    }
}
  , xn = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123
}
  , Gs = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
}
  , sf = {
    9728: Wt,
    9729: Zt,
    9984: Ul,
    9985: lr,
    9986: _s,
    9987: Dn
}
  , rf = {
    33071: jn,
    33648: mr,
    10497: Zn
}
  , Zl = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
}
  , Mh = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
}
  , Ci = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
}
  , _x = {
    CUBICSPLINE: void 0,
    LINEAR: Cs,
    STEP: Rs
}
  , Jl = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
};
function xx(i) {
    return i.DefaultMaterial === void 0 && (i.DefaultMaterial = new Lt({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: Nn
    })),
    i.DefaultMaterial
}
function Ji(i, e, t) {
    for (let n in t.extensions)
        i[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {},
        e.userData.gltfExtensions[n] = t.extensions[n])
}
function ii(i, e) {
    e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(i.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras))
}
function vx(i, e, t) {
    let n = !1
      , s = !1
      , r = !1;
    for (let l = 0, h = e.length; l < h; l++) {
        let u = e[l];
        if (u.POSITION !== void 0 && (n = !0),
        u.NORMAL !== void 0 && (s = !0),
        u.COLOR_0 !== void 0 && (r = !0),
        n && s && r)
            break
    }
    if (!n && !s && !r)
        return Promise.resolve(i);
    let a = []
      , o = []
      , c = [];
    for (let l = 0, h = e.length; l < h; l++) {
        let u = e[l];
        if (n) {
            let f = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : i.attributes.position;
            a.push(f)
        }
        if (s) {
            let f = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : i.attributes.normal;
            o.push(f)
        }
        if (r) {
            let f = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : i.attributes.color;
            c.push(f)
        }
    }
    return Promise.all([Promise.all(a), Promise.all(o), Promise.all(c)]).then(function(l) {
        let h = l[0]
          , u = l[1]
          , f = l[2];
        return n && (i.morphAttributes.position = h),
        s && (i.morphAttributes.normal = u),
        r && (i.morphAttributes.color = f),
        i.morphTargetsRelative = !0,
        i
    })
}
function yx(i, e) {
    if (i.updateMorphTargets(),
    e.weights !== void 0)
        for (let t = 0, n = e.weights.length; t < n; t++)
            i.morphTargetInfluences[t] = e.weights[t];
    if (e.extras && Array.isArray(e.extras.targetNames)) {
        let t = e.extras.targetNames;
        if (i.morphTargetInfluences.length === t.length) {
            i.morphTargetDictionary = {};
            for (let n = 0, s = t.length; n < s; n++)
                i.morphTargetDictionary[t[n]] = n
        } else
            console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
    }
}
function Mx(i) {
    let e, t = i.extensions && i.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];
    if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Ql(t.attributes) : e = i.indices + ":" + Ql(i.attributes) + ":" + i.mode,
    i.targets !== void 0)
        for (let n = 0, s = i.targets.length; n < s; n++)
            e += ":" + Ql(i.targets[n]);
    return e
}
function Ql(i) {
    let e = ""
      , t = Object.keys(i).sort();
    for (let n = 0, s = t.length; n < s; n++)
        e += t[n] + ":" + i[t[n]] + ";";
    return e
}
function Sh(i) {
    switch (i) {
    case Int8Array:
        return 1 / 127;
    case Uint8Array:
        return 1 / 255;
    case Int16Array:
        return 1 / 32767;
    case Uint16Array:
        return 1 / 65535;
    default:
        throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
    }
}
function Sx(i) {
    return i.search(/\.jpe?g($|\?)/i) > 0 || i.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : i.search(/\.webp($|\?)/i) > 0 || i.search(/^data\:image\/webp/) === 0 ? "image/webp" : i.search(/\.ktx2($|\?)/i) > 0 || i.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png"
}
var wx = new Le
  , wh = class {
    constructor(e={}, t={}) {
        this.json = e,
        this.extensions = {},
        this.plugins = {},
        this.options = t,
        this.cache = new gx,
        this.associations = new Map,
        this.primitiveCache = {},
        this.nodeCache = {},
        this.meshCache = {
            refs: {},
            uses: {}
        },
        this.cameraCache = {
            refs: {},
            uses: {}
        },
        this.lightCache = {
            refs: {},
            uses: {}
        },
        this.sourceCache = {},
        this.textureCache = {},
        this.nodeNamesUsed = {};
        let n = !1
          , s = -1
          , r = !1
          , a = -1;
        if (typeof navigator < "u") {
            let o = navigator.userAgent;
            n = /^((?!chrome|android).)*safari/i.test(o) === !0;
            let c = o.match(/Version\/(\d+)/);
            s = n && c ? parseInt(c[1], 10) : -1,
            r = o.indexOf("Firefox") > -1,
            a = r ? o.match(/Firefox\/([0-9]+)\./)[1] : -1
        }
        typeof createImageBitmap > "u" || n && s < 17 || r && a < 98 ? this.textureLoader = new ja(this.options.manager) : this.textureLoader = new Za(this.options.manager),
        this.textureLoader.setCrossOrigin(this.options.crossOrigin),
        this.textureLoader.setRequestHeader(this.options.requestHeader),
        this.fileLoader = new Tr(this.options.manager),
        this.fileLoader.setResponseType("arraybuffer"),
        this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0)
    }
    setExtensions(e) {
        this.extensions = e
    }
    setPlugins(e) {
        this.plugins = e
    }
    parse(e, t) {
        let n = this
          , s = this.json
          , r = this.extensions;
        this.cache.removeAll(),
        this.nodeCache = {},
        this._invokeAll(function(a) {
            return a._markDefs && a._markDefs()
        }),
        Promise.all(this._invokeAll(function(a) {
            return a.beforeRoot && a.beforeRoot()
        })).then(function() {
            return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")])
        }).then(function(a) {
            let o = {
                scene: a[0][s.scene || 0],
                scenes: a[0],
                animations: a[1],
                cameras: a[2],
                asset: s.asset,
                parser: n,
                userData: {}
            };
            return Ji(r, o, s),
            ii(o, s),
            Promise.all(n._invokeAll(function(c) {
                return c.afterRoot && c.afterRoot(o)
            })).then(function() {
                for (let c of o.scenes)
                    c.updateMatrixWorld();
                e(o)
            })
        }).catch(t)
    }
    _markDefs() {
        let e = this.json.nodes || []
          , t = this.json.skins || []
          , n = this.json.meshes || [];
        for (let s = 0, r = t.length; s < r; s++) {
            let a = t[s].joints;
            for (let o = 0, c = a.length; o < c; o++)
                e[a[o]].isBone = !0
        }
        for (let s = 0, r = e.length; s < r; s++) {
            let a = e[s];
            a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh),
            a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)),
            a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera)
        }
    }
    _addNodeRef(e, t) {
        t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0),
        e.refs[t]++)
    }
    _getNodeRef(e, t, n) {
        if (e.refs[t] <= 1)
            return n;
        let s = n.clone()
          , r = (a, o) => {
            let c = this.associations.get(a);
            c != null && this.associations.set(o, c);
            for (let[l,h] of a.children.entries())
                r(h, o.children[l])
        }
        ;
        return r(n, s),
        s.name += "_instance_" + e.uses[t]++,
        s
    }
    _invokeOne(e) {
        let t = Object.values(this.plugins);
        t.push(this);
        for (let n = 0; n < t.length; n++) {
            let s = e(t[n]);
            if (s)
                return s
        }
        return null
    }
    _invokeAll(e) {
        let t = Object.values(this.plugins);
        t.unshift(this);
        let n = [];
        for (let s = 0; s < t.length; s++) {
            let r = e(t[s]);
            r && n.push(r)
        }
        return n
    }
    getDependency(e, t) {
        let n = e + ":" + t
          , s = this.cache.get(n);
        if (!s) {
            switch (e) {
            case "scene":
                s = this.loadScene(t);
                break;
            case "node":
                s = this._invokeOne(function(r) {
                    return r.loadNode && r.loadNode(t)
                });
                break;
            case "mesh":
                s = this._invokeOne(function(r) {
                    return r.loadMesh && r.loadMesh(t)
                });
                break;
            case "accessor":
                s = this.loadAccessor(t);
                break;
            case "bufferView":
                s = this._invokeOne(function(r) {
                    return r.loadBufferView && r.loadBufferView(t)
                });
                break;
            case "buffer":
                s = this.loadBuffer(t);
                break;
            case "material":
                s = this._invokeOne(function(r) {
                    return r.loadMaterial && r.loadMaterial(t)
                });
                break;
            case "texture":
                s = this._invokeOne(function(r) {
                    return r.loadTexture && r.loadTexture(t)
                });
                break;
            case "skin":
                s = this.loadSkin(t);
                break;
            case "animation":
                s = this._invokeOne(function(r) {
                    return r.loadAnimation && r.loadAnimation(t)
                });
                break;
            case "camera":
                s = this.loadCamera(t);
                break;
            default:
                if (s = this._invokeOne(function(r) {
                    return r != this && r.getDependency && r.getDependency(e, t)
                }),
                !s)
                    throw new Error("Unknown type: " + e);
                break
            }
            this.cache.add(n, s)
        }
        return s
    }
    getDependencies(e) {
        let t = this.cache.get(e);
        if (!t) {
            let n = this
              , s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
            t = Promise.all(s.map(function(r, a) {
                return n.getDependency(e, a)
            })),
            this.cache.add(e, t)
        }
        return t
    }
    loadBuffer(e) {
        let t = this.json.buffers[e]
          , n = this.fileLoader;
        if (t.type && t.type !== "arraybuffer")
            throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
        if (t.uri === void 0 && e === 0)
            return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);
        let s = this.options;
        return new Promise(function(r, a) {
            n.load(Ai.resolveURL(t.uri, s.path), r, void 0, function() {
                a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
            })
        }
        )
    }
    loadBufferView(e) {
        let t = this.json.bufferViews[e];
        return this.getDependency("buffer", t.buffer).then(function(n) {
            let s = t.byteLength || 0
              , r = t.byteOffset || 0;
            return n.slice(r, r + s)
        })
    }
    loadAccessor(e) {
        let t = this
          , n = this.json
          , s = this.json.accessors[e];
        if (s.bufferView === void 0 && s.sparse === void 0) {
            let a = Zl[s.type]
              , o = Gs[s.componentType]
              , c = s.normalized === !0
              , l = new o(s.count * a);
            return Promise.resolve(new ut(l,a,c))
        }
        let r = [];
        return s.bufferView !== void 0 ? r.push(this.getDependency("bufferView", s.bufferView)) : r.push(null),
        s.sparse !== void 0 && (r.push(this.getDependency("bufferView", s.sparse.indices.bufferView)),
        r.push(this.getDependency("bufferView", s.sparse.values.bufferView))),
        Promise.all(r).then(function(a) {
            let o = a[0], c = Zl[s.type], l = Gs[s.componentType], h = l.BYTES_PER_ELEMENT, u = h * c, f = s.byteOffset || 0, d = s.bufferView !== void 0 ? n.bufferViews[s.bufferView].byteStride : void 0, m = s.normalized === !0, b, g;
            if (d && d !== u) {
                let p = Math.floor(f / d)
                  , x = "InterleavedBuffer:" + s.bufferView + ":" + s.componentType + ":" + p + ":" + s.count
                  , v = t.cache.get(x);
                v || (b = new l(o,p * d,s.count * d / h),
                v = new xr(b,d / h),
                t.cache.add(x, v)),
                g = new vr(v,c,f % d / h,m)
            } else
                o === null ? b = new l(s.count * c) : b = new l(o,f,s.count * c),
                g = new ut(b,c,m);
            if (s.sparse !== void 0) {
                let p = Zl.SCALAR
                  , x = Gs[s.sparse.indices.componentType]
                  , v = s.sparse.indices.byteOffset || 0
                  , _ = s.sparse.values.byteOffset || 0
                  , P = new x(a[1],v,s.sparse.count * p)
                  , E = new l(a[2],_,s.sparse.count * c);
                o !== null && (g = new ut(g.array.slice(),g.itemSize,g.normalized)),
                g.normalized = !1;
                for (let R = 0, L = P.length; R < L; R++) {
                    let w = P[R];
                    if (g.setX(w, E[R * c]),
                    c >= 2 && g.setY(w, E[R * c + 1]),
                    c >= 3 && g.setZ(w, E[R * c + 2]),
                    c >= 4 && g.setW(w, E[R * c + 3]),
                    c >= 5)
                        throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                }
                g.normalized = m
            }
            return g
        })
    }
    loadTexture(e) {
        let t = this.json
          , n = this.options
          , r = t.textures[e].source
          , a = t.images[r]
          , o = this.textureLoader;
        if (a.uri) {
            let c = n.manager.getHandler(a.uri);
            c !== null && (o = c)
        }
        return this.loadTextureImage(e, r, o)
    }
    loadTextureImage(e, t, n) {
        let s = this
          , r = this.json
          , a = r.textures[e]
          , o = r.images[t]
          , c = (o.uri || o.bufferView) + ":" + a.sampler;
        if (this.textureCache[c])
            return this.textureCache[c];
        let l = this.loadImageSource(t, n).then(function(h) {
            h.flipY = !1,
            h.name = a.name || o.name || "",
            h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (h.name = o.uri);
            let f = (r.samplers || {})[a.sampler] || {};
            return h.magFilter = sf[f.magFilter] || Zt,
            h.minFilter = sf[f.minFilter] || Dn,
            h.wrapS = rf[f.wrapS] || Zn,
            h.wrapT = rf[f.wrapT] || Zn,
            h.generateMipmaps = !h.isCompressedTexture && h.minFilter !== Wt && h.minFilter !== Zt,
            s.associations.set(h, {
                textures: e
            }),
            h
        }).catch(function() {
            return null
        });
        return this.textureCache[c] = l,
        l
    }
    loadImageSource(e, t) {
        let n = this
          , s = this.json
          , r = this.options;
        if (this.sourceCache[e] !== void 0)
            return this.sourceCache[e].then(u => u.clone());
        let a = s.images[e]
          , o = self.URL || self.webkitURL
          , c = a.uri || ""
          , l = !1;
        if (a.bufferView !== void 0)
            c = n.getDependency("bufferView", a.bufferView).then(function(u) {
                l = !0;
                let f = new Blob([u],{
                    type: a.mimeType
                });
                return c = o.createObjectURL(f),
                c
            });
        else if (a.uri === void 0)
            throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
        let h = Promise.resolve(c).then(function(u) {
            return new Promise(function(f, d) {
                let m = f;
                t.isImageBitmapLoader === !0 && (m = function(b) {
                    let g = new Nt(b);
                    g.needsUpdate = !0,
                    f(g)
                }
                ),
                t.load(Ai.resolveURL(u, r.path), m, void 0, d)
            }
            )
        }).then(function(u) {
            return l === !0 && o.revokeObjectURL(c),
            ii(u, a),
            u.userData.mimeType = a.mimeType || Sx(a.uri),
            u
        }).catch(function(u) {
            throw console.error("THREE.GLTFLoader: Couldn't load texture", c),
            u
        });
        return this.sourceCache[e] = h,
        h
    }
    assignTexture(e, t, n, s) {
        let r = this;
        return this.getDependency("texture", n.index).then(function(a) {
            if (!a)
                return null;
            if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(),
            a.channel = n.texCoord),
            r.extensions[Xe.KHR_TEXTURE_TRANSFORM]) {
                let o = n.extensions !== void 0 ? n.extensions[Xe.KHR_TEXTURE_TRANSFORM] : void 0;
                if (o) {
                    let c = r.associations.get(a);
                    a = r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a, o),
                    r.associations.set(a, c)
                }
            }
            return s !== void 0 && (a.colorSpace = s),
            e[t] = a,
            a
        })
    }
    assignFinalMaterial(e) {
        let t = e.geometry
          , n = e.material
          , s = t.attributes.tangent === void 0
          , r = t.attributes.color !== void 0
          , a = t.attributes.normal === void 0;
        if (e.isPoints) {
            let o = "PointsMaterial:" + n.uuid
              , c = this.cache.get(o);
            c || (c = new Sr,
            sn.prototype.copy.call(c, n),
            c.color.copy(n.color),
            c.map = n.map,
            c.sizeAttenuation = !1,
            this.cache.add(o, c)),
            n = c
        } else if (e.isLine) {
            let o = "LineBasicMaterial:" + n.uuid
              , c = this.cache.get(o);
            c || (c = new Mr,
            sn.prototype.copy.call(c, n),
            c.color.copy(n.color),
            c.map = n.map,
            this.cache.add(o, c)),
            n = c
        }
        if (s || r || a) {
            let o = "ClonedMaterial:" + n.uuid + ":";
            s && (o += "derivative-tangents:"),
            r && (o += "vertex-colors:"),
            a && (o += "flat-shading:");
            let c = this.cache.get(o);
            c || (c = n.clone(),
            r && (c.vertexColors = !0),
            a && (c.flatShading = !0),
            s && (c.normalScale && (c.normalScale.y *= -1),
            c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)),
            this.cache.add(o, c),
            this.associations.set(c, this.associations.get(n))),
            n = c
        }
        e.material = n
    }
    getMaterialType() {
        return Lt
    }
    loadMaterial(e) {
        let t = this, n = this.json, s = this.extensions, r = n.materials[e], a, o = {}, c = r.extensions || {}, l = [];
        if (c[Xe.KHR_MATERIALS_UNLIT]) {
            let u = s[Xe.KHR_MATERIALS_UNLIT];
            a = u.getMaterialType(),
            l.push(u.extendParams(o, r, t))
        } else {
            let u = r.pbrMetallicRoughness || {};
            if (o.color = new ue(1,1,1),
            o.opacity = 1,
            Array.isArray(u.baseColorFactor)) {
                let f = u.baseColorFactor;
                o.color.setRGB(f[0], f[1], f[2], Xt),
                o.opacity = f[3]
            }
            u.baseColorTexture !== void 0 && l.push(t.assignTexture(o, "map", u.baseColorTexture, St)),
            o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1,
            o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1,
            u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)),
            l.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))),
            a = this._invokeOne(function(f) {
                return f.getMaterialType && f.getMaterialType(e)
            }),
            l.push(Promise.all(this._invokeAll(function(f) {
                return f.extendMaterialParams && f.extendMaterialParams(e, o)
            })))
        }
        r.doubleSided === !0 && (o.side = Ot);
        let h = r.alphaMode || Jl.OPAQUE;
        if (h === Jl.BLEND ? (o.transparent = !0,
        o.depthWrite = !1) : (o.transparent = !1,
        h === Jl.MASK && (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : .5)),
        r.normalTexture !== void 0 && a !== Ft && (l.push(t.assignTexture(o, "normalMap", r.normalTexture)),
        o.normalScale = new ne(1,1),
        r.normalTexture.scale !== void 0)) {
            let u = r.normalTexture.scale;
            o.normalScale.set(u, u)
        }
        if (r.occlusionTexture !== void 0 && a !== Ft && (l.push(t.assignTexture(o, "aoMap", r.occlusionTexture)),
        r.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = r.occlusionTexture.strength)),
        r.emissiveFactor !== void 0 && a !== Ft) {
            let u = r.emissiveFactor;
            o.emissive = new ue().setRGB(u[0], u[1], u[2], Xt)
        }
        return r.emissiveTexture !== void 0 && a !== Ft && l.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, St)),
        Promise.all(l).then(function() {
            let u = new a(o);
            return r.name && (u.name = r.name),
            ii(u, r),
            t.associations.set(u, {
                materials: e
            }),
            r.extensions && Ji(s, u, r),
            u
        })
    }
    createUniqueName(e) {
        let t = ht.sanitizeNodeName(e || "");
        return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0,
        t)
    }
    loadGeometries(e) {
        let t = this
          , n = this.extensions
          , s = this.primitiveCache;
        function r(o) {
            return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(c) {
                return af(c, o, t)
            })
        }
        let a = [];
        for (let o = 0, c = e.length; o < c; o++) {
            let l = e[o]
              , h = Mx(l)
              , u = s[h];
            if (u)
                a.push(u.promise);
            else {
                let f;
                l.extensions && l.extensions[Xe.KHR_DRACO_MESH_COMPRESSION] ? f = r(l) : f = af(new bt, l, t),
                s[h] = {
                    primitive: l,
                    promise: f
                },
                a.push(f)
            }
        }
        return Promise.all(a)
    }
    loadMesh(e) {
        let t = this
          , n = this.json
          , s = this.extensions
          , r = n.meshes[e]
          , a = r.primitives
          , o = [];
        for (let c = 0, l = a.length; c < l; c++) {
            let h = a[c].material === void 0 ? xx(this.cache) : this.getDependency("material", a[c].material);
            o.push(h)
        }
        return o.push(t.loadGeometries(a)),
        Promise.all(o).then(function(c) {
            let l = c.slice(0, c.length - 1)
              , h = c[c.length - 1]
              , u = [];
            for (let d = 0, m = h.length; d < m; d++) {
                let b = h[d], g = a[d], p, x = l[d];
                if (g.mode === xn.TRIANGLES || g.mode === xn.TRIANGLE_STRIP || g.mode === xn.TRIANGLE_FAN || g.mode === void 0)
                    p = r.isSkinnedMesh === !0 ? new La(b,x) : new be(b,x),
                    p.isSkinnedMesh === !0 && p.normalizeSkinWeights(),
                    g.mode === xn.TRIANGLE_STRIP ? p.geometry = Kl(p.geometry, $a) : g.mode === xn.TRIANGLE_FAN && (p.geometry = Kl(p.geometry, Pr));
                else if (g.mode === xn.LINES)
                    p = new Oa(b,x);
                else if (g.mode === xn.LINE_STRIP)
                    p = new Ns(b,x);
                else if (g.mode === xn.LINE_LOOP)
                    p = new Ba(b,x);
                else if (g.mode === xn.POINTS)
                    p = new Fs(b,x);
                else
                    throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + g.mode);
                Object.keys(p.geometry.morphAttributes).length > 0 && yx(p, r),
                p.name = t.createUniqueName(r.name || "mesh_" + e),
                ii(p, r),
                g.extensions && Ji(s, p, g),
                t.assignFinalMaterial(p),
                u.push(p)
            }
            for (let d = 0, m = u.length; d < m; d++)
                t.associations.set(u[d], {
                    meshes: e,
                    primitives: d
                });
            if (u.length === 1)
                return r.extensions && Ji(s, u[0], r),
                u[0];
            let f = new Bt;
            r.extensions && Ji(s, f, r),
            t.associations.set(f, {
                meshes: e
            });
            for (let d = 0, m = u.length; d < m; d++)
                f.add(u[d]);
            return f
        })
    }
    loadCamera(e) {
        let t, n = this.json.cameras[e], s = n[n.type];
        if (!s) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return
        }
        return n.type === "perspective" ? t = new Rt(Jt.radToDeg(s.yfov),s.aspectRatio || 1,s.znear || 1,s.zfar || 2e6) : n.type === "orthographic" && (t = new Mi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),
        n.name && (t.name = this.createUniqueName(n.name)),
        ii(t, n),
        Promise.resolve(t)
    }
    loadSkin(e) {
        let t = this.json.skins[e]
          , n = [];
        for (let s = 0, r = t.joints.length; s < r; s++)
            n.push(this._loadNodeShallow(t.joints[s]));
        return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null),
        Promise.all(n).then(function(s) {
            let r = s.pop()
              , a = s
              , o = []
              , c = [];
            for (let l = 0, h = a.length; l < h; l++) {
                let u = a[l];
                if (u) {
                    o.push(u);
                    let f = new Le;
                    r !== null && f.fromArray(r.array, l * 16),
                    c.push(f)
                } else
                    console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l])
            }
            return new Ua(o,c)
        })
    }
    loadAnimation(e) {
        let t = this.json
          , n = this
          , s = t.animations[e]
          , r = s.name ? s.name : "animation_" + e
          , a = []
          , o = []
          , c = []
          , l = []
          , h = [];
        for (let u = 0, f = s.channels.length; u < f; u++) {
            let d = s.channels[u]
              , m = s.samplers[d.sampler]
              , b = d.target
              , g = b.node
              , p = s.parameters !== void 0 ? s.parameters[m.input] : m.input
              , x = s.parameters !== void 0 ? s.parameters[m.output] : m.output;
            b.node !== void 0 && (a.push(this.getDependency("node", g)),
            o.push(this.getDependency("accessor", p)),
            c.push(this.getDependency("accessor", x)),
            l.push(m),
            h.push(b))
        }
        return Promise.all([Promise.all(a), Promise.all(o), Promise.all(c), Promise.all(l), Promise.all(h)]).then(function(u) {
            let f = u[0]
              , d = u[1]
              , m = u[2]
              , b = u[3]
              , g = u[4]
              , p = [];
            for (let x = 0, v = f.length; x < v; x++) {
                let _ = f[x]
                  , P = d[x]
                  , E = m[x]
                  , R = b[x]
                  , L = g[x];
                if (_ === void 0)
                    continue;
                _.updateMatrix && _.updateMatrix();
                let w = n._createAnimationTracks(_, P, E, R, L);
                if (w)
                    for (let M = 0; M < w.length; M++)
                        p.push(w[M])
            }
            return new qa(r,void 0,p)
        })
    }
    createNodeMesh(e) {
        let t = this.json
          , n = this
          , s = t.nodes[e];
        return s.mesh === void 0 ? null : n.getDependency("mesh", s.mesh).then(function(r) {
            let a = n._getNodeRef(n.meshCache, s.mesh, r);
            return s.weights !== void 0 && a.traverse(function(o) {
                if (o.isMesh)
                    for (let c = 0, l = s.weights.length; c < l; c++)
                        o.morphTargetInfluences[c] = s.weights[c]
            }),
            a
        })
    }
    loadNode(e) {
        let t = this.json
          , n = this
          , s = t.nodes[e]
          , r = n._loadNodeShallow(e)
          , a = []
          , o = s.children || [];
        for (let l = 0, h = o.length; l < h; l++)
            a.push(n.getDependency("node", o[l]));
        let c = s.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", s.skin);
        return Promise.all([r, Promise.all(a), c]).then(function(l) {
            let h = l[0]
              , u = l[1]
              , f = l[2];
            f !== null && h.traverse(function(d) {
                d.isSkinnedMesh && d.bind(f, wx)
            });
            for (let d = 0, m = u.length; d < m; d++)
                h.add(u[d]);
            return h
        })
    }
    _loadNodeShallow(e) {
        let t = this.json
          , n = this.extensions
          , s = this;
        if (this.nodeCache[e] !== void 0)
            return this.nodeCache[e];
        let r = t.nodes[e]
          , a = r.name ? s.createUniqueName(r.name) : ""
          , o = []
          , c = s._invokeOne(function(l) {
            return l.createNodeMesh && l.createNodeMesh(e)
        });
        return c && o.push(c),
        r.camera !== void 0 && o.push(s.getDependency("camera", r.camera).then(function(l) {
            return s._getNodeRef(s.cameraCache, r.camera, l)
        })),
        s._invokeAll(function(l) {
            return l.createNodeAttachment && l.createNodeAttachment(e)
        }).forEach(function(l) {
            o.push(l)
        }),
        this.nodeCache[e] = Promise.all(o).then(function(l) {
            let h;
            if (r.isBone === !0 ? h = new yr : l.length > 1 ? h = new Bt : l.length === 1 ? h = l[0] : h = new vt,
            h !== l[0])
                for (let u = 0, f = l.length; u < f; u++)
                    h.add(l[u]);
            if (r.name && (h.userData.name = r.name,
            h.name = a),
            ii(h, r),
            r.extensions && Ji(n, h, r),
            r.matrix !== void 0) {
                let u = new Le;
                u.fromArray(r.matrix),
                h.applyMatrix4(u)
            } else
                r.translation !== void 0 && h.position.fromArray(r.translation),
                r.rotation !== void 0 && h.quaternion.fromArray(r.rotation),
                r.scale !== void 0 && h.scale.fromArray(r.scale);
            return s.associations.has(h) || s.associations.set(h, {}),
            s.associations.get(h).nodes = e,
            h
        }),
        this.nodeCache[e]
    }
    loadScene(e) {
        let t = this.extensions
          , n = this.json.scenes[e]
          , s = this
          , r = new Bt;
        n.name && (r.name = s.createUniqueName(n.name)),
        ii(r, n),
        n.extensions && Ji(t, r, n);
        let a = n.nodes || []
          , o = [];
        for (let c = 0, l = a.length; c < l; c++)
            o.push(s.getDependency("node", a[c]));
        return Promise.all(o).then(function(c) {
            for (let h = 0, u = c.length; h < u; h++)
                r.add(c[h]);
            let l = h => {
                let u = new Map;
                for (let[f,d] of s.associations)
                    (f instanceof sn || f instanceof Nt) && u.set(f, d);
                return h.traverse(f => {
                    let d = s.associations.get(f);
                    d != null && u.set(f, d)
                }
                ),
                u
            }
            ;
            return s.associations = l(r),
            r
        })
    }
    _createAnimationTracks(e, t, n, s, r) {
        let a = []
          , o = e.name ? e.name : e.uuid
          , c = [];
        Ci[r.path] === Ci.weights ? e.traverse(function(f) {
            f.morphTargetInfluences && c.push(f.name ? f.name : f.uuid)
        }) : c.push(o);
        let l;
        switch (Ci[r.path]) {
        case Ci.weights:
            l = $n;
            break;
        case Ci.rotation:
            l = ei;
            break;
        case Ci.position:
        case Ci.scale:
            l = ti;
            break;
        default:
            switch (n.itemSize) {
            case 1:
                l = $n;
                break;
            case 2:
            case 3:
            default:
                l = ti;
                break
            }
            break
        }
        let h = s.interpolation !== void 0 ? _x[s.interpolation] : Cs
          , u = this._getArrayFromAccessor(n);
        for (let f = 0, d = c.length; f < d; f++) {
            let m = new l(c[f] + "." + Ci[r.path],t.array,u,h);
            s.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(m),
            a.push(m)
        }
        return a
    }
    _getArrayFromAccessor(e) {
        let t = e.array;
        if (e.normalized) {
            let n = Sh(t.constructor)
              , s = new Float32Array(t.length);
            for (let r = 0, a = t.length; r < a; r++)
                s[r] = t[r] * n;
            t = s
        }
        return t
    }
    _createCubicSplineTrackInterpolant(e) {
        e.createInterpolant = function(n) {
            let s = this instanceof ei ? yh : ro;
            return new s(this.times,this.values,this.getValueSize() / 3,n)
        }
        ,
        e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0
    }
}
;
function Ex(i, e, t) {
    let n = e.attributes
      , s = new bn;
    if (n.POSITION !== void 0) {
        let o = t.json.accessors[n.POSITION]
          , c = o.min
          , l = o.max;
        if (c !== void 0 && l !== void 0) {
            if (s.set(new C(c[0],c[1],c[2]), new C(l[0],l[1],l[2])),
            o.normalized) {
                let h = Sh(Gs[o.componentType]);
                s.min.multiplyScalar(h),
                s.max.multiplyScalar(h)
            }
        } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            return
        }
    } else
        return;
    let r = e.targets;
    if (r !== void 0) {
        let o = new C
          , c = new C;
        for (let l = 0, h = r.length; l < h; l++) {
            let u = r[l];
            if (u.POSITION !== void 0) {
                let f = t.json.accessors[u.POSITION]
                  , d = f.min
                  , m = f.max;
                if (d !== void 0 && m !== void 0) {
                    if (c.setX(Math.max(Math.abs(d[0]), Math.abs(m[0]))),
                    c.setY(Math.max(Math.abs(d[1]), Math.abs(m[1]))),
                    c.setZ(Math.max(Math.abs(d[2]), Math.abs(m[2]))),
                    f.normalized) {
                        let b = Sh(Gs[f.componentType]);
                        c.multiplyScalar(b)
                    }
                    o.max(c)
                } else
                    console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
            }
        }
        s.expandByVector(o)
    }
    i.boundingBox = s;
    let a = new nn;
    s.getCenter(a.center),
    a.radius = s.min.distanceTo(s.max) / 2,
    i.boundingSphere = a
}
function af(i, e, t) {
    let n = e.attributes
      , s = [];
    function r(a, o) {
        return t.getDependency("accessor", a).then(function(c) {
            i.setAttribute(o, c)
        })
    }
    for (let a in n) {
        let o = Mh[a] || a.toLowerCase();
        o in i.attributes || s.push(r(n[a], o))
    }
    if (e.indices !== void 0 && !i.index) {
        let a = t.getDependency("accessor", e.indices).then(function(o) {
            i.setIndex(o)
        });
        s.push(a)
    }
    return Ge.workingColorSpace !== Xt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ge.workingColorSpace}" not supported.`),
    ii(i, e),
    Ex(i, e, t),
    Promise.all(s).then(function() {
        return e.targets !== void 0 ? vx(i, e.targets, t) : i
    })
}
var cf = (function() {
    "use strict";
    var i = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb"
      , e = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb"
      , t = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11])
      , n = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
    if (typeof WebAssembly != "object")
        return {
            supported: !1
        };
    var s = WebAssembly.validate(t) ? e : i, r, a = WebAssembly.instantiate(o(s), {}).then(function(p) {
        r = p.instance,
        r.exports.__wasm_call_ctors()
    });
    function o(p) {
        for (var x = new Uint8Array(p.length), v = 0; v < p.length; ++v) {
            var _ = p.charCodeAt(v);
            x[v] = _ > 96 ? _ - 97 : _ > 64 ? _ - 39 : _ + 4
        }
        for (var P = 0, v = 0; v < p.length; ++v)
            x[P++] = x[v] < 60 ? n[x[v]] : (x[v] - 60) * 64 + x[++v];
        return x.buffer.slice(0, P)
    }
    function c(p, x, v, _, P, E) {
        var R = r.exports.sbrk
          , L = v + 3 & -4
          , w = R(L * _)
          , M = R(P.length)
          , I = new Uint8Array(r.exports.memory.buffer);
        I.set(P, M);
        var H = p(w, v, _, M, P.length);
        if (H == 0 && E && E(w, L, _),
        x.set(I.subarray(w, w + v * _)),
        R(w - R(0)),
        H != 0)
            throw new Error("Malformed buffer data: " + H)
    }
    var l = {
        NONE: "",
        OCTAHEDRAL: "meshopt_decodeFilterOct",
        QUATERNION: "meshopt_decodeFilterQuat",
        EXPONENTIAL: "meshopt_decodeFilterExp"
    }
      , h = {
        ATTRIBUTES: "meshopt_decodeVertexBuffer",
        TRIANGLES: "meshopt_decodeIndexBuffer",
        INDICES: "meshopt_decodeIndexSequence"
    }
      , u = []
      , f = 0;
    function d(p) {
        var x = {
            object: new Worker(p),
            pending: 0,
            requests: {}
        };
        return x.object.onmessage = function(v) {
            var _ = v.data;
            x.pending -= _.count,
            x.requests[_.id][_.action](_.value),
            delete x.requests[_.id]
        }
        ,
        x
    }
    function m(p) {
        for (var x = "var instance; var ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(o(s)) + "]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;" + c.toString() + g.toString(), v = new Blob([x],{
            type: "text/javascript"
        }), _ = URL.createObjectURL(v), P = 0; P < p; ++P)
            u[P] = d(_);
        URL.revokeObjectURL(_)
    }
    function b(p, x, v, _, P) {
        for (var E = u[0], R = 1; R < u.length; ++R)
            u[R].pending < E.pending && (E = u[R]);
        return new Promise(function(L, w) {
            var M = new Uint8Array(v)
              , I = f++;
            E.pending += p,
            E.requests[I] = {
                resolve: L,
                reject: w
            },
            E.object.postMessage({
                id: I,
                count: p,
                size: x,
                source: M,
                mode: _,
                filter: P
            }, [M.buffer])
        }
        )
    }
    function g(p) {
        a.then(function() {
            var x = p.data;
            try {
                var v = new Uint8Array(x.count * x.size);
                c(r.exports[x.mode], v, x.count, x.size, x.source, r.exports[x.filter]),
                self.postMessage({
                    id: x.id,
                    count: x.count,
                    action: "resolve",
                    value: v
                }, [v.buffer])
            } catch (_) {
                self.postMessage({
                    id: x.id,
                    count: x.count,
                    action: "reject",
                    value: _
                })
            }
        })
    }
    return {
        ready: a,
        supported: !0,
        useWorkers: function(p) {
            m(p)
        },
        decodeVertexBuffer: function(p, x, v, _, P) {
            c(r.exports.meshopt_decodeVertexBuffer, p, x, v, _, r.exports[l[P]])
        },
        decodeIndexBuffer: function(p, x, v, _) {
            c(r.exports.meshopt_decodeIndexBuffer, p, x, v, _)
        },
        decodeIndexSequence: function(p, x, v, _) {
            c(r.exports.meshopt_decodeIndexSequence, p, x, v, _)
        },
        decodeGltfBuffer: function(p, x, v, _, P, E) {
            c(r.exports[h[P]], p, x, v, _, r.exports[l[E]])
        },
        decodeGltfBufferAsync: function(p, x, v, _, P) {
            return u.length > 0 ? b(p, x, v, h[_], l[P]) : a.then(function() {
                var E = new Uint8Array(p * x);
                return c(r.exports[h[_]], E, p, x, v, r.exports[l[P]]),
                E
            })
        }
    }
}
)();
var ao = class extends Ds {
    constructor() {
        super();
        let e = new Ct;
        e.deleteAttribute("uv");
        let t = new Lt({
            side: Gt
        })
          , n = new Lt
          , s = new zs(16777215,900,28,2);
        s.position.set(.418, 16.199, .3),
        this.add(s);
        let r = new be(e,t);
        r.position.set(-.757, 13.219, .717),
        r.scale.set(31.713, 28.305, 28.591),
        this.add(r);
        let a = new be(e,n);
        a.position.set(-10.906, 2.009, 1.846),
        a.rotation.set(0, -.195, 0),
        a.scale.set(2.328, 7.905, 4.651),
        this.add(a);
        let o = new be(e,n);
        o.position.set(-5.607, -.754, -.758),
        o.rotation.set(0, .994, 0),
        o.scale.set(1.97, 1.534, 3.955),
        this.add(o);
        let c = new be(e,n);
        c.position.set(6.167, .857, 7.803),
        c.rotation.set(0, .561, 0),
        c.scale.set(3.927, 6.285, 3.687),
        this.add(c);
        let l = new be(e,n);
        l.position.set(-2.017, .018, 6.124),
        l.rotation.set(0, .333, 0),
        l.scale.set(2.002, 4.566, 2.064),
        this.add(l);
        let h = new be(e,n);
        h.position.set(2.291, -.756, -2.621),
        h.rotation.set(0, -.286, 0),
        h.scale.set(1.546, 1.552, 1.496),
        this.add(h);
        let u = new be(e,n);
        u.position.set(-2.193, -.369, -5.547),
        u.rotation.set(0, .516, 0),
        u.scale.set(3.875, 3.487, 2.986),
        this.add(u);
        let f = new be(e,Ws(50));
        f.position.set(-16.116, 14.37, 8.208),
        f.scale.set(.1, 2.428, 2.739),
        this.add(f);
        let d = new be(e,Ws(50));
        d.position.set(-16.109, 18.021, -8.207),
        d.scale.set(.1, 2.425, 2.751),
        this.add(d);
        let m = new be(e,Ws(17));
        m.position.set(14.904, 12.198, -1.832),
        m.scale.set(.15, 4.265, 6.331),
        this.add(m);
        let b = new be(e,Ws(43));
        b.position.set(-.462, 8.89, 14.52),
        b.scale.set(4.38, 5.441, .088),
        this.add(b);
        let g = new be(e,Ws(20));
        g.position.set(3.235, 11.486, -12.541),
        g.scale.set(2.5, 2, .1),
        this.add(g);
        let p = new be(e,Ws(100));
        p.position.set(0, 20, 0),
        p.scale.set(1, .1, 1),
        this.add(p)
    }
    dispose() {
        let e = new Set;
        this.traverse(t => {
            t.isMesh && (e.add(t.geometry),
            e.add(t.material))
        }
        );
        for (let t of e)
            t.dispose()
    }
}
;
function Ws(i) {
    let e = new Ft;
    return e.color.setScalar(i),
    e
}
var oo = {
    name: "CopyShader",
    uniforms: {
        tDiffuse: {
            value: null
        },
        opacity: {
            value: 1
        }
    },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`
};
var an = class {
    constructor() {
        this.isPass = !0,
        this.enabled = !0,
        this.needsSwap = !0,
        this.clear = !1,
        this.renderToScreen = !1
    }
    setSize() {}
    render() {
        console.error("THREE.Pass: .render() must be implemented in derived pass.")
    }
    dispose() {}
}
  , Tx = new Mi(-1,1,1,-1,0,1)
  , Eh = class extends bt {
    constructor() {
        super(),
        this.setAttribute("position", new We([-1, 3, 0, -1, -1, 0, 3, -1, 0],3)),
        this.setAttribute("uv", new We([0, 2, 0, 0, 2, 0],2))
    }
}
  , Ax = new Eh
  , Pi = class {
    constructor(e) {
        this._mesh = new be(Ax,e)
    }
    dispose() {
        this._mesh.geometry.dispose()
    }
    render(e) {
        e.render(this._mesh, Tx)
    }
    get material() {
        return this._mesh.material
    }
    set material(e) {
        this._mesh.material = e
    }
}
;
var Xs = class extends an {
    constructor(e, t) {
        super(),
        this.textureID = t !== void 0 ? t : "tDiffuse",
        e instanceof Mt ? (this.uniforms = e.uniforms,
        this.material = e) : e && (this.uniforms = Ri.clone(e.uniforms),
        this.material = new Mt({
            name: e.name !== void 0 ? e.name : "unspecified",
            defines: Object.assign({}, e.defines),
            uniforms: this.uniforms,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader
        })),
        this.fsQuad = new Pi(this.material)
    }
    render(e, t, n) {
        this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture),
        this.fsQuad.material = this.material,
        this.renderToScreen ? (e.setRenderTarget(null),
        this.fsQuad.render(e)) : (e.setRenderTarget(t),
        this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
        this.fsQuad.render(e))
    }
    dispose() {
        this.material.dispose(),
        this.fsQuad.dispose()
    }
}
;
var Dr = class extends an {
    constructor(e, t) {
        super(),
        this.scene = e,
        this.camera = t,
        this.clear = !0,
        this.needsSwap = !1,
        this.inverse = !1
    }
    render(e, t, n) {
        let s = e.getContext()
          , r = e.state;
        r.buffers.color.setMask(!1),
        r.buffers.depth.setMask(!1),
        r.buffers.color.setLocked(!0),
        r.buffers.depth.setLocked(!0);
        let a, o;
        this.inverse ? (a = 0,
        o = 1) : (a = 1,
        o = 0),
        r.buffers.stencil.setTest(!0),
        r.buffers.stencil.setOp(s.REPLACE, s.REPLACE, s.REPLACE),
        r.buffers.stencil.setFunc(s.ALWAYS, a, 4294967295),
        r.buffers.stencil.setClear(o),
        r.buffers.stencil.setLocked(!0),
        e.setRenderTarget(n),
        this.clear && e.clear(),
        e.render(this.scene, this.camera),
        e.setRenderTarget(t),
        this.clear && e.clear(),
        e.render(this.scene, this.camera),
        r.buffers.color.setLocked(!1),
        r.buffers.depth.setLocked(!1),
        r.buffers.color.setMask(!0),
        r.buffers.depth.setMask(!0),
        r.buffers.stencil.setLocked(!1),
        r.buffers.stencil.setFunc(s.EQUAL, 1, 4294967295),
        r.buffers.stencil.setOp(s.KEEP, s.KEEP, s.KEEP),
        r.buffers.stencil.setLocked(!0)
    }
}
  , co = class extends an {
    constructor() {
        super(),
        this.needsSwap = !1
    }
    render(e) {
        e.state.buffers.stencil.setLocked(!1),
        e.state.buffers.stencil.setTest(!1)
    }
}
;
var lo = class {
    constructor(e, t) {
        if (this.renderer = e,
        this._pixelRatio = e.getPixelRatio(),
        t === void 0) {
            let n = e.getSize(new ne);
            this._width = n.width,
            this._height = n.height,
            t = new kt(this._width * this._pixelRatio,this._height * this._pixelRatio,{
                type: rn
            }),
            t.texture.name = "EffectComposer.rt1"
        } else
            this._width = t.width,
            this._height = t.height;
        this.renderTarget1 = t,
        this.renderTarget2 = t.clone(),
        this.renderTarget2.texture.name = "EffectComposer.rt2",
        this.writeBuffer = this.renderTarget1,
        this.readBuffer = this.renderTarget2,
        this.renderToScreen = !0,
        this.passes = [],
        this.copyPass = new Xs(oo),
        this.copyPass.material.blending = Un,
        this.clock = new Hs
    }
    swapBuffers() {
        let e = this.readBuffer;
        this.readBuffer = this.writeBuffer,
        this.writeBuffer = e
    }
    addPass(e) {
        this.passes.push(e),
        e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
    }
    insertPass(e, t) {
        this.passes.splice(t, 0, e),
        e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
    }
    removePass(e) {
        let t = this.passes.indexOf(e);
        t !== -1 && this.passes.splice(t, 1)
    }
    isLastEnabledPass(e) {
        for (let t = e + 1; t < this.passes.length; t++)
            if (this.passes[t].enabled)
                return !1;
        return !0
    }
    render(e) {
        e === void 0 && (e = this.clock.getDelta());
        let t = this.renderer.getRenderTarget()
          , n = !1;
        for (let s = 0, r = this.passes.length; s < r; s++) {
            let a = this.passes[s];
            if (a.enabled !== !1) {
                if (a.renderToScreen = this.renderToScreen && this.isLastEnabledPass(s),
                a.render(this.renderer, this.writeBuffer, this.readBuffer, e, n),
                a.needsSwap) {
                    if (n) {
                        let o = this.renderer.getContext()
                          , c = this.renderer.state.buffers.stencil;
                        c.setFunc(o.NOTEQUAL, 1, 4294967295),
                        this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e),
                        c.setFunc(o.EQUAL, 1, 4294967295)
                    }
                    this.swapBuffers()
                }
                Dr !== void 0 && (a instanceof Dr ? n = !0 : a instanceof co && (n = !1))
            }
        }
        this.renderer.setRenderTarget(t)
    }
    reset(e) {
        if (e === void 0) {
            let t = this.renderer.getSize(new ne);
            this._pixelRatio = this.renderer.getPixelRatio(),
            this._width = t.width,
            this._height = t.height,
            e = this.renderTarget1.clone(),
            e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
        }
        this.renderTarget1.dispose(),
        this.renderTarget2.dispose(),
        this.renderTarget1 = e,
        this.renderTarget2 = e.clone(),
        this.writeBuffer = this.renderTarget1,
        this.readBuffer = this.renderTarget2
    }
    setSize(e, t) {
        this._width = e,
        this._height = t;
        let n = this._width * this._pixelRatio
          , s = this._height * this._pixelRatio;
        this.renderTarget1.setSize(n, s),
        this.renderTarget2.setSize(n, s);
        for (let r = 0; r < this.passes.length; r++)
            this.passes[r].setSize(n, s)
    }
    setPixelRatio(e) {
        this._pixelRatio = e,
        this.setSize(this._width, this._height)
    }
    dispose() {
        this.renderTarget1.dispose(),
        this.renderTarget2.dispose(),
        this.copyPass.dispose()
    }
}
;
var ho = class extends an {
    constructor(e, t, n=null, s=null, r=null) {
        super(),
        this.scene = e,
        this.camera = t,
        this.overrideMaterial = n,
        this.clearColor = s,
        this.clearAlpha = r,
        this.clear = !0,
        this.clearDepth = !1,
        this.needsSwap = !1,
        this._oldClearColor = new ue
    }
    render(e, t, n) {
        let s = e.autoClear;
        e.autoClear = !1;
        let r, a;
        this.overrideMaterial !== null && (a = this.scene.overrideMaterial,
        this.scene.overrideMaterial = this.overrideMaterial),
        this.clearColor !== null && (e.getClearColor(this._oldClearColor),
        e.setClearColor(this.clearColor, e.getClearAlpha())),
        this.clearAlpha !== null && (r = e.getClearAlpha(),
        e.setClearAlpha(this.clearAlpha)),
        this.clearDepth == !0 && e.clearDepth(),
        e.setRenderTarget(this.renderToScreen ? null : n),
        this.clear === !0 && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
        e.render(this.scene, this.camera),
        this.clearColor !== null && e.setClearColor(this._oldClearColor),
        this.clearAlpha !== null && e.setClearAlpha(r),
        this.overrideMaterial !== null && (this.scene.overrideMaterial = a),
        e.autoClear = s
    }
}
;
var lf = {
    name: "LuminosityHighPassShader",
    shaderID: "luminosityHighPass",
    uniforms: {
        tDiffuse: {
            value: null
        },
        luminosityThreshold: {
            value: 1
        },
        smoothWidth: {
            value: 1
        },
        defaultColor: {
            value: new ue(0)
        },
        defaultOpacity: {
            value: 0
        }
    },
    vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`
};
var qs = class i extends an {
    constructor(e, t, n, s) {
        super(),
        this.strength = t !== void 0 ? t : 1,
        this.radius = n,
        this.threshold = s,
        this.resolution = e !== void 0 ? new ne(e.x,e.y) : new ne(256,256),
        this.clearColor = new ue(0,0,0),
        this.renderTargetsHorizontal = [],
        this.renderTargetsVertical = [],
        this.nMips = 5;
        let r = Math.round(this.resolution.x / 2)
          , a = Math.round(this.resolution.y / 2);
        this.renderTargetBright = new kt(r,a,{
            type: rn
        }),
        this.renderTargetBright.texture.name = "UnrealBloomPass.bright",
        this.renderTargetBright.texture.generateMipmaps = !1;
        for (let u = 0; u < this.nMips; u++) {
            let f = new kt(r,a,{
                type: rn
            });
            f.texture.name = "UnrealBloomPass.h" + u,
            f.texture.generateMipmaps = !1,
            this.renderTargetsHorizontal.push(f);
            let d = new kt(r,a,{
                type: rn
            });
            d.texture.name = "UnrealBloomPass.v" + u,
            d.texture.generateMipmaps = !1,
            this.renderTargetsVertical.push(d),
            r = Math.round(r / 2),
            a = Math.round(a / 2)
        }
        let o = lf;
        this.highPassUniforms = Ri.clone(o.uniforms),
        this.highPassUniforms.luminosityThreshold.value = s,
        this.highPassUniforms.smoothWidth.value = .01,
        this.materialHighPassFilter = new Mt({
            uniforms: this.highPassUniforms,
            vertexShader: o.vertexShader,
            fragmentShader: o.fragmentShader
        }),
        this.separableBlurMaterials = [];
        let c = [3, 5, 7, 9, 11];
        r = Math.round(this.resolution.x / 2),
        a = Math.round(this.resolution.y / 2);
        for (let u = 0; u < this.nMips; u++)
            this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),
            this.separableBlurMaterials[u].uniforms.invSize.value = new ne(1 / r,1 / a),
            r = Math.round(r / 2),
            a = Math.round(a / 2);
        this.compositeMaterial = this.getCompositeMaterial(this.nMips),
        this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture,
        this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture,
        this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture,
        this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture,
        this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture,
        this.compositeMaterial.uniforms.bloomStrength.value = t,
        this.compositeMaterial.uniforms.bloomRadius.value = .1;
        let l = [1, .8, .6, .4, .2];
        this.compositeMaterial.uniforms.bloomFactors.value = l,
        this.bloomTintColors = [new C(1,1,1), new C(1,1,1), new C(1,1,1), new C(1,1,1), new C(1,1,1)],
        this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
        let h = oo;
        this.copyUniforms = Ri.clone(h.uniforms),
        this.blendMaterial = new Mt({
            uniforms: this.copyUniforms,
            vertexShader: h.vertexShader,
            fragmentShader: h.fragmentShader,
            blending: Xi,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        }),
        this.enabled = !0,
        this.needsSwap = !1,
        this._oldClearColor = new ue,
        this.oldClearAlpha = 1,
        this.basic = new Ft,
        this.fsQuad = new Pi(null)
    }
    dispose() {
        for (let e = 0; e < this.renderTargetsHorizontal.length; e++)
            this.renderTargetsHorizontal[e].dispose();
        for (let e = 0; e < this.renderTargetsVertical.length; e++)
            this.renderTargetsVertical[e].dispose();
        this.renderTargetBright.dispose();
        for (let e = 0; e < this.separableBlurMaterials.length; e++)
            this.separableBlurMaterials[e].dispose();
        this.compositeMaterial.dispose(),
        this.blendMaterial.dispose(),
        this.basic.dispose(),
        this.fsQuad.dispose()
    }
    setSize(e, t) {
        let n = Math.round(e / 2)
          , s = Math.round(t / 2);
        this.renderTargetBright.setSize(n, s);
        for (let r = 0; r < this.nMips; r++)
            this.renderTargetsHorizontal[r].setSize(n, s),
            this.renderTargetsVertical[r].setSize(n, s),
            this.separableBlurMaterials[r].uniforms.invSize.value = new ne(1 / n,1 / s),
            n = Math.round(n / 2),
            s = Math.round(s / 2)
    }
    render(e, t, n, s, r) {
        e.getClearColor(this._oldClearColor),
        this.oldClearAlpha = e.getClearAlpha();
        let a = e.autoClear;
        e.autoClear = !1,
        e.setClearColor(this.clearColor, 0),
        r && e.state.buffers.stencil.setTest(!1),
        this.renderToScreen && (this.fsQuad.material = this.basic,
        this.basic.map = n.texture,
        e.setRenderTarget(null),
        e.clear(),
        this.fsQuad.render(e)),
        this.highPassUniforms.tDiffuse.value = n.texture,
        this.highPassUniforms.luminosityThreshold.value = this.threshold,
        this.fsQuad.material = this.materialHighPassFilter,
        e.setRenderTarget(this.renderTargetBright),
        e.clear(),
        this.fsQuad.render(e);
        let o = this.renderTargetBright;
        for (let c = 0; c < this.nMips; c++)
            this.fsQuad.material = this.separableBlurMaterials[c],
            this.separableBlurMaterials[c].uniforms.colorTexture.value = o.texture,
            this.separableBlurMaterials[c].uniforms.direction.value = i.BlurDirectionX,
            e.setRenderTarget(this.renderTargetsHorizontal[c]),
            e.clear(),
            this.fsQuad.render(e),
            this.separableBlurMaterials[c].uniforms.colorTexture.value = this.renderTargetsHorizontal[c].texture,
            this.separableBlurMaterials[c].uniforms.direction.value = i.BlurDirectionY,
            e.setRenderTarget(this.renderTargetsVertical[c]),
            e.clear(),
            this.fsQuad.render(e),
            o = this.renderTargetsVertical[c];
        this.fsQuad.material = this.compositeMaterial,
        this.compositeMaterial.uniforms.bloomStrength.value = this.strength,
        this.compositeMaterial.uniforms.bloomRadius.value = this.radius,
        this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors,
        e.setRenderTarget(this.renderTargetsHorizontal[0]),
        e.clear(),
        this.fsQuad.render(e),
        this.fsQuad.material = this.blendMaterial,
        this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture,
        r && e.state.buffers.stencil.setTest(!0),
        this.renderToScreen ? (e.setRenderTarget(null),
        this.fsQuad.render(e)) : (e.setRenderTarget(n),
        this.fsQuad.render(e)),
        e.setClearColor(this._oldClearColor, this.oldClearAlpha),
        e.autoClear = a
    }
    getSeperableBlurMaterial(e) {
        let t = [];
        for (let n = 0; n < e; n++)
            t.push(.39894 * Math.exp(-.5 * n * n / (e * e)) / e);
        return new Mt({
            defines: {
                KERNEL_RADIUS: e
            },
            uniforms: {
                colorTexture: {
                    value: null
                },
                invSize: {
                    value: new ne(.5,.5)
                },
                direction: {
                    value: new ne(.5,.5)
                },
                gaussianCoefficients: {
                    value: t
                }
            },
            vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
            fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`
        })
    }
    getCompositeMaterial(e) {
        return new Mt({
            defines: {
                NUM_MIPS: e
            },
            uniforms: {
                blurTexture1: {
                    value: null
                },
                blurTexture2: {
                    value: null
                },
                blurTexture3: {
                    value: null
                },
                blurTexture4: {
                    value: null
                },
                blurTexture5: {
                    value: null
                },
                bloomStrength: {
                    value: 1
                },
                bloomFactors: {
                    value: null
                },
                bloomTintColors: {
                    value: null
                },
                bloomRadius: {
                    value: 0
                }
            },
            vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
            fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`
        })
    }
}
;
qs.BlurDirectionX = new ne(1,0);
qs.BlurDirectionY = new ne(0,1);
var hf = {
    name: "OutputShader",
    uniforms: {
        tDiffuse: {
            value: null
        },
        toneMappingExposure: {
            value: 1
        }
    },
    vertexShader: `
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: `
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`
};
var uo = class extends an {
    constructor() {
        super();
        let e = hf;
        this.uniforms = Ri.clone(e.uniforms),
        this.material = new Wa({
            name: e.name,
            uniforms: this.uniforms,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader
        }),
        this.fsQuad = new Pi(this.material),
        this._outputColorSpace = null,
        this._toneMapping = null
    }
    render(e, t, n) {
        this.uniforms.tDiffuse.value = n.texture,
        this.uniforms.toneMappingExposure.value = e.toneMappingExposure,
        (this._outputColorSpace !== e.outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e.outputColorSpace,
        this._toneMapping = e.toneMapping,
        this.material.defines = {},
        Ge.getTransfer(this._outputColorSpace) === et && (this.material.defines.SRGB_TRANSFER = ""),
        this._toneMapping === Cl ? this.material.defines.LINEAR_TONE_MAPPING = "" : this._toneMapping === Pl ? this.material.defines.REINHARD_TONE_MAPPING = "" : this._toneMapping === Il ? this.material.defines.CINEON_TONE_MAPPING = "" : this._toneMapping === Cr ? this.material.defines.ACES_FILMIC_TONE_MAPPING = "" : this._toneMapping === Ll ? this.material.defines.AGX_TONE_MAPPING = "" : this._toneMapping === Dl && (this.material.defines.NEUTRAL_TONE_MAPPING = ""),
        this.material.needsUpdate = !0),
        this.renderToScreen === !0 ? (e.setRenderTarget(null),
        this.fsQuad.render(e)) : (e.setRenderTarget(t),
        this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
        this.fsQuad.render(e))
    }
    dispose() {
        this.material.dispose(),
        this.fsQuad.dispose()
    }
}
;
var Qi = ne
  , q = C
  , xt = new Pa({
    antialias: !1,
    powerPreference: "high-performance"
});
xt.setPixelRatio(Math.min(devicePixelRatio, 1.5));
xt.setSize(innerWidth, innerHeight);
xt.toneMapping = Cr;
xt.toneMappingExposure = 1;
xt.shadowMap.enabled = !0;
xt.shadowMap.type = qn;
document.body.appendChild(xt.domElement);
var gt = new Ds;
gt.background = new ue(65794);
gt.fog = new Ia(65794,.0045);
var _t = new Rt(35,innerWidth / innerHeight,.1,2e3)
  , hn = new io(_t,xt.domElement);
hn.enableDamping = !0;
hn.maxPolarAngle = Math.PI * .6;
var Lx = new Ls(xt)
  , Nr = Lx.fromScene(new ao, .04).texture
  , Ys = i => new Ft({
    color: i,
    toneMapped: !1,
    fog: !1
});
var un = {
    wheelRadius: .3,
    wheels: [{
        x: .8374,
        z: 1.3844
    }, {
        x: -.8374,
        z: 1.3844
    }, {
        x: .8374,
        z: -1.3844
    }, {
        x: -.8374,
        z: -1.3844
    }],
    start: {
        x: 4,
        z: -24,
        heading: 0
    }
};
function Hx() {
    let e = document.createElement("canvas");
    e.width = e.height = 512;
    let t = e.getContext("2d")
      , n = 512 / 2;
    t.translate(n, n),
    t.fillStyle = "#0b0b0c",
    t.beginPath(),
    t.arc(0, 0, n, 0, Math.PI * 2),
    t.fill();
    for (let r = 0; r < 6; r++) {
        t.save(),
        t.rotate(r * Math.PI / 3);
        let a = t.createLinearGradient(0, 0, n, 0);
        a.addColorStop(0, "#5a5c60"),
        a.addColorStop(1, "#8a8c90"),
        t.fillStyle = a,
        t.beginPath(),
        t.moveTo(n * .2, -n * .03),
        t.quadraticCurveTo(n * .6, -n * .2, n * .86, -n * .08),
        t.lineTo(n * .86, n * .08),
        t.quadraticCurveTo(n * .6, -n * .02, n * .22, n * .06),
        t.closePath(),
        t.fill(),
        t.restore()
    }
    t.strokeStyle = "#b7aa95",
    t.lineWidth = n * .06,
    t.beginPath(),
    t.arc(0, 0, n * .92, 0, Math.PI * 2),
    t.stroke(),
    t.fillStyle = "#c9bca4",
    t.beginPath(),
    t.arc(0, 0, n * .2, 0, Math.PI * 2),
    t.fill(),
    t.fillStyle = "#1a1a1c",
    t.beginPath(),
    t.arc(0, 0, n * .1, 0, Math.PI * 2),
    t.fill();
    let s = new Os(e);
    return s.colorSpace = St,
    s.anisotropy = 8,
    s
}
function Hh(i) {
    let e = un.wheelRadius
      , t = .252
      , n = .285
      , s = n / 2
      , r = [[t - .008, -s + .015], [t, -s + .004], [e - .018, -s], [e - .004, -s + .018], [e, -s + .045], [e + .001, 0], [e, s - .045], [e - .004, s - .018], [e - .018, s], [t, s - .004], [t - .008, s - .015]].map( ([p,x]) => new ne(p,x))
      , a = new Ha(r,64);
    a.rotateZ(-Math.PI / 2);
    let o = new wr(t,72)
      , c = o.attributes.position;
    for (let p = 0; p < c.count; p++) {
        let x = Math.hypot(c.getX(p), c.getY(p)) / t;
        c.setZ(p, -.022 * (1 - x) * (1 - x))
    }
    o.computeVertexNormals(),
    o.rotateY(Math.PI / 2);
    let l = new Ga(t + .004,.007,6,72);
    l.rotateY(Math.PI / 2),
    Hh.mats ??= [new At({
        color: new ue(.018,.018,.02),
        roughness: .86,
        metalness: 0
    }), new At({
        map: Hx(),
        roughness: .3,
        metalness: .55,
        clearcoat: .5,
        clearcoatRoughness: .16,
        envMap: Nr,
        envMapIntensity: .18
    }), new At({
        color: new ue(.03,.03,.033),
        roughness: .35,
        metalness: .6,
        envMap: Nr,
        envMapIntensity: .18
    })];
    let[h,u,f] = Hh.mats
      , d = new Bt
      , m = new be(a,h)
      , b = new be(o,u)
      , g = new be(l,f);
    b.position.x = i * (n / 2 - .035),
    i < 0 && (b.rotation.y = Math.PI),
    g.position.x = i * (n / 2 - .03);
    for (let p of [m, b, g])
        p.castShadow = p.receiveShadow = !0,
        d.add(p);
    return d
}
function Vx(i) {
    let e = new be(new Ct(1.25,.0085,.015),Ys(new ue(26,27,30)));
    e.position.set(0, .336, 2.236),
    i.add(e);
    let t = .802
      , n = [[-.84, -2.04], [-.835, -2.09], [-.825, -2.123], [-.5, -2.124], [0, -2.124], [.5, -2.124], [.825, -2.123], [.835, -2.09], [.84, -2.04]].map( ([c,l]) => new q(c,t,l))
      , s = new be(new Er(new Bs(n,!1,"centripetal"),96,.0085,6,!1),Ys(new ue(32,.65,.42)));
    s.scale.set(1, 1.35, 1),
    s.position.y = t * (1 - 1.35);
    let r = new be(new Ct(1.66,.022,.012),Ys(new ue(8.5,.18,.12)));
    r.position.set(0, t - .004, -2.121),
    i.add(s, r);
    for (let c of [-1, 1]) {
        let l = new Yi(15922687,170,40,.5,.85,2);
        l.position.set(c * .62, .5, 2.15),
        l.target.position.set(c * .15, 1.8, 12),
        i.add(l, l.target)
    }
    let a = Ys(new ue(9,3.6,.5))
      , o = Ys(new ue(14,.35,.22));
    for (let c of [-1, 1]) {
        let l = new be(new Ct(.014,.018,.055),a);
        l.position.set(c * .962, .565, 1.1);
        let h = new be(new Ct(.012,.012,.16),o);
        h.position.set(c * .915, .445, -1.8),
        h.rotation.set(-.52, c * .12, 0),
        i.add(l, h)
    }
}
var Pe = new Bt;
Pe.position.set(un.start.x, 0, un.start.z);
Pe.rotation.y = un.start.heading;
gt.add(Pe);
new so().setMeshoptDecoder(cf).load("models/roadster.glb", i => {
    let e = new Bt;
    Pe.add(e);
    Pe.userData.body=e;
    let t = {
        Paint: new At({
            color: new ue(.86,.855,.845),
            metalness: .08,
            roughness: .34,
            clearcoat: .35,
            clearcoatRoughness: .18,
            envMap: Nr,
            envMapIntensity: .22,
            side: Ot
        }),
        Glass: new At({
            color: new ue(.18,.105,.055),
            metalness: .58,
            roughness: .09,
            clearcoat: 1,
            clearcoatRoughness: .06,
            envMap: Nr,
            envMapIntensity: .3,
            side: Ot
        }),
        Trim: new At({
            color: new ue(.014,.014,.016),
            metalness: .2,
            roughness: .42,
            envMap: Nr,
            envMapIntensity: .25,
            side: Ot
        })
    };
    i.scene.updateMatrixWorld(!0),
    i.scene.traverse(n => {
        if (!n.isMesh)
            return;
        let s = n.material.name
          , r = s.startsWith("Glass") ? t.Glass : s.startsWith("Trim") ? t.Trim : t.Paint
          , a = new be(n.geometry,r);
        a.applyMatrix4(n.matrixWorld),
        a.castShadow = a.receiveShadow = !0,
        e.add(a)
    }
    );
    for (const [index,n] of un.wheels.entries()) {
        const pivot=new Bt(), wheel=Hh(Math.sign(n.x));
        pivot.position.set(n.x,un.wheelRadius,n.z);pivot.add(wheel);Pe.add(pivot);
        pivot.userData={front:n.z>0,x:n.x,z:n.z,index,spinner:wheel};
        (Pe.userData.wheels??=[]).push(pivot);
    }
    Vx(e),
    Nf(),
    window.__carLoaded = !0
}
);
var Gx = new kt(innerWidth * xt.getPixelRatio(),innerHeight * xt.getPixelRatio(),{
    type: rn,
    samples: 4
})
  , Di = new lo(xt,Gx);
Di.addPass(new ho(gt,_t));
Di.addPass(new Xs({
    uniforms: {
        tDiffuse: {
            value: null
        }
    },
    vertexShader: "varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
    fragmentShader: `uniform sampler2D tDiffuse; varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      bool ok = c.r >= 0.0 && c.r < 1e4 && c.g >= 0.0 && c.g < 1e4 && c.b >= 0.0 && c.b < 1e4;
      gl_FragColor = vec4(ok ? min(c.rgb, vec3(64.0)) : vec3(0.0), 1.0);
    }`
}));
Di.addPass(new qs(new Qi(innerWidth,innerHeight),.22,.12,1.6));
Di.addPass(new uo);
var df=1.6, So=false, Yh=58;
function Kh() {
    let i = innerWidth / innerHeight;
    _t.aspect = i;
    let e = i >= df ? 1 : Math.pow(df / i, i < 1 ? .18 : .5);
    _t.fov = Jt.radToDeg(2 * Math.atan(Math.tan(Jt.degToRad(Yh) / 2) * e)),
    _t.fov = Math.min(_t.fov, 100),
    i < 1 && !So ? _t.setViewOffset(innerWidth, innerHeight, -.075 * innerWidth, 0, innerWidth, innerHeight) : _t.clearViewOffset(),
    _t.updateProjectionMatrix()
}
function wo() {
    Kh(),
    xt.setPixelRatio(Math.min(devicePixelRatio, innerWidth < 900 ? 2 : 1.5)),
    xt.setSize(innerWidth, innerHeight),
    Di.setPixelRatio?.(xt.getPixelRatio()),
    Di.setSize(innerWidth, innerHeight)
}
addEventListener("resize", wo);
addEventListener("orientationchange", () => setTimeout(wo, 200));
visualViewport?.addEventListener("resize", wo);
wo();
var Li={on:true,beams:[]};
addEventListener('keydown',event=>{
 if(event.code!=='KeyL'||event.repeat)return;
 Li.on=!Li.on;Pe.traverse(child=>{if(child.isSpotLight)child.visible=Li.on;});Nf();
});
var on = {}, A = {
    mode: 'ground', x:4, z:-24, yaw:0, v:0, steer:0,
    pos:new q(4,0,-24), vel:new q(), angVel:new q(), quat:new wt(),
    chase:true, flyMode:false, aLong:0, blown:false,
    firing:{level:new Float32Array(14)}
};
addEventListener("keydown", event => {
    const wasDown = on[event.code];
    on[event.code] = true;
    if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(event.code)) event.preventDefault();
    if (event.repeat || wasDown) return;
    if (event.code === "KeyE") toggleFlight(vehicle);
    if (event.code === "KeyR") resetCity();
    if (event.code === "KeyQ") adjustFlightAltitude(vehicle,FLIGHT.altitudeStep);
    if (event.code === "KeyZ") adjustFlightAltitude(vehicle,-FLIGHT.altitudeStep);
    if (event.code === "KeyC") mf(!A.chase);
    if (event.code === "KeyL") Nf();
});
addEventListener("keyup", event => { on[event.code] = false; });
function clearControls() { for (const key of Object.keys(on)) on[key] = false; }
addEventListener("blur", clearControls);
document.addEventListener("visibilitychange", () => { if (document.hidden) clearControls(); });
function mf(i) {
    A.chase = i,
    hn.enabled = !i,
    i || (hn.target.copy(Wh), _t.up.set(0, 1, 0),
    hn.update())
}
function Qx(dt) {
    if(sceneLoading)return;
    syncForest();
    const shifted=!!(on.ShiftLeft||on.ShiftRight);
    const up=!!(on.KeyW||on.ArrowUp),down=!!(on.KeyS||on.ArrowDown);
    const left=!!(on.KeyA||on.ArrowLeft),right=!!(on.KeyD||on.ArrowRight);
    const beforeX=vehicle.x;
    stepVehicle(vehicle, {
        forward:shifted?0:+up,back:shifted?0:+down,
        turn:shifted?0:+right-+left,
        boost:!!on.KeyB||(shifted&&up),descend:!!on.Space,
        climb:!!on.KeyT||(shifted&&down),strafe:shifted?(+left-+right):0
    },dt,activeColliders);
    if(activeScene==='ramp'&&!vehicle.flight&&!vehicle.ramp&&beforeX < -3&&vehicle.x>=-3&&Math.abs(vehicle.z)<1.85&&vehicle.vx>0)attachRamp(vehicle);
    A.mode = vehicle.flight ? "air" : "ground";
    A.flyMode = vehicle.flight; A.x = vehicle.x; A.z = vehicle.z; A.yaw = vehicle.yaw;
    A.v = vehicle.speed; A.steer = vehicle.steer; A.aLong = vehicle.acceleration;
    A.pos.set(vehicle.x,vehicle.y,vehicle.z); A.vel.set(vehicle.vx,vehicle.vy,vehicle.vz);
    A.angVel.set(0,vehicle.yawRate,0);
    A.quat.setFromAxisAngle(new q(0,1,0),vehicle.yaw);
    if(vehicle.flight) A.quat.multiply(new wt().setFromAxisAngle(new q(1,0,0),vehicle.pitch))
      .multiply(new wt().setFromAxisAngle(new q(0,0,1),vehicle.roll));
    if(vehicle.rampFrame){const f=new q(...vehicle.rampFrame.forward),u=new q(...vehicle.rampFrame.up),r=u.clone().cross(f).normalize();A.quat.setFromRotationMatrix(new Le().makeBasis(r,u,f));}
    if(vehicle.rampRecovery){
      const recovery=vehicle.rampRecovery,f=new q(...recovery.frame.forward),u=new q(...recovery.frame.up),r=u.clone().cross(f).normalize();
      const from=new wt().setFromRotationMatrix(new Le().makeBasis(r,u,f));
      const t=Math.min(1,recovery.elapsed/recovery.duration),ease=t*t*(3-2*t);
      if(!recovery.target)recovery.target=new wt().setFromAxisAngle(new q(0,1,0),vehicle.yaw);
      A.quat.copy(from.slerp(recovery.target,ease));
    }
    const jets=vehicle.thrusters, levels=A.firing.level;
    levels.fill(0);levels.fill(jets.rear,0,4);levels.fill(jets.lift,4,8);
    // Opposite front/rear side jets form a yaw couple, rather than a sideways shove.
    levels[8]=Math.min(1,jets.right+jets.strafeRight);levels[11]=Math.min(1,jets.right+jets.strafeLeft);
    levels[9]=Math.min(1,jets.left+jets.strafeLeft);levels[10]=Math.min(1,jets.left+jets.strafeRight);
    levels[12]=levels[13]=jets.front;

}
var Zh = document.createElement("div");
Zh.id = "hud";
var $x = Zh
  , Jh = document.createElement("div");
Jh.id = "keys";
Jh.innerHTML = '<span>WASD drive</span><span id="flight-hint">E take flight</span><span>B boost · C camera · R reset</span>';
Zh.innerHTML = '<div class="hud-label">ROADSTER <span id="drive-status">DRIVE</span></div><div class="speed"><strong id="speed-value">0</strong><span>KM/H</span></div><div class="energy"><div class="energy-label"><span id="charge-phase">THRUST</span><span id="charge-value">100%</span></div><div class="charge-row"><div id="charge-meter" role="progressbar" aria-label="Thruster charge" aria-valuemin="0" aria-valuemax="100"><i id="charge-fill"></i></div><label class="infinite-control" title="Infinite boosters"><input id="infinite-boosters" type="checkbox" aria-label="Infinite boosters"><span aria-hidden="true">∞</span></label></div></div>';
document.body.append(Zh,Jh);
const launchReadout=document.createElement('div');launchReadout.className='launch-readout';launchReadout.textContent='0–60 MPH —';Zh.append(launchReadout);
document.getElementById('infinite-boosters').addEventListener('change',event=>{setInfiniteBoosters(vehicle,event.target.checked);ev(.1);});
var Rh = 0;
function ev(dt) {
    Rh += dt; if (Rh < .1) return; Rh = 0;
    document.getElementById('speed-value').textContent = Math.round(Math.hypot(vehicle.vx,vehicle.vz)*3.6);
    document.getElementById('drive-status').textContent = vehicle.flight ? (vehicle.forcedLanding ? 'RESERVE LANDING' : vehicle.landing ? 'LANDING' : 'FLIGHT · '+vehicle.y.toFixed(0)+' → '+vehicle.altitude.toFixed(0)+' M') : 'DRIVE';
    document.getElementById('flight-hint').textContent=vehicle.forcedLanding?'Auto landing · recharge on ground':vehicle.recharging?'Thrusters recharging':vehicle.flight?'Shift+WASD jets · Q/Z height · Space descend':'E take flight';
    const percent=Math.round((vehicle.infiniteBoosters?1:vehicle.charge)*100);
    document.getElementById('charge-value').textContent=vehicle.infiniteBoosters?'∞':percent+'%';
    document.getElementById('charge-fill').style.transform='scaleX('+(vehicle.infiniteBoosters?1:vehicle.charge)+')';
    document.getElementById('charge-meter').setAttribute('aria-valuenow',percent);
    document.getElementById('charge-phase').textContent=vehicle.infiniteBoosters?'INFINITE':vehicle.forcedLanding?'RESERVE':vehicle.recharging?'RECHARGING':!vehicle.flight&&vehicle.charge<1?'RECOVERING':'THRUST';
    Zh.dataset.low=!vehicle.infiniteBoosters&&vehicle.charge<.2;
    const launch=vehicle.launch;
    launchReadout.textContent=vehicle.z>280?(vehicle.travelled/1000).toFixed(1)+' KM':!launch.valid?'RUN INTERRUPTED':launch.sixtyMph!==null?'0–60 MPH '+launch.sixtyMph.toFixed(2)+' S':launch.active?'0–60 MPH '+launch.elapsed.toFixed(2)+' S':'0–60 MPH —';
    document.querySelector('[data-tap="KeyE"]')?.setAttribute('aria-disabled',String(vehicle.recharging||vehicle.forcedLanding));
}
var xf = new q(0,1,0);
function tv(dt) {
    if (!A.chase) return;
    const forward = new q(Math.sin(vehicle.yaw),0,Math.cos(vehicle.yaw));
    const target = Pe.position.clone().add(new q(0,1.15,0));
    const boomHeight=vehicle.flight?2.6+Math.min(10,vehicle.y*.08):2.6;
    const desired = target.clone().addScaledVector(forward,-8.7).add(new q(0,boomHeight,0));
    // Shorten the camera boom when a building sits behind the car.
    const delta=desired.clone().sub(target); let length=1;
    for(const b of activeColliders) {
      if(b.top<1.5)continue;
      let near=0,far=1;
      for(const [a,min,max] of [['x',b.x-b.hx-.35,b.x+b.hx+.35],['y',b.bottom-.35,b.top+.35],['z',b.z-b.hz-worldOrigin-.35,b.z+b.hz-worldOrigin+.35]]) {
        if(Math.abs(delta[a])<1e-8){if(target[a]<min||target[a]>max){far=-1;break;}}
        else {let t1=(min-target[a])/delta[a],t2=(max-target[a])/delta[a];if(t1>t2)[t1,t2]=[t2,t1];near=Math.max(near,t1);far=Math.min(far,t2);}
      }
      if(near<=far&&near>0)length=Math.min(length,Math.max(.08,near-.05));
    }
    desired.copy(target).addScaledVector(delta,length);
    _t.position.lerp(desired,1-Math.exp(-dt*(length<.99?35:6)));
    _t.up.set(0,1,0);
    Wh.copy(target).addScaledVector(forward,vehicle.flight?1.5:3.5);_t.lookAt(Wh);
}
var Wh = new q
  , Df = matchMedia("(pointer: coarse)").matches || "ontouchstart" in window || navigator.maxTouchPoints > 0 || /[?&]touch\b/.test(location.search);
Df && document.documentElement.classList.add("touch");
So = Df;
Kh();
var Ch = new q
  , Ph = new q;
function nv(i) {
    !So || A.chase || (Ch.copy(Pe.position),
    Ch.y += 1.5,
    Ph.copy(Ch).sub(hn.target).multiplyScalar(1 - Math.exp(-i * 4)),
    hn.target.add(Ph),
    _t.position.add(Ph))
}
( () => {
    let i = document.createElement("div");
    i.id = "pad";
    let e = o => `<svg viewBox="0 0 24 24">${o}</svg>`
      , t = {
        left: e('<path d="M15 5l-7 7 7 7"/>'),
        right: e('<path d="M9 5l7 7-7 7"/>'),
        gas: e('<rect x="7" y="3" width="10" height="18" rx="3"/><path d="M10 8h4M10 12h4M10 16h4"/>'),
        brake: e('<rect x="4" y="7" width="16" height="10" rx="3"/><path d="M8 12h8"/>'),
        flight: e('<path d="M12 3l2 7 7 4v2l-7-2v5l2 2H8l2-2v-5l-7 2v-2l7-4 2-7z"/>'),
        lift: e('<path d="M12 15V4M7.5 8.5L12 4l4.5 4.5"/><path d="M8 19l-1 2M12 19v2M16 19l1 2"/>'),
        drop: e('<path d="M12 3v11M7.5 9.5L12 14l4.5-4.5"/><path d="M5 19h14"/>'),
        boost: e('<path d="M5 6l6 6-6 6M12 6l6 6-6 6"/>'),
        menu: e('<circle cx="6" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="18" cy="12" r="1.2"/>'),
        reset: e('<path d="M4 12a8 8 0 1 0 2.5-5.8"/><path d="M4 4v4h4"/>'),
        cam: e('<rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 11l5-3v8l-5-3"/>'),
        fan: e('<circle cx="12" cy="12" r="1.6"/><path d="M12 10.4C12 6 15 4 17 5.5 18.6 6.8 16.5 10 13.4 11.2M13.4 12.8c3.5 2.4 3.8 6 1.4 6.7-2 .6-3.7-2.8-3.6-6.1M10.6 12.5C6.7 14.6 3.5 13 4.3 10.7c.7-2 4.4-1.9 6.5.4"/>'),
        lamp: e('<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>'),
        debug: e('<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>')
    }
      , n = (o, c, l="", h="") => `<button class="${l}" data-hold="${c}" aria-label="${h}">${t[o]}</button>`
      , s = (o, c, l) => `<button data-tap="${c}" aria-label="${l}">${t[o]}</button>`;
    i.innerHTML = `<div class="grp steer">${n("left", "KeyA", "", "steer left")}${n("right", "KeyD", "", "steer right")}</div><div class="grp jets">${s("flight", "KeyE", "take flight / land")}${n("lift", "KeyT", "", "rise (hold)")}${n("drop", "Space", "", "controlled drop")}${n("boost", "KeyB", "", "rear boost")}</div><div class="grp pedals">${n("brake", "KeyS", "brake", "brake / reverse")}${n("gas", "KeyW", "gas", "throttle")}</div><div class="grp misc"><button data-menu aria-label="more">${t.menu}</button><div class="more">${s("reset", "KeyR", "reset")}${s("cam", "KeyC", "chase camera")}${s("lamp", "KeyL", "lamps")}</div></div>`,
    document.body.appendChild(i);
    let r = (o, c) => dispatchEvent(new KeyboardEvent(o,{
        code: c,
        key: c === "Space" ? " " : c
    }));
    i.querySelectorAll("[data-hold]").forEach(o => {
        let c = o.dataset.hold
          , l = u => {
            u.preventDefault(),
            o.setPointerCapture?.(u.pointerId),
            o.classList.add("on"),
            r("keydown", c)
        }
          , h = u => {
            u.preventDefault(),
            o.classList.remove("on"),
            r("keyup", c)
        }
        ;
        o.addEventListener("pointerdown", l);
        for (let u of ["pointerup", "pointercancel", "lostpointercapture"])
            o.addEventListener(u, h);
        o.addEventListener("contextmenu", u => u.preventDefault())
    }
    ),
    i.querySelectorAll("[data-tap]").forEach(o => o.addEventListener("pointerdown", c => {
        c.preventDefault(),
        r("keydown", o.dataset.tap),
        r("keyup", o.dataset.tap)
    }
    ));
    let a = i.querySelector(".misc");
    i.querySelector("[data-menu]").addEventListener("pointerdown", o => {
        o.preventDefault(),
        a.classList.toggle("open")
    }
    )
}
)();
var oi = document.createElement("div");
oi.id = "dbg";
oi.innerHTML = '<pre></pre><button data-a="copy">Copy</button><button data-a="close">Close</button><span class="ok"></span>';
document.body.appendChild(oi);
var iv = oi.querySelector("pre")
  , Ih = oi.querySelector(".ok");
function Qh(i) {
    oi.classList.toggle("show", i)
}
/[?&]debug\b/.test(location.search) && Qh(!0);
addEventListener("keydown", i => {
    i.code === "Backquote" && Qh(!oi.classList.contains("show"))
}
);
var Ur = i => +i.toFixed(2);
function Uf() {
    let i = A.chase ? Wh : hn.target
      , e = {
        camera: {
            pos: _t.position.toArray().map(Ur),
            target: i.toArray().map(Ur),
            fov: Ur(Yh)
        },
        viewport: [innerWidth, innerHeight],
        effectiveFov: Ur(_t.fov),
        chase: A.chase,
        car: {
            pos: Pe.position.toArray().map(Ur),
            mode: A.mode
        }
    };
    return `{ pos: [${e.camera.pos.join(", ")}], target: [${e.camera.target.join(", ")}], fov: ${e.camera.fov} },  // viewport ${e.viewport.join("x")}, effective fov ${e.effectiveFov}${e.chase ? ", chase cam" : ""}, car [${e.car.pos.join(", ")}] ${e.car.mode}`
}
var Lh = 0;
function sv(i) {
    oi.classList.contains("show") && (Lh += i,
    !(Lh < .1) && (Lh = 0,
    iv.textContent = Uf()))
}
oi.addEventListener("click", async i => {
    let e = i.target.dataset?.a;
    if (e === "close")
        return Qh(!1);
    if (e !== "copy")
        return;
    let t = Uf();
    try {
        await navigator.clipboard.writeText(t),
        Ih.textContent = " copied"
    } catch {
        let n = Object.assign(document.createElement("textarea"), {
            value: t
        });
        document.body.appendChild(n),
        n.select(),
        document.execCommand("copy"),
        n.remove(),
        Ih.textContent = " copied"
    }
    setTimeout( () => Ih.textContent = "", 1200)
}
);
function rv(dt) {
    const body=Pe.userData.body;
    // Suspension moves only the body. Wheels remain upright with their tread on the surface.
    if(body){
      body.rotation.set(vehicle.flight?0:vehicle.pitch,0,vehicle.flight?0:vehicle.roll);
      body.position.y=vehicle.flight?0:.01;
    }
    for(const pivot of Pe.userData.wheels||[]){
      const {x,z,index,spinner}=pivot.userData;
      const rolling=wheelKinematics(vehicle,x,z);
      pivot.rotation.y=vehicle.flight?0:rolling.steer;
      const travel=vehicle.wheelTravel[index];
      // Distance / radius, without the old per-frame spin cap.
      spinner.rotation.x=travel/WHEEL_RADIUS;
      const support=vehicle.ramp?vehicle.y:(vehicle.wheelHeights[index]??vehicle.y);
      pivot.position.y=un.wheelRadius+(vehicle.flight?0:Jt.clamp(support-vehicle.y,-.14,.14));
    }
}
var av = new Hs
  , Xh = !1
  , vf = 0
  , ov = performance.now();
function cv() {
    if (!(Xh || !(Pe.userData.wheels || performance.now() - ov > 12e3))) {
        ++vf < 4 || (Xh = !0,
        document.getElementById("boot").classList.add("done"),
        setTimeout( () => document.getElementById("boot")?.remove(), 900))
    }
}
var To = [];
gt.traverse(i => {
    i.isLight && i.castShadow && To.push(i)
}
);
function Nf() {
    for (let i of To)
        i.shadow.needsUpdate = !0;
    xt.shadowMap.needsUpdate = !0
}
var Mf = new Float64Array(64)
  , Sf = !1;
function dv() {
    let i = 0
      , e = !Sf
      , t = o => {
        Mf[i] !== o && (Mf[i] = o,
        e = !0),
        i++
    }
      , n = _t.position
      , s = _t.quaternion
      , r = Pe.position
      , a = Pe.quaternion;
    t(n.x),
    t(n.y),
    t(n.z),
    t(s.x),
    t(s.y),
    t(s.z),
    t(s.w);
    for (let o of _t.projectionMatrix.elements)
        t(o);
    return t(r.x),
    t(r.y),
    t(r.z),
    t(a.x),
    t(a.y),
    t(a.z),
    t(a.w),
    t(A.steer),
    t(Li.on ? 1 : 0),
    t(innerWidth),
    t(innerHeight),
    t(xt.getPixelRatio()),
    Sf = !0,
    e
}
let accumulator=0;
let previousPose=null;
function fv() {
    const dt=Math.min(av.getDelta(),.05), fixed=1/120;
    accumulator+=dt;
    while(accumulator>=fixed){
       previousPose={pos:A.pos.clone(),quat:A.quat.clone()};
       Qx(fixed);accumulator-=fixed;
    }
    const alpha=accumulator/fixed;
    if(Math.abs(vehicle.z-worldOrigin)>8192)shiftOrigin(Math.floor(vehicle.z/4096)*4096);
    if(previousPose){Pe.position.copy(previousPose.pos).lerp(A.pos,alpha);Pe.position.z-=worldOrigin;Pe.quaternion.copy(previousPose.quat).slerp(A.quat,alpha);}
    rv(dt);tv(dt);nv(dt);cv();ev(dt);sv(dt);
    return dt;
}
var _o = [...[-.45, -.15, .15, .45].map(i => ({
    kind: "rear",
    p: new q(i,.51,-2.14),
    d: new q(0,0,-1)
})), ...[[.66, 1.92], [-.66, 1.92], [.66, -1.86], [-.66, -1.86]].map( ([i,e]) => ({
    kind: "lift",
    p: new q(i,.16,e),
    d: new q(0,-1,0)
})), ...[[1,1.62],[-1,1.62],[1,-1.62],[-1,-1.62]].map(([x,z])=>({
    kind:'side',p:new q(x*1.035,.46,z),d:new q(Math.sign(x),0,0)
})), ...[-.6,.6].map(x=>({kind:'front',p:new q(x,.4,2.29),d:new q(0,0,1)}))]

  , pv = `
  float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
  float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.0-2.0*f);
    return mix(mix(h21(i),h21(i+vec2(1,0)),u.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),u.x), u.y); }
  float fbm(vec2 p){ float a=0.5, s=0.0; for(int k=0;k<5;k++){ s+=a*vnoise(p); p=p*2.03+vec2(1.7,9.2); a*=0.5; } return s; }
`;
function mv(i) {
    return new Mt({
        transparent: !0,
        depthWrite: !1,
        fog: !1,
        blending: i ? Xi : _i,
        uniforms: {
            uScale: {
                value: 1
            },
            uTime: {
                value: 0
            }
        },
        vertexShader: `
      attribute float aSize; attribute float aAlpha; attribute float aSeed; attribute float aAge;
      uniform float uScale;
      varying float vAlpha; varying float vSeed; varying float vAge;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(aSize * uScale / max(0.1, -mv.z), 0.0, 480.0);
        vAlpha = aAlpha; vSeed = aSeed; vAge = aAge;
      }`,
        fragmentShader: `
      uniform float uTime;
      varying float vAlpha; varying float vSeed; varying float vAge;
      ${pv}
      void main(){
        if (vAlpha <= 0.001) discard;
        vec2 uv = gl_PointCoord * 2.0 - 1.0;
        float a0 = vSeed * 6.2831; uv = mat2(cos(a0), -sin(a0), sin(a0), cos(a0)) * uv;
        float r = length(uv);
        ${i ? `
        float a = smoothstep(1.0, 0.0, r); a *= a;
        gl_FragColor = vec4(vec3(0.82, 0.9, 1.0) * 1.3 * a * vAlpha, 1.0);` : `
        // wispy vapour: fbm that slowly churns as the puff ages
        vec2 q = uv * 1.35 + vec2(vSeed * 31.7, vSeed * 17.3);
        float n = fbm(q + vec2(0.0, vAge * 0.6) + fbm(q * 1.7 - vAge * 0.4) * 0.9);
        float edge = smoothstep(1.0, 0.25, r + (n - 0.5) * 0.65);
        float a = edge * smoothstep(0.18, 0.75, n) * smoothstep(1.0, 0.62, r);   // always zero before the quad edge
        vec3 col = mix(vec3(0.58, 0.62, 0.68), vec3(0.97, 0.98, 1.0), smoothstep(0.3, 0.85, n) * (1.0 - r * 0.4));
        gl_FragColor = vec4(col, a * vAlpha);`}
      }`
    })
}
var Mo = class {
    constructor(e, t) {
        this.max = e,
        this.i = 0,
        this.pos = new Float32Array(e * 3),
        this.vel = new Float32Array(e * 3),
        this.age = new Float32Array(e).fill(1e9),
        this.life = new Float32Array(e).fill(1),
        this.s0 = new Float32Array(e),
        this.s1 = new Float32Array(e),
        this.drag = new Float32Array(e),
        this.size = new Float32Array(e),
        this.alpha = new Float32Array(e),
        this.seed = new Float32Array(e),
        this.ageN = new Float32Array(e),
        this.a0 = new Float32Array(e);
        let n = new bt;
        n.setAttribute("position", new ut(this.pos,3).setUsage(Ir)),
        n.setAttribute("aSize", new ut(this.size,1).setUsage(Ir)),
        n.setAttribute("aAlpha", new ut(this.alpha,1).setUsage(Ir)),
        n.setAttribute("aSeed", new ut(this.seed,1)),
        n.setAttribute("aAge", new ut(this.ageN,1).setUsage(Ir)),
        this.points = new Fs(n,mv(t)),
        this.points.frustumCulled = !1,
        this.points.renderOrder = t ? 7 : 6,
        gt.add(this.points)
    }
    emit(e, t, n, s, r, a, o, c) {
        this.busyUntil = Math.max(this.busyUntil || 0, (this.t || 0) + n);
        let l = this.i;
        this.i = (this.i + 1) % this.max,
        this.pos.set([e.x, e.y, e.z], l * 3),
        this.vel.set([t.x, t.y, t.z], l * 3),
        this.age[l] = c,
        this.life[l] = n,
        this.s0[l] = s,
        this.s1[l] = r,
        this.drag[l] = a,
        this.a0[l] = o,
        this.seed[l] = Math.random(),
        this.points.geometry.attributes.aSeed.needsUpdate = !0
    }
    update(e, t, n, s) {
        if (this.t = t,
        !(this.busyUntil > t - .1)) {
            if (!this.cleared) {
                this.alpha.fill(0),
                this.size.fill(0);
                let c = this.points.geometry.attributes;
                c.aAlpha.needsUpdate = c.aSize.needsUpdate = !0,
                this.cleared = !0
            }
            return
        }
        this.cleared = !1;
        let r = this.pos
          , a = this.vel;
        for (let c = 0; c < this.max; c++) {
            if (this.age[c] >= this.life[c]) {
                this.alpha[c] = 0,
                this.size[c] = 0;
                continue
            }
            this.age[c] += e;
            let l = Math.exp(-this.drag[c] * e)
              , h = c * 3
              , u = a[h] * l
              , f = a[h + 1] * l + n * e
              , d = a[h + 2] * l;
            if (s) {
                let _ = r[h] * .7
                  , P = r[h + 1] * .7
                  , E = r[h + 2] * .7;
                u += Math.sin(P * 1.3 + t * .9 + E) * s * e,
                f += Math.sin(E * 1.1 - t * .7 + _) * s * .6 * e,
                d += Math.sin(_ * 1.2 + t * .8 + P) * s * e
            }
            let m = r[h] + u * e
              , b = r[h + 1] + f * e
              , g = r[h + 2] + d * e
              , p = Math.min(1, (this.age[c] + e) / this.life[c])
              , x = .05 + .32 * (this.s0[c] + (this.s1[c] - this.s0[c]) * Math.pow(p, .55));
            if (b < x) {
                let _ = f < -.3;
                b = x;
                let P = _ ? Math.abs(f) * .6 : 0;
                f = Math.max(f, 0) * .05;
                let E = Math.hypot(u, d) || 1;
                u += u / E * P + (Math.random() - .5) * P,
                d += d / E * P + (Math.random() - .5) * P
            }
            r[h] = m,
            r[h + 1] = b,
            r[h + 2] = g,
            a[h] = u,
            a[h + 1] = f,
            a[h + 2] = d;
            let v = Math.min(1, this.age[c] / this.life[c]);
            this.size[c] = this.s0[c] + (this.s1[c] - this.s0[c]) * Math.pow(v, .55),
            this.alpha[c] = this.a0[c] * Math.min(1, v * 5) ** 1.5 * Math.pow(1 - v, 1.6),
            this.ageN[c] = this.age[c]
        }
        let o = this.points.geometry.attributes;
        o.position.needsUpdate = o.aSize.needsUpdate = o.aAlpha.needsUpdate = o.aAge.needsUpdate = !0
    }
}
  , wf = ( () => {
    let i = new Mo(1800,!0)
      , e = new Mo(4500,!1)
      , t = new Si(.065,.085,.12,16,1,!0)
      , n = new Lt({
        color: 723725,
        metalness: .7,
        roughness: .35,
        side: Ot
    })
      , s = [];
    for (let b of _o) {
        let g = new be(t,n);
        g.position.copy(b.p),
        g.quaternion.setFromUnitVectors(new q(0,1,0), b.d),
        Pe.add(g),
        s.push(g)
    }
    const coreGeometry=new Si(.12,.032,1,16,1,true);coreGeometry.translate(0,.5,0);
    const cores=_o.map((nozzle,index)=>{
      const mat=new Mt({transparent:true,depthWrite:false,blending:Xi,side:Ot,toneMapped:false,
        uniforms:{strength:{value:0}},
        vertexShader:'varying vec2 vUv; void main(){vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
        fragmentShader:'varying vec2 vUv; uniform float strength; void main(){float tail=pow(1.0-vUv.y,2.0); float edge=.25+.75*sin(vUv.x*3.14159); float alpha=tail*edge*(.35+.5*strength); gl_FragColor=vec4(mix(vec3(.25,.65,1.),vec3(.85,.95,1.),tail),alpha);}'
      });
      const core=new be(coreGeometry,mat);core.position.copy(nozzle.p).addScaledVector(nozzle.d,.065);
      core.quaternion.setFromUnitVectors(new q(0,1,0),nozzle.d);core.visible=false;core.renderOrder=8;
      core.name='thruster-'+nozzle.kind+'-'+index;Pe.add(core);return core;
    });
    Pe.userData.thrusterCores=cores;
    let r = new Float32Array(_o.length * 2)
      , a = new q
      , o = new q
      , c = 0
      , l = !1
      , h = new q
      , u = new q
      , f = new q
      , d = new q
      , m = new q;
    return {
        update(b, g) {
            Pe.updateMatrixWorld(true);
            c += b,
            l || (a.copy(Pe.position),
            l = !0),
            o.copy(Pe.position).sub(a).divideScalar(Math.max(b, 1e-4)),
            a.copy(Pe.position),
            o.length() > 200 && o.set(0, 0, 0),
            _o.forEach( (x, v) => {
                let _ = g.level[v];
                const core=cores[v];core.visible=_>.015;
                if(core.visible){
                  const pulse=.96+.04*Math.sin(c*67+v*1.8);
                  const length=x.kind==='rear'?1.7:x.kind==='lift'?1.25:.7;
                  core.scale.set(.65+_*1.1,(.15+_*length)*pulse,.65+_*1.1);
                  core.material.uniforms.strength.value=_;
                }
                if (_ < .03) {
                    r[v * 2] = r[v * 2 + 1] = 0;
                    return
                }
                h.copy(x.p).applyMatrix4(Pe.matrixWorld),
                u.copy(x.d).transformDirection(Pe.matrixWorld);
                let P = _ * (x.kind === "side" ? .6 : 1);
                for (r[v * 2] += b * 130 * P,
                r[v * 2 + 1] += b * 65 * P; r[v * 2] >= 1; r[v * 2]--) {
                    let E = Math.random();
                    m.copy(h).addScaledVector(o, -E * b),
                    d.set(Math.random() - .5, Math.random() - .5, Math.random() - .5).multiplyScalar(.18),
                    f.copy(u).add(d).normalize().multiplyScalar(38 * (.85 + Math.random() * .3)).add(o),
                    i.emit(m, f, .05 + Math.random() * .05, .04, .22, 8, .7, E * b)
                }
                for (; r[v * 2 + 1] >= 1; r[v * 2 + 1]--) {
                    let E = Math.random();
                    m.copy(h).addScaledVector(o, -E * b).addScaledVector(u, .15),
                    d.set(Math.random() - .5, Math.random() - .5, Math.random() - .5).multiplyScalar(.45),
                    f.copy(u).add(d).normalize().multiplyScalar(20 * (.6 + Math.random() * .7)).addScaledVector(o, .85),
                    e.emit(m, f, 0.5 + Math.random() * .5, .12, .7 + Math.random() * .6, 2.4, .45, E * b)
                }
            }
            );
            let p = xt.domElement.height / (2 * Math.tan(Jt.degToRad(_t.fov) / 2));
            for (let x of [i, e])
                x.points.material.uniforms.uScale.value = p,
                x.points.material.uniforms.uTime.value = c;
            i.update(b, c, 0, 0),
            e.update(b, c, .35, 2.2)
        },
        shiftOrigin(delta){
            a.z-=delta;
            for(const particles of [i,e]){for(let n=2;n<particles.pos.length;n+=3)particles.pos[n]-=delta;particles.points.geometry.attributes.position.needsUpdate=true;}
        },
        busy() {
            return i.busyUntil > c - .2 || e.busyUntil > c - .2
        }
    }
}
)();
xt.shadowMap.autoUpdate = !1;
for (let i of To)
    i.shadow.autoUpdate = !1;
// Install the only playable environment.

let worldOrigin=0;
const atmosphere=createAtmosphere({Mesh:be,Sphere:Va,Shader:Mt,Color:ue,Vector:q,Hemi:Ya,Sun:Ka,Fog:Ia,Pass:Xs},gt,xt,Di,_t,Nf);
To.length=0;To.push(atmosphere.sun);
const city=buildCity({Group:Bt,Mesh:be,Box:Ct,Material:Lt,Texture:Os,Loader:ja,Instanced:Us,Matrix:Le,Vector:q,Quaternion:wt,Cylinder:Si,Sphere:Va,Color:ue},gt,Nf);
const forest=buildForestRoad({Group:Bt,Mesh:be,Box:Ct,Plane:yi,Cylinder:Si,Material:Lt,Texture:Os,TextureLoader:ja,Instanced:Us,Matrix:Le,Vector:q,Quaternion:wt,Loader:class extends so{constructor(){super();this.setMeshoptDecoder(cf);}},Renderer:Pa,Scene:Ds,Camera:Rt,Hemi:Ya,Sun:Ka,Attribute:We,BasicMaterial:Ft},gt,Nf);
let ramp=null,activeScene='city',sceneLoading=false;
let activeColliders=city.colliders.concat(forest.colliders);
const vehicle=createVehicle();
function syncForest(){if(activeScene==='ramp'){activeColliders=ramp.colliders;return;}if(forest.update(vehicle.z,worldOrigin))activeColliders=city.colliders.concat(forest.colliders);}
function shiftOrigin(next){
    const delta=next-worldOrigin;if(!delta)return;worldOrigin=next;city.group.position.z=-next;
    _t.position.z-=delta;hn.target.z-=delta;Wh.z-=delta;wf.shiftOrigin(delta);
    syncForest();Nf();
}
function resetCity(){
    shiftOrigin(0);
    const unlimited=vehicle.infiniteBoosters;
    Object.assign(vehicle,createVehicle());if(activeScene==='ramp')Object.assign(vehicle,{x:-35,z:0,yaw:Math.PI/2});setInfiniteBoosters(vehicle,unlimited);clearControls();syncForest();
    document.getElementById('infinite-boosters').checked=unlimited;
    A.firing.level.fill(0);A.mode='ground';A.flyMode=false;A.v=0;
    A.pos.set(vehicle.x,0,vehicle.z);A.quat.setFromAxisAngle(new q(0,1,0),vehicle.yaw);A.vel.set(0,0,0);
    A.x=vehicle.x;A.z=vehicle.z;A.yaw=0;A.steer=0;A.blown=false;
    Pe.position.copy(A.pos);Pe.quaternion.copy(A.quat);previousPose=null;accumulator=0;
    _t.position.set(vehicle.x,3.75,vehicle.z-8.7);Wh.set(vehicle.x,1.15,vehicle.z+3.5);_t.lookAt(Wh);
    if(activeScene==='ramp'){mf(false);_t.position.set(-29.5,20,50.3);Wh.set(2,8.5,0);hn.target.copy(Wh);_t.lookAt(Wh);}else mf(true);
    Nf();
}
function selectScene(name){
 activeScene=name==='ramp'?'ramp':'city';
 if(activeScene==='ramp'&&!ramp)ramp=buildRampScene({Group:Bt,Mesh:be,Box:Ct,Cylinder:Si,Material:Lt,TextureLoader:ja,Geometry:bt,Attribute:We,Instanced:Us,Matrix:Le,Vector:q,Quaternion:wt,Hemi:Ya},gt,forest,Nf);
 city.group.visible=activeScene==='city';forest.root.visible=activeScene==='city';if(ramp){ramp.group.visible=activeScene==='ramp';ramp.fill.intensity=activeScene==='ramp'?.9:0;}atmosphere.setPreset(activeScene==='ramp'?1:0);
 for(const tab of document.querySelectorAll('[data-scene]'))tab.setAttribute('aria-pressed',String(tab.dataset.scene===activeScene));resetCity();
}
async function changeScene(name){
 if(sceneLoading||name===activeScene)return;
 const overlay=document.getElementById('scene-loading'),tabs=[...document.querySelectorAll('[data-scene]')];
 sceneLoading=true;clearControls();overlay.hidden=false;tabs.forEach(tab=>tab.disabled=true);
 document.getElementById('scene-loading-text').textContent=`Loading ${name==='ramp'?'original ramp':'city & forest'}…`;
 try{
  // Paint the loading state before building geometry or compiling shaders.
  await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
  selectScene(name);
  await Promise.all([forest.assets,ramp?.ready,new Promise(resolve=>setTimeout(resolve,250))]);
  syncForest();Pe.updateMatrixWorld(true);Nf();Di.render();
  await new Promise(resolve=>requestAnimationFrame(resolve));
 }catch(error){console.error('Scene change failed',error);document.getElementById('scene-loading-text').textContent='Scene could not load. Try again.';await new Promise(resolve=>setTimeout(resolve,1500));}
 finally{sceneLoading=false;clearControls();overlay.hidden=true;tabs.forEach(tab=>tab.disabled=false);av.getDelta();}
}
for(const tab of document.querySelectorAll('[data-scene]'))tab.addEventListener('click',()=>changeScene(tab.dataset.scene));
Yh=58;So=true;Kh();mf(true);resetCity();
window.__RAMP={get car(){return [vehicle.x,vehicle.y,vehicle.z]},get flyMode(){return vehicle.flight},get yaw(){return vehicle.yaw},get cityVisible(){return city.group.visible},get nRamp(){return 0}};
if(/[?&]bench\b/.test(location.search)) window.__dbg={car:Pe,drive:A,vehicle,renderer:xt,scene:gt,composer:Di,camera:_t,controls:hn,city,forest,atmosphere,selectScene,changeScene,get sceneLoading(){return sceneLoading},get activeScene(){return activeScene},get ramp(){return ramp},get origin(){return worldOrigin},get colliders(){return activeColliders},step:Qx,reset:resetCity};
xt.setAnimationLoop(()=>{
    if(document.hidden){av.getDelta();return;}
    if(!A.chase)hn.update();
    const dt=fv();syncForest();Pe.updateMatrixWorld(true);wf.update(dt,A.firing);
    const lightChanged=atmosphere.update(dt,vehicle,worldOrigin,activeColliders);
    // Dynamic shadow refresh includes the moving car, not only static streets.
    if(Math.abs(vehicle.speed)>.05||vehicle.flight)Nf();
    if(dv()||!Xh||wf.busy()||xt.shadowMap.needsUpdate||lightChanged)Di.render();
});
