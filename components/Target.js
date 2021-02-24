AFRAME.registerComponent("target-ring", {
    init: function(){
        for (var i = 1; i<=20; i++){
            var id = `ring${i}`;
            var posx = (Math.random()*3000 + (-1000))
            var posy = (Math.random()*2 + (-1))
            var posz = (Math.random()*3000 + -1000)
            var position = {x: posx, y: posy, z: posz}
            this.createRings(id, position)
        }
    },
    createRings: function(id, position){
        var terrainEL = document.querySelector("#terrain")
        var ringEL = document.createElement("a-entity")
        ringEL.setAttribute("material", "color", "#ff9100");
        ringEL.setAttribute("id", id)
        ringEL.setAttribute("position", position)
        ringEL.setAttribute("geometry", {primitive: "torus", radius: 8})

        ringEL.setAttribute("static-body", {
            shape: "sphere",
            sphereRadius: 2
        });
        ringEL.setAttribute("game-play", {elementId: `#${id}`})
        terrainEL.appendChild(ringEL)
    }
})