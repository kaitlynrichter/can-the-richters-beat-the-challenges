namespace SpriteKind {
    export const trailer = SpriteKind.create()
}
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    scene.setTileMap(levels[2])
})
scene.onHitTile(SpriteKind.Player, 3, function (sprite) {
    scene.setTileMap(levels[3])
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    scene.setTileMap(levels[nextLevel])
})
let levels: Image[] = []
let nextLevel = 0
let choose_character = [img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f 4 4 4 4 f e e e e f 4 4 4 4 f 
    f 4 5 5 4 f e 5 5 e f 4 5 5 4 f 
    f f 5 5 f f f 5 5 f f 4 5 5 4 f 
    f 2 2 2 2 f 7 7 7 7 f 3 3 3 3 f 
    f f 2 2 f f f 7 7 f f f 3 3 f f 
    f f 2 2 f f f 7 7 f f f 3 3 f f 
    f f 1 1 f f f 8 8 f f f c c f f 
    f f 1 1 f f f 8 8 f f f c c f f 
    f f 1 1 f f f 8 8 f f f c c f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `]
scene.setTile(1, img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 1 3 3 3 3 3 3 1 3 3 3 3 
    3 3 3 3 1 3 3 3 3 3 3 1 3 3 3 3 
    3 3 3 3 1 3 3 3 3 3 3 1 3 3 3 3 
    3 3 3 3 1 3 3 3 3 3 3 1 3 3 3 3 
    3 3 3 3 1 3 3 3 3 3 3 1 3 3 3 3 
    3 3 3 3 1 3 3 3 3 3 3 1 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 
    3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 
    3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, true)
scene.setTile(2, img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f 2 2 f f f f f f f 
    f f f f f f f 2 2 f f f f f f f 
    f f f f f f f 2 2 f f f f f f f 
    f f f f f f f 2 2 f f f f f f f 
    f f f f f f f 2 2 f f f f f f f 
    f f f f f f f 2 2 f f f f f f f 
    f f f f f f f 2 2 f f f f f f f 
    f f f f f f f 2 2 f f f f f f f 
    f f f f f f f 2 2 f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, true)
scene.setTile(7, img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f 7 7 7 7 7 f f f f f f 
    f f f f f f f f f 7 f f f f f f 
    f f f f f f f f f 7 f f f f f f 
    f f f f f f f f f 7 f f f f f f 
    f f f f f 7 7 7 7 7 f f f f f f 
    f f f f f 7 f f f f f f f f f f 
    f f f f f 7 f f f f f f f f f f 
    f f f f f 7 f f f f f f f f f f 
    f f f f f 7 7 7 7 7 f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, true)
scene.setTile(3, img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f 3 3 3 3 3 f f f f f f 
    f f f f f f f f f 3 f f f f f f 
    f f f f f f f f f 3 f f f f f f 
    f f f f f f f f f 3 f f f f f f 
    f f f f f 3 3 3 3 3 f f f f f f 
    f f f f f f f f f 3 f f f f f f 
    f f f f f f f f f 3 f f f f f f 
    f f f f f f f f f 3 f f f f f f 
    f f f f f 3 3 3 3 3 f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, true)
nextLevel = 0
let mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f 2 2 2 2 f f f f f f f 
    f f f f 2 2 2 2 2 2 f f f f f f 
    f f f f 2 2 2 2 2 2 f f f f f f 
    f f f f f 2 2 2 2 f f f f f f f 
    f f f f f f 2 2 f f f f f f f f 
    f f f f f f 2 2 f f f f f f f f 
    f f f 2 2 2 2 2 2 2 2 f f f f f 
    f f f f f f 2 2 f f f f f f f f 
    f f f f f f 2 2 f f f f f f f f 
    f f f f f f 2 2 f f f f f f f f 
    f f f f f 2 f f 2 f f f f f f f 
    f f f f 2 f f f f 2 f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
