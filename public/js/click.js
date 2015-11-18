var mainobj = {
    "context": {
        "owl": "http://www.w3.org/2002/07/owl",
        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns",
        "rdfs": "http://www.w3.org/2000/01/rdf-schema",
        "xsd": "http://www.w3.org/2001/XMLSchema"
    },
    "graph": [{
        "id": "residesInCastle",
        "type": "owl:ObjectProperty",
        "rdfs:domain": {
            "id": "Person"
        },
        "rdfs:range": {
            "id": "Castle"
        },
        "rdfs:subPropertyOf": {
            "id": "locatedInContinent"
        }
    }, {
        "id": "BranStark",
        "type": [
            "Wargs",
            "owl:NamedIndividual"
        ],
        "belongsToHouse": {
            "id": "houseStark"
        },
        "hasName": "Bran Stark",
        "hasSibling": {
            "id": "AryaStark"
        },
        "hasTitle": "Prince"
    }, {
        "id": "Drogon",
        "type": [
            "Dragon",
            "owl:NamedIndividual"
        ],
        "CreatureHasName": "Drogon",
        "creatureBelongsTo": {
            "id": "DenarysTargaryen"
        },
        "rdfs:comment": "Drogon is one of the dragons born in the Dothraki Sea, along with Viserion and Rhaegal. He is named after Daenerys' late husband Khal Drogo. He is distinguishable by his black and red colored scales, and red-black wings. He is the largest and most aggressive of the three hatchlings."
    }, {
        "id": "CasterlyRock",
        "type": [
            "Castle",
            "owl:NamedIndividual"
        ],
        "CastleHeldByHouse": {
            "id": "houseLannister"
        },
        "locatedInContinent": {
            "id": "Westeros"
        },
        "rdfs:comment": "Casterly Rock is the ancestral stronghold of House Lannister. It is located on the Western coast of Westeros on a rocky promontory overlooking the Sunset Sea. It overlooks the major city of Lannisport. A major goldmine is located under Casterly Rock. It is one of the most productive in the realm and provides House Lannister with their wealth."
    }, {
        "id": "theNightsWatch",
        "type": [
            "owl:NamedIndividual",
            "Organisation"
        ],
        "locatedInContinent": {
            "id": "Westeros"
        },
        "rdfs:comment": "Night's Watch is a military order which holds and guards the Wall, the immense ice structure which separates the northern border of the Seven Kingdoms from the lands beyond. The order was led by Lord Commander Jon Snow from the stronghold of Castle Black up until his death by mutineers. And before Jon was led by Lord Commander Jeor Mormont, who also got killed in a mutiny. The current Lord Commander is still to be decided.\nThe Night's Watch consists of three groups: the Rangers, who fight, defend the Wall and patrol the Haunted Forest; the Builders, who maintain the Wall and the castles; and the Stewards, who support and feed the members of the Watch."
    }, {
        "id": "HousehasPeople",
        "type": "owl:ObjectProperty",
        "owl:inverseOf": {
            "id": "belongsToHouse"
        }
    }, {
        "id": "Nymeria",
        "type": [
            "owl:NamedIndividual",
            "Direwolf"
        ],
        "CreatureHasName": "Nymeria",
        "creatureBelongsTo": {
            "id": "AryaStark"
        },
        "rdfs:comment": "Nymeria, adopted by Arya Stark. Fearing for Nymeria's life, Arya chased her away after the wolf cub attacked Prince Joffrey Baratheon to defend her owner. She is now loose somewhere in the Riverlands, the first direwolf seen that far south (other than Grey Wind) in many centuries."
    }, {
        "id": "NormalSteel",
        "type": "owl:Class",
        "rdfs:subClassOf": {
            "id": "Sword"
        }
    }, {
        "id": "JonSnow",
        "type": [
            "owl:NamedIndividual",
            "Person"
        ],
        "belongsToHouse": {
            "id": "houseStark"
        },
        "carriesSword": {
            "id": "LongClaw"
        },
        "followsReligion": {
            "id": "OldGodsOfTheForest"
        },
        "hasName": "Jon Snow",
        "hasTitle": "998th Lord Commander of the Night's Watch",
        "residesInCastle": {
            "id": "theNightsWatch"
        },
        "rdfs:comment": "Jon is the bastard son of Lord Eddard Stark of Winterfell. He was a steward in the Night's Watch. Now serving on the Wall, Jon has found a place of acceptance where the circumstances of his birth are of little importance. He has a pet direwolf named Ghost, and wields the bastard sword, Longclaw, which was a gift from Lord Commander Jeor Mormont, who took Jon as his personal steward and came to see him as a surrogate son."
    }, {
        "id": "carriesSword",
        "type": "owl:ObjectProperty",
        "rdfs:domain": {
            "id": "Person"
        },
        "rdfs:range": {
            "id": "Sword"
        }
    }, {
        "id": "Continent",
        "type": "owl:Class"
    }, {
        "id": "CastleBlack",
        "type": [
            "owl:NamedIndividual",
            "Castle"
        ],
        "CastleHeldByHouse": {
            "id": "theNightsWatch"
        },
        "locatedInContinent": {
            "id": "Westeros"
        },
        "rdfs:comment": "Castle Black is the primary headquarters and redoubt of the Night's Watch. It is located roughly halfway along the length of the Wall on its southern side, at the northern end of the Kingsroad. It is a dark and chilling home to its garrison."
    }, {
        "id": "houseStark",
        "type": [
            "House",
            "owl:NamedIndividual"
        ],
        "hasHouseName": "House Stark",
        "hasSigil": "A grey direwolf on a white field.",
        "hasWords": "\"Winter is Coming\"",
        "rdfs:comment": "House Stark of Winterfell is an exiled Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is by far one of the oldest lines of Westerosi nobility, claiming a line of descent stretching back over eight thousand years. The head of the house was the Lord of Winterfell. Before the Targaryen conquest, the leaders of House Stark ruled over the region as the Kings in the North."
    }, {
        "id": "LongClaw",
        "type": [
            "owl:NamedIndividual",
            "ValyrianSteel"
        ]
    }, {
        "id": "DrownedGod",
        "type": [
            "Religion",
            "owl:NamedIndividual"
        ],
        "rdfs:comment": "The Drowned God is the deity worshiped on the Iron Islands. Together with the North, where the worship of the Old Gods of the Forest remains strong, the Iron Islands is one of the few regions in Westeros not abiding by the main religion of the Seven Kingdoms, the Faith of the Seven."
    }, {
        "id": "hasSpouse",
        "type": [
            "owl:SymmetricProperty",
            "owl:ObjectProperty"
        ],
        "rdfs:domain": {
            "id": "Person"
        },
        "rdfs:range": {
            "id": "Person"
        }
    }, {
        "id": "Wildling",
        "type": "owl:Class",
        "rdfs:subClassOf": {
            "id": "Person"
        }
    }, {
        "id": "houseTargaryen",
        "type": [
            "House",
            "owl:NamedIndividual"
        ],
        "HousehasPeople": {
            "id": "DenarysTargaryen"
        },
        "hasHouseName": "House Targaryen",
        "hasSigil": "A red three-headed dragon, on a black field.",
        "hasWords": "\"Fire and Blood\"",
        "rdfs:comment": "House Targaryen is a former Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries, before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile."
    }, {
        "id": "Dragon",
        "type": "owl:Class",
        "rdfs:subClassOf": {
            "id": "Creature"
        }
    }, {
        "id": "locatedInContinent",
        "type": "owl:ObjectProperty",
        "rdfs:domain": [{
            "id": "Organisation"
        }, {
            "id": "Castle"
        }],
        "rdfs:range": {
            "id": "Continent"
        }
    }, {
        "id": "Direwolf",
        "type": "owl:Class",
        "rdfs:subClassOf": {
            "id": "Creature"
        }
    }, {
        "id": "CreatureHasName",
        "type": "owl:DatatypeProperty"
    }, {
        "id": "creatureBelongsTo",
        "type": "owl:ObjectProperty",
        "owl:inverseOf": {
            "id": "hasCreature"
        },
        "rdfs:domain": {
            "id": "Creature"
        },
        "rdfs:range": {
            "id": "Person"
        }
    }, {
        "id": "Organisation",
        "type": "owl:Class"
    }, {
        "id": "Essos",
        "type": [
            "owl:NamedIndividual",
            "Continent"
        ],
        "rdfs:comment": "Essos is an immense landmass located to the east of Westeros, extending into the far east of the known world."
    }, {
        "id": "belongsToHouse",
        "type": "owl:ObjectProperty",
        "rdfs:domain": {
            "id": "House"
        },
        "rdfs:range": {
            "id": "Person"
        }
    }, {
        "id": "hasName",
        "type": "owl:DatatypeProperty",
        "rdfs:domain": {
            "id": "Person"
        },
        "rdfs:range": {
            "id": "xsd:string"
        },
        "rdfs:subPropertyOf": {
            "id": "personInfo"
        }
    }, {
        "id": "Castle",
        "type": "owl:Class"
    }, {
        "id": "ValyrianSteel",
        "type": "owl:Class",
        "rdfs:subClassOf": {
            "id": "Sword"
        }
    }, {
        "id": "ManceRayder",
        "type": [
            "owl:NamedIndividual",
            "Wildling"
        ],
        "hasName": "Mance Rayder",
        "hasTitle": "King-Beyond-the-Wall"
    }, {
        "id": "OldGodsOfTheForest",
        "type": [
            "Religion",
            "owl:NamedIndividual"
        ],
        "rdfs:comment": "The Old Gods of the Forest are a collection of innumerable and unnamed spirits of nature, which are worshiped by many people of the North and small numbers elsewhere in Westeros. It is the old religion of Westeros, supplanted by the Faith of the Seven which was brought to the continent by the Andals and is now the dominant faith of the continent. Though the two religions have coexisted for more than six thousand years, there is still tension between the most devout adherents of the two faiths."
    }, {
        "id": "AryaStark",
        "type": [
            "Person",
            "owl:NamedIndividual"
        ],
        "belongsToHouse": {
            "id": "houseStark"
        },
        "carriesSword": {
            "id": "Needle"
        },
        "followsReligion": {
            "id": "TheManyFacedGod"
        },
        "hasCreature": {
            "id": "Nymeria"
        },
        "hasName": "Arya Stark",
        "hasSibling": [{
            "id": "SansaStark"
        }, {
            "id": "JonSnow"
        }],
        "hasTitle": "Princess",
        "residesInCastle": {
            "id": "Winterfell"
        },
        "rdfs:comment": "Arya is the younger daughter of Lord Eddard Stark and his wife Lady Catelyn Stark. She is headstrong, fiercely independent, disdains traditional women's pursuits, and thus is often mistaken for a boy. She wields a sword named Needle, a gift from her half-brother, Jon Snow, and was trained in the Braavosi style of swordfighting while living in King's Landing. She adopted the direwolf Nymeria, but they have since been separated after Nymeria attacked Joffrey, forcing Arya to send her away in order to prevent her execution."
    }, {
        "id": "Summer",
        "type": [
            "owl:NamedIndividual",
            "Direwolf"
        ],
        "CreatureHasName": "Summer",
        "creatureBelongsTo": {
            "id": "BranStark"
        },
        "rdfs:comment": "Summer, adopted by Bran Stark. Fled Winterfell with Bran following the castle's sacking. Now with Bran and his companions beyond the Wall."
    }, {
        "id": "HouseHoldsCastle",
        "type": "owl:ObjectProperty",
        "rdfs:domain": {
            "id": "House"
        },
        "rdfs:range": {
            "id": "Castle"
        }
    }, {
        "id": "personInfo",
        "type": "owl:DatatypeProperty",
        "rdfs:domain": {
            "id": "Person"
        },
        "rdfs:range": {
            "id": "xsd:string"
        }
    }, {
        "id": "Winterfell",
        "type": [
            "Castle",
            "owl:NamedIndividual"
        ],
        "CastleHeldByHouse": {
            "id": "houseStark"
        },
        "locatedInContinent": {
            "id": "Westeros"
        },
        "rdfs:comment": "Winterfell is the seat of House Bolton (formerly House Stark). It is a very large castle located at the center of the North, from where the head of House Stark rules over his people. A small Godswood is enclosed within the walls. It is the capital of the North under King Robb Stark."
    }, {
        "id": "KingsLanding",
        "type": [
            "owl:NamedIndividual",
            "Castle"
        ],
        "CastleHeldByHouse": {
            "id": "houseLannister"
        },
        "locatedInContinent": {
            "id": "Westeros"
        },
        "rdfs:comment": "King's Landing is the capital of the Seven Kingdoms. It is located on the east coast of Westeros in the Crownlands, overlooking Blackwater Bay. It is the site of the Iron Throne and the Red Keep, the seat of the King of the Andals and the First Men. The walled city is located on uplands just north of where the Blackwater Rush flows into Blackwater Bay. It enjoys a warm climate and life there is luxurious for those that can afford it, although it is not without its slums such as Flea Bottom. The city is overpopulated and dangerous at the best of times, despite being policed by a City Watch."
    }, {
        "id": "Sword",
        "type": "owl:Class"
    }, {
        "id": "Yigrette",
        "type": [
            "owl:NamedIndividual",
            "Wildling"
        ]
    }, {
        "id": "houseLannister",
        "type": [
            "owl:NamedIndividual",
            "House"
        ],
        "hasHouseName": "House Lannister",
        "hasSigil": "A golden lion rampant on a crimson field",
        "hasWords": "\"Hear Me Roar!\"",
        "rdfs:comment": "House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. The major characters Jaime, Cersei, and Tyrion and the recurring characters Tywin, Kevan, and Lancel are members of the house. Tywin is the head of House Lannister and Lord of Casterly Rock."
    }, {
        "id": "CastleHeldByHouse",
        "type": "owl:ObjectProperty",
        "owl:inverseOf": {
            "id": "HouseHoldsCastle"
        },
        "rdfs:domain": {
            "id": "Castle"
        },
        "rdfs:range": [{
            "id": "Organisation"
        }, {
            "id": "House"
        }]
    }, {
        "id": "Religion",
        "type": "owl:Class"
    }, {
        "id": "",
        "type": "owl:Ontology"
    }, {
        "id": "followsReligion",
        "type": "owl:ObjectProperty",
        "rdfs:domain": {
            "id": "Person"
        },
        "rdfs:range": {
            "id": "Religion"
        }
    }, {
        "id": "Creature",
        "type": "owl:Class"
    }, {
        "id": "hasSigil",
        "type": "owl:DatatypeProperty",
        "rdfs:domain": {
            "id": "House"
        },
        "rdfs:range": {
            "id": "xsd:string"
        },
        "rdfs:subPropertyOf": {
            "id": "HouseInfo"
        }
    }, {
        "id": "Wargs",
        "type": "owl:Class",
        "rdfs:subClassOf": {
            "id": "Person"
        }
    }, {
        "id": "TyrionLannister",
        "type": [
            "owl:NamedIndividual",
            "Person"
        ],
        "belongsToHouse": {
            "id": "houseLannister"
        },
        "followsReligion": {
            "id": "FaithOfTheSeven"
        },
        "hasName": "Tyrion Lannister",
        "hasTitle": "Master of Coin (former)\nHand of the King (acting) (former)",
        "rdfs:comment": "Tyrion Lannister is the youngest son of Lord Tywin Lannister and younger brother of Cersei and Jaime Lannister. A dwarf, he uses his wit and intellect to overcome the prejudice he faces."
    }, {
        "id": "FacelessMen",
        "type": [
            "Organisation",
            "owl:NamedIndividual"
        ],
        "locatedInContinent": {
            "id": "Essos"
        },
        "rdfs:comment": "The Faceless Men are an organization based in the Free City of Braavos, though their members range far and wide across both Essos and Westeros. They are reportedly a guild of assassins who command exorbitant fees, but have a reputation for success that is unparalleled by any comparable organization."
    }, {
        "id": "hasHouseName",
        "type": "owl:DatatypeProperty",
        "rdfs:subPropertyOf": {
            "id": "HouseInfo"
        }
    }, {
        "id": "hasSibling",
        "type": [
            "owl:SymmetricProperty",
            "owl:TransitiveProperty",
            "owl:ObjectProperty"
        ],
        "rdfs:domain": {
            "id": "Person"
        },
        "rdfs:range": {
            "id": "Person"
        }
    }, {
        "id": "TheManyFacedGod",
        "type": [
            "owl:NamedIndividual",
            "Religion"
        ],
        "rdfs:comment": "The Many-Faced God, alternatively known as the God of Death, is a deity worshipped predominantly in the Free City of Braavos."
    }, {
        "id": "theOathKeeper",
        "type": [
            "owl:NamedIndividual",
            "ValyrianSteel"
        ]
    }, {
        "id": "DenarysTargaryen",
        "type": [
            "owl:NamedIndividual",
            "Person"
        ],
        "hasCreature": {
            "id": "Drogon"
        },
        "hasName": "Daenerys Targaryen",
        "hasTitle": "he First of Her Name\nQueen of Meereen\nQueen of the Andals, the Rhoynar and the First Men (claimant)\nLady Regnant of the Seven Kingdoms (claimant)\nProtector of the Realm (claimant)\nKhaleesi of the Great Grass Sea\nBreaker of Chains\nMother of Dragons",
        "rdfs:comment": "She is the only surviving child of King Aerys II Targaryen, who was ousted from the Iron Throne during Robert's Rebellion. Daenerys's mother was sent to safety on Dragonstone island just before the Sack of King's Landing, and died giving birth to her during a great storm which wrecked the remaining Targaryen fleet at anchor, earning her the sobriquet Daenerys Stormborn. She lived in exile in Essos and was a guest of Illyrio Mopatis, until she was sold into marriage by her brother to the Dothraki Khal Drogo; the two gradually fell in love, but she lost her husband and stillborn son to the manipulations of the vengeful maegi Mirri Maz Duur. Her marriage to Drogo and subsequent interaction with the Dothraki people gives her the confidence and strength to lead and the belief in herself as the rightful queen of the Seven Kingdoms. Following the death of her brother Viserys, Daenerys was left as the last Targaryen, and intends to claim the Iron Throne as her birthright. She formally styles herself as Queen Daenerys of House Targaryen, First of Her Name."
    }, {
        "id": "Person",
        "type": "owl:Class"
    }, {
        "id": "Needle",
        "type": [
            "NormalSteel",
            "owl:NamedIndividual"
        ],
        "rdfs:comment": "Longclaw is a Valyrian steel sword, in the possession of House Mormont for five centuries. When Lord Jeor Mormont retired from his lordship to take the black and command the Night's Watch, he passed it to his son and heir, Ser Jorah Mormont. When Jorah went into exile after trying to sell some poachers into slavery, he had the sword sent back to his father on the Wall.\n\nYears later, Jeor gave Longclaw to Jon Snow as a reward for saving his life from a wight. Before giving it to Jon he had the pommel remade, replacing the bear with a direwolf, the sigil of House Stark."
    }, {
        "id": "HouseInfo",
        "type": "owl:DatatypeProperty",
        "rdfs:domain": {
            "id": "House"
        },
        "rdfs:range": {
            "id": "xsd:string"
        }
    }, {
        "id": "swordCarriedBy",
        "type": "owl:ObjectProperty",
        "owl:inverseOf": {
            "id": "carriesSword"
        }
    }, {
        "id": "Lady",
        "type": [
            "Direwolf",
            "owl:NamedIndividual"
        ],
        "CreatureHasName": "Lady",
        "creatureBelongsTo": {
            "id": "SansaStark"
        },
        "rdfs:comment": "Lady, adopted by Sansa Stark. Lady is killed under orders of Robert Baratheon, at the urging of Cersei Lannister."
    }, {
        "id": "Ghost",
        "type": [
            "owl:NamedIndividual",
            "Direwolf"
        ],
        "CreatureHasName": "Ghost",
        "creatureBelongsTo": {
            "id": "JonSnow"
        },
        "rdfs:comment": "Ghost, adopted by Jon Snow. An albino with red eyes, Ghost followed Jon to his service with the Night's Watch at the Wall and beyond. Currently at Castle Black with Jon."
    }, {
        "id": "SansaStark",
        "type": [
            "owl:NamedIndividual",
            "Person"
        ],
        "followsReligion": {
            "id": "OldGodsOfTheForest"
        },
        "hasName": "Sansa Stark",
        "hasSpouse": {
            "id": "TyrionLannister"
        },
        "hasTitle": "Lady Of Winterfell",
        "rdfs:comment": "Sansa is the daughter of Lord Eddard Stark of Winterfell and his wife Lady Catelyn, sister of Robb, Arya, Bran and Rickon Stark, and half-sister of Jon Snow. She moves to King's Landing when her father is appointed Hand of the King to Robert Baratheon, and she is betrothed to heir apparent Joffrey."
    }, {
        "id": "hasTitle",
        "type": "owl:DatatypeProperty",
        "rdfs:domain": {
            "id": "Person"
        },
        "rdfs:range": {
            "id": "xsd:string"
        },
        "rdfs:subPropertyOf": {
            "id": "personInfo"
        }
    }, {
        "id": "WhiteWalker",
        "type": "owl:Class",
        "rdfs:subClassOf": {
            "id": "Person"
        }
    }, {
        "id": "hasCreature",
        "type": "owl:ObjectProperty",
        "rdfs:domain": {
            "id": "Person"
        },
        "rdfs:range": {
            "id": "Creature"
        }
    }, {
        "id": "hasWords",
        "type": "owl:DatatypeProperty",
        "rdfs:domain": {
            "id": "House"
        },
        "rdfs:range": {
            "id": "xsd:string"
        },
        "rdfs:subPropertyOf": {
            "id": "HouseInfo"
        }
    }, {
        "id": "theChildren",
        "type": "owl:Class",
        "rdfs:subClassOf": {
            "id": "Person"
        }
    }, {
        "id": "FaithOfTheSeven",
        "type": [
            "owl:NamedIndividual",
            "Religion"
        ],
        "rdfs:comment": "The Faith of the Seven is the main religion of the Seven Kingdoms. It is little-practiced beyond its borders. The Faith of the Seven is dominant in the south of Westeros. The only regions where it is not the majority religion are the North, where worship of the Old Gods of the Forest remains strong, and on the Iron Islands, where the local religion of the Drowned God is most widespread. There are many exceptions in all three areas, however."
    }, {
        "id": "House",
        "type": "owl:Class"
    }, {
        "id": "Westeros",
        "type": [
            "Continent",
            "owl:NamedIndividual"
        ],
        "rdfs:comment": "Westeros is a continent located in the far west of the known world. It is separated from the continent of Essos by a strip of water known as the Narrow Sea. Most of the action in Game of Thrones takes place in Westeros."
    }]
};
var commentarray = [];
mainobj["graph"].forEach(function (d) {
    if ("rdfs:comment" in d) {
        commentarray.push(d);
    }
});
var temps;
////////////////////////////
$('.clickme').click(function () {
    var foo = $(this).data("nodename");
    $(".side div .data").replaceWith('<ul class="data"></ul>');
    commentarray.forEach(function (d) {
        if (d.id === foo) {
            $('.side').toggleClass('move');
            $(".side h1").replaceWith("<h1>" + d.id + "</h1>");
            $(".side img").replaceWith('<img src="../images/' + d.id + '.jpg">');
            $(".side div .comments").replaceWith('<p class="comments">' + d["rdfs:comment"] + '</p>');
            $.each(d, function (k, v) {
                if (typeof v === 'string' && k !== "rdfs:comment" && k !== "id") {
                    $(".side div .data").append("<li>" + k + " - " + v + "</li>");
                }
                if (k === "type") {
                    $(".side div .data").append('<li class="nodetype">' + k + ' -</li>');
                    v.forEach(function (data) {
                        if (typeof data === 'string') {
                            $(".nodetype").append(" "+data);

                        }
                    });
                }

            });
        }
    });

});
