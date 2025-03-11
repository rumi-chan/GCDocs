---
outline: deep
---

# Settings
Configure your cheat.

## Anti-Cheat Settings

### Spoof Anticheat Result
- Give the WindSeedClientNotify anti-cheat a false normal report when it loads.

### Disable Protection
- Disable Mhyprot2 Bypass
- Changes will take effect after a game restart
- This feature cannot be turned off at this time

### Mute Metrics Output
- Do not output metrics library spam in the console
- Shields the Json information output by the console at startup
- Changes will take effect after a game restart

Note: Will output this ignorable prompt:
```bash
Failed to find MiHoYoMTRSDK.d11. Metrics logs cannot be muted :( 
Note: you can ignore this message if MiHoYoMTRSDK.dll was removed/disabled by you or by game devs.
```

## General Settings

### Language
Set the language of the cheat. Available options:
- English (EN)
- Deutsch (DE)
- Français (FR)
- Italiano (IT)
- Português (PT)
- 日本語 (JP)
- 한국어 (KR)
- Português Brasil (BR)
- Español Chile (CL)
- မြန်မာ (Myanmar)
- Bahasa Indonesia (ID)
- Русский (RU)
- 简体中文 (ZH-CN)
- 繁體中文 (ZH-TW)
- Tiếng Việt (VN)

### Show Cheat Menu Key
- Default: F1
- If forgotten: Delete `"MenuKey": {num}` in root `cfg.json` file
- Alternative: Use GhostClient-MenuHotKey

### Initialization Settings
- **Initialization Delay**: Time to inject cheat after game start
- **Command Line Arguments**: Specify game launch parameters
- **Additional DLL**: Inject another DLL during cheat injection
- **Hotkeys Enabled**: Toggle all hotkeys except Show Cheat Menu Key

## Logging

### Console Logging
- Keeps console open and displays logs
- Requires injector.exe
- Changes apply after restart

### File Logging
- Saves logs to ./logs folder
- Changes apply after restart

## Interface Windows

### Status Window
- Show/Hide Status Window
- Enable/Disable LMB movement

### Info Window
- Show/Hide Info Window
- Enable/Disable LMB movement

### FPS Indicator
- Show/Hide FPS display
- Enable/Disable LMB movement

### Notifications
- Configure notification display duration (1-10000ms)

## Fast Exit
Quick game termination feature:
- Enable/Disable Fast Exit
- Configure hotkey (avoid using Show Cheat Menu Key)

## Interface Customization

### Theme Management
- Set font size (8+)
- Save/Replace themes
- Select/Delete themes
- Toggle theme customization window

## Account Switcher
Automatic login management:

Launch Parameters:
```bash
-account {Account Name}    # Switch accounts
-region {Region}          # Change region (usa/eu/asia/thm)
-i                        # Multiple instance support
```

### Account Management
- Customize account nicknames
- Export account status to accounts.ini

## Security
### Block WindSeed
- Blocks WindSeed packets from malicious servers that could cause RCE
- Only used on private servers