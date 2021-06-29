scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    mySprite.vx += 20
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += -10
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.splash("YOU MADE IT", "People awarded you with a grand trophy")
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx += 10
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
    statusbar.value += -1
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
info.onCountdownEnd(function () {
    game.splash("You didn't make it")
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = 100
})
info.onLifeZero(function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
        . . 4 d 5 d 5 5 5 d d d 4 4 . . 
        . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
        . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
        . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
        . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
        . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
        . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
        . . 2 4 d d 5 5 5 5 d d 5 4 . . 
        . . . 2 2 4 d 5 5 d d 4 4 . . . 
        . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
        . . . 2 2 4 4 4 4 4 4 2 2 . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        `,img`
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 4 4 4 5 5 4 4 4 2 2 2 . 
        . 2 2 5 5 d 4 5 5 5 4 4 4 4 2 . 
        . 2 4 5 5 5 5 d 5 5 5 4 5 4 2 2 
        . 2 4 d d 5 5 5 5 5 5 d 4 4 4 2 
        2 4 5 5 d 5 5 5 d d d 5 5 5 4 4 
        2 4 5 5 4 4 4 d 5 5 d 5 5 5 4 4 
        4 4 4 4 . . 2 4 5 5 . . 4 4 4 4 
        . . b b b b 2 4 4 2 b b b b . . 
        . b d d d d 2 4 4 2 d d d d b . 
        b d d b b b 2 4 4 2 b b b d d b 
        b d d b b b b b b b b b b d d b 
        b b d 1 1 3 1 1 d 1 d 1 1 d b b 
        . . b b d d 1 1 3 d d 1 b b . . 
        . . 2 2 4 4 4 4 4 4 4 4 2 2 . . 
        . . . 2 2 4 4 4 4 4 2 2 2 . . . 
        `,img`
        . . . . . . . . b b . . . . . . 
        . . . . . . . . b b . . . . . . 
        . . . b b b . . . . . . . . . . 
        . . b d d b . . . . . . . b b . 
        . b d d d b . . . . . . b d d b 
        . b d d b . . . . b b . b d d b 
        . b b b . . . . . b b . . b b . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b d d d d d d b b b . . 
        . b d c c c b b b b c c d d b . 
        b d d c b . . . . . b c c d d b 
        c d d b b . . . . . . b c d d c 
        c b d d d b b . . . . b d d c c 
        . c c b d d d d b . c c c c c c 
        . . . c c c c c c . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
})
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
info.startCountdown(30)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 9 6 6 6 6 6 6 c 6 . . . 
    . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
    . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
    . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
    . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
    . 6 8 b b b 8 b b b b 8 6 6 6 6 
    . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
    . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
    . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
    . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
    . 8 f f f f 8 8 8 8 f f f 8 8 8 
    . . f f f f f 8 8 f f f f f 8 . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite)
statusbar.max = 10
info.setLife(10)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)
controller.moveSprite(mySprite, 0, 100)
forever(function () {
    if (info.life() == 10) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 6 6 6 6 . . . . 
            . . . 6 9 6 6 6 6 6 6 c 6 . . . 
            . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
            . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
            . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
            . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
            . 6 8 b b b 8 b b b b 8 6 6 6 6 
            . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
            . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
            . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
            . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
            . 8 f f f f 8 8 8 8 f f f 8 8 8 
            . . f f f f f 8 8 f f f f f 8 . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (info.life() == 5) {
        mySprite.say("Don't Lose")
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 f f 6 6 6 6 . . . . 
            . . . 6 9 f f 6 6 6 6 c 6 . . . 
            . . 6 c 9 f f f 6 6 6 c c 6 . . 
            . 6 c c 9 9 f 9 9 9 6 c c 9 6 d 
            . 6 c 6 8 8 f 8 8 8 8 b c 9 6 6 
            . 6 6 8 b f f b b b f 8 b 9 f f 
            . 6 8 b b b 8 b b b f 8 6 6 6 6 
            . 8 8 6 6 6 8 6 6 6 f 6 8 6 6 6 
            . 8 8 8 8 8 8 f 8 8 f f 8 6 d d 
            . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
            . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
            . 8 f f f f 8 8 8 8 f f f 8 8 8 
            . . f f f f f 8 8 f f f f f 8 . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (info.life() == 3) {
        mySprite.say("I can't ..")
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 f f 6 6 6 6 . . . . 
            . . . 6 9 f f 6 6 f f c 6 . . . 
            . . 6 c 9 f f f 6 f 6 c c 6 . . 
            . 6 c f f f f 9 9 f 6 c c 9 6 d 
            . 6 c 6 f 8 f 8 8 f 8 b c 9 6 6 
            . 6 6 8 f f f b f f f 8 b 9 f f 
            . 6 f b b f 8 b b b f f f 6 6 6 
            . 8 f 6 6 f f f 6 6 f 6 f 6 6 6 
            . 8 f 8 8 f f f 8 8 f f f 6 d d 
            . 8 f f 8 f 8 f 8 8 f 8 8 f 6 d 
            . 8 f f 8 8 8 f f f 8 8 8 f 8 8 
            . 8 f f f f 8 8 8 8 f f f f 8 8 
            . . f f f f f 8 8 f f f f f 8 . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (info.life() == 1) {
        mySprite.say("I can't Hold it anymore!")
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 f f 6 6 6 6 . . . . 
            . . . 6 9 f f 6 6 f f c 6 . . . 
            . . f f f f f f f f f f c 6 . . 
            . f c f f f f 9 9 f f f f 9 6 d 
            . f c f f 8 f f f f f b c f 6 6 
            . f 6 f f f f f f f f 8 b f f f 
            . f f f f f 8 f f b f f f f f f 
            . f f f 6 f f f f f f 6 f f 6 f 
            . f f 8 8 f f f 8 f f f f f d d 
            . f f f 8 f 8 f f f f 8 8 f 6 d 
            . 8 f f 8 8 8 f f f 8 8 f f 8 8 
            . 8 f f f f f f 8 f f f f f 8 8 
            . . f f f f f 8 f f f f f f 8 . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
