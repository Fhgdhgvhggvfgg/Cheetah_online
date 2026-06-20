// ==========================================================
// 1. إعدادات الزووم (Zoom Logic)
// ==========================================================
const defaultMinZoomLim = Vars.renderer.minZoom;
const defaultMaxZoomLim = Vars.renderer.maxZoom;
const minZoomLim = 0.5;
const maxZoomLim = 25;

function updateZoom(min, max){
    Vars.renderer.minZoom = min;
    Vars.renderer.maxZoom = max;
}

if(!Vars.headless) updateZoom(minZoomLim, maxZoomLim);

// ==========================================================
// 2. قراءة الإعدادات والمتغيرات
// ==========================================================
const config = JSON.parse(Jval.read(Vars.tree.get("data/config.hjson").readString()));
var active = false;
var table;

// ==========================================================
// 3. دالة إنشاء واجهة التحكم (HUD Table)
// ==========================================================
function newTable() {
    let t = new Table();
    t.bottom().left();
    t.table(Tex.pane, t => {
        let b = new Button(Styles.none);
        let icon = new TextureRegionDrawable(Blocks.switchBlock.uiIcon);
        b.button(icon, () => {});
        t.add(b).size(50, 50);
    });

    t.visibility = () => {
        return Vars.ui.hudfrag.shown && !Vars.ui.consolefrag.shown() && !Vars.ui.minimapfrag.shown() && !Vars.net.client() && (Vars.state.rules.sector == null || config.cheatMode == true);
    };

    t.clicked(() => {
        if (Vars.net.client()) return;
        active = !active;
        Vars.state.rules.editor = active;
    });
    return t;
}

// ==========================================================
// 4. معالجة تحميل اللعبة والأيقونة (الموقع المحسن)
// ==========================================================

// c    f       2      v      1
// a    a      0      e       -
// r     s      _      n
// s     t      k      -
// .     1      e      0


let screenW = 10;


Events.on(ClientLoadEvent, () => {
    table = newTable();
    
Time.run(60, () => {

    let region = Core.atlas.find("cheetah-01-group-photo");
    if(!region.found()) region = Core.atlas.find("cheetah01-group-photo");
    if(!region.found()) region = Core.atlas.find("group-photo");
    
    let powC = Core.atlas.find("cheetah-01-lora-photo");
    if(!powC.found()) powC = Core.atlas.find("cheetah01-lora-photo");
    if(!powC.found()) powC = Core.atlas.find("lora-photo");
    
    let powG = Core.atlas.find("cheetah-01-jeen-photo");
    if(!powG.found()) powG = Core.atlas.find("cheetah01-jeen-photo");
    if(!powG.found()) powG = Core.atlas.find("jeen-photo");
    
    let jon_portrays = Core.atlas.find("cheetah-01-jon_portrays");
    if(!jon_portrays.found()) jon_portrays = Core.atlas.find("cheetah01-jon_portrays");
    if(!jon_portrays.found()) jon_portrays = Core.atlas.find("jon_portrays");

    let lora_hug = Core.atlas.find("cheetah-01-lora_hug");
    if(!lora_hug.found()) lora_hug = Core.atlas.find("cheetah01-lora_hug");
    if(!lora_hug.found()) lora_hug = Core.atlas.find("lora_hug");
    
    let leena_shore = Core.atlas.find("cheetah-01-leena_shore");
    if(!leena_shore.found()) leena_shore = Core.atlas.find("cheetah01-leena_shore");
    if(!leena_shore.found()) leena_shore = Core.atlas.find("leena_shore");    

    let jeff_iran = Core.atlas.find("cheetah-01-jeff_iran");
    if(!jeff_iran.found()) jeff_iran = Core.atlas.find("cheetah01-jeff_iran");
    if(!jeff_iran.found()) jeff_iran = Core.atlas.find("jeff_iran");    




        Vars.ui.menuGroup.fill(Cons(t => {           
t.clear(); // تنظيف الطبقات القديمة 
            t.left().bottom(); // نقطة الصفر أسفل يسار
            
            // --- المتغيرات الخاصة بك ---
            let widthjeX = screenW * 11; 
            let heightjeY = screenW * 13;             
            let posjeX = 0;      
            let posjeY = 120;     
            
            // إضافة الصورة كـ "Cell" داخل الجدول واستخدام الحواف (Padding) للتحريك
            // هذه الطريقة تجبر المحرك على احترام المسافات التي تضعها

            t.image(jeff_iran)
             .size(Scl.scl(widthjeX), Scl.scl(heightjeY))
             .padLeft(Scl.scl(posjeX))
             .padBottom(Scl.scl(posjeY))
             .get().toFront();   
                                   
        }));






        Vars.ui.menuGroup.fill(Cons(t => {           
t.clear(); // تنظيف الطبقات القديمة 
            t.left().top(); // نقطة الصفر أسفل يسار
            
            // --- المتغيرات الخاصة بك ---
            let widthleX = screenW * 12; 
            let heightleY = screenW * 14;             
            let posleX = 0;      
            let posleY = -300;     
            
            // إضافة الصورة كـ "Cell" داخل الجدول واستخدام الحواف (Padding) للتحريك
            // هذه الطريقة تجبر المحرك على احترام المسافات التي تضعها

            t.image(leena_shore)
             .size(Scl.scl(widthleX), Scl.scl(heightleY))
             .padLeft(Scl.scl(posleX))
             .padBottom(Scl.scl(posleY))
             .get().toFront();   
                                   
        }));



        Vars.ui.menuGroup.fill(Cons(t => {           
t.clear(); // تنظيف الطبقات القديمة 
            t.right().bottom(); // نقطة الصفر أسفل يسار
            
            // --- المتغيرات الخاصة بك ---
            let widthlX = screenW * 12; 
            let heightlY = screenW * 18.7;             
            let poslX = 0;      
            let poslY = 280;     
            
            // إضافة الصورة كـ "Cell" داخل الجدول واستخدام الحواف (Padding) للتحريك
            // هذه الطريقة تجبر المحرك على احترام المسافات التي تضعها

            t.image(lora_hug)
             .size(Scl.scl(widthlX), Scl.scl(heightlY))
             .padLeft(Scl.scl(poslX))
             .padBottom(Scl.scl(poslY))
             .get().toFront();  
                                   
           }));                     
                                   
        Vars.ui.menuGroup.fill(Cons(t => {           
t.clear(); // تنظيف الطبقات القديمة 
            t.right().bottom(); // نقطة الصفر أسفل يسار                                   
            // --- المتغيرات الخاصة بك ---
            let sizej = screenW * 15; 
            let posjX = 0;      
            let posjY = 140;     
            
            // إضافة الصورة كـ "Cell" داخل الجدول واستخدام الحواف (Padding) للتحريك
            // هذه الطريقة تجبر المحرك على احترام المسافات التي تضعها

            t.image(jon_portrays)
             .size(sizej)
             .padLeft(Scl.scl(posjX))
             .padBottom(Scl.scl(posjY))
             .get().toFront();      
                                   
        }));
        
    
    
    
            Vars.ui.menuGroup.fill(Cons(t => {           
t.clear(); // تنظيف الطبقات القديمة 
            t.center().bottom(); // نقطة الصفر أسفل يسار
            
            // --- المتغيرات الخاصة بك ---
            let widthX = screenW * 25; 
            let heightY = screenW * 10; 
            let posX = 0;      
            let posY = 10;     
            
            // إضافة الصورة كـ "Cell" داخل الجدول واستخدام الحواف (Padding) للتحريك
            // هذه الطريقة تجبر المحرك على احترام المسافات التي تضعها
            
            
            t.image(region)
             .size(Scl.scl(widthX), Scl.scl(heightY))
             .padLeft(Scl.scl(posX))
             .padBottom(Scl.scl(posY))
             .get().toFront(); 
                                             
        }));
    
    

        Vars.ui.menuGroup.fill(Cons(t => {           
        	t.clear(); // تنظيف الطبقات القديمة 
            t.center().top(); // نقطة الصفر أسفل يسار
            
            
            let icon3Size = screenW * 24;
            let pos3X = 0;      
            let pos3Y = -130;
            
            let icon2Size = screenW * 24;
            let pos2X = 0;      
            let pos2Y = -130;
            
            // إضافة الصورة كـ "Cell" داخل الجدول واستخدام الحواف (Padding) للتحريك
            // هذه الطريقة تجبر المحرك على احترام المسافات التي تضعها
                                   
             t.image(powG)
             .size(icon3Size)
             .padLeft(Scl.scl(pos3X))
             .padBottom(Scl.scl(pos3Y))
             .get().toFront(); 
             
                 t.image(powC)
             .size(icon2Size)
             .padLeft(Scl.scl(pos2X))
             .padBottom(Scl.scl(pos2Y))
             .get().toFront(); 
             
        }));
    
    });
    
});

// ==========================================================
// 5. إدارة الأحداث (Events)
// ==========================================================
Events.on(ResetEvent, () => {
    active = false;
    Vars.state.rules.editor = active;
});

Events.on(WorldLoadEvent, () => {
    active = false;
    let testUtils = Vars.mods.getMod("test-utils");
    let timeControl = Vars.mods.getMod("time-control");
    let upOffset = 0;

    try { Vars.ui.hudGroup.removeChild(table); } catch(e) {}

    if (testUtils != null && testUtils.isSupported() && testUtils.enabled()) {
        upOffset += (Vars.state.rules.sector != null) ? 60 : 120;
    }
    if (timeControl != null && timeControl.isSupported() && timeControl.enabled()) upOffset += 68;
    if (Vars.mobile) upOffset += 46;


    if (!Vars.state.rules.editor) Vars.ui.hudGroup.addChild(table);
    
    
    
    try { table.setPosition(0, 230); } catch(e) {}
});

// ==========================================================
// 6. التحديث المستمر
// ==========================================================
Events.run(Trigger.update, () => {
    if(active && Core.scene.getDialog() == Vars.ui.paused) {
        Vars.state.rules.editor = false;
        active = false;
    }
});


//===========================

const emerald = Vars.tree.loadSound("emerald"); 
    const open_element = Vars.tree.loadSound("open_element");
    let suondN = 4;

// ننتظر حتى تكتمل تحميلات العميل (اللاعب) قبل تسجيل الحدث
Events.on(ClientLoadEvent, e => {

    // 1. حدث تدمير الوحدات
    Events.on(UnitDestroyEvent, event => {
        let core = Vars.player.team().core();
        if (event.unit.team != Vars.player.team()) {
            if (core != null) {
                if (!event.unit.type.flying) {
                    core.items.add(Vars.content.item("cheetah-01-coin"), 5);
                    core.items.add(Vars.content.item("cheetah-01-emerald"), 2);
                    Vars.ui.showInfoFade("you won 2 emeralds");
                    emerald.play(1.0);
                }
            }
        }
    });

    // 2. حدث تدمير المباني
    Events.on(BlockDestroyEvent, event => {
        let core = Vars.player.team().core();
        if (event.tile.team() != Vars.player.team()) {
            if (core != null) {
                // تدمير الأبراج
                if (event.tile.block() instanceof Turret) {
                    core.items.add(Vars.content.item("cheetah-01-coin"), 3);
                    core.items.add(Vars.content.item("cheetah-01-emerald"), 1);
                    Vars.ui.showInfoFade("you won 1 emeralds");
                    emerald.play(1.0);
                }
                // تدمير المصانع
                else if (event.tile.block() instanceof GenericCrafter) {
                    core.items.add(Vars.content.item("cheetah-01-coin"), 1);
                    core.items.add(Vars.content.item("cheetah-01-emerald"), 1);
                    Vars.ui.showInfoFade("you won 1 emeralds");
                    emerald.play(1.0);
                }
                // تدمير مصانع الوحدات
                else if (event.tile.block() instanceof UnitFactory) {
                    core.items.add(Vars.content.item("cheetah-01-coin"), 14);
                    core.items.add(Vars.content.item("cheetah-01-emerald"), 2);
                    Vars.ui.showInfoFade("you won 2 emeralds");
                    emerald.play(1.0);
                }
                // تدمير النواة (الـ Core)
                else if (event.tile.block() instanceof CoreBlock) {
                    core.items.add(Vars.content.item("cheetah-01-coin"), 330);
                    core.items.add(Vars.content.item("cheetah-01-emerald"), 80);
                    Vars.ui.showInfoFade("you won 80 emeralds");
                    emerald.play(1.0);
                }
            }
        }
    });
});



//==============================================
// تحميل واجهة اللعب (game play)
//================================================

Events.on(ClientLoadEvent, function() {
    var iconTable = new Table();
    iconTable.top().left();
    iconTable.setFillParent(true);
    iconTable.touchable = Touchable.disabled;
    
    let selver_logo = Core.atlas.find("cheetah-01-selver_logo");
    if(!selver_logo.found()) selver_logo = Core.atlas.find("cheetah01-selver_logo");
    if(!selver_logo.found()) selver_logo = Core.atlas.find("selver_logo");    
    
     let gold_logo = Core.atlas.find("cheetah-01-gold_logo");
    if(!gold_logo.found()) gold_logo = Core.atlas.find("cheetah01-gold_logo");
    if(!gold_logo.found()) gold_logo = Core.atlas.find("gold_logo");    
    
     let diamond_logo = Core.atlas.find("cheetah-01-diamond_logo");
    if(!diamond_logo.found()) diamond_logo = Core.atlas.find("cheetah01-diamond_logo");
    if(!diamond_logo.found()) diamond_logo = Core.atlas.find("diamond_logo");    
    
    let glass_icon = Core.atlas.find("cheetah-01-glass_icon");
    if(!glass_icon.found()) glass_icon = Core.atlas.find("cheetah01-glass_icon");
    if(!glass_icon.found()) glass_icon = Core.atlas.find("glass_icon");    
    
    
    iconTable.update(function() {
        iconTable.clearChildren();
        
        if (Vars.ui != null && Vars.player != null && Vars.player.unit() != null) {
            var playerUnit = Vars.player.unit();
            var displayIcon = (playerUnit instanceof BlockUnitc) ? playerUnit.tile().block.uiIcon : (playerUnit.type != null ? playerUnit.type.uiIcon : null);

            // 1. أيقونة الوحدة (تعديلك الحالي)


            // 2. شعار اللعبة الرسمي (Mindustry Logo)
            // قمت بوضعه في "سطر جديد" أو بجانبه، يمكنك التحكم بموقعه عبر الـ pad
            

            iconTable.image(diamond_logo)
                .size(300, 100) // الشعار مستطيل لذا نستخدم (العرض، الطول)
                .padLeft(335)   // عدل هذا الرقم لتحريكه أفقياً
                .padTop(10);   // عدل هذا الرقم لتحريكه عمودياً
                
                
                
                            if (displayIcon != null) {
                iconTable.image(displayIcon)
                    .size(64)
                    .padLeft(-40)
                    .padTop(0);
            }
            
                            if (displayIcon != null) {
                iconTable.image(glass_icon)
                    .size(64)
                    .padLeft(-64)
                    .padTop(0);
            }
                
                
        }
    });

    Core.scene.add(iconTable);
});



//====================================
// تنفيذ بكل اطار
//=======================================
// تعريف المتغير خارجاً ليكون عداداً عالمياً

Timer.schedule(() => {
	
               
            if(Vars.state.isGame()){
            let playerCore = Vars.player.team().core();
            if(playerCore != null){
                playerCore.items.add(Vars.content.item("cheetah-01-coin"), 3);
            }
           } 
            
}, 10, 10);
