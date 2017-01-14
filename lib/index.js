"use strict"

Object.defineProperty(exports, "__esModule", { value : true })

const Menu = require("./Menu")
const ContextMenu = require("./ContextMenu")
const Menubar = require("./Menubar")
const MenuItem = require("./MenuItem")
const Divider = require("./Divider")

Menu.Item = MenuItem
Menu.bar = Menubar
Menu.Divider = Divider
Menu.Context = ContextMenu

exports.default = Menu
