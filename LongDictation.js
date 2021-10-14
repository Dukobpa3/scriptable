// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: teal; icon-glyph: magic;
let text = await Dictation.start();
let today = new Date();
let format = new DateFormatter();
format.useShortDateStyle();
format.useShortTimeStyle();

// return text;
// 
//Script.setShortcutOutput(text);
//Script.complete();
let result = "#" + format.string(today) + "\n" + text;


runShortcut = new CallbackURL("ulysses://x-callback-url/new-sheet");
runShortcut.addParameter("text", result);
runShortcut.open();

//shortcuts://run-shortcut?name=NewDateNote&input=text&text=text
//Script.setShortcutOutput(text);
Script.complete();