export function createElementFromString(string) {
    const temp = document.createElement('div');
    temp.innerHTML = string;
    return temp.firstChild;
}