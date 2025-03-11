---
outline: deep
---

# Debug
If you know how to use it, it is extremely useful.

## Entity Manager
> Entity Manager.

### Entity Count
The current number of loaded entities.

### Filtering Options

#### Entity Name Filter
- Filter Entity List by entity name.

#### Radius Filter
- Filter Entity List by entity distance from player
- Sets the filter radius
- Range: 0 ~ 100

#### Type Filter
- Filter Entity List by entity type
- Columns: 2-5 columns display options

Available Types:
- AOE
- ActivityInteractGadget
- AirflowField
- AmberWind
- AttackPhyisicalUnit
- Avatar
- BlackMud
- Bullet
- Bush
- Camera
- Chest
- CoinCollectLevelGadget
- CustomGadget
- CustomTile
- DangerZone
- DeshretObeliskGadget
- DropItem
- EchoShell
- ElemCrystal
- EnergyBall
- EnvAnimal
- EnviroArea
- Equip
- EyePoint
- Field
- FishPool
- FishRod
- Foundation
- Gadget
- GatherObject
- GatherPoint
- Gear
- GeneralRewardPoint
- Grass
- HomeGatherObject
- Level
- Lightning
- MPLevel
- MiracleRing
- Monster
- MonsterEquip
- MpPlayRewardPoint
- NPC
- NightCrowGadget
- None
- OfferingGadget
- PlaceHolder
- Platform
- PlayTeam
- Projector
- QuestGadget
- RemoteAvatar
- RewardPoint
- RewardStatue
- RoguelikeOperatorGadget
- Screen
- SealGadget
- SpeedupField
- SubEquip
- Team
- Timeline
- TransPointFirst
- TransPointFirstGadget
- TransPointSecond
- TransPointSecondGadget
- Tree
- UllnteractGadget
- Vehicle
- ViewPoint
- Water
- WidgetGadget
- WindSeed
- Worktop

### Spawner
> Only available in [Bkebi](/cheats/bkebi)

Spawn tools or mobs. Note: Most tools cannot interact and mobs cannot be killed. In CO-OP Mode, only visible to you.

#### Spawn Options
- **Spawn Gadget**: Use set ID from GM Handbook Items
- **Spawn NPC**: Use set ID from GM Handbook Items  
- **Spawn Monster**: Use set ID from GM Handbook Monsters

### Entity List Controls
- **Group by Type**: Sort by type instead of displaying all on one page
- **Show Empty Types**: Display types without entities
- **Show Only Oculi**: Filter to show only Oculi

### Bulk Actions
- **Teleport: Closest**: Teleports to the closest entity
- **Teleport: Farthest**: Teleports to the farthest entity
- **Summon All**: Teleports all entities to self
- **Banish All**: Banish all entities to y=0

### Copy Options
- **Copy All Details**: Copy all entity details
- **CSV Friendly**: Comma separated format without coordinates
- **Include Headers**: Option to include headers in export

### Per-Entity Actions
- **T**: Teleport to this entity
- **S**: Teleport entity to self
- **B**: Banish entity to y=0
- **C**: Copy entity details
- **E**: Copy to ESP Custom Filter
- **ConfigID**: Copy the ConfigID
- **RuntimeID**: Copy the RuntimeID

## Position
> Position-related debug features for the avatar.

:warning: **Warning**: Serious crashes may occur when using this feature.

### Scene Information
- **Player Scene ID**: Current scene ID of the player
- **Map Scene ID**: Current scene ID of the map

### Position Types
- **Avatar Position**: Current position of the avatar
- **Relative Position**: Position relative to reference point
- **Level Position**: Position within the current level
- **Teleport Position**: Set target location for teleportation

### Teleport Options
- **Map Teleport**: Teleports the player to the ground at specified location
- **World Teleport**: Direct teleportation to designated area
  > Note: This function is currently not working in the current version

### Ground Information
- **Ground Position Info**: Information about ground position
- **Ground Normal**: Position equivalent to general ground level
- **Checked Position**: Current character position verification
  > Note: Y-values cannot be detected
- **Raycast Length**: Set the length for raycast detection

### Copy Options
- **Copy Position**: Copy current avatar position
- **Copy All Info**: Copy all position-related information
- **Copy as JSON**: Copy position info as JSON with random name

## Map Manager
> Show waypoints info.

## FPS Graph
> Show FPS Graph.

<p align="center">
<img src="/features/FPS_Graph.webp">
</p>

:bulb: (avg) is the average FPS.

## Lua Executor
> Lua Executor.
### Lua File Path
> Set the path of the Lua file to be executed.
### Execute
Execute the set Lua file.

## Packet Sniffer
> Built-in packet capture tool.

### Pipe name
> Set the pipe name for data exchange with another process with the same pipe name.
- If using [PacketSniffer](https://github.com/RyujinZX/Akebi-PacketSniffer), use the default `genshin_packet_pipe`.
- For detailed usage, please see [PacketSniffer](https://github.com/RyujinZX/Akebi-PacketSniffer).

### Capturing
> Enables capturing game packet information and sending to pipe.

### Manipulation
> The packets are modified and sent to the game through the pipe.

May cause increased game lag.
