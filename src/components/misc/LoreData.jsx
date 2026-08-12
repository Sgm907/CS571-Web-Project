import CharacterEnum from "../../enums/CharacterEnum";

//This file is meant to simulate an API response that contains this additional info
const LoreData = [{
    key: CharacterEnum.WORLD_1,
    title: "The Kingdom",
    desc: "Once, the kingdom was a place of peace and prosperity, respected throughout the land.  After the Great Split it's fallen far from where it once was.  However, it still stands as one of the last safe places in the world.",
    imgSrc: "\\assets\\card1.png"
},
{
    key: CharacterEnum.WORLD_2,
    title: "The Void",
    desc: "No one knows where the Void came from.  Some think it's always been there.  Some think it's the remains of the God's failed attempts at creating life.  All we know is that for centuries creatures of the void have found their way into our world.  However, as most of them appear to be mindless, they never posed much of a threat.  Now, with the Void King controlling them, it seems as if there's nothing that can stop the void from consuming all.",
    imgSrc: "\\assets\\card2.png"
},
{
    key: CharacterEnum.MAIN_CHAR,
    title: "The Protagonist",
    desc: "Tasked with preventing the Great Split, you went on an epic journey to gather allies & weapons needed to return the land to peace.  Finally, you arrived at ritual site just in time to watch it's completion.  While you couldn't stop the ritual, you were able to get close enough to steal some of the Void King's power over it.  With the void rapidly consuming the world, you're the only one with a chance to stop it.",
    imgSrc: "\\assets\\card3.png"
},
{
    key: CharacterEnum.MAIN_ANT,
    title: "The Antagonist",
    desc: "Originally born to a minor noble family on the outskirts of the kingdom, the man who would become the Void King felt he would never be able to rise above his station.  That all changed when he found a mysterious tome to summon the awful powers of the Void.  For years he grew is cult and ammassed the resources required to summon the Void into our world.  Now, he sits at the heart of the Void, leading it's invasion of our world.",
    imgSrc: "\\assets\\card4.png"
},
{
    key: CharacterEnum.ENEMY_3,
    title: "Void Bats",
    desc: "Eldrich creatures from the void. These 'bats' have been seen dotting the skies of the world ever since the Great Split.  While heavily armored on their back, they have much less protection should you manage to get above them.",
    imgSrc: "\\assets\\card7.png"
},
{
    key: CharacterEnum.ENEMY_1,
    title: "Wolves",
    desc: "Originally pack animals that lived in the forests surrounding the kingdom, these creatures begun moving closer to the kingdom as food becomes scarcer.  They don't pose much of a threat on their own, but they rarely are alone.",
    imgSrc: "\\assets\\card5.png"
},
{
    key: CharacterEnum.MECH_1,
    title: "Void Tunnels",
    desc: "As the Void encroaches farther on our world, the Void King's forces use these tunnels to mvoe quickly across the ruined world.  However, with your stolen power you can reroute these tunnels to your advantage, allowing you to move quickly across the world and avoid the Void King's forces.",
    imgSrc: "\\assets\\card8.png"
},
{
    key: CharacterEnum.ENEMY_2,
    title: "Void Cultists",
    desc: "The last remaining vestiges of the Cult of the Void.  These fanatics seek to ensure that the Void King is able to complete his conquest of our world.  They are often seen physically controlling the Void King's forces, and are often found near anything the Void King wishes to protect.",
    imgSrc: "\\assets\\card6.png"
}
]
export default LoreData;