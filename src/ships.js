//creating the ship class and then creating the actual ships

export class Ships{
    constructor(length) {
        this.position = new Array(length).fill(null);
        this.sunk = false;
    }

    hit(num){
        if (this.position[num] === null) {
            this.position[num] = 'Hit';
        }
        this.isSunk();

    }

    isSunk(){
        for (let i = 0; i < this.position.length; i++) {
            if (this.position[i] === null){
                return
            }
        }
        this.sunk = true;
    }
}


