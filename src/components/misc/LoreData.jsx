import CharacterEnum from "../../enums/CharacterEnum";
import card1 from "../../img/card1.png"
import card2 from "../../img/card2.png"
import card3 from "../../img/card3.png"
import card4 from "../../img/card4.png"
import card5 from "../../img/card5.png"
import card6 from "../../img/card6.png"
import card7 from "../../img/card7.png"
import card8 from "../../img/card8.png"

//This file is meant to simulate an API response that contains this additional info
const LoreData = [{
    key: CharacterEnum.WORLD_1,
    title: "The Kingdom",
    desc: "Once, the kingdom was a place of peace and prosperity, respected throughout the land.  After the Great Split it's fallen far from where it once was.  However, it still stands as one of the last safe places in the world.",
    imgSrc: card1
},
{
    key: CharacterEnum.WORLD_2,
    title: "The Void",
    desc: "No one knows where the Void came from.  Some think it's always been there.  Some think it's the remains of the God's failed attempts at creating life.  All we know is that for centuries creatures of the void have found their way into our world.  However, as most of them appear to be mindless, they never posed much of a threat.  Now, with the Void King controlling them, it seems as if there's nothing that can stop the void from consuming all.",
    imgSrc: card2
},
{
    key: CharacterEnum.MAIN_CHAR,
    title: "The Protagonist",
    desc: "Tasked with preventing the Great Split, you went on an epic journey to gather allies & weapons needed to return the land to peace.  Finally, you arrived at ritual site just in time to watch it's completion.  While you couldn't stop the ritual, you were able to get close enough to steal some of the Void King's power over it.  With the void rapidly consuming the world, you're the only one with a chance to stop it.",
    imgSrc: card3
},
{
    key: CharacterEnum.MAIN_ANT,
    title: "The Antagonist",
    desc: "Originally born to a minor noble family on the outskirts of the kingdom, the man who would become the Void King felt he would never be able to rise above his station.  That all changed when he found a mysterious tome to summon the awful powers of the Void.  For years he grew is cult and ammassed the resources required to summon the Void into our world.  Now, he sits at the heart of the Void, leading it's invasion of our world.",
    imgSrc: card4
},
{
    key: CharacterEnum.ENEMY_3,
    title: "Void Bats",
    desc: "Eldrich creatures from the void. These 'bats' have been seen dotting the skies of the world ever since the Great Split.  While heavily armored on their back, they have much less protection should you manage to get above them.",
    imgSrc: card7
},
{
    key: CharacterEnum.ENEMY_1,
    title: "Wolves",
    desc: "Originally pack animals that lived in the forests surrounding the kingdom, these creatures begun moving closer to the kingdom as food becomes scarcer.  They don't pose much of a threat on their own, but they rarely are alone.",
    imgSrc: card5
},
{
    key: CharacterEnum.MECH_1,
    title: "Void Tunnels",
    desc: "As the Void encroaches farther on our world, the Void King's forces use these tunnels to mvoe quickly across the ruined world.  However, with your stolen power you can reroute these tunnels to your advantage, allowing you to move quickly across the world and avoid the Void King's forces.",
    imgSrc: card8
},
{
    key: CharacterEnum.ENEMY_2,
    title: "Void Cultists",
    desc: "The last remaining vestiges of the Cult of the Void.  These fanatics seek to ensure that the Void King is able to complete his conquest of our world.  They are often seen physically controlling the Void King's forces, and are often found near anything the Void King wishes to protect.",
    imgSrc: card6
}
]
export default LoreData;