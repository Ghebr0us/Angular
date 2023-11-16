// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Welcome {
    sets: Set[];
}

export interface Set {
    code:        string;
    name:        string;
    type:        Type;
    booster?:    Array<PurpleBooster[] | FluffyBooster>;
    releaseDate: Date;
    block?:      string;
    onlineOnly:  boolean;
}

export enum PurpleBooster {
    MythicRare = "mythic rare",
    Rare = "rare",
}

export enum FluffyBooster {
    Common = "common",
    Rare = "rare",
    Uncommon = "uncommon",
}

export enum Type {
    Alchemy = "alchemy",
    Archenemy = "archenemy",
    Arsenal = "arsenal",
    Box = "box",
    Commander = "commander",
    Core = "core",
    DraftInnovation = "draft_innovation",
    DuelDeck = "duel_deck",
    Expansion = "expansion",
    FromTheVault = "from_the_vault",
    Funny = "funny",
    Masterpiece = "masterpiece",
    Masters = "masters",
    Memorabilia = "memorabilia",
    Minigame = "minigame",
    Planechase = "planechase",
    PremiumDeck = "premium_deck",
    Promo = "promo",
    Starter = "starter",
    Token = "token",
    Vanguard = "vanguard",
}
