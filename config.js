const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/rajwhatsapp/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaZ31elGE56hPfwhM10B";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaZ31elGE56hPfwhM10B" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/69lcsx.jpeg" || "https://files.catbox.moe/zzx3et.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "" 


global.devs = "994407122025" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "917439381411,994407122025,918240320724";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917439381411";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/e6TVzEU.mp4" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "994407122025,918240320724,917439381411";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_30_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNixcbiAgICAgICAgMTQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjExLFxuICAgICAgICA2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NSxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg4LFxuICAgICAgICAxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU1LFxuICAgICAgICA5NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUyLFxuICAgICAgICA0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTgwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKcGxMbWtEa08vRXZoYytubTJTaUtDckplb2VPZ2p6ZitUVGt2SWZaMEJJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODI0MDMyMDcyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzJEODc1RkJEOTdCMDlGRTAxMDVERDYyRDZFRTk2M0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMjI3NDIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4MjQwMzIwNzI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJERTNBNkVEOUMxQTI5MkZCMTQxNTBGNzkzRDdFQkJEOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEyMjc0MjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaW9SOXV3ZUFTNzJZREZaNFh5aFJvZ1wiLFxuICBcInBob25lSWRcIjogXCI2NjIzZjAyOC1mY2Q3LTQ0ODMtODQ4OS00NTBmMDYyYWJlNDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICAyOCxcbiAgICAgIDU0LFxuICAgICAgMTcyLFxuICAgICAgNDEsXG4gICAgICAxNzAsXG4gICAgICAxMTMsXG4gICAgICAyNDMsXG4gICAgICAxODAsXG4gICAgICAyNDIsXG4gICAgICA4MCxcbiAgICAgIDI5LFxuICAgICAgMTU5LFxuICAgICAgMTg1LFxuICAgICAgMzksXG4gICAgICA1NSxcbiAgICAgIDQxLFxuICAgICAgMTE5LFxuICAgICAgOTksXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTgxLFxuICAgICAgMTE3LFxuICAgICAgMTY1LFxuICAgICAgMjU0LFxuICAgICAgMjI0LFxuICAgICAgMTQ5LFxuICAgICAgMTM2LFxuICAgICAgMjQ2LFxuICAgICAgMjI3LFxuICAgICAgMTYzLFxuICAgICAgMTg0LFxuICAgICAgMTAxLFxuICAgICAgMTU0LFxuICAgICAgMjQwLFxuICAgICAgMzcsXG4gICAgICAxNjksXG4gICAgICAxMTAsXG4gICAgICA2MSxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEVHTTRTVEJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxODI0MDMyMDcyNDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTkyODg4NzQ2OTY3MzM6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPVEwyd01RbGQ3QnVRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlE3U2ovcjBZMlQ0RHZmVlRtbWVCRVdqcXZaNGVvUFJuODdWRmdVWTdobVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWHZiTTFOaXl4OHJGR2ZLQ1dNUllVMENCWFdITU1DaHl4UWdpcUJNWFE4S3RvY1g5MFBneUY2WmhxOVJZbE9vc1ROeGtJeEZTSDJ6ZXRhRU13VWVhRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMTlhMG5TNkVKdTlaWTEwNnFtSFFGR1hPaVF6M1h3Y3BMSjc3N3hNek9GMVh4Mk43WVFLRVExamlDamsvTHFQaktVV0VQd05vdWVDOE9kdkkzYjJXaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE4MjQwMzIwNzI0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMjI3NDE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHJtXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIcm0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtZ29DTjR5N0o0MU1oYS9JbWVlOWd5NFptWldodGxBbUV3MTJITXVhVGl3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc3OTIxMDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTIyNzQyMDE1MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "+917439381411",
  packname: process.env.PACK_NAME || "SUVO-BOT-OFC",
  botname : process.env.BOT_NAME  || "SUVO-BOT-OFC",
  ownername:process.env.OWNER_NAME|| "KING-SUVO",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
