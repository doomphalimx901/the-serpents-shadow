namespace SpriteKind {
    export const golem1 = SpriteKind.create()
    export const golem2 = SpriteKind.create()
    export const boss1 = SpriteKind.create()
    export const shadow = SpriteKind.create()
    export const boom = SpriteKind.create()
    export const mark = SpriteKind.create()
    export const bossblast = SpriteKind.create()
    export const foe = SpriteKind.create()
    export const range = SpriteKind.create()
    export const q1 = SpriteKind.create()
    export const weaponprojct = SpriteKind.create()
    export const grs = SpriteKind.create()
}
namespace StatusBarKind {
    export const minihealth = StatusBarKind.create()
    export const minihealth2 = StatusBarKind.create()
    export const energy2 = StatusBarKind.create()
    export const time = StatusBarKind.create()
    export const playerhealth = StatusBarKind.create()
    export const playerstamina = StatusBarKind.create()
    export const playermagic = StatusBarKind.create()
    export const bosshealth = StatusBarKind.create()
    export const bossstamina = StatusBarKind.create()
    export const foebar = StatusBarKind.create()
    export const foebar2 = StatusBarKind.create()
    export const foebar3 = StatusBarKind.create()
    export const foebar4 = StatusBarKind.create()
    export const foebar5 = StatusBarKind.create()
    export const foebar6 = StatusBarKind.create()
    export const foebar7 = StatusBarKind.create()
    export const foebar8 = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    wincondition = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    if (battle1 == 1) {
        mySprite.y += -10
    } else if (wincondition == 1) {
    	
    } else {
        if (key == 0) {
            mySprite.y += 10
        } else if (key == 1) {
            mySprite.y += -35
            game.splash("sunspear sentinel")
            music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
            music.stopAllSounds()
            music.play(music.createSong(assets.song`bosssong`), music.PlaybackMode.LoopingInBackground)
            battle1 = 1
            minihealth22 = statusbars.create(80, 4, StatusBarKind.minihealth2)
            minihealth22.positionDirection(CollisionDirection.Bottom)
            minihealth22.setOffsetPadding(0, 0)
            minihealth22.max = 250
            minihealth22.value = 250
            minihealth22.setColor(2, 15, 1)
            minihealth22.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
            attack_phase = 1
            golem22.setVelocity(150, 0)
        }
    }
})
sprites.onOverlap(SpriteKind.weaponprojct, SpriteKind.boss1, function (sprite, otherSprite) {
    bossbar.value += damage / 3
    pause(200)
})
scene.onOverlapTile(SpriteKind.golem2, assets.tile`myTile15`, function (sprite, location) {
    if (attack_phase == 1) {
        tiles.placeOnRandomTile(golem22, assets.tile`myTile16`)
        golem22.setVelocity(0, 0)
        stamina = statusbars.create(20, 4, StatusBarKind.Energy)
        stamina.attachToSprite(golem22)
        stamina.value = 0
        recharging = 1
        attack_phase = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    if (wincondition == 1) {
    	
    } else if (bosskey == 1) {
        altattackphase = 1
        wincondition = 0
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
        game.splash("Grand Quetzalcoatl")
        mySprite.y += -37
        bossbar = statusbars.create(100, 6, StatusBarKind.bosshealth)
        bossbar.setColor(2, 15, 1)
        bossbar.positionDirection(CollisionDirection.Bottom)
        bossbar.max = 300
        bossbar.value = 300
        bossbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
        bossblast = sprites.createProjectileFromSprite(assets.image`target`, mySprite, 0, 0)
        bossblast.setKind(SpriteKind.bossblast)
    } else if (bosskey == 0) {
        mySprite.y += 10
        mySprite.sayText("I need a special key", 1000, false)
    }
})
statusbars.onZero(StatusBarKind.bosshealth, function (status) {
    for (let index = 0; index < 8; index++) {
        boss12.startEffect(effects.blizzard, 1000)
    }
    sprites.destroy(boss12, effects.blizzard, 2000)
    game.splash("foe slain")
    battleend = 1
    wincondition = 1
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.bossblast)
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile8`, function (sprite, location) {
    tiles.setTileAt(mySprite2.tilemapLocation(), assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.golem2, assets.tile`myTile11`, function (sprite, location) {
    if (attack_phase == 1) {
        tiles.placeOnRandomTile(golem22, assets.tile`myTile12`)
        golem22.setVelocity(0, 150)
    }
})
statusbars.onZero(StatusBarKind.minihealth2, function (status) {
    wincondition = 1
    weapon = 1
    attack_phase = 0
    golem22.setVelocity(0, 0)
    completion += 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (exousted == 0) {
        attack += 1
        playercombo += 1
        charge = 0
        if (playercombo == 1) {
            statusbar2.value += -10
            if (direction == 4) {
                if (weapon == 0) {
                    mySprite.setImage(assets.image`myImage11`)
                    pause(200)
                    mySprite.setImage(assets.image`myImage24`)
                } else if (weapon == 1) {
                    statusbar3.value += -15
                    mySprite.setImage(assets.image`myImage39`)
                    projectile9 = sprites.createProjectileFromSprite(assets.image`boltt1`, mySprite, 200, 0)
                    projectile9.setKind(SpriteKind.weaponprojct)
                    pause(200)
                    mySprite.setImage(assets.image`myImage41`)
                    playercombo = 0
                }
            } else if (direction == 3) {
                if (weapon == 0) {
                    mySprite.setImage(assets.image`myImage10`)
                    pause(200)
                    mySprite.setImage(assets.image`myImage25`)
                } else if (weapon == 1) {
                    statusbar3.value += -15
                    mySprite.setImage(assets.image`myImage40`)
                    projectile9 = sprites.createProjectileFromSprite(assets.image`boltt0`, mySprite, -200, 0)
                    projectile9.setKind(SpriteKind.weaponprojct)
                    pause(200)
                    mySprite.setImage(assets.image`myImage42`)
                    playercombo = 0
                }
            }
        } else if (playercombo == 2) {
            statusbar2.value += -15
            if (direction == 4) {
                mySprite.setImage(assets.image`myImage21`)
                pause(200)
                mySprite.setImage(assets.image`myImage2`)
            } else if (direction == 3) {
                mySprite.setImage(assets.image`myImage19`)
                pause(200)
                mySprite.setImage(assets.image`myImage0`)
            }
        } else if (playercombo == 3) {
            statusbar2.value += -18
            if (direction == 4) {
                mySprite.setImage(assets.image`myImage22`)
                pause(200)
                mySprite.setImage(assets.image`myImage2`)
                tired = 0
            } else if (direction == 3) {
                mySprite.setImage(assets.image`myImage23`)
                pause(200)
                mySprite.setImage(assets.image`myImage0`)
            }
        }
        combodamage += -10
        attack = 0
    }
})
sprites.onOverlap(SpriteKind.foe, SpriteKind.Player, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(foe)) {
        foe.setImage(assets.image`skeleton3`)
        pause(500)
        foe.follow(mySprite, 0)
        if (mySprite.overlapsWith(foe)) {
            statusbar.value += -15
        }
        foe.setImage(assets.image`skeleton0`)
        pause(200)
        foe.setImage(assets.image`skeleton`)
        foe.follow(mySprite, 45)
    } else if (mySprite.overlapsWith(foe2)) {
        foe2.setImage(assets.image`skeleton3`)
        pause(500)
        foe2.follow(mySprite, 0)
        if (mySprite.overlapsWith(foe2)) {
            statusbar.value += -15
        }
        foe2.setImage(assets.image`skeleton0`)
        pause(200)
        foe2.setImage(assets.image`skeleton`)
        foe2.follow(mySprite, 50)
    } else if (mySprite.overlapsWith(foe3)) {
        foe3.setImage(assets.image`skeleton3`)
        pause(500)
        foe3.follow(mySprite, 0)
        if (mySprite.overlapsWith(foe3)) {
            statusbar.value += -15
        }
        foe3.setImage(assets.image`skeleton0`)
        pause(200)
        foe3.setImage(assets.image`skeleton`)
        foe3.follow(mySprite, 55)
    } else if (mySprite.overlapsWith(elitefoe)) {
        elitefoe.setImage(assets.image`gudskeleton0`)
        pause(500)
        elitefoe.follow(mySprite, 0)
        if (mySprite.overlapsWith(elitefoe)) {
            statusbar.value += -15
        }
        elitefoe.setImage(assets.image`gudskeleton1`)
        projectile7 = sprites.createProjectileFromSprite(assets.image`myImage18`, elitefoe, -150, 0)
        projectile8 = sprites.createProjectileFromSprite(assets.image`myImage17`, elitefoe, 150, 0)
        projectile7.setScale(0.4, ScaleAnchor.Middle)
        projectile8.setScale(0.4, ScaleAnchor.Middle)
        pause(200)
        foe3.setImage(assets.image`gudskeleton`)
        elitefoe.follow(mySprite, 60)
    }
})
statusbars.onZero(StatusBarKind.foebar, function (status) {
    sprites.destroy(foe, effects.disintegrate, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile0`)
    key = 1
    mySprite.sayText("a key, it must unlock something!", 500, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss1, function (sprite, otherSprite) {
    if (attack == 1) {
        bossbar.value += damage
        pause(200)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (weapon == 0) {
        mySprite.setImage(assets.image`myImage0`)
    } else if (weapon == 1) {
        mySprite.setImage(assets.image`myImage38`)
    }
    direction = 3
    playercombo = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile0`)
    mySprite.sayText("a bomb, I might be able to blow something up with this", 2000, false)
    bomb = 1
})
sprites.onOverlap(SpriteKind.weaponprojct, SpriteKind.foe, function (sprite, otherSprite) {
    if (mySprite.overlapsWith(foe)) {
        h1.value += damage / 3
        pause(200)
    } else if (mySprite.overlapsWith(foe2)) {
        h2.value += damage / 3
        pause(200)
    } else if (mySprite.overlapsWith(foe3)) {
        h3.value += damage / 3
        pause(200)
    } else if (mySprite.overlapsWith(elitefoe)) {
        h4.value += damage / 3
        pause(200)
    } else if (mySprite.overlapsWith(rangedfoe)) {
        h5.value += damage / 3
        pause(200)
    } else if (mySprite.overlapsWith(foe4)) {
        h6.value += damage / 3
        pause(200)
    } else if (mySprite.overlapsWith(foe5)) {
        h7.value += damage / 3
        pause(200)
    }
})
statusbars.onZero(StatusBarKind.playerstamina, function (status) {
    if (exousted == 0) {
        exousted = 1
        controller.moveSprite(mySprite, 0, 0)
        statusbar2.setColor(4, 15)
        statusbar2.value = 100
    } else if (exousted == 1) {
        statusbar2.value = 100
        exousted = 0
        controller.moveSprite(mySprite, 100, 100)
        statusbar2.setColor(7, 15)
    }
})
statusbars.onZero(StatusBarKind.foebar4, function (status) {
    sprites.destroy(elitefoe, effects.disintegrate, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    foe2.follow(mySprite, 50)
    elitefoe.follow(mySprite, 65)
})
statusbars.onStatusReached(StatusBarKind.bossstamina, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    if (altattackphase >= 48) {
        altattackphase = 1
        bossstamina.max = 100
        bossstamina.value = 0
        scene.cameraFollowSprite(mySprite)
        mySprite.setFlag(SpriteFlag.StayInScreen, false)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        bossblast = sprites.createProjectileFromSprite(assets.image`target`, mySprite, 0, 0)
        bossblast.setKind(SpriteKind.bossblast)
    } else if (altattackphase >= 14) {
        boss12.follow(mySprite, 0)
        altattackphase += 1
        scene.cameraFollowSprite(boss12)
        mySprite.setFlag(SpriteFlag.StayInScreen, true)
        boss12.setFlag(SpriteFlag.StayInScreen, false)
        tiles.placeOnRandomTile(boss12, assets.tile`myTile3`)
        projectile6 = sprites.createProjectileFromSprite(assets.image`bolt`, boss12, 50 * randint(-1, 1), 50 * randint(-1, 1))
        animation.runImageAnimation(
        projectile6,
        assets.animation`booms`,
        200,
        true
        )
        bossstamina.max = 10
        bossstamina.value = 0
    } else if (altattackphase >= 9) {
        tiles.placeOnRandomTile(boss12, assets.tile`myTile7`)
        boss12.setImage(img`
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
            `)
        pause(500)
        projectile2 = sprites.createProjectileFromSprite(assets.image`myImage30`, boss12, 80, 0)
        projectile3 = sprites.createProjectileFromSprite(assets.image`myImage34`, boss12, -80, 0)
        projectile4 = sprites.createProjectileFromSprite(assets.image`myImage35`, boss12, 0, -80)
        projectile5 = sprites.createProjectileFromSprite(assets.image`myImage36`, boss12, 0, 80)
        bossstamina.value = 0
        altattackphase += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile17`)
})
statusbars.onZero(StatusBarKind.foebar2, function (status) {
    sprites.destroy(foe2, effects.disintegrate, 500)
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    if (exousted == 0) {
        if (direction == 4) {
            mySprite.setImage(assets.image`myImage20`)
        } else if (direction == 3) {
            mySprite.setImage(assets.image`myImage13`)
        }
        charge = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile37`, function (sprite, location) {
    mySprite.x += 10
})
statusbars.onZero(StatusBarKind.playerhealth, function (status) {
    pause(500)
    game.gameOver(false)
    game.setGameOverMessage(false, "You Died")
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (weapon == 0) {
        mySprite.setImage(assets.image`myImage2`)
    } else if (weapon == 1) {
        mySprite.setImage(assets.image`myImage37`)
    }
    direction = 4
    playercombo = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbar.value += -1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    mySprite.y += -10
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    if (bomb > 0) {
        mySprite2 = sprites.create(assets.image`boom`, SpriteKind.boom)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile8`)
        tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile0`)
    } else {
        mySprite.x += 10
        mySprite.sayText("blocked by rubble", 1000, false)
    }
})
statusbars.onZero(StatusBarKind.playermagic, function (status) {
    if (magicdrain == 0) {
        magicdrain = 1
        controller.moveSprite(mySprite, 0, 0)
        statusbar3.setColor(4, 15)
        statusbar3.value = 100
    } else if (magicdrain == 1) {
        statusbar3.value = 100
        magicdrain = 0
        controller.moveSprite(mySprite, 100, 100)
        statusbar3.setColor(8, 15)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setTileAt(mySprite.tilemapLocation(), sprites.dungeon.darkGroundCenter)
    bosskey = 1
    mySprite.sayText("a special key, it must unlock something special!", 1000, false)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (exousted == 0) {
        if (charge == 1) {
            statusbar2.value += -70
            statusbar3.value += -20
        }
        charge = 0
        if (direction == 4) {
            if (weapon == 0) {
                mySprite.setImage(assets.image`myImage2`)
            } else if (weapon == 1) {
                mySprite.setImage(assets.image`myImage37`)
            }
        } else if (direction == 3) {
            if (weapon == 0) {
                mySprite.setImage(assets.image`myImage0`)
            } else if (weapon == 1) {
                mySprite.setImage(assets.image`myImage38`)
            }
        }
    }
})
sprites.onOverlap(SpriteKind.bossblast, SpriteKind.Player, function (sprite, otherSprite) {
    if (altattackphase < 9) {
        if (altattackphase >= 1) {
            altattackphase += 1
            pause(300)
            bossblast.setImage(assets.image`bolt`)
            if (bossblast.overlapsWith(mySprite)) {
                statusbar.value += -34
            }
            pause(500)
            sprites.destroy(bossblast)
            bossblast = sprites.createProjectileFromSprite(assets.image`target`, mySprite, 0, 0)
            bossblast.setKind(SpriteKind.bossblast)
        }
    } else if (altattackphase >= 9) {
        sprites.destroy(bossblast)
        bossstamina = statusbars.create(20, 4, StatusBarKind.bossstamina)
        bossstamina.value = 0
        bossstamina.max = 25
        bossstamina.setColor(5, 15)
        bossstamina.attachToSprite(boss12)
        recharging2 = 1
    }
})
statusbars.onZero(StatusBarKind.foebar3, function (status) {
    sprites.destroy(foe3, effects.disintegrate, 500)
})
statusbars.onStatusReached(StatusBarKind.Energy, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
	
})
sprites.onOverlap(SpriteKind.q1, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    foe.follow(mySprite, 45)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.boom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    foe3.follow(mySprite, 55)
    rangedfoe.follow(mySprite, 10)
    range.follow(rangedfoe, 100)
})
sprites.onOverlap(SpriteKind.golem2, SpriteKind.mark, function (sprite, otherSprite) {
    if (combo <= 3) {
        if (attack_phase == 2) {
            combo += 1
            mark.setImage(assets.image`blast`)
            if (mySprite.overlapsWith(mark)) {
                statusbar.value += -25
            }
            for (let index = 0; index < 4; index++) {
                sprites.destroy(mark, effects.warmRadial, 200)
            }
            pause(500)
            mark = sprites.createProjectileFromSprite(assets.image`target`, mySprite, 0, 0)
            mark.setKind(SpriteKind.mark)
            golem22.follow(mark, 150)
        }
    } else if (combo > 3) {
        stamina.setBarSize(20, 4)
        recharging = 1
        attack_phase = 3
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.golem2, function (sprite, otherSprite) {
    if (attack == 1) {
        if (playercombo == 1) {
            minihealth22.value += damage
            pause(200)
        } else if (playercombo == 2) {
            minihealth22.value += damage + 15
            pause(200)
        } else if (playercombo == 3) {
            minihealth22.value += damage + 25
            pause(200)
        }
    } else if (attack_phase == 1) {
        if (golem22.overlapsWith(mySprite)) {
            statusbar.value += -3
        }
    }
})
let mySprite3: Sprite = null
let projectile: Sprite = null
let mark: Sprite = null
let combo = 0
let recharging2 = 0
let magicdrain = 0
let projectile5: Sprite = null
let projectile4: Sprite = null
let projectile3: Sprite = null
let projectile2: Sprite = null
let projectile6: Sprite = null
let bossstamina: StatusBarSprite = null
let bomb = 0
let projectile8: Sprite = null
let projectile7: Sprite = null
let combodamage = 0
let tired = 0
let projectile9: Sprite = null
let direction = 0
let charge = 0
let playercombo = 0
let attack = 0
let exousted = 0
let completion = 0
let mySprite2: Sprite = null
let battleend = 0
let bossblast: Sprite = null
let recharging = 0
let stamina: StatusBarSprite = null
let bossbar: StatusBarSprite = null
let attack_phase = 0
let minihealth22: StatusBarSprite = null
let battle1 = 0
let wincondition = 0
let h7: StatusBarSprite = null
let h6: StatusBarSprite = null
let foe5: Sprite = null
let foe4: Sprite = null
let h5: StatusBarSprite = null
let h4: StatusBarSprite = null
let h3: StatusBarSprite = null
let h2: StatusBarSprite = null
let h1: StatusBarSprite = null
let elitefoe: Sprite = null
let rangedfoe: Sprite = null
let foe3: Sprite = null
let foe2: Sprite = null
let range: Sprite = null
let foe: Sprite = null
let boss12: Sprite = null
let golem22: Sprite = null
let key = 0
let statusbar3: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let damage = 0
let altattackphase = 0
let weapon = 0
let bosskey = 0
bosskey = 1
weapon = 0
altattackphase = 2
damage = -20
mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)
statusbar = statusbars.create(45, 4, StatusBarKind.playerhealth)
statusbar2 = statusbars.create(30, 4, StatusBarKind.playerstamina)
statusbar3 = statusbars.create(20, 4, StatusBarKind.playermagic)
statusbar.setColor(2, 15, 1)
statusbar2.setColor(7, 15, 1)
statusbar3.setColor(8, 15, 1)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
statusbar.positionDirection(CollisionDirection.Top)
statusbar2.positionDirection(CollisionDirection.Top)
statusbar3.positionDirection(CollisionDirection.Top)
statusbar.setOffsetPadding(-57, 0)
statusbar2.setOffsetPadding(-65, 5)
statusbar3.setOffsetPadding(-70, 10)
controller.moveSprite(mySprite, 110, 110)
tiles.setCurrentTilemap(tilemap`level2`)
music.play(music.createSong(assets.song`music 1`), music.PlaybackMode.LoopingInBackground)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
key = 1
golem22 = sprites.create(assets.image`myImage6`, SpriteKind.golem2)
scene.cameraFollowSprite(mySprite)
animation.runImageAnimation(
golem22,
assets.animation`animation2`,
500,
true
)
tiles.placeOnRandomTile(golem22, assets.tile`myTile2`)
boss12 = sprites.create(assets.image`snake 2`, SpriteKind.boss1)
animation.runImageAnimation(
boss12,
assets.animation`snake2`,
500,
true
)
tiles.placeOnRandomTile(boss12, assets.tile`myTile3`)
foe = sprites.create(assets.image`skeleton`, SpriteKind.foe)
range = sprites.create(assets.image`attack`, SpriteKind.range)
foe2 = sprites.create(assets.image`skeleton`, SpriteKind.foe)
foe3 = sprites.create(assets.image`skeleton`, SpriteKind.foe)
rangedfoe = sprites.create(assets.image`skeleton1`, SpriteKind.foe)
elitefoe = sprites.create(assets.image`gudskeleton`, SpriteKind.foe)
tiles.placeOnRandomTile(foe, assets.tile`myTile24`)
tiles.placeOnRandomTile(foe2, assets.tile`myTile28`)
tiles.placeOnRandomTile(foe3, assets.tile`myTile27`)
tiles.placeOnRandomTile(elitefoe, assets.tile`myTile25`)
tiles.placeOnRandomTile(rangedfoe, assets.tile`myTile26`)
tiles.placeOnRandomTile(range, assets.tile`myTile26`)
range.setFlag(SpriteFlag.GhostThroughWalls, true)
h1 = statusbars.create(20, 4, StatusBarKind.foebar)
h2 = statusbars.create(20, 4, StatusBarKind.foebar2)
h3 = statusbars.create(20, 4, StatusBarKind.foebar3)
h4 = statusbars.create(20, 4, StatusBarKind.foebar4)
h5 = statusbars.create(20, 4, StatusBarKind.foebar5)
h4.setBarBorder(1, 5)
h1.setColor(2, 15, 1)
h2.setColor(2, 15, 1)
h3.setColor(2, 15, 1)
h4.setColor(2, 15, 1)
h5.setColor(2, 15, 1)
h1.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
h2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
h3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
h4.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
h5.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
h1.attachToSprite(foe)
h2.attachToSprite(foe2)
h3.attachToSprite(foe3)
h4.attachToSprite(elitefoe)
h5.attachToSprite(rangedfoe)
h4.value = 170
foe4 = sprites.create(assets.image`snake 2`, SpriteKind.foe)
foe5 = sprites.create(assets.image`snake 2`, SpriteKind.foe)
let foe6 = sprites.create(assets.image`snake 2`, SpriteKind.foe)
animation.runImageAnimation(
foe4,
assets.animation`skane`,
500,
true
)
animation.runImageAnimation(
foe5,
assets.animation`skane`,
500,
true
)
animation.runImageAnimation(
foe6,
assets.animation`snake2`,
500,
true
)
tiles.placeOnRandomTile(foe5, assets.tile`myTile31`)
tiles.placeOnRandomTile(foe4, assets.tile`myTile32`)
tiles.placeOnRandomTile(foe6, assets.tile`myTile33`)
h6 = statusbars.create(20, 4, StatusBarKind.foebar6)
h7 = statusbars.create(20, 4, StatusBarKind.foebar7)
let h8 = statusbars.create(20, 4, StatusBarKind.foebar8)
h6.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
h7.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
h8.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
h6.setColor(2, 15, 1)
h7.setColor(2, 15, 1)
h8.setColor(2, 15, 1)
h6.attachToSprite(foe4)
h7.attachToSprite(foe5)
h8.attachToSprite(foe6)
game.onUpdate(function () {
    if (playercombo == 3) {
        playercombo = 0
        combodamage = 0
    }
})
game.onUpdate(function () {
    if (charge == 2) {
        charge = 1
    }
})
game.onUpdateInterval(0.1, function () {
    if (attack_phase == 3) {
        projectile = sprites.createProjectileFromSprite(assets.image`laser`, golem22, 0, 120)
        golem22.setImage(assets.image`myImage8`)
        sprites.destroy(mark)
        combo = 0
    }
})
game.onUpdateInterval(2000, function () {
    for (let index = 0; index < 10; index++) {
        mySprite3 = sprites.create(assets.image`laser0`, SpriteKind.Projectile)
        tiles.placeOnRandomTile(mySprite3, assets.tile`myTile22`)
        mySprite3.setVelocity(0, 120)
        mySprite3.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
game.onUpdateInterval(1000, function () {
    combodamage = 0
})
forever(function () {
    if (exousted == 1) {
        statusbar2.value += -1
        statusbar3.value += -1
    }
})
forever(function () {
    if (playercombo == 0) {
        statusbar2.value += 0.25
    } else if (charge == 0) {
        statusbar2.value += 0.25
    }
})
forever(function () {
    if (recharging2 == 1) {
        bossstamina.value += 1
    }
})
forever(function () {
    if (recharging == 1) {
        stamina.value += 1
    }
})
forever(function () {
    if (completion == 1) {
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        game.splash("foe slain")
        completion = 0
        battle1 = 0
        minihealth22.setBarSize(1, 1)
        golem22.startEffect(effects.blizzard, 2000)
        golem22.startEffect(effects.blizzard, 2000)
        golem22.startEffect(effects.blizzard, 2000)
        golem22.startEffect(effects.blizzard, 2000)
        golem22.startEffect(effects.blizzard, 2000)
        sprites.destroy(golem22, effects.blizzard, 2000)
    }
})
forever(function () {
    if (battleend == 1) {
        bossstamina.value = 0
    }
})
forever(function () {
    if (golem22.isHittingTile(CollisionDirection.Top)) {
        if (attack_phase == 3) {
            golem22.setVelocity(50, 0)
        }
    }
})
forever(function () {
    if (magicdrain == 0) {
        statusbar3.value += 0.05
    } else if (magicdrain == 1) {
        statusbar3.value += -1
    }
})
forever(function () {
    if (attack == 1) {
        if (mySprite.overlapsWith(foe)) {
            h1.value += damage + combodamage
            pause(200)
        } else if (mySprite.overlapsWith(foe2)) {
            h2.value += damage + combodamage
            pause(200)
        } else if (mySprite.overlapsWith(foe3)) {
            h3.value += damage + combodamage
            pause(200)
        } else if (mySprite.overlapsWith(elitefoe)) {
            h4.value += damage + combodamage
            pause(200)
        } else if (mySprite.overlapsWith(rangedfoe)) {
            h5.value += damage + combodamage
            pause(200)
        } else if (mySprite.overlapsWith(foe4)) {
            h6.value += damage + combodamage
            pause(200)
        } else if (mySprite.overlapsWith(foe5)) {
            h7.value += damage + combodamage
            pause(200)
        }
    }
})
forever(function () {
    if (combo >= 3) {
        stamina.setBarSize(20, 4)
        recharging = 1
    }
})
forever(function () {
    if (golem22.isHittingTile(CollisionDirection.Right)) {
        if (attack_phase == 3) {
            stamina.setBarSize(20, 4)
            recharging = 1
            attack_phase = 4
        }
    }
})
