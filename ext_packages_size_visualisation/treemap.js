(function init() {
    var a = new $jit.TM.Squarified({
        injectInto: "map",
        titleHeight: 25,
        animate: true,
        levelsToShow: 1,
        cushion: true,
        offset: 0.3,
        Node: {
            type: 'rectangle' 
        },
        Label: {
            type: "HTML"
        },
        hideLabels: false,
        Events: {
            enable: true,
            onClick: function (c, e) {
                if (c) {
                    a.enter(c)
                }
            },
            onRightClick: function () {
                a.out()
            }
        },
        onBeforePlotNode: function (c) {
            if (c.getSubnodes([1, 1]).length === 0) {
                c.setData("color", "#377EB8");
            } else if (c._depth !== 0) {
                c.setData("color", "#D3D3D3");
            }
        },
    
        duration: 500,
        onCreateLabel: function (e, d) {
            e.innerHTML = d.name;
            var c = e.style;
            c.display = ""
        }
    });
    a.loadJSON(kTree);
    a.refresh();

    var back = $jit.id('back');
    $jit.util.addEvent(back, 'click', function() {
        a.out();
    });
})();
