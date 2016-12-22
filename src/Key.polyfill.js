(() => {

  "use strict"

  if ("key" in KeyboardEvent.prototype) return

  const keys = {
    3 : "Cancel",
    6 : "Help",
    8 : "Backspace",
    9 : "Tab",
    12 : "Clear",
    13 : "Enter",
    16 : "Shift",
    17 : "Control",
    18 : "Alt",
    19 : "Pause",
    20 : "CapsLock",
    27 : "Escape",
    28 : "Convert",
    29 : "NonConvert",
    30 : "Accept",
    31 : "ModeChange",
    32 : " ",
    33 : "PageUp",
    34 : "PageDown",
    35 : "End",
    36 : "Home",
    37 : "ArrowLeft",
    38 : "ArrowUp",
    39 : "ArrowRight",
    40 : "ArrowDown",
    41 : "Select",
    42 : "Print",
    43 : "Execute",
    44 : "PrintScreen",
    45 : "Insert",
    46 : "Delete",
    48 : ["0", ")"],
    49 : ["1", "!"],
    50 : ["2", "@"],
    51 : ["3", "#"],
    52 : ["4", "$"],
    53 : ["5", "%"],
    54 : ["6", "^"],
    55 : ["7", "&"],
    56 : ["8", "*"],
    57 : ["9", "("],
    91 : "OS",
    93 : "ContextMenu",
    144 : "NumLock",
    145 : "ScrollLock",
    181 : "VolumeMute",
    182 : "VolumeDown",
    183 : "VolumeUp",
    186 : [";", ":"],
    187 : ["=", "+"],
    188 : [",", "<"],
    189 : ["-", "_"],
    190 : [".", ">"],
    191 : ["/", "?"],
    192 : ["`", "~"],
    219 : ["[", "{"],
    220 : ["\\", "|"],
    221 : ["]", "}"],
    222 : ["'", "\""],
    224 : "Meta",
    225 : "AltGraph",
    246 : "Attn",
    247 : "CrSel",
    248 : "ExSel",
    249 : "EraseEof",
    250 : "Play",
    251 : "ZoomOut"
  }

  for (let i = 1; i < 25; i++) keys[111 + i] = "F" + i

  for (let i = 65; i < 91; i++) {

    const letter = String.fromCharCode(i)

    keys[i] = [letter.toLowerCase(), letter.toUpperCase()]

  }

  Object.defineProperty(KeyboardEvent.prototype, "key", {

    get() {

      let key = keys[this.which || this.keyCode]

      if (Array.isArray(key)) key = key[Number(this.shiftKey)]

      return key

    }

  })

})()
