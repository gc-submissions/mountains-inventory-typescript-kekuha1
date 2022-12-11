interface Mountain{
    name: string;
    height: number;
    }
const mountains: Mountain[]=[
    {name: "Kilimanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310},
];
function findNameOfTallestMountain(mountainArray: Mountain[]){
    let tallestIndex = 0;
    for(
        let i = 1; i < mountainArray.length; i++)
    {
        if(mountainArray[i].height > mountainArray[tallestIndex].height)
        tallestIndex = i;
    }   
    return mountainArray[tallestIndex].name;
}
const tallestMountain = findNameOfTallestMountain(mountains)
console.log(tallestMountain)

export {Mountain, findNameOfTallestMountain};
