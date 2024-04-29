class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.lefteyesX = this.bodyX - 35;
        this.lefteyesY = this.bodyY - 40;

        this.righteyesX = this.bodyX + 35;
        this.righteyesY = this.bodyY - 40;

        this.leftearsX = this.bodyX - 35;
        this.leftearsY = this.bodyY - 125;

        this.rightearsX = this.bodyX + 35;
        this.rightearsY = this.bodyY - 125;

        this.noseX = this.bodyX;
        this.noseY = this.bodyY + 10;

        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 60;

        this.fangsX = this.bodyX;
        this.fangsY = this.bodyY + 60;

        this.leftarmX = this.bodyX - 100;
        this.leftarmY = this.bodyY + 50;

        this.rightarmX = this.bodyX + 100;
        this.rightarmY = this.bodyY + 50;
        
        this.leftlegX = this.bodyX - 50;
        this.leftlegY = this.bodyY + 150;

        this.rightlegX = this.bodyX + 50;
        this.rightlegY = this.bodyY + 150;

        this.fKey = null;
        this.sKey = null;
        this.aKey = null;
        this.dKey = null;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        
        my.sprite.leftarm = this.add.sprite(this.leftarmX, this.leftarmY, "monsterParts", "arm_darkD.png");
        my.sprite.leftarm.flipX = true;   // flip sprite to have thumb on correct side
        my.sprite.leftarm.rotation = -100; 
        my.sprite.rightarm = this.add.sprite(this.rightarmX, this.rightarmY, "monsterParts", "arm_darkD.png");
        my.sprite.rightarm.rotation = 100;
        
        my.sprite.leftleg = this.add.sprite(this.leftlegX, this.leftlegY, "monsterParts", "leg_darkC.png");
        my.sprite.leftleg.flipX = true;   // flip sprite to have thumb on correct side
        my.sprite.rightleg = this.add.sprite(this.rightlegX, this.rightlegY, "monsterParts", "leg_darkC.png");
        
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_darkF.png");
        
        my.sprite.lefteyes = this.add.sprite(this.lefteyesX, this.lefteyesY, "monsterParts", "eye_red.png");
        my.sprite.lefteyes.flipX = true;   // flip sprite to have thumb on correct side
        my.sprite.righteyes = this.add.sprite(this.righteyesX, this.righteyesY, "monsterParts", "eye_red.png");
        
        my.sprite.leftears = this.add.sprite(this.leftearsX, this.leftearsY, "monsterParts", "detail_dark_antenna_large.png");
        my.sprite.leftears.flipX = true;   // flip sprite to have thumb on correct side
        my.sprite.rightears = this.add.sprite(this.rightearsX, this.rightearsY, "monsterParts", "detail_dark_antenna_large.png");
        
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_brown.png");

        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthA.png");

        my.sprite.fangs = this.add.sprite(this.fangsX, this.fangsY, "monsterParts", "mouthB.png");
        
        my.sprite.fangs.visible = false;

        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (Phaser.Input.Keyboard.JustDown(this.fKey)){
            my.sprite.fangs.visible = true;
            my.sprite.smile.visible = false;
        }
        if (Phaser.Input.Keyboard.JustDown(this.sKey)){
            my.sprite.fangs.visible = false;
            my.sprite.smile.visible = true;
        }
        if (Phaser.Input.Keyboard.JustDown(this.aKey)){
            my.sprite.leftarm.x -= 20;
            my.sprite.leftleg.x -= 20;
            my.sprite.rightarm.x -= 20;
            my.sprite.rightleg.x -=20;
            my.sprite.body.x -= 20;
            my.sprite.fangs.x -= 20;
            my.sprite.lefteyes.x -= 20;
            my.sprite.leftears.x -= 20;
            my.sprite.righteyes.x -= 20;
            my.sprite.rightears.x -= 20;
            my.sprite.nose.x -= 20;
            my.sprite.smile.x -= 20;
        }
        if (Phaser.Input.Keyboard.JustDown(this.dKey)){
            my.sprite.leftarm.x += 20;
            my.sprite.leftleg.x += 20;
            my.sprite.rightarm.x += 20;
            my.sprite.rightleg.x +=20;
            my.sprite.body.x += 20;
            my.sprite.fangs.x += 20;
            my.sprite.lefteyes.x += 20;
            my.sprite.leftears.x += 20;
            my.sprite.righteyes.x += 20;
            my.sprite.rightears.x += 20;
            my.sprite.nose.x += 20;
            my.sprite.smile.x += 20;
        }
        
       
    }

}