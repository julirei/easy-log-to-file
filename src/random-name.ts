export const randomName = ():string => {
    const names:Array<string> = ['Julia', 'Elias', 'Jonas', 'Dani', 'Lena', 'Nick']
    return names[Math.floor(Math.random() * names.length)];
}