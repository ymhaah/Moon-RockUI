import dimensionsFun from "./dimensions.js";

function itemInfoFun(dimensions) {
    let Dimensions = dimensionsFun(dimensions);
    let arr = [];

    for (let i = 0; i < dimensions; i++) {
        arr.push({});
    }
    class ItemInfo {
        constructor(id, played, player, wining, index, x, y) {
            this.id = id;
            this.played = played;
            this.player = player;
            this.location = {
                index: index,
                x: x,
                y: y,
            };
            this.wining = wining;
        }
    }

    arr.forEach((ele, i) => {
        ele.ItemInfo = new ItemInfo(crypto.randomUUID(), false, null, false, i);
    });

    for (let i = 0; i < Dimensions; i++) {
        let item = i;
        let X = 1;
        for (item; item < dimensions; item = item + Dimensions) {
            arr[item].ItemInfo.location.x = X++;
        }
    }

    for (let i = 0; i < Dimensions; i++) {
        let item = i;
        for (item; item < dimensions; item = item + Dimensions) {
            arr[item].ItemInfo.location.y = i + 1;
        }
    }

    return arr;
}

export default itemInfoFun;
