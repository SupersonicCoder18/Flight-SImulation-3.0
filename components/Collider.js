AFRAME.registerComponent("flying-birds", {
    init: function(){
        for (var i = 1; i<=20; i++){
            var id = `hurdle${i}`;
            var posx = (Math.random()*3000 + (-1000))
            var posy = (Math.random()*2 + (-1))
            var posz = (Math.random()*3000 + -1000)
            var position = {x: posx, y: posy, z: posz}
            this.flyingBirds(id, position)
        }
    },
    flyingBirds: function(id, position){
        var terrainEL = document.querySelector("#terrain")
        var birdEL = document.createElement("a-entity")
        birdEL.setAttribute("id", id)
        birdEL.setAttribute("position", position)
        birdEL.setAttribute("scale", {x: 500, y: 500, z:500})
        birdEL.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf")
        birdEL.setAttribute("animation-mixer", {})

        birdEL.setAttribute("static-body", {shape: "sphere", sphereRadius: 5})
        birdEL.setAttribute("game-play", {elementId: `#${id}`})
        terrainEL.appendChild(birdEL)
    }
})