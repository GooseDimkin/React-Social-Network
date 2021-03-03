let defaultState = {
    friends: [
        {
            name: 'Alexey Litovchenko',
            avatar: 'https://sun9-39.userapi.com/impg/jsauPoRevsu8bOkIyFxwm6DBwxKaYSG9kV3Lqw/rYaO9e2PT3M.jpg?size=1439x1439&quality=96&proxy=1&sign=2733a94bf1a6048eec65bc8f0be004f1&type=album',
            online: true
        },
        {
            name: 'Daniil Lomeyko',
            avatar: 'https://sun9-72.userapi.com/impg/z1wFDBlBYoMAFGcWplsEUFMayFowLo5dEmBEgw/2T11PdIemP4.jpg?size=720x720&quality=96&proxy=1&sign=0da000833dea30122b16adbb23e4cc26&type=album',
            online: true
        },
        {
            name: 'Katya Sosnina',
            avatar: 'https://sun9-57.userapi.com/impg/qs5bx9_75HuNl77x3ms0_5xcsoId96V7ZEb9Bg/a5nk9olE-Xw.jpg?size=959x960&quality=96&proxy=1&sign=b4e6ceb0096291f9a3e359a8f1946b17&type=album',
            online: false
        },
        {
            name: 'Nadya Lvova',
            avatar: 'https://sun9-48.userapi.com/impg/e5KcbmB_1-zl3ODmAlmJyg0T15Exd1m5FJi5dQ/tjAM-8ydUt4.jpg?size=664x714&quality=96&sign=ab2e60727b82573600d94a4ca772f504&type=album',
            online: false
        },
        {
            name: 'Eliza Starfe',
            avatar: 'https://sun9-2.userapi.com/impg/7SoqaGmAtLcHBFmtis-H8PXQe21VHECbAt4Zkw/uKZONCHDIY8.jpg?size=512x465&quality=96&sign=c64e03310f1d4ff7db7a67f6c1efaf6e&type=album',
            online: false
        },
        {
            name: 'Nikita Brusentsev',
            avatar: 'https://sun9-68.userapi.com/impg/8D8YX6GGy8BedIHwhnqpe0gjgPK1sJfvfcCYxg/eyCAn5q8OTY.jpg?size=622x588&quality=96&sign=7071084f41b467a7769a1c143afe3e9a&type=album',
            online: false
        },
        {
            name: 'Artem Lipatnikov',
            avatar: 'https://sun9-61.userapi.com/impg/rsPbOKCNDnj_6EbAFdZbTctCVBIrDWi2Qa0oxQ/XZGKC8CM9Rs.jpg?size=750x749&quality=96&sign=9bc26b26d52e0a060dd642e526123ef0&type=album',
            online: true
        },
        {
            name: 'Vadim Protsko',
            avatar: 'https://sun9-52.userapi.com/impg/8UeUbYodz-4VLjybLSmcZrIXprJ0frQnRXKqrg/lt-4YrPS5oE.jpg?size=2560x1804&quality=96&sign=964c2b2846d8b23b835d5caca319ed7a&type=album',
            online: false
        },
        {
            name: 'Bezumnaya Lapochka',
            avatar: 'https://sun9-34.userapi.com/impg/aXzyNXFunLNdZE0GL16BkL8MyTUjPkwJ13cyyw/ALtWYtK1QfE.jpg?size=1080x1350&quality=96&sign=df2d193e156afe889a1c29bd01b1523b&type=album',
            online: false
        },
        {
            name: 'Viktor Emmanuilov',
            avatar: 'https://sun9-26.userapi.com/impg/CMxTAMk9qlmAsqTKKHSxtP0klqo_Ud1ghLkhYw/XXsZNyX3jE0.jpg?size=1038x1038&quality=96&sign=f3a19b274b9bf8c53a09b0e645324628&type=album',
            online: true
        },
        {
            name: 'Ilya Kaminsky',
            avatar: 'https://sun9-53.userapi.com/impg/fp9ph4o5443I9SBetRg7LfGredk9yDsV22pyhA/UqXm7epzQ4k.jpg?size=616x625&quality=96&sign=c5875516caa1ca2152a80d0bbc5a0c15&type=album',
            online: true
        },
    ]
}

let FriendsReducer = (state = defaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default FriendsReducer;