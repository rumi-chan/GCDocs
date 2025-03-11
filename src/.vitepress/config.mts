import { defineConfig } from 'vitepress';
import { join } from 'node:path';
import { link } from 'node:fs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './docs',
  vite: {
    publicDir: join(__dirname, '../public'),
  },
  head: [['link', { rel: 'icon', href: '/logo.jpg', type: 'image/jpeg' }]],
  title: 'GC Docs',
  description: 'Documentation for certain anime game cheats',
  lang: 'en',
  appearance: 'dark',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/cheats/about/' },
    ],

    editLink: {
      pattern: 'https://github.com/rumi-chan/GCDocs/blob/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    sidebar: {
      '/cheats/': sidebar(),
      '/features/': sidebar(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rumi-chan/GCDocs' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2025-present Miyasaki Rumi`,
    },
  },
//   locales: {
//     root: {
//       label: 'English',
//       lang: 'en',
//     },
//     vi: {
//       label: 'Tiếng Việt',
//       lang: 'vi',
//       link: '/vi/',
//       themeConfig: {},
//     },
//   },
});

function sidebar() {
  return [
    {
      text: 'Cheats',
      collapsed: false,
      items: [
        { text: 'About', link: '/cheats/about' },
        { text: 'CCGenshin', link: '/cheats/ccgenshin' },
        { text: 'Akebi', link: '/cheats/akebi' },
        { text: 'Akebi-Private', link: '/cheats/akebi-private' },
        { text: 'Acrepi', link: '/cheats/acrepi' },
        { text: 'Bkebi', link: '/cheats/bkebi' },
        { text: 'Kebabi', link: '/cheats/kebabi' },
        { text: 'Korepi', link: '/cheats/korepi' },
        { text: 'Sakura', link: '/cheats/sakura' },
      ],
    },
    {
      text: 'Features',
      collapsed: false,
      items: [
        { text: 'About', link: '/features/about' },
        {
          text: 'Player',
          link: '/features/player',
          collapsed: true,
          items: [
            { text: 'Aimbot', link: '/features/player#aimbot' },
            {
              text: 'Attack Effects',
              link: '/features/player#attack-effects',
              collapsed: true,
              items: [
                {
                  text: 'Multi-Hit Mode',
                  link: '/features/player#multi-hit-mode-hotkeys',
                },
                {
                  text: 'Multi-Target',
                  link: '/features/player#multi-target-hotkeys',
                },
                {
                  text: 'Multi-Animation',
                  link: '/features/player#multi-animation-hotkeys',
                },
                {
                  text: 'Attack Speed',
                  link: '/features/player#attack-speed-hotkeys',
                },
                {
                  text: 'Custom Element',
                  link: '/features/player#custom-element-hotkeys',
                },
                {
                  text: 'Infuse Element',
                  link: '/features/player#infuse-element-hotkeys',
                },
                {
                  text: 'Auto Weakspot',
                  link: '/features/player#auto-weakspot-hotkeys',
                },
                {
                  text: 'Critical Hit',
                  link: '/features/player#critical-hit-hotkeys',
                },
                {
                  text: 'Nullify Incoming Element',
                  link: '/features/player#nullify-incoming-element-hotkeys',
                },
              ],
            },
            { text: 'Auto Run', link: '/features/player#auto-run' },
            { text: 'Bunny Hop', link: '/features/player#bunny-hop' },
            {
              text: 'Cooldown Effects',
              link: '/features/player#cooldown-effects',
              collapsed: true,
              items: [
                {
                  text: 'Max Burst Energy',
                  link: '/features/player#max-burst-energy-hotkeys',
                },
                {
                  text: 'No Avatar Skill Cooldown',
                  link: '/features/player#no-avatar-skill-cooldown-hotkeys',
                },
                {
                  text: 'No Sprint Cooldown',
                  link: '/features/player#no-sprint-cooldown-hotkeys',
                },
                {
                  text: 'Instant Bow Charge',
                  link: '/features/player#instant-bow-charge-hotkeys',
                },
                {
                  text: 'No Vehicle Skill Cooldown',
                  link: '/features/player#no-vehicle-skill-cooldown-hotkeys',
                },
              ],
            },
            {
              text: 'Enhanced Movement',
              link: '/features/player#enhanced-movement',
              collapsed: true,
              items: [
                { text: 'Run On Water', link: '/features/player#run-on-water' },
                { text: 'Run Boost', link: '/features/player#run-boost' },
                { text: 'Jump Boost', link: '/features/player#jump-boost' },
                { text: 'Fly Boost', link: '/features/player#fly-boost' },
                {
                  text: 'Blink Movement',
                  link: '/features/player#blink-movement',
                },
              ],
            },
            { text: 'Fall-Control', link: '/features/player#fall-control' },
            { text: 'Friendly Fire', link: '/features/player#friendly-fire' },
            { text: 'God Mode', link: '/features/player#god-mode' },
            {
              text: 'Infinite Stamina',
              link: '/features/player#infinite-stamina',
            },
            {
              text: 'No-Clip',
              link: '/features/player#no-clip',
              collapsed: true,
              items: [
                {
                  text: 'No Animation',
                  link: '/features/player#no-animation-hotkeys',
                },
                {
                  text: 'Camera-relative movement',
                  link: 'features/player#camera-relative-movement',
                },
                {
                  text: 'Allow movement in a blocked area',
                  link: 'features/player#allow-movement-in-a-blocked-area',
                },
                {
                  text: 'Alternative No-clip',
                  link: '/features/player#alternate-no-clip',
                },
                {
                  text: 'Velocity mode',
                  link: '/features/player#velocity-mode-hotkeys',
                },
                {
                  text: 'Freeflight mode',
                  link: '/features/player#freeflight-mode-hotkeys',
                },
                {
                  text: 'Use Custom Keys',
                  link: '/features/player#use-custom-keys',
                },
                {
                  text: 'DragBackBypass',
                  link: '/features/player#dragbackbypass',
                },
              ],
            },
            { text: 'Player Speed', link: '/features/player#player-speed' },
            {
              text: 'Remote Utility',
              link: '/features/player#remote-utility',
              collapsed: true,
              items: [
                {
                  text: 'Claim Daily Commission Reward',
                  link: '/features/player#claim-daily-commission-reward-hotkeys'
                },
                {
                  text: 'Custom Talk',
                  link: '/features/player#custom-talk'
                },
                {
                  text: 'Spawn Gadget',
                  link: '/features/player#spawn-gadget'
                },
                {
                  text: 'Crafting',
                  link: '/features/player#crafting',
                  items: [
                    {
                      text: 'Custom Combine',
                      link: '/features/player#custom-combine'
                    }
                  ],
                },
                {
                  text: 'Summon Avatar',
                  link: '/features/player#summon-avatar'
                },
                {
                  text: 'Summon NPC',
                  link: '/features/player#summon-npc'
                },
                {
                  text: 'Summon Monster',
                  link: '/features/player#summon-monster'
                },
                {
                  text: 'Summon Item',
                  link: '/features/player#summon-item'
                },
                {
                  text: 'Open UI Page',
                  link: '/features/player#open-ui-page'
                },
                {
                  text: 'Map Manager',
                  link: '/features/player#map-manager'
                },
                {
                  text: 'Worship Statue',
                  link: '/features/player#worship-statue'
                },
                {
                  text: 'Change Traveler Element',
                  link: '/features/player#change-traveler-element'
                },
                {
                  text: 'Enter Domains',
                  link: '/features/player#enter-domains'
                },
              ],
            },
            { text: 'Stat Modifier', link: '/features/player#stat-modifier' },
          ],
        },
        {
          text: 'World',
          link: '/features/world',
          collapsed: true,
          items: [
            {
              text: 'Auto Activate Teleport',
              link: '/features/world#auto-activate-teleport',
            },
            {
              text: 'Auto Challenge',
              link: '/features/world#auto-challenge',
              collapsed: true,
              items: [
                {
                  text: 'Destroy Bomb',
                  link: '/features/world#destroy-bomb-hotkeys',
                },
                {
                  text: 'Custom Challenge',
                  link: '/features/world#custom-challenge',
                },
              ],
            },
            { text: 'Auto Cook', link: '/features/world#auto-cook' },
            { text: 'Auto Domain', link: '/features/world#auto-domain' },
            {
              text: 'Auto Destroy Objects',
              link: '/features/world#auto-destroy-objects',
            },
            { text: 'Auto Fish', link: '/features/world#auto-fish' },
            {
              text: 'Auto Loot',
              link: '/features/world#auto-loot',
              collapsed: true,
              items: [
                { text: 'Auto-Pickup', link: '/features/world#auto-pickup' },
                {
                  text: 'Auto-Treasure',
                  link: '/features/world#auto-treasure',
                },
                {
                  text: 'Custom Pickup Range',
                  link: '/features/world#custom-pickup-range',
                },
                { text: 'Looting Speed', link: '/features/world#looting-speed' },
                {
                  text: 'Looting delay fluctuation',
                  link: '/features/world#looting-delay-fluctuation',
                },
                {
                  text: 'Pickup Filter',
                  link: '/features/world#pickup-filter',
                },
              ],
            },
            { text: 'Auto Puzzle', link: '/features/world#auto-puzzle' },
            { text: 'Auto Seelie', link: '/features/world#auto-seelie' },
            {
              text: 'Auto Talk',
              link: '/features/world#auto-talk',
              collapsed: true,
              items: [
                { text: 'Auto Talk', link: '/features/world#auto-talk' },
                {
                  text: 'Auto-Select Dialog',
                  link: '/features/world#auto-select-dialog-hotkeys',
                },
                {
                  text: 'Skip Talk Scenes',
                  link: '/features/world#skip-talk-scenes',
                },
                {
                  text: 'Skip Cutscenes',
                  link: '/features/world#skip-cutscenes',
                },
                {
                  text: 'Fast Cutscenes',
                  link: '/features/world#fast-cutscenes',
                },
              ],
            },
            {
              text: 'Auto Tree Farm',
              link: '/features/world#auto-tree-farm',
            },
            { text: 'Claim Level Rewards', link: '/features/world#claim-level-rewards' },
            { text: 'Elemental Aura', link: '/features/world#elemental-aura' },
            { text: 'Game Speed', link: '/features/world#game-speed' },
            {
              text: 'Kill Aura',
              link: '/features/world#kill-aura',
              collapsed: true,
              items: [
                {
                    text: 'Use AFK Attack',
                    link: '/features/world#use-afk-attack-hotkey',
                },
                {
                  text: 'Crash Damage Mode',
                  link: '/features/world#crash-damage-mode-hotkeys',
                },
                {
                  text: 'Instant Death Mode',
                  link: '/features/world#instant-death-mode-hotkeys',
                },
                {
                  text: 'Only Hostile/Aggro',
                  link: '/features/world#only-hostile-aggro',
                },
              ],
            },
            { text: 'Map Manager', link: '/features/world#map-manager' },
            {
              text: 'Mob Vacuum',
              link: '/features/world#mob-vacuum',
              collapsed: true,
              items: [
                {
                  text: 'Monsters',
                  link: '/features/world#monsters-include-monsters-hotkeys',
                },
                {
                  text: 'Animals',
                  link: '/features/world#animals-include-animals-hotkeys',
                },
                {
                  text: 'Instant Vacuum',
                  link: '/features/world#instant-vacuum',
                },
                {
                  text: 'Only Hostile/Aggro',
                  link: '/features/world#only-hostile-aggro-1',
                },
                {
                  text: 'Remove Collider',
                  link: '/features/world#remove-collider-hotkeys',
                },
              ],
            },
            {
              text: 'Monster Changer',
              link: '/features/world#monster-changer',
            },
            { text: 'Take Achievements', link: '/features/world#take-achievements' },
            { text: 'Vacuum Loot', link: '/features/world#vacuum-loot' },
            {
              text: 'Other',
              link: '/features/world#other',
              collapsed: true,
              items: [
                {
                  text: 'Open Team Immediately',
                  link: '/features/world#open-team-immediately-hotkeys',
                },
                {
                  text: 'Skip Enhance Animation',
                  link: '/features/world#skip-enhance-animation',
                },
                {
                  text: 'Dumb Enemies',
                  link: '/features/world#dumb-enemies-hotkeys',
                },
                {
                  text: 'Freeze Enemies',
                  link: '/features/world#freeze-enemies-hotkeys',
                },
                {
                  text: 'Permanent Elemental Sight',
                  link: '/features/world#permanent-elemental-sight-hotkeys',
                },
                {
                  text: 'Skip Sumeru Music',
                  link: '/features/world#skip-sumeru-music-hotkeys',
                },
              ],
            },
          ],
        },
        {
          text: 'Teleport',
          link: '/features/teleport',
          collapsed: true,
          items: [
            {
              text: 'Oculi Teleport',
              link: '/features/teleport#oculi-teleport',
            },
            {
              text: 'Chest Teleport',
              link: '/features/teleport#chest-teleport',
            },
            {
              text: 'Custom Teleports',
              link: '/features/teleport#custom-teleport',
              collapsed: false,
              items: [
                {
                  text: 'Custom Teleport Tutorial',
                  link: '/features/teleport#custom-teleport-tutorial',
                },
                {
                  text: 'Auto Teleport Tutorial',
                  link: '/features/teleport#auto-teleport-tutorial',
                },
              ],
            },
            {
              text: 'Custome Teleport Pro',
              link: '/features/teleport#custom-teleport-pro',
            },
            {
              text: 'Map Teleport',
              link: '/features/teleport#map-teleport',
            },
            {
              text: 'Quest Teleport',
              link: '/features/teleport#quest-teleport',
            },
          ],
        },
        {
          text: 'ESP',
          link: '/features/esp.md',
        },
        {
          text: 'Visuals',
          link: '/features/visuals',
          collapsed: true,
          items: [
            {
              text: 'Animation Changer',
              link: '/features/visuals#animation-changer',
            },
            { text: 'Camera Zoom', link: '/features/visuals#camera-zoom' },
            { text: 'Constellation Modifier', link: '/features/visuals#constellation-modifier' },
            {
              text: 'Custom Profile',
              link: '/features/visuals#custom-profile',
            },
            {
              text: 'Custom Weather',
              link: '/features/visuals#custom-weather',
            },
            {
              text: 'Emotion Changer',
              link: '/features/visuals#emotion-changer',
            },
            { text: 'Extra Visual Settings', link: '/features/visuals#extra-visual-settings'},
            { text: 'FPS Unlock', link: '/features/visuals#fps-unlock' },
            { text: 'Fake Time', link: '/features/visuals#fake-time' },
            {
              text: 'Flycloak Modifier',
              link: '/features/visuals#flycloak-modified',
            },
            { text: 'Free Camera', link: '/features/visuals#free-camera' },
            {
              text: 'Hide UI',
              link: '/features/visuals#hide-ui',
              items: [
                { text: 'Hide Ping (Network Latency)', link: '/features/visuals#hide-ping'},
                { text: 'Hide HP Bar', link: '/features/visuals#hide-hp-bar'},
                { text: 'Hide Team HP Bar', link: '/features/visuals#hide-team-hp-bar'},
              ],
            },
            { text: 'Map Zoom', link: '/features/visuals#map-zoom' },
            { text: 'Menu Unlocker', link: '/features/visuals#menu-unlocker' },
            { text: 'PaimonFollow', link: '/features/visuals#paimonfollow' },
            { text: 'Skin Modifier', link: '/features/visuals#skin-modifier' },
            {
              text: 'Texture Changer',
              link: '/features/visuals#texture-changer',
            },
            {
              text: 'Other',
              link: '/features/visuals#others',
              collapsed: true,
              items: [
                {
                  text: 'Show Chest Indicator',
                  link: '/features/visuals#show-chest-indicator',
                },
                {
                  text: 'Show Skill Cooldowns',
                  link: '/features/visuals#show-skill-cooldowns',
                },
                { text: 'No Black Screen', link: '/features/visuals#no-black-screen' },
                { text: 'No Fog', link: '/features/visuals#no-fog' },
                { text: 'No Grass', link: '/features/visuals#no-grass' },
                { text: 'No Map Fog', link: '/features/visuals#no-map-fog' },
                { text: 'Dolphin Dive', link: '/features/visuals#dolphin-dive' },
                { text: 'No Camera Blur', link: '/features/visuals#no-camera-blur' },
                { text: 'No Camera Shake', link: '/features/visuals#no-camera-shake' },
                { text: 'No Footprints', link: '/features/visuals#no-footprints' },
                { text: 'No Burst Animation', link: '/features/visuals#no-burst-animation' },
                { text: 'GMicon', link: '/features/visuals#gmicon' },
                {
                  text: 'Enable Peeking',
                  link: '/features/visuals#enable-peeking',
                },
              ],
            },
          ],
        },
        {
          text: 'Misc',
          link: '/features/misc',
          collapsed: true,
          items: [
            {
              text: 'Gacha URL Fetcher',
              link: '/features/misc#gacha-url-fetcher',
            },
            {
              text: 'RSA Patch',
              link: '/features/misc#rsa-patch',
            },
            {
              text: 'Watermark/Prevent Screenshot',
              link: '/features/misc#watermark-prevent-screenshot',
            },
          ],
        },
        {
          text: 'Interactive Map',
          link: '/features/interactive-map',
        },
        {
          text: 'Hotkeys',
          link: '/features/hotkeys.md',
        },
        {
          text: 'Settings',
          link: '/features/settings.md',
        },
        {
          text: 'Debug',
          link: '/features/debug.md',
          collapsed: true,
          items: [
            {
              text: 'Entity Manager',
              link: '/features/debug#entity-manager',
            },
            {
              text: 'Position',
              link: '/features/debug#position',
            },
            {
              text: 'Map Manager',
              link: '/features/debug#map-manager',
            },
            {
              text: 'FPS Graph',
              link: '/features/debug#fps-graph',
            },
            {
              text: 'Lua Executor',
              link: '/features/debug#lua-executor',
            },
            {
              text: 'Packet Sniffer',
              link: '/features/debug#packet-sniffer',
            },
          ],
        },
      ],
    },
  ];
}
