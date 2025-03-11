---
outline: deep
---

# World
Functions related to the world.

## Auto Activate Teleport
::: info
Automatically activate teleport point in range.
:::

### Enabled `<Hotkeys>`
> Enables [Auto Activate Teleport](#auto-activate-teleport)

### Delay (ms)
> Set the delay for [Auto Activate Teleport](#auto-activate-teleport)
### Range (m)
> Set the range for [Auto Activate Teleport](#auto-activate-teleport)

## Auto Challenge
::: info
Automatically collect challenge gadgets such as elemental particles.
:::
### Enabled `<Hotkeys>`
> Enables [Auto Challenge](#auto-challenge)

<p align="center">
<img src='/features/Auto_Challenge.webp' width=80%>
</p>

### Destroy Bomb `<Hotkeys>`
> Auto destroy bomb barrel

::: warning
Using this function maybe at risk.
:::

<p align="center">
<img src='/features/Destroy_Bomb.webp' width=80%>
</p>

### Range
> Set the effective range of [Auto Challenge](#auto-challenge)
- Optional Range: `0 ~ 300`

### Delay
> Set intervals to collect or detonate challenges gadgets.
- Optional Range: `0 ~ 2000`

### Custom Challenge
> Collect the specified gadgets.\
E.g: Violetglow Jellyfish in Radiant Harvest event.

<p align="center">
<img src='/features/custom-challenge.webp'>
</p>

#### Enabled Custom Challenge `<Hotkeys>`
> Enables [Custom Challenge](#custom-challenge)

<p align="center">
<img src='/features/custom-challenge-2.webp'>
</p>

#### Display Name
> Set the name of this item in the list.
#### Gadget ID
> Set the `Gadget ID` of the gadgets to be collected.
::: info
The `Gadget ID` of surrounding props can be obtained in the `ID` column in [Debug - Entity Manager - Entity List](/features/debug#entity-list-controls).
:::

## Auto Cook
::: info
Quickly complete cooking operations.
:::

### Enabled `<Hotkeys>`
> Enables [Auto Cook](#auto-cook).

<p align="center">
<img src='/features/Auto_Cook.webp'>
</p>

### Fast Proficiency `<Hotkeys>`
> Quickly complete manual cooking.

<p align="center">
<img src='/features/Fast_Proficiency.webp'>
</p>

### Count Item
> Set the amount of manual cooking.
- Optional Range: `1 ~ 100`

### Quality
> Sets the final quality of food for manual cooking.

Available Options:
- Delicious
- Normal
- Suspicious

## Auto Domain
::: info
Auto complete domain. Technically it uses kill aura then automatically continues domain until resin runs out.
:::
> Available in [Akebi-Private](/cheats/akebi-private)

### Enabled `<Hotkeys>`
> Enables auto domain/dungeon
- Insta Kill
- Delay
- Interpolation Speed
- Condensed Resin

> :bulb: This feature has been in development for a long time (since 2.8), but was not put into use until Akebi [switched to paid](/cheats/akebi#switched-to-paid).

## Auto Destroy Objects
::: info
Automatically destroy some objects.
:::

<p align="center">
<img src='/features/Auto_Destroy_Objects.webp' width=40%>
</p>

::: warning
Using this function maybe at risk.
:::

### Enabled `<Hotkeys>`
> Enables [Auto Destroy Objects](#auto-destroy-objects).

Available Options:
- Ores Ores and variants, e.g. electro crystals, marrows, etc. `<Hotkeys>`
- Shields The shields of Mage and Churl and the elemental immunity of slimes. `<Hotkeys>`
- Doodads Barrels, boxes, vases, etc. `<Hotkeys>`
- Special Objects Destroy Ancient Rime, Large and Small Rock Piles. `<Hotkeys>`
- Special Chests Destroy Chests with Brambles, Frozen, or In Rocks. `<Hotkeys>`
  - This item may destroy the Ley Line Blossom and make it invisible!

### Range (m)
> Sets the effective range of [Auto Destroy Objects](#auto-destroy-objects).
- Optional Range: `1 ~ 15`

## Auto Fish
::: info
A hooked fish goes directly to the Inventory.
:::

### Enabled `<Hotkeys>`
> Enables [Auto Fish](#auto-fish).

### Catch Delay (ms)
> Determines the `Catch Delay (ms)` time after the fishing rod is thrown to make the hooked fish enter the inventory.
- Too short may result in fish not being hooked and unable to enter the inventory.
- Optional Range: `500 ~ 4000`

<p align="center">
<img src='/features/Auto_Fish.webp'>
</p>

### Recast rod
> Resets the casting state, allowing you to continue fishing without recasting.
- There is no prompt when resetting the throwing state.
### Recast Delay (ms)
> Set the interval time for each reset of the throwing state.
- Optional Range: `100 ~ 4000`

## Auto Loot
::: info
Automatically collect various items such as materials, treasure chests, and god pupils.
:::

::: warning
Using this function maybe at risk.
:::

### Auto-Pickup
> Automatically picks up dropped items, materials, etc.

Similar to pressing F automatically.

<p align="center">
<img src='/features/Auto-Pickup.webp'>
</p>


#### Enabled `<Hotkeys>`
> Enables [Auto-Pickup](#auto-pickup).

##### Auto disable when bag is full `<Hotkeys>`
> Auto disable [Auto-Pickup](#auto-pickup) when bag is full.

### Auto-Treasure
> Automatically interact with selected objects.

<p align="center">
<img src='/features/Auto-Treasure.webp'>
</p>


#### Enabled `<Hotkeys>`
> Enables [Auto-Treasure](#auto-treasure).

Available Options:
- `Chests` Common, precious, luxurious, etc.
- `Leyline` Mora/XP, overworld/Trounce bosses, etc.
- `Search Points` Marked as Investigate/Search, etc.
- `Quest Interacts` Valid quest interact points.
- `Others` Book Pages, Spincrystals, etc.

### Custom Pickup Range
::: info
Increase your pick-up range.
:::

- You can pick up the Oculus directly. You can also configure filter picking in Pickup Filter.
- Interactive events such as treasure chests will not be displayed in the pickup list, but they can be picked up by Auto-Treasure.

<p align="center">
<img src='/features/Custom_Pickup_Range.webp'>
</p>


#### Enabled `<Hotkeys>`
> Enables [Custom Pickup Range](#custom-pickup-range).

::: warning
If you need to enable [Auto-Pickup](#auto-pickup) or [Auto-Treasure](#auto-treasure) at the same time, please make sure to turn on [Custom Pickup Range](#custom-pickup-range) after these two.\
Otherwise, items within the set range may not be picked up automatically.
:::

#### Range (m)
> Set the effective range of [Custom Pickup Range](#custom-pickup-range).

- Optional Range: `0.5 ~ 250`

#### Super Pickup Range
> ???
::: info
Only available in [Bkebi](/cheats/bkebi) Debug build
:::

### Looting Speed
> Set the speed of collection.

#### Delay Time (ms)
> Set the interval time between each collection of items.

- Optional Range: `0 ~ 1000`

### Looting delay fluctuation
> Set the interval between each collection of items as `Random interval`.

- `Random Interval` = `Delay Time (ms)` ~ (`Delay Time (ms)` + `Delay range +(ms)`)

#### Enabled `<Hotkeys>`
> Enables [Looting delay fluctuation](#looting-delay-fluctuation).

#### Delay range + (ms)
> Set random delay range.

### Pickup Filter
> Filter certain collection items for auto loot.

#### Enabled `<Hotkeys>`
> Enables [Pickup Filter](#pickup-filter).
::: info
Unselected collection items will not be automatically picked up when enabled.
:::
Available Options:
- `Animals` Fish, Lizard, Frog, Flying animals.
- `Drop Items` Material, Mineral, Artifact.
- `Resources` Everything beside Animals and Drop Items (Plants, Books, etc).
- `Oculus` All Oculus.

## Auto Puzzle
::: info
Auto complete world puzzle.
:::

### Enabled `<Hotkeys>`
> Enables [Auto Puzzle](#auto-puzzle)
::: warning
[Auto Puzzle](#auto-puzzle) can not unlock puzzle that require a specified order.
:::

- Delay (ms)
- Range (m)
- Search Puzzle

#### Puzzle
> Available options can automatically solved
- General
    - `Plants` Auto destroys Dandelion Seed, Sakura Bloom, etc.
    - `Seelie` Touch Seelie once to return it to its Seelie Lamp.
    - `Elemental Monument` Auto activates Elemental Monument.
    - `Torch Puzzle` Auto activates the torch.
    - `Floating Anemo Slime` Auto destroys floating anemo slime.
    - `Bloatty Floatty` Auto destroy Bloatty Floatty.
    - `Pot` Auto ignites Pot.
    - `Campfire Torch` Auto ignites the Campfire Torch.
    - `Pressure Plate` Auto activates the Pressure Plate.
    - `Parametric Transformer` Auto charging Parametric Transformer.
    - `Daily Commission` Auto resolve some daily commission such as clean stain, fallen leaves, mushroom puzzle and etc.
    - `Modify Balloon cart speed (Time Scale)` Set the speed of the Balloon cart for Safe Conduct.
    - `Unique Rocks` ???
- Mondstadt
    - `Snow Pile` Automatically clear Snow Piles in Dragonspine.
- Liyue
    - `Windmill Mechanism` Auto activates Windmill.
    - `Geogranum` Will spawn the rock seed around the puzzle, need pickup it and activate by yourself.
- Inazuma
    - `Electro Seelie` Electro Seelie within the range will be automatically returns to its correct position.
    - `Lightning Strike` Probe Auto-normalize Lightning Strike Probe.
    - `Stormstone` Automatically activate Tsurumi Island's Stormstone.
    - `Electric Conduction` Automatically complete the electric conduction puzzle.
- Sumeru
    - `Dendro Rock` Auto unlock stones sealed by grass elements.
    - `Dendro Pile` Auto puzzle of bouncy mushrooms, stones entwined with vines, star mushrooms, poisonous gas mushrooms, three-way seeds, and dream flowers.
    - `Clusterleaf Of Cultivation` Automatically activate Clusterleaf Of Cultivation, which generates four-leaf seals.
    - `Sumeru Puzzles` Auto activate Valaya.
    - `Stone Pillar Seal` Auto clear the Stone Pillar Seal.
    - `The Tumor of the Withering` Auto clear the Tumor of the Withering.
    - `Sand Pile` Automatically removes Sand Pile in desert areas.
- Fontain
    - `Jadewater Fruit` Auto fill Jadewater Fruit
    - `Pneumousia Mechanism`
- Natlan
    - `Monetoo`

## Auto Seelie
::: info
Touch Seelie once to return it to its Seelie Lamp.
:::
### Enabled `<Hotkeys>`
> Enables [Auto Seelie](#auto-seelie)

#### Auto Electro Seelie
::: info
Since you don't need to manually start Electro Seelie, they start moving automatically with this option within 100m radius.
:::

## Auto Talk
::: info
Automatically skip dialogue when interacting with NPCs.
:::

### Enabled `<Hotkeys>`
> Enables [Auto Talk](#auto-talk).
- Toggle Hotkey
> Set the hotkey for [Auto Talk](#auto-talk) to take effect when held down.

- When the set hotkey is not `None`, [Auto Talk](#auto-talk) is enabled only when [Toggle Hotkey](#toggle-hotkey) is held down.
- When the set hotkey is `None`, [Auto Talk](#auto-talk) will always be enabled.
- If you need to switch to take effect, set this to `None` and set the button in [Hotkeys - Auto Talk - Auto Talk](/features/hotkeys#auto-talk).

#### Fast Dialog `<Hotkeys>`
> Speeds up game while talking.
- Time Speed
  > Sets the game speed when talking.
- Optional Range: `2 ~ 50`
#### Skip Dialog `<Hotkeys>`
- Skip Delay (ms)
  > Set the delay when skipping.
- Optional Range: `2 ~ 50`


## Auto-select Dialog `<Hotkeys>`
> Auto-select dialog.

Only the first dialog will be selected.

### Exclude Katheryne/Tubby/Wagner `<Hotkeys>`
> Dialogue options are not automatically selected when talking to `Katheryne`/`Tubby`/`Wagner`.

<p align="center">
<img src='/features/Exclude_Katheryne-Tubby-Wagner.webp' width=50%>
</p>

### Skip Talk Scenes
> Automatically skips game talk scene.

::: warning
Could cause issue with quest and reward.
:::

### Skip Cutscenes
> Automatically skips game movies.

### Fast Cutscenes
> Speed up for cutscenes

## Auto Tree Farm
::: info
Automatically collects surrounding trees.
:::

<p align="center">
<img src="/features/Auto_Tree_Farm.webp">
</p>

::: warning
Using this function maybe at risk.
:::

### Enabled `<Hotkeys>`
> Enables [Auto Tree Farm](#auto-tree-farm).

### Attack Delay (ms)
> The time interval before each tree starts to be felled.
- Optional Range: `0 ~ 1000`

### Repeat Delay (ms)
> The time interval between each cut.
- Optional Range: `500 ~ 1000`

### Attacks per Tree
> Set the number of attacks per tree.
- It is recommended to set it to `10` and below to avoid risks caused by excessive logging.
- Set to `0` for unlimited.
- Will reset after game restart.
- Optional Range: `0 ~ 100`


## Claim Level Rewards
::: info
Automatically collects rewards from Katerina for leveling up.
:::
> Available in [Akebi-Private](/cheats/akebi-private)
### Enabled `<Hotkeys>`

## Elemental Aura
> Constantly apply an element to targets around you.

<p align="center">
<img src="/features/Elemental_Aura.webp">
</p>

### Enable Elemental Aura `<Hotkeys>`
> Enables Elemental Aura.

::: info
- The Elemental Mastery to which the element is attached is relative to the current character
- Will pull up the hatred of the attached monster
- In CO-OP Mode, it only takes effect when becoming CO-OP Master
:::

### Only Hostile/Aggro
> It only takes effect on monsters targeting/aggro towards you.

### Try Hit Objects
> Elemental aura will also try to hit objects around you.

### Smart Element
> Automatically select elements based on the type of element required by the entity.
::: info
Monster Applied Element and Object Applied Element are overridden for required entities.
:::

### Monster Applied Element
> Sets the type of element applied to monster.

Available Options:
- Physical
- Pyro
- Hydro
- Anemo
- Electro
- Dendro
- Cryo
- Geo
- Frozen
- AntiFire
- VehicleMuteIce
- Unknown

### Object Applied Element
> Sets the type of element applied to object.

Available Options:
- Physical
- Pyro
- Hydro
- Anemo
- Electro
- Dendro
- Cryo
- Geo
- Frozen
- AntiFire
- VehicleMuteIce
- Unknown

### Aura Range
> Set the effective range of Elemental Aura.
- Optional Range: `5 ~ 100`

### Queue Delay (ms)
> Find the target interval.
- Optional Range: `0 ~ 1000`

### Apply Interval (ms)
> Applies elements to the target interval.
- Optional Range: `100 ~ 10000`

### Durability
> Sets element attachment time and strength.
- Optional Range: `1 ~ 1000`

## Game Speed
::: info
Speed up all game mechanics.
:::

::: warning
Using this function maybe at risk.\
DO NOT use this in the Open World, only use in menus/etc.\
VERY DANGEROUS
:::

### Enabled `<Hotkeys>`
> Enables [Game Speed](#game-speed).
- In CO-OP Mode, it only takes effect when you become the `CO-OP Master`.
- When the CO-OP Mode is in effect, monsters behave abnormally in the eyes of other players and may not be able to hit teammates after the speed exceeds `4`.

### Hotkey
> Set the hotkey for [Game Speed](#game-speed) to take effect when held down.
- Default Hotkeys: `CapsLock`
- When the set hotkey is not `None`, [Game Speed](#game-speed) is enabled only when [Hotkey](#hotkey) is held down.
- When the set hotkey is `None`, [Game Speed](#game-speed) will always be enabled.
- If you need to switch to take effect, set this to `None` and set the button in [Hotkeys - Game Speed](/features/hotkeys#game-speed) .

### Multiplier
> Set the multiplier of [Game Speed](#game-speed).
- Optional Range: `0 ~ 20`

## Kill Aura
::: info
Automatically kills all creatures within range.
:::

### Enabled Kill Aura `<Hotkeys>`
> Enables [Kill Aura](#kill-aura).
- There are two modes: [Crash Damage Mode](/features/world#crash-damage-mode-hotkeys) and [Instant Death Mode](/features/world#instant-death-mode-hotkeys).
- In CO-OP Mode, it only takes effect when becoming `CO-OP Master`.

### Use AFK Attack `<Hotkey>`
> Use Teleport to attack monsters within the distance of the monster.
- Delay (ms)
  > The delay between each teleport.
- Radius (m)
  > Set the enable range of [Use AFK Attack](#use-afk-attack-hotkey).

![](/features/AFKAttack.webp)

::: info
Only available in [Bkebi](/cheats/bkebi) Debug build
:::

### Crash Damage Mode `<Hotkeys>`
> Attacks with crash damage.

<p align="center">
<img src='/features/Crash_Damage_Mode.webp' width=50%>
</p>

#### Damage Value
> Sets the damage value of the attack.
- Optional Range: `0 ~ 10000000`

#### Percent mode (Kill times) `<Hotkeys>`
> The specified number of kills is based on the damage value inferred from the target's maximum blood volume to attack.
- Optional Range: `1 ~ 100`

### Instant Death Mode `<Hotkeys>`
> Delete entities directly by sending them to another dimension.

<p align="center">
<img src='/features/Instant_Death_Mode.webp' width=100%>
</p>

::: warning
Using this function maybe at risk.\
Use [Crash Damage Mode](#crash-damage-mode-hotkeys) instead.
:::

- No damage value prompt.
- May not generate drops.
- Can get buggy withbosses like PMA and Hydro Hypo.
- Makes fishing point and fish in them invisible.

### Destroy shield

### Kill Range
> Set the effective range of [Kill Aura](#kill-aura).
- Optional Range: `5 ~ 100`

### Only Hostile/Aggro
> It only takes effect monsters targetting/aggro towards you.

### Crash Attack Delay (ms)
> Set the interval time between each search for the target.
- Optional Range: `0 ~ 1000`

### Crash Repeat Delay (ms)
> Set the interval time between each attack.
- Optional Range: `100 ~ 2000`

### How it works
I see people often confuse the two modes: [Crash Damage Mode](/features/world#crash-damage-mode-hotkeys) and [Instant Death Mode](/features/world#instant-death-mode-hotkeys)

The mechanism of these two modes is different.

- [Crash Damage Mode](/features/world#crash-damage-mode-hotkeys): **Taiga** or **Callow** figured out how to hook into the "crash" event.
The kind where you get hit by debris, or in the `The Great Fayz Reaction Debate` 4.6 event. This is true damage.
```cpp
auto crashEvt = app::MoleMole_EventHelper_Allocate_103(*app::MoleMole_EventHelper_Allocate_103__MethodInfo);
```
- [Instant Death Mode](/features/world#instant-death-mode-hotkeys): Emulate monster fall crash, so simple but works. By giving the monster's x-axis 1 million units. When they appear or act first, they are thrown to another planet and die.
```cpp
moveSync->fields._syncTask.position.x = 1000000.0f;
```

::: tip
Because [Instant Death Mode](/features/world#instant-death-mode-hotkeys) often causes errors, sometime it can ruin the game, so I recommend you to use [Crash Damage Mode](/features/world#crash-damage-mode-hotkeys).
:::

## Map Manager
> Instantly unlock waypoints & statues.

### Unlock Statues of The Seven
> Unlock all statues.
### Unlock Teleport Waypoint
> Unlock all waypoints.
### Delay (ms)
Default value: `5000ms`

:::warning
Too low delay (e.g. 0) will cause the Archon quest to be lost (Or this is just a Korepi special feature)
:::

Demonstrate: https://youtu.be/FyJoxBnCA5g

## Mob Vacuum
::: info
Selected mobs within range will move directly in front of the player.
:::

<p align="center">
<img src='/features/Mob_Vacuum.webp'>
</p>

### Enabled `<Hotkeys>`
> Enables [Mob Vacuum](#mob-vacuum).

- It may not be effective for interactions such as `Sweet Flower`.
- Most of the adsorption effects in CO-OP Mode are only visible to you.

### Monsters (Include Monsters) `<Hotkeys>`
Available Options:
- `Common` Common enemies.
- `Elite` Elite enemies.
- `Boss` World and Trounce boss enemies.

### Animals (Include Animals) `<Hotkeys>`
Available Options:
- `Droppers` Animals you need to kill before collecting.
- `Pick-ups` Animals you can immediately collect, but may include fish from fishing spots.
- `NPCs` Creatures that cannot be attacked.

### Instant Vacuum
> Causes the vacuum object to immediately move directly in front of the player.

### Only Hostile/Aggro
> It only takes effect monsters targetting/aggro towards you.

### Remove Collider `<Hotkeys>`
> Removes the hitbox of all entities so that you cannot be pushed by any mobs.

### Speed
> Set the vacuum speed.
- Optional Range: `1 ~ 15`

### Radius (m)
> Set the effective range of [Mob Vacuum](#mob-vacuum).
- Optional Range: `5 ~ 150`

### Distance (m)
> Sets the distance mobs vacuum to directly in front of the player.
- Optional Range: `0.5 ~ 10`

## Monster Changer
::: info
Replaces the spawned creature with the specified creature.
:::

<p align="center">
<img src='/features/monster-changer.webp'>
</p>

### Enabled `<Hotkeys>`
> Enables [Monster Changer](#monster-changer).

- Replaces mobs on native mob load.
- Mob health and drops are not replaced.
- In CO-OP Mode, the replaced creature model is only visible to you, and other players can only see the model before the replacement.
- In CO-OP Mode, the attacks and skills of monsters can only be replaced when you become the `CO-OP Master`.

<p align="center">
<img src='/features/monster-changer-coop.webp'>
</p>

### Exclude Animals
> Don't change animals such as dog, cat, pigeon and etc.

### Custom Monster ld
> Sets the `ID` of the replacement mob.

The `ID` can be obtained from the `Monsters` item in GM Handbook.

### Monster Select
> Use built-in mobs without using [Custom Monster ld](#custom-monster-ld).

Available Options: `Hilichurl` `HilichurlShooter` `HilichurlGrenadier` `StonehideLawachurl` `DendroSamachurl` `LargeDendroSlime` `LargeAnemoSlime` `LargeElectroSlime` `MutantElectroSlime` `LargeCryoSlime` `LargeHydroSlime` `LargePyroSlime` `LargeGeoSlime` `AbyssLector_VioletLightning` `ShogunateInfantry` `Beisht` `Stormterror` `LupusBoreasDominatorOfWolves` `Childe_EleventhoftheFatuiHarbingers` `Childe_DelusionUnleashed` `Childe` `Azhdaha` `LaSignora` `Lasignora_CrimsonWitchOfEmbers` `RaidenShogun` `RaidenEi` `MagatsuMitakeNarukamiNoMikoto` `Nada` `Nada_2`

### Randomize Monster

## Take Achievements
::: info
Claim all rewards from achievements by clicking once.
:::
> Available in [Akebi-Private](/cheats/akebi-private)
### Enabled `<Hotkeys>`

## Vacuum Loot
> Selected loot within range will move directly in front of the player.

### Enabled `<Hotkeys>`
> Enables [Vacuum Loot](#vacuum-loot).

::: info
It may make it impossible to pick up the Apple, Sunsettia, Onikabuto, Crystalfly, Bird Egg, etc. that were originally on the tree after adsorption.
:::

<p align="center">
<img src='/features/Vacuum_Loot.webp'>
</p>

### Delay Time (ms)
> The interval between each movement of the dropped item.

- Optional Range: `0 ~ 1000`

### Radius (m)
> Sets the effective range for common items.

- Optional Range: `5 ~ 100`

### Mob Drop Radius (m)
> Sets the effective range for mob drop items.

- Optional Range: `5 ~ 100`

### Distance (m)
> Sets how far in front of the player the drop will vacuum to.

- Optional Range: `1 ~ 10`

### Loot Types
> Select an item that works on [Vacuum Loot](#vacuum-loot).

Available Options:
- Equipment: `Artifact` `Bow` `Catalyst` `Claymore` `Sword` `Pole`
- Featured: `Item Drops`
- Living: `Crystal Core` `Meat Crab` `Eel` `Lizard Tail` `Fish`
- Mineral: `Amethyst Lump Drop` `Crystal Chunk Drop` `Electro Crystal Drop` `Iron Chunk Drop` `Noctilucous Jade Drop` `Magical Crystal Chunk Drop` `Scarlet Quartz Drop` `Starsilver Drop` `White Iron Chunk Drop`
- Plant: `Apple` `Cabbage` `Carrot Drop` `Potato` `Radish Drop` `Sunsettia` `Wheat`

## Other

### Open Team Immediately `<Hotkeys>`
::: info
There will no longer be a 2-second out-of-combat wait time when opening the Party Setup.
:::
<p align="center">
<img src='/features/Open_Team_Immediately.webp'>
</p>

### Skip Enhance Animation
> Skip Weapon and Artifact level up animations and dialogs.

<p align="center">
<img src='/features/Skip_Enhance_Animation.webp'>
</p>


#### Show Level-Up Dialog For Substat Rolls
> Shows the level up dialog when the Artifact is enhancement success to `+4` `+8` `+12` `+16` `+20`.

<p align="center">
<img src='/features/Show_Level-Up_Dialog_For_Substat_Rolls.webp'>
</p>

### Dumb Enemies `<Hotkeys>`
> All monsters will not initiate any attack on the player.

<p align="center">
<img src='/features/Dumb_Enemies.webp'>
</p>

In CO-OP Mode, it only takes effect when you become the CO-OP Master.


### Freeze Enemies `<Hotkeys>`
> Stop the movement of all monsters.

<p align="center">
<img src='/features/Freeze_Enemies.webp'>
</p>

In CO-OP Mode, it only works when you become CO-OP Master, but you will not be hit by monsters under any circumstances.

### Permanent Elemental Sight `<Hotkeys>`
> Elemental Sight will remain enabled.

<p align="center">
<img src='/features/Permanent_Elemental_Sight.webp'>
</p>

### Skip Sumeru Music `<Hotkeys>`
> Skip Sumeru music puzzle.
