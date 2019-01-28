
        function Human(name, stats, pos) {
            // incorporate a function to check each is correct
            this.name = name; // string
            this.stats = stats; // object
            this.pos = pos; // xyz array
            this.sayName = function() {
                return "Hi, I'm " + this.name;
            }
        }
        var gameState = Object.create(null);
        gameState.pc = Object.create(null);
        gameState.pc.sex = "F";
        gameState.pc.skills = { crafting: 100, melee: 100, speed: 100 };
        gameState.pc.limits = { health: 100, stamina: 100, hunger: 100, thirst: 100, oxygen: 100, weight: 0 };

        var genderize = new Vue({
            el: "#genderpicker",
            data: {
                message: "vulva"
            },
            methods: {
                toggle_gender: function() {
                    if (this.message == "penis") {
                        this.message = "vulva";
                        return gameState.pc.sex = "F";
                     } else if (this.message =="vulva") {
                         this.message = "penis";
                         return gameState.pc.sex = "M";
                     } else alert("Error in genderize");
                }
            }
        })
        var namer = new Vue({
            el: "#namer",
            data: {
                message: "name"
            },
            methods: {
                finalize_name: function() {
                    gameState.pc.name = this.message;
                }
            }
        })
        var endintro = new Vue({
            el: "#endintro",
            methods: {
                show_game: function() {
                    document.getElementById("tutorial").style.display = "block";
                    document.getElementById("gameui").style.display = "block";
                    document.getElementById("intro").style.display = "none";

                }
            }
        });

        Vue.component('status-item', {
            // ummm
            props: ['statval'],
            template: '<li>{{ statval.label }} {{ statval.val }} </li>'
        })

        var stats_display = new Vue({
            el : "#status",
            data : {
                statvalarray : [
                    { id: 0, label: "Health: ", val: gameState.pc.limits.health },
                    { id: 1, label: "Stamina: ", val: gameState.pc.limits.stamina },
                    { id: 2, label: "Hunger: ", val: gameState.pc.limits.hunger },
                    { id: 3, label: "Weight: ", val: gameState.pc.limits.weight },
                    { id: 4, label: "Oxygen: ", val: gameState.pc.limits.oxygen },
                    { id: 5, label: "Thirst: ", val: gameState.pc.limits.thirst }
                    ]
                }
            })