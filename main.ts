input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
    if (input.lightLevel() >= 128 && input.temperature() >= 25) {
        images.createBigImage(`
            . . . . . . . # # #
            . . . . . . . . . #
            . . # . # . . . # #
            . . . . . . . . . .
            . . # # # . . . # .
            `).scrollImage(1, 400)
    } else {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . . . . .
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (input.lightLevel() >= 110 && input.temperature() >= 10) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
