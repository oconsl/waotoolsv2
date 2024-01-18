export const colossusExp = [
  { level: 1, c: 5, ar: 0 },
  { level: 2, c: 10, ar: 0 },
  { level: 3, c: 25, ar: 0 },
  { level: 4, c: 45, ar: 0 },
  { level: 5, c: 65, ar: 0 },
  { level: 6, c: 120, ar: 15 },
  { level: 7, c: 160, ar: 0 },
  { level: 8, c: 200, ar: 0 },
  { level: 9, c: 240, ar: 0 },
  { level: 10, c: 280, ar: 0 },
  { level: 11, c: 700, ar: 120 },
  { level: 12, c: 850, ar: 0 },
  { level: 13, c: 1000, ar: 0 },
  { level: 14, c: 1150, ar: 0 },
  { level: 15, c: 1300, ar: 0 },
  { level: 16, c: 1650, ar: 380 },
  { level: 17, c: 1850, ar: 0 },
  { level: 18, c: 2050, ar: 0 },
  { level: 19, c: 2250, ar: 0 },
  { level: 20, c: 2450, ar: 0 },
  { level: 21, c: 2600, ar: 740 },
  { level: 22, c: 2800, ar: 0 },
  { level: 23, c: 3000, ar: 0 },
  { level: 24, c: 3200, ar: 0 },
  { level: 25, c: 3400, ar: 0 }
]

export const colossusSlots = [
  {
    slot: 1,
    troop: '',
    minLevel: 0,
    maxLevel: 25,
    template: {},
    ability: [
      { key: 1, level: 0, c: 0, ar: 0 },
      { key: 2, level: 0, c: 0, ar: 0 },
      { key: 3, level: 0, c: 0, ar: 0 },
      { key: 4, level: 0, c: 0, ar: 0 },
      { key: 5, level: 0, c: 0, ar: 0 },
      { key: 6, level: 0, c: 0, ar: 0 }
    ]
  },
  {
    slot: 2,
    troop: '',
    template: {},
    minLevel: 0,
    maxLevel: 25,
    ability: [
      { key: 1, level: 0, c: 0, ar: 0 },
      { key: 2, level: 0, c: 0, ar: 0 },
      { key: 3, level: 0, c: 0, ar: 0 },
      { key: 4, level: 0, c: 0, ar: 0 },
      { key: 5, level: 0, c: 0, ar: 0 },
      { key: 6, level: 0, c: 0, ar: 0 }
    ]
  }
]

export const colossusAbilityStatsLevel = {
  abilityStatsDetA: [
    { level: 1, stat: 0.5 },
    { level: 2, stat: 0.8 },
    { level: 3, stat: 1.1 },
    { level: 4, stat: 1.4 },
    { level: 5, stat: 1.7 },
    { level: 6, stat: 2.5 },
    { level: 7, stat: 3 },
    { level: 8, stat: 3.5 },
    { level: 9, stat: 4 },
    { level: 10, stat: 4.5 },
    { level: 11, stat: 5.6 },
    { level: 12, stat: 6.3 },
    { level: 13, stat: 7 },
    { level: 14, stat: 7.7 },
    { level: 15, stat: 8.4 },
    { level: 16, stat: 9.8 },
    { level: 17, stat: 10.7 },
    { level: 18, stat: 11.6 },
    { level: 19, stat: 12.5 },
    { level: 20, stat: 13.4 },
    { level: 21, stat: 15.2 },
    { level: 22, stat: 16.4 },
    { level: 23, stat: 17.6 },
    { level: 24, stat: 18.8 },
    { level: 25, stat: 20 }
  ],
  abilityStatsDetB: [
    { level: 1, stat: 0.3 },
    { level: 2, stat: 0.5 },
    { level: 3, stat: 0.7 },
    { level: 4, stat: 0.9 },
    { level: 5, stat: 1.1 },
    { level: 6, stat: 1.7 },
    { level: 7, stat: 2.1 },
    { level: 8, stat: 2.5 },
    { level: 9, stat: 2.9 },
    { level: 10, stat: 3.3 },
    { level: 11, stat: 4.2 },
    { level: 12, stat: 4.8 },
    { level: 13, stat: 5.4 },
    { level: 14, stat: 6 },
    { level: 15, stat: 6.6 },
    { level: 16, stat: 7.7 },
    { level: 17, stat: 8.4 },
    { level: 18, stat: 9.1 },
    { level: 19, stat: 9.8 },
    { level: 20, stat: 10.5 },
    { level: 21, stat: 11.8 },
    { level: 22, stat: 12.6 },
    { level: 23, stat: 13.4 },
    { level: 24, stat: 14.2 },
    { level: 25, stat: 15 }
  ]
}

export const colossusTroopsConf = [
  {
    troop: 'cavalry',
    desc: 'Cavalry',
    abilityStats: [
      { abilityLevel: 1, desc: 'Cavalry Attack' },
      { abilityLevel: 2, desc: 'Cavalry HP' },
      { abilityLevel: 3, desc: 'Cavalry Defense' },
      { abilityLevel: 4, desc: 'Cavalry take less damage from Infantry' },
      { abilityLevel: 5, desc: 'Cavalry take less damage from Archers' },
      { abilityLevel: 6, desc: 'Cavalry take less damage from Mages' }
    ],
    levelStats: [
      { abilityLevel: 1, level: 50, stat: 4.3, statDesc: 'Damage Against Angels Boost' },
      { abilityLevel: 2, level: 70, stat: 5.4, statDesc: 'Attack Boost' },
      { abilityLevel: 3, level: 90, stat: 11.2, statDesc: 'Reduces Damage taken from Archers' },
      { abilityLevel: 4, level: 110, stat: 14.4, statDesc: 'Reduces Damage taken from Mages' },
      { abilityLevel: 5, level: 130, stat: 8.8, statDesc: 'Troops Damage' },
      { abilityLevel: 6, level: 200, stat: '', statDesc: '' }
    ]
  },
  {
    troop: 'infantry',
    desc: 'Infantry',
    abilityStats: [
      { abilityLevel: 1, desc: 'Infantry Attack' },
      { abilityLevel: 2, desc: 'Infantry HP' },
      { abilityLevel: 3, desc: 'Infantry Defense' },
      { abilityLevel: 4, desc: 'Infantry take less damage from Cavalry' },
      { abilityLevel: 5, desc: 'Infantry take less damage from Archers' },
      { abilityLevel: 6, desc: 'Infantry take less damage from Mages' }
    ],
    levelStats: [
      { abilityLevel: 1, level: 50, stat: 4.3, statDesc: 'Damage Against Angels Boost' },
      { abilityLevel: 2, level: 70, stat: 5.4, statDesc: 'Attack Boost' },
      { abilityLevel: 3, level: 90, stat: 11.2, statDesc: 'Reduces Damage taken from Mages' },
      { abilityLevel: 4, level: 110, stat: 14.4, statDesc: 'Reduces Damage taken from Archers' },
      { abilityLevel: 5, level: 130, stat: 8.8, statDesc: 'Troops Damage' },
      { abilityLevel: 6, level: 200, stat: '', statDesc: '' }
    ]
  },
  {
    troop: 'archer',
    desc: 'Archer',
    abilityStats: [
      { abilityLevel: 1, desc: 'Archer Attack' },
      { abilityLevel: 2, desc: 'Archer HP' },
      { abilityLevel: 3, desc: 'Archer Defense' },
      { abilityLevel: 4, desc: 'Archer damage increased on Infantry' },
      { abilityLevel: 5, desc: 'Archer damage increased on Cavalry' },
      { abilityLevel: 6, desc: 'Archer damage increased on Mages' }
    ],
    levelStats: [
      { abilityLevel: 1, level: 50, stat: 5.2, statDesc: 'Reduces Damage taken from Angels' },
      { abilityLevel: 2, level: 70, stat: 5.4, statDesc: 'HP Boost' },
      { abilityLevel: 3, level: 90, stat: 7.5, statDesc: 'Damage Against Infantry Boost' },
      { abilityLevel: 4, level: 110, stat: 9.7, statDesc: 'Damage Against Cavalry Boost' },
      { abilityLevel: 5, level: 130, stat: 8.8, statDesc: 'Troops Damage Taken Reduction' },
      { abilityLevel: 6, level: 200, stat: '', statDesc: '' }
    ]
  },
  {
    troop: 'mage',
    desc: 'Mage',
    abilityStats: [
      { abilityLevel: 1, desc: 'Mage Attack' },
      { abilityLevel: 2, desc: 'Mage HP' },
      { abilityLevel: 3, desc: 'Mage Defense' },
      { abilityLevel: 4, desc: 'Mage damage increased on Infantry' },
      { abilityLevel: 5, desc: 'Mage damage increased on Cavalry' },
      { abilityLevel: 6, desc: 'Mage damage increased on Archers' }
    ],
    levelStats: [
      { abilityLevel: 1, level: 50, stat: 5.2, statDesc: 'Reduces Damage taken from Angels' },
      { abilityLevel: 2, level: 70, stat: 5.4, statDesc: 'HP Boost' },
      { abilityLevel: 3, level: 90, stat: 7.5, statDesc: 'Damage Against Cavalry Boost' },
      { abilityLevel: 4, level: 110, stat: 9.7, statDesc: 'Damage Against Infantry Boost' },
      { abilityLevel: 5, level: 130, stat: 8.8, statDesc: 'Troops Damage Taken Reduction' },
      { abilityLevel: 6, level: 200, stat: '', statDesc: '' }
    ]
  }
]

export const colossusLevelTemplates = [
  {
    template: 50,
    abilities: [
      { key: 1, level: 8 },
      { key: 2, level: 8 },
      { key: 3, level: 8 },
      { key: 4, level: 8 },
      { key: 5, level: 9 },
      { key: 6, level: 9 }
    ]
  },
  {
    template: 70,
    abilities: [
      { key: 1, level: 10 },
      { key: 2, level: 12 },
      { key: 3, level: 12 },
      { key: 4, level: 12 },
      { key: 5, level: 12 },
      { key: 6, level: 12 }
    ]
  },
  {
    template: 90,
    abilities: [
      { key: 1, level: 15 },
      { key: 2, level: 15 },
      { key: 3, level: 15 },
      { key: 4, level: 15 },
      { key: 5, level: 15 },
      { key: 6, level: 15 }
    ]
  },
  {
    template: 110,
    abilities: [
      { key: 1, level: 18 },
      { key: 2, level: 18 },
      { key: 3, level: 18 },
      { key: 4, level: 19 },
      { key: 5, level: 19 },
      { key: 6, level: 18 }
    ]
  },
  {
    template: 130,
    abilities: [
      { key: 1, level: 20 },
      { key: 2, level: 22 },
      { key: 3, level: 22 },
      { key: 4, level: 22 },
      { key: 5, level: 22 },
      { key: 6, level: 22 }
    ]
  },
  {
    template: 150,
    abilities: [
      { key: 1, level: 25 },
      { key: 2, level: 25 },
      { key: 3, level: 25 },
      { key: 4, level: 25 },
      { key: 5, level: 25 },
      { key: 6, level: 25 }
    ]
  }
]
