// MIT license

class ClipBoard {
    constructor(runtime) {

    }

    getInfo() {
        return {
            "id": "ClipBoard",
            "name": "ClipBoard",
            "blocks": [{
                    "opcode": "axisValue",
                    "blockType": "reporter",
                    "text": "axis [b] of pad [i] value",
                    "arguments": {
                        "b": {
                            "type": "number",
                            "defaultValue": "1"
                        },
                        "i": {
                            "type": "number",
                            "defaultValue": "1",
                            "menu": "padMenu"
                        },
                    },
                },
                {
                    "opcode": "writeCB",
                    "blockType": "command",
                    "text": "Copy [t]",
                    "arguments": {
                        "s": {
                            "type": "text",
                            "defaultValue": "Hello"
                        },
                    },
                },
            ],
            "menus": {}
        };
    }

    buttonDown({ b, i }) {
        return this.gamepads[i - 1].getButton(this.runtime.currentMSecs, b - 1)
    }

    writeCB({ t }) {
        var tempInput = document.createElement("input");
        tempInput.value = t;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }
}
Scratch.extensions.register(new ClipBoard())