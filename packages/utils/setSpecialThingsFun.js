function setSpecialThings(
    specialThings,
    fatherSons,
    specialThingsFunction,
    unSpecialThingsFunction
) {
    let specialThingsArr = Array.isArray(specialThings)
        ? specialThings
        : [specialThings];

    let fatherSonsArr = Array.isArray(fatherSons) ? fatherSons : [fatherSons];

    // fatherSonsArr.forEach((son, i) => {
    //     if (specialThingsArr.length === 1) {
    //         // only one special element
    //         if (son === specialThingsArr[0]) {
    //             specialThingsFunction(son);
    //         } else {
    //             unSpecialThingsFunction(son);
    //         }
    //     } else {
    //         // there is more than one special element
    //         specialThingsArr.forEach((specialThing) => {
    //             if (son === specialThing) {
    //                 specialThingsFunction(specialThing);
    //                 return;
    //             } else {
    //                 unSpecialThingsFunction(son);
    //             }
    //         });
    //     }
    // });

    for (let fatherSon = 0; fatherSon < fatherSonsArr.length; fatherSon++) {
        if (specialThingsArr.length === 1) {
            // only one special element
            if (fatherSonsArr[fatherSon] == specialThingsArr[0]) {
                specialThingsFunction(fatherSonsArr[fatherSon]);
            } else if (fatherSonsArr[fatherSon] != specialThingsArr[0]) {
                unSpecialThingsFunction(fatherSonsArr[fatherSon]);
            }
        } else {
            let unSpecialElement = [];
            let match = false;
            for (let i = 0; i < specialThingsArr.length; i++) {
                if (specialThingsArr[i] == fatherSonsArr[fatherSon]) {
                    match = true;
                    break;
                }
            }
            if (!match) {
                unSpecialElement.push(fatherSonsArr[fatherSon]);
            }
            specialThingsArr.forEach((specialThing) => {
                specialThingsFunction(specialThing);
            });
            unSpecialElement.forEach((unSpecial) => {
                unSpecialThingsFunction(unSpecial);
            });
        }
    }
}

let s = [3, 4];
let f = [1, 2, 3, 4, 5];

setSpecialThings(
    s,
    f,
    (s) => {
        // console.log(s, "s");
    },
    (f) => {
        // console.log(f, "f");
    }
);

export default setSpecialThings;
