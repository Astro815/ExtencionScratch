class js {

    getInfo() {
        return {
            id: '123456',
            name: 'Javascript',
            blocks: [{
                    opcode: 'js',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Javascript [text]',
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'console.log("Hello World!");'
                        }
                    }
                },

                {
                    opcode: 'jsr',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Javascript [text]',
                    arguments: {
                        text: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1+1'
                        }
                    }
                },

                {
                    opcode: 'cb',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set Cursor to [cur]',
                    arguments: {
                        cur: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'pointer',
                            menu: "cursors"
                        }
                    }
                }


            ],
            "menus": {
                "cursors": {
                    acceptReporters: true,
                    items: [{ text: "default", value: "default" }, { text: "pointer", value: "pointer" }, { text: "crosshair", value: "crosshair" }, { text: "move", value: "move" }, { text: "text", value: "text" }, { text: "wait", value: "wait" }, { text: "progress", value: "progress" }, { text: "help", value: "help" }],
                }
            }
        };

    }

    js(args) {
        eval(args.text);
        return 0;
    };

    jsr(args) {
        var response = eval(args.text);
        return response;
    };

    cb(args) {
        eval("document.body.querySelector('.stage_stage_1fD7k.box_box_2jjDp').style.cursor = " + args.cur + ";");
        return 0;
    }

}

Scratch.extensions.register(new js());