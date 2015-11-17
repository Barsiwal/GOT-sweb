var graph = Viva.Graph.graph();
var temp;
var nodesarray=[];
var nodesr4=[];
var nodesr6=[];
var nodesg4=[];
var temparray=[];
var obj=[];
var t={};
var tarray=[];
var graphics = Viva.Graph.View.svgGraphics(),
    nodeSize = 30;
$.getJSON( "../download/got-data.json", function( data ) {
    $.each(data,function(key,val){
        graph.addNode("Thing",{size:60,color:'p'});
        if(key==="graph"){
            val.forEach(function(d){
                if(d.type==="owl:Class" ){
                    if ("rdfs:subClassOf" in d){
                        nodesarray.push(d.id);
                        nodesr4.push(d.id);
                        graph.addNode(d.id.toString(),{size:40,color:'r'});
                    }
                    else{
                        nodesarray.push(d.id);
                        nodesr6.push(d.id);
                        graph.addNode(d.id.toString(),{size:60,color:'r'});
                    }
                    }
                if(d.type.indexOf("owl:NamedIndividual")>-1){
                    nodesarray.push(d.id);
                    nodesg4.push(d.id);
                    graph.addNode(d.id.toString(),{size:40,color:'g'});
                }
            });
            val.forEach(function(d){
                if(nodesarray.indexOf(d.id)>-1&&temparray.indexOf(d.id)<0){
                    temp=d.id;
                    temparray.push(temp);
                    t.id=temp;
                }
                if(typeof d.type !== 'string')
                    d.type.forEach(function(items){
                        if(nodesarray.indexOf(items)>-1){
                            graph.addLink(temp, items);
                            tarray.push(items);
                        }

                    });
                if(nodesarray.indexOf(d.id)>-1){
                    $.each(d,function(k,v){
                        tarray.push(v);
                        if(nodesarray.indexOf(v.id)>-1){
                            graph.addLink(temp, v.id);
                            tarray.push(v.id);
                        }
                        if(v.length>-1&&typeof v !== 'string'){
//                            console.log(v);
                            v.forEach(function(i){
//                                console.log(i);
                                if(nodesarray.indexOf(i.id)>-1){
                                    graph.addLink(temp, i.id);
                                    tarray.push(i.id);
                                }
                            });
                        }
                        });
                }
                t.links=tarray;
                obj.push(t);
                });
            console.log(nodesg4);
            console.log(nodesr4);
            console.log(nodesr6);
//            console.log(temparray);

        }
    });
});
console.log(nodesarray);

nodesr4.forEach(function (items) {
    graph.addNode(items,{size:40,color:'r'});
});
nodesg4.forEach(function (items) {
    graph.addNode(items,{size:40,color:'r'});
});
//graph.addNode('Person', {
//    size: 60,
//    color: 'r'
//});
//graph.addNode('Continent', {
//    size: 60,
//    color: 'r'
//});
//graph.addNode('Sword', {
//    size: 40,
//    color: 'r'
//});
//graph.addNode('Gods', {
//    size: 40,
//    color: 'r'
//});
//graph.addNode('Castle', {
//    size: 40,
//    color: 'r'
//});
//graph.addNode('Sigil', {
//    size: 40,
//    color: 'r'
//});
//graph.addNode('Battle', {
//    size: 40,
//    color: 'r'
//});
//graph.addNode('Creature', {
//    size: 40,
//    color: 'r'
//});
//graph.addNode('House', {
//    size: 40,
//    color: 'r'
//});
//graph.addNode('WhiteWalkers', {
//    size: 40,
//    color: 'r'
//});
//graph.addNode('TheChildren', {
//    size: 40,
//    color: 'r'
//});
//graph.addNode('Wargs', {
//    size: 40,
//    color: 'r'
//});
//graph.addNode('Wildling', {
//    size: 40,
//    color: 'r'
//});
//graph.addNode('Direwolf', {
//    size: 40,
//    color: 'r'
//});
//graph.addNode('Dragon', {
//    size: 40,
//    color: 'r'
//});
//graph.addNode('ValyrianSteel', {
//    size: 40,
//    color: 'r'
//});
//graph.addNode('NormalSword', {
//    size: 40,
//    color: 'r'
//});
//graph.addNode('Winterfell', {
//    size: 40,
//    color: 'g'
//});
//graph.addNode('Harrenhall', {
//    size: 40,
//    color: 'g'
//});
//var DireWolfs = ['Ghost', 'ShaggyDog', 'Lady', 'Nymeria', 'Summer'];
//var People = ['Jon_Snow', 'Arya_Stark', 'Tyrion_Lannister', 'Denarys_Targaryen'];
//var Houses = ['HouseStark', 'HouseLannister', 'HouseTargaryen'];
//var Gods = ['ManyFacedGods', 'TheRedGods', 'TheGreatWhite', 'TheOldGods'];
//Gods.forEach(function (items) {
//    graph.addNode(items, {
//        size: 40,
//        color: 'g'
//    });
//});
//DireWolfs.forEach(function (items) {
//    graph.addNode(items, {
//        size: 40,
//        color: 'g'
//    });
//});
//Houses.forEach(function (items) {
//    graph.addNode(items, {
//        size: 40,
//        color: 'g'
//    });
//});
//People.forEach(function (items) {
//    graph.addNode(items, {
//        size: 40,
//        color: 'g'
//    });
//});
//////////////////////////////////
//var NymOwn = ['Arya_Stark'];
//var LongClawOwner = ['Jon_Snow'];
//var GhostOwner = ['Jon_Snow'];
//var DrogonOwner = ['Denarys_Targaryen'];
//var HouseTargaryen = ['Denarys_Targaryen'];
//var HouseLannister = ['Tyrion_Lannister'];
//graph.addNode('Thing', {
//    size: 60,
//    color: 'p'
//});
//graph.addNode('OathKeeper', {
//    size: 40,
//    color: 'g'
//});
//graph.addNode('Drogon', {
//    size: 40,
//    color: 'g'
//});
//graph.addNode('Westeros', {
//    size: 40,
//    color: 'g'
//});
//graph.addNode('Essos', {
//    size: 40,
//    color: 'g'
//});
//graph.addNode('DothrakiSea', {
//    size: 40,
//    color: 'g'
//});
//graph.addNode('TheNorth', {
//    size: 40,
//    color: 'g'
//});
//graph.addNode('Valyria', {
//    size: 40,
//    color: 'g'
//});
nodesr6.forEach(function (items) {
    graph.addNode(items,{size:40,color:'r'});
});
////////////////////////////////
//graph.addLink("Nymeria", "Arya_Stark");
//graph.addLink("LongClaw", "Jon_Snow");
//graph.addLink("Ghost", "Jon_Snow");
//graph.addLink("Drogon", "dragon");
//graph.addLink("Drogon", "Denarys_Targaryen");
//graph.addLink("HouseTargaryen", "Denarys_Targaryen");
//graph.addLink("HouseTargaryen", "Valyria");
//graph.addLink("HouseLannister", "Tyrion_Lannister");
//graph.addLink("ValyrianSteel", "OathKeeper");
//graph.addLink("Continent", "Westeros");
//graph.addLink("Continent", "Essos");
//graph.addLink("theNorth", "Westeros");
//graph.addLink("DothrakiSea", "Essos");
//graph.addLink("Valyria", "Essos");
////
/////////////////////////
//var WesterosPeople = ['Jon_Snow', 'Arya_Stark', 'Tyrion_Lannister', 'HouseStark', 'HouseLannister'];
//var EssosPeople = ['Denarys_Targaryen'];
//Gods.forEach(function (items) {
//    graph.addLink('Gods', items);
//});
//WesterosPeople.forEach(function (items) {
//    graph.addLink('Westeros', items);
//});
//graph.addLink("Essos", "Denarys_Targaryen");
//graph.addLink("Essos", "HouseTargaryen");
//graph.addLink("Essos", "Denarys_Targaryen");

/////////////////////////////
//var Castles = ['winterfell', 'harrenhall'];
//var Swords = ['ValyrianSteel', 'NormalSword'];
//var Persons = ['WhiteWalkers', 'theChildren', 'Wargs', 'Wildling'];
//var Creatures = ["Direwolf", "Dragon"];
//
//Houses.forEach(function (items) {
//    graph.addLink('House', items);
//});
//Castles.forEach(function (items) {
//    graph.addLink('Castle', items);
//});
//DireWolfs.forEach(function (items) {
//    graph.addLink('Direwolf', items);
//});
//Swords.forEach(function (items) {
//    graph.addLink('Sword', items);
//});
//Persons.forEach(function (items) {
//    graph.addLink('Person', items);
//});
//People.forEach(function (items) {
//    graph.addLink('Person', items);
//});
//Creatures.forEach(function (items) {
//    graph.addLink('Creature', items);
//});
//var HouseStark = ['Jon_Snow', 'Arya_Stark'];
//HouseStark.forEach(function (items) {
//    graph.addLink('HouseStark', items);
//});

graphics.node(function (node) {
    var ui = Viva.Graph.svg('g'),
        svgText = Viva.Graph.svg('text').attr('y', '-4px').text(node.id),
        img = Viva.Graph.svg('image')
        .attr('width', node.data.size)
        .attr('height', node.data.size)
        .attr('class', "clickme")
        .link('../images/' + node.data.color + '.png');

    ui.append(svgText);
    ui.append(img);
    return ui;
}).placeNode(function (nodeUI, pos) {
    nodeUI.attr('transform',
        'translate(' +
        (pos.x - nodeSize / 2) + ',' + (pos.y - nodeSize / 2) +
        ')');
});
var renderer = Viva.Graph.View.renderer(graph, {
    graphics: graphics
});
renderer.run();
