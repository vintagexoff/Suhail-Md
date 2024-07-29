const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_03_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNixcbiAgICAgICAgMTgwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDQsXG4gICAgICAgIDgxLFxuICAgICAgICA2LFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDksXG4gICAgICAgIDYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgyLFxuICAgICAgICA0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NyxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDYyLFxuICAgICAgICA1LFxuICAgICAgICA3MixcbiAgICAgICAgMjA0LFxuICAgICAgICA2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDY3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyLFxuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MixcbiAgICAgICAgMTk0LFxuICAgICAgICA3NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMixcbiAgICAgICAgMTgwLFxuICAgICAgICA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY4LFxuICAgICAgICA2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDY2LFxuICAgICAgICA5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY4LFxuICAgICAgICA5NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHbk82cGxKTTZDWlIrZVFPamtqQkJ0WlZ3WVZyWjdmMkJsNVdtZnUxM2NnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMT3laMUJxeVJDQ1NWVkdJT1o5bHJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjRkZjNiMTE3LTIxOTYtNDg4ZC1iMjg5LTIzMzVhZGMyZjU4M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDIzOSxcbiAgICAgIDM2LFxuICAgICAgNjIsXG4gICAgICA4LFxuICAgICAgNzEsXG4gICAgICAxODMsXG4gICAgICA5MyxcbiAgICAgIDk5LFxuICAgICAgMTk1LFxuICAgICAgMTg4LFxuICAgICAgNjUsXG4gICAgICAxOTMsXG4gICAgICAxMjUsXG4gICAgICAxMTcsXG4gICAgICAxMzMsXG4gICAgICAxNjAsXG4gICAgICA1OCxcbiAgICAgIDI4LFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgNjQsXG4gICAgICA0NCxcbiAgICAgIDI1MixcbiAgICAgIDIwMSxcbiAgICAgIDE2NSxcbiAgICAgIDUzLFxuICAgICAgMjQyLFxuICAgICAgNjIsXG4gICAgICA3OCxcbiAgICAgIDExMSxcbiAgICAgIDQ0LFxuICAgICAgOCxcbiAgICAgIDQxLFxuICAgICAgMjMsXG4gICAgICAxNTYsXG4gICAgICAxMDMsXG4gICAgICAxMTksXG4gICAgICAxNjgsXG4gICAgICAyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDTFFCUzhGOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE1MDY0NzE2OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQzMTY0OTc1MDM0NjIyOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTcyanFNRkVPanFuN1VHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXSkR3ektYV1h0NUJvczVNQ2lkczdVdmFmUk9XZGVPM0JaaHozMkx4MWhnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBSb2dsT1l5QzEwVE1DMzJkZnJoSUd6Y0hrMi80VU4vSVRuakgyK1VwUFg2WkxvVDJOL1U5eVpLSTZyaTJMdU5kV3NPdFp2eEphNmExTGFBdFpCZEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNIQmZORTk2eUhRTHQ0aUJPTVB0VEJ0RHRUZUZvVk9TazlUNmxtYnpMNnN6cStyZzBFZ2ljamF1T2Q0dDBYVFJPRi9odEJXeWdXcWQ4ZDM2akRaSUNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNTA2NDcxNjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjgzMzcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTBaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFMFouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1aHIxY0liVGJQZERlQnlOK1BIMTVVdHZibkkyUnAvRUNSeW9UR0tUcjJNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTU4MjIwOTQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjI4MzM0MjAzMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
