export class Gameboard {
    constructor() {
        this.coordinates = {
            a1: false, a2: false, a3: false, a4: false, a5: false, a6: false, a7: false, a8: false, a9: false, a10: false,
            b1: false, b2: false, b3: false, b4: false, b5: false, b6: false, b7: false, b8: false, b9: false, b10: false,
            c1: false, c2: false, c3: false, c4: false, c5: false, c6: false, c7: false, c8: false, c9: false, c10: false,
            d1: false, d2: false, d3: false, d4: false, d5: false, d6: false, d7: false, d8: false, d9: false, d10: false,
            e1: false, e2: false, e3: false, e4: false, e5: false, e6: false, e7: false, e8: false, e9: false, e10: false,
            f1: false, f2: false, f3: false, f4: false, f5: false, f6: false, f7: false, f8: false, f9: false, f10: false,
            g1: false, g2: false, g3: false, g4: false, g5: false, g6: false, g7: false, g8: false, g9: false, g10: false,
            h1: false, h2: false, h3: false, h4: false, h5: false, h6: false, h7: false, h8: false, h9: false, h10: false,
            i1: false, i2: false, i3: false, i4: false, i5: false, i6: false, i7: false, i8: false, i9: false, i10: false,
            j1: false, j2: false, j3: false, j4: false, j5: false, j6: false, j7: false, j8: false, j9: false, j10: false
        }
    }

    recieveAttack(location) {
        if (this.coordinates[location] === false) {
            this.coordinates[location] = true;
        } else { 
            return 'Location already hit';
        }
    }
}

