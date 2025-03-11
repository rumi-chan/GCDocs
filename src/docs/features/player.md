---
outline: deep
---

# Player
Modify various mechanics related to the character.

## Aimbot
> CSGO simulator
:::info
Automatic aiming.
:::

- AutoAimMode
- DistanceMode

## Attack Effects
::: info
Enhance character attack and damage effects.
:::

### Enable `<Hotkeys>`
> Enable all [Attack Effects](#attack-effects) features.

---
### Multi-Hit Mode `<Hotkeys>`
::: info
Multiplies your attack count.
:::

- There are three modes: [Multiplier](#_1-multiplier), [One-Punch Mode](#_2-one-punch-mode), and [Randomize Multiplier](#_3-randomize-multiplier-hoHotkeytkeys).
- It will take effect only if the Enabled hotkeys above is checked.


#### 1. Multiplier
::: info
Attack count multiplier.
:::

- Only takes effect if One-Punch Mode and Randomize Multiplier are off.
- Using this function may be at risk.
- Optional Range: 2 ~ 1000

<p align="center">
<img src="/features/Muliti-Hit_Mode.webp" />
</p>


#### 2. One-Punch Mode
::: info
Calculate how many attacks needed to kill an enemy based on their HP and uses that to set the multiplier accordingly.
:::

- Will override the effect of the Multiplier above.
- Will override the effect of the Randomize Multiplier below.
- Maximum 200 multiplier for one attack.

<p align="center">
<img src='/features/One-Punch_Mode.webp'>
</p>

#### 3. Randomize Multiplier `<Hotkeys> `
::: info
Randomize multiplier between min and max multiplier.
:::

- Will override the effect of the [Multiplier](#_1-multiplier) above.
- Only takes effect if [One-Punch Mode](#_2-one-punch-mode) is off.

**Min Multiplier**
> Sets the minimum value for the Randomize Multiplier.
- Optional Range: `1 ~ 1000`

**Max Multiplier**
> Sets the maximum value for the Randomize Multiplier.
- Optional Range: `2 ~ 1000`

<p align="center">
<img src='/features/Randomize_Mulitiplier.webp' width=50%>
</p>

---
### Multi-Target `<Hotkeys>`
::: info
Enables multi-target attacks within specified radius of target.\
All valid targets around initial target will be hit based on setting.\
Damage numbers will only appear on initial target but all valid targets are damaged.\
If multi-hit is off and there are still multiple numbers on a single target, check the Entity Manager in the Debug section to see if there are invisible entities.\
This can cause EXTREME lag and quick bans if used with multi-hit.
:::

- Damage numbers will only appear on initial target.
- Similar to ID damage effect.

**Radius (m)**
> Set the effective range of Multi-Target.
- Optional Range: `5 ~ 50`

<p align="center">
<img src="/features/Multi-Target.webp" width=50%>
</p>

---
### Multi-Animation `<Hotkeys>`
::: info
The global attack and other animations are played repeatedly at the moment of the attack and can cause multiple damages.\
Do keep in mind that the character's audio will also be spammed.
:::

- Can act on any entity.
- In CO-OP Mode, it is only valid for entities within a certain range when becoming a CO-OP Master.
- Using this function may be at risk.
- Optional Range: `1 ~ 150`

<p align="center">
<img src='/features/Multi-Animation.webp' width=25%>
</p>

**Use old mode (Animation State)**
> Made [Multi-Animation](#multi-animation-hotkeys) repeat over the course of the attack instead of instantaneously.

- Optional Range: `0 ~ 2`

**OnlyPlayer**
> Make [Multi-Animation](#multi-animation-hotkeys) only work on the currently character and not on entities.


### Attack Speed `<Hotkeys>`
> The character speeds up the character while attacking.
::: warning
If it is turned off when the character is attacking, the character will always maintain the speed when attacking.
:::

**Speed Multiplier**
> Set the speed multiplier of the character when attacking.
- Optional Range: `1 ~ 5`

<p align="center">
<img src='/features/Attack_Speed.webp' width=50%>
</p>

---
### Custom Element `<Hotkeys>`
::: info
Allows you to customize the element type of damage.\
This may not work for some characters.\
(If you want to completely close this function, you need to reload the scene, e.g: entering the dungeon or re-entering the game)
:::

- There are two modes: [RandomElementType](#_1-randomelementtype), [ElementType](#_2-elementtype).
- Can act on any entity.
- In CO-OP Mode, it is only valid for entities within a certain range when becoming a `CO-OP Master`.

#### 1. RandomElementType
> Randomly select the type of element that causes damage.

- Will override the effect of the ElementType below.
- Randomly Options: `Pyro` `Hydro` `Anemo` `Electro` `Dendro` `Cryo` `Geo` `Frozen` `AntiFire` `VehicleMuteIce` `Unknown`

<p align="center">
<img src='/features/RandomElementType.webp' width=25%>
</p>

#### 2. ElementType
> Sets the type of element that deals damage.

Available Options: `Physical` `Pyro` `Hydro` `Anemo` `Electro` `Dendro` `Cryo` `Geo` `Frozen` `AntiFire` `VehicleMuteIce` `Unknown`

<p align="center">
<img src='/features/ElementType.webp'>
</p>

---
### Infuse Element `<Hotkeys>`
::: info
Allows you to customize the attack element type.\
This may only work for the melee characters.
:::

- In the CO-OP Mode, the infusion effect can only be seen by yourself.
- Infusion with effects but no color: `Dendro` `Geo` `Frozen` `AntiFire` `VehicleMuteIce` `Unknown`

**RandomElementType**
> Randomly selects the elemental type for [Infuse Element](#infuse-element-hotkeys).

- Will override the effect of the ElementType below.
- Randomly Options: `Pyro` `Hydro` `Anemo` `Electro` `Dendro` `Cryo` `Geo` `Frozen` `AntiFire` `VehicleMuteIce` `Unknown`

**ElementType**
> Sets the elemental type for [Infuse Element](#infuse-element-hotkeys).

Available Options: `Physical` `Pyro` `Hydro` `Anemo` `Electro` `Dendro` `Cryo` `Geo` `Frozen` `AntiFire` `VehicleMuteIce` `Unknown`

<p align="center">
<img src='/features/Weapon_Infusion.webp'>
</p>

---
### Auto Weakspot `<Hotkeys>`
::: info
Make some monsters be in the main position when they are attacked by bow and arrow characters.
:::
---

### Critical Hit `<Hotkeys>`
::: info
Make every Hit is Critical.
:::
- Cannot take effect on characters with negative crit rate `Kokomi`.
- In CO-OP Mode, it is only valid for yourself.

<p align="center">
<img src='/features/CritcalHit.webp' width=30%>
</p>

---
### Nullify Incoming Element `<Hotkeys>`
::: info
Damage to player will have no element.
:::

## Auto Run
::: info
Automatically move towards the front of the camera.
:::
### Enabled `<Hotkeys>`
> Enables [Auto Run](#auto-run)
::: info
Actions such as walking, running, and jumping of the character will appear abnormal.
:::
**Speed**
> Sets the speed of Auto Run.
- Optional Range: `0.01 ~ 1000`

<p align="center">
<img src='/features/Auto_Run.webp' width=100%>
</p>

## Bunny Hop
::: info
Bunny hopping like some FPS games.
:::

### Bunny Hop
> Enables [Bunny Hop](#bunny-hop)
- Hold Hotkey `Space`

## Cooldown Effects
::: info
Set the cooldown effect related to cooldown (such as skills, bow charge, etc.).
:::

### Max Burst Energy `<Hotkeys>`
> Removes energy requirement for elemental bursts.\
(Energy bubble may appear incomplete but still usable.)

<p align="center">
<img src='/features/Max_Burst_Energy.webp' width=50%>
</p>

---
### No Avatar Skill Cooldown `<Hotkeys>`
::: info
Disable cooldown of avatar skill.
:::
> The cooldowns time for elemental skills and bursts is `Set value`. Default value is 1s.

- Optional Range: `1 ~ 6`

<p align="center">
<img src='/features/Reduce_Skill-Burst_Cooldown.webp'>
</p>

---
### No Sprint Cooldown `<Hotkeys>`
> Removes delay in-between sprints.

<p align="center">
<img src='/features/No_Sprint_Cooldown.webp' width=50%>
</p>

---
### Instant Bow Charge `<Hotkeys>`
> Disable cooldown of bow charge.

- Some characters may have to wait a while before starting to charge their bow.
- Currently causes Fischl to be unable to shoot arrows.

<p align="center">
<img src='/features/Instant_Bow_Charge.webp' width=100%>
</p>

---
### No Vehicle Skill Cooldown `<Hotkeys>`
> Disable cooldown of vehicle skill.

---
### Ability Log [DEBUG]
> Global ability log.\
Only the most recent 50 entries are logged.

## Enhanced Movement
::: info
Enhanced mechanics related to character movement.
:::

### Enabled `<Hotkeys>`
> Enables [Enhanced Movement](#enhanced-movement).

---
### Run On Water
> Allow character to run on water.

[comment]: <> (need image)

### Run Boost
> Give extra boost while moving.

[comment]: <> (need image)

### Jump Boost
> Give extra boost while jumping. (Increases the character's jump height.)

::: warning
Affects the falling speed of the character.
:::

#### Apply Mid-air
> You can use `Space` to increase the height of the character when deploying the glider.

#### Vertical Velocity
> The speed at which the character jumps, rises, and falls.
- Optional Range: `1 ~ 100`

[comment]: <> (need image)

### Fly Boost
> Give extra boost while flying.

[comment]: <> (need image)

### Blink Movement
> Use the shortcut keys to instantly move forward a certain distance. You can also press `W` `S` `A` `D` to specify the direction of movement.
- Similar to Flash (Summoner spell) in `League of Legends`.

<p align="center">
<img src='/features/lol-league-of-legends.webp'>
</p>

::: info
Set [Blink Hotkey](#blink-hotkey) to enable this feature.
:::
- Effective when the character is on the ground and using glider.
- In CO-OP Mode, other players cannot see your frequent Blink behavior.

#### Blink Hotkey
> Set the hotkey to use [Blink Movement](#blink-movement).
- Default Hotkeys: `X`

#### Blink Distance
> Sets the maximum distance for one Blink Movement.
- Optional Range: `1 ~ 10`

[comment]: <> (need image)

## Fall-Control
::: info
Allows the character to use `W` `S` `A` `D` horizontal displacement when falling.
:::

### Enabled `<Hotkeys>`
> Enables [Fall-Control](#fall-control)
### Speed
> Sets the horizontal movement speed of the character when falling.
- Optional Range: `0 ~ 100`

<p align="center">
<img src='/features/Fall-Control.webp' width=50%>
</p>

## Friendly Fire
> Only available in Bkebi Debug version and [Sakura](/cheats/sakura)
::: info
Attack other players in CO-OP
:::

<p align="center">
<img src='/features/FriendlyFire.webp'>
</p>

### Enable `<Hotkeys>`
> Enables [FriendlyFire](#friendly-fire)
- Object damage type
- Team will not be changed after enabling this feature

### InitObj
> Object that loads the other player's entity.

### ResetObj
> Clear loaded objects.

## God Mode
::: info
Prevents the character from taking damage. (Immortal)
:::
### Enable `<Hotkeys>`
> The character will not receive any damage from monsters and the environment.
- Does not accumulate Sheer Cold and some mechanics like it.

<p align="center">
<img src='/features/God_Mode.webp' width=50%>
</p>

### Conditional
> Enables [God Mode](#god-mode) when the character's health drops below the specified minimum.
#### Minimum Health
> [God Mode](#god-mode) can only be triggered when the set percentage exceeds the current character's HP percentage.
- Optional Range: `0.1 ~ 100`

<p align="center">
<img src='/features/Minimum_Health.webp'>
</p>

#### Missing Attack Rate
> Sets the percentage chance of triggering [God Mode](#god-mode).
- Optional Range: `0 ~ 100`

## Infinite Stamina
::: info
Make the character's stamina no longer decrease.
:::
### Enabled `<Hotkeys>`
> Make sprinting, climbing, swimming, and flying no longer consume stamina.
::: tip
Sometimes it may cause inability to sprint, climb, fly, etc. You need to restart the game to recover.
:::
<p align="center">
<img src='/features/Infinite_Stamina.webp' width=50%>
</p>

### Move Sync Packet Replacement
> This mode prevents sending server packets with stamina cost actions like sprinting, climbing, flying, etc.

## No-Clip
::: info
Replace the original movement mechanism so that the character can move freely in the world.
:::

### Enable `<Hotkeys>`
> Enables [No-Clip](#no-clip).

- In CO-OP Mode, you will see other players move abnormally.
- Other players may not be able to see you flying in the air but just walking on the ground.
- Default Hotkeys:\
  `W` - Forward Movement\
  `S` - Back Movement\
  `A` - Left Movement\
  `D` - Right Movement\
  `Space` - Ascend Movement (relative to avatar view/direction)\
  `LCtrl` - Descend Movement (relative to avatar view/direction)

<p align="center">
<img src='/features/No-Clip.webp' width=50%>
</p>

### No Animation `<Hotkeys>`
::: info
Allows the character to maintain action states such as standing, falling, swimming, and flying when No-Clip.\
You need to enable No-Clip in the standing state to use actions such as attacks.
:::

<p align="center">
<img src='/features/No_Animation.webp' width=50%>
</p>

#### Speed
> Set the speed of No-Clip.
- Optional Range: `2 ~ 25`

### Camera-relative movement
::: info
When using `W` `S` `A` `D` or Use Custom Keys controls are relative to the camera direction instead of the character facing.
:::

### Allow movement in a blocked area
> Disables zone locking
::: info
This feature must be activated before entering the game world to work.
:::

### Alternate No-clip
::: info
Hold down `LCtrl` or `Use Custom Keys` in [No-Clip](#no-clip) will use the lower [Alt Speed](#alt-speed).
:::

#### Alt Speed
> Set an alternate speed.
- Optional Range: `2 ~ 100`

### Velocity mode `<Hotkeys>`
> Add gravity to the character to simulate the real way of movement to solve some walking through the model problem.

::: tip
It can solve the problem that the character can only move forward when [No Animation](#no-animation-hotkeys) and [Camera-relative movement](#camera-relative-movement) are not enabled.
:::

### Freeflight mode `<Hotkeys>`
> Don't remove collisions.
- You may not be able to traverse some collisions at too low a speed.

<p align="center">
<img src='/features/Freeflight_mode.webp' width=50%>
</p>

### Use Custom Keys
> Set a hotkey for [No-Clip](#no-clip).
Available Settings:
  - Forward Hotkey
  - Left Hotkey
  - Back Hotkey
  - Right Hotkey
  - Ascend Hotkey
  - Descend Hotkey
  - Alt Speed Key

### DragBackBypass
> Prevent being dragged back by the server due to excessive speed.

## Player Speed
::: info
Increases player's speed.
:::

### Enabled `<Hotkeys>`
> Enables [Player Speed](#player-speed).

### Speed
> Set the speed for player.

## Remote Utility
::: info
Remotely perform some special requests.
:::

### Claim Daily Commission Reward `<Hotkeys>`
> Get the reward for completing the commission without interacting with Katheryne.

### Custom Talk
> Request a custom talk.
- Debug Talk
  > Show the talk ID at the console.
- Talk ID
  > Set the talk ID for a request.
- Request Talk
  > Request a talk with `Talk ID`

### Spawn Gadget
> Spawn Gadget that is visible only to you.
- Gadget ID
  > Set the ID of the gadget you want to spawn.
- Spawn Gadget
  > Spawn the gadget with `Gadget ID`

### Crafting
> Execute a combine request without a alchemy table.

- Condense Resin `<Hotkeys>`
  > Quickly combine a Condense Resin.
  > If the combine is successful, it will be directly entered into the Inventory without any prompt.

- Spawn Alchemy Table `<Hotkeys>`
  > Instantly spawns a Alchemy Table in front of you.
  <p align="center">
  <img src="/features/Spawn_Alchemy_Table.webp" />
  </p>

- Spawn Forging Table `<Hotkeys>`
  > Instantly spawns a Forging Table in front of you.

#### Custom Combine
> Combine item with its ID

- Combine ID
  > ID of the item to be combined

- Count
  > Amount of items to combine

- Combine
  > Use the current character to do `Count` combine with `Combine ID`.
  > If the combine is successful, it will be directly entered into the Inventory without any prompt.

### Summon Avatar
> Summon Avatar
- Summon Using ID
  > Summon Avatar using their ID
  - Avatar GUID
  > Set the GUID for summon
  - Avatar Config ID
  > Set the Config ID for summon
  - Avatar Costume ID
  > Set the Costume ID for summon

### Summon NPC
> Summon NPC

- Katheryne `<Hotkeys>`
  > Instantly spawns a Katheryne in front of you.

- Wagner `<Hotkeys>`
  > Instantly spawns a Wagner (Mondstadt's Blacksmith) in front of you.

- Cat Prince `<Hotkeys>`
  > Instantly spawns a Prince (The Cat's Tail Owner) in front of you.

### Summon Monster
> Summon Monster
- Using ID
  > Summon Monster using its ID.
  - Monster ID
  > Set the ID for summon
  - Monster Level
  > Set the level for the summoned monster
  - Monster Scale
  > Set the scale (size) for the summoned monster
- Monster Elite
  > Set the summoned monster as elite or not
- Monster Count
  > Number of monsters you want to summon

### Summon Item
> Summon Item (Only visual)
- Item ID
  > Set the ID of the item you want to summon
- Item Count
  > Number of items you want to summon

### Open UI Page
> Show some UI page directly.
::: warning
It may cause the game to crash when used in some UI (such as Inventory, Adventurer Handbook, Craft, Forge, Settings).
:::
- Open Paimon Menupage `<Hotkeys>`
- Open Cooking Page `<Hotkeys>`

### Map Manager
> Instantly unlock all Teleport points & Goddess.
- Unlock Hidden Points (Includes Transport and Goddess)
  > Unlock Teleport point that does not show on map.
- Unlock All Goddess
  > Start to unlock Goddess.
- Unlock All Transport (Only current scene)
  - Delay (ms)
    > Delay each unlock.
  - Start
    > Start to unlock Transport.
::: warning
Very very high risk
:::

### Worship Statue
> Offer Oculi up without interacting with the Statue.
- Oculus type
  > Set the type of Oculus that needs to be offer up.\
  Available Options: `Anemoculos` `Geoculus` `Electroculus` `Dendroculus` `Hydroculus` `Pyroculus`
- Count
  > The count to be offered.
- Worship!
  > Offer `Count` of the selected type of Oculus.\
  After the offer is successful, the number of Oculus will be consumed without any prompt.

### Change Traveler Element
> Quickly change elememt of traveler.
- Element Type
  > Set the element of traveler to change.\
  Available Options: `Ameno` `Geo` `Electro` `Dendro` `Hydro`
- Resonance
  > Change traveler with `Element Type` element.
- Resonance Ameno `<Hotkeys>`
- Resonance Geo `<Hotkeys>`
- Resonance Electro `<Hotkeys>`
- Resonance Dendro `<Hotkeys>`
- Resonance Hydro `<Hotkeys>`

### Enter Domains
> Quickly enter domain.
- Domains ID
  > Set the ID of the domain you want to enter.
- Enter
  > Enter the domain with `Domains ID`.

## Stat Modifier
> Only available in [Sakura](/cheats/sakura)
:::info
Modify basic character stats.
:::
### Enabled `<Hotkeys>`
> Enables [Stat Modifier](#stat-modifier).

<p align="center">
<img src="/features/statmodifier.webp" />
</p>
