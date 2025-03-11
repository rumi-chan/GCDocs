---
outline: deep
---

# Teleport
Genshin speedrun

## Oculi Teleport
::: info
Teleport to the nearest oculi if found
:::

<p align="center">
<img src='/features/Oculi_Teleport.webp'>
</p>

### Teleport to Nearest
> Use the set hotkey to teleport to the most recently found oculi point.

- If there are oculi nearby, the distance to that point will be displayed in the `Info Window`.
- If there are no oculi nearby, using the hotkey will not teleport.

### Oculi list
> Displays all surrounding valid spots that contain the Oculi.

You can click Teleport to teleport to the corresponding point.

## Chest Teleport
::: info
Check the valid points of the selected items around and teleport them.
:::
<p align="center">
<img src='/features/Chest_Teleport.webp'>
</p>

### Teleport to Nearest
> Use the set hotkey to teleport to the most recently selected valid point.
- If there are valid points of the selected items nearby, the distance to that point will be displayed in the `Info Window`.
- Without a valid point, using the hotkey will not teleport.

### Show Info
> Show simple info about recent items in `Info Window`.

### Filters
> Set the effect type of [Chest Teleport](#chest-teleport).

#### Type Filters
> Filter the items that need to be detected.

Available Options: `Chests` `Investigates` `Book pages` `BGMs` `Quest Interaction` `Flora chest` `Unknowns`

#### Rarity Filter
> Set the rarity of treasure chests to be detected.

`Chests` need to be checked in `Type Filters` to enable these item checks.\
Available Options: `Common` `Exquisite` `Precious` `Luxurious` `Remarkable`

#### State Filter
> Set the state of treasure chests to be detected.

`Chests` need to be checked in `Type Filters` to enable these item checks.\
Available Options: `Locked` `In rock` `Frozen` `Bramble` `Trap`

## Custom Teleport
::: info
Create or load a teleport files of a custom point for teleport.
:::

### Enable `<Hotkeys>`
> Enables [Custom Teleports](#custom-teleport).

### Enable Interpolation `<Hotkeys>`
> Use the specified velocity override to move to the specified position.
::: info
This function is disabled in the current version.
:::

### Interpolation Speed
> Set speed magnification
- Default Value: `10`

### Auto Teleport `<Hotkeys>`
> Automatically moves to the next teleport file

### Delay Time (s)
> Set the delay for [Auto Teleport](#auto-teleport-hotkeys).

Depending on your computer specifications, set the delay time

### Fast TP
> No loading screen when teleport
- The map may not load all terrain in time.
- It is recommended to save the game to a solid-state hard disk before using this function.


### Teleport Next
> Use hotkeys to quickly teleport to the next point.

Default Hotkeys: RightBracket `]`

### Teleport Previous
> Use hotkeys to quickly teleport to the previous point.

Default Hotkeys: LeftBracket `[`

### Create-Json

<p align="center">
<img src='/features/create-json.webp'>
</p>

#### Name
> Sets the nickname for the teleport file to be created.

#### Description
> Sets the description of the teleport file to be created.

#### Add Teleport
> Create a teleport file in the `./teleports` directory named name described as description the current position.

#### JSON input
> Set the information to transfer files when Load from JSON.

#### Load from JSON
> Create a teleport file in the `./teleports` directory with the specified JSON information.

### Json path
> Path to teleport files folder.

### Auto Load Json
> Automatically load the json file after selecting the folder.

### Force Teleport
> Do not mind any conditions for the next test task to be enforced.

### Custom Teleport Tutorial
> Since there are still quite a few of you who don't know how to use custom teleport, the following will be detailed instructions on how to use it.

1. First, download the teleport files you need. You can download from these sources:
- https://github.com/Xcating/Json_Integration
- https://github.com/Xcating/Json_Integration/tree/dev (English)
- https://github.com/SL4F/CompiledKorepiTeleports
- https://drive.google.com/drive/folders/1p-HqdleH2X-tmPZjUGLr_jBP5V67JdXS (for Vietnamese)
- https://github.com/Sam5440/Genshin_Impact_Teleport

2. Create a `teleports` folder in cheat folder
<img src='/features/teleports-folder.webp'>

3. Extract teleport files to `teleports` folder
<img src='/features/extract.webp'>

4. Enable [Custom Teleport](#custom-teleport) feature and click Reload in the cheat menu
<img src='/features/reload.webp'>

5. Click on `All` checkbox then click `Select` the first file (which has a index number of 0)
<img src='/features/click-all-checkbox.webp'>

Now you are ready to speed up Genshin. Press the `]` button to move.\
Then just press `]` to continue. If you want to go back to a previous point, just press `[`.

### Auto Teleport Tutorial
> if you want to AFK to let the tool pick up the material by itself.
1. Enable [Auto Loot](/features/world#auto-loot).
1. Enable [Auto Teleport](#auto-teleport-hotkeys) feature.
2. Set the delay time to suit your pc specs.
4. Enjoy

::: tip
Remember to `Delete Checked` before you finished all.
:::

## Custom Teleport Pro
> Custom Teleport Rewritten. Only available in [Bkebi](/cheats/bkebi)/[Sakura](/cheats/sakura)
:::info
Create or load custom teleportation nodes for quick collection and more.
:::

### Enable `<Hotkeys>`
> Enables Custom Teleport Pro.
::: warning
There is a chance of being teleported to the nearest Teleport Waypoint when using traveler teleportation.
:::

### Fast TP
> Using world teleport there will be no loading screen.
::: warning
- Certain terrains may not fully load
- It is recommended to save the game to a solid-state hard disk before using
- Using this function may be at risk
- This function is only available for Debug builds
:::

### Auto Teleport `<Hotkeys>`
> Teleport sequentially from the selected node according to the node order.

### Intelligent Teleport
> Teleport by distance from nearest to far instead of node order.

### Skip Bless Of Moon
> Skip the bless of moon UI at 4:00am.

### Auto Teleport Delay
> Set the delay for Auto teleport.
- Optional Range: 5 ~ 360 seconds

### Random Delay
> Use a random delay for Auto teleport (overrides fixed delay).
- Min Delay: 5 ~ 359 seconds
- Max Delay: 6 ~ 360 seconds

### Intelligent TP Delay Reduce
> Reduces delay for short distances.
- Applies when distance < 50m
- Optional Range: 0.25 ~ 1
- Example: With delay of 20s and rate of 0.75, delay becomes 15s for short distances
::: tip
Requires both Auto teleport and Intelligent teleport to be enabled
:::

### Teleport Controls
- **Teleport to Next**: Quickly teleport to the next point
- **Teleport to Previous**: Quickly teleport to the previous point
- **Quick Add Position**: Add current character coordinates as new node
  - Current map must match teleport file map
  - Enable must be checked
  - Must be >1m from existing nodes

### Command Execution
- **Execute Command on Finish**: Runs specified command after completing all auto teleports
- **Command Line**: Set command to execute (e.g., `shutdown -s -t 60` for shutdown after 60s)

### File Operations
- **Create New File**: Create teleport file with Name and Description
- **Reload Files**: Refresh teleport file list
- **Open Folder**: Open `./tp_files` directory
- **Merge Selected**: Combine multiple teleport files
- **Save Changes**: Update current file name/description

:::tip
Since Bkebi-1.1.0, the old version of Json teleport file needs to be [converted](https://github.com/Bkebi-Group/TeleportFilterConverter) before it can be used.
:::

### File Properties
- **Name**: Nickname for the teleport file
- **Description**: File description
- **Current File**: Active teleport file
- **Current Map**: Associated map (`3`-Teyvat, `5`-Enkanomiya, `6`-Chasm)

### Node Management
- View node coordinates (X Y Z)
- Track teleported status
- Add/Delete nodes
- Clear teleport records
- Delete selected nodes

## Map Teleport
> Teleport to the mouse cursor position on the map.

<p align="center">
<img src='/features/Map_Teleport.webp'>
</p>

### Enabled `<Hotkeys>`
> Enables [Map Teleport](#map-teleport)

### Use transport position
> Use system default transport position instead of mark absolute position when teleport to building and transport mark.

### Override Height (m)
> If teleport cannot get ground height of target location, it will teleport you to the height specified here.

### Teleport Key
> Press and hold to use [Map Teleport](#map-teleport).

- When the set hotkey is not `None`, need to use `LMC` (Left Mouse Click) to teleport while holding down `Teleport Key`.
- When the set hotkey is `None`, just use `LMC` to teleport.
- If you need to switch to take effect, set this to None and set the button in [Hotkeys - Map Teleport](#map-teleport).

## Quest Teleport
> Press the hotkey to quickly teleport to the mission tracking target.

<p align="center">
<img src='/features/Quest_Teleport.webp'>
</p>

### QuestTP `<Hotkeys>`
> Enables [Quest Teleport](#quest-teleport).

### QuestTpKey
> Use the set hotkey to teleport to the tracked mission target.

When the set hotkey is `None`, [Quest Teleport](#quest-teleport) will not take effect.
