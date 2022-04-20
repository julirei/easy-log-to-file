export const randomName = () => {
    const names = ['Julia', 'Elias', 'Jonas', 'Dani', 'Lena', 'Nick'];
    return names[Math.floor(Math.random() * names.length)];
};
