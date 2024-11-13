const Options = {
    type: 'loop', 
    perPage: 3, 
    perMove: 1, 
    focus: 0, 
    height: 350, 
    gap: 25, 
    autoplay: "true", 
    speed: 1100, 
    breakpoints: {
        960: {
            perPage: 2,
        },
        640: {
            perPage: 1,
        },
    }
}

export default Options