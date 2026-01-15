const { EmbedBuilder } = require("discord.js");

const embed = new EmbedBuilder()
  .setTitle("LSPD Promotion")
  .setDescription("New Officer Promotion")
  .setImage("https://link-image.png")
  .setColor(0xc9a227);

channel.send({ embeds: [embed] });
